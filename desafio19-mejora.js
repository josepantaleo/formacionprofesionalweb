(() => {
  "use strict";

  const SECTION_ID = "sec-19";
  const STORAGE_KEY = "desafio19_integrador_v2";
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));

  const defaultState = {
    producto: "Centro de Estudiantes",
    problema: "",
    usuarios: "",
    historias: "",
    datos: "",
    pruebas: "",
    decisiones: "",
    riesgos: "",
    checklist: {}
  };

  function read() {
    try {
      return { ...defaultState, ...(JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") || {}) };
    } catch (_) {
      return { ...defaultState };
    }
  }

  function write(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    const status = document.getElementById("desafio19-save-status");
    if (status) status.textContent = "Guardado localmente";
  }

  function input(id, label, value, placeholder, rows = 3) {
    return `<label class="d19-field" for="${id}"><span>${label}</span><textarea id="${id}" rows="${rows}" placeholder="${placeholder}">${esc(value)}</textarea></label>`;
  }

  function panelMarkup(saved) {
    const criteria = [
      ["modelo", "Modelo de datos", "Representa proyectos con nombre, responsable, presupuesto, estado y prioridad."],
      ["validacion", "Validación", "Rechaza campos vacíos, presupuestos inválidos y estados desconocidos."],
      ["dom", "Interfaz DOM", "Permite cargar, filtrar y visualizar resultados sin depender de la consola."],
      ["calculo", "Cálculos", "Usa filter/reduce para obtener presupuesto aprobado y distribución por estado."],
      ["persistencia", "Persistencia", "Guarda y recupera datos con LocalStorage sin romper si no hay registros."],
      ["pruebas", "Pruebas", "Incluye casos normal, límite, inválido y colección vacía."],
      ["explicacion", "Defensa oral", "Puede justificar decisiones, errores conocidos y mejoras futuras."]
    ];
    return `
      <section class="desafio19-brief" aria-labelledby="d19-heading">
        <div class="d19-kicker">DESAFÍO 19 · PROYECTO INTEGRADOR</div>
        <div class="d19-heading-row">
          <div>
            <h3 id="d19-heading">Centro de Estudiantes: de la consigna al producto</h3>
            <p class="d19-lead">Construí una aplicación pequeña pero defendible. El objetivo no es acumular código: es tomar decisiones, comprobarlas con datos y explicar por qué tu solución funciona.</p>
          </div>
          <div class="d19-timebox"><strong>Tiempo sugerido</strong><span>90–120 min</span><small>Trabajá en iteraciones cortas.</small></div>
        </div>
        <div class="d19-track">
          <span><b>1</b> Planificar</span><i>→</i><span><b>2</b> Modelar</span><i>→</i><span><b>3</b> Implementar</span><i>→</i><span><b>4</b> Probar</span><i>→</i><span><b>5</b> Defender</span>
        </div>
        <div class="d19-grid">
          <article class="d19-card"><h4>Producto mínimo obligatorio</h4><ul>
            <li>Alta de proyectos con nombre, responsable, presupuesto, categoría y estado.</li>
            <li>Validación visible para datos incompletos o incorrectos.</li>
            <li>Listado en el DOM con filtro por estado y prioridad.</li>
            <li>Reporte con cantidad de proyectos y presupuesto aprobado mediante <code>filter()</code> y <code>reduce()</code>.</li>
            <li>Persistencia en LocalStorage y recuperación segura.</li>
          </ul></article>
          <article class="d19-card"><h4>Extensiones de profundidad</h4><ul>
            <li>Editar o eliminar proyectos sin perder consistencia.</li>
            <li>Ordenar por presupuesto y mostrar indicadores de riesgo.</li>
            <li>Exportar un resumen textual o JSON.</li>
            <li>Separar funciones de datos, interfaz y validación.</li>
            <li>Agregar un estado “en revisión” y justificar su tratamiento.</li>
          </ul></article>
        </div>
        <div class="d19-planner">
          <div class="d19-section-head"><h4>Plan de trabajo</h4><span id="desafio19-save-status">Se guarda mientras escribís</span></div>
          ${input("d19-problema", "¿Qué problema concreto resuelve?", saved.problema, "Ej.: ordenar pedidos del Centro y decidir cuáles pueden financiarse.")}
          ${input("d19-usuarios", "¿Quiénes lo usarían y qué necesita cada perfil?", saved.usuarios, "Estudiantes, comisión, tesorería, docentes...")}
          ${input("d19-historias", "Escribí 3 historias de usuario", saved.historias, "Como..., quiero..., para...", 4)}
          ${input("d19-datos", "Diseño de datos", saved.datos, "Enumerá propiedades, tipos y valores permitidos.", 4)}
          ${input("d19-decisiones", "Decisiones técnicas que vas a defender", saved.decisiones, "Por qué const/let, funciones, filter/reduce, LocalStorage, etc.", 4)}
          ${input("d19-riesgos", "Riesgos y límites conocidos", saved.riesgos, "Qué pasa si no hay datos, si el presupuesto es inválido o si falla el guardado.", 3)}
        </div>
        <div class="d19-rubric">
          <div class="d19-section-head"><h4>Rúbrica de autoevaluación</h4><span>Marcá solo evidencia que puedas mostrar.</span></div>
          ${criteria.map(([id, title, desc]) => `<label class="d19-check"><input type="checkbox" data-d19-check="${id}" ${saved.checklist?.[id] ? "checked" : ""}><span><strong>${title}</strong><small>${desc}</small></span></label>`).join("")}
        </div>
        <div class="d19-tests">
          <h4>Plan de pruebas antes de entregar</h4>
          <p>Escribí qué entrada usarás y qué salida esperás. Incluí al menos un caso límite y uno inválido.</p>
          ${input("d19-pruebas", "Casos y resultados esperados", saved.pruebas, "1) normal... 2) límite... 3) inválido... 4) sin registros...", 5)}
        </div>
        <div class="d19-delivery"><strong>Entregable final:</strong> código ejecutable, interfaz visible, datos de prueba, explicación breve de decisiones y una lista de mejoras posibles.</div>
      </section>`;
  }

  function collect() {
    const state = read();
    ["problema", "usuarios", "historias", "datos", "decisiones", "riesgos", "pruebas"].forEach((key) => {
      state[key] = document.getElementById(`d19-${key}`)?.value || "";
    });
    document.querySelectorAll("[data-d19-check]").forEach((el) => {
      state.checklist[el.dataset.d19Check] = el.checked;
    });
    return state;
  }

  function install() {
    const card = document.getElementById(SECTION_ID);
    if (!card || card.dataset.d19Enhanced === "true") return Boolean(card);
    const editor = card.querySelector(`#editor-${SECTION_ID}, textarea[id*="editor"]`);
    const saved = read();
    const host = document.createElement("div");
    host.innerHTML = panelMarkup(saved);
    const panel = host.firstElementChild;
    if (editor) editor.closest(".editor-panel, .challenge-editor, .code-editor, .section-content")?.prepend(panel);
    else card.querySelector(".section-title")?.insertAdjacentElement("afterend", panel);
    if (!panel.isConnected) card.querySelector(".section-title")?.insertAdjacentElement("afterend", panel);
    panel.querySelectorAll("textarea, input").forEach((el) => {
      el.addEventListener("input", () => write(collect()));
      el.addEventListener("change", () => write(collect()));
    });
    card.dataset.d19Enhanced = "true";
    return true;
  }

  const timer = setInterval(() => {
    if (install()) clearInterval(timer);
  }, 300);
  document.addEventListener("DOMContentLoaded", install, { once: true });
})();
