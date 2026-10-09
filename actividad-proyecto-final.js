(() => {
  "use strict";

  const EXAM_ID = "coloquio-examen";
  const EXAM_KEY = "coloquio_examen_entrega";
  const QUESTIONS = [
    "Explicá el objetivo de tu solución y el problema que resuelve.",
    "¿Qué variables declaraste con let y cuáles con const? Justificá.",
    "¿Qué tipos de datos utilizaste y cómo validás sus valores?",
    "¿Qué operadores son importantes para las reglas de tu programa?",
    "¿Qué condición o decisión controla el flujo principal?",
    "¿Qué función considerás más importante y qué responsabilidad cumple?",
    "¿Qué array u objeto concentra la información principal?",
    "¿Qué iteración utilizaste y qué alternativa podrías aplicar?",
    "¿Qué parte modifica el DOM y qué elemento actualiza?",
    "¿Qué evento inicia la acción principal del usuario?",
    "¿Cómo validás los datos de entrada y comunicás los errores?",
    "¿Qué información guardarías en LocalStorage y por qué?",
    "¿Cómo controlarías un error de red o una respuesta inválida?",
    "¿Qué parte del código es asíncrona y cómo se resuelve?",
    "¿Qué mejora concreta implementarías para hacerlo más seguro, claro o mantenible?"
  ];
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
  const read = () => {
    try { return JSON.parse(localStorage.getItem(EXAM_KEY) || "null") || {}; } catch (_) { return {}; }
  };
  const write = (value) => localStorage.setItem(EXAM_KEY, JSON.stringify(value));
  const state = () => window.obtenerEstadoAcademicoActividad?.() || {
    historialResultados: {}, actividadesFinalizadas: {}, notasDesafiosDocente: {}, secciones: []
  };

  function calcularPromedioDesafios() {
    const actual = state();
    const notas = (actual.secciones || []).map((sec) => {
      const finalizada = actual.actividadesFinalizadas?.[sec.id] === true ||
        localStorage.getItem(`finalized_${sec.id}`) === "true";
      if (!finalizada) return null;
      const docente = Number(actual.notasDesafiosDocente?.[sec.id]?.nota);
      const resultado = actual.historialResultados?.[sec.id] || {};
      const automatica = Number(resultado.notaFinal ?? resultado.notaIA);
      const nota = Number.isFinite(docente) ? docente : automatica;
      return Number.isFinite(nota) ? Math.max(0, Math.min(10, nota)) : null;
    }).filter((nota) => nota !== null);
    return notas.length ? Number((notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2)) : null;
  }

  function evaluarColoquio() {
    const promedio = calcularPromedioDesafios();
    return { promedio, habilitado: promedio !== null && promedio < 7 };
  }
  window.evaluarReglaColoquio = evaluarColoquio;
  window.obtenerEntregasAcademicasEspeciales = () => ({ coloquioExamen: read() });
  window.restaurarEntregasAcademicasEspeciales = (data = {}) => {
    if (data.coloquioExamen) write(data.coloquioExamen);
    actualizarDisponibilidad();
  };

  function navItem(onClick) {
    const li = document.createElement("li");
    li.id = `nav-btn-${EXAM_ID}`;
    li.className = "nav-item proyecto-nav-item";
    li.tabIndex = 0;
    li.setAttribute("role", "button");
    li.setAttribute("aria-label", "Abrir COLOQUIO-EXAMEN");
    li.hidden = true;
    li.innerHTML = '<i class="fa-solid fa-user-graduate"></i> <span>COLOQUIO-EXAMEN</span>';
    li.onclick = onClick;
    li.onkeydown = (event) => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onClick(); }
    };
    return li;
  }

  function activar() {
    document.querySelectorAll(".section-card").forEach((card) => card.classList.remove("active"));
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-current", "false");
    });
    document.getElementById(EXAM_ID)?.classList.add("active");
    const boton = document.getElementById(`nav-btn-${EXAM_ID}`);
    boton?.classList.add("active");
    boton?.setAttribute("aria-current", "page");
    const titulo = document.getElementById("currentTitle");
    if (titulo) titulo.textContent = "COLOQUIO-EXAMEN";
  }

  function markup() {
    const saved = read();
    return `
      <h2 class="section-title"><i class="fa-solid fa-user-graduate"></i> COLOQUIO-EXAMEN</h2>
      <div class="final-project-intro"><strong>Condición:</strong> instancia integradora para estudiantes con promedio vigente inferior a 7. Se consideran las notas automáticas o las notas docentes vigentes de los desafíos finalizados.</div>
      <section class="colloquium-challenge">
        <h3>Desafío integrador sugerido</h3>
        <p>Construí una mini aplicación de seguimiento escolar que permita cargar una actividad, validar sus datos, calcular un resultado, mostrarlo en el DOM, guardar el registro en LocalStorage y manejar un error de entrada o de red sin detener la interfaz.</p>
        <p><strong>Ideas posibles:</strong> agenda de entregas, registro de asistencia, tablero de calificaciones, inventario de biblioteca o formulario de inscripción.</p>
        <textarea id="coloquioDesafioCodigo" rows="12" placeholder="Escribí la solución o pseudocódigo detallado...">${esc(saved.challenge || "")}</textarea>
      </section>
      <section class="colloquium-questions">
        <h3>15 preguntas teóricas sobre tu código</h3>
        ${QUESTIONS.map((question, index) => `<label><span>${index + 1}. ${question}</span><textarea rows="3" data-exam-question="${index}" placeholder="Respondé con una referencia concreta a tu código...">${esc(saved.answers?.[index] || "")}</textarea></label>`).join("")}
        <button class="btn btn-primary" id="btnEntregarColoquio"><i class="fa-solid fa-check-double"></i> Entregar coloquio</button>
        <div id="coloquioResultado" class="final-project-result" aria-live="polite"></div>
      </section>`;
  }

  function entregar() {
    const challenge = document.getElementById("coloquioDesafioCodigo")?.value || "";
    const answers = [...document.querySelectorAll("[data-exam-question]")].map((input) => input.value);
    const answered = answers.filter((answer) => answer.trim().length >= 20).length;
    const grade = Number(((answered / QUESTIONS.length) * 10).toFixed(1));
    write({ ...read(), challenge, answers, grade, submitted: true, submittedAt: new Date().toISOString(), gradeConfirmed: false, confirmedGrade: null });
    const output = document.getElementById("coloquioResultado");
    if (output) output.innerHTML = `<strong>Entrega registrada: ${grade}/10 (${answered}/${QUESTIONS.length} respuestas desarrolladas).</strong><span>El docente puede revisar y confirmar la calificación.</span>`;
    window.solicitarGuardadoActividad?.();
  }

  function actualizarDisponibilidad() {
    const resultado = evaluarColoquio();
    const boton = document.getElementById(`nav-btn-${EXAM_ID}`);
    const card = document.getElementById(EXAM_ID);
    if (!boton || !card) return;
    boton.hidden = !resultado.habilitado;
    if (!resultado.habilitado) card.classList.remove("active");
  }

  function iniciar() {
    const nav = document.getElementById("navList");
    const container = document.getElementById("sectionsContainer");
    if (!nav || !container || document.getElementById(EXAM_ID)) return;
    const card = document.createElement("div");
    card.id = EXAM_ID;
    card.className = "section-card";
    card.innerHTML = markup();
    container.appendChild(card);
    nav.appendChild(navItem(activar));
    document.getElementById("btnEntregarColoquio").onclick = entregar;
    actualizarDisponibilidad();
  }

  const timer = setInterval(() => {
    iniciar();
    if (document.getElementById(EXAM_ID)) {
      clearInterval(timer);
      const original = window.renderInformeVisualEstudiante;
      if (typeof original === "function" && !window.__coloquioWrapped) {
        window.renderInformeVisualEstudiante = function (...args) {
          const result = original.apply(this, args);
          actualizarDisponibilidad();
          return result;
        };
        window.__coloquioWrapped = true;
      }
    }
  }, 250);
  document.addEventListener("DOMContentLoaded", iniciar, { once: true });
})();
