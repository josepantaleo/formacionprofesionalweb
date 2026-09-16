const fs = require("fs");
const assert = require("assert");

const app = fs.readFileSync("actividad-app.js", "utf8");
const css = fs.readFileSync("mejoras-seguimiento.css", "utf8");
const html = fs.readFileSync("actividad.html", "utf8");

assert(
  /function\s+renderGraficoNotasDesafiosEstudiante\s*\(/.test(app),
  "Falta el grafico individual de notas por desafio."
);
assert(
  /resultado\.notaFinal\s*\?\?\s*resultado\.notaIA/.test(app),
  "El grafico no toma la nota automatica."
);
assert(
  /notasDocente\[sec\.id\]\?\.nota/.test(app),
  "El grafico no toma la nota modificada por el docente."
);
assert(
  /__controlEstudiante/.test(app) && /seccionActiva/.test(app),
  "Falta identificar el desafio en el que trabaja el estudiante."
);
assert(
  /teacher-student-grade-chart/.test(css),
  "Faltan los estilos del grafico individual."
);
assert(
  /hayNotas\s*\|\|\s*desafioActual\.id/.test(app) &&
  /teacher-student-grade-empty/.test(app),
  "Falta el estado vacio cuando el estudiante no tiene notas ni desafio activo."
);
assert(
  /const id = idControl \|\| idGuardado/.test(app) &&
  /estadoConexion === 'trabajando'/.test(app),
  "El desafio activo no prioriza la presencia en vivo."
);
assert(
  /finalizada: d\?\.finalizadas\?\.\[sec\.id\] === true/.test(app),
  "Falta distinguir desafios finalizados, actuales y pendientes."
);
assert(
  /function\s+filtrarGraficoNotasDesafiosEstudiante\s*\(/.test(app) &&
  /data-grade-filter-button="finalizados"/.test(app) &&
  /data-grade-filter-button="corregidos"/.test(app) &&
  /data-grade-filter-button="pendientes"/.test(app),
  "Faltan los filtros del grafico por estado del desafio."
);
assert(
  /data-grade-finalizada/.test(app) &&
  /data-grade-docente/.test(app) &&
  /teacher-student-grade-item\.is-filtered-out/.test(css),
  "Los desafios no exponen estados filtrables."
);
assert(
  /actividad-app\.js\?v=20260916-2/.test(html) &&
  /mejoras-seguimiento\.css\?v=20260916-2/.test(html),
  "Falta actualizar la version de los recursos modificados."
);

console.log("Grafico individual de notas: OK");
