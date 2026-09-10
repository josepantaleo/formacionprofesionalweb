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

const projectId = "ipem146js";
const uid = "student-1";
const otherUid = "student-2";
const teacherUid = "teacher-1";
const teacherEmail = "docente@example.com";
const principalUid = "principal-admin-1";
const principalEmail = "ipem146centenario@gmail.com";
const sectionId = "sec-3";

function updatePayload(id, rol, autorUid, autorEmail) {
  return {
    id,
    uid,
    sectionId,
    update: "AQID",
    clienteId: `${rol}-client`,
    rol,
    autorUid,
    autorEmail,
    creadoEn: serverTimestamp()
  };
}

function contributionPayload(id, rol, autorUid, autorEmail, autorNombre) {
  return {
    id,
    uid,
    sectionId,
    rol,
    autorUid,
    autorEmail,
    autorNombre,
    textoAgregado: "const total = 2;",
    caracteresAgregados: 16,
    caracteresEliminados: 0,
    inicio: 0,
    eliminado: "",
    insertado: "const total = 2;",
    lineaInicio: 1,
    lineaFin: 1,
    tipo: "edicion",
    revierteId: "",
    creadoMs: Date.now(),
    creadoEn: serverTimestamp()
  };
}

function messagePayload(id, rol, autorUid, autorNombre, texto) {
  return {
    id,
    uid,
    sectionId,
    texto,
    rol,
    autorUid,
    autorNombre,
    creadoMs: Date.now(),
    creadoEn: serverTimestamp()
  };
}

