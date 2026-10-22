/* Mensajería docente-estudiante: interfaz accesible sobre las funciones Firebase existentes. */
(() => {
  'use strict';
  const MAX_MENSAJE = 1000;
  const $ = (selector, root = document) => root.querySelector(selector);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const fechaTexto = value => {
    try {
      const date = value?.toDate ? value.toDate() : value?.seconds ? new Date(value.seconds * 1000) : new Date(value || 0);
      return Number.isNaN(date.getTime()) || date.getTime() < 1 ? 'Fecha no disponible' : date.toLocaleString('es-AR', { dateStyle: 'short', timeStyle: 'short' });
    } catch (_) { return 'Fecha no disponible'; }
  };
  let uidInicial = '';
  let destinatarios = [];
  let historial = [];
  let detenerHistorial = null;
  let mensajesEstudiante = [];
  const idsNotificados = new Set();
  let modalDocente, modalEstudiante, inboxButton, inboxBadge, estadoEnvio, historialPanel;

  function instalarEstilos() {
    if ($('#mensajeriaDocenteEstilos')) return;
    const style = document.createElement('style');
    style.id = 'mensajeriaDocenteEstilos';
    style.textContent = `
      .md-overlay{position:fixed;inset:0;z-index:12000;background:rgba(2,6,23,.78);display:none;align-items:center;justify-content:center;padding:1rem;overflow:auto}
      .md-overlay.is-open{display:flex}.md-dialog{width:min(760px,100%);max-height:min(90vh,900px);overflow:auto;background:var(--card-bg,#0f172a);color:var(--text-color,#e2e8f0);border:1px solid var(--border-color,rgba(148,163,184,.28));border-radius:18px;padding:clamp(1rem,3vw,1.5rem);box-shadow:0 24px 80px #0008}
      .md-header{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:1rem}.md-header h2{margin:0;font-size:1.25rem}.md-muted{color:var(--text-muted,#94a3b8);font-size:.88rem}.md-form{display:grid;gap:.8rem}.md-form label{display:grid;gap:.35rem;font-weight:650}.md-form input,.md-form select,.md-form textarea{box-sizing:border-box;width:100%;min-width:0;background:var(--input-bg,#111827);color:inherit;border:1px solid var(--border-color,#475569);border-radius:10px;padding:.7rem;font:inherit}.md-form textarea{resize:vertical}.md-recipients{max-height:180px;overflow:auto;border:1px solid var(--border-color,#475569);border-radius:10px;padding:.6rem;display:grid;gap:.4rem}.md-recipient{display:flex!important;grid-template-columns:auto 1fr;align-items:center;gap:.55rem!important;font-weight:400!important}.md-recipient input{width:auto}.md-actions{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:flex-end;margin-top:1rem}.md-actions button,.md-close{border:1px solid var(--border-color,#475569);border-radius:10px;padding:.65rem .9rem;background:var(--surface-bg,#1e293b);color:inherit;font:inherit;cursor:pointer}.md-actions button:disabled{opacity:.55;cursor:wait}.md-actions .md-primary{background:#0369a1;border-color:#0284c7;color:#fff}.md-status{min-height:1.4em;margin:.6rem 0 0;font-size:.9rem}.md-history{display:grid;gap:.65rem;margin-top:1rem}.md-item{border:1px solid var(--border-color,rgba(148,163,184,.25));border-radius:12px;padding:.8rem;overflow-wrap:anywhere}.md-item p{white-space:pre-wrap;margin:.45rem 0}.md-item-head{display:flex;justify-content:space-between;gap:.7rem;flex-wrap:wrap}.md-pill{display:inline-block;border-radius:99px;padding:.15rem .5rem;font-size:.76rem;background:#334155}.md-pill.urgent{background:#7f1d1d;color:#fee2e2}.md-inbox-button{position:fixed;right:1rem;bottom:1rem;z-index:11000;border:0;border-radius:999px;background:#0369a1;color:white;padding:.8rem 1rem;box-shadow:0 8px 28px #0005;font:inherit;font-weight:700;cursor:pointer}.md-inbox-badge{display:inline-grid;place-items:center;min-width:1.35rem;height:1.35rem;margin-left:.35rem;border-radius:99px;background:#dc2626;color:#fff;font-size:.78rem}.md-inbox-badge[hidden]{display:none}.md-toast{position:fixed;right:1rem;bottom:5rem;z-index:11001;width:min(420px,calc(100vw - 2rem));box-sizing:border-box;background:var(--card-bg,#111827);color:var(--text-color,#e5e7eb);border:1px solid #7c3aed;border-radius:16px;padding:1rem;box-shadow:0 18px 48px #0008;display:grid;gap:.65rem}.md-toast-top{display:flex;align-items:center;justify-content:space-between;gap:.6rem}.md-toast-brand{font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:#c4b5fd;font-weight:800}.md-toast-title{margin:0;font-size:1rem;line-height:1.35}.md-toast-preview{margin:0;white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.5;max-height:5.5em;overflow:auto}.md-toast-actions{display:flex;gap:.5rem;flex-wrap:wrap}.md-toast-actions button{flex:1 1 130px;min-height:42px;border:1px solid #475569;border-radius:10px;padding:.65rem .8rem;background:#334155;color:#fff;font:inherit;font-weight:700;cursor:pointer}.md-toast-actions .md-toast-primary{background:#0ea5e9;border-color:#38bdf8;color:#082f49}.md-toast button:focus-visible,.md-inbox-button:focus-visible{outline:3px solid #c4b5fd;outline-offset:3px}.md-empty{padding:1rem;text-align:center;color:var(--text-muted,#94a3b8);border:1px dashed var(--border-color,#475569);border-radius:12px}
      @media(max-width:560px){.md-toast{right:.5rem;bottom:4.7rem;width:calc(100vw - 1rem);padding:.85rem}.md-toast-actions{display:grid;grid-template-columns:1fr}.md-overlay{padding:.4rem;align-items:flex-end}.md-dialog{border-radius:18px 18px 10px 10px;max-height:94vh}.md-actions button{flex:1 1 auto}.md-inbox-button{right:.6rem;bottom:.6rem}}
    `;
    document.head.appendChild(style);
  }

  function crearInterfaz() {
    if ($('#mensajeriaDocenteModal')) return;
    instalarEstilos();
    modalDocente = document.createElement('div');
    modalDocente.id = 'mensajeriaDocenteModal';
    modalDocente.className = 'md-overlay';
    modalDocente.setAttribute('role', 'dialog'); modalDocente.setAttribute('aria-modal', 'true'); modalDocente.setAttribute('aria-labelledby', 'mdTeacherTitle');
    modalDocente.innerHTML = `<section class="md-dialog"><header class="md-header"><div><h2 id="mdTeacherTitle">Mensajes a estudiantes</h2><p class="md-muted">Enviá avisos individuales, a un grupo seleccionado o a toda la clase.</p></div><button class="md-close" type="button" data-md-close="teacher" aria-label="Cerrar">✕</button></header>
      <form id="mdTeacherForm" class="md-form"><label>Destinatarios<select id="mdDestinoModo"><option value="individual">Un estudiante</option><option value="grupo">Grupo de estudiantes seleccionados</option><option value="todos">Toda la clase</option></select></label>
      <label id="mdFiltroLabel">Buscar estudiante<input id="mdFiltro" type="search" placeholder="Nombre o correo" autocomplete="off"></label>
      <div id="mdRecipients" class="md-recipients" aria-label="Lista de estudiantes"></div><div class="md-muted" id="mdRecipientsCount" aria-live="polite"></div>
      <label>Asunto (opcional)<input id="mdAsunto" maxlength="120" placeholder="Ej.: Entrega del desafío" autocomplete="off"></label>
      <label>Mensaje<textarea id="mdContenido" rows="4" maxlength="1000" required placeholder="Escribí el mensaje (máximo 1000 caracteres)…"></textarea><span class="md-muted"><span id="mdCharCount">0</span>/1000 caracteres</span></label>
      <label>Prioridad<select id="mdPrioridad"><option value="normal">Normal</option><option value="urgente">Urgente</option></select></label>
      <p id="mdSendStatus" class="md-status" role="status" aria-live="polite"></p><div class="md-actions"><button type="button" data-md-close="teacher">Cancelar</button><button class="md-primary" id="mdSendButton" type="submit">Enviar mensaje</button></div></form>
      <section><h3>Seguimiento de envíos recientes</h3><p class="md-muted">Los estados dependen de la sincronización de Firebase y de los permisos publicados.</p><div id="mdSentHistory" class="md-history"><div class="md-empty">Todavía no hay datos de seguimiento.</div></div></section></section>`;
    modalEstudiante = document.createElement('div');
    modalEstudiante.id = 'mensajeDocentePantalla'; modalEstudiante.className = 'md-overlay';
    modalEstudiante.setAttribute('role', 'dialog'); modalEstudiante.setAttribute('aria-modal', 'true'); modalEstudiante.setAttribute('aria-labelledby', 'mdStudentTitle');
    modalEstudiante.innerHTML = `<section class="md-dialog"><header class="md-header"><div><h2 id="mdStudentTitle">Mensajes del docente</h2><p class="md-muted">Podés volver a consultar los avisos recibidos.</p></div><button class="md-close" type="button" data-md-close="student" aria-label="Cerrar">✕</button></header><div id="mdStudentMessages" class="md-history" aria-live="polite"></div><div class="md-actions"><button type="button" data-md-close="student">Cerrar</button></div></section>`;
    document.body.append(modalDocente, modalEstudiante);
    inboxButton = document.createElement('button'); inboxButton.type = 'button'; inboxButton.className = 'md-inbox-button'; inboxButton.id = 'mdInboxButton'; inboxButton.innerHTML = '✉ Mensajes <span id="mdInboxBadge" class="md-inbox-badge" hidden>0</span>'; inboxButton.hidden = true;
    document.body.appendChild(inboxButton); inboxBadge = $('#mdInboxBadge'); estadoEnvio = $('#mdSendStatus'); historialPanel = $('#mdSentHistory');
    $('#mdTeacherForm').addEventListener('submit', enviarMensaje);
    $('#mdDestinoModo').addEventListener('change', renderDestinatarios);
    $('#mdFiltro').addEventListener('input', renderDestinatarios);
    $('#mdContenido').addEventListener('input', () => { $('#mdCharCount').textContent = String($('#mdContenido').value.length); });
    document.addEventListener('click', event => {
      const close = event.target.closest('[data-md-close]');
      if (close) cerrarModal(close.dataset.mdClose);
      if (event.target === modalDocente) cerrarModal('teacher');
      if (event.target === modalEstudiante) cerrarModal('student');
    });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') { cerrarModal('teacher'); cerrarModal('student'); } });
    inboxButton.addEventListener('click', abrirBandejaEstudiante);
    window.addEventListener('mensajes-docente-estudiante', event => actualizarMensajesEstudiante(Array.isArray(event.detail) ? event.detail : []));
  }

  function cerrarModal(tipo) {
    const modal = tipo === 'teacher' ? modalDocente : modalEstudiante;
    modal?.classList.remove('is-open');
  }
  function abrirModalDocente(uid = '') {
    crearInterfaz();
    if (typeof window.autorizarDocenteFirebase !== 'function') { alert('La mensajería requiere una sesión docente autorizada y Firebase disponible.'); return; }
    uidInicial = String(uid || '');
    destinatarios = typeof window.obtenerDestinatariosMensajesDocente === 'function' ? window.obtenerDestinatariosMensajesDocente() : [];
    $('#mdDestinoModo').value = uidInicial ? 'individual' : 'grupo';
    $('#mdFiltro').value = '';
    $('#mdAsunto').value = ''; $('#mdContenido').value = ''; $('#mdCharCount').textContent = '0'; $('#mdPrioridad').value = 'normal'; estadoEnvio.textContent = '';
    renderDestinatarios(); modalDocente.classList.add('is-open'); $('#mdContenido').focus();
    void cargarHistorialDocente();
  }
  function renderDestinatarios() {
    if (!modalDocente) return;
    const modo = $('#mdDestinoModo').value;
    const filtro = String($('#mdFiltro').value || '').trim().toLocaleLowerCase('es');
    const contenedor = $('#mdRecipients');
    $('#mdFiltroLabel').hidden = modo === 'todos'; contenedor.hidden = modo === 'todos';
    if (modo === 'todos') {
      contenedor.innerHTML = '<div class="md-empty">El mensaje se enviará a todos los estudiantes disponibles en el panel.</div>';
      $('#mdRecipientsCount').textContent = `${destinatarios.length} estudiantes disponibles.`; return;
    }
    const lista = destinatarios.filter(d => `${d.nombre} ${d.email}`.toLocaleLowerCase('es').includes(filtro));
    contenedor.innerHTML = lista.length ? lista.map(d => `<label class="md-recipient"><input type="checkbox" value="${esc(d.uid)}" ${uidInicial === d.uid ? 'checked' : ''} ${modo === 'individual' && uidInicial && uidInicial !== d.uid ? 'disabled' : ''}><span><strong>${esc(d.nombre)}</strong><br><span class="md-muted">${esc(d.email || 'Sin correo')}</span></span></label>`).join('') : '<div class="md-empty">No hay estudiantes que coincidan con la búsqueda.</div>';
    if (modo === 'individual') {
      const checks = [...contenedor.querySelectorAll('input[type="checkbox"]')];
      checks.forEach(check => check.addEventListener('change', () => { if (check.checked) checks.filter(other => other !== check).forEach(other => { other.checked = false; }); actualizarConteoDestinatarios(); }));
    }
    $('#mdRecipientsCount').textContent = `${contenedor.querySelectorAll('input:checked').length} seleccionados · ${destinatarios.length} disponibles.`;
  }
  function obtenerUidsSeleccionados() {
    const modo = $('#mdDestinoModo').value;
    if (modo === 'todos') return destinatarios.map(d => d.uid);
    return [...$('#mdRecipients').querySelectorAll('input[type="checkbox"]:checked')].map(input => input.value);
  }
  function actualizarConteoDestinatarios() {
    $('#mdRecipientsCount').textContent = `${obtenerUidsSeleccionados().length} seleccionados · ${destinatarios.length} disponibles.`;
  }
  async function enviarMensaje(event) {
    event.preventDefault();
    const boton = $('#mdSendButton');
    const contenido = String($('#mdContenido').value || '').trim();
    const asunto = String($('#mdAsunto').value || '').trim();
    const modo = $('#mdDestinoModo').value;
    const uids = [...new Set(obtenerUidsSeleccionados().filter(Boolean))];
    if (!uids.length) { estadoEnvio.textContent = 'Seleccioná al menos un destinatario.'; $('#mdRecipients').focus(); return; }
    if (!contenido) { estadoEnvio.textContent = 'Escribí el contenido del mensaje.'; $('#mdContenido').focus(); return; }
    if (contenido.length > MAX_MENSAJE) { estadoEnvio.textContent = `El mensaje supera los ${MAX_MENSAJE} caracteres.`; return; }
    if (typeof window.enviarMensajeDocenteFirebase !== 'function') { estadoEnvio.textContent = 'La función de envío de Firebase todavía no está disponible. Recargá la página.'; return; }
    const original = boton.textContent; boton.disabled = true; boton.textContent = 'Enviando…'; estadoEnvio.textContent = 'Enviando mensaje a Firebase…';
    try {
      const resultado = await window.enviarMensajeDocenteFirebase(uids, { tipoDestino: modo, destinoDescripcion: modo === 'todos' ? 'Toda la clase' : modo === 'grupo' ? 'Grupo seleccionado' : (destinatarios.find(d => d.uid === uids[0])?.nombre || 'Estudiante'), asunto, contenido, prioridad: $('#mdPrioridad').value });
      if (!resultado?.ok) throw new Error(window.ultimoErrorMensajeDocente?.message || 'No se pudo enviar el mensaje. Revisá la conexión y los permisos de Firebase.');
      estadoEnvio.textContent = `Mensaje enviado correctamente a ${resultado.enviados} estudiante${resultado.enviados === 1 ? '' : 's'}${resultado.modoCompatibilidad ? ' (modo compatible).' : '.'}`;
      estadoEnvio.style.color = '#4ade80';
      historial.unshift({ id: resultado.mensajeId, asunto, contenido, prioridad: $('#mdPrioridad').value, enviadoEn: new Date(), destinatarios: uids, tipoDestino: modo, enviados: resultado.enviados, canal: resultado.canal }); historial = historial.slice(0, 8); renderHistorialDocente();
      $('#mdContenido').value = ''; $('#mdCharCount').textContent = '0';
    } catch (error) {
      estadoEnvio.textContent = error?.message || 'No se pudo enviar el mensaje.'; estadoEnvio.style.color = '#fca5a5';
    } finally { boton.disabled = false; boton.textContent = original; }
  }
  async function cargarHistorialDocente() {
    if (detenerHistorial) { try { detenerHistorial(); } catch (_) {} detenerHistorial = null; }
    if (typeof window.escucharHistorialMensajesDocenteFirebase !== 'function') { renderHistorialDocente(); return; }
    try { detenerHistorial = await window.escucharHistorialMensajesDocenteFirebase(items => { historial = items.slice().sort((a,b) => (b.enviadoEn?.toMillis?.() || new Date(b.enviadoEn || 0).getTime()) - (a.enviadoEn?.toMillis?.() || new Date(a.enviadoEn || 0).getTime())).slice(0, 30); renderHistorialDocente(); }); }
    catch (error) { historialPanel.innerHTML = `<div class="md-empty">No se pudo cargar el seguimiento. ${esc(error?.message || '')}</div>`; }
  }
  function renderHistorialDocente() {
    if (!historialPanel) return;
    if (!historial.length) { historialPanel.innerHTML = '<div class="md-empty">Todavía no hay mensajes en el historial disponible.</div>'; return; }
    const local = historial.filter(item => item.destinatarios);
    const remotos = historial.filter(item => !item.destinatarios);
    const elementos = [...local, ...remotos].slice(0, 12);
    historialPanel.innerHTML = elementos.map(item => {
      const entregados = item.recibido === true ? 1 : 0;
      const leidos = item.leido === true ? 1 : 0;
      const esLocal = Array.isArray(item.destinatarios);
      const destinatario = esLocal ? `${item.enviados || item.destinatarios.length} enviados` : (item.estudianteUid ? esc(destinatarios.find(d => d.uid === item.estudianteUid)?.nombre || item.estudianteUid) : 'Destinatario');
      return `<article class="md-item"><div class="md-item-head"><strong>${esc(item.asunto || 'Mensaje sin asunto')}</strong><span class="md-pill ${item.prioridad === 'urgente' ? 'urgent' : ''}">${item.prioridad === 'urgente' ? 'Urgente' : 'Normal'}</span></div><p>${esc(item.contenido || '')}</p><div class="md-muted">${esc(destinatario)} · ${esc(fechaTexto(item.enviadoEn))}</div><div class="md-muted">${esLocal ? 'Envío registrado' : `Recepción: ${item.recibido ? 'confirmada' : 'pendiente'} · Lectura: ${item.leido ? 'confirmada' : 'pendiente'}`}</div></article>`;
    }).join('');
  }
  function actualizarMensajesEstudiante(mensajes) {
    crearInterfaz();
    mensajesEstudiante = mensajes.slice().sort((a,b) => (a.enviadoEn?.toMillis?.() || new Date(a.enviadoEn || 0).getTime()) - (b.enviadoEn?.toMillis?.() || new Date(b.enviadoEn || 0).getTime()));
    const pendientes = mensajesEstudiante.filter(m => m.leido !== true);
    inboxButton.hidden = mensajesEstudiante.length === 0;
    inboxBadge.textContent = String(pendientes.length); inboxBadge.hidden = pendientes.length === 0;
    const nuevos = pendientes.filter(m => !idsNotificados.has(m.id));
    nuevos.forEach(m => idsNotificados.add(m.id));
    if (nuevos.length && !modalEstudiante.classList.contains('is-open')) mostrarToastEstudiante(nuevos[nuevos.length - 1]);
    renderBandejaEstudiante();
  }
  function mostrarToastEstudiante(mensaje) {
    let toast = $('#mdMessageToast');
    if (!toast) {
      toast = document.createElement('aside');
      toast.id = 'mdMessageToast';
      toast.className = 'md-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    const asunto = String(mensaje.asunto || '').trim();
    const contenido = String(mensaje.contenido || '').trim();
    const vistaPrevia = contenido || asunto || 'El docente te envió un aviso.';
    toast.innerHTML = `<div class="md-toast-top"><span class="md-toast-brand">Cooperación en vivo</span><span class="md-pill">${mensajesEstudiante.filter(m => m.leido !== true).length} pendiente${mensajesEstudiante.filter(m => m.leido !== true).length === 1 ? '' : 's'}</span></div><h3 class="md-toast-title">${esc(asunto || 'Nuevo mensaje del docente')}</h3><p class="md-toast-preview">${esc(vistaPrevia)}</p><div class="md-toast-actions"><button type="button" class="md-toast-primary" id="mdToastOpen">Abrir conversación</button><button type="button" id="mdToastDismiss">Entendido</button></div>`;
    $('#mdToastOpen').onclick = () => { toast.remove(); void abrirBandejaEstudiante(); };
    $('#mdToastDismiss').onclick = () => toast.remove();
  }
  function renderBandejaEstudiante() {
    const root = $('#mdStudentMessages'); if (!root) return;
    if (!mensajesEstudiante.length) { root.innerHTML = '<div class="md-empty">Todavía no recibiste mensajes del docente.</div>'; return; }
    root.innerHTML = mensajesEstudiante.slice().reverse().map(item => `<article class="md-item"><div class="md-item-head"><strong>${esc(item.asunto || 'Aviso del docente')}</strong><span class="md-pill ${item.prioridad === 'urgente' ? 'urgent' : ''}">${item.prioridad === 'urgente' ? 'Urgente' : 'Normal'}</span></div><p>${esc(item.contenido || '')}</p><div class="md-muted">${esc(item.docente || 'Docente')} · ${esc(fechaTexto(item.enviadoEn))}</div><div class="md-muted">${item.leido ? 'Leído' : 'Pendiente de lectura'}</div></article>`).join('');
  }
  async function abrirBandejaEstudiante() {
    crearInterfaz(); modalEstudiante.classList.add('is-open'); renderBandejaEstudiante();
    const pendientes = mensajesEstudiante.filter(m => m.leido !== true);
    if (typeof window.marcarMensajeDocenteLeidoFirebase === 'function') {
      await Promise.all(pendientes.map(m => window.marcarMensajeDocenteLeidoFirebase(m).catch(() => false)));
    }
  }
  window.abrirMensajeriaDocente = abrirModalDocente;
  window.abrirBandejaMensajesDocente = abrirBandejaEstudiante;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', crearInterfaz, { once: true }); else crearInterfaz();
})();
