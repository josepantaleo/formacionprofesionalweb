(function(){
"use strict";
const VERSION_REQUERIDA="1.3.0";
const CLAVE_TEMA_PANEL_DOCENTE="teacher_panel_theme";
let historialActual=[],estudianteHistorial=null,revisionesActuales=new Map(),salidasSeleccionadas=new Set(),grupoRevisionActual="";
const txt=v=>String(v||"").trim();
function aplicarTemaPanelDocente(tema){
 const claro=tema==="light";
 document.body.classList.toggle("teacher-light-mode",claro);
 document.body.dataset.teacherTheme=claro?"light":"dark";
 document.querySelectorAll("[data-app-theme-toggle]").forEach(boton=>{
  const accion=claro?"oscuro":"claro",icono=claro?"fa-moon":"fa-sun";
  boton.innerHTML=`<i class="fa-solid ${icono}" aria-hidden="true"></i><span>Modo ${accion}</span>`;
  boton.title=`Cambiar a modo ${accion}`;
  boton.setAttribute("aria-label",`Cambiar a modo ${accion}`);
  boton.setAttribute("aria-pressed",String(claro));
 });
}
function alternarTemaAplicacion(){
 const tema=document.body.classList.contains("teacher-light-mode")?"dark":"light";
 localStorage.setItem(CLAVE_TEMA_PANEL_DOCENTE,tema);
 aplicarTemaPanelDocente(tema);
}
function asegurarTemaAplicacion(){
 const contenedor=document.querySelector("header.top-header>div:last-child");if(!contenedor)return;
 let boton=document.getElementById("btnTemaAplicacion");
 if(!boton){
  boton=document.createElement("button");
  boton.id="btnTemaAplicacion";
  boton.type="button";
  boton.className="btn btn-secondary app-theme-toggle";
  boton.dataset.appThemeToggle="";
  const progreso=contenedor.querySelector(".progress-wrapper");
  progreso?contenedor.insertBefore(boton,progreso):contenedor.appendChild(boton);
  boton.onclick=alternarTemaAplicacion;
 }
 aplicarTemaPanelDocente(localStorage.getItem(CLAVE_TEMA_PANEL_DOCENTE)==="light"?"light":"dark");
}
function asegurarTemaPanelDocente(){
 const barra=document.querySelector("#panelProfesorModal .teacher-panel-toolbar");if(!barra)return;
 let boton=document.getElementById("btnTemaPanelDocente");
 if(!boton){
  boton=document.createElement("button");
  boton.id="btnTemaPanelDocente";
  boton.type="button";
  boton.className="btn btn-secondary teacher-theme-toggle";
  boton.dataset.appThemeToggle="";
  const cerrar=barra.querySelector(".teacher-panel-close");
  cerrar?barra.insertBefore(boton,cerrar):barra.appendChild(boton);
  boton.onclick=alternarTemaAplicacion;
 }
 aplicarTemaPanelDocente(localStorage.getItem(CLAVE_TEMA_PANEL_DOCENTE)==="light"?"light":"dark");
}
function ms(v){if(v?.toMillis)return v.toMillis();if(v?.seconds)return Number(v.seconds)*1000;const n=Date.parse(v||"");return Number.isFinite(n)?n:0}
function dominioCoincide(dominio,lista){const d=txt(dominio).toLowerCase().replace(/^www\./,"");return(Array.isArray(lista)?lista:[]).some(x=>{x=txt(x).toLowerCase().replace(/^www\./,"");return x&&(d===x||d.endsWith(`.${x}`))})}
function estadoExtension(d){
 const e=d?.seguimientoExtension||{},c=window.configuracionSeguimientoActual||{},ultimo=ms(e.ultimaSenalEn),edad=ultimo?Math.max(0,(Date.now()-ultimo)/1000):Infinity,aviso=Math.max(15,Number(c.avisoSinConexionSegundos)||30),alerta=Math.max(aviso,Number(c.alertaSinConexionSegundos)||120);
 if(!e.instalada&&!ultimo)return{codigo:"no-instalada",clase:"danger",texto:"No informada",icono:"fa-puzzle-piece",edad};
 if(edad>=alerta)return{codigo:"interrumpida",clase:"danger",texto:"Interrumpida",icono:"fa-plug-circle-xmark",edad};
 if(edad>=aviso)return{codigo:"sin-conexion",clase:"warning",texto:"Sin conexión",icono:"fa-signal",edad};
 if(e.activa===true)return{codigo:"activa",clase:"ok",texto:"Activa",icono:"fa-circle-check",edad};
 return{codigo:"detenida",clase:"warning",texto:"Detenida",icono:"fa-circle-pause",edad};
}
function antiguedad(s){if(!Number.isFinite(s))return"sin señal";if(s<60)return`hace ${Math.round(s)} s`;if(s<3600)return`hace ${Math.floor(s/60)} min`;return`hace ${Math.floor(s/3600)} h`}
function claseDominio(d){
 const c=window.configuracionSeguimientoActual||{};
 if(!d)return{clase:"allowed",texto:"En la actividad",icono:"fa-house"};
 if(dominioCoincide(d,c.dominiosIgnorados))return{clase:"",texto:"Ignorado",icono:"fa-eye-slash"};
 if(dominioCoincide(d,c.dominiosAlerta))return{clase:"danger",texto:"Revisar",icono:"fa-triangle-exclamation"};
 if(dominioCoincide(d,c.dominiosPermitidos))return{clase:"allowed",texto:"Permitido",icono:"fa-circle-check"};
 return{clase:"warning",texto:"Sin clasificar",icono:"fa-circle-question"};
}
function cargarFormulario(c={}){
 const poner=(id,v)=>{const x=document.getElementById(id);if(x&&document.activeElement!==x)x.value=v??""};
 poner("configLimiteSalidas",c.limiteSalidas??5);poner("configDuracionMinima",c.duracionMinimaSegundos??3);poner("configAvisoOffline",c.avisoSinConexionSegundos??30);poner("configAlertaOffline",c.alertaSinConexionSegundos??120);poner("configRetencionDias",c.retencionDias??180);
 poner("configDominiosPermitidos",(c.dominiosPermitidos||[]).join("\n"));poner("configDominiosAlerta",(c.dominiosAlerta||[]).join("\n"));poner("configDominiosIgnorados",(c.dominiosIgnorados||[]).join("\n"));
 const b=document.getElementById("configBloqueoAutomatico");if(b&&document.activeElement!==b)b.checked=c.bloqueoAutomatico!==false;
}
async function guardarConfiguracion(){
 const estado=document.getElementById("estadoConfiguracionSeguimiento"),valor=id=>document.getElementById(id)?.value||"";
 const c={limiteSalidas:Number(valor("configLimiteSalidas"))||5,duracionMinimaSegundos:Number(valor("configDuracionMinima"))||0,avisoSinConexionSegundos:Number(valor("configAvisoOffline"))||30,alertaSinConexionSegundos:Number(valor("configAlertaOffline"))||120,retencionDias:Number(valor("configRetencionDias"))||180,bloqueoAutomatico:document.getElementById("configBloqueoAutomatico")?.checked!==false,dominiosPermitidos:valor("configDominiosPermitidos"),dominiosAlerta:valor("configDominiosAlerta"),dominiosIgnorados:valor("configDominiosIgnorados")};
 if(estado)estado.textContent="Guardando...";
 const ok=await window.guardarConfiguracionSeguimientoFirebase?.(c);
 if(estado){estado.className=`tracking-status-badge ${ok?"ok":"danger"}`;estado.textContent=ok?"Configuración guardada":"No se pudo guardar"}
}
function asegurarPaneles(){
 const filtros=document.getElementById("filtrosPanelProfesor");if(!filtros)return;
 if(!document.getElementById("filtroSeguimientoProfesor")){
  filtros.insertAdjacentHTML("beforeend",`<select id="filtroSeguimientoProfesor" aria-label="Filtrar por estado de extensión"><option value="">Todas las extensiones</option><option value="activa">Extensión activa</option><option value="detenida">Seguimiento detenido</option><option value="sin-conexion">Sin conexión</option><option value="interrumpida">Seguimiento interrumpido</option><option value="no-instalada">Sin extensión informada</option></select><input id="filtroDominioSeguimientoProfesor" placeholder="Dominio actual" aria-label="Filtrar por dominio actual">`);
  document.getElementById("filtroSeguimientoProfesor").addEventListener("change",filtrarTabla);document.getElementById("filtroDominioSeguimientoProfesor").addEventListener("input",filtrarTabla);
 }
 if(!document.getElementById("configuracionSeguimientoProfesor")){
  const p=document.createElement("section");p.id="configuracionSeguimientoProfesor";p.className="tracking-config-panel";
  p.innerHTML=`<div class="tracking-panel-heading"><h4><i class="fa-solid fa-shield-halved"></i> Configuración de seguimiento y bloqueo</h4><span id="estadoConfiguracionSeguimiento" class="tracking-status-badge">Clase actual</span></div><div class="tracking-config-grid">
  <div class="tracking-config-field"><label>Salidas antes del bloqueo<input id="configLimiteSalidas" type="number" min="1" max="50"></label></div><div class="tracking-config-field"><label>Duración mínima (segundos)<input id="configDuracionMinima" type="number" min="0" max="300"></label></div><div class="tracking-config-field"><label>Aviso sin conexión (segundos)<input id="configAvisoOffline" type="number" min="15" max="600"></label></div><div class="tracking-config-field"><label>Interrupción después de (segundos)<input id="configAlertaOffline" type="number" min="60" max="3600"></label></div><div class="tracking-config-field"><label>Conservar historial (días)<input id="configRetencionDias" type="number" min="1" max="3650"></label></div><div class="tracking-config-field"><label><input id="configBloqueoAutomatico" type="checkbox"> Bloqueo automático</label></div>
  <div class="tracking-config-field wide"><label>Dominios permitidos<textarea id="configDominiosPermitidos" placeholder="developer.mozilla.org"></textarea></label></div><div class="tracking-config-field wide"><label>Dominios que generan alerta<textarea id="configDominiosAlerta" placeholder="chatgpt.com"></textarea></label></div><div class="tracking-config-field wide"><label>Dominios ignorados<textarea id="configDominiosIgnorados" placeholder="accounts.google.com"></textarea></label></div></div>
  <div class="tracking-config-actions"><button class="btn btn-primary" id="guardarConfiguracionSeguimiento" type="button"><i class="fa-solid fa-floppy-disk"></i> Guardar configuración</button><button class="btn btn-secondary" id="restaurarConfiguracionSeguimiento" type="button"><i class="fa-solid fa-arrow-rotate-left"></i> Restaurar recomendados</button></div><p class="tracking-config-note"><i class="fa-solid fa-user-shield"></i> Las alertas requieren revisión docente y nunca descuentan puntos automáticamente. No se guarda la URL completa.</p>`;
  filtros.parentNode.insertBefore(p,filtros);document.getElementById("guardarConfiguracionSeguimiento").onclick=guardarConfiguracion;document.getElementById("restaurarConfiguracionSeguimiento").onclick=()=>cargarFormulario({limiteSalidas:5,duracionMinimaSegundos:3,bloqueoAutomatico:true,avisoSinConexionSegundos:30,alertaSinConexionSegundos:120,retencionDias:180});
 }
 if(!document.getElementById("incidenciasSeguimientoProfesor")){const p=document.createElement("section");p.id="incidenciasSeguimientoProfesor";p.className="tracking-incidents-panel";const r=document.getElementById("resumenProfesor");r?.parentNode.insertBefore(p,r)}
 cargarFormulario(window.configuracionSeguimientoActual||{});
 asegurarTemaPanelDocente();
 asegurarPopupLimite();
 actualizarIndicadorLimite();
 asegurarPestanasPanelDocente();
}
function crearPanelDocente(id,titulo,descripcion){
 const panel=document.createElement("section");panel.id=`teacherWorkspacePanel-${id}`;panel.className="teacher-workspace-panel";panel.dataset.teacherPanel=id;panel.innerHTML=`<div class="teacher-workspace-panel-heading"><div><h3>${titulo}</h3><p>${descripcion}</p></div></div>`;return panel;
}
function asegurarPestanasPanelDocente(){
 const contenido=document.querySelector("#panelProfesorModal .teacher-panel-content");if(!contenido)return;
 if(document.getElementById("teacherWorkspaceTabs")){actualizarBadgesPestanas();return}
 const referencias={
  estado:document.getElementById("estadoClaseProfesor"),alerta:document.getElementById("alertaNuevaSolicitud"),solicitudes:document.getElementById("solicitudesPendientesProfesor"),docentes:document.getElementById("cantidadDocentesAutorizados")?.closest("details"),leyenda:contenido.querySelector(".teacher-icon-legend"),config:document.getElementById("configuracionSeguimientoProfesor"),incidencias:document.getElementById("incidenciasSeguimientoProfesor"),resumen:document.getElementById("resumenProfesor"),resumenIA:document.getElementById("resumenConsultasIAProfesor"),filtros:document.getElementById("filtrosPanelProfesor"),tabla:contenido.querySelector(".teacher-table-scroll"),estadoPanel:document.getElementById("estadoPanelProfesor"),tituloFiltros:[...contenido.querySelectorAll(".teacher-section-title")].find(x=>x.textContent.includes("Filtros")),calculo:[...contenido.children].find(x=>x.tagName==="DIV"&&x.textContent.includes("Cómo se calcula"))
 };
 const pestañas=[["resumen","fa-chart-pie","Resumen"],["estudiantes","fa-users","Estudiantes"],["seguimiento","fa-shield-halved","Seguimiento"],["solicitudes","fa-user-clock","Solicitudes"],["docentes","fa-user-shield","Docentes"]];
 const nav=document.createElement("nav");nav.id="teacherWorkspaceTabs";nav.className="teacher-workspace-tabs";nav.setAttribute("aria-label","Secciones del panel docente");nav.innerHTML=pestañas.map(x=>`<button class="teacher-workspace-tab" type="button" data-teacher-tab="${x[0]}" data-tab-label="${x[2]}" data-tooltip="${x[2]} · 0" aria-label="${x[2]}: 0" title="${x[2]}" aria-controls="teacherWorkspacePanel-${x[0]}"><i class="fa-solid ${x[1]}" aria-hidden="true"></i><span>${x[2]}</span><span class="teacher-workspace-tab-count" data-tab-count="${x[0]}">0</span></button>`).join("");
 const paneles={
  resumen:crearPanelDocente("resumen","Resumen general","Estado de la clase, alertas y métricas principales."),
  estudiantes:crearPanelDocente("estudiantes","Estudiantes","Filtros, calificaciones, progreso y acciones individuales."),
  seguimiento:crearPanelDocente("seguimiento","Seguimiento y bloqueo","Límite de salidas, conexión de la extensión, dominios y retención."),
  solicitudes:crearPanelDocente("solicitudes","Solicitudes de acceso","Altas pendientes y aprobación de estudiantes."),
  docentes:crearPanelDocente("docentes","Docentes autorizados","Cuentas que pueden administrar el panel y sus registros.")
 };
 contenido.prepend(nav);Object.values(paneles).forEach(p=>contenido.appendChild(p));
 [referencias.estado,referencias.alerta,referencias.incidencias,referencias.resumen,referencias.resumenIA].filter(Boolean).forEach(x=>paneles.resumen.appendChild(x));
 [referencias.leyenda,referencias.tituloFiltros,referencias.filtros,referencias.calculo,referencias.tabla,referencias.estadoPanel].filter(Boolean).forEach(x=>paneles.estudiantes.appendChild(x));
 [referencias.config].filter(Boolean).forEach(x=>paneles.seguimiento.appendChild(x));
 [referencias.solicitudes].filter(Boolean).forEach(x=>paneles.solicitudes.appendChild(x));
 [referencias.docentes].filter(Boolean).forEach(x=>paneles.docentes.appendChild(x));
 [...contenido.children].filter(x=>x!==nav&&!Object.values(paneles).includes(x)).forEach(x=>paneles.resumen.appendChild(x));
 nav.querySelectorAll("[data-teacher-tab]").forEach(b=>b.onclick=()=>{activarPestanaDocente(b.dataset.teacherTab);if(window.matchMedia("(max-width: 900px)").matches){nav.querySelectorAll(".show-mobile-tooltip").forEach(x=>x.classList.remove("show-mobile-tooltip"));b.classList.add("show-mobile-tooltip");clearTimeout(b._tooltipTimer);b._tooltipTimer=setTimeout(()=>b.classList.remove("show-mobile-tooltip"),1600)}});
 activarPestanaDocente(localStorage.getItem("teacher_panel_active_tab")||"resumen");actualizarBadgesPestanas();
}
function activarPestanaDocente(id){
 const valido=["resumen","estudiantes","seguimiento","solicitudes","docentes"].includes(id)?id:"resumen";document.querySelectorAll(".teacher-workspace-tab").forEach(b=>{const activo=b.dataset.teacherTab===valido;b.classList.toggle("active",activo);b.setAttribute("aria-selected",String(activo));b.tabIndex=activo?0:-1});document.querySelectorAll(".teacher-workspace-panel").forEach(p=>{const activo=p.dataset.teacherPanel===valido;p.classList.toggle("active",activo);p.hidden=!activo});localStorage.setItem("teacher_panel_active_tab",valido);document.querySelector(`#teacherWorkspacePanel-${valido}`)?.scrollIntoView({block:"start",behavior:"smooth"});
}
function actualizarBadgesPestanas(){
 const datos=Array.isArray(estudiantesProfesor)?estudiantesProfesor:[],activos=datos.filter(x=>x.estadoCuenta==="activo"),pendientes=datos.filter(x=>x.estadoCuenta==="pendiente").length,problemas=activos.filter(x=>{const e=estadoExtension(x);return x.pantallaBloqueada===true||["sin-conexion","interrumpida","no-instalada"].includes(e.codigo)||claseDominio(x.seguimientoExtension?.dominioActual).clase==="danger"}).length,valores={resumen:problemas,estudiantes:datos.length,seguimiento:problemas,solicitudes:pendientes,docentes:Array.isArray(window.TEACHER_EMAILS)?window.TEACHER_EMAILS.length:0};Object.entries(valores).forEach(([id,n])=>{const x=document.querySelector(`[data-tab-count="${id}"]`),boton=document.querySelector(`[data-teacher-tab="${id}"]`);if(x)x.textContent=String(n);if(boton){const etiqueta=boton.dataset.tabLabel||id;boton.dataset.tooltip=`${etiqueta} · ${n}`;boton.setAttribute("aria-label",`${etiqueta}: ${n}`);boton.title=`${etiqueta}: ${n}`}});
}
function limiteActual(){return Math.max(1,Math.min(50,Number(window.configuracionSeguimientoActual?.limiteSalidas)||5))}
function actualizarIndicadorLimite(valor=limiteActual()){
 const numero=Math.max(1,Math.min(50,Number(valor)||5)),etiqueta=document.getElementById("limiteBloqueoProfesorValor"),campo=document.getElementById("configLimiteSalidas");
 if(etiqueta)etiqueta.textContent=String(numero);
 if(campo&&document.activeElement!==campo)campo.value=String(numero);
}
function asegurarPopupLimite(){
 if(document.getElementById("configurarLimiteBloqueoModal"))return;
 const modal=document.createElement("div");modal.id="configurarLimiteBloqueoModal";modal.className="modal-overlay";modal.setAttribute("role","dialog");modal.setAttribute("aria-modal","true");modal.setAttribute("aria-labelledby","configurarLimiteBloqueoTitulo");
 modal.innerHTML=`<div class="modal-box tracking-limit-box" tabindex="-1"><div class="tracking-limit-header"><div class="tracking-limit-heading"><span class="tracking-limit-icon"><i class="fa-solid fa-lock"></i></span><div><h3 id="configurarLimiteBloqueoTitulo">Cantidad de salidas para bloquear</h3><p>Elegí cuántas veces puede salir el estudiante antes de que su pantalla quede bloqueada.</p></div></div><button class="btn btn-secondary" id="cerrarLimiteBloqueo" type="button" aria-label="Cerrar"><i class="fa-solid fa-xmark"></i></button></div><div class="tracking-limit-presets" aria-label="Cantidades rápidas">${[3,5,7,10].map(n=>`<button class="btn btn-secondary tracking-limit-preset" type="button" data-limit="${n}">${n} salidas</button>`).join("")}</div><div class="tracking-limit-control"><input id="limiteBloqueoRango" type="range" min="1" max="50" step="1" aria-label="Cantidad de salidas"><input id="limiteBloqueoNumero" type="number" min="1" max="50" step="1" aria-label="Cantidad personalizada"></div><div id="limiteBloqueoPreview" class="tracking-limit-preview"></div><div id="limiteBloqueoError" role="alert" style="display:none;color:#fca5a5;font-size:.78rem;margin-bottom:.65rem"></div><div class="tracking-limit-actions"><button class="btn btn-secondary" id="cancelarLimiteBloqueo" type="button">Cancelar</button><button class="btn btn-warning" id="guardarLimiteBloqueo" type="button"><i class="fa-solid fa-floppy-disk"></i> Guardar límite</button></div></div>`;
 document.body.appendChild(modal);
 const rango=modal.querySelector("#limiteBloqueoRango"),numero=modal.querySelector("#limiteBloqueoNumero"),actualizar=valor=>{valor=Math.max(1,Math.min(50,Number(valor)||1));rango.value=numero.value=String(valor);modal.querySelector("#limiteBloqueoPreview").innerHTML=`<i class="fa-solid fa-shield-halved"></i> La pantalla se bloqueará al alcanzar <strong>${valor} salida${valor===1?"":"s"}</strong>. Después necesitará autorización docente.`;modal.querySelectorAll(".tracking-limit-preset").forEach(b=>b.classList.toggle("is-selected",Number(b.dataset.limit)===valor))};
 rango.addEventListener("input",()=>actualizar(rango.value));numero.addEventListener("input",()=>actualizar(numero.value));modal.querySelectorAll(".tracking-limit-preset").forEach(b=>b.onclick=()=>actualizar(b.dataset.limit));
 const cerrar=()=>modal.classList.remove("active");modal.querySelector("#cerrarLimiteBloqueo").onclick=cerrar;modal.querySelector("#cancelarLimiteBloqueo").onclick=cerrar;modal.addEventListener("click",e=>{if(e.target===modal)cerrar()});
 modal.querySelector("#guardarLimiteBloqueo").onclick=async()=>{
  const valor=Math.max(1,Math.min(50,Number(numero.value)||5)),boton=modal.querySelector("#guardarLimiteBloqueo"),error=modal.querySelector("#limiteBloqueoError"),original=boton.innerHTML;error.style.display="none";boton.disabled=true;boton.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Guardando...';
  const ok=await window.guardarConfiguracionSeguimientoFirebase?.({...window.configuracionSeguimientoActual,limiteSalidas:valor});
  boton.disabled=false;boton.innerHTML=original;
  if(!ok){error.textContent="No se pudo guardar. Verificá la autorización docente y las reglas de Firebase.";error.style.display="block";return}
  window.configuracionSeguimientoActual={...window.configuracionSeguimientoActual,limiteSalidas:valor};actualizarIndicadorLimite(valor);cargarFormulario(window.configuracionSeguimientoActual);cerrar();
 };
 modal._actualizarLimite=actualizar;
}
function abrirConfiguracionLimiteBloqueo(){
 asegurarPopupLimite();const modal=document.getElementById("configurarLimiteBloqueoModal");modal._actualizarLimite?.(limiteActual());modal.querySelector("#limiteBloqueoError").style.display="none";modal.classList.add("active");setTimeout(()=>modal.querySelector("#limiteBloqueoNumero")?.focus(),0);
}
window.abrirConfiguracionLimiteBloqueo=abrirConfiguracionLimiteBloqueo;
function renderIncidencias(){
 const panel=document.getElementById("incidenciasSeguimientoProfesor");if(!panel||!Array.isArray(estudiantesProfesor))return;
 const activos=estudiantesProfesor.filter(x=>x.estadoCuenta==="activo"),items=activos.map(estudiante=>{
  const estado=estadoExtension(estudiante),ext=estudiante.seguimientoExtension||{},dominio=txt(ext.dominioActual),clasificacion=claseDominio(dominio),problemas=[];
  if(["interrumpida","no-instalada","sin-conexion"].includes(estado.codigo))problemas.push(estado.texto);
  if(clasificacion.clase==="danger")problemas.push(`Dominio en alerta: ${dominio}`);
  if(estudiante.pantallaBloqueada===true)problemas.push("Pantalla bloqueada");
  if(Number(ext.pendientes||0)>0)problemas.push(`${ext.pendientes} evento(s) pendiente(s)`);
  return{estudiante,problemas};
 }).filter(x=>x.problemas.length);
 const contar=fn=>activos.filter(fn).length;
 panel.innerHTML=`<div class="tracking-panel-heading"><h4><i class="fa-solid fa-triangle-exclamation"></i> Incidencias de seguimiento</h4><span>${items.length} requieren revisión</span></div><div class="tracking-incidents-summary">
 <div class="tracking-incident-stat"><small>Bloqueados</small><strong>${contar(x=>x.pantallaBloqueada===true)}</strong></div><div class="tracking-incident-stat"><small>Sin conexión</small><strong>${contar(x=>["sin-conexion","interrumpida"].includes(estadoExtension(x).codigo))}</strong></div><div class="tracking-incident-stat"><small>Sin extensión</small><strong>${contar(x=>estadoExtension(x).codigo==="no-instalada")}</strong></div><div class="tracking-incident-stat"><small>Dominios en alerta</small><strong>${contar(x=>claseDominio(x.seguimientoExtension?.dominioActual).clase==="danger")}</strong></div></div>
 <div class="tracking-incident-list">${items.slice(0,20).map(x=>{const n=x.estudiante.estudiante?.nombre||x.estudiante.nombreGoogle||x.estudiante.email||"Estudiante",grave=x.problemas.some(t=>/Interrumpida|No informada|bloqueada|Dominio/.test(t));return`<div class="tracking-incident-item ${grave?"danger":""}"><strong>${escapeHtml(n)}</strong><span>${x.problemas.map(escapeHtml).join(" · ")}</span></div>`}).join("")||'<p style="color:var(--text-muted);margin:0">No hay incidencias de seguimiento.</p>'}</div>`;
}
function mejorarTablaSeguimientoLegacy(){
 const tabla=document.querySelector("#tablaProfesorBody")?.closest("table"),head=tabla?.querySelector("thead tr");if(!head)return;
 if(!head.querySelector('[data-tracking-column]'))head.insertAdjacentHTML("beforeend",'<th data-tracking-column="status">Seguimiento</th><th data-tracking-column="visit">Visita actual</th>');
 [...document.querySelectorAll("#tablaProfesorBody>tr.teacher-actions-row td")].forEach(celda=>celda.colSpan=15);
 [...document.querySelectorAll("#tablaProfesorBody>tr:not(.teacher-actions-row)")].forEach(fila=>{
  if(fila.querySelector("[data-tracking-cell]"))return;
  if(fila.children.length===1){fila.firstElementChild.colSpan=15;return}
  const email=txt(fila.children[3]?.textContent).toLowerCase(),d=estudiantesProfesor.find(x=>txt(x.email).toLowerCase()===email);if(!d)return;
  const ext=d.seguimientoExtension||{},estado=estadoExtension(d),status=document.createElement("td"),visit=document.createElement("td"),dominio=txt(ext.dominioActual),clasificacion=claseDominio(dominio),vieja=ext.version&&ext.version!==VERSION_REQUERIDA;
  status.dataset.trackingCell="status";status.dataset.label="Seguimiento";status.innerHTML=`<span class="tracking-status-badge ${estado.clase}"><i class="fa-solid ${estado.icono}"></i> ${escapeHtml(estado.texto)}</span><span class="tracking-cell-detail">${escapeHtml(antiguedad(estado.edad))} · v${escapeHtml(ext.version||"sin dato")}${vieja?` · actualizar a ${VERSION_REQUERIDA}`:""}</span>${Number(ext.pendientes||0)?`<span class="tracking-cell-detail">${Number(ext.pendientes)} pendiente(s)</span>`:""}`;
  visit.dataset.trackingCell="visit";visit.dataset.label="Visita actual";visit.innerHTML=dominio?`<span class="tracking-domain-badge ${clasificacion.clase}"><i class="fa-solid ${clasificacion.icono}"></i> ${escapeHtml(dominio)}</span><span class="tracking-current-title">${escapeHtml(ext.tituloActual||"Sin título")}</span><span class="tracking-cell-detail">${ext.visitaIniciadaEn?`Desde ${escapeHtml(new Date(ext.visitaIniciadaEn).toLocaleTimeString("es-AR"))}`:""}</span>`:'<span class="tracking-domain-badge allowed"><i class="fa-solid fa-house"></i> En la actividad</span>';
  fila.append(status,visit);
 });
 filtrarTabla();renderIncidencias();
}
function mejorarTabla(){
 const tabla=document.querySelector("#tablaProfesorBody")?.closest("table"),head=tabla?.querySelector("thead tr");if(!head)return;
 while(head.children.length>12)head.lastElementChild.remove();
 document.querySelectorAll("#tablaProfesorBody>tr.teacher-actions-row td").forEach(celda=>celda.colSpan=12);
 document.querySelectorAll("#tablaProfesorBody>tr:not(.teacher-actions-row)").forEach(fila=>{
  if(fila.children.length===1){fila.firstElementChild.colSpan=12;return}
  while(fila.children.length>12)fila.lastElementChild.remove();
 });
 filtrarTabla();
 renderIncidencias();
}
function filtrarTabla(){
 const ef=document.getElementById("filtroSeguimientoProfesor")?.value||"",df=txt(document.getElementById("filtroDominioSeguimientoProfesor")?.value).toLowerCase();
 [...document.querySelectorAll("#tablaProfesorBody>tr:not(.teacher-actions-row)")].forEach(fila=>{
  if(fila.children.length<4)return;const email=txt(fila.children[3]?.textContent).toLowerCase(),d=estudiantesProfesor.find(x=>txt(x.email).toLowerCase()===email);if(!d)return;
  const visible=(!ef||estadoExtension(d).codigo===ef)&&(!df||txt(d.seguimientoExtension?.dominioActual).toLowerCase().includes(df));fila.style.display=visible?"":"none";const extra=fila.nextElementSibling?.classList.contains("teacher-actions-row")?fila.nextElementSibling:null;if(extra)extra.style.display=visible?"":"none";
 });
}
function agregarBotonesComunicacionFilas(){
 const filas=[...document.querySelectorAll("#tablaProfesorBody>tr:not(.teacher-actions-row)")];
 filas.forEach(fila=>{
  if(fila.querySelector("[data-comunicacion-fila]"))return;
  const email=txt(fila.children[3]?.textContent).toLowerCase();
  if(!email.includes("@"))return;
  const filaAcciones=fila.nextElementSibling?.classList.contains("teacher-actions-row")
    ?fila.nextElementSibling
    :null;
  const celdaAcciones=filaAcciones?.querySelector(".teacher-action-buttons")
    ||filaAcciones?.querySelector("td")
    ||fila.querySelector(".acciones-principales-cell");
  const acciones=celdaAcciones;
  if(!acciones)return;
  const grupo=document.createElement("span");
  grupo.dataset.comunicacionFila="true";
  grupo.className="student-communication-actions";
  grupo.innerHTML=`<button type="button" class="btn btn-secondary btn-comunicacion-fila" title="Abrir chat con ${escapeHtml(email)}"><i class="fa-solid fa-comments"></i><span>Chat</span></button><button type="button" class="btn btn-success btn-comunicacion-fila" title="Videollamada con ${escapeHtml(email)}"><i class="fa-solid fa-video"></i><span>Video</span></button>`;
  grupo.querySelector(".btn-comunicacion-fila").onclick=()=>window.abrirComunicacionConEstudiante?.(email,"chat");
  grupo.querySelectorAll(".btn-comunicacion-fila")[1].onclick=()=>window.abrirComunicacionConEstudiante?.(email,"video");
  grupo.style.display="grid";
  acciones.appendChild(grupo);
 });
}
function agrupar(eventos){
 const mapa=new Map(),grupos=[];[...eventos].sort((a,b)=>ms(a.salidaEn)-ms(b.salidaEn)).forEach(e=>{const id=txt(e.salidaGrupoId)||`legacy-${e.id}`;let g=mapa.get(id);if(!g){g={id,eventos:[]};mapa.set(id,g);grupos.push(g)}g.eventos.push(e)});return grupos.sort((a,b)=>ms(b.eventos[0]?.salidaEn)-ms(a.eventos[0]?.salidaEn));
}
function datosGrupo(g){
 const eventos=g?.eventos||[],segundos=eventos.reduce((s,e)=>s+Math.max(0,Number(e.duracionSegundos)||0),0),dominios=[...new Set(eventos.map(e=>e.dominioDestino).filter(Boolean))],primero=eventos[0]||{},revision=revisionesActuales.get(g.id)||{estado:"pendiente",motivo:"",observacion:"",etiquetas:[],contabiliza:true};
 return{eventos,segundos,dominios,primero,revision,inicio:ms(primero.salidaEn),paginas:eventos.length,seccion:primero.seccionTitulo||primero.seccionOrigen||"",clase:primero.claseId||"",version:primero.extensionVersion||""};
}
function etiquetaEstado(estado){
 return{pendiente:["Pendiente","pending","fa-clock"],revisada:["Revisada","info","fa-circle-check"],justificada:["Justificada","success","fa-shield-heart"],no_justificada:["No justificada","danger","fa-triangle-exclamation"],permitida:["Permitida","success","fa-circle-check"],advertencia:["Advertencia","danger","fa-flag"]}[estado]||["Pendiente","pending","fa-clock"];
}
function asegurarModalesRevision(){
 if(!document.getElementById("revisionSalidaPestanaModal")){
  const modal=document.createElement("div");modal.id="revisionSalidaPestanaModal";modal.className="modal-overlay";modal.setAttribute("role","dialog");modal.setAttribute("aria-modal","true");
  modal.innerHTML=`<div class="modal-box tab-review-box" tabindex="-1"><div class="tracking-limit-header"><div class="tracking-limit-heading"><span class="tracking-limit-icon"><i class="fa-solid fa-clipboard-check"></i></span><div><h3>Revisar salida de pestaña</h3><p id="revisionSalidaResumen">Clasificá la salida y agregá una observación docente.</p></div></div><button class="btn btn-secondary" id="cerrarRevisionSalida" type="button"><i class="fa-solid fa-xmark"></i></button></div><div class="tab-review-form"><div class="tab-review-field"><label>Estado<select id="revisionSalidaEstado"><option value="pendiente">Pendiente</option><option value="revisada">Revisada</option><option value="justificada">Justificada</option><option value="no_justificada">No justificada</option><option value="permitida">Permitida</option><option value="advertencia">Advertencia</option></select></label></div><div class="tab-review-field"><label>Motivo<select id="revisionSalidaMotivo"><option value="">Sin especificar</option><option>Investigación solicitada</option><option>Consulta de documentación</option><option>Acceso autorizado por docente</option><option>Error técnico</option><option>Notificación del sistema</option><option>Cambio accidental</option><option>Distracción</option><option>Uso no autorizado de IA</option><option>Red social o entretenimiento</option><option>Otro</option></select></label></div><div class="tab-review-field wide"><label>Observación docente<textarea id="revisionSalidaObservacion" maxlength="1000" placeholder="Contexto, justificación o medida tomada"></textarea></label></div><div class="tab-review-field wide"><label>Etiquetas</label><div class="tab-review-tags">${["investigación","documentación","IA","red social","video","juego","técnico","accidental","reincidente","autorizada"].map(x=>`<label><input type="checkbox" value="${x}"> ${x}</label>`).join("")}</div></div><div class="tab-review-field wide"><label><input id="revisionSalidaContabiliza" type="checkbox" checked style="width:auto"> Mantener esta salida en el conteo de revisión</label></div></div><div id="revisionSalidaError" style="display:none;color:#fca5a5;font-size:.78rem;margin:.6rem 0"></div><div class="tracking-limit-actions"><button class="btn btn-secondary" id="cancelarRevisionSalida" type="button">Cancelar</button><button class="btn btn-primary" id="guardarRevisionSalida" type="button"><i class="fa-solid fa-floppy-disk"></i> Guardar revisión</button></div></div>`;
  document.body.appendChild(modal);const cerrar=()=>modal.classList.remove("active");modal.querySelector("#cerrarRevisionSalida").onclick=cerrar;modal.querySelector("#cancelarRevisionSalida").onclick=cerrar;modal.onclick=e=>{if(e.target===modal)cerrar()};modal.querySelector("#guardarRevisionSalida").onclick=guardarRevisionSalida;
 }
 if(!document.getElementById("auditoriaSalidaPestanaModal")){
  const modal=document.createElement("div");modal.id="auditoriaSalidaPestanaModal";modal.className="modal-overlay";modal.setAttribute("role","dialog");modal.setAttribute("aria-modal","true");
  modal.innerHTML=`<div class="modal-box history-modal-box"><div class="history-modal-header"><div><h3><i class="fa-solid fa-clock-rotate-left"></i> Auditoría de la salida</h3><p id="auditoriaSalidaSubtitulo">Historial inmutable de cambios docentes.</p></div><button class="btn btn-secondary" id="cerrarAuditoriaSalida" type="button"><i class="fa-solid fa-xmark"></i> Cerrar</button></div><div id="auditoriaSalidaContenido" class="tab-audit-list"></div></div>`;
  document.body.appendChild(modal);modal.querySelector("#cerrarAuditoriaSalida").onclick=()=>modal.classList.remove("active");modal.onclick=e=>{if(e.target===modal)modal.classList.remove("active")};
 }
}
function abrirRevisionSalida(grupoId){
 asegurarModalesRevision();grupoRevisionActual=grupoId;const grupo=agrupar(historialActual).find(g=>g.id===grupoId),d=datosGrupo(grupo),r=d.revision,modal=document.getElementById("revisionSalidaPestanaModal");
 modal.querySelector("#revisionSalidaResumen").textContent=`${d.paginas} página(s) · ${d.dominios.join(", ")||"sin dominio"} · ${Math.round(d.segundos)} segundos`;
 modal.querySelector("#revisionSalidaEstado").value=r.estado||"pendiente";modal.querySelector("#revisionSalidaMotivo").value=r.motivo||"";modal.querySelector("#revisionSalidaObservacion").value=r.observacion||"";modal.querySelector("#revisionSalidaContabiliza").checked=r.contabiliza!==false;
 modal.querySelectorAll(".tab-review-tags input").forEach(x=>x.checked=(r.etiquetas||[]).includes(x.value));modal.querySelector("#revisionSalidaError").style.display="none";modal.classList.add("active");
}
async function guardarRevisionSalida(){
 const modal=document.getElementById("revisionSalidaPestanaModal"),boton=modal.querySelector("#guardarRevisionSalida"),error=modal.querySelector("#revisionSalidaError"),revision={estado:modal.querySelector("#revisionSalidaEstado").value,motivo:modal.querySelector("#revisionSalidaMotivo").value,observacion:modal.querySelector("#revisionSalidaObservacion").value.trim(),etiquetas:[...modal.querySelectorAll(".tab-review-tags input:checked")].map(x=>x.value),contabiliza:modal.querySelector("#revisionSalidaContabiliza").checked},original=boton.innerHTML;
 if(["no_justificada","advertencia"].includes(revision.estado)&&!revision.observacion){error.textContent="Agregá una observación para una salida no justificada o con advertencia.";error.style.display="block";return}
 boton.disabled=true;boton.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Guardando...';const ok=await window.guardarRevisionPestanaFirebase?.(estudianteHistorial?.uid,grupoRevisionActual,revision);boton.disabled=false;boton.innerHTML=original;
 if(!ok){error.textContent=`No se pudo guardar${window.ultimoErrorRevisionPestana?.code?` (${window.ultimoErrorRevisionPestana.code})`:""}. Publicá las reglas actualizadas.`;error.style.display="block";return}
 revisionesActuales.set(grupoRevisionActual,{...revision,docente:window.firebaseTeacherUser?.email||window.firebaseCurrentUser?.email||"",revisadoEn:new Date().toISOString()});modal.classList.remove("active");decorarSalidas();aplicarFiltrosHistorial();
}
async function abrirAuditoriaSalida(grupoId){
 asegurarModalesRevision();const modal=document.getElementById("auditoriaSalidaPestanaModal"),contenido=modal.querySelector("#auditoriaSalidaContenido");modal.classList.add("active");contenido.innerHTML='<p><i class="fa-solid fa-spinner fa-spin"></i> Cargando...</p>';
 const eventos=await window.obtenerHistorialRevisionesPestanasFirebase?.(estudianteHistorial?.uid,grupoId)||[];
 contenido.innerHTML=eventos.length?eventos.map(e=>`<article class="tab-audit-event"><strong>${escapeHtml(e.estadoAnterior||"pendiente")} → ${escapeHtml(e.estadoNuevo||"")}</strong><div class="history-event-meta"><span><b>Fecha:</b> ${escapeHtml(new Date(ms(e.cambiadoEn)).toLocaleString("es-AR"))}</span><span><b>Docente:</b> ${escapeHtml(e.docente||"")}</span><span><b>Conteo:</b> ${e.contabilizabaAntes!==false?"incluida":"excluida"} → ${e.contabilizaAhora!==false?"incluida":"excluida"}</span></div>${e.motivoNuevo?`<p><b>Motivo:</b> ${escapeHtml(e.motivoNuevo)}</p>`:""}${e.observacionNueva?`<p>${escapeHtml(e.observacionNueva)}</p>`:""}</article>`).join(""):'<p style="color:var(--text-muted)">Todavía no hay cambios de revisión para esta salida.</p>';
}
function asegurarFiltrosHistorial(){
 const contenido=document.getElementById("historialPestanasContenido");if(!contenido||document.getElementById("filtrosHistorialPestanasMejoras"))return;
 contenido.insertAdjacentHTML("beforebegin",`<div id="filtrosHistorialPestanasMejoras"><div class="tab-history-filters"><label>Buscar título o dominio<input id="historialPestanasBuscar" type="search" placeholder="Ej.: chatgpt.com"></label><label>Clase<select id="historialPestanasClase"><option value="">Todas</option></select></label><label>Desde<input id="historialPestanasDesde" type="date"></label><label>Hasta<input id="historialPestanasHasta" type="date"></label><label>Período<select id="historialPestanasPeriodo"><option value="">Todo</option><option value="1">Hoy</option><option value="7">Últimos 7 días</option><option value="30">Últimos 30 días</option></select></label></div><div class="tab-history-toolbar"><button class="btn btn-secondary" id="limpiarFiltrosHistorialPestanas" type="button"><i class="fa-solid fa-filter-circle-xmark"></i> Limpiar</button><button class="btn btn-secondary" id="exportarHistorialPestanasCsv" type="button"><i class="fa-solid fa-file-csv"></i> Exportar CSV</button><button class="btn btn-secondary" id="imprimirHistorialPestanas" type="button"><i class="fa-solid fa-file-pdf"></i> Imprimir / PDF</button><span id="resumenFiltroHistorialPestanas" style="color:var(--text-muted);font-size:.74rem"></span></div><div id="resumenDominiosHistorialPestanas" class="tracking-incidents-summary" style="margin:.7rem 0"></div></div>`);
 ["historialPestanasBuscar","historialPestanasClase","historialPestanasDesde","historialPestanasHasta","historialPestanasPeriodo"].forEach(id=>document.getElementById(id).addEventListener(id.includes("Buscar")?"input":"change",aplicarFiltrosHistorial));
 document.getElementById("limpiarFiltrosHistorialPestanas").onclick=()=>{["historialPestanasBuscar","historialPestanasClase","historialPestanasDesde","historialPestanasHasta","historialPestanasPeriodo","historialPestanasDominio","historialPestanasSeccion","historialPestanasEstado","historialPestanasClasificacion","historialPestanasDuracionMin","historialPestanasDuracionMax","historialPestanasPaginas","historialPestanasVersion"].forEach(id=>{const x=document.getElementById(id);if(x)x.value=""});const orden=document.getElementById("historialPestanasOrden");if(orden)orden.value="fecha-desc";aplicarFiltrosHistorial()};
 document.getElementById("exportarHistorialPestanasCsv").onclick=exportarCsv;
 document.getElementById("imprimirHistorialPestanas").onclick=()=>{document.body.classList.add("tracking-print-history");window.print();setTimeout(()=>document.body.classList.remove("tracking-print-history"),500)};
 const barra=document.querySelector("#filtrosHistorialPestanasMejoras .tab-history-toolbar");
 barra.insertAdjacentHTML("beforeend",`<button class="btn btn-secondary" id="exportarHistorialPestanasJson" type="button"><i class="fa-solid fa-file-code"></i> Exportar JSON</button><button class="btn btn-secondary" id="seleccionarSalidasVisibles" type="button"><i class="fa-solid fa-square-check"></i> Seleccionar visibles</button><button class="btn btn-secondary" id="expandirSalidasPestanas" type="button"><i class="fa-solid fa-angles-down"></i> Expandir todo</button><button class="btn btn-secondary" id="contraerSalidasPestanas" type="button"><i class="fa-solid fa-angles-up"></i> Contraer todo</button>`);
 document.getElementById("exportarHistorialPestanasJson").onclick=exportarJson;document.getElementById("seleccionarSalidasVisibles").onclick=()=>{gruposFiltrados().forEach(g=>salidasSeleccionadas.add(g.id));decorarSalidas()};document.getElementById("expandirSalidasPestanas").onclick=()=>document.querySelectorAll("#historialPestanasContenido .tab-excursion-route").forEach(x=>x.style.display="");document.getElementById("contraerSalidasPestanas").onclick=()=>document.querySelectorAll("#historialPestanasContenido .tab-excursion-route").forEach(x=>x.style.display="none");
 const filtros=document.querySelector("#filtrosHistorialPestanasMejoras .tab-history-filters");
 filtros.insertAdjacentHTML("beforeend",`<label>Dominio<select id="historialPestanasDominio"><option value="">Todos</option></select></label><label>Sección<select id="historialPestanasSeccion"><option value="">Todas</option></select></label><label>Revisión<select id="historialPestanasEstado"><option value="">Todos los estados</option><option value="pendiente">Pendientes</option><option value="revisada">Revisadas</option><option value="justificada">Justificadas</option><option value="no_justificada">No justificadas</option><option value="permitida">Permitidas</option><option value="advertencia">Advertencias</option><option value="excluida">Excluidas del conteo</option></select></label><label>Clasificación<select id="historialPestanasClasificacion"><option value="">Todas</option><option value="allowed">Dominio permitido</option><option value="danger">Dominio en alerta</option><option value="warning">Sin clasificar</option></select></label><label>Duración mínima (s)<input id="historialPestanasDuracionMin" type="number" min="0" placeholder="0"></label><label>Duración máxima (s)<input id="historialPestanasDuracionMax" type="number" min="0" placeholder="Sin límite"></label><label>Páginas por salida<select id="historialPestanasPaginas"><option value="">Cualquier cantidad</option><option value="1">1 página</option><option value="2">2 o más</option><option value="5">5 o más</option><option value="10">10 o más</option></select></label><label>Versión<select id="historialPestanasVersion"><option value="">Todas</option></select></label><label>Orden<select id="historialPestanasOrden"><option value="fecha-desc">Más recientes</option><option value="fecha-asc">Más antiguas</option><option value="duracion-desc">Mayor duración</option><option value="duracion-asc">Menor duración</option><option value="paginas-desc">Más páginas</option><option value="dominio-asc">Dominio A-Z</option><option value="estado-asc">Estado de revisión</option></select></label>`);
 ["historialPestanasDominio","historialPestanasSeccion","historialPestanasEstado","historialPestanasClasificacion","historialPestanasDuracionMin","historialPestanasDuracionMax","historialPestanasPaginas","historialPestanasVersion","historialPestanasOrden"].forEach(id=>document.getElementById(id).addEventListener(id.includes("Duracion")?"input":"change",aplicarFiltrosHistorial));
 const contenedor=document.getElementById("filtrosHistorialPestanasMejoras");
 contenedor.insertAdjacentHTML("beforeend",`<div id="resumenRevisionesPestanas" class="tab-review-summary"></div><div id="resumenAnaliticaPestanas" class="tracking-incidents-summary" style="margin:.6rem 0"></div><div id="accionesMasivasPestanas" class="tab-bulk-bar" hidden><strong id="cantidadSalidasSeleccionadas">0 seleccionadas</strong><select id="estadoMasivoPestanas"><option value="revisada">Marcar revisadas</option><option value="justificada">Marcar justificadas</option><option value="permitida">Marcar permitidas</option><option value="pendiente">Volver a pendientes</option></select><button class="btn btn-primary" id="aplicarEstadoMasivoPestanas" type="button"><i class="fa-solid fa-check-double"></i> Aplicar estado</button><button class="btn btn-secondary" id="incluirMasivoPestanas" type="button">Incluir en conteo</button><button class="btn btn-warning" id="excluirMasivoPestanas" type="button">Excluir del conteo</button><button class="btn btn-secondary" id="cancelarSeleccionPestanas" type="button">Cancelar selección</button></div>`);
 document.getElementById("aplicarEstadoMasivoPestanas").onclick=()=>aplicarRevisionMasiva({estado:document.getElementById("estadoMasivoPestanas").value});
 document.getElementById("incluirMasivoPestanas").onclick=()=>aplicarRevisionMasiva({contabiliza:true});
 document.getElementById("excluirMasivoPestanas").onclick=()=>aplicarRevisionMasiva({contabiliza:false});
 document.getElementById("cancelarSeleccionPestanas").onclick=()=>{salidasSeleccionadas.clear();decorarSalidas();actualizarBarraMasiva()};
}
function decorarSalidas(){
 const grupos=agrupar(historialActual),tarjetas=[...document.querySelectorAll("#historialPestanasContenido .tab-excursion")];
 tarjetas.forEach((tarjeta,i)=>{
  const grupo=grupos.find(item=>item.id===tarjeta.dataset.grupoId)||grupos[i];if(!grupo)return;const d=datosGrupo(grupo),r=d.revision,[textoEstado,claseEstado,icono]=etiquetaEstado(r.estado);
  tarjeta.dataset.grupoId=grupo.id;tarjeta.classList.remove("review-pending","review-revisada","review-justificada","review-no_justificada","review-permitida","review-advertencia","is-excluded");tarjeta.classList.add(`review-${r.estado||"pendiente"}`);if(r.contabiliza===false)tarjeta.classList.add("is-excluded");
  let selector=tarjeta.querySelector(".tab-excursion-select");if(!selector){selector=document.createElement("label");selector.className="tab-excursion-select";selector.innerHTML='<input type="checkbox"> Seleccionar';tarjeta.querySelector(".tab-excursion-header")?.prepend(selector);selector.querySelector("input").onchange=e=>{e.target.checked?salidasSeleccionadas.add(grupo.id):salidasSeleccionadas.delete(grupo.id);actualizarBarraMasiva()}}selector.querySelector("input").checked=salidasSeleccionadas.has(grupo.id);
  let meta=tarjeta.querySelector(".tab-review-meta");if(!meta){meta=document.createElement("div");meta.className="tab-review-meta";tarjeta.querySelector(".tab-excursion-header")?.after(meta)}
  meta.innerHTML=`<span class="tab-review-badge ${claseEstado}"><i class="fa-solid ${icono}"></i> ${escapeHtml(textoEstado)}</span>${r.contabiliza===false?'<span class="tab-review-badge pending"><i class="fa-solid fa-eye-slash"></i> Excluida del conteo</span>':""}${r.motivo?`<span class="tab-review-badge info">${escapeHtml(r.motivo)}</span>`:""}${(r.etiquetas||[]).map(x=>`<span class="tab-review-tag">${escapeHtml(x)}</span>`).join("")}${r.observacion?`<span class="tracking-cell-detail" style="flex-basis:100%"><b>Observación:</b> ${escapeHtml(r.observacion)}</span>`:""}`;
  let acciones=tarjeta.querySelector(".tab-excursion-actions");if(!acciones){acciones=document.createElement("div");acciones.className="tab-excursion-actions";tarjeta.appendChild(acciones)}
  acciones.innerHTML='<button class="btn btn-primary" data-action="review"><i class="fa-solid fa-clipboard-check"></i> Revisar</button><button class="btn btn-secondary" data-action="audit"><i class="fa-solid fa-clock-rotate-left"></i> Auditoría</button><button class="btn btn-secondary" data-action="copy"><i class="fa-solid fa-copy"></i> Copiar resumen</button><button class="btn btn-secondary" data-action="toggle"><i class="fa-solid fa-route"></i> Ocultar recorrido</button>';
  acciones.querySelector('[data-action="review"]').onclick=()=>abrirRevisionSalida(grupo.id);acciones.querySelector('[data-action="audit"]').onclick=()=>abrirAuditoriaSalida(grupo.id);acciones.querySelector('[data-action="copy"]').onclick=()=>copiarResumenGrupo(grupo);
  acciones.querySelector('[data-action="toggle"]').onclick=e=>{const ruta=tarjeta.querySelector(".tab-excursion-route"),oculta=ruta.style.display==="none";ruta.style.display=oculta?"":"none";e.currentTarget.innerHTML=`<i class="fa-solid fa-route"></i> ${oculta?"Ocultar":"Mostrar"} recorrido`};
 });
 actualizarBarraMasiva();renderResumenRevisiones();
}
function actualizarBarraMasiva(){
 const barra=document.getElementById("accionesMasivasPestanas"),cantidad=document.getElementById("cantidadSalidasSeleccionadas");if(!barra)return;barra.hidden=salidasSeleccionadas.size===0;if(cantidad)cantidad.textContent=`${salidasSeleccionadas.size} seleccionada${salidasSeleccionadas.size===1?"":"s"}`;
}
async function copiarResumenGrupo(grupo){
 const d=datosGrupo(grupo),lineas=[`Salida: ${new Date(d.inicio).toLocaleString("es-AR")}`,`Duración: ${d.segundos} segundos`,`Sección: ${d.seccion||"Sin identificar"}`,`Estado: ${etiquetaEstado(d.revision.estado)[0]}`,`Conteo: ${d.revision.contabiliza===false?"Excluida":"Incluida"}`,...d.eventos.map((e,i)=>`${i+1}. ${e.dominioDestino||"desconocido"} - ${e.tituloDestino||"Sin título"} (${e.duracionSegundos||0}s)`)];try{await navigator.clipboard.writeText(lineas.join("\n"))}catch{const area=document.createElement("textarea");area.value=lineas.join("\n");document.body.appendChild(area);area.select();document.execCommand("copy");area.remove()}
}
async function aplicarRevisionMasiva(cambios){
 if(!salidasSeleccionadas.size)return;const confirmacion=await mostrarConfirmacionDocente({tipo:"warning",icono:"fa-list-check",titulo:"Actualizar salidas seleccionadas",mensaje:`Se modificarán ${salidasSeleccionadas.size} salidas.`,detalles:["El cambio quedará registrado con fecha y docente.","Los registros originales de navegación no se modifican."],confirmarTexto:"Aplicar cambios",confirmarIcono:"fa-check-double",confirmarClase:"btn-warning"});if(!confirmacion.confirmado)return;
 let guardadas=0;for(const id of [...salidasSeleccionadas]){const anterior=revisionesActuales.get(id)||{estado:"pendiente",motivo:"",observacion:"",etiquetas:[],contabiliza:true},revision={...anterior,...cambios};if(await window.guardarRevisionPestanaFirebase?.(estudianteHistorial?.uid,id,revision)){revisionesActuales.set(id,revision);guardadas++}}
 salidasSeleccionadas.clear();decorarSalidas();aplicarFiltrosHistorial();if(guardadas===0)alert("No se pudo actualizar ninguna salida. Publicá las reglas actualizadas de Firestore.");
}
function renderResumenRevisiones(){
 const el=document.getElementById("resumenRevisionesPestanas");if(!el)return;const grupos=agrupar(historialActual),conteo={pendiente:0,revisada:0,justificada:0,no_justificada:0,permitida:0,advertencia:0,excluida:0};grupos.forEach(g=>{const r=datosGrupo(g).revision;conteo[r.estado||"pendiente"]++;if(r.contabiliza===false)conteo.excluida++});
 const items=[["Pendientes",conteo.pendiente,"pendiente"],["Revisadas",conteo.revisada,"revisada"],["Justificadas",conteo.justificada,"justificada"],["No justificadas",conteo.no_justificada,"no_justificada"],["Advertencias",conteo.advertencia,"advertencia"],["Excluidas",conteo.excluida,"excluida"]];
 el.innerHTML=items.map(x=>`<button type="button" data-state="${x[2]}"><small>${x[0]}</small><strong>${x[1]}</strong></button>`).join("");el.querySelectorAll("button").forEach(b=>b.onclick=()=>{document.getElementById("historialPestanasEstado").value=b.dataset.state;aplicarFiltrosHistorial()});
}
function renderAnalitica(grupos){
 const el=document.getElementById("resumenAnaliticaPestanas");if(!el)return;const datos=grupos.map(datosGrupo),duraciones=datos.map(d=>d.segundos).sort((a,b)=>a-b),total=duraciones.reduce((a,b)=>a+b,0),promedio=duraciones.length?Math.round(total/duraciones.length):0,mediana=duraciones.length?duraciones[Math.floor(duraciones.length/2)]:0,maximo=duraciones.length?duraciones[duraciones.length-1]:0,excluidas=datos.filter(d=>d.revision.contabiliza===false).length,alertas=datos.filter(d=>d.dominios.some(x=>claseDominio(x).clase==="danger")).length,multipagina=datos.filter(d=>d.paginas>1).length,horas=new Map();datos.forEach(d=>{if(d.inicio){const h=new Date(d.inicio).getHours();horas.set(h,(horas.get(h)||0)+1)}});const horaPico=[...horas.entries()].sort((a,b)=>b[1]-a[1])[0];
 const items=[["Incluidas",datos.length-excluidas,"fa-list-check"],["Excluidas",excluidas,"fa-eye-slash"],["Promedio fuera",`${promedio}s`,"fa-stopwatch"],["Mediana",`${mediana}s`,"fa-chart-simple"],["Salida más larga",`${maximo}s`,"fa-arrow-up"],["Con varias páginas",multipagina,"fa-route"],["Dominios en alerta",alertas,"fa-triangle-exclamation"],["Hora con más salidas",horaPico?`${String(horaPico[0]).padStart(2,"0")}:00`:"—","fa-clock"]];
 el.innerHTML=items.map(x=>`<div class="tracking-incident-stat"><small><i class="fa-solid ${x[2]}"></i> ${x[0]}</small><strong>${x[1]}</strong></div>`).join("");
}
function gruposFiltrados(){
 const valor=id=>document.getElementById(id)?.value||"",q=txt(valor("historialPestanasBuscar")).toLowerCase(),clase=valor("historialPestanasClase"),dominio=valor("historialPestanasDominio"),seccion=valor("historialPestanasSeccion"),estado=valor("historialPestanasEstado"),clasificacion=valor("historialPestanasClasificacion"),version=valor("historialPestanasVersion"),paginas=Number(valor("historialPestanasPaginas"))||0,desde=valor("historialPestanasDesde"),hasta=valor("historialPestanasHasta"),dias=Number(valor("historialPestanasPeriodo"))||0,min=Number(valor("historialPestanasDuracionMin"))||0,maxTexto=valor("historialPestanasDuracionMax"),max=maxTexto===""?Infinity:Math.max(0,Number(maxTexto)||0),orden=valor("historialPestanasOrden")||"fecha-desc";
 const inicioPeriodo=dias?new Date(new Date().setHours(0,0,0,0)).getTime()-(dias-1)*86400000:0,inicio=desde?new Date(`${desde}T00:00:00`).getTime():0,fin=hasta?new Date(`${hasta}T23:59:59.999`).getTime():Infinity;
 const grupos=agrupar(historialActual).filter(g=>{const d=datosGrupo(g),texto=d.eventos.map(e=>`${e.dominioDestino||""} ${e.tituloDestino||""}`).join(" ").toLowerCase(),clases=d.dominios.map(x=>claseDominio(x).clase);return(!q||texto.includes(q))&&(!clase||d.clase===clase)&&(!dominio||d.dominios.includes(dominio))&&(!seccion||d.seccion===seccion)&&(!estado||(estado==="excluida"?d.revision.contabiliza===false:d.revision.estado===estado))&&(!clasificacion||clases.includes(clasificacion))&&(!version||d.version===version)&&(!paginas||(paginas===1?d.paginas===1:d.paginas>=paginas))&&d.segundos>=min&&d.segundos<=max&&(!inicio||d.inicio>=inicio)&&d.inicio<=fin&&(!inicioPeriodo||d.inicio>=inicioPeriodo)});
 grupos.sort((a,b)=>{const da=datosGrupo(a),db=datosGrupo(b);if(orden==="fecha-asc")return da.inicio-db.inicio;if(orden==="duracion-desc")return db.segundos-da.segundos;if(orden==="duracion-asc")return da.segundos-db.segundos;if(orden==="paginas-desc")return db.paginas-da.paginas;if(orden==="dominio-asc")return String(da.dominios[0]||"").localeCompare(String(db.dominios[0]||""),"es");if(orden==="estado-asc")return String(da.revision.estado||"").localeCompare(String(db.revision.estado||""),"es");return db.inicio-da.inicio});
 return grupos;
}
function eventosFiltrados(){return gruposFiltrados().flatMap(g=>g.eventos)}
function aplicarFiltrosHistorial(){
 const grupos=gruposFiltrados(),permitidos=new Set(grupos.map(g=>g.id)),contenedor=document.getElementById("historialPestanasContenido");
 grupos.forEach(g=>{const tarjeta=contenedor?.querySelector(`.tab-excursion[data-grupo-id="${CSS.escape(g.id)}"]`);if(tarjeta)contenedor.appendChild(tarjeta)});
 [...document.querySelectorAll("#historialPestanasContenido .tab-excursion")].forEach(x=>x.style.display=permitidos.has(x.dataset.grupoId)?"":"none");
 const eventos=grupos.flatMap(g=>g.eventos),r=document.getElementById("resumenFiltroHistorialPestanas");if(r)r.textContent=`${eventos.length} visita(s) · ${grupos.length} salida(s)`;
 renderAnalitica(grupos);
 const dominios=new Map();eventos.forEach(e=>{const d=e.dominioDestino||"desconocido",actual=dominios.get(d)||{visitas:0,segundos:0};actual.visitas++;actual.segundos+=Math.max(0,Number(e.duracionSegundos)||0);dominios.set(d,actual)});
 const resumen=document.getElementById("resumenDominiosHistorialPestanas");if(resumen)resumen.innerHTML=[...dominios.entries()].sort((a,b)=>b[1].segundos-a[1].segundos).slice(0,6).map(([d,v])=>`<div class="tracking-incident-stat"><small>${escapeHtml(d)}${v.visitas>1?` · repetido ${v.visitas} veces`:""}</small><strong>${Math.floor(v.segundos/60)}m ${v.segundos%60}s</strong></div>`).join("");
}
function exportarCsv(){
 const eventos=eventosFiltrados();if(!eventos.length){alert("No hay visitas que coincidan con los filtros.");return}
 const filas=[["Salida","Dominio","Título","Hora de salida","Hora de regreso","Duración (s)","Sección","Clase","Versión","Estado revisión","Motivo","Observación","Etiquetas","Incluida en conteo","Docente"],...eventos.map(e=>{const r=revisionesActuales.get(e.salidaGrupoId||e.id)||{};return[e.salidaGrupoId||e.id,e.dominioDestino,e.tituloDestino,e.salidaEn,e.regresoEn,e.duracionSegundos,e.seccionTitulo||e.seccionOrigen,e.claseId,e.extensionVersion,r.estado||"pendiente",r.motivo||"",r.observacion||"",(r.etiquetas||[]).join("|"),r.contabiliza===false?"No":"Sí",r.docente||""]})],csv=filas.map(f=>f.map(v=>`"${String(v??"").replace(/"/g,'""')}"`).join(",")).join("\r\n"),blob=new Blob(["\ufeff",csv],{type:"text/csv;charset=utf-8"}),a=document.createElement("a");
 a.href=URL.createObjectURL(blob);a.download=`historial_pestanas_${txt(estudianteHistorial?.estudiante?.nombre||estudianteHistorial?.email||"estudiante").replace(/[^\w.-]+/g,"_")}.csv`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
function exportarJson(){
 const grupos=gruposFiltrados();if(!grupos.length){alert("No hay salidas que coincidan con los filtros.");return}const datos={exportadoEn:new Date().toISOString(),estudiante:{uid:estudianteHistorial?.uid||"",nombre:estudianteHistorial?.estudiante?.nombre||"",email:estudianteHistorial?.email||""},salidas:grupos.map(g=>({salidaGrupoId:g.id,revision:datosGrupo(g).revision,visitas:g.eventos.map(e=>({dominio:e.dominioDestino,titulo:e.tituloDestino,salidaEn:e.salidaEn,regresoEn:e.regresoEn,duracionSegundos:e.duracionSegundos,seccion:e.seccionTitulo||e.seccionOrigen,clase:e.claseId,version:e.extensionVersion}))}))},blob=new Blob([JSON.stringify(datos,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`historial_pestanas_${txt(estudianteHistorial?.estudiante?.nombre||estudianteHistorial?.email||"estudiante").replace(/[^\w.-]+/g,"_")}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
const renderOriginal=renderPanelProfesor;
renderPanelProfesor=function(){renderOriginal();asegurarPaneles();mejorarTabla();setTimeout(agregarBotonesComunicacionFilas,0)};
const limpiarOriginal=limpiarFiltrosProfesor;
limpiarFiltrosProfesor=function(){limpiarOriginal();const e=document.getElementById("filtroSeguimientoProfesor"),d=document.getElementById("filtroDominioSeguimientoProfesor");if(e)e.value="";if(d)d.value="";filtrarTabla()};
const historialOriginal=abrirHistorialPestanas;
abrirHistorialPestanas=async function(indice){
 await historialOriginal(indice);estudianteHistorial=estudiantesProfesor[indice]||null;if(!estudianteHistorial?.uid)return;
 [historialActual]=await Promise.all([window.obtenerHistorialPestanasFirebase?.(estudianteHistorial.uid)||[]]);const revisiones=await window.obtenerRevisionesPestanasFirebase?.(estudianteHistorial.uid)||[];revisionesActuales=new Map(revisiones.map(r=>[r.salidaGrupoId,r]));salidasSeleccionadas.clear();asegurarFiltrosHistorial();asegurarModalesRevision();
 const cargarSelect=(id,primera,valores)=>{const s=document.getElementById(id);if(s)s.innerHTML=`<option value="">${primera}</option>`+[...new Set(valores.filter(Boolean))].sort((a,b)=>String(a).localeCompare(String(b),"es",{numeric:true})).map(v=>`<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("")};
 cargarSelect("historialPestanasClase","Todas",historialActual.map(e=>e.claseId));cargarSelect("historialPestanasDominio","Todos",historialActual.map(e=>e.dominioDestino));cargarSelect("historialPestanasSeccion","Todas",historialActual.map(e=>e.seccionTitulo||e.seccionOrigen));cargarSelect("historialPestanasVersion","Todas",historialActual.map(e=>e.extensionVersion));
 decorarSalidas();aplicarFiltrosHistorial();
};
window.addEventListener("estado-inicio-clase",e=>setTimeout(()=>{cargarFormulario(e.detail?.configuracionSeguimiento||window.configuracionSeguimientoActual||{});if(document.getElementById("panelProfesorModal")?.classList.contains("active"))renderPanelProfesor()},0));
window.addEventListener("profesor-data",()=>setTimeout(mejorarTabla,0));
window.addEventListener("profesor-data",()=>setTimeout(agregarBotonesComunicacionFilas,120));
document.addEventListener("keydown",evento=>{
 const actual=evento.target.closest?.(".teacher-workspace-tab");if(!actual||!["ArrowLeft","ArrowRight","Home","End"].includes(evento.key))return;const botones=[...document.querySelectorAll(".teacher-workspace-tab")],indice=botones.indexOf(actual);let siguiente=indice;if(evento.key==="ArrowRight")siguiente=(indice+1)%botones.length;if(evento.key==="ArrowLeft")siguiente=(indice-1+botones.length)%botones.length;if(evento.key==="Home")siguiente=0;if(evento.key==="End")siguiente=botones.length-1;evento.preventDefault();botones[siguiente]?.focus();activarPestanaDocente(botones[siguiente]?.dataset.teacherTab);
});
asegurarTemaAplicacion();asegurarPaneles();setInterval(mejorarTabla,10000);
})();
