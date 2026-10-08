# AUDITORÍA Y CORRECCIÓN V3 — COLABORACIÓN, PERSISTENCIA Y EVALUACIÓN

Fecha: 2026-10-02

## Correcciones aplicadas

### Colaboración Yjs/Firestore
- Se reutiliza `Y.Doc` + `Y.Text("codigo")` existente.
- Docente y estudiante escriben sobre el mismo documento CRDT.
- Las actualizaciones Yjs se publican agrupadas con debounce de 650 ms.
- Se eliminó la cola CRDT en `localStorage`.
- Firestore queda como persistencia de las actualizaciones y de los checkpoints.
- Se mantiene `onSnapshot` para recibir actualizaciones remotas sin recargar.
- Se registran `actualizadoEn`, `actualizadoPor`, `ultimoModificadorUid`, `ultimoModificador` y `ultimoCambioClienteId`.
- Se agregó estado visible: Guardando, Guardado, Sincronizando, Sin conexión y Error de sincronización.
- Se mantiene presencia por participante/cliente.
- Las versiones se crean como checkpoints importantes, no por cada tecla.
- El editor docente utiliza la implementación CodeMirror/Yjs incorporada en `mejoras-seguimiento-codemirror.js`.

### Seguridad
- Las Rules ya no permiten publicar actualizaciones CRDT simplemente por ser estudiante/docente.
- `actualizaciones`, `presencia` y mensajes requieren colaboración aceptada y activa.
- Se conserva la autorización docente mediante Firebase Authentication + `docentesAutorizados`.
- No se utiliza `localStorage` para autorización, permisos ni sincronización CRDT.
- Se eliminó la solución de referencia `aiSolution` del cliente estudiante.

### Solicitudes
- Se conservan solicitudes identificadas por `uid_sectionId`.
- Se eliminan duplicados en la bandeja docente.
- La aceptación abre directamente el editor colaborativo.
- Las Rules se mantienen como autoridad final sobre los estados.

### Evaluación
- La evaluación técnica usa sintaxis, ejecución, requisitos, conceptos, estructura, comportamiento y calidad.
- Se incorporó evidencia de proceso: ejecuciones, pruebas, ayudas, correcciones y colaboración.
- El uso de ayudas no se convierte automáticamente en penalización.
- Las ponderaciones se adaptan al desafío mediante `obtenerPonderacionesDesafio()`.
- Las respuestas socráticas se evalúan por decisión, justificación, evidencia y consecuencia/mejora, sin puntuar por cantidad de palabras como criterio principal.
- La IA funciona como apoyo/diagnóstico y no como autoridad única de la nota docente.
- Se registra la separación entre nota automática y corrección docente existente.

### Entregas e historial
- Se agregó una colección inmutable de entregas congeladas:
  `estudiantes/{uid}/entregas/{sectionId}/versiones/{versionId}`
- Una entrega contiene código, salida, error, evaluación, respuestas, intento, autor y fecha.
- Las versiones congeladas no pueden actualizarse ni eliminarse desde el cliente.
- Se agregaron eventos educativos inmutables en:
  `estudiantes/{uid}/actividadEventos/{eventoId}`

### EXPLICAME QUÉ PIDE
- Las preguntas del analista muestran `?? EXPLICAME QUÉ PIDE`.
- El flujo solicitado es:
  PREGUNTA → INTERPRETACIÓN → CONCEPTO → PISTAS → GUÍA → RESPUESTA DEL ESTUDIANTE.
- La ayuda no debe revelar la opción correcta ni entregar código completo.

### Mostrar/Ocultar notas
- Se eliminó completamente el control de Mostrar/Ocultar notas del gráfico, incluyendo estado, funciones, listeners y HTML asociado.

## Archivos modificados
- `actividad-firebase.js`
- `actividad-app.js`
- `actividad.html`
- `firestore.rules`
- `REGLAS.TXT`
- `firestore.rules.cooperacion.test.js`
- `AUDITORIA_CORRECCION_COOPERACION_V3.md` (este informe)

## Pruebas realizadas
- `node --check` sobre todos los archivos JavaScript: OK.
- `node --check firestore.rules.cooperacion.test.js`: OK.
- Balance estructural de llaves/paréntesis de `firestore.rules`: OK.
- Búsqueda de `allow ... true` en Rules: no se encontraron reglas abiertas.
- Búsqueda de `aiSolution` en `actividad-app.js`: no quedan definiciones cliente.
- Búsqueda de Mostrar/Ocultar notas: no quedan coincidencias.
- Se revisó que la cola CRDT ya no use `localStorage`.

## Prueba no ejecutable en este entorno
Los tests de Firestore requieren `@firebase/rules-unit-testing`, dependencia que no está instalada en el entorno de ejecución. Por lo tanto, no se declara como pasada la ejecución real del emulador de Rules.

## Pendientes de despliegue/validación externa
1. Publicar `firestore.rules` en el proyecto Firebase real.
2. Ejecutar `firestore.rules.cooperacion.test.js` con las dependencias de Firebase instaladas.
3. Probar con dos cuentas reales simultáneas: estudiante + docente.
4. Verificar edición concurrente, desconexión/reconexión y recuperación desde Firestore.
5. Verificar que las nuevas colecciones `actividadEventos` y `entregas` estén incluidas en los índices/procesos de limpieza que correspondan.
6. La evaluación realmente server-side de cualquier solución de referencia sensible requiere un backend/Cloud Function; el cliente ya no recibe `aiSolution`.

## Arquitectura resultante

Estudiante ↔ Y.Doc/Y.Text ↔ Firestore `actualizaciones`
                         ↕
                  `onSnapshot`
                         ↕
Docente ↔ Y.Doc/Y.Text ↔ mismo documento CRDT

Firestore es la autoridad de permisos. Yjs resuelve concurrencia. Las entregas congeladas se almacenan separadas del estado vivo del editor.
