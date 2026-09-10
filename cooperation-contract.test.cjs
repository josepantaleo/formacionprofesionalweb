const fs = require("node:fs");
const assert = require("node:assert/strict");

const html = fs.readFileSync("actividad.html", "utf8");
const firebase = fs.readFileSync("actividad-firebase.js", "utf8");
const improvements = fs.readFileSync("mejoras-seguimiento.js", "utf8");
const rules = fs.readFileSync("reglas.txt", "utf8");

function extractRuleBlock(marker) {
  const start = rules.indexOf(marker);
  assert.ok(start >= 0, `Falta ${marker}`);
  const opening = rules.indexOf("{", start + marker.length);
  let depth = 0;
  for (let index = opening; index < rules.length; index++) {
    if (rules[index] === "{") depth++;
    if (rules[index] === "}") {
      depth--;
      if (depth === 0) return rules.slice(start, index + 1);
    }
  }
  throw new Error(`Bloque incompleto para ${marker}`);
}

[
  "solicitarCooperacion",
  "responderConsentimiento",
  "retirarConsentimiento",
  "establecerPausaCooperacion",
  "finalizarCooperacion",
  "onModoCooperacion"
].forEach(contract => {
  assert.ok(firebase.includes(contract), `Falta el contrato ${contract} en actividad-firebase.js`);
});

[
  "estadoConsentimiento",
  "objetivoCooperacion",
  "respuestaEstudianteEn"
].forEach(field => {
  assert.ok(rules.includes(`'${field}'`), `Falta el campo ${field} en reglas.txt`);
});

assert.ok(
  firebase.includes("modoCooperacionActual = normalizarModoCooperacion(estadoInicial.datos)"),
  "La sesion debe iniciar con el estado real de consentimiento"
);
assert.ok(
  rules.includes("resource.data.get('estadoConsentimiento', 'sin_solicitud') in ["),
  "Las reglas deben impedir reiniciar una cooperacion ya aceptada"
);
assert.ok(
  firebase.includes('window.addEventListener("seccion-estudiante-cambiada"'),
  "Cambiar de actividad debe iniciar su sesion cooperativa"
);
assert.ok(
  firebase.includes('id = "solicitudCooperacionGlobalEstudiante"') &&
    firebase.includes("Autorizar intervención"),
  "La autorizacion debe ser visible aunque la solicitud pertenezca a otra actividad"
);
assert.ok(
  firebase.includes("consentimientoElemento.hidden = !aceptada") &&
    firebase.includes("aceptar.hidden = true") &&
    firebase.includes("rechazar.hidden = true"),
  "Aceptar o rechazar debe mostrarse una sola vez en el panel global"
);
assert.ok(
  firebase.includes("describirErrorDecisionCooperacion") &&
    firebase.includes("Las reglas publicadas no coinciden con esta versión"),
  "Un rechazo de consentimiento debe mostrar un diagnostico accionable"
);
assert.ok(
  firebase.includes("actualizarBloqueoEditorEstudiante(sectionId, bloqueada)"),
  "El modo cooperativo debe actualizar el bloqueo del editor"
);
assert.ok(
  firebase.includes("const loteFirestore = writeBatch(database)") &&
    firebase.includes('notificar("synced", "Cambios sincronizados")'),
  "El CRDT debe confirmar la sincronizacion del codigo"
);
assert.ok(
  firebase.includes("cooperation_pending:") &&
    firebase.includes("persistirColaPendiente()") &&
    firebase.includes("if (!sincronizada || cola.length)"),
  "Una sesion no debe destruir cambios locales sin sincronizar"
);
assert.ok(
  firebase.includes("temporizador = setTimeout(publicarCola, 0)"),
  "Reanudar la cooperacion debe reintentar la cola pendiente"
);
assert.ok(
  firebase.includes("!document.hidden") && firebase.includes("document.hasFocus()"),
  "La lectura debe depender de que la conversacion este realmente visible"
);
assert.ok(
  firebase.includes("marcarMensajeChatColaborativoLeidoFirebase") &&
    improvements.includes("confirmarPopupMensajeCooperativoEstudiante"),
  "Entendido debe registrar la lectura del mensaje"
);
assert.ok(
  improvements.includes('typeof enviarFirebase!=="function"') &&
    improvements.includes('rol:"estudiante"'),
  "La respuesta del estudiante debe validar y ejecutar el envio real"
);
assert.ok(
  rules.includes("function collaborationPresenceEnabled()") &&
    rules.includes("collaborationPresenceEnabled() &&"),
  "La presencia solo debe estar disponible con consentimiento aceptado"
);
assert.ok(
  improvements.includes("finalizarCooperacionDocente"),
  "Falta la finalizacion explicita de la cooperacion"
);
assert.ok(
  !improvements.includes('id="vaciarChatColaborativoDocente"'),
  "La interfaz todavia ofrece borrado unilateral del chat"
);

[
  "match /actualizaciones/{actualizacionId}",
  "match /mensajes/{mensajeId}"
].forEach(collection => {
  const block = extractRuleBlock(collection);
  assert.ok(block.includes("allow delete: if false;"), `${collection} debe conservar sus evidencias`);
});

assert.ok(
  !firebase.includes("historialAportes") &&
    !firebase.includes("Historial de cambios colaborativos") &&
    !improvements.includes("Historial de aportes"),
  "La interfaz y el registro del historial colaborativo deben permanecer retirados"
);

console.log("OK: regresiones de autorizacion, chat, lectura, presencia y cola cubiertas.");
