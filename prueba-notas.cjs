function notaDesafio(notaCodigo, notaPreguntas) {
  const codigo = Math.max(0, Math.min(10, Number(notaCodigo) || 0));
  const preguntas = Math.max(0, Math.min(10, Number(notaPreguntas) || 0));
  return Number((codigo * 0.70 + preguntas * 0.30).toFixed(1));
}

function notaVigente(resultado = {}, correccion = null) {
  const docente = Number(correccion?.nota);
  if (Number.isFinite(docente)) return Math.max(0, Math.min(10, docente));
  const automatica = Number(resultado.notaFinal ?? resultado.notaIA);
  return Number.isFinite(automatica) ? Math.max(0, Math.min(10, automatica)) : null;
}

function promedioFinal(notas, proyectoFinal = null) {
  const valores = notas.concat(proyectoFinal === null ? [] : [proyectoFinal])
    .map(Number)
    .filter(Number.isFinite);
  return valores.length ? Number((valores.reduce((a, b) => a + b, 0) / valores.length).toFixed(2)) : null;
}

const casos = [
  ["70/30 exacto", notaDesafio(8, 6), 7.4],
  ["límites inferiores", notaDesafio(-2, -1), 0],
  ["límites superiores", notaDesafio(12, 15), 10],
  ["nota docente reemplaza automática", notaVigente({ notaFinal: 4.2 }, { nota: 8.5 }), 8.5],
  ["sin corrección usa automática", notaVigente({ notaFinal: 6.7 }, null), 6.7],
  ["promedio con proyecto", promedioFinal([6, 7, 8], 5), 6.5],
  ["promedio sin proyecto", promedioFinal([6, 7, 8]), 7],
  ["sin notas", promedioFinal([]), null]
];

for (const [nombre, obtenido, esperado] of casos) {
  if (obtenido !== esperado) throw new Error(`${nombre}: esperado ${esperado}, obtenido ${obtenido}`);
  console.log(`${nombre}: OK (${obtenido})`);
}
