const fs = require("node:fs");
const assert = require("node:assert/strict");
const {
  initializeTestEnvironment,
  assertSucceeds,
  assertFails
} = require("@firebase/rules-unit-testing");
const {
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  serverTimestamp
} = require("firebase/firestore");

async function main() {
  const projectId = "ipem146js";
  const testEnv = await initializeTestEnvironment({
    projectId,
    firestore: {
      host: "127.0.0.1",
      port: 8080,
      rules: fs.readFileSync("reglas.txt", "utf8")
    }
  });

  const uid = "student-1";
  const teacherUid = "teacher-1";
  const teacherEmail = "docente@example.com";

  await testEnv.withSecurityRulesDisabled(async context => {
    const db = context.firestore();
    await setDoc(doc(db, "estudiantes", uid), {
      uid,
      email: "student@example.com",
      estadoCuenta: "activo"
    });
    await setDoc(doc(db, "docentesAutorizados", teacherEmail), {
      email: teacherEmail,
      activo: true
    });
    await setDoc(doc(db, "estudiantes", uid, "comentariosDocente", "comentario-1"), {
      texto: "Revisá la condición del if.",
      autor: teacherEmail,
      creadoEn: new Date()
    });
  });

  const studentDb = testEnv.authenticatedContext(uid, {
    email: "student@example.com",
    email_verified: true
  }).firestore();
  const otherDb = testEnv.authenticatedContext("student-2", {
    email: "other@example.com",
    email_verified: true
  }).firestore();
  const teacherDb = testEnv.authenticatedContext(teacherUid, {
    email: teacherEmail,
    email_verified: true
  }).firestore();

  const metaRef = doc(studentDb, "estudiantes", uid, "colaboracionCodigo", "sec-3");
  await assertSucceeds(setDoc(metaRef, {
    uid,
    sectionId: "sec-3",
    semilla: "AQID",
    creadoEn: serverTimestamp(),
    creadoPor: "student@example.com",
    actualizadoEn: serverTimestamp()
  }));
  await assertSucceeds(setDoc(metaRef, {
    uid,
    sectionId: "sec-3",
    semilla: "AQID",
    creadoEn: serverTimestamp(),
    creadoPor: "student@example.com",
    actualizadoEn: serverTimestamp(),
    actualizadoPor: teacherEmail,
    modoCooperacionActiva: true,
    edicionCooperativaPausada: false
  }, { merge: true }));

  const updateStudentRef = doc(studentDb, "estudiantes", uid, "colaboracionCodigo", "sec-3", "actualizaciones", "u-student");
  await assertSucceeds(setDoc(updateStudentRef, {
    id: "u-student",
    uid,
    sectionId: "sec-3",
    update: "AQID",
    clienteId: "student-client",
    rol: "estudiante",
    autorUid: uid,
    autorEmail: "student@example.com",
    creadoEn: serverTimestamp()
  }));

  const updateTeacherRef = doc(teacherDb, "estudiantes", uid, "colaboracionCodigo", "sec-3", "actualizaciones", "u-teacher");
  await assertSucceeds(setDoc(updateTeacherRef, {
    id: "u-teacher",
    uid,
    sectionId: "sec-3",
    update: "BAUG",
    clienteId: "teacher-client",
    rol: "docente",
    autorUid: teacherUid,
    autorEmail: teacherEmail,
    creadoEn: serverTimestamp()
  }));

  const presenceStudentRef = doc(studentDb, "estudiantes", uid, "colaboracionCodigo", "sec-3", "presencia", "student-client");
  await assertSucceeds(setDoc(presenceStudentRef, {
    clienteId: "student-client",
    uid,
    sectionId: "sec-3",
    rol: "estudiante",
    nombre: "Estudiante",
    autorUid: uid,
    cursorInicio: 2,
    cursorFin: 4,
    escribiendo: true,
    activoEn: serverTimestamp()
  }));

  const messageTeacherRef = doc(teacherDb, "estudiantes", uid, "colaboracionCodigo", "sec-3", "mensajes", "m-teacher");
  await assertSucceeds(setDoc(messageTeacherRef, {
    id: "m-teacher",
    uid,
    sectionId: "sec-3",
    texto: "Revisá la condición.",
    rol: "docente",
    autorUid: teacherUid,
    autorNombre: "Docente",
    creadoEn: serverTimestamp()
  }));

  const contributionStudentRef = doc(studentDb, "estudiantes", uid, "colaboracionCodigo", "sec-3", "historialAportes", "a-student");
  await assertSucceeds(setDoc(contributionStudentRef, {
    id: "a-student",
    uid,
    sectionId: "sec-3",
    rol: "estudiante",
    autorUid: uid,
    autorNombre: "Estudiante",
    textoAgregado: "const total = 2;",
    caracteresAgregados: 16,
    caracteresEliminados: 0,
    creadoEn: serverTimestamp()
  }));

  await assertSucceeds(getDoc(messageTeacherRef));
  await assertSucceeds(getDoc(contributionStudentRef));
  await assertFails(setDoc(doc(otherDb, "estudiantes", uid, "colaboracionCodigo", "sec-3", "mensajes", "m-other"), {
    id: "m-other",
    uid,
    sectionId: "sec-3",
    texto: "No autorizado",
    rol: "estudiante",
    autorUid: "student-2",
    autorNombre: "Otro",
    creadoEn: serverTimestamp()
  }));

  await assertSucceeds(getDoc(doc(studentDb, "estudiantes", uid, "comentariosDocente", "comentario-1")));
  await assertFails(deleteDoc(doc(studentDb, "estudiantes", uid, "comentariosDocente", "comentario-1")));
  await assertFails(getDoc(doc(otherDb, "estudiantes", uid, "comentariosDocente", "comentario-1")));
  await assertSucceeds(getDoc(doc(teacherDb, "estudiantes", uid, "colaboracionCodigo", "sec-3")));

  await testEnv.cleanup();
  assert.ok(true);
  console.log("OK: reglas CRDT y comentarios verificadas.");
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
