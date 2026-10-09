const estadosCompletos = new Set(["aprobado", "finalizado"]);
const finalizada = (estado, declarada, evidencias) =>
  estadosCompletos.has(estado) || (!estado && declarada === true && evidencias === true);

const casos = [
  ["pendiente", "pendiente", true, true, false],
  ["entregado", "entregado", true, true, false],
  ["en_revision", "en_revision", true, true, false],
  ["aprobado", "aprobado", false, false, true],
  ["finalizado", "finalizado", false, false, true],
  ["sin estado docente pero entrega válida", "", true, true, true]
];

for (const [, estado, declarada, evidencias, esperado] of casos) {
  const obtenido = finalizada(estado, declarada, evidencias);
  if (obtenido !== esperado) throw new Error(`${estado}: esperado ${esperado}, obtenido ${obtenido}`);
  console.log(`${estado || "sin estado"}: ${obtenido ? "completa" : "no completa"}`);
}
