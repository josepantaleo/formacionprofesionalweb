(function(){
"use strict";
const VERSION_REQUERIDA="1.3.0";
let historialActual=[],estudianteHistorial=null;
const txt=v=>String(v||"").trim();
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
 asegurarPopupLimite();
 actualizarIndicadorLimite();
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
function mejorarTabla(){
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
function filtrarTabla(){
 const ef=document.getElementById("filtroSeguimientoProfesor")?.value||"",df=txt(document.getElementById("filtroDominioSeguimientoProfesor")?.value).toLowerCase();
 [...document.querySelectorAll("#tablaProfesorBody>tr:not(.teacher-actions-row)")].forEach(fila=>{
  if(fila.children.length<4)return;const email=txt(fila.children[3]?.textContent).toLowerCase(),d=estudiantesProfesor.find(x=>txt(x.email).toLowerCase()===email);if(!d)return;
  const visible=(!ef||estadoExtension(d).codigo===ef)&&(!df||txt(d.seguimientoExtension?.dominioActual).toLowerCase().includes(df));fila.style.display=visible?"":"none";const extra=fila.nextElementSibling?.classList.contains("teacher-actions-row")?fila.nextElementSibling:null;if(extra)extra.style.display=visible?"":"none";
 });
}
function agrupar(eventos){
 const mapa=new Map(),grupos=[];[...eventos].sort((a,b)=>ms(a.salidaEn)-ms(b.salidaEn)).forEach(e=>{const id=txt(e.salidaGrupoId)||`legacy-${e.id}`;let g=mapa.get(id);if(!g){g={id,eventos:[]};mapa.set(id,g);grupos.push(g)}g.eventos.push(e)});return grupos.sort((a,b)=>ms(b.eventos[0]?.salidaEn)-ms(a.eventos[0]?.salidaEn));
}
function asegurarFiltrosHistorial(){
 const contenido=document.getElementById("historialPestanasContenido");if(!contenido||document.getElementById("filtrosHistorialPestanasMejoras"))return;
 contenido.insertAdjacentHTML("beforebegin",`<div id="filtrosHistorialPestanasMejoras"><div class="tab-history-filters"><label>Buscar título o dominio<input id="historialPestanasBuscar" type="search" placeholder="Ej.: chatgpt.com"></label><label>Clase<select id="historialPestanasClase"><option value="">Todas</option></select></label><label>Desde<input id="historialPestanasDesde" type="date"></label><label>Hasta<input id="historialPestanasHasta" type="date"></label><label>Período<select id="historialPestanasPeriodo"><option value="">Todo</option><option value="1">Hoy</option><option value="7">Últimos 7 días</option><option value="30">Últimos 30 días</option></select></label></div><div class="tab-history-toolbar"><button class="btn btn-secondary" id="limpiarFiltrosHistorialPestanas" type="button"><i class="fa-solid fa-filter-circle-xmark"></i> Limpiar</button><button class="btn btn-secondary" id="exportarHistorialPestanasCsv" type="button"><i class="fa-solid fa-file-csv"></i> Exportar CSV</button><button class="btn btn-secondary" id="imprimirHistorialPestanas" type="button"><i class="fa-solid fa-file-pdf"></i> Imprimir / PDF</button><span id="resumenFiltroHistorialPestanas" style="color:var(--text-muted);font-size:.74rem"></span></div><div id="resumenDominiosHistorialPestanas" class="tracking-incidents-summary" style="margin:.7rem 0"></div></div>`);
 ["historialPestanasBuscar","historialPestanasClase","historialPestanasDesde","historialPestanasHasta","historialPestanasPeriodo"].forEach(id=>document.getElementById(id).addEventListener(id.includes("Buscar")?"input":"change",aplicarFiltrosHistorial));
 document.getElementById("limpiarFiltrosHistorialPestanas").onclick=()=>{["historialPestanasBuscar","historialPestanasClase","historialPestanasDesde","historialPestanasHasta","historialPestanasPeriodo"].forEach(id=>document.getElementById(id).value="");aplicarFiltrosHistorial()};
 document.getElementById("exportarHistorialPestanasCsv").onclick=exportarCsv;
 document.getElementById("imprimirHistorialPestanas").onclick=()=>{document.body.classList.add("tracking-print-history");window.print();setTimeout(()=>document.body.classList.remove("tracking-print-history"),500)};
}
function eventosFiltrados(){
 const q=txt(document.getElementById("historialPestanasBuscar")?.value).toLowerCase(),clase=document.getElementById("historialPestanasClase")?.value||"",desde=document.getElementById("historialPestanasDesde")?.value,hasta=document.getElementById("historialPestanasHasta")?.value,dias=Number(document.getElementById("historialPestanasPeriodo")?.value)||0;
 const inicioPeriodo=dias?new Date(new Date().setHours(0,0,0,0)).getTime()-(dias-1)*86400000:0,inicio=desde?new Date(`${desde}T00:00:00`).getTime():0,fin=hasta?new Date(`${hasta}T23:59:59.999`).getTime():Infinity;
 return historialActual.filter(e=>{const f=ms(e.salidaEn),texto=`${e.dominioDestino||""} ${e.tituloDestino||""}`.toLowerCase();return(!q||texto.includes(q))&&(!clase||e.claseId===clase)&&(!inicio||f>=inicio)&&f<=fin&&(!inicioPeriodo||f>=inicioPeriodo)});
}
function aplicarFiltrosHistorial(){
 const permitidos=new Set(agrupar(eventosFiltrados()).map(g=>g.id)),total=agrupar(historialActual);
 [...document.querySelectorAll("#historialPestanasContenido .tab-excursion")].forEach((x,i)=>x.style.display=total[i]&&permitidos.has(total[i].id)?"":"none");
 const eventos=eventosFiltrados(),r=document.getElementById("resumenFiltroHistorialPestanas");if(r)r.textContent=`${eventos.length} visita(s) · ${agrupar(eventos).length} salida(s)`;
 const dominios=new Map();eventos.forEach(e=>{const d=e.dominioDestino||"desconocido",actual=dominios.get(d)||{visitas:0,segundos:0};actual.visitas++;actual.segundos+=Math.max(0,Number(e.duracionSegundos)||0);dominios.set(d,actual)});
 const resumen=document.getElementById("resumenDominiosHistorialPestanas");if(resumen)resumen.innerHTML=[...dominios.entries()].sort((a,b)=>b[1].segundos-a[1].segundos).slice(0,6).map(([d,v])=>`<div class="tracking-incident-stat"><small>${escapeHtml(d)}${v.visitas>1?` · repetido ${v.visitas} veces`:""}</small><strong>${Math.floor(v.segundos/60)}m ${v.segundos%60}s</strong></div>`).join("");
}
function exportarCsv(){
 const eventos=eventosFiltrados();if(!eventos.length){alert("No hay visitas que coincidan con los filtros.");return}
 const filas=[["Salida","Dominio","Título","Hora de salida","Hora de regreso","Duración (s)","Sección","Clase","Versión"],...eventos.map(e=>[e.salidaGrupoId||e.id,e.dominioDestino,e.tituloDestino,e.salidaEn,e.regresoEn,e.duracionSegundos,e.seccionTitulo||e.seccionOrigen,e.claseId,e.extensionVersion])],csv=filas.map(f=>f.map(v=>`"${String(v??"").replace(/"/g,'""')}"`).join(",")).join("\r\n"),blob=new Blob(["\ufeff",csv],{type:"text/csv;charset=utf-8"}),a=document.createElement("a");
 a.href=URL.createObjectURL(blob);a.download=`historial_pestanas_${txt(estudianteHistorial?.estudiante?.nombre||estudianteHistorial?.email||"estudiante").replace(/[^\w.-]+/g,"_")}.csv`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
const renderOriginal=renderPanelProfesor;
renderPanelProfesor=function(){renderOriginal();asegurarPaneles();mejorarTabla()};
const limpiarOriginal=limpiarFiltrosProfesor;
limpiarFiltrosProfesor=function(){limpiarOriginal();const e=document.getElementById("filtroSeguimientoProfesor"),d=document.getElementById("filtroDominioSeguimientoProfesor");if(e)e.value="";if(d)d.value="";filtrarTabla()};
const historialOriginal=abrirHistorialPestanas;
abrirHistorialPestanas=async function(indice){await historialOriginal(indice);estudianteHistorial=estudiantesProfesor[indice]||null;historialActual=estudianteHistorial?.uid?await window.obtenerHistorialPestanasFirebase?.(estudianteHistorial.uid)||[]:[];asegurarFiltrosHistorial();const selector=document.getElementById("historialPestanasClase");if(selector){selector.innerHTML='<option value="">Todas</option>'+[...new Set(historialActual.map(e=>e.claseId).filter(Boolean))].sort().map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("")}aplicarFiltrosHistorial()};
window.addEventListener("estado-inicio-clase",e=>setTimeout(()=>{cargarFormulario(e.detail?.configuracionSeguimiento||window.configuracionSeguimientoActual||{});if(document.getElementById("panelProfesorModal")?.classList.contains("active"))renderPanelProfesor()},0));
window.addEventListener("profesor-data",()=>setTimeout(mejorarTabla,0));
asegurarPaneles();setInterval(mejorarTabla,10000);
})();