async function main() {
  const testEnv = await initializeTestEnvironment({
    projectId,
    firestore: {
      host: "127.0.0.1",
      port: 8080,
      rules: fs.readFileSync("reglas.txt", "utf8")
    }
  });

  try {
    await testEnv.clearFirestore();
    await testEnv.withSecurityRulesDisabled(async context => {
      const db = context.firestore();
      await setDoc(doc(db, "estudiantes", uid), {
        uid,
        email: "student@example.com",
        estadoCuenta: "activo"
      });
      await setDoc(doc(db, "estudiantes", otherUid), {
        uid: otherUid,
        email: "other@example.com",
        estadoCuenta: "activo"
      });
      await setDoc(doc(db, "docentesAutorizados", teacherEmail), {
        email: teacherEmail,
        activo: true
      });
      await setDoc(doc(
        db,
        "estudiantes",
        uid,
        "colaboracionCodigo",
        sectionId,
        "historialAportes",
        "legacy-contribution"
      ), contributionPayload(
        "legacy-contribution",
        "estudiante",
        uid,
        "student@example.com",
        "Estudiante"
      ));
    });

    const studentDb = testEnv.authenticatedContext(uid, {
      email: "student@example.com",
      email_verified: true
    }).firestore();
    const otherDb = testEnv.authenticatedContext(otherUid, {
      email: "other@example.com",
      email_verified: true
    }).firestore();
    const teacherDb = testEnv.authenticatedContext(teacherUid, {
      email: teacherEmail,
      email_verified: true
    }).firestore();
    const principalDb = testEnv.authenticatedContext(principalUid, {
      email: principalEmail,
      email_verified: true
    }).firestore();
    const anonymousDb = testEnv.unauthenticatedContext().firestore();

    const metaStudentRef = doc(studentDb, "estudiantes", uid, "colaboracionCodigo", sectionId);
    const metaTeacherRef = doc(teacherDb, "estudiantes", uid, "colaboracionCodigo", sectionId);

    await assertSucceeds(setDoc(metaStudentRef, {
      uid,
      sectionId,
      semilla: "AQID",
      creadoEn: serverTimestamp(),
      creadoPor: "student@example.com",
      actualizadoEn: serverTimestamp()
    }));
    await assertFails(getDoc(doc(otherDb, "estudiantes", uid, "colaboracionCodigo", sectionId)));
    await assertFails(getDoc(doc(anonymousDb, "estudiantes", uid, "colaboracionCodigo", sectionId)));
    await assertSucceeds(getDoc(metaTeacherRef));

    const teacherBeforeConsent = doc(
      teacherDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "actualizaciones",
      "teacher-before-consent"
    );
    await assertFails(setDoc(
      teacherBeforeConsent,
      updatePayload("teacher-before-consent", "docente", teacherUid, teacherEmail)
    ));
    await assertFails(getDoc(doc(
      teacherDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "presencia",
      "presence-before-consent"
    )));

    await assertSucceeds(setDoc(metaTeacherRef, {
      modoCooperacionActiva: true,
      edicionCooperativaPausada: false,
      estadoConsentimiento: "aceptado",
      objetivoCooperacion: "Revisar el razonamiento y acordar el siguiente paso.",
      solicitadoPor: "Docente",
      solicitudEn: serverTimestamp(),
      actualizadoEn: serverTimestamp(),
      actualizadoPor: teacherEmail
    }, { merge: true }));

    await assertFails(setDoc(metaStudentRef, {
      modoCooperacionActiva: false,
      edicionCooperativaPausada: true,
      estadoConsentimiento: "finalizado",
      actualizadoEn: serverTimestamp(),
      actualizadoPor: "student@example.com"
    }, { merge: true }));

    await assertFails(setDoc(metaTeacherRef, {
      modoCooperacionActiva: true,
      edicionCooperativaPausada: true,
      estadoConsentimiento: "pendiente",
      objetivoCooperacion: "No debe reiniciar una cooperación ya aceptada.",
      solicitadoPor: "Docente",
      solicitudEn: serverTimestamp(),
      actualizadoEn: serverTimestamp(),
      actualizadoPor: teacherEmail
    }, { merge: true }));

    const studentUpdateRef = doc(
      studentDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "actualizaciones",
      "student-accepted"
    );
    const teacherUpdateRef = doc(
      teacherDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "actualizaciones",
      "teacher-accepted"
    );
    await assertSucceeds(setDoc(
      studentUpdateRef,
      updatePayload("student-accepted", "estudiante", uid, "student@example.com")
    ));
    await assertSucceeds(setDoc(
      teacherUpdateRef,
      updatePayload("teacher-accepted", "docente", teacherUid, teacherEmail)
    ));

    await assertSucceeds(setDoc(metaTeacherRef, {
      edicionCooperativaPausada: true,
      actualizadoEn: serverTimestamp(),
      actualizadoPor: teacherEmail
    }, { merge: true }));

    await assertFails(setDoc(doc(
      studentDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "actualizaciones",
      "student-paused"
    ), updatePayload("student-paused", "estudiante", uid, "student@example.com")));
    await assertFails(setDoc(doc(
      teacherDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "actualizaciones",
      "teacher-paused"
    ), updatePayload("teacher-paused", "docente", teacherUid, teacherEmail)));

    await assertSucceeds(setDoc(metaTeacherRef, {
      edicionCooperativaPausada: false,
      actualizadoEn: serverTimestamp(),
      actualizadoPor: teacherEmail
    }, { merge: true }));

    const contributionStudentRef = doc(
      studentDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "historialAportes",
      "student-contribution"
    );
    await assertFails(setDoc(
      contributionStudentRef,
      contributionPayload(
        "student-contribution",
        "estudiante",
        uid,
        "student@example.com",
        "Estudiante"
      )
    ));
    await assertFails(setDoc(doc(
      studentDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "historialAportes",
      "missing-author"
    ), contributionPayload(
      "missing-author",
      "estudiante",
      uid,
      "student@example.com",
      "Estudiante"
    )));

    const presenceStudentRef = doc(
      studentDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "presencia",
      "student-client"
    );
    await assertSucceeds(setDoc(presenceStudentRef, {
      clienteId: "student-client",
      uid,
      sectionId,
      rol: "estudiante",
      nombre: "Estudiante",
      autorUid: uid,
      cursorInicio: 2,
      cursorFin: 4,
      escribiendo: true,
      activoEn: serverTimestamp()
    }));
    await assertFails(setDoc(doc(
      otherDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "presencia",
      "student-client"
    ), {
      clienteId: "student-client",
      uid,
      sectionId,
      rol: "estudiante",
      nombre: "Intruso",
      autorUid: otherUid,
      cursorInicio: 0,
      cursorFin: 0,
      escribiendo: false,
      activoEn: serverTimestamp()
    }, { merge: true }));
    await assertSucceeds(deleteDoc(presenceStudentRef));

    const teacherMessageRef = doc(
      teacherDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "mensajes",
      "teacher-message"
    );
    await assertSucceeds(setDoc(
      teacherMessageRef,
      messagePayload("teacher-message", "docente", teacherUid, "Docente", "Revisá la condición.")
    ));
    const teacherMessageStudentRef = doc(
      studentDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "mensajes",
      "teacher-message"
    );
    await assertSucceeds(setDoc(teacherMessageStudentRef, {
      entregadoEstudianteEn: serverTimestamp()
    }, { merge: true }));
    await assertSucceeds(setDoc(teacherMessageStudentRef, {
      leidoEstudianteEn: serverTimestamp()
    }, { merge: true }));
    await assertFails(setDoc(doc(
      otherDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "mensajes",
      "teacher-message"
    ), {
      leidoEstudianteEn: serverTimestamp()
    }, { merge: true }));

    const studentMessageRef = doc(
      studentDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "mensajes",
      "student-message"
    );
    await assertSucceeds(setDoc(
      studentMessageRef,
      messagePayload("student-message", "estudiante", uid, "Estudiante", "¿Está bien así?")
    ));
    await assertSucceeds(setDoc(doc(
      teacherDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "mensajes",
      "student-message"
    ), {
      entregadoDocenteEn: serverTimestamp()
    }, { merge: true }));
    await assertSucceeds(setDoc(doc(
      teacherDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "mensajes",
      "student-message"
    ), {
      leidoDocenteEn: serverTimestamp()
    }, { merge: true }));
    await assertFails(deleteDoc(studentMessageRef));
    await assertFails(deleteDoc(doc(
      teacherDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "mensajes",
      "student-message"
    )));

    await assertSucceeds(setDoc(metaTeacherRef, {
      modoCooperacionActiva: false,
      edicionCooperativaPausada: true,
      estadoConsentimiento: "finalizado",
      actualizadoEn: serverTimestamp(),
      actualizadoPor: teacherEmail
    }, { merge: true }));
    await assertFails(getDoc(presenceStudentRef));
    await assertSucceeds(setDoc(doc(
      studentDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "mensajes",
      "student-reply-after-finalization"
    ), messagePayload(
      "student-reply-after-finalization",
      "estudiante",
      uid,
      "Estudiante",
      "Recibí el mensaje y continúo trabajando."
    )));

    await assertSucceeds(setDoc(doc(
      studentDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "actualizaciones",
      "student-individual"
    ), updatePayload("student-individual", "estudiante", uid, "student@example.com")));
    await assertFails(setDoc(doc(
      teacherDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "actualizaciones",
      "teacher-after-withdraw"
    ), updatePayload("teacher-after-withdraw", "docente", teacherUid, teacherEmail)));

    const legacyContributionStudentRef = doc(
      studentDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "historialAportes",
      "legacy-contribution"
    );
    const legacyContributionTeacherRef = doc(
      teacherDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "historialAportes",
      "legacy-contribution"
    );
    const legacyContributionPrincipalRef = doc(
      principalDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "historialAportes",
      "legacy-contribution"
    );
    await assertFails(getDoc(legacyContributionStudentRef));
    await assertFails(getDoc(legacyContributionTeacherRef));
    await assertFails(deleteDoc(doc(
      teacherDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      sectionId,
      "historialAportes",
      "student-contribution"
    )));
    await assertSucceeds(getDoc(legacyContributionPrincipalRef));
    await assertSucceeds(deleteDoc(legacyContributionPrincipalRef));
    const deletedLegacyContribution = await assertSucceeds(
      getDoc(legacyContributionPrincipalRef)
    );
    assert.equal(deletedLegacyContribution.exists(), false);
    await assertFails(deleteDoc(metaTeacherRef));

    const rejectedSection = "sec-rejected";
    const rejectedStudentMeta = doc(
      studentDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      rejectedSection
    );
    const rejectedTeacherMeta = doc(
      teacherDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      rejectedSection
    );
    await testEnv.withSecurityRulesDisabled(async context => {
      await setDoc(doc(
        context.firestore(),
        "estudiantes",
        uid,
        "colaboracionCodigo",
        rejectedSection
      ), {
        uid,
        sectionId: rejectedSection,
        semilla: "AQID",
        creadoEn: serverTimestamp(),
        creadoPor: "student@example.com",
        actualizadoEn: serverTimestamp(),
        actualizadoPor: "student@example.com",
        modoCooperacionActiva: false,
        edicionCooperativaPausada: true,
        estadoConsentimiento: "rechazado",
        objetivoCooperacion: "Sesion antigua rechazada.",
        solicitadoPor: "Docente",
        solicitudEn: serverTimestamp(),
        respuestaEstudianteEn: serverTimestamp()
      });
    });
    await assertSucceeds(setDoc(rejectedTeacherMeta, {
      modoCooperacionActiva: true,
      edicionCooperativaPausada: false,
      estadoConsentimiento: "aceptado",
      objetivoCooperacion: "Acompañar la revisión de la segunda actividad.",
      solicitadoPor: "Docente",
      solicitudEn: serverTimestamp(),
      actualizadoEn: serverTimestamp(),
      actualizadoPor: teacherEmail
    }, { merge: true }));
    await assertFails(setDoc(rejectedStudentMeta, {
      modoCooperacionActiva: false,
      edicionCooperativaPausada: true,
      estadoConsentimiento: "rechazado",
      respuestaEstudianteEn: serverTimestamp(),
      actualizadoEn: serverTimestamp(),
      actualizadoPor: "student@example.com"
    }, { merge: true }));
    await assertSucceeds(setDoc(doc(
      studentDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      rejectedSection,
      "actualizaciones",
      "student-after-reject"
    ), {
      ...updatePayload("student-after-reject", "estudiante", uid, "student@example.com"),
      sectionId: rejectedSection
    }));
    await assertSucceeds(setDoc(doc(
      teacherDb,
      "estudiantes",
      uid,
      "colaboracionCodigo",
      rejectedSection,
      "actualizaciones",
      "teacher-after-reject"
    ), {
      ...updatePayload("teacher-after-reject", "docente", teacherUid, teacherEmail),
      sectionId: rejectedSection
    }));

    assert.ok(true);
    console.log("OK: cooperacion directa, pausa, CRDT, presencia, chat y limpieza verificados.");
  } finally {
    await testEnv.cleanup();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
