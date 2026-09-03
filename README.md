# Formacion profesional web

Version preparada para GitHub Pages con colaboracion docente-estudiante mediante Yjs y Firestore.

## Publicacion en GitHub

Subir todo el contenido de esta carpeta a la raiz del repositorio. No subir `node_modules`.

En GitHub:

1. Abrir `Settings`.
2. Entrar en `Pages`.
3. Seleccionar `Deploy from a branch`.
4. Elegir la rama principal y la carpeta `/ (root)`.

La actividad principal se encuentra en `actividad.html`.

## Firebase

Antes de usar la colaboracion en produccion, publicar las reglas:

```powershell
firebase login
firebase deploy --only firestore:rules --project ipem146js
```

Agregar el dominio `TU-USUARIO.github.io` en Firebase Authentication, dentro de `Authorized domains`.

## Verificaciones locales

```powershell
npm install
npm run test:crdt
npm run test:rules
```

Resultados esperados:

```text
OK: Yjs fusiono ediciones concurrentes sin sobrescritura.
OK: reglas CRDT y comentarios verificadas.
```
