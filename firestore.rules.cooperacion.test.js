const {
  initializeTestEnvironment,
  assertSucceeds,
  assertFails,
} = require("@firebase/rules-unit-testing");
const {
  doc,
  setDoc,
  updateDoc,
  addDoc,
  collection,
  getFirestore,
  Timestamp,
} = require("firebase/firestore");
const fs = require("fs");
const path = require("path");

const PROJECT_ID = "formacion-profesional-rules-test";
let testEnv;

const now = Timestamp.fromDate(new Date("2026-09-28T12:00:00Z"));
const studentUid = "student-1";
const teacherUid = "teacher-1";
const sectionId = "seccion-1";
const teacherEmail = "docente@example.com";

function studentDb() {
  return getFirestore(testEnv.authenticatedContext(studentUid, {
    email: "alumno@example.com",
    email_verified: true,
  }));
}

function teacherDb() {
  return getFirestore(testEnv.authenticatedContext(teacherUid, {
    email: teacherEmail,
    email_verified: true,
  }));
}

function collabRef(db) {
  return doc(db, "estudiantes", studentUid, "colaboracionCodigo", sectionId);
}

function baseCollab(overrides = {}) {
  return {
    uid: studentUid,
    sectionId,
    semilla: "seed",
    creadoEn: now,
    creadoPor: "alumno@example.com",
    actualizadoEn: now,
    actualizadoPor: "alumno@example.com",
    modoCooperacionActiva: false,
    edicionCooperativaPausada: true,
    estadoConsentimiento: "pendiente",
    objetivoCooperacion: "Ayuda",
    solicitadoPor: "alumno@example.com",
    solicitudEn: now,
    respondidoEn: null,
    respondidoPor: "",
    motivoRechazo: "",
    ...overrides,
  };
}

async function seedBase() {
  await testEnv.withSecurityRulesDisabled(async (context) => {
    const db = context.firestore();
    await setDoc(doc(db, "estudiantes", studentUid), {
      uid: studentUid,
      email: "alumno@example.com",
      estadoCuenta: "activo",
      emailVerificado: true,
    });
    await setDoc(doc(db, "docentesAutorizados", teacherEmail), {
      email: teacherEmail,
      activo: true,
      rol: "docente",
    });
    await setDoc(collabRef(db), baseCollab());
  });
}

beforeEach(async () => {
  testEnv = await initializeTestEnvironment({
    projectId: PROJECT_ID,
    firestore: {
      rules: fs.readFileSync(
        path.join(__dirname, "REGLAS.TXT.corregidas"),
        "utf8"
      ),
    },
  });
  await seedBase();
});

afterEach(async () => {
  await testEnv.cleanup();
});

test("un estudiante no puede aceptar su propia solicitud", async () => {
  const db = studentDb();
  await assertFails(updateDoc(collabRef(db), {
    estadoConsentimiento: "aceptado",
    modoCooperacionActiva: true,
    edicionCooperativaPausada: false,
    respondidoEn: now,
    respondidoPor: "alumno@example.com",
    actualizadoEn: now,
    actualizadoPor: "alumno@example.com",
  }));
});

test("solo un docente autorizado puede aceptar", async () => {
  const db = teacherDb();
  await assertSucceeds(updateDoc(collabRef(db), {
    estadoConsentimiento: "aceptado",
    modoCooperacionActiva: true,
    edicionCooperativaPausada: false,
    respondidoEn: now,
    respondidoPor: teacherEmail,
    actualizadoEn: now,
    actualizadoPor: teacherEmail,
    motivoRechazo: "",
  }));
});

test("Yjs se rechaza cuando la cooperacion esta pausada", async () => {
  const db = studentDb();
  await assertFails(setDoc(doc(
    db,
    "estudiantes", studentUid,
    "colaboracionCodigo", sectionId,
    "actualizaciones", "u-1"
  ), {
    id: "u-1",
    uid: studentUid,
    sectionId,
    update: "AQID",
    clienteId: "client-1",
    rol: "estudiante",
    autorUid: studentUid,
    autorEmail: "alumno@example.com",
    creadoEn: now,
  }));
});

test("Yjs se permite tras aprobacion docente", async () => {
  await assertSucceeds(updateDoc(collabRef(teacherDb()), {
    estadoConsentimiento: "aceptado",
    modoCooperacionActiva: true,
    edicionCooperativaPausada: false,
    respondidoEn: now,
    respondidoPor: teacherEmail,
    actualizadoEn: now,
    actualizadoPor: teacherEmail,
    motivoRechazo: "",
  }));
  const db = studentDb();
  await assertSucceeds(setDoc(doc(
    db,
    "estudiantes", studentUid,
    "colaboracionCodigo", sectionId,
    "actualizaciones", "u-2"
  ), {
    id: "u-2",
    uid: studentUid,
    sectionId,
    update: "AQID",
    clienteId: "client-1",
    rol: "estudiante",
    autorUid: studentUid,
    autorEmail: "alumno@example.com",
    creadoEn: now,
  }));
});

test("mensajes y presencia se rechazan fuera de una colaboracion activa", async () => {
  const db = studentDb();
  await assertFails(addDoc(collection(
    db,
    "estudiantes", studentUid,
    "colaboracionCodigo", sectionId,
    "mensajes"
  ), {
    id: "m-1",
    uid: studentUid,
    sectionId,
    texto: "hola",
    rol: "estudiante",
    autorUid: studentUid,
    autorNombre: "Alumno",
    creadoMs: 1,
    creadoEn: now,
  }));
  await assertFails(setDoc(doc(
    db,
    "estudiantes", studentUid,
    "colaboracionCodigo", sectionId,
    "presencia", "client-1"
  ), {
    clienteId: "client-1",
    uid: studentUid,
    sectionId,
    rol: "estudiante",
    nombre: "Alumno",
    autorUid: studentUid,
    cursorInicio: 0,
    cursorFin: 0,
    escribiendo: false,
    activoEn: now,
  }));
});

