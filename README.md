# Actividad interactiva IPEM 146

Carpeta preparada para publicarse con GitHub Pages.

## Publicacion

1. Subir todos los archivos de esta carpeta a la raiz del repositorio.
2. En GitHub, abrir `Settings > Pages`.
3. Seleccionar la rama principal y la carpeta raiz.
4. Publicar las reglas de `reglas.txt` por separado en Firebase Firestore.
5. Agregar el dominio de GitHub Pages a los dominios autorizados de Firebase Authentication.

`index.html` es la pagina de entrada. `actividad.html` se conserva como copia con el nombre original.

## Base incorporada el 4 de septiembre de 2026

- Editor cooperativo CodeMirror con cursor visible.
- Aportes del estudiante en verde y del docente en amarillo.
- Estado visible `En curso` durante la cooperacion.
- Chat cooperativo integrado al editor.
- Popup emergente con contador de pendientes, visible hasta que el estudiante confirme cada mensaje.
- Aviso de cuota Firebase compacto y descartable, sin bloquear la pantalla.
- Confirmaciones docentes visibles sobre el editor cooperativo, incluso en pantalla completa.
- Colaboracion optimizada: una sola sesion activa por estudiante, presencia agrupada y consultas recientes limitadas.

## Cooperacion docente-estudiante revisada (7 de septiembre de 2026)

- La edicion compartida requiere una solicitud docente con objetivo pedagogico y una aceptacion explicita del estudiante.
- La solicitud aparece en un panel global aunque el estudiante este mirando otra actividad; al autorizar puede abrirse el desafio solicitado.
- El estudiante puede rechazar la solicitud o retirar su consentimiento y continuar trabajando individualmente.
- La pausa cooperativa bloquea nuevas contribuciones de ambos participantes tanto en la interfaz como en las reglas de Firestore.
- Al reanudar la cooperacion se reintentan automaticamente las ediciones que hayan quedado pendientes durante la pausa.
- Cerrar el panel docente solo desconecta esa sesion; finalizar la cooperacion es una accion explicita.
- Los mensajes y aportes se conservan como evidencia. Las reglas no permiten eliminarlos desde el cliente.
- Los estados de mensajeria distinguen entre enviado, entregado y leido. La lectura solo se registra cuando la conversacion esta visible y la ventana tiene foco.
- El boton `Entendido` registra la lectura del mensaje docente y el estudiante puede responder desde el chat aunque la edicion cooperativa no este activa.
- El historial de aportes incluye nombre, correo, rol, lineas, texto agregado o eliminado y referencia de reversion.
- La actualizacion CRDT y su historial se confirman en una misma escritura; si falla, la cola queda respaldada localmente y la sesion no se destruye.
- El estudiante mantiene una unica sesion CRDT para la actividad visible, reduciendo presencia y listeners innecesarios.
- La presencia y los cursores solo se publican y consultan despues de que el estudiante acepta la cooperacion.

## Publicacion obligatoria de Firestore

El funcionamiento del boton de autorizacion, la pausa, los estados de lectura y la presencia requiere publicar la version incluida de `reglas.txt`. Subir solamente los archivos a GitHub Pages no actualiza las reglas de Firestore.

```powershell
npx firebase-tools deploy --only firestore:rules --project ipem146js
```

## Verificacion

```powershell
npm.cmd ci
npm.cmd run test:crdt
npm.cmd run test:cooperation
npm.cmd run test:rules
```

La prueba de reglas requiere Java 11 o superior porque Firebase Emulator Suite ya no admite Java 8.
El 7 de septiembre de 2026 la suite completa fue ejecutada correctamente con Eclipse Temurin JDK 17.0.20.1.
