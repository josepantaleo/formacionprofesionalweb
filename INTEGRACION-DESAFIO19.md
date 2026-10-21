# Integración de la mejora del desafío 19

La mejora está separada en dos archivos para no tocar la lógica principal:

- `desafio19-mejora.js`: agrega el recorrido pedagógico, plan de trabajo, rúbrica, pruebas y guardado local.
- `desafio19-mejora.css`: estilos del panel integrador.

En `actividad.html`, después de `actividad-app.js` y antes de `panel-profesor.js`, agregar:

```html
<link rel="stylesheet" href="desafio19-mejora.css?v=20261021-1" />
<script src="desafio19-mejora.js?v=20261021-1"></script>
```

La extensión detecta automáticamente la tarjeta `sec-19`, conserva el editor existente y guarda el plan en `localStorage` con la clave `desafio19_integrador_v2`.
