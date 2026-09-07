const fs = require("node:fs");
const assert = require("node:assert/strict");

const html = fs.readFileSync("actividad.html", "utf8");
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
  assert.ok(html.includes(contract), `Falta el contrato ${contract} en actividad.html`);
});

[
  "estadoConsentimiento",
  "objetivoCooperacion",
  "respuestaEstudianteEn",
  "autorNombre",
  "textoAgregado",
  "caracteresAgregados",
  "caracteresEliminados",
  "lineaInicio",
  "lineaFin"
].forEach(field => {
  assert.ok(rules.includes(`'${field}'`), `Falta el campo ${field} en reglas.txt`);
});

assert.ok(
  html.includes("modoCooperacionActual = normalizarModoCooperacion(estadoInicial.datos)"),
  "La sesion debe iniciar con el estado real de consentimiento"
);
assert.ok(
  rules.includes("resource.data.get('estadoConsentimiento', 'sin_solicitud') in ["),
  "Las reglas deben impedir reiniciar una cooperacion ya aceptada"
);
assert.ok(
  html.includes('window.dispatchEvent(new CustomEvent("seccion-estudiante-cambiada"'),
  "Cambiar de actividad debe iniciar su sesion cooperativa"
);
assert.ok(
  html.includes('id = "solicitudCooperacionGlobalEstudiante"') &&
    html.includes("Autorizar intervención"),
  "La autorizacion debe ser visible aunque la solicitud pertenezca a otra actividad"
);
assert.ok(
  html.includes("actualizarBloqueoEditorEstudiante(sectionId, bloqueada)") &&
    html.includes("Boolean(actividadesFinalizadas[sectionId])") &&
    html.includes("Boolean(modulosPausados[sectionId])"),
  "El bloqueo cooperativo debe respetar los bloqueos academicos"
);
assert.ok(
  html.includes("const loteFirestore = writeBatch(database)") &&
    html.includes('notificar("synced", "Cambios e historial sincronizados")'),
  "El CRDT y el historial deben confirmarse en la misma escritura"
);
assert.ok(
  html.includes("cooperation_pending:") &&
    html.includes("persistirColaPendiente()") &&
    html.includes("if (!sincronizada || cola.length || cambiosVisualesPendientes.length)"),
  "Una sesion no debe destruir cambios locales sin sincronizar"
);
assert.ok(
  html.includes("temporizador = setTimeout(publicarCola, 0)"),
  "Reanudar la cooperacion debe reintentar la cola pendiente"
);
assert.ok(
  html.includes("!document.hidden") && html.includes("document.hasFocus()"),
  "La lectura debe depender de que la conversacion este realmente visible"
);
assert.ok(
  html.includes("marcarMensajeChatColaborativoLeidoFirebase") &&
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
  "match /mensajes/{mensajeId}",
  "match /historialAportes/{aporteId}"
].forEach(collection => {
  const block = extractRuleBlock(collection);
  assert.ok(block.includes("allow delete: if false;"), `${collection} debe conservar sus evidencias`);
});

console.log("OK: regresiones de autorizacion, chat, lectura, presencia, cola e historial cubiertas.");
