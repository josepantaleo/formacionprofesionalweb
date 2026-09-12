// Estructura de Datos de las 19 Secciones con descripciones de desafíos ampliadas y detalladas
      const seccionesDataBase = [
          {
              id: "sec-1",
              icon: "fa-terminal",
              title: "1. Introducción a JS",
              theory: "JavaScript es el lenguaje que le da vida a la web interactiva.",
              exerciseTitle: "Desafío Escolar: Cartelera Digital del IPEM 146",
              exerciseDesc: "Diseña un script interactivo para la pantalla de bienvenida del IPEM 146. Deberás declarar variables utilizando palabras clave adecuadas para almacenar tu nombre de alumno y una frase motivadora orientada al aprendizaje técnico. Luego, genera la fecha actual mediante el objeto Date() de JavaScript e imprime en la consola un encabezado oficial con formato llamativo mediante múltiples llamadas a console.log().",
              initialCode: `// 1. Declarar variables para tu nombre y el mensaje motivador\n// 2. Usar console.log()`,
              aiSolution: `const nombreEstudiante = "Lucas";\nconst frase = "¡El esfuerzo de hoy es el éxito de mañana!";\nconsole.log("=== CARTELERA IPEM 146 ===");\nconsole.log("Alumno: " + nombreEstudiante);\nconsole.log("Mensaje: " + frase);\nconsole.log("Fecha: " + new Date().toLocaleDateString());`
          },
          {
              id: "sec-2",
              icon: "fa-cube",
              title: "2. Variables (let, const, var)",
              theory: "Usa 'const' para valores fijos y 'let' para variables que cambian.",
              exerciseTitle: "Desafío Escolar: Calculadora de Gastos del Recreo",
              exerciseDesc: "Desarrolla el módulo de cobro e inventario para la cantina escolar. Debes definir constantes (const) para establecer los precios unitarios e inmutables de las empanadas y gaseosas, y variables modificables (let) para registrar la cantidad exacta de productos comprados en un recreo. Realiza la operación matemática correspondiente para hallar el costo total e imprime un recibo detallado en la consola.",
              initialCode: `// 1. Define constantes y variables let\n// 2. Calcula el total gastado`,
              aiSolution: `const PRECIO_EMPANADA = 350;\nconst PRECIO_GASEOSA = 400;\nlet empanadasCompradas = 3;\nlet gaseosasCompradas = 1;\nlet totalGastado = (PRECIO_EMPANADA * empanadasCompradas) + (PRECIO_GASEOSA * gaseosasCompradas);\nconsole.log("Total gastado en cantina: $" + totalGastado);`
          },
          {
              id: "sec-3",
              icon: "fa-font",
              title: "3. Tipos de Datos",
              theory: "String, Number, Boolean, Undefined y Null.",
              exerciseTitle: "Desafío Escolar: Registro Ficha Médica Educación Física",
              exerciseDesc: "Crea el sistema de fichas médicas para las clases de educación física. Declara 4 variables con distintos tipos de datos primitivos en JavaScript (un String para el nombre del alumno, un Number para la edad, un Boolean para el apto médico y un valor Null para las observaciones médicas pendientes). Luego, muestra en consola cada valor junto con la verificación explícita de su tipo utilizando el operador typeof.",
              initialCode: `// 1. Crea las 4 variables\n// 2. Imprime valor y typeof`,
              aiSolution: `let nombreAlumno = "Sofía";\nlet edad = 16;\nlet aptoMedico = true;\nlet observaciones = null;\nconsole.log(nombreAlumno, typeof nombreAlumno);\nconsole.log(edad, typeof edad);\nconsole.log(aptoMedico, typeof aptoMedico);\nconsole.log(observaciones, typeof observaciones);`
          },
          {
              id: "sec-4",
              icon: "fa-calculator",
              title: "4. Operadores",
              theory: "Aritméticos, comparación y lógicos.",
              exerciseTitle: "Desafío Escolar: Sistema de Calificaciones y Asistencia",
              exerciseDesc: "Escribe un algoritmo automatizado de acreditación académica. Declara variables numéricas para representar la calificación final obtenida por un alumno y el porcentaje total de asistencia registrado en el ciclo lectivo. Utiliza operadores de comparación y el operador lógico AND (&&) para evaluar si el estudiante cumple con ambas condiciones mínimas para aprobar (nota >= 6 y asistencia >= 75%), imprimiendo un booleano indicativo en la consola.",
              initialCode: `// 1. Declara notas y asistencia\n// 2. Usa operador lógico &&`,
              aiSolution: `let notaFinal = 8;\nlet porcentajeAsistencia = 80;\nlet apruebaMateria = (notaFinal >= 6) && (porcentajeAsistencia >= 75);\nconsole.log("¿Aprueba la materia?: " + apruebaMateria);`
          },
          {
              id: "sec-5",
              icon: "fa-code-branch",
              title: "5. Condicionales",
              theory: "Estructuras if, else if y else.",
              exerciseTitle: "Desafío Escolar: Clasificador de Beca Estudiantil",
              exerciseDesc: "Diseña la lógica institucional para la asignación de estímulos y becas educativas. Utilizando estructuras condicionales compuestas (if, else if, else), toma como entrada la variable del promedio académico general de un alumno y clasifícalo automáticamente en una de las cuatro categorías oficiales: 'Beca Excelencia Total' (>= 9), 'Beca Parcial' (>= 7), 'Mención de Honor sin beca' (>= 6) o 'Refuerzo Pedagógico requerido' (< 6).",
              initialCode: `// 1. Declara promedio\n// 2. Usa if / else if`,
              aiSolution: `let promedio = 8.5;\nif (promedio >= 9) {\n    console.log("Beca Excelencia Total");\n} else if (promedio >= 7) {\n    console.log("Beca Parcial");\n} else if (promedio >= 6) {\n    console.log("Mención de Honor sin beca");\n} else {\n    console.log("Refuerzo Pedagógico requerido");\n}`
          },
          {
              id: "sec-6",
              icon: "fa-gears",
              title: "6. Funciones",
              theory: "Bloques reutilizables con parámetros y retorno.",
              exerciseTitle: "Desafío Escolar: Conversor de Moneda para Viaje de Egresados",
              exerciseDesc: "Crea una función modular reutilizable llamada 'calcularAhorroEgresados' que reciba dos parámetros numéricos: la cantidad de pesos argentinos acumulados en el fondo común y la cotización vigente del dólar. La función debe retornar un mensaje especificando el valor equivalente en dólares y evaluar mediante un condicional interno si se alcanzó la meta requerida de USD 500, o de lo contrario, informar el monto faltante.",
              initialCode: `// 1. Define la función\n// 2. Retorna dólares y meta`,
              aiSolution: `function calcularAhorroEgresados(pesosAhorrados, cotizacionDolar) {\n    let dolares = pesosAhorrados / cotizacionDolar;\n    let meta = 500;\n    if (dolares >= meta) {\n        return "¡Meta alcanzada! Tienes USD " + dolares.toFixed(2);\n    } else {\n        return "Faltan USD " + (meta - dolares).toFixed(2) + " para la meta.";\n    }\n}\nconsole.log(calcularAhorroEgresados(600000, 1200));`
          },
          {
              id: "sec-7",
              icon: "fa-layer-group",
              title: "7. Arrays",
              theory: "Colección ordenada indexada desde 0.",
              exerciseTitle: "Desafío Escolar: Gestión de Libros Prestados",
              exerciseDesc: "Crea un sistema de control para la Biblioteca Escolar. Inicializa un arreglo (array) con tres títulos de libros disponibles. Utiliza el método .push() para incorporar un nuevo libro al final de la lista de préstamos y el método .shift() para simular la devolución y entrega del primer libro solicitado. Finalmente, imprime el nombre del libro prestado, la longitud del arreglo con .length y la lista actualizada en consola.",
              initialCode: `// 1. Crea array\n// 2. Usa push y shift`,
              aiSolution: `let libros = ["Matemática", "Historia", "Literatura"];\nlibros.push("Física");\nlet devuelto = libros.shift();\nconsole.log("Libro devuelto: " + devuelto);\nconsole.log("Total libros actuales: " + libros.length, libros);`
          },
          {
              id: "sec-8",
              icon: "fa-rotate",
              title: "8. Bucles",
              theory: "Bucles for y while.",
              exerciseTitle: "Desafío Escolar: Generador de Fixture",
              exerciseDesc: "Construye el organizador del fixture para el Torneo Intercolegial. Almacena en un arreglo los nombres de 4 equipos deportivos del IPEM 146. Utiliza bucles 'for' anidados para iterar sobre la estructura y generar todos los cruces posibles de partidos 'todos contra todos', incluyendo una validación que garantice que ningún equipo sea emparejado a jugar contra sí mismo.",
              initialCode: `// 1. Crea array de 4 equipos\n// 2. Cruza con for anidado`,
              aiSolution: `let equipos = ["Equipo A", "Equipo B", "Equipo C", "Equipo D"];\nfor (let i = 0; i < equipos.length; i++) {\n    for (let j = 0; j < equipos.length; j++) {\n        if (i !== j) {\n            console.log(equipos[i] + " vs " + equipos[j]);\n        }\n    }\n}`
          },
          {
              id: "sec-9",
              icon: "fa-id-card",
              title: "9. Objetos Literales",
              theory: "Propiedades clave-valor y métodos.",
              exerciseTitle: "Desafío Escolar: Perfil de Estudiante",
              exerciseDesc: "Modela la Ficha Digital del Alumno utilizando Objetos Literales en JavaScript. Define un objeto 'alumno' que contenga propiedades para su nombre completo, curso y un arreglo de calificaciones. Agrega un método interno llamado 'obtenerEstado()' que utilice la palabra clave 'this' para iterar/promediar las notas y devolver una cadena con el resumen académico, curso y estado de regularidad.",
              initialCode: `// 1. Declara objeto y método`,
              aiSolution: `let alumno = {\n    nombre: "Juan Pérez",\n    curso: "5to A",\n    notas: [8, 9, 7],\n    obtenerEstado: function() {\n        let suma = this.notas.reduce((a, b) => a + b, 0);\n        let prom = suma / this.notas.length;\n        return this.nombre + " (" + this.curso + ") - Promedio: " + prom.toFixed(1) + " [Regular]";\n    }\n};\nconsole.log(alumno.obtenerEstado());`
          },
          {
              id: "sec-10",
              icon: "fa-filter",
              title: "10. Arrays Avanzados",
              theory: ".map(), .filter(), .reduce()",
              exerciseTitle: "Desafío Escolar: Auditoría de Inventario",
              exerciseDesc: "Realiza una auditoría técnica del laboratorio de computación. Crea un arreglo con varios objetos que representen computadoras (con ID, memoria RAM en GB y estado). Utiliza el método de orden superior .filter() para obtener una lista exclusiva de las PC en estado 'mantenimiento', y combina los métodos .filter() y .reduce() para calcular la cantidad total de memoria RAM operativa en uso.",
              initialCode: `// 1. Array de objetos\n// 2. filter y reduce`,
              aiSolution: `let comps = [\n    { id: 1, ram: 8, estado: "operativa" },\n    { id: 2, ram: 16, estado: "mantenimiento" },\n    { id: 3, ram: 8, estado: "operativa" }\n];\nlet mantenimiento = comps.filter(c => c.estado === "mantenimiento");\nlet ramTotal = comps.filter(c => c.estado === "operativa").reduce((acc, c) => acc + c.ram, 0);\nconsole.log("En mantenimiento:", mantenimiento);\nconsole.log("RAM Operativa Total:", ramTotal + "GB");`
          },
          {
              id: "sec-11",
              icon: "fa-quote-left",
              title: "11. Métodos de Strings",
              theory: ".trim(), .toLowerCase(), .replace()",
              exerciseTitle: "Desafío Escolar: Generador de Mails",
              exerciseDesc: "Desarrolla el normalizador de correos institucionales de la escuela. Diseña la función 'generarCorreo' que reciba como parámetro una cadena de texto con el nombre y apellido del estudiante (la cual puede contener espacios vacíos indeseados o mayúsculas). Aplica la combinación de .trim(), .toLowerCase() y expresiones regulares con .replace() para formatear el texto en 'nombre.apellido' y concatenar el dominio '@ipem146.edu.ar'.",
              initialCode: `// 1. Función mail institucional`,
              aiSolution: `function generarCorreo(nombreCompleto) {\n    let limpio = nombreCompleto.trim().toLowerCase().replace(/\\s+/g, '.');\n    return limpio + "@ipem146.edu.ar";\n}\nconsole.log(generarCorreo("  Lucas Emanuel González  "));`
          },
          {
              id: "sec-12",
              icon: "fa-bullseye",
              title: "12. Scope y Ámbito",
              theory: "Global, función y bloque (let/const).",
              exerciseTitle: "Desafío Escolar: Sistema de Contraseña",
              exerciseDesc: "Crea una demostración práctica sobre la visibilidad de variables (Scope) en el sistema de seguridad directivo. Declara una variable de ámbito global para indicar el usuario activo y crea una función de validación que defina internamente variables de bloque (dentro de un bloque 'if/else') usando 'let'. Muestra en consola la diferencia entre acceder a variables globales y el comportamiento del scope restringido de bloque.",
              initialCode: `// 1. Variable global y de bloque`,
              aiSolution: `let usuarioActivo = "Profesor";\nfunction validarPin(pin) {\n    if (pin === 1234) {\n        let accesoConcedido = true;\n        console.log(usuarioActivo + ": Acceso Autorizado =", accesoConcedido);\n    } else {\n        let accesoConcedido = false;\n        console.log("Acceso Denegado");\n    }\n}\nvalidarPin(1234);`
          },
          {
              id: "sec-13",
              icon: "fa-laptop-code",
              title: "13. DOM (Document Object Model)",
              theory: "Árbol de objetos HTML.",
              exerciseTitle: "Desafío Escolar: Dynamic DOM Banner",
              exerciseDesc: "Simula la manipulación de la interfaz web institucional mediante el DOM. Crea una función 'actualizarAnuncio' que altere las propiedades de un objeto simulación 'mockElement' (modificando las propiedades 'innerText', 'style.color' y 'style.backgroundColor'). La función debe recibir el mensaje del anuncio y un booleano de urgencia para colorear el cartel dinámicamente según la prioridad del aviso.",
              initialCode: `// Objeto DOM simulado\nconst mockElement = { innerText: "", style: { color: "", backgroundColor: "" } };\n// 1. Función actualizar`,
              aiSolution: `const mockElement = { innerText: "", style: { color: "", backgroundColor: "" } };\nfunction actualizarAnuncio(mensaje, urgente) {\n    mockElement.innerText = mensaje;\n    if (urgente) {\n        mockElement.style.color = "white";\n        mockElement.style.backgroundColor = "red";\n    } else {\n        mockElement.style.color = "black";\n        mockElement.style.backgroundColor = "yellow";\n    }\n}\nactualizarAnuncio("Suspensión de clases por mantenimiento", true);\nconsole.log(mockElement);`
          },
          {
              id: "sec-14",
              icon: "fa-wpforms",
              title: "14. Formularios y Eventos",
              theory: "Captura de interacciones y validaciones.",
              exerciseTitle: "Desafío Escolar: Validador de Inscripción",
              exerciseDesc: "Desarrolla el motor de validación para los formularios de inscripción a los talleres extracurriculares. Escribe la función 'validarInscripcion(nombre, edad)' que verifique si el nombre ingresado tiene al menos 3 caracteres de longitud y si la edad es igual o mayor a 12 años. La función debe almacenar los mensajes de falla en un array de errores o devolver una confirmación exitosa si la información es válida.",
              initialCode: `// 1. Validar nombre y edad`,
              aiSolution: `function validarInscripcion(nombre, edad) {\n    let errores = [];\n    if (nombre.length < 3) errores.push("Nombre muy corto.");\n    if (edad < 12) errores.push("Debe ser mayor de 12 años.");\n    if (errores.length > 0) return "Errores: " + errores.join(" ");\n    return "¡Inscripción exitosa!";\n}\nconsole.log(validarInscripcion("Ana", 14));`
          },
          {
              id: "sec-15",
              icon: "fa-database",
              title: "15. LocalStorage y Persistencia",
              theory: "Almacenamiento clave-valor local.",
              exerciseTitle: "Desafío Escolar: Guardado de Tema",
              exerciseDesc: "Simula el sistema de almacenamiento persistente en el navegador para recordar las preferencias del estudiante. Implementa un objeto que simule el comportamiento de 'LocalStorage' junto a las funciones 'guardarPref(clave, valor)' y 'obtenerPref(clave)'. Guarda la configuración del tema de la interfaz (por ejemplo, 'tema': 'oscuro') y recupera la información posteriormente demostrando la persistenia de datos.",
              initialCode: `const mockLocalStorage = {};\n// 1. Funciones de storage`,
              aiSolution: `const mockLocalStorage = {};\nfunction guardarPref(clave, valor) {\n    mockLocalStorage[clave] = valor;\n}\nfunction obtenerPref(clave) {\n    return mockLocalStorage[clave];\n}\nguardarPref("tema", "oscuro");\nconsole.log("Tema recuperado:", obtenerPref("tema"));`
          },
          {
              id: "sec-16",
              icon: "fa-code",
              title: "16. JSON y Fetch API",
              theory: "JSON.parse y consumo de datos.",
              exerciseTitle: "Desafío Escolar: Petición de Clima",
              exerciseDesc: "Procesa la respuesta enviada por un servicio meteorológico remoto para planificar una salida de campo del IPEM 146. Convierte una cadena de texto en formato JSON simulada mediante el método 'JSON.parse()'. Examina el objeto de JavaScript resultante evaluando la probabilidad de lluvia y muestra un reporte determinando si la excursión educativa se confirma o se suspende.",
              initialCode: `const jsonRespuestaServidor = '...';\n// 1. JSON.parse`,
              aiSolution: `const jsonRespuestaServidor = '{"ciudad": "Córdoba", "temperatura": 24, "clima": "Soleado", "lluviaProbabilidad": 5}';\nlet datos = JSON.parse(jsonRespuestaServidor);\nif (datos.lluviaProbabilidad < 20) {\n    console.log("Clima " + datos.clima + ". ¡Excursión confirmada!");\n} else {\n    console.log("Se suspende por lluvia.");\n}`
          },
          {
              id: "sec-17",
              icon: "fa-triangle-exclamation",
              title: "17. Manejo de Errores (try...catch)",
              theory: "try, catch y throw new Error.",
              exerciseTitle: "Desafío Escolar: Validador de Notas",
              exerciseDesc: "Construye un sistema robusto de carga de calificaciones a prueba de fallos. Crea la función 'registrarNota(nota)' envuelta en un bloque 'try...catch...finally'. Si el usuario ingresa un número fuera del rango permitido de notas (1 al 10), genera un error intencional utilizando 'throw new Error()', captura la excepción para informar al usuario de manera segura y ejecuta la cláusula 'finally' indicando el fin del proceso.",
              initialCode: `// 1. try...catch con throw`,
              aiSolution: `function registrarNota(nota) {\n    try {\n        if (nota < 1 || nota > 10) {\n            throw new Error("Nota fuera de rango válido (1-10).");\n        }\n        console.log("Nota registrada correctamente: " + nota);\n    } catch (err) {\n        console.log("[ERROR CAPTURADO]: " + err.message);\n    } finally {\n        console.log("Proceso de registro finalizado.");\n    }\n}\nregistrarNota(12);`
          },
          {
              id: "sec-18",
              icon: "fa-bolt",
              title: "18. Eventos de Avanzada",
              theory: "Despachadores y gestión concurrente.",
              exerciseTitle: "Desafío Escolar: Teclado de Turnos",
              exerciseDesc: "Crea un administrador concurrente para la reserva de turnos en el laboratorio informático. Utiliza una clase orientada a objetos llamada 'SalaInformatica' que contenga un método 'reservarCompu(alumno, pc)'. Cada vez que un alumno reserve un equipo, captura la hora del sistema en tiempo real utilizando 'toLocaleTimeString()' y guarda la solicitud en un arreglo cronológico imprimiendo el detalle en la consola.",
              initialCode: `// 1. Simulación de turnos con timestamp`,
              aiSolution: `class SalaInformatica {\n    constructor() { this.reservas = []; }\n    reservarCompu(alumno, pc) {\n        let timestamp = new Date().toLocaleTimeString();\n        this.reservas.push({ alumno, pc, timestamp });\n        console.log("PC " + pc + " reservada por " + alumno + " a las " + timestamp);\n    }\n}\nlet sala = new SalaInformatica();\nsala.reservarCompu("Lucas", 5);`
          },
          {
              id: "sec-19",
              icon: "fa-flag-checkered",
              title: "19. Proyecto Integrador Final",
              theory: "Integración completa de conceptos.",
              exerciseTitle: "PROYECTO FINAL: Centro de Estudiantes",
              exerciseDesc: "Desarrolla el sistema de gestión integral para la administración del Centro de Estudiantes del IPEM 146. Construye un objeto 'centroEstudiantes' que contenga una colección de proyectos institucionales (cada uno con su nombre, presupuesto solicitado y estado de aprobación). Incorpora el método 'generarReporte()' que combine métodos modernos de arreglos (.filter() y .reduce()) para computar el presupuesto total requerido de las iniciativas aprobadas e imprimir la liquidación oficial.",
              initialCode: `// PROYECTO FINAL\n// 1. centroEstudiantes`,
              aiSolution: `let centroEstudiantes = {\n    proyectos: [\n        { nombre: "Torneo Ajedrez", presupuesto: 15000, aprobado: true },\n        { nombre: "Pintar mural", presupuesto: 25000, aprobado: true },\n        { nombre: "Comprar red voley", presupuesto: 40000, aprobado: false }\n    ],\n    generarReporte: function() {\n        let aprobados = this.proyectos.filter(p => p.aprobado);\n        let totalPresupuesto = aprobados.reduce((acc, p) => acc + p.presupuesto, 0);\n        console.log("Proyectos Aprobados:", aprobados.length);\n        console.log("Presupuesto Total Requerido: $" + totalPresupuesto);\n    }\n};\ncentroEstudiantes.generarReporte();`
          }
      ];
      // Fuente editable externa: desafios.js. Si no está disponible, usa la copia integrada.
      let seccionesData = (Array.isArray(window.DESAFIOS_DATA) && window.DESAFIOS_DATA.length === 19)
          ? window.DESAFIOS_DATA
          : seccionesDataBase;

      const SITIO_APOYO_URL = "https://josepantaleo.github.io/formacionprofesionalweb/";
      const ayudasPalabrasClave = {
          "diseña": "Planificá la solución y escribí el código que cumpla el objetivo indicado.",
          "crea": "Construí en tu código el elemento que pide la consigna.",
          "desarrolla": "Armá una solución completa siguiendo las condiciones indicadas.",
          "construye": "Creá paso a paso la estructura o el programa solicitado.",
          "escribe": "Redactá las instrucciones de JavaScript necesarias.",
          "deberás": "Indica una acción obligatoria que debe aparecer en tu resolución.",
          "debes": "Indica una acción obligatoria que debe aparecer en tu resolución.",
          "define": "Creá el elemento indicado y asignale sus características iniciales.",
          "declara": "Creá una variable e indicá su nombre antes de utilizarla.",
          "declarar": "Crear una variable e indicar su nombre antes de utilizarla.",
          "definir": "Establecer el nombre, el valor o el comportamiento que tendrá un elemento.",
          "inicializa": "Crear una variable, arreglo u objeto asignándole su primer valor.",
          "utiliza": "Aplicar en tu código el recurso indicado por la consigna.",
          "usa": "Aplicá en tu código el recurso indicado por la consigna.",
          "realiza": "Ejecutá la operación o el procedimiento solicitado.",
          "implementar": "Escribir y poner en funcionamiento la lógica solicitada.",
          "implementa": "Escribí y poné en funcionamiento la lógica solicitada.",
          "validar": "Comprobar que un dato o una condición cumpla las reglas indicadas.",
          "verifica": "Comprobá que el dato o resultado cumpla la condición solicitada.",
          "evaluar": "Comprobar una condición para obtener un resultado verdadero o falso.",
          "evalúa": "Comprobá la condición indicada y utilizá el resultado obtenido.",
          "examina": "Revisá los datos o propiedades indicados antes de decidir el resultado.",
          "calcular": "Realizar las operaciones necesarias y guardar o mostrar el resultado.",
          "calcula": "Realizá las operaciones necesarias y guardá o mostrá el resultado.",
          "convertir": "Transformar un dato de un formato o tipo a otro.",
          "convierte": "Transformá el dato del formato de origen al formato solicitado.",
          "almacenar": "Guardar un valor en una variable, arreglo, objeto o almacenamiento.",
          "almacena": "Guardá el valor en la estructura indicada por la consigna.",
          "recuperar": "Leer nuevamente un dato que fue guardado anteriormente.",
          "recupera": "Leé nuevamente un dato que fue guardado anteriormente.",
          "mostrar": "Presentar el resultado para que pueda verse.",
          "muestra": "Presentá el resultado para que pueda verse.",
          "imprimir": "Enviar el resultado a la consola mediante console.log().",
          "imprime": "Mostrá el resultado en la consola mediante console.log().",
          "generar": "Construir el resultado solicitado a partir de los datos disponibles.",
          "genera": "Construí el resultado solicitado a partir de los datos disponibles.",
          "incorpora": "Agregá el elemento o comportamiento solicitado a la solución.",
          "agrega": "Sumá el elemento indicado a la estructura existente.",
          "aplica": "Usá el método, operador o procedimiento indicado sobre los datos.",
          "guarda": "Conservá el dato en la variable o estructura indicada.",
          "simula": "Representá el comportamiento pedido sin depender de un sistema externo real.",
          "retornar": "Devolver un resultado desde una función usando return.",
          "función": "Bloque reutilizable de instrucciones. Debés definirlo y luego llamarlo.",
          "function": "Palabra de JavaScript utilizada para declarar una función.",
          "parámetros": "Datos que una función recibe entre paréntesis para poder trabajar.",
          "const": "Declara una variable cuyo valor no debe reasignarse.",
          "let": "Declara una variable cuyo valor puede cambiar.",
          "var": "Forma antigua de declarar variables; tiene alcance de función.",
          "array": "Lista ordenada de valores. En JavaScript se escribe entre corchetes.",
          "arreglo": "Lista ordenada de valores. En JavaScript se escribe entre corchetes.",
          "objeto": "Estructura que agrupa datos mediante propiedades de tipo clave y valor.",
          "if": "Ejecuta un bloque solamente cuando la condición es verdadera.",
          "else if": "Permite comprobar otra condición cuando la anterior no se cumplió.",
          "else": "Ejecuta una alternativa cuando las condiciones anteriores son falsas.",
          "if/else": "Estructura que permite elegir entre dos caminos según una condición.",
          "for": "Bucle usado para repetir instrucciones una cantidad controlada de veces.",
          "while": "Bucle que repite instrucciones mientras una condición sea verdadera.",
          "class": "Plantilla para crear objetos con propiedades y métodos compartidos.",
          "consola": "Zona donde se muestran resultados y mensajes del programa.",
          "console.log()": "Instrucción para mostrar valores o mensajes en la consola.",
          "dom": "Representación de los elementos HTML que JavaScript puede consultar y modificar.",
          "scope": "Zona del programa donde una variable existe y puede utilizarse.",
          "localstorage": "Almacenamiento del navegador que conserva datos entre recargas.",
          "filter()": "Crea un nuevo arreglo conservando solo los elementos que cumplen una condición.",
          "reduce()": "Recorre un arreglo y combina sus valores en un único resultado.",
          "push()": "Agrega un elemento al final de un arreglo.",
          "shift()": "Quita y devuelve el primer elemento de un arreglo.",
          "trim()": "Elimina espacios innecesarios al principio y al final de un texto.",
          "tolowercase()": "Convierte todas las letras de un texto a minúsculas.",
          "replace()": "Reemplaza una parte de un texto por otro contenido.",
          "json.parse()": "Convierte una cadena escrita en formato JSON en un valor de JavaScript.",
          "tolocaletimestring()": "Obtiene la hora local con un formato legible.",
          "innertext": "Propiedad utilizada para leer o cambiar el texto visible de un elemento.",
          "style.color": "Propiedad que permite cambiar el color del texto de un elemento.",
          "style.backgroundcolor": "Propiedad que permite cambiar el color de fondo de un elemento.",
          "try...catch...finally": "Estructura para intentar una operación, capturar errores y ejecutar una acción final.",
          "throw new error()": "Crea intencionalmente un error para que pueda ser capturado y tratado."
      };

      const ejemplosPalabrasClave = {
          "declarar": 'Ejemplo general: let cantidad = 2;',
          "declara": 'Ejemplo general: const escuela = "IPEM 146";',
          "definir": 'Ejemplo general: const limite = 10;',
          "define": 'Ejemplo general: let estado = "activo";',
          "const": 'Ejemplo general: const curso = "5° Año";',
          "let": "Ejemplo general: let contador = 0;",
          "var": 'Ejemplo general: var mensaje = "Hola";',
          "function": "Ejemplo general: function saludar(nombre) { return `Hola ${nombre}`; }",
          "función": "Ejemplo general: function duplicar(numero) { return numero * 2; }",
          "parámetros": "Ejemplo general: function sumar(a, b) { return a + b; }",
          "retornar": "Ejemplo general: return resultado;",
          "array": 'Ejemplo general: const colores = ["azul", "verde"];',
          "arreglo": "Ejemplo general: const numeros = [2, 4, 6];",
          "objeto": 'Ejemplo general: const libro = { titulo: "Programación", disponible: true };',
          "if": 'Ejemplo general: if (edad >= 18) { console.log("Mayor"); }',
          "else if": 'Ejemplo general: else if (nota >= 6) { console.log("Aprobado"); }',
          "else": 'Ejemplo general: else { console.log("Revisar"); }',
          "if/else": "Ejemplo general: if (condicion) { /* opción A */ } else { /* opción B */ }",
          "for": "Ejemplo general: for (let i = 0; i < 3; i++) { console.log(i); }",
          "while": "Ejemplo general: while (contador < 3) { contador++; }",
          "class": "Ejemplo general: class Persona { constructor(nombre) { this.nombre = nombre; } }",
          "console.log()": 'Ejemplo general: console.log("Resultado:", resultado);',
          "filter()": "Ejemplo general: const pares = numeros.filter(n => n % 2 === 0);",
          "reduce()": "Ejemplo general: const total = numeros.reduce((suma, n) => suma + n, 0);",
          "push()": 'Ejemplo general: colores.push("rojo");',
          "shift()": "Ejemplo general: const primero = colores.shift();",
          "trim()": "Ejemplo general: const limpio = texto.trim();",
          "tolowercase()": "Ejemplo general: const minusculas = texto.toLowerCase();",
          "replace()": 'Ejemplo general: const nuevo = texto.replace("a", "e");',
          "json.parse()": 'Ejemplo general: const dato = JSON.parse(\'{"activo":true}\');',
          "tolocaletimestring()": "Ejemplo general: const hora = new Date().toLocaleTimeString();",
          "innertext": 'Ejemplo general: elemento.innerText = "Nuevo texto";',
          "style.color": 'Ejemplo general: elemento.style.color = "blue";',
          "style.backgroundcolor": 'Ejemplo general: elemento.style.backgroundColor = "yellow";',
          "localstorage": 'Ejemplo general: localStorage.setItem("tema", "oscuro");',
          "dom": 'Ejemplo general: const titulo = document.querySelector("h1");',
          "scope": "Ejemplo general: una variable declarada dentro de un bloque solo se usa allí.",
          "try...catch...finally": "Ejemplo general: try { ejecutar(); } catch (error) { console.log(error); } finally { cerrar(); }",
          "throw new error()": 'Ejemplo general: throw new Error("Dato inválido");',
          "calcular": "Ejemplo general: const total = precio * cantidad;",
          "calcula": "Ejemplo general: const promedio = suma / cantidad;",
          "mostrar": 'Ejemplo general: console.log("Dato:", dato);',
          "muestra": 'Ejemplo general: console.log("Estado:", estado);',
          "imprimir": 'Ejemplo general: console.log("Proceso terminado");',
          "imprime": 'Ejemplo general: console.log("Valor:", valor);',
          "almacenar": "Ejemplo general: let resultado = operacion;",
          "almacena": "Ejemplo general: const registro = { nombre, curso };",
          "validar": "Ejemplo general: const esValido = valor > 0;",
          "verifica": "Ejemplo general: if (texto.length >= 3) { /* válido */ }"
      };

      const palabrasAccion = new Set([
          "diseña", "crea", "desarrolla", "construye", "escribe", "deberás", "debes",
          "define", "definir", "declara", "declarar", "inicializa", "utiliza", "usa",
          "realiza", "implementar", "implementa", "validar", "verifica", "evaluar",
          "evalúa", "examina", "calcular", "calcula", "convertir", "convierte",
          "almacenar", "almacena", "recuperar", "recupera", "mostrar", "muestra",
          "imprimir", "imprime", "generar", "genera", "incorpora", "agrega",
          "aplica", "guarda", "simula", "retornar"
      ]);

      const palabrasConcepto = new Set([
          "function", "función", "parámetros", "class", "array", "arreglo", "objeto",
          "dom", "scope", "consola", "const", "let", "var", "if", "else if", "else",
          "if/else", "for", "while", "localstorage"
      ]);

      function categoriaPalabraClave(termino) {
          const clave = normalizarTerminoAyuda(termino);
          if (palabrasAccion.has(clave)) return "action";
          if (palabrasConcepto.has(clave)) return "concept";
          if (/[().]/.test(clave) || clave.startsWith("style.")) return "tool";
          if (/resultado|condici[oó]n|total|promedio|booleano|mensaje|reporte/.test(clave)) return "result";
          return "concept";
      }

      function etiquetaCategoriaPalabra(categoria) {
          return {
              action: "Acción que tenés que realizar",
              concept: "Concepto de JavaScript",
              tool: "Método o herramienta",
              result: "Condición o resultado esperado"
          }[categoria] || "Concepto importante";
      }

      function obtenerEjemploPalabraClave(termino, categoria) {
          const clave = normalizarTerminoAyuda(termino);
          if (ejemplosPalabrasClave[clave]) return ejemplosPalabrasClave[clave];
          if (categoria === "action") {
              return `Ejemplo general: aplicá la acción “${termino}” sobre datos de prueba antes de resolver el caso del desafío.`;
          }
          if (categoria === "tool") {
              return `Ejemplo general: probá ${termino} con un valor sencillo y observá qué resultado produce.`;
          }
          if (categoria === "result") {
              return 'Ejemplo general: console.log("Resultado:", resultado);';
          }
          return `Ejemplo general: creá una prueba pequeña que utilice ${termino} y verificá su funcionamiento.`;
      }

      function normalizarTerminoAyuda(termino) {
          return String(termino || "")
              .trim()
              .toLocaleLowerCase("es")
              .replace(/^\.|;$/g, "");
      }

      function obtenerAyudaPalabraClave(termino, explicacion = "") {
          if (String(explicacion || "").trim()) return String(explicacion).trim();
          const clave = normalizarTerminoAyuda(termino);
          return ayudasPalabrasClave[clave]
              || `Es una acción o un concepto central de la consigna. Identificá dónde aplicarlo y comprobá que aparezca claramente en tu solución.`;
      }

      function escaparAtributoAyuda(valor) {
          return String(valor ?? "")
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;");
      }

      function crearPalabraClaveInteractiva(termino, explicacion = "") {
          const ayuda = obtenerAyudaPalabraClave(termino, explicacion);
          const categoria = categoriaPalabraClave(termino);
          const ejemplo = obtenerEjemploPalabraClave(termino, categoria);
          const etiqueta = `Ver ayuda sobre ${termino}`;
          return `<span class="exercise-keyword keyword-${categoria}" role="button" tabindex="0" data-keyword="${escaparAtributoAyuda(termino)}" data-help="${escaparAtributoAyuda(ayuda)}" data-example="${escaparAtributoAyuda(ejemplo)}" data-category="${categoria}" title="${escaparAtributoAyuda(etiqueta)}" aria-label="${escaparAtributoAyuda(etiqueta)}">${termino}</span>`;
      }

      function resaltarPalabrasClave(texto) {
          const palabrasClave = [
              "console\\.log\\(\\)", "JSON\\.parse\\(\\)", "toLocaleTimeString\\(\\)",
              "toLowerCase\\(\\)", "trim\\(\\)", "replace\\(\\)", "filter\\(\\)",
              "reduce\\(\\)", "push\\(\\)", "shift\\(\\)", "innerText", "style\\.color",
              "style\\.backgroundColor", "LocalStorage", "DOM", "Scope", "try\\.\\.\\.catch\\.\\.\\.finally",
              "throw new Error\\(\\)", "if/else", "if", "else if", "else", "for", "while",
              "function", "class", "const", "let", "var", "array", "arreglo", "objeto",
              "funci[oó]n", "par[aá]metros", "retornar", "declarar", "inicializa",
              "utiliza", "implementar", "validar", "calcular", "convertir", "almacenar",
              "recuperar", "mostrar", "imprimir", "evaluar", "generar", "consola",
              "diseña", "crea", "desarrolla", "construye", "escribe", "deber[aá]s",
              "debes", "define", "declara", "usa", "realiza", "implementa", "verifica",
              "eval[uú]a", "examina", "calcula", "convierte", "almacena", "recupera",
              "muestra", "imprime", "genera", "incorpora", "agrega", "aplica", "guarda", "simula",
              "resultado", "costo total", "promedio", "mensaje", "reporte", "booleano",
              "condiciones", "lista actualizada"
          ];
          const escapar = valor => String(valor ?? "")
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#39;");
          const textoSeguro = escapar(texto);
          const patron = new RegExp(
              `(?<![\\p{L}\\p{N}_])(${palabrasClave.sort((a, b) => b.length - a.length).join("|")})(?![\\p{L}\\p{N}_])`,
              "giu"
          );
          return textoSeguro.replace(patron, coincidencia => crearPalabraClaveInteractiva(coincidencia));
      }

      function resaltarPalabrasClaveIA(texto, palabras) {
          const escapar = valor => String(valor ?? "")
              .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const escaparHtml = valor => String(valor ?? "")
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#39;");
          const detalles = [];
          const vistos = new Set();
          (Array.isArray(palabras) ? palabras : []).forEach(item => {
              const termino = String(
                  typeof item === "string"
                      ? item
                      : item?.palabra || item?.termino || item?.frase || ""
              ).trim();
              const explicacion = typeof item === "object"
                  ? String(item?.explicacion || item?.ayuda || item?.significado || "").trim()
                  : "";
              const clave = normalizarTerminoAyuda(termino);
              if (termino.length < 3 || termino.length > 80 || vistos.has(clave)) return;
              vistos.add(clave);
              detalles.push({ termino, explicacion });
          });
          detalles.sort((a, b) => b.termino.length - a.termino.length);
          if (!detalles.length) return resaltarPalabrasClave(texto);
          const textoSeguro = escaparHtml(texto);
          const patron = new RegExp(
              `(?<![\\p{L}\\p{N}_])(${detalles.map(item => escapar(item.termino)).join("|")})(?![\\p{L}\\p{N}_])`,
              "giu"
          );
          const resultado = textoSeguro.replace(patron, coincidencia => {
              const clave = normalizarTerminoAyuda(coincidencia);
              const detalle = detalles.find(item => normalizarTerminoAyuda(item.termino) === clave);
              return crearPalabraClaveInteractiva(coincidencia, detalle?.explicacion || "");
          });
          return resultado.includes('class="exercise-keyword"')
              ? resultado
              : resaltarPalabrasClave(texto);
      }

      function palabrasClaveLocales(sec) {
          return [
              ...(Array.isArray(sec?.conceptosDetectar) ? sec.conceptosDetectar : []),
              ...(Array.isArray(sec?.objetivosPedagogicos) ? sec.objetivosPedagogicos : [])
          ];
      }

      function extraerPalabrasClaveIA(respuesta) {
          const texto = String(respuesta || "").trim();
          const bloque = texto.match(/\[[\s\S]*\]/)?.[0] || texto;
          try {
              const datos = JSON.parse(bloque);
              return Array.isArray(datos)
                  ? datos.map(x => typeof x === "string"
                      ? { termino: x, explicacion: "" }
                      : {
                          termino: x?.palabra || x?.termino || x?.frase || "",
                          explicacion: x?.explicacion || x?.ayuda || x?.significado || ""
                      })
                  : [];
          } catch (_) {
              return texto.split(/[,;\n•]+/).map(x => ({
                  termino: x.replace(/^[-*\d.\s]+/, "").trim(),
                  explicacion: ""
              }));
          }
      }

      function obtenerRegistroAyuda(sectionId) {
          if (!ayudasComprension[sectionId] || typeof ayudasComprension[sectionId] !== "object") {
              ayudasComprension[sectionId] = {
                  palabras: {},
                  pasosVistos: 0,
                  materialApoyoVistas: 0,
                  verificacion: { intentos: 0, correcta: false, respuesta: null, ultimaFecha: "" },
                  checklist: {}
              };
          }
          const registro = ayudasComprension[sectionId];
          if (!registro.palabras || typeof registro.palabras !== "object") registro.palabras = {};
          if (!registro.verificacion || typeof registro.verificacion !== "object") {
              registro.verificacion = { intentos: 0, correcta: false, respuesta: null, ultimaFecha: "" };
          }
          if (!registro.checklist || typeof registro.checklist !== "object") registro.checklist = {};
          return registro;
      }

      function guardarRegistroAyuda(sectionId) {
          const registro = obtenerRegistroAyuda(sectionId);
          setLocalStorage(`ayudas_comprension_${sectionId}`, JSON.stringify(registro));
          programarGuardadoFirebase();
      }

      function cargarRegistroAyudaLocal(sectionId) {
          if (ayudasComprension[sectionId]) return;
          try {
              const local = JSON.parse(getLocalStorage(`ayudas_comprension_${sectionId}`) || "null");
              if (local && typeof local === "object") ayudasComprension[sectionId] = local;
          } catch (_) {
              // Si el dato local quedó incompleto, se crea un registro nuevo.
          }
      }

      function registrarPalabraConsultada(sectionId, termino, categoria) {
          if (!sectionId) return;
          const registro = obtenerRegistroAyuda(sectionId);
          const clave = normalizarTerminoAyuda(termino);
          const actual = registro.palabras[clave] || {
              termino: String(termino || ""),
              categoria: categoria || "concept",
              consultas: 0,
              ultimaFecha: ""
          };
          actual.consultas = Number(actual.consultas || 0) + 1;
          actual.ultimaFecha = new Date().toISOString();
          registro.palabras[clave] = actual;
          guardarRegistroAyuda(sectionId);
      }

      function generarPasosConsigna(sec) {
          const texto = String(sec?.exerciseDesc || "")
              .replace(/\s+/g, " ")
              .trim();
          const fragmentos = texto
              .split(/(?<=[.!?])\s+|(?=\b(?:Luego|Finalmente|Realiza|Utiliza|Aplica|Agrega|Incorpora|Muestra|Imprime|Guarda|Recupera|Convierte|Examina)\b)/i)
              .map(item => item.trim().replace(/^[,;]\s*/, ""))
              .filter(item => item.length >= 18);
          const pasos = [];
          fragmentos.forEach(fragmento => {
              if (pasos.length >= 5) return;
              pasos.push(fragmento.replace(/[.]\s*$/, ""));
          });
          if (pasos.length < 2) {
              pasos.push("Identificá los datos, variables o estructuras que solicita la consigna");
              pasos.push("Aplicá los conceptos del módulo para construir la solución");
          }
          if (!pasos.some(paso => /probar|verificar|ejecutar/i.test(paso))) {
              pasos.push("Ejecutá el código y verificá que el resultado coincida con lo solicitado");
          }
          return pasos.slice(0, 6);
      }

      function generarChecklistConsigna(sec) {
          const terminos = [
              ...(Array.isArray(sec?.conceptosDetectar) ? sec.conceptosDetectar : []),
              ...(Array.isArray(sec?.objetivosPedagogicos) ? sec.objetivosPedagogicos : [])
          ].map(item => String(item).trim()).filter(Boolean).slice(0, 3);
          const items = [
              "Identifiqué qué datos, variables o estructuras necesito.",
              "Realicé todas las acciones indicadas en la consigna.",
              terminos.length
                  ? `Incluí los conceptos principales: ${terminos.join(", ")}.`
                  : "Apliqué los conceptos de JavaScript trabajados en este módulo.",
              "Mostré o devolví el resultado en el lugar solicitado.",
              "Ejecuté el código y revisé que no tenga errores."
          ];
          return items;
      }

      function generarVerificacionComprension(sec) {
          const pasos = generarPasosConsigna(sec);
          const objetivo = pasos[0].replace(/[.]\s*$/, "");
          return {
              pregunta: "¿Cuál de estas opciones describe mejor cómo comenzar este desafío?",
              opciones: [
                  objetivo,
                  "Copiar una solución completa sin analizar la consigna.",
                  "Modificar valores al azar sin identificar el objetivo del programa."
              ],
              correcta: 0
          };
      }

      function renderPasosConsigna(sec) {
          return generarPasosConsigna(sec)
              .map(paso => `<li>${escaparAtributoAyuda(paso)}</li>`)
              .join("");
      }

      function renderVerificacionComprension(sec) {
          const verificacion = generarVerificacionComprension(sec);
          return verificacion.opciones.map((opcion, indice) => `
              <label>
                  <input type="radio" name="comprension-${sec.id}" value="${indice}">
                  <span>${escaparAtributoAyuda(opcion)}</span>
              </label>`).join("");
      }

      function renderChecklistComprension(sec) {
          return generarChecklistConsigna(sec).map((item, indice) => `
              <label>
                  <input type="checkbox" data-check-index="${indice}" onchange="actualizarChecklistComprension('${sec.id}', ${indice}, this.checked)">
                  <span>${escaparAtributoAyuda(item)}</span>
              </label>`).join("");
      }

      function mostrarPasosConsigna(sectionId) {
          const panel = document.getElementById(`steps-panel-${sectionId}`);
          const boton = document.getElementById(`btn-steps-${sectionId}`);
          if (!panel) return;
          const abrir = !panel.classList.contains("active");
          panel.classList.toggle("active", abrir);
          if (boton) {
              boton.innerHTML = abrir
                  ? '<i class="fa-solid fa-chevron-up"></i> Ocultar pasos'
                  : '<i class="fa-solid fa-list-ol"></i> Ver consigna en pasos';
              boton.setAttribute("aria-expanded", String(abrir));
          }
          if (abrir) {
              const registro = obtenerRegistroAyuda(sectionId);
              registro.pasosVistos = Number(registro.pasosVistos || 0) + 1;
              registro.ultimaFecha = new Date().toISOString();
              guardarRegistroAyuda(sectionId);
          }
      }

      function verificarComprensionConsigna(sectionId) {
          const seleccionado = document.querySelector(`input[name="comprension-${sectionId}"]:checked`);
          const feedback = document.getElementById(`comprehension-feedback-${sectionId}`);
          if (!seleccionado || !feedback) {
              if (feedback) {
                  feedback.className = "comprehension-feedback active incorrect";
                  feedback.textContent = "Seleccioná una opción antes de verificar.";
              }
              return;
          }
          const respuesta = Number(seleccionado.value);
          const correcta = respuesta === 0;
          const registro = obtenerRegistroAyuda(sectionId);
          registro.verificacion.intentos = Number(registro.verificacion.intentos || 0) + 1;
          registro.verificacion.correcta = correcta;
          registro.verificacion.respuesta = respuesta;
          registro.verificacion.ultimaFecha = new Date().toISOString();
          feedback.className = `comprehension-feedback active ${correcta ? "correct" : "incorrect"}`;
          feedback.innerHTML = correcta
              ? '<i class="fa-solid fa-circle-check"></i> Comprensión verificada. Ya podés usar los pasos y la lista de control para resolver.'
              : '<i class="fa-solid fa-circle-info"></i> Revisá las acciones destacadas y abrí la consigna en pasos antes de volver a intentar.';
          guardarRegistroAyuda(sectionId);
      }

      function actualizarChecklistComprension(sectionId, indice, checked) {
          const registro = obtenerRegistroAyuda(sectionId);
          registro.checklist[String(indice)] = checked === true;
          registro.ultimaFecha = new Date().toISOString();
          actualizarProgresoChecklist(sectionId);
          guardarRegistroAyuda(sectionId);
      }

      function actualizarProgresoChecklist(sectionId) {
          const registro = obtenerRegistroAyuda(sectionId);
          const total = generarChecklistConsigna(seccionesData.find(sec => sec.id === sectionId)).length;
          const marcados = Object.values(registro.checklist).filter(Boolean).length;
          const elemento = document.getElementById(`checklist-progress-${sectionId}`);
          if (elemento) elemento.textContent = `${marcados} de ${total} comprobaciones marcadas`;
      }

      function restaurarInterfazAyuda(sectionId) {
          cargarRegistroAyudaLocal(sectionId);
          const registro = obtenerRegistroAyuda(sectionId);
          Object.entries(registro.checklist).forEach(([indice, checked]) => {
              const input = document.querySelector(`#checklist-${sectionId} [data-check-index="${indice}"]`);
              if (input) input.checked = checked === true;
          });
          const respuesta = Number(registro.verificacion?.respuesta);
          if (Number.isInteger(respuesta)) {
              const input = document.querySelector(`input[name="comprension-${sectionId}"][value="${respuesta}"]`);
              if (input) input.checked = true;
              const feedback = document.getElementById(`comprehension-feedback-${sectionId}`);
              if (feedback && Number(registro.verificacion?.intentos || 0) > 0) {
                  const correcta = registro.verificacion.correcta === true;
                  feedback.className = `comprehension-feedback active ${correcta ? "correct" : "incorrect"}`;
                  feedback.textContent = correcta
                      ? "Comprensión verificada anteriormente."
                      : "La última respuesta no fue correcta. Revisá los pasos e intentá nuevamente.";
              }
          }
          actualizarProgresoChecklist(sectionId);
      }

      function mostrarAyudaPalabraClave(elemento) {
          const seccion = elemento.closest(".section-card");
          const panel = seccion?.querySelector(".keyword-help-panel");
          if (!panel) return;
          const termino = elemento.dataset.keyword || elemento.textContent || "Palabra clave";
          const ayuda = elemento.dataset.help || obtenerAyudaPalabraClave(termino);
          const categoria = elemento.dataset.category || categoriaPalabraClave(termino);
          const ejemplo = elemento.dataset.example || obtenerEjemploPalabraClave(termino, categoria);
          panel.innerHTML = "";
          const titulo = document.createElement("strong");
          titulo.textContent = `${termino}: `;
          panel.appendChild(titulo);
          panel.appendChild(document.createTextNode(ayuda));
          const tipo = document.createElement("div");
          tipo.style.cssText = "margin-top:.35rem;color:var(--text-muted);font-size:.76rem";
          tipo.textContent = etiquetaCategoriaPalabra(categoria);
          panel.appendChild(tipo);
          if (ejemplo) {
              const bloqueEjemplo = document.createElement("code");
              bloqueEjemplo.className = "keyword-help-example";
              bloqueEjemplo.textContent = ejemplo;
              panel.appendChild(bloqueEjemplo);
          }
          panel.classList.add("active");
          panel.focus();
          registrarPalabraConsultada(seccion?.id || "", termino, categoria);
      }

      document.addEventListener("click", event => {
          const palabra = event.target.closest?.(".exercise-keyword");
          if (palabra) mostrarAyudaPalabraClave(palabra);
      });

      document.addEventListener("keydown", event => {
          const palabra = event.target.closest?.(".exercise-keyword");
          if (palabra && (event.key === "Enter" || event.key === " ")) {
              event.preventDefault();
              mostrarAyudaPalabraClave(palabra);
          }
      });

      function abrirSitioApoyo(seccionId = "") {
          const modal = document.getElementById("sitioApoyoModal");
          const frame = document.getElementById("sitioApoyoFrame");
          const seccion = seccionesData.find(item => item.id === seccionId);
          const detalle = document.getElementById("sitioApoyoSeccion");
          if (detalle) {
              detalle.textContent = seccion
                  ? `Consulta para apoyar: ${seccion.title}`
                  : "Consulta dentro de la actividad";
          }
          if (frame && frame.src === "about:blank") frame.src = SITIO_APOYO_URL;
          modal?.classList.add("active");
          modal?.querySelector("button")?.focus();
          if (seccionId) {
              const registro = obtenerRegistroAyuda(seccionId);
              registro.materialApoyoVistas = Number(registro.materialApoyoVistas || 0) + 1;
              registro.ultimaFecha = new Date().toISOString();
              guardarRegistroAyuda(seccionId);
          }
      }

      function cerrarSitioApoyo() {
          document.getElementById("sitioApoyoModal")?.classList.remove("active");
      }

      async function analizarDesafioConIA(sec) {
          const descripcion = document.getElementById(`exercise-desc-${sec.id}`);
          const estado = document.getElementById(`exercise-ai-status-${sec.id}`);
          if (!descripcion) return;
          const locales = palabrasClaveLocales(sec);
          descripcion.innerHTML = resaltarPalabrasClaveIA(sec.exerciseDesc, locales);
          if (estado) estado.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> Palabras clave sugeridas por el desafío';
          if (!window.firebaseAIRealConfigurada || typeof window.consultarTutorIAFirebase !== "function" || !window.firebaseCurrentUser) return;
          try {
              if (estado) estado.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> La IA está identificando las acciones y conceptos principales...';
              const respuesta = await window.consultarTutorIAFirebase({
                  nombreModulo: sec.title || sec.id,
                  consigna: sec.exerciseDesc || "",
                  pregunta: "Identificá entre 6 y 14 palabras o frases clave que ayuden a comprender qué debe hacer el estudiante. Devolvé únicamente un array JSON de objetos con las propiedades termino y explicacion. La explicación debe ser breve, clara, orientada a la acción y no debe resolver el ejercicio.",
                  modo: "identificar_palabras_clave",
                  conceptos: locales.join(", ")
              });
              const palabrasIA = extraerPalabrasClaveIA(respuesta);
              if (palabrasIA.length) {
                  descripcion.innerHTML = resaltarPalabrasClaveIA(sec.exerciseDesc, palabrasIA);
                  if (estado) {
                      estado.classList.add("ready");
                      estado.innerHTML = '<i class="fa-solid fa-circle-check"></i> Palabras clave identificadas por IA';
                  }
              }
          } catch (error) {
              console.warn("No se pudieron identificar palabras clave con IA; se mantienen las sugerencias locales.", error);
              if (estado) estado.innerHTML = '<i class="fa-solid fa-circle-info"></i> Palabras clave sugeridas localmente';
          }
      }

      window.addEventListener("firebase-auth-changed", event => {
          if (event.detail) seccionesData.forEach(sec => analizarDesafioConIA(sec));
      });
      window.addEventListener("desbloqueo-pantalla-estudiante", () => {
          pantallaBloqueada = false;
          pantallaBloqueadaEn = "";
          pantallaBloqueadaSeccion = "";
          removeLocalStorage("app_screen_locked_at");
          removeLocalStorage("app_screen_locked_section");
          aplicarBloqueoInterfazEstudiante(false);
      });
      window.addEventListener("pantalla-bloqueada-estudiante", () => {
          pantallaBloqueada = true;
          aplicarBloqueoInterfazEstudiante(true);
      });


      let historialResultados = {};
      let notasDesafiosDocente = {};
      let actividadesFinalizadas = {};
      let contadorPrevisualizaciones = {};
      let ayudasComprension = {};
      let totalSalidasPestana = 0;
      let eventosSalidasPestana = [];
      let salidaActivaPestana = null;
      let revisionSalidasActual = {
          estado: "pendiente",
          penalizacion: 0,
          motivo: "",
          notaConfirmada: false,
          notaFinalDocente: null,
          notaConfirmadaValor: null,
          notaCalculadaAlConfirmar: null,
          notaModificadaManualmente: false
      };
      let seccionActivaActual = seccionesData[0].id;

      function formatearFechaNotaDocente(valor) {
          if (!valor) return '';
          const fecha = valor.toDate ? valor.toDate() : new Date(valor);
          return Number.isNaN(fecha.getTime()) ? '' : fecha.toLocaleString('es-AR');
      }

      function obtenerNotaVigenteModuloEstudiante(sectionId) {
          const resultado = historialResultados[sectionId] || {};
          const ajuste = notasDesafiosDocente[sectionId] || null;
          const notaDocente = ajuste?.nota === null || ajuste?.nota === undefined || ajuste?.nota === ''
              ? NaN
              : Number(ajuste.nota);
          const notaAutomatica = Number(resultado.notaFinal ?? resultado.notaIA);
          return {
              nota: Number.isFinite(notaDocente)
                  ? Math.max(0, Math.min(10, notaDocente))
                  : (Number.isFinite(notaAutomatica) ? Math.max(0, Math.min(10, notaAutomatica)) : null),
              notaAutomatica: Number.isFinite(notaAutomatica) ? notaAutomatica : null,
              corregida: Number.isFinite(notaDocente),
              ajuste
          };
      }

      function actualizarNotaDocenteVisibleEstudiante(sectionId) {
          const aviso = document.getElementById(`student-teacher-grade-${sectionId}`);
          if (!aviso) return;
          const detalle = obtenerNotaVigenteModuloEstudiante(sectionId);
          if (!detalle.corregida) {
              aviso.hidden = true;
              aviso.innerHTML = '';
              document.querySelector(`#ai-text-${sectionId} .student-teacher-grade-inline`)?.remove();
              return;
          }
          const fecha = formatearFechaNotaDocente(detalle.ajuste?.modificadaEn);
          aviso.hidden = false;
          aviso.innerHTML = `
              <div class="student-teacher-grade-icon"><i class="fa-solid fa-chalkboard-user"></i></div>
              <div class="student-teacher-grade-content">
                  <strong>Nota corregida por tu docente: ${detalle.nota.toFixed(1)}/10</strong>
                  <span>Calificación automática anterior: ${detalle.notaAutomatica !== null ? `${detalle.notaAutomatica}/10` : 'sin calificación automática'}.</span>
                  ${detalle.ajuste?.motivo ? `<span><b>Observación:</b> ${escapeHtml(detalle.ajuste.motivo)}</span>` : ''}
                  <small>${escapeHtml(detalle.ajuste?.modificadaPor || 'Docente autorizado')}${fecha ? ` · ${escapeHtml(fecha)}` : ''}</small>
              </div>`;
          const textoEvaluacion = document.getElementById(`ai-text-${sectionId}`);
          if (textoEvaluacion) {
              let resumen = textoEvaluacion.querySelector('.student-teacher-grade-inline');
              if (!resumen) {
                  resumen = document.createElement('div');
                  resumen.className = 'student-teacher-grade-inline';
                  textoEvaluacion.prepend(resumen);
              }
              resumen.innerHTML = `<strong>Nota vigente corregida por el docente: ${detalle.nota.toFixed(1)}/10</strong>`;
          }
      }

      function actualizarNotasDocenteVisiblesEstudiante() {
          seccionesData.forEach(sec => actualizarNotaDocenteVisibleEstudiante(sec.id));
      }

      window.addEventListener('notas-desafios-docente', event => {
          notasDesafiosDocente = event.detail && typeof event.detail === 'object'
              ? event.detail
              : {};
          actualizarNotasDocenteVisiblesEstudiante();
      });

      // Control de Cronómetros por Módulo (40 minutos = 2400 segundos)
      const TIEMPO_MAXIMO_SEGUNDOS = 2400;
      let tiemposRestantes = {};
      let cronometrosActivos = {};
      let modulosPausados = {};
      let cronometrosPausadosPorDocente = false;
      let cronometrosPausadosIndividualmente = false;
      let ultimoControlCronometros = {};
      let ultimoControlCronometroIndividual = {};
      let moduloCronometroEnCurso = null;
      let seccionPendientePausa = null;
      let tipoAccionModal = '';
      let pantallaBloqueada = false;
      let pantallaBloqueadaEn = "";
      let pantallaBloqueadaSeccion = "";
      let LIMITE_SALIDAS_PARA_BLOQUEO = 5;
      let configuracionSeguimientoActual = {
          limiteSalidas: 5,
          duracionMinimaSegundos: 3,
          bloqueoAutomatico: true,
          avisoSinConexionSegundos: 30,
          alertaSinConexionSegundos: 120,
          retencionDias: 180,
          dominiosPermitidos: [],
          dominiosAlerta: [],
          dominiosIgnorados: []
      };
      window.configuracionSeguimientoActual = configuracionSeguimientoActual;
      const RUBRICA_SOCRATICA_PREDETERMINADA = {
          puntos: { completa: 1, incompleta: 0.7, parcial: 0.3, incorrecta: 0 },
          palabrasMinimas: 18,
          criterios: {
              desarrollo: true,
              justificacion: true,
              evidencia: true,
              consecuencia: true
          },
          alertas: {
              riesgoMinimo: 30,
              aumentoMinimo: 10,
              muestraMinima: 5,
              severidadAlta: 50
          }
      };
      let rubricaSocraticaActual = JSON.parse(JSON.stringify(RUBRICA_SOCRATICA_PREDETERMINADA));
      window.rubricaSocraticaActual = rubricaSocraticaActual;

      function normalizarRubricaSocratica(valor = {}) {
          const puntosRecibidos = valor.puntos || {};
          const criteriosRecibidos = valor.criterios || {};
          const alertasRecibidas = valor.alertas || {};
          const numero = (dato, respaldo) => {
              const convertido = Number(dato);
              return Number.isFinite(convertido) ? Math.max(0, Math.min(1, convertido)) : respaldo;
          };
          const numeroAlerta = (dato, respaldo, minimo = 0, maximo = 100) => {
              const convertido = Number(dato);
              return Number.isFinite(convertido) ? Math.max(minimo, Math.min(maximo, convertido)) : respaldo;
          };
          return {
              puntos: {
                  completa: numero(puntosRecibidos.completa, 1),
                  incompleta: numero(puntosRecibidos.incompleta, 0.7),
                  parcial: numero(puntosRecibidos.parcial, 0.3),
                  incorrecta: numero(puntosRecibidos.incorrecta, 0)
              },
              palabrasMinimas: Math.max(6, Math.min(100, Number(valor.palabrasMinimas) || 18)),
              criterios: {
                  desarrollo: criteriosRecibidos.desarrollo !== false,
                  justificacion: criteriosRecibidos.justificacion !== false,
                  evidencia: criteriosRecibidos.evidencia !== false,
                  consecuencia: criteriosRecibidos.consecuencia !== false
              },
              alertas: {
                  riesgoMinimo: numeroAlerta(alertasRecibidas.riesgoMinimo, 30),
                  aumentoMinimo: numeroAlerta(alertasRecibidas.aumentoMinimo, 10),
                  muestraMinima: numeroAlerta(alertasRecibidas.muestraMinima, 5, 1, 500),
                  severidadAlta: numeroAlerta(alertasRecibidas.severidadAlta, 50)
              },
              actualizadaPor: String(valor.actualizadaPor || ""),
              actualizadaEn: valor.actualizadaEn || null
          };
      }

      function aplicarRubricaSocratica(valor) {
          rubricaSocraticaActual = normalizarRubricaSocratica(valor);
          window.rubricaSocraticaActual = rubricaSocraticaActual;
          completarFormularioRubricaSocratica();
      }
      try {
          const rubricaGuardadaLocal = JSON.parse(localStorage.getItem("rubrica_socratica_docente") || "null");
          if (rubricaGuardadaLocal) aplicarRubricaSocratica(rubricaGuardadaLocal);
      } catch (e) {
          console.warn("No se pudo recuperar la rúbrica socrática local:", e);
      }
      let ignorarSalidasHasta = Date.now() + 5000;
      let ultimoEventoVisibilidad = 0;
      let temporizadorPerdidaFoco = null;
      let monitorSalidasInicializado = false;

      let firebaseSaveTimer = null;
      let firebaseSaveInProgress = false;
      let firebaseSavePending = false;
      let firebaseSaveDirty = false;
      let firebaseLastSavedFingerprint = "";
      let firebaseSaveGeneration = 0;
      let firebaseInitialized = false;
      let ultimaActividadConexionEstudiante = 0;
      let ultimoEnvioConexionEstudiante = 0;
      let intervaloConexionEstudiante = null;
      let claseHabilitada = false;
      let cuentaEstudianteActiva = false;

      function actualizarBloqueoEditorEstudiante(sectionId, bloqueoCooperacion = null) {
          const editor = document.getElementById(`editor-${sectionId}`);
          if (!editor) return true;
          if (bloqueoCooperacion !== null) {
              editor.dataset.cooperationLocked = String(Boolean(bloqueoCooperacion));
          }
          const bloqueado = (
              editor.dataset.cooperationLocked === "true" ||
              !cuentaEstudianteActiva ||
              !claseHabilitada ||
              pantallaBloqueada ||
              Boolean(actividadesFinalizadas[sectionId]) ||
              Boolean(modulosPausados[sectionId])
          );
          editor.disabled = bloqueado;
          editor.__setCodeMirrorDisabled?.(bloqueado);
          return bloqueado;
      }
      window.actualizarBloqueoEditorEstudiante = actualizarBloqueoEditorEstudiante;

      function enviarLatidoConexionEstudiante(forzar = false) {
          if (!window.firebaseCurrentUser || typeof window.actualizarControlEstudianteFirebase !== 'function') return;
          if (document.visibilityState === 'hidden' && !forzar) return;
          const ahora = Date.now();
          if (!forzar && ahora - ultimoEnvioConexionEstudiante < 5000) return;
          ultimoEnvioConexionEstudiante = ahora;
          window.actualizarControlEstudianteFirebase({
              seccionActiva: seccionActivaActual || '',
              escribiendo: ahora - ultimaActividadConexionEstudiante < 15000
          });
      }

      function registrarActividadConexionEstudiante(sectionId = '') {
          ultimaActividadConexionEstudiante = Date.now();
          if (sectionId) seccionActivaActual = sectionId;
          enviarLatidoConexionEstudiante();
      }

      function iniciarLatidoConexionEstudiante() {
          if (intervaloConexionEstudiante) clearInterval(intervaloConexionEstudiante);
          if (!window.firebaseCurrentUser) return;
          enviarLatidoConexionEstudiante(true);
          intervaloConexionEstudiante = setInterval(() => enviarLatidoConexionEstudiante(), 25000);
      }

      window.addEventListener('firebase-auth-changed', iniciarLatidoConexionEstudiante);
      window.addEventListener('online', () => enviarLatidoConexionEstudiante(true));
      window.addEventListener('focus', () => enviarLatidoConexionEstudiante(true));
      document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') enviarLatidoConexionEstudiante(true);
      });
      let estadoCuentaEstudiante = 'pendiente';
      let registroFirebaseExistente = false;
      let estadoExtensionSeguimiento = {
          instalada: false,
          activa: false,
          version: '',
          pendientes: 0
      };
      const eventosPestanasEnProceso = new Set();

      function idClaseSeguimientoPestanas() {
          const partes = new Intl.DateTimeFormat('en-US', {
              timeZone: 'America/Argentina/Buenos_Aires',
              year: 'numeric',
              month: '2-digit',
              day: '2-digit'
          }).formatToParts(new Date());
          const valores = Object.fromEntries(partes.map(parte => [parte.type, parte.value]));
          return `${valores.year}-${valores.month}-${valores.day}`;
      }

      function tituloSeccionSeguimientoPestanas() {
          return seccionesData.find(seccion => seccion.id === seccionActivaActual)?.title || seccionActivaActual || '';
      }

      function esSesionEstudianteParaSeguimiento() {
          const user = window.firebaseCurrentUser;
          const email = String(user?.email || '').trim().toLowerCase();
          const docentes = Array.isArray(window.TEACHER_EMAILS)
              ? window.TEACHER_EMAILS.map(item => String(item).toLowerCase())
              : [];
          return Boolean(
              user?.uid &&
              !docentes.includes(email) &&
              cuentaEstudianteActiva &&
              estadoCuentaEstudiante === 'activo'
          );
      }

      function enviarMensajeExtensionSeguimiento(tipo, datos = {}) {
          window.postMessage({
              source: 'ipem146-activity',
              type: tipo,
              ...datos
          }, window.location.origin);
      }

      function sincronizarExtensionSeguimientoPestanas() {
          const user = window.firebaseCurrentUser;
          if (claseHabilitada && esSesionEstudianteParaSeguimiento()) {
              enviarMensajeExtensionSeguimiento('START_TRACKING', {
                  studentUid: user.uid,
                  studentEmail: user.email || '',
                  classId: idClaseSeguimientoPestanas(),
                  activityTitle: document.title,
                  sectionId: seccionActivaActual,
                  sectionTitle: tituloSeccionSeguimientoPestanas()
              });
              return;
          }
          enviarMensajeExtensionSeguimiento('STOP_TRACKING', {
              reason: claseHabilitada ? 'student-not-authorized' : 'class-ended'
          });
      }

      function actualizarContextoExtensionSeguimiento() {
          if (!claseHabilitada || !esSesionEstudianteParaSeguimiento()) return;
          enviarMensajeExtensionSeguimiento('UPDATE_CONTEXT', {
              activityTitle: document.title,
              sectionId: seccionActivaActual,
              sectionTitle: tituloSeccionSeguimientoPestanas()
          });
      }

      window.addEventListener('message', event => {
          if (event.source !== window || event.origin !== window.location.origin) return;
          const mensaje = event.data;
          if (!mensaje || mensaje.source !== 'ipem146-tab-tracker') return;

          if (mensaje.type === 'EXTENSION_READY') {
              estadoExtensionSeguimiento.instalada = true;
              estadoExtensionSeguimiento.version = String(mensaje.version || '');
              ignorarSalidasHasta = Date.now() + 5000;
              sincronizarExtensionSeguimientoPestanas();
              return;
          }

          if (mensaje.type === 'EXTENSION_STATUS' || mensaje.type === 'EXTENSION_LIVE_STATUS') {
              const status = mensaje.type === 'EXTENSION_LIVE_STATUS'
                  ? (mensaje.status || {})
                  : (mensaje.response?.status || {});
              if (!status || !Object.keys(status).length) return;
              estadoExtensionSeguimiento = {
                  instalada: mensaje.type === 'EXTENSION_LIVE_STATUS' || mensaje.response?.ok !== false,
                  activa: status.active === true,
                  version: String(status.version || estadoExtensionSeguimiento.version || ''),
                  pendientes: Number(status.pendingCount || 0),
                  ultimaSenalEn: String(status.lastHeartbeat || new Date().toISOString()),
                  dominioActual: String(status.currentDomain || ''),
                  tituloActual: String(status.currentTitle || ''),
                  visitaIniciadaEn: String(status.currentVisitStartedAt || ''),
                  salidaGrupoId: String(status.currentExcursionId || ''),
                  claseId: String(status.classId || '')
              };
              void window.guardarEstadoExtensionSeguimientoFirebase?.({
                  ...estadoExtensionSeguimiento,
                  forzar: mensaje.type === 'EXTENSION_LIVE_STATUS'
              });
              return;
          }

          if (mensaje.type === 'TAB_VISIT_COMPLETED') {
              const evento = mensaje.event || {};
              const user = window.firebaseCurrentUser;
              if (!user?.uid || evento.estudianteUid !== user.uid || !evento.id) return;
              if (eventosPestanasEnProceso.has(evento.id)) return;
              eventosPestanasEnProceso.add(evento.id);
              void (async () => {
                  const guardado = await window.guardarEventoPestanaExternaFirebase?.(evento);
                  if (guardado) {
                      enviarMensajeExtensionSeguimiento('EVENT_STORED', { eventId: evento.id });
                  }
                  eventosPestanasEnProceso.delete(evento.id);
              })();
          }
      });

      window.addEventListener('firebase-auth-changed', () => {
          setTimeout(sincronizarExtensionSeguimientoPestanas, 250);
      });

      setTimeout(() => {
          enviarMensajeExtensionSeguimiento('GET_STATUS', {
              studentUid: window.firebaseCurrentUser?.uid || ''
          });
      }, 1200);

      function normalizarCantidadSalidas(valor) {
          const numero = Number.parseInt(valor, 10);
          return Number.isFinite(numero) && numero >= 0 ? numero : 0;
      }

      function seguimientoSalidasHabilitado() {
          return Boolean(
              firebaseInitialized &&
              claseHabilitada &&
              cuentaEstudianteActiva &&
              estadoCuentaEstudiante === 'activo' &&
              window.firebaseCurrentUser &&
              Date.now() >= ignorarSalidasHasta
          );
      }

      function aplicarBloqueoInterfazEstudiante(bloqueada) {
          const overlay = document.getElementById('screenLockOverlay');
          document.body.classList.toggle('student-screen-locked', bloqueada);
          overlay?.classList.toggle('active', bloqueada);

          document.querySelectorAll('body > aside, body > main').forEach(elemento => {
              if (bloqueada) {
                  elemento.setAttribute('inert', '');
                  elemento.setAttribute('aria-hidden', 'true');
              } else {
                  elemento.removeAttribute('inert');
                  elemento.removeAttribute('aria-hidden');
              }
          });

          if (bloqueada) {
              const activo = document.activeElement;
              if (activo && typeof activo.blur === 'function' && !activo.closest?.('#screenLockOverlay')) {
                  activo.blur();
              }
              setTimeout(() => overlay?.querySelector('button')?.focus(), 0);
          }
      }

      function impedirInteraccionMientrasBloqueado(evento) {
          if (!pantallaBloqueada) return;
          const destino = evento.target;
          const permitido = destino?.closest?.(
              '#screenLockOverlay, #passwordModal, #firebaseAuthOverlay, #panelProfesorModal, #accionesEstudianteModal, #historialDesbloqueosModal, #historialDescuentosModal, #historialPestanasModal, #detalleEstudianteProfesorModal, #eliminarHistorialJitsiAdminModal, #confirmacionDocenteModal, #editarDescuentoEstudianteModal, #mensajeriaDocenteModal, #mensajeDocentePantalla, #jitsiLlamadaAlerta, #jitsiModal, #jitsiFinAlerta, #jitsiFinalizadaAviso'
          );
          if (permitido) return;
          evento.preventDefault();
          evento.stopImmediatePropagation();
      }

      ['keydown', 'pointerdown', 'touchstart', 'contextmenu', 'submit'].forEach(tipo => {
          document.addEventListener(tipo, impedirInteraccionMientrasBloqueado, true);
      });

      async function persistirEventosSalidas(inmediato = false) {
          setLocalStorage('app_tab_events', JSON.stringify(eventosSalidasPestana));
          const botonJustificar = document.getElementById('btnJustificarSalida');
          if (botonJustificar) {
              botonJustificar.style.display = eventosSalidasPestana.length ? 'inline-flex' : 'none';
          }
          if (inmediato && window.guardarSalidasPestanaFirebase) {
              mostrarEstadoFirebase('saving', 'Guardando cambio de pestaña...');
              const ok = await window.guardarSalidasPestanaFirebase(
                  totalSalidasPestana,
                  JSON.parse(JSON.stringify(eventosSalidasPestana)),
                  pantallaBloqueada ? {
                      pantallaBloqueada: true,
                      pantallaBloqueadaEn: pantallaBloqueadaEn || getLocalStorage('app_screen_locked_at') || new Date().toISOString(),
                      pantallaBloqueadaSalidas: totalSalidasPestana,
                      pantallaBloqueadaSeccion: pantallaBloqueadaSeccion || getLocalStorage('app_screen_locked_section') || seccionActivaActual
                  } : {}
              );
              mostrarEstadoFirebase(
                  ok ? 'online' : 'offline',
                  ok ? 'Cambios de pestaña guardados' : `No se guardó el cambio de pestaña${window.ultimoErrorSalidasPestana?.code ? ` (${window.ultimoErrorSalidasPestana.code})` : ''}`
              );
              if (ok) removeLocalStorage('app_pending_tab_sync');
              else setLocalStorage('app_pending_tab_sync', 'true');
              return ok;
          }
          programarGuardadoFirebase();
          return true;
      }

      function activarBloqueoPantalla() {
          if (pantallaBloqueada) return;
          pantallaBloqueada = true;
          pantallaBloqueadaEn = new Date().toISOString();
          pantallaBloqueadaSeccion = seccionActivaActual;
          setLocalStorage('app_screen_locked_at', pantallaBloqueadaEn);
          setLocalStorage('app_screen_locked_section', pantallaBloqueadaSeccion);
          aplicarBloqueoInterfazEstudiante(true);
      }

      function registrarCambioPestana(origen = 'visibility') {
          if (!seguimientoSalidasHabilitado() || pantallaBloqueada) return;
          const ahora = Date.now();
          if (ahora - ultimoEventoVisibilidad < 1500) return;
          ultimoEventoVisibilidad = ahora;

          salidaActivaPestana = {
              id: `${ahora}-${totalSalidasPestana}`,
              numero: eventosSalidasPestana.length + 1,
              salidaEn: new Date(ahora).toISOString(),
              regresoEn: null,
              duracionSegundos: null,
              seccion: seccionActivaActual,
              origen,
              justificacion: null,
              contabilizada: false
          };
          eventosSalidasPestana.push(salidaActivaPestana);
      }

      async function registrarRegresoPestana() {
          if (salidaActivaPestana) {
              const regreso = Date.now();
              salidaActivaPestana.regresoEn = new Date(regreso).toISOString();
              salidaActivaPestana.duracionSegundos = Math.max(
                  0,
                  Math.round((regreso - new Date(salidaActivaPestana.salidaEn).getTime()) / 1000)
              );
              const duracionMinima = Math.max(0, Number(configuracionSeguimientoActual.duracionMinimaSegundos) || 0);
              if (salidaActivaPestana.duracionSegundos >= duracionMinima) {
                  salidaActivaPestana.contabilizada = true;
                  totalSalidasPestana = normalizarCantidadSalidas(totalSalidasPestana) + 1;
                  setLocalStorage('app_blur_count', totalSalidasPestana);
                  const badge = document.getElementById('blurCount');
                  if (badge) badge.innerText = String(totalSalidasPestana);
                  if (
                      configuracionSeguimientoActual.bloqueoAutomatico !== false &&
                      totalSalidasPestana >= LIMITE_SALIDAS_PARA_BLOQUEO
                  ) {
                      activarBloqueoPantalla();
                      if (totalSalidasPestana === LIMITE_SALIDAS_PARA_BLOQUEO) {
                          setLocalStorage('app_pending_lock_notice', 'true');
                      }
                  }
              } else {
                  salidaActivaPestana.justificacion = `Salida breve ignorada (${salidaActivaPestana.duracionSegundos}s)`;
              }
              salidaActivaPestana = null;
              const guardado = await persistirEventosSalidas(true);
              if (!guardado) setTimeout(() => void persistirEventosSalidas(true), 1200);
          }
          if (pantallaBloqueada) {
              aplicarBloqueoInterfazEstudiante(true);
          }
          if (getLocalStorage('app_pending_lock_notice') === 'true') {
              removeLocalStorage('app_pending_lock_notice');
              alert(`Se registraron ${LIMITE_SALIDAS_PARA_BLOQUEO} salidas. La actividad quedó bloqueada y requiere autorización docente.`);
          }
      }

      function inicializarMonitorSalidasPestana() {
          if (monitorSalidasInicializado) return;
          monitorSalidasInicializado = true;

          document.addEventListener('visibilitychange', () => {
              if (document.visibilityState === 'hidden') registrarCambioPestana('visibility');
              else void registrarRegresoPestana();
          });

          window.addEventListener('blur', () => {
              clearTimeout(temporizadorPerdidaFoco);
              // Abrir el popup de la extensión o un diálogo del navegador produce blur
              // sin abandonar la actividad. Solo visibilitychange contabiliza una salida.
          });

          window.addEventListener('focus', () => {
              clearTimeout(temporizadorPerdidaFoco);
              void registrarRegresoPestana();
          });

          window.addEventListener('pagehide', () => {
              if (seguimientoSalidasHabilitado()) void persistirEventosSalidas(true);
          });
          window.addEventListener('online', () => {
              if (getLocalStorage('app_pending_tab_sync') === 'true') {
                  void persistirEventosSalidas(true);
              }
          });
      }

      inicializarMonitorSalidasPestana();

      function aplicarEstadoInicioClase(iniciada, datos = {}) {
          const configuracionRecibida = datos.configuracionSeguimiento || {};
          configuracionSeguimientoActual = {
              ...configuracionSeguimientoActual,
              ...configuracionRecibida,
              dominiosPermitidos: Array.isArray(configuracionRecibida.dominiosPermitidos) ? configuracionRecibida.dominiosPermitidos : configuracionSeguimientoActual.dominiosPermitidos,
              dominiosAlerta: Array.isArray(configuracionRecibida.dominiosAlerta) ? configuracionRecibida.dominiosAlerta : configuracionSeguimientoActual.dominiosAlerta,
              dominiosIgnorados: Array.isArray(configuracionRecibida.dominiosIgnorados) ? configuracionRecibida.dominiosIgnorados : configuracionSeguimientoActual.dominiosIgnorados
          };
          LIMITE_SALIDAS_PARA_BLOQUEO = Math.max(1, Number(configuracionSeguimientoActual.limiteSalidas) || 5);
          window.configuracionSeguimientoActual = configuracionSeguimientoActual;
          aplicarRubricaSocratica(datos.rubricaSocratica || rubricaSocraticaActual);
          ignorarSalidasHasta = Date.now() + 3000;
          claseHabilitada = Boolean(iniciada);
          const overlay = document.getElementById('classStartOverlay');
          const mensaje = document.getElementById('classStartMessage');
          if (claseHabilitada) {
              overlay?.classList.add('hidden');
              if (mensaje) mensaje.textContent = datos.iniciadaPor
                  ? `Clase iniciada por ${datos.iniciadaPor}. Ya podés comenzar.`
                  : "La clase fue habilitada. Ya podés comenzar.";
          } else {
              overlay?.classList.remove('hidden');
              if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
              if (mensaje) mensaje.textContent = datos.finalizadaPor
                  ? `La clase fue finalizada por ${datos.finalizadaPor}. Las actividades están bloqueadas.`
                  : "El docente habilitará las actividades con Ctrl + Alt + C. Mantené esta pestaña abierta.";
              Object.keys(cronometrosActivos).forEach(id => {
                  if (cronometrosActivos[id]) clearInterval(cronometrosActivos[id]);
                  cronometrosActivos[id] = null;
              });
              moduloCronometroEnCurso = null;
          }
          sincronizarExtensionSeguimientoPestanas();
          actualizarBotonPausaCronometros();
      }

      window.addEventListener('estado-inicio-clase', event => {
          const datos = event.detail || {};
          ultimoControlCronometros = datos;
          aplicarEstadoInicioClase(Boolean(datos.iniciada), datos);
          aplicarControlCronometrosDocente(datos);
      });
      window.addEventListener('estado-inicio-clase-error', event => {
          aplicarEstadoInicioClase(false);
          const mensaje = document.getElementById('classStartMessage');
          if (mensaje) mensaje.textContent = `No se pudo consultar el inicio de clase: ${event.detail}.`;
      });

      async function actualizarVisibilidadDocente() {
          const autorizado = Boolean(await window.esDocenteAutorizadoFirebase?.());
          const autorizacionTemporal = Boolean(window.firebaseTeacherUser);
          document.body.classList.toggle('teacher-authorized', autorizado);
          document.body.classList.toggle('teacher-temporary', autorizado && autorizacionTemporal);
          const classStartOverlay = document.getElementById('classStartOverlay');
          if (autorizado) {
              classStartOverlay?.classList.add('hidden');
          } else {
              aplicarEstadoInicioClase(claseHabilitada);
          }
          const btnIngresoDocente = document.getElementById('btnIngresoDocente');
          if (btnIngresoDocente) {
              btnIngresoDocente.style.display = autorizado ? 'none' : 'inline-flex';
              btnIngresoDocente.disabled = false;
          }
          document.querySelectorAll('.teacher-only').forEach(control => {
              const visible = autorizado && (!control.classList.contains('teacher-session-only') || autorizacionTemporal);
              control.setAttribute('aria-hidden', visible ? 'false' : 'true');
              control.tabIndex = visible ? 0 : -1;
          });
          if (!autorizado) {
              document.getElementById('passwordModal')?.classList.remove('active');
              document.getElementById('panelProfesorModal')?.classList.remove('active');
              document.getElementById('editorDesafiosFirebaseModal')?.classList.remove('active');
          }
      }

      async function ingresarComoDocente(botonOrigen = null) {
          const boton = botonOrigen || document.getElementById('btnIngresoDocente');
          const contenidoOriginal = boton?.innerHTML || '<i class="fa-solid fa-chalkboard-user"></i> Ingresar como docente';
          if (boton) {
              boton.disabled = true;
              boton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Verificando cuenta...';
          }
          const autorizado = await window.autorizarDocenteFirebase?.();
          await actualizarVisibilidadDocente();
          if (boton) {
              boton.disabled = false;
              boton.innerHTML = contenidoOriginal;
          }
          if (!autorizado) return;
          abrirPanelProfesor();
      }

      async function iniciarClaseDesdeInterfaz(boton = null) {
          if (boton) boton.disabled = true;
          const estado = document.getElementById('estadoClaseProfesor');
          if (estado) estado.textContent = 'Iniciando la clase...';
          const iniciada = await window.iniciarClaseFirebase?.();
          if (boton) boton.disabled = false;
          if (!iniciada) {
              if (estado) estado.textContent = 'No se pudo iniciar. Verificá que las reglas de Firestore estén publicadas.';
              return;
          }
          aplicarEstadoInicioClase(true, {
              iniciadaPor: window.firebaseTeacherUser?.email || window.firebaseCurrentUser?.email || 'docente autorizado'
          });
          establecerPausaGlobal(false, false);
          if (estado) estado.textContent = 'Clase iniciada. Los alumnos conectados ya pueden trabajar.';
          alert('Clase iniciada. Los alumnos conectados ya pueden comenzar.');
      }

      async function finalizarClaseDesdeInterfaz(boton = null) {
          if (boton) boton.disabled = true;
          const estado = document.getElementById('estadoClaseProfesor');
          const finalizada = await window.finalizarClaseFirebase?.();
          if (boton) boton.disabled = false;
          if (!finalizada) return;
          aplicarEstadoInicioClase(false, {
              finalizadaPor: window.firebaseTeacherUser?.email || window.firebaseCurrentUser?.email || 'docente autorizado'
          });
          if (estado) estado.textContent = 'Clase finalizada. Las actividades de los alumnos están bloqueadas.';
          alert('Clase finalizada. Todos los estudiantes volvieron al estado de espera.');
      }

      function bloquearBotonesCronometrosTodos(bloqueados) {
          [
              'btnPausarCronometrosTodosProfesor',
              'btnContinuarCronometrosTodosProfesor',
              'btnReiniciarCronometrosTodosProfesor'
          ].forEach(id => {
              const boton = document.getElementById(id);
              if (boton) boton.disabled = Boolean(bloqueados);
          });
      }

      async function controlarCronometrosTodosDesdeInterfaz(accion, boton = null) {
          const configuracion = {
              pausar: {
                  pregunta: '¿Pausar los cronómetros y la edición de todos los estudiantes?',
                  estado: 'Pausando los cronómetros de todos...',
                  resultado: 'Cronómetros pausados para todos los estudiantes.'
              },
              reanudar: {
                  pregunta: '¿Continuar los cronómetros y habilitar la edición para todos los estudiantes?',
                  estado: 'Continuando los cronómetros de todos...',
                  resultado: 'Cronómetros y edición habilitados para todos los estudiantes.'
              },
              reiniciar: {
                  pregunta: '¿Reiniciar a 40:00 los cronómetros de los módulos activos para todos los estudiantes?\n\nNo se borrarán códigos, respuestas ni calificaciones.',
                  estado: 'Reiniciando a 40:00 los cronómetros de todos...',
                  resultado: 'Cronómetros reiniciados a 40:00 para todos los estudiantes.'
              }
          }[accion];
          if (!configuracion) return;
          if (accion === 'pausar' && cronometrosPausadosPorDocente) {
              actualizarBotonPausaCronometros();
              alert('Los cronómetros de todos los estudiantes ya están pausados.');
              return;
          }
          if (accion === 'reanudar' && !cronometrosPausadosPorDocente) {
              actualizarBotonPausaCronometros();
              alert('Los cronómetros de todos los estudiantes ya están activos.');
              return;
          }
          if (!confirm(configuracion.pregunta)) return;
          const estado = document.getElementById('estadoClaseProfesor');
          const contenidoOriginal = boton?.innerHTML || '';
          bloquearBotonesCronometrosTodos(true);
          if (boton) boton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Procesando...';
          if (estado) estado.textContent = configuracion.estado;
          try {
              const ok = await window.controlarCronometrosFirebase?.(accion);
              if (!ok) {
                  if (estado) estado.textContent = 'No se pudieron actualizar los cronómetros. Verificá que la clase esté iniciada.';
                  return;
              }
              if (accion === 'pausar' || accion === 'reanudar') {
                  establecerPausaGlobal(accion === 'pausar', false);
              } else {
                  reiniciarCronometrosLocales();
              }
              if (estado) estado.textContent = configuracion.resultado;
              alert(configuracion.resultado);
          } finally {
              if (boton && contenidoOriginal) boton.innerHTML = contenidoOriginal;
              bloquearBotonesCronometrosTodos(false);
              actualizarBotonPausaCronometros();
          }
      }

      async function pausarCronometrosDesdeInterfaz(boton = null) {
          return controlarCronometrosTodosDesdeInterfaz(
              cronometrosPausadosPorDocente ? 'reanudar' : 'pausar',
              boton
          );
      }

      async function reiniciarCronometrosDesdeInterfaz(boton = null) {
          return controlarCronometrosTodosDesdeInterfaz('reiniciar', boton);
      }

      async function cerrarAccesoDocenteTemporal() {
          if (!window.firebaseTeacherUser) {
              alert("No hay una autorización docente temporal activa.");
              return;
          }
          if (!confirm("Se cerrarán el panel y las herramientas docentes. La cuenta del estudiante continuará abierta. ¿Continuar?")) {
              return;
          }
          cerrarPanelProfesor();
          cerrarEditorDesafiosFirebase();
          document.getElementById('detalleEstudianteProfesorModal')?.classList.remove('active');
          const cerrado = await window.cerrarAutorizacionDocenteFirebase?.();
          if (cerrado) {
              await actualizarVisibilidadDocente();
              alert("Autorización docente temporal cerrada. La sesión del estudiante continúa activa.");
          }
      }

      window.addEventListener('firebase-auth-changed', actualizarVisibilidadDocente);
      window.addEventListener('firebase-teacher-auth-changed', async event => {
        await actualizarVisibilidadDocente();
        if (event.detail) window.escucharInicioClaseFirebase?.();
      });
      window.addEventListener('reinicio-salidas-estudiante', event => {
          const datos = event.detail || {};
          const ultimoReinicio = getLocalStorage('app_last_tab_reset') || '';
          if (!datos.id || datos.id === ultimoReinicio) return;
          const fechaReinicio = datos.solicitadoEn?.toMillis
              ? datos.solicitadoEn.toMillis()
              : Number(datos.solicitadoEn?.seconds || 0) * 1000;
          const reinicioReciente = fechaReinicio > 0 && Date.now() - fechaReinicio < 10 * 60 * 1000;
          if (Number(datos.salidasPestana ?? datos.salidasPestana) !== 0 && !reinicioReciente) return;
          totalSalidasPestana = 0;
          salidaActivaPestana = null;
          setLocalStorage('app_blur_count', 0);
          setLocalStorage('app_last_tab_reset', datos.id);
          const contador = document.getElementById('blurCount');
          if (contador) contador.innerText = '0';
          alert('El docente reinició el contador de cambios de pestaña. El historial detallado permanece registrado.');
      });
      window.addEventListener('control-cronometro-individual', event => {
          ultimoControlCronometroIndividual = event.detail || {};
          aplicarControlCronometroIndividual(ultimoControlCronometroIndividual);
      });
      window.addEventListener('borrado-chat-ia-estudiante', event => {
          const id = String(event.detail?.id || "");
          const ultimo = getLocalStorage('app_last_ai_chat_delete') || "";
          if (!id || id === ultimo) return;
          Object.keys(historialChatIA).forEach(sectionId => {
              historialChatIA[sectionId] = [];
              localStorage.removeItem(storageKey(`ai_chat_${sectionId}`));
              renderizarChatIA(sectionId);
              actualizarEstadoChatIA(sectionId, "saved", "Historial borrado por el docente");
          });
          setLocalStorage('app_last_ai_chat_delete', id);
      });
      window.addEventListener('estado-cuenta-estudiante', event => {
          const estado = event.detail?.estadoCuenta || 'activo';
          const estadoAnterior = estadoCuentaEstudiante;
          estadoCuentaEstudiante = estado;
          if (estado === 'inactivo') {
              bloquearCuentaEstudiante(event.detail?.bajaMotivo || '');
              return;
          }
          if (estado === 'pendiente' || estado === 'rechazado') {
              bloquearCuentaPorAprobacion(estado, event.detail?.rechazoMotivo || '');
              return;
          }
          if (estado === 'activo' && !cuentaEstudianteActiva && window.firebaseCurrentUser) {
              if (estadoAnterior === 'pendiente' || estadoAnterior === 'rechazado') {
                  mostrarAvisoAccesoAprobado(event.detail || {});
              } else {
                  window.location.reload();
              }
          }
      });
      window.addEventListener('profesor-data', e => {
          const datos = e.detail || [];
          detectarNuevasSolicitudes(datos);
          estudiantesProfesor = datos;
          document.getElementById('estadoPanelProfesor').textContent = `Actualizado: ${new Date().toLocaleTimeString()}`;
          renderPanelProfesor();
      });
      window.addEventListener('profesor-data-error', e => { document.getElementById('estadoPanelProfesor').textContent = 'No se pudo consultar estudiantes: ' + e.detail; });
      window.addEventListener('load', () => {
        actualizarVisibilidadDocente();
          ['filtroProfesor','filtroEmailProfesor','filtroCursoProfesor','filtroDivisionProfesor','filtroTurnoProfesor','filtroEstadoProfesor','filtroBloqueoProfesor','filtroProgresoProfesor','filtroSalidasProfesor','filtroNotaProfesor','filtroDescuentoProfesor','filtroActualizacionProfesor','ordenProfesor'].forEach(id => {
              document.getElementById(id)?.addEventListener('input', renderPanelProfesor);
              document.getElementById(id)?.addEventListener('change', renderPanelProfesor);
          });
          actualizarBotonSoloEnLineaProfesor();
          if (!window.__conexionProfesorIntervalo) {
              window.__conexionProfesorIntervalo = setInterval(() => {
                  if (document.getElementById('panelProfesorModal')?.classList.contains('active')) {
                      renderPanelProfesor();
                  }
              }, 30000);
          }
      });

      function mostrarEstadoFirebase(tipo, texto) {
          const el = document.getElementById('firebaseSaveStatus');
          if (!el) return;
          el.className = `firebase-status ${tipo}`;
          el.textContent = `● ${texto}`;
      }

      
      function extraerCursoYDivision(valorCurso) {
          const valor = String(valorCurso || '').trim();
          if (!valor) return { curso: '', division: '' };

          // Acepta formatos antiguos: "6TO A", "6TO - A", "5° Año A", "5° Año 'A'"
          const m = valor.match(/^(.*?)(?:\s*[-–—]?\s*['"]?([A-Za-z])['"]?)$/);
          if (m && m[2] && m[1].trim()) {
              return { curso: m[1].trim(), division: m[2].toUpperCase() };
          }
          return { curso: valor, division: '' };
      }

      async function guardarIdentificacionFirebase() {
          if (!firebaseInitialized || !window.firebaseCurrentUser) return false;
          const nombre = document.getElementById('studentName')?.value.trim() || '';
          const curso = document.getElementById('studentCourse')?.value.trim() || '';
          const division = document.getElementById('studentDivision')?.value.trim().toUpperCase() || '';
          const turno = document.getElementById('studentTurno')?.value.trim() || '';

          if (!nombre || !curso || !division || !turno) {
              validarDatosEstudiante(false);
              return false;
          }

          try {
              const payload = { estudiante: { nombre, curso, division, turno } };
              if (!registroFirebaseExistente && estadoCuentaEstudiante) {
                  payload.estadoCuenta = estadoCuentaEstudiante;
                  if (estadoCuentaEstudiante === 'pendiente') payload.solicitudAprobacionEn = new Date().toISOString();
              }
              const ok = await window.guardarProgresoFirebase(payload);
              if (ok) registroFirebaseExistente = true;
              if (ok) mostrarEstadoFirebase('online', 'Datos del estudiante guardados en Firebase');
              return ok;
          } catch (e) {
              console.error('Error guardando identificación:', e);
              return false;
          }
      }

      function diagnosticarErrorRegistroEstudiante() {
          const error = window.ultimoErrorGuardadoFirebase || {};
          const user = window.firebaseCurrentUser || {};
          const codigo = String(error.code || '').toLowerCase();
          if (!user.emailVerified) {
              return {
                  titulo: 'Correo no verificado',
                  detalle: `La cuenta ${user.email || 'actual'} todavía no figura como verificada en Google.`,
                  accion: 'Verificá el correo, cerrá sesión y volvé a ingresar antes de guardar los datos.'
              };
          }
          if (codigo === 'auth-required') {
              return {
                  titulo: 'Sesión vencida',
                  detalle: 'No hay una sesión autenticada disponible para guardar el estudiante.',
                  accion: 'Cerrá esta ventana e ingresá nuevamente con Google.'
              };
          }
          if (codigo === 'firebase-not-initialized') {
              return {
                  titulo: 'Firestore no está inicializado',
                  detalle: `La aplicación no pudo conectarse al proyecto ${error.projectId || 'Firebase'}.`,
                  accion: 'Revisá la configuración de Firebase y que la página se abra desde un servidor web.'
              };
          }
          if (codigo === 'permission-denied' || codigo === 'failed-precondition') {
              const documentoExistenteIncompleto = Boolean(
                  window.ultimoDocumentoEstudianteFirebase &&
                  (!window.ultimoDocumentoEstudianteFirebase.estadoCuenta ||
                   !window.ultimoDocumentoEstudianteFirebase.email ||
                   !window.ultimoDocumentoEstudianteFirebase.uid)
              );
              if (documentoExistenteIncompleto) {
                  return {
                      titulo: 'Documento existente incompleto',
                      detalle: 'Firestore encontró un registro previo de este UID, pero no tiene todos los campos necesarios para actualizarlo.',
                      accion: 'El administrador debe completar o eliminar ese documento en estudiantes/{uid}; después intentá nuevamente.'
                  };
              }
              return {
                  titulo: 'Reglas de Firestore no coinciden',
                  detalle: `Firestore rechazó la operación en ${error.projectId || 'el proyecto configurado'}.`,
                  accion: 'Publicá la versión actualizada de REGLAS.TXT en ese mismo proyecto y verificá que el correo esté verificado.'
              };
          }
          return {
              titulo: 'No se pudo guardar',
              detalle: error.message || 'Firebase devolvió un error no identificado.',
              accion: 'Revisá la conexión y la consola de Firebase para obtener el detalle técnico.'
          };
      }

      function construirPaqueteAvanceFirebase() {
          const nombre = document.getElementById('studentName')?.value.trim() || '';
          const curso = document.getElementById('studentCourse')?.value.trim() || '';
          const division = document.getElementById('studentDivision')?.value.trim() || '';
          const turno = document.getElementById('studentTurno')?.value.trim() || '';
          const codigos = {};
          seccionesData.forEach(sec => {
              const editor = document.getElementById(`editor-${sec.id}`);
              codigos[sec.id] = editor ? editor.value : (getLocalStorage(`draft_editor-${sec.id}`) || sec.initialCode);
          });
          return {
              estudiante: { nombre, curso, division, turno },
              salidasPestana: totalSalidasPestana,
              eventosSalidasPestana: JSON.parse(JSON.stringify(eventosSalidasPestana || [])),
              pantallaBloqueada: pantallaBloqueada === true,
              codigos,
              tiemposRestantes: { ...tiemposRestantes },
              finalizadas: { ...actividadesFinalizadas },
              historialResultados: JSON.parse(JSON.stringify(historialResultados || {})),
              chatIA: JSON.parse(JSON.stringify(historialChatIA || {})),
              ayudasComprension: JSON.parse(JSON.stringify(ayudasComprension || {})),
              contadorPrevisualizaciones: { ...contadorPrevisualizaciones },
              seccionActiva: seccionActivaActual,
              versionCodigo: VERSION_CODIGO_SUBIDO,
              versionApp: '8.0-desafios-externos-editables-ia'
          };
      }

      function programarGuardadoFirebase() {
          if (!firebaseInitialized || !window.firebaseCurrentUser) return;
          firebaseSaveDirty = true;
          firebaseSaveGeneration += 1;
          if (firebaseSaveInProgress) {
              firebaseSavePending = true;
              mostrarEstadoFirebase('saving', 'Cambios pendientes de sincronización...');
              return;
          }
          clearTimeout(firebaseSaveTimer);
          firebaseSaveTimer = setTimeout(() => guardarAhoraFirebase(), 2500);
      }

      function validarDatosEstudiante(mostrarAviso = true) {
          const campos = [
              ['studentName', 'nombre y apellido'],
              ['studentCourse', 'curso'],
              ['studentDivision', 'división'],
              ['studentTurno', 'turno']
          ];
          const faltantes = campos.filter(([id]) => !String(document.getElementById(id)?.value || '').trim());
          campos.forEach(([id]) => {
              const campo = document.getElementById(id);
              if (campo) campo.setCustomValidity(faltantes.some(([faltante]) => faltante === id) ? 'Campo obligatorio' : '');
          });
          if (!faltantes.length) return true;
          if (mostrarAviso) {
              const nombres = faltantes.map(([, nombre]) => nombre).join(', ');
              alert(`Completá los siguientes datos antes de continuar: ${nombres}.`);
              document.getElementById(faltantes[0][0])?.focus();
          }
          return false;
      }

      async function guardarAhoraFirebase() {
          if (!firebaseInitialized || !window.firebaseCurrentUser) return false;
          if (!firebaseSaveDirty) return true;
          if (firebaseSaveInProgress) {
              firebaseSavePending = true;
              return false;
          }
          firebaseSaveInProgress = true;
          firebaseSavePending = false;
          const generacionGuardado = firebaseSaveGeneration;
          mostrarEstadoFirebase('saving', 'Guardando...');
          actualizarTodosEstadosChatIA('saving', 'Guardando en Firebase...');
          try {
              const paquete = construirPaqueteAvanceFirebase();
              const huella = JSON.stringify(paquete);
              if (huella === firebaseLastSavedFingerprint) {
                  firebaseSaveDirty = false;
                  return true;
              }
              const ok = await window.guardarProgresoFirebase(paquete);
              const errorGuardado = window.ultimoErrorGuardadoFirebase;
              const textoError = errorGuardado?.code === 'permission-denied'
                  ? 'Permiso denegado'
                  : 'Error al guardar';
              mostrarEstadoFirebase(ok ? 'online' : 'offline', ok ? 'Guardado exitosamente' : textoError);
              actualizarTodosEstadosChatIA(ok ? 'saved' : 'error', ok ? 'Guardado exitosamente' : 'Error de guardado');
              if (ok) {
                  firebaseLastSavedFingerprint = huella;
                  firebaseSaveDirty = firebaseSaveGeneration !== generacionGuardado;
              }
              return ok;
          } catch (e) {
              console.error(e);
              mostrarEstadoFirebase('offline', 'Error de conexión');
              actualizarTodosEstadosChatIA('error', 'Error de conexión');
              return false;
          } finally {
              firebaseSaveInProgress = false;
              if (firebaseSavePending) {
                  firebaseSavePending = false;
                  clearTimeout(firebaseSaveTimer);
                  firebaseSaveTimer = setTimeout(() => guardarAhoraFirebase(), 150);
              }
          }
      }

      // ============================================================
      // ALMACENAMIENTO LOCAL AISLADO POR UID
      // Cada cuenta de Google tiene sus propias claves de localStorage.
      // Firebase sigue siendo la fuente principal de verdad.
      // ============================================================
      let firebaseStorageUid = null;

      function storageKey(clave) {
          if (clave === 'firebase_active_uid') return clave;
          return firebaseStorageUid ? `firebase_user_${firebaseStorageUid}_${clave}` : `legacy_${clave}`;
      }

      function getLocalStorage(clave) {
          return localStorage.getItem(storageKey(clave));
      }

      function setLocalStorage(clave, valor) {
          localStorage.setItem(storageKey(clave), String(valor));
          programarGuardadoFirebase();
      }

      function removeLocalStorage(clave) {
          localStorage.removeItem(storageKey(clave));
          programarGuardadoFirebase();
      }

      function limpiarDatosLocalesDelEstudiante(uid = firebaseStorageUid) {
          if (!uid) return;
          const prefijo = `firebase_user_${uid}_`;
          const claves = [];
          for (let i = 0; i < localStorage.length; i++) {
              const clave = localStorage.key(i);
              if (clave && clave.startsWith(prefijo)) claves.push(clave);
          }
          claves.forEach(clave => localStorage.removeItem(clave));
      }

      function limpiarLocalStorage() {
          limpiarDatosLocalesDelEstudiante(firebaseStorageUid);
          programarGuardadoFirebase();
      }

      async function restaurarDesdeFirebase(datos) {
          if (!datos) return;
          const estudiante = datos.estudiante || {};
          if (estudiante.nombre !== undefined) {
              document.getElementById('studentName').value = estudiante.nombre || '';
              setLocalStorage('app_student_name', estudiante.nombre || '');
          }
          if (estudiante.curso !== undefined) {
              document.getElementById('studentCourse').value = estudiante.curso || '';
              setLocalStorage('app_student_course', estudiante.curso || '');
          }

          let divisionFirebase = estudiante.division || '';

          // Compatibilidad con avances antiguos que guardaban "Curso y División"
          // en un solo campo.
          if (!divisionFirebase && estudiante.curso) {
              const separado = extraerCursoYDivision(estudiante.curso);
              if (separado.division) {
                  document.getElementById('studentCourse').value = separado.curso;
                  document.getElementById('studentDivision').value = separado.division;
                  setLocalStorage('app_student_course', separado.curso);
                  setLocalStorage('app_student_division', separado.division);
                  divisionFirebase = separado.division;
              }
          }

          if (divisionFirebase) {
              document.getElementById('studentDivision').value = divisionFirebase;
              setLocalStorage('app_student_division', divisionFirebase);
          }
          if (estudiante.turno !== undefined) {
              document.getElementById('studentTurno').value = estudiante.turno || '';
              setLocalStorage('app_student_turno', estudiante.turno || '');
          }
          const salidasGuardadas = datos.salidasPestana ?? datos["salidasPesta\u00f1a"];
          if (salidasGuardadas !== undefined) {
              totalSalidasPestana = Number(salidasGuardadas) || 0;
              setLocalStorage('app_blur_count', totalSalidasPestana);
          }
          const eventosGuardados = datos.eventosSalidasPestana ?? datos["eventosSalidasPesta\u00f1a"];
          if (Array.isArray(eventosGuardados)) {
              eventosSalidasPestana = eventosGuardados;
              setLocalStorage('app_tab_events', JSON.stringify(eventosSalidasPestana));
          }
          if (datos.revisionSalidas && typeof datos.revisionSalidas === 'object') {
              revisionSalidasActual = {
                  estado: datos.revisionSalidas.estado || 'pendiente',
                  penalizacion: Number(datos.revisionSalidas.penalizacion) || 0,
                  motivo: datos.revisionSalidas.motivo || '',
                  revisadoPor: datos.revisionSalidas.revisadoPor || '',
                  notaConfirmada: datos.revisionSalidas.notaConfirmada === true,
                  notaFinalDocente: datos.revisionSalidas.notaFinalDocente ?? null,
                  notaConfirmadaValor: datos.revisionSalidas.notaConfirmadaValor !== null &&
                      datos.revisionSalidas.notaConfirmadaValor !== '' &&
                      Number.isFinite(Number(datos.revisionSalidas.notaConfirmadaValor))
                      ? Number(datos.revisionSalidas.notaConfirmadaValor)
                      : null,
                  notaCalculadaAlConfirmar: datos.revisionSalidas.notaCalculadaAlConfirmar ?? null,
                  notaModificadaManualmente: datos.revisionSalidas.notaModificadaManualmente === true,
                  notaConfirmadaPor: datos.revisionSalidas.notaConfirmadaPor || '',
                  notaConfirmadaEn: datos.revisionSalidas.notaConfirmadaEn || null
              };
          }
          if (datos.tiemposRestantes) Object.entries(datos.tiemposRestantes).forEach(([id,v]) => setLocalStorage(`timer_${id}`, Number(v)));
          if (datos.finalizadas) Object.entries(datos.finalizadas).forEach(([id,v]) => v ? setLocalStorage(`finalized_${id}`, 'true') : removeLocalStorage(`finalized_${id}`));
          if (datos.contadorPrevisualizaciones) Object.entries(datos.contadorPrevisualizaciones).forEach(([id,v]) => setLocalStorage(`preview_count_${id}`, Number(v)));
          if (datos.codigos) Object.entries(datos.codigos).forEach(([id,v]) => { if (typeof v === 'string') setLocalStorage(`draft_editor-${id}`, v); });
          historialResultados = datos.historialResultados || {};
          notasDesafiosDocente = datos.notasDesafiosDocente && typeof datos.notasDesafiosDocente === 'object'
              ? datos.notasDesafiosDocente
              : {};
          ayudasComprension = datos.ayudasComprension && typeof datos.ayudasComprension === 'object'
              ? datos.ayudasComprension
              : {};
          Object.keys(historialChatIA).forEach(id => delete historialChatIA[id]);
          if (datos.chatIA && typeof datos.chatIA === 'object') {
              Object.entries(datos.chatIA).forEach(([id, mensajes]) => {
                  historialChatIA[id] = Array.isArray(mensajes) ? mensajes.slice(-20) : [];
              });
          }
          actividadesFinalizadas = datos.finalizadas || {};
          contadorPrevisualizaciones = datos.contadorPrevisualizaciones || {};
          tiemposRestantes = datos.tiemposRestantes || {};
          pantallaBloqueada = datos.pantallaBloqueada === true;
          pantallaBloqueadaEn = String(datos.pantallaBloqueadaEn || "");
          pantallaBloqueadaSeccion = String(datos.pantallaBloqueadaSeccion || "");
          aplicarBloqueoInterfazEstudiante(pantallaBloqueada);
          if (datos.seccionActiva && seccionesData.some(s => s.id === datos.seccionActiva)) seccionActivaActual = datos.seccionActiva;
      }

      function solicitarDatosNuevoEstudiante() {
        return new Promise((resolve) => {
          const modal=document.createElement('div'); modal.className='modal-overlay'; modal.style.display='flex';
          modal.innerHTML=`<div class="modal-box" style="max-width:520px;width:92%;"><h3>👨‍🎓 Datos del estudiante</h3><p>Primera vez con este correo. Completá tus datos para comenzar.</p><div class="input-group"><label>Nombre y Apellido</label><input id="nuevoNombre" type="text" required></div><div class="input-group"><label>Curso</label><select id="nuevoCurso" required><option value="">Seleccionar curso</option><option>1° Año</option><option>2° Año</option><option>3° Año</option><option>4° Año</option><option>5° Año</option><option>6° Año</option><option>7° Año</option></select></div><div class="input-group"><label>División</label><select id="nuevoDivision" required><option value="">Seleccionar división</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option></select></div><div class="input-group"><label>Turno</label><select id="nuevoTurno" required><option value="">Seleccionar turno</option><option>Mañana</option><option>Tarde</option><option>Vespertino</option><option>Noche</option></select></div><div id="nuevoError" role="alert" style="display:none;color:#fca5a5">Seleccioná obligatoriamente curso, división y turno.</div><div class="modal-actions"><button class="btn btn-primary" id="confirmarNuevo" type="button">Comenzar actividad</button></div></div>`;
          document.body.appendChild(modal); const n=modal.querySelector('#nuevoNombre'); n.value=window.firebaseCurrentUser?.displayName||''; n.focus();
          modal.querySelector('#confirmarNuevo').onclick=async()=>{const nombre=n.value.trim(),curso=modal.querySelector('#nuevoCurso').value.trim(),division=modal.querySelector('#nuevoDivision').value.trim().toUpperCase(),turno=modal.querySelector('#nuevoTurno').value;if(!nombre||!curso||!division||!turno){const error=modal.querySelector('#nuevoError');error.textContent='Seleccioná obligatoriamente curso, división y turno.';error.style.display='block';const primerFaltante=!nombre?n:!curso?modal.querySelector('#nuevoCurso'):!division?modal.querySelector('#nuevoDivision'):modal.querySelector('#nuevoTurno');primerFaltante.focus();return;}modal.querySelector('#nuevoError').style.display='none';document.getElementById('studentName').value=nombre;document.getElementById('studentCourse').value=curso;document.getElementById('studentDivision').value=division;document.getElementById('studentTurno').value=turno;setLocalStorage('app_student_name',nombre);setLocalStorage('app_student_course',curso);setLocalStorage('app_student_division',division);setLocalStorage('app_student_turno',turno);const guardado=await guardarIdentificacionFirebase();if(!guardado){const diagnostico=diagnosticarErrorRegistroEstudiante();const error=modal.querySelector('#nuevoError');error.innerHTML=`<strong>${escapeHtml(diagnostico.titulo)}</strong><br>${escapeHtml(diagnostico.detalle)}<br><small>${escapeHtml(diagnostico.accion)}</small>`;error.style.display='block';return;}modal.remove();resolve();};
        });
      }

      function bloquearCuentaEstudiante(motivo = '') {
          cuentaEstudianteActiva = false;
          firebaseInitialized = false;
          claseHabilitada = false;
          sincronizarExtensionSeguimientoPestanas();
          clearTimeout(firebaseSaveTimer);
          clearInterval(window.__firebaseAutoSaveInterval);
          Object.keys(cronometrosActivos).forEach(id => {
              if (cronometrosActivos[id]) clearInterval(cronometrosActivos[id]);
              cronometrosActivos[id] = null;
          });
          moduloCronometroEnCurso = null;
          if (window.__inicioClaseUnsubscribe) {
              window.__inicioClaseUnsubscribe();
              window.__inicioClaseUnsubscribe = null;
          }
          const overlay = document.getElementById('firebaseAuthOverlay');
          overlay?.classList.remove('hidden');
          const mensaje = document.getElementById('firebaseAuthMessage');
          if (mensaje) {
              mensaje.innerHTML =
                  '<strong>Cuenta inactiva.</strong><br>Tu acceso fue dado de baja por la institución. ' +
                  (motivo ? `Motivo: ${escapeHtml(motivo)}.<br>` : '') +
                  'Conservamos tu historial académico. Consultá con el equipo docente para reactivar la cuenta.';
          }
          const loginButton = overlay?.querySelector('.btn-google');
          if (loginButton) loginButton.disabled = true;
      }

      function bloquearCuentaPorAprobacion(estado = 'pendiente', motivo = '') {
          if (firebaseStorageUid) {
              localStorage.setItem(storageKey('app_account_state'), estado);
          }
          cuentaEstudianteActiva = false;
          firebaseInitialized = false;
          claseHabilitada = false;
          sincronizarExtensionSeguimientoPestanas();
          clearTimeout(firebaseSaveTimer);
          clearInterval(window.__firebaseAutoSaveInterval);
          Object.keys(cronometrosActivos).forEach(id => {
              if (cronometrosActivos[id]) clearInterval(cronometrosActivos[id]);
              cronometrosActivos[id] = null;
          });
          const overlay = document.getElementById('firebaseAuthOverlay');
          overlay?.classList.remove('hidden');
          const titulo = document.getElementById('firebaseAuthTitle');
          const mensaje = document.getElementById('firebaseAuthMessage');
          if (titulo) titulo.textContent = estado === 'rechazado' ? 'Acceso rechazado' : 'Solicitud pendiente';
          if (mensaje) {
              mensaje.innerHTML = estado === 'rechazado'
                  ? '<strong>El docente rechazó tu solicitud de acceso.</strong><br>' +
                    (motivo ? `Motivo: ${escapeHtml(motivo)}.<br>` : '') +
                    'Consultá con el equipo docente si necesitás solicitar una revisión.'
                  : '<strong>Tu registro fue enviado correctamente.</strong><br>' +
                    'Un docente debe aceptar tu cuenta antes de que puedas comenzar las actividades. ' +
                    'Esta pantalla se actualizará automáticamente cuando se apruebe el acceso.';
          }
          const loginButton = overlay?.querySelector('.btn-google');
          if (loginButton) loginButton.style.display = 'none';
          mostrarDatosYCorreccionSolicitud(estado);
      }

      function mostrarDatosYCorreccionSolicitud(estado) {
          const overlay = document.getElementById('firebaseAuthOverlay');
          const mensaje = document.getElementById('firebaseAuthMessage');
          const datos = window.ultimoDocumentoEstudianteFirebase?.estudiante || {};
          if (mensaje && !mensaje.querySelector('.student-request-summary')) {
              mensaje.insertAdjacentHTML('beforeend', `
                  <div class="student-request-summary" style="margin-top:.8rem;padding:.7rem;border:1px solid rgba(148,163,184,.25);border-radius:6px;text-align:left;font-size:.82rem">
                      <strong>Datos enviados</strong><br>
                      Nombre: ${escapeHtml(datos.nombre || 'Sin completar')}<br>
                      Correo: ${escapeHtml(window.firebaseCurrentUser?.email || 'Sin correo')}<br>
                      Curso: ${escapeHtml(datos.curso || 'Sin completar')}<br>
                      División: ${escapeHtml(datos.division || 'Sin completar')}<br>
                      Turno: ${escapeHtml(datos.turno || 'Sin completar')}
                  </div>`);
          }
          let boton = document.getElementById('btnCorregirSolicitudEstudiante');
          if (!boton && overlay) {
              boton = document.createElement('button');
              boton.id = 'btnCorregirSolicitudEstudiante';
              boton.className = 'btn btn-primary';
              boton.style.cssText = 'width:100%;justify-content:center;margin-top:.75rem;';
              const referencia = overlay.querySelector('.btn-warning');
              referencia?.parentNode?.insertBefore(boton, referencia);
          }
          if (boton) {
              boton.innerHTML = estado === 'rechazado'
                  ? '<i class="fa-solid fa-paper-plane"></i> Corregir y reenviar solicitud'
                  : '<i class="fa-solid fa-pen"></i> Corregir datos enviados';
              boton.onclick = () => abrirCorreccionSolicitudEstudiante(estado === 'rechazado');
          }
      }

      function abrirCorreccionSolicitudEstudiante(reenviar = false) {
          const actual = window.ultimoDocumentoEstudianteFirebase?.estudiante || {};
          const modal = document.createElement('div');
          modal.className = 'modal-overlay active';
          modal.style.zIndex = '8000';
          const opciones = (valores, actualValor) => valores.map(valor =>
              `<option ${actualValor === valor ? 'selected' : ''}>${valor}</option>`).join('');
          modal.innerHTML = `<div class="modal-box" style="max-width:520px;width:92%">
              <h3><i class="fa-solid fa-user-pen"></i> ${reenviar ? 'Corregir y reenviar solicitud' : 'Corregir datos enviados'}</h3>
              <p>${reenviar ? 'El rechazo anterior quedará guardado como antecedente.' : 'La solicitud conservará su fecha original.'}</p>
              <div class="input-group"><label>Nombre y apellido</label><input id="corregirNombre" value="${escapeHtml(actual.nombre || window.firebaseCurrentUser?.displayName || '')}"></div>
              <div class="input-group"><label>Curso</label><select id="corregirCurso"><option value="">Seleccionar curso</option>${opciones(['1° Año','2° Año','3° Año','4° Año','5° Año','6° Año','7° Año'], actual.curso)}</select></div>
              <div class="input-group"><label>División</label><select id="corregirDivision"><option value="">Seleccionar división</option>${opciones(['A','B','C','D','E'], actual.division)}</select></div>
              <div class="input-group"><label>Turno</label><select id="corregirTurno"><option value="">Seleccionar turno</option>${opciones(['Mañana','Tarde','Vespertino','Noche'], actual.turno)}</select></div>
              <div id="corregirSolicitudError" role="alert" style="display:none;color:#fca5a5;margin-bottom:.7rem"></div>
              <div class="modal-actions">
                  <button class="btn btn-secondary" type="button" id="cancelarCorreccionSolicitud">Cancelar</button>
                  <button class="btn btn-primary" type="button" id="guardarCorreccionSolicitud"><i class="fa-solid fa-cloud-arrow-up"></i> ${reenviar ? 'Reenviar solicitud' : 'Guardar cambios'}</button>
              </div>
          </div>`;
          document.body.appendChild(modal);
          modal.querySelector('#cancelarCorreccionSolicitud').onclick = () => modal.remove();
          modal.querySelector('#guardarCorreccionSolicitud').onclick = async () => {
              const estudiante = {
                  nombre: modal.querySelector('#corregirNombre').value.trim(),
                  curso: modal.querySelector('#corregirCurso').value.trim(),
                  division: modal.querySelector('#corregirDivision').value.trim(),
                  turno: modal.querySelector('#corregirTurno').value.trim()
              };
              const error = modal.querySelector('#corregirSolicitudError');
              if (Object.values(estudiante).some(valor => !valor)) {
                  error.textContent = 'Completá nombre, curso, división y turno.';
                  error.style.display = 'block';
                  return;
              }
              const boton = modal.querySelector('#guardarCorreccionSolicitud');
              boton.disabled = true;
              const ok = await window.actualizarSolicitudEstudianteFirebase?.(estudiante, reenviar);
              if (!ok) {
                  error.textContent = 'No se pudieron guardar los cambios. Revisá la conexión y los permisos.';
                  error.style.display = 'block';
                  boton.disabled = false;
                  return;
              }
              window.ultimoDocumentoEstudianteFirebase = {
                  ...(window.ultimoDocumentoEstudianteFirebase || {}),
                  estudiante,
                  estadoCuenta: reenviar ? 'pendiente' : estadoCuentaEstudiante
              };
              if (reenviar) estadoCuentaEstudiante = 'pendiente';
              modal.remove();
              bloquearCuentaPorAprobacion(estadoCuentaEstudiante, '');
          };
      }

      function mostrarAvisoAccesoAprobado(detalle = {}) {
          if (firebaseStorageUid) {
              localStorage.setItem(storageKey('app_account_state'), 'activo');
          }
          const overlay = document.getElementById('firebaseAuthOverlay');
          overlay?.classList.remove('hidden');
          const titulo = document.getElementById('firebaseAuthTitle');
          const mensaje = document.getElementById('firebaseAuthMessage');
          if (titulo) titulo.textContent = 'Tu acceso fue aprobado';
          if (mensaje) {
              mensaje.innerHTML =
                  '<strong>El docente aceptó tu solicitud.</strong><br>' +
                  'Ya podés ingresar a las actividades.' +
                  (detalle.aprobadoPor ? `<br><small>Aprobado por: ${escapeHtml(detalle.aprobadoPor)}</small>` : '');
          }
          document.getElementById('btnCorregirSolicitudEstudiante')?.remove();
          const loginButton = overlay?.querySelector('.btn-google');
          if (loginButton) loginButton.style.display = 'none';
          let boton = document.getElementById('btnContinuarTrasAprobacion');
          if (!boton && overlay) {
              boton = document.createElement('button');
              boton.id = 'btnContinuarTrasAprobacion';
              boton.className = 'btn btn-success';
              boton.style.cssText = 'width:100%;justify-content:center;margin-top:.75rem;';
              boton.innerHTML = '<i class="fa-solid fa-arrow-right"></i> Continuar a las actividades';
              boton.onclick = () => window.location.reload();
              const referencia = overlay.querySelector('.btn-warning');
              referencia?.parentNode?.insertBefore(boton, referencia);
          }
      }

      async function initApp() {
          const navList = document.getElementById('navList');
          const sectionsContainer = document.getElementById('sectionsContainer');

          const overlay = document.getElementById('firebaseAuthOverlay');
          const warning = document.getElementById('firebaseConfigWarning');
          const localFileNotice = document.getElementById('localFileNotice');
          if (window.location.protocol === 'file:' && localFileNotice) localFileNotice.style.display = 'block';
          if (!window.firebaseConfigured) {
              if (warning) warning.style.display = 'block';
              document.getElementById('firebaseAuthMessage').innerText = 'Primero configura Firebase en este archivo. Luego podrás ingresar con Google y guardar el avance en la nube.';
              return;
          }

          const user = await window.firebaseAuthReady;
          if (!user) {
              overlay.classList.remove('hidden');
              return;
          }
          // FIX CRÍTICO PARA CAMBIO DE CUENTA:
          // si entra otro UID en el mismo navegador, nunca debemos reutilizar
          // el caché local del estudiante anterior. Firebase es la fuente de verdad.
          // Desde aquí TODAS las claves locales pertenecen al UID actual.
          // Los datos de otras cuentas permanecen aislados por su propia clave.
          firebaseStorageUid = user.uid;
          localStorage.setItem('firebase_active_uid', user.uid);

          // La configuración docente de desafíos tiene prioridad sobre la copia local.
          if (typeof window.cargarDesafiosFirebase === 'function') {
              const remotos = await window.cargarDesafiosFirebase();
              if (Array.isArray(remotos) && remotos.length === 19) {
                  const mapa = new Map(remotos.map(d => [d.id,d]));
                  seccionesData = seccionesData.map(local => ({...local,...(mapa.get(local.id)||{})}));
              }
          }

          const datosFirebase = await window.cargarProgresoFirebase();
          registroFirebaseExistente = Boolean(
              datosFirebase?.uid &&
              datosFirebase?.email &&
              datosFirebase?.estadoCuenta
          );
          window.ultimoDocumentoEstudianteFirebase = datosFirebase || null;
          if (datosFirebase?.estadoCuenta === 'inactivo') {
              bloquearCuentaEstudiante(datosFirebase.bajaMotivo || '');
              return;
          }
          estadoCuentaEstudiante = datosFirebase
              ? (datosFirebase.estadoCuenta || 'activo')
              : 'pendiente';
          const estadoLocalAnterior = getLocalStorage('app_account_state') || '';
          if (estadoCuentaEstudiante === 'activo' &&
              (estadoLocalAnterior === 'pendiente' || estadoLocalAnterior === 'rechazado')) {
              mostrarAvisoAccesoAprobado({
                  aprobadoPor: datosFirebase?.aprobadoPor || '',
                  aprobadoEn: datosFirebase?.aprobadoEn || null
              });
              return;
          }
          if (estadoCuentaEstudiante === 'pendiente' && datosFirebase?.estudiante) {
              window.escucharReinicioSalidasFirebase?.();
              bloquearCuentaPorAprobacion('pendiente');
              return;
          }
          if (estadoCuentaEstudiante === 'rechazado') {
              window.escucharReinicioSalidasFirebase?.();
              bloquearCuentaPorAprobacion('rechazado', datosFirebase?.rechazoMotivo || '');
              return;
          }
          cuentaEstudianteActiva = true;
          firebaseInitialized = true;
          overlay.classList.add('hidden');
          aplicarEstadoInicioClase(false);
          window.escucharInicioClaseFirebase?.();
          window.escucharReinicioSalidasFirebase?.();
          window.escucharNotasDocenteEstudianteFirebase?.();
          window.escucharMensajesDocenteEstudianteFirebase?.();
          if (datosFirebase) await restaurarDesdeFirebase(datosFirebase);

          const photo = document.getElementById('firebaseUserPhoto');
          if (user.photoURL) { photo.src = user.photoURL; photo.style.display = 'block'; }
          document.getElementById('firebaseUserName').textContent = user.displayName || 'Estudiante';
          document.getElementById('firebaseUserEmail').textContent = user.email || '';

          // Si el estudiante actual no tenía documento en Firebase, arrancamos
          // limpio y usamos solamente sus datos de Google.
          document.getElementById('studentName').value = getLocalStorage('app_student_name') || user.displayName || '';
          document.getElementById('studentCourse').value = getLocalStorage('app_student_course') || '';
          document.getElementById('studentDivision').value = getLocalStorage('app_student_division') || '';
           document.getElementById('studentTurno').value = getLocalStorage('app_student_turno') || '';
          totalSalidasPestana = normalizarCantidadSalidas(getLocalStorage('app_blur_count'));
          try {
              const eventosLocales = JSON.parse(getLocalStorage('app_tab_events') || '[]');
              if (!eventosSalidasPestana.length && Array.isArray(eventosLocales)) eventosSalidasPestana = eventosLocales;
          } catch {
              eventosSalidasPestana = [];
          }
          document.getElementById('blurCount').innerText = totalSalidasPestana;
          document.getElementById('btnJustificarSalida').style.display = eventosSalidasPestana.length ? 'inline-flex' : 'none';

          document.getElementById('studentName').addEventListener('input', (e) => {
              setLocalStorage('app_student_name', e.target.value);
              programarGuardadoFirebase();
          });
          document.getElementById('studentCourse').addEventListener('input', (e) => {
              setLocalStorage('app_student_course', e.target.value);
              programarGuardadoFirebase();
          });
          document.getElementById('studentCourse').addEventListener('change', (e) => {
              setLocalStorage('app_student_course', e.target.value);
              validarDatosEstudiante(false);
              guardarIdentificacionFirebase();
          });
          document.getElementById('studentDivision').addEventListener('input', (e) => {
              const valor = e.target.value.trim().toUpperCase();
              e.target.value = valor;
              setLocalStorage('app_student_division', valor);
              programarGuardadoFirebase();
              clearTimeout(window.__guardarIdentificacionTimer);
              window.__guardarIdentificacionTimer = setTimeout(() => guardarIdentificacionFirebase(), 500);
          });
          document.getElementById('studentDivision').addEventListener('change', (e) => {
              const valor = e.target.value.trim().toUpperCase();
              e.target.value = valor;
              setLocalStorage('app_student_division', valor);
              validarDatosEstudiante(false);
              guardarIdentificacionFirebase();
          });
          document.getElementById('studentTurno').addEventListener('change', (e) => {
              setLocalStorage('app_student_turno', e.target.value);
              validarDatosEstudiante(false);
              programarGuardadoFirebase();
              guardarIdentificacionFirebase();
          });

          // Primer ingreso: el documento de Firebase es la fuente de verdad.
          // Si no existe o le faltan datos obligatorios, se solicita el registro completo.
          const registroCompleto = !!(datosFirebase && datosFirebase.estudiante &&
              datosFirebase.estudiante.nombre && datosFirebase.estudiante.curso &&
              datosFirebase.estudiante.division && datosFirebase.estudiante.turno);
          if (!registroCompleto) {
              await solicitarDatosNuevoEstudiante();
              window.escucharReinicioSalidasFirebase?.();
              bloquearCuentaPorAprobacion('pendiente');
              return;
          } else {
              setTimeout(() => guardarIdentificacionFirebase(), 300);
          }

          const bloquearPortapapelesEstudiante = e => {
              const editor = e.target?.closest?.('.code-editor[id^="editor-"]');
              if (!editor || document.body.classList.contains('teacher-authorized')) return;
              e.preventDefault();
          };
          document.addEventListener('copy', bloquearPortapapelesEstudiante);
          document.addEventListener('cut', bloquearPortapapelesEstudiante);
          document.addEventListener('paste', bloquearPortapapelesEstudiante);
          const bloquearArrastreEstudiante = e => {
              const editor = e.target?.closest?.('.code-editor[id^="editor-"], .codemirror-host');
              const textarea = editor?.matches?.('.code-editor')
                  ? editor
                  : editor?.querySelector?.('.code-editor[id^="editor-"]');
              if (!textarea || document.body.classList.contains('teacher-authorized')) return;
              e.preventDefault();
              if (e.dataTransfer) e.dataTransfer.dropEffect = 'none';
          };
          document.addEventListener('dragstart', bloquearArrastreEstudiante);
          document.addEventListener('dragover', bloquearArrastreEstudiante);
          document.addEventListener('drop', bloquearArrastreEstudiante);

          // Atajo del profesor para panel general (Ctrl + Shift + U)
          window.addEventListener('keydown', function(e) {
              if (e.ctrlKey && e.shiftKey && (e.key === 'U' || e.key === 'u')) {
                  e.preventDefault();
                  solicitarAccionProfesor('global_reset');
              }
          });

          seccionesData.forEach((sec, idx) => {
              const li = document.createElement('li');
              li.className = `nav-item ${idx === 0 ? 'active' : ''}`;
              li.onclick = () => switchSection(sec.id);
              li.onkeydown = event => {
                  if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      switchSection(sec.id);
                  }
              };
              li.tabIndex = 0;
              li.setAttribute('role', 'button');
              li.setAttribute('aria-label', `Abrir ${sec.title}`);
              li.setAttribute('aria-current', idx === 0 ? 'page' : 'false');
              li.id = `nav-btn-${sec.id}`;
              li.innerHTML = `<i class="fa-solid ${sec.icon}"></i> <span>${sec.title}</span>`;
              navList.appendChild(li);

              const savedCode = getLocalStorage(`draft_editor-${sec.id}`) || sec.initialCode;
              const isFinalized = getLocalStorage(`finalized_${sec.id}`) === 'true';
              const tutorMinimizado = getLocalStorage(`ai_tutor_minimized_${sec.id}`) === 'true';
              if (isFinalized) actividadesFinalizadas[sec.id] = true;
              contadorPrevisualizaciones[sec.id] = parseInt(getLocalStorage(`preview_count_${sec.id}`) || '0');

              let savedTime = getLocalStorage(`timer_${sec.id}`);
              tiemposRestantes[sec.id] = savedTime !== null ? parseInt(savedTime) : TIEMPO_MAXIMO_SEGUNDOS;
              modulosPausados[sec.id] = cronometrosPausadosPorDocente;

              const card = document.createElement('div');
              card.className = `section-card ${idx === 0 ? 'active' : ''}`;
              card.id = sec.id;
              card.innerHTML = `
                  <h2 class="section-title"><i class="fa-solid ${sec.icon}"></i> ${sec.title}</h2>
                  <div class="student-teacher-grade-notice" id="student-teacher-grade-${sec.id}" role="status" aria-live="polite" hidden></div>

                  <div class="module-timer-bar">
                      <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-muted);">
                          <i class="fa-solid fa-clock"></i> Tiempo disponible (Máx. 40 min):
                      </div>
                      <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                          <span class="timer-display" id="timer-display-${sec.id}">40:00</span>
                          <small style="color:var(--text-muted)">Comienza al hacer clic en el editor</small>
                          <button class="btn btn-warning teacher-only" id="btn-pause-${sec.id}" onclick="solicitarPausaModulo('${sec.id}')" ${isFinalized ? 'disabled' : ''}>
                              <i class="fa-solid fa-pause"></i> Pausar (Profe)
                          </button>
                          <button class="btn btn-danger teacher-only" style="font-size: 0.75rem; padding: 0.4rem 0.8rem;" onclick="solicitarAccionProfesor('unlock_current')">
                              <i class="fa-solid fa-unlock"></i> Desbloquear Este
                          </button>
                          <button class="btn btn-danger teacher-only" style="font-size: 0.75rem; padding: 0.4rem 0.8rem;" onclick="solicitarAccionProfesor('unlock_all')">
                              <i class="fa-solid fa-unlock-keyhole"></i> Desbloquear Todos
                          </button>
                      </div>
                  </div>

                  <div class="pause-banner" id="pause-banner-${sec.id}">
                      <i class="fa-solid fa-circle-pause" style="font-size: 1.2rem;"></i>
                      <span><strong>MÓDULO PAUSADO POR EL PROFESOR:</strong> El cronómetro y la edición de código han sido suspendidos temporalmente.</span>
                  </div>

                  <div class="theory-box">
                      <p>${sec.theory}</p>
                  </div>

                  <div class="exercise-box">
                      <h3><i class="fa-solid fa-laptop-code"></i> ${sec.exerciseTitle}</h3>
                      <p id="exercise-desc-${sec.id}">${resaltarPalabrasClave(sec.exerciseDesc)}</p>
                      <div class="exercise-ai-status" id="exercise-ai-status-${sec.id}" aria-live="polite">
                          <i class="fa-solid fa-wand-magic-sparkles"></i> Preparando palabras clave...
                      </div>
                      <div class="keyword-legend" aria-label="Categorías de palabras clave">
                          <span><i style="background:#38bdf8"></i> Acción</span>
                          <span><i style="background:#c084fc"></i> Concepto</span>
                          <span><i style="background:#34d399"></i> Método o herramienta</span>
                          <span><i style="background:#facc15"></i> Resultado esperado</span>
                      </div>
                      <div class="keyword-help-panel" id="keyword-help-${sec.id}" tabindex="-1" aria-live="polite">
                          Seleccioná una palabra resaltada para ver qué significa y qué acción te pide realizar.
                      </div>
                      <div class="comprehension-tools">
                          <div class="comprehension-panel">
                              <h4><i class="fa-solid fa-list-ol"></i> Consigna organizada</h4>
                              <button class="btn btn-primary" id="btn-steps-${sec.id}" type="button" aria-expanded="false" onclick="mostrarPasosConsigna('${sec.id}')">
                                  <i class="fa-solid fa-list-ol"></i> Ver consigna en pasos
                              </button>
                              <div class="steps-panel" id="steps-panel-${sec.id}">
                                  <ol>${renderPasosConsigna(sec)}</ol>
                              </div>
                          </div>

                          <div class="comprehension-panel">
                              <h4><i class="fa-solid fa-circle-question"></i> Verificación de comprensión</h4>
                              <p style="margin:0 0 .6rem;color:var(--text-muted);font-size:.84rem">
                                  ${escaparAtributoAyuda(generarVerificacionComprension(sec).pregunta)}
                              </p>
                              <div class="comprehension-options">
                                  ${renderVerificacionComprension(sec)}
                              </div>
                              <button class="btn btn-success" type="button" style="margin-top:.65rem" onclick="verificarComprensionConsigna('${sec.id}')">
                                  <i class="fa-solid fa-check"></i> Verificar
                              </button>
                              <div class="comprehension-feedback" id="comprehension-feedback-${sec.id}" aria-live="polite"></div>
                          </div>

                          <div class="comprehension-panel">
                              <h4><i class="fa-solid fa-list-check"></i> Lista de control antes de entregar</h4>
                              <div class="student-checklist" id="checklist-${sec.id}">
                                  ${renderChecklistComprension(sec)}
                              </div>
                              <div class="checklist-progress" id="checklist-progress-${sec.id}">0 comprobaciones marcadas</div>
                          </div>
                      </div>
                      <button class="btn btn-secondary support-resource-button" type="button" onclick="abrirSitioApoyo('${sec.id}')">
                          <i class="fa-solid fa-book-open-reader"></i> Consultar material de apoyo
                      </button>

                      <div class="code-playground">
                          <div class="student-workflow-guide" aria-label="Pasos para resolver el desafío">
                              <span><strong>1</strong> Leé la consigna</span>
                              <span><strong>2</strong> Programá una parte</span>
                              <span><strong>3</strong> Ejecutá y revisá</span>
                              <span><strong>4</strong> Pedí una pista si la necesitás</span>
                          </div>
                          <div class="student-coding-workspace ${tutorMinimizado ? 'tutor-minimized' : ''}">
                              <section class="student-code-column" aria-label="Editor y consola">
                                  <div class="student-code-toolbar">
                                      <div>
                                          <strong><i class="fa-solid fa-code"></i> Tu solución</strong>
                                          <span id="editor-metrics-${sec.id}">0 líneas · 0 caracteres</span>
                                      </div>
                                      <div class="student-code-toolbar-actions">
                                          <span class="student-editor-state ${isFinalized ? 'success' : 'idle'}" id="editor-state-${sec.id}">
                                              <i class="fa-solid ${isFinalized ? 'fa-circle-check' : 'fa-pen'}"></i>
                                              ${isFinalized ? 'Actividad entregada' : 'Listo para programar'}
                                          </span>
                                          <button class="student-focus-toggle" type="button" onclick="alternarModoEnfoque('${sec.id}', this)" aria-pressed="false" title="Ocultar temporalmente teoría y ayudas">
                                              <i class="fa-solid fa-expand"></i><span>Enfoque</span>
                                          </button>
                                      </div>
                                  </div>
                                  <div class="student-ai-editor-actions" aria-label="Ayuda de programación con IA">
                                      <button type="button" data-ai-editor-action class="student-ai-editor-action" onclick="solicitarAyudaEditor('${sec.id}', 'consigna', this)" ${isFinalized ? 'disabled' : ''} title="Organizar la consigna antes de programar">
                                          <i class="fa-solid fa-list-ol"></i><span>Planificar</span>
                                      </button>
                                      <button type="button" data-ai-editor-action class="student-ai-editor-action" onclick="solicitarAyudaEditor('${sec.id}', 'error', this)" ${isFinalized ? 'disabled' : ''} title="Analizar el error de la última ejecución">
                                          <i class="fa-solid fa-bug"></i><span>Explicar error</span>
                                      </button>
                                      <button type="button" data-ai-editor-action class="student-ai-editor-action" onclick="solicitarAyudaEditor('${sec.id}', 'revisar', this)" ${isFinalized ? 'disabled' : ''} title="Revisar el código actual sin mostrar la solución">
                                          <i class="fa-solid fa-magnifying-glass-code"></i><span>Revisar código</span>
                                      </button>
                                      <button type="button" data-ai-editor-action class="student-ai-editor-action" onclick="solicitarAyudaEditor('${sec.id}', 'ejemplo', this)" ${isFinalized ? 'disabled' : ''} title="Proponer datos para probar el programa">
                                          <i class="fa-solid fa-flask"></i><span>Crear prueba</span>
                                      </button>
                                  </div>

                                  <div class="editor-container">
                                      <div class="editor-header">
                                          <span><i class="fa-solid fa-file-code"></i> Editor JavaScript</span>
                                          <span title="Editor profesional con resaltado, autocompletado y números de línea">CodeMirror 6 · JavaScript</span>
                                      </div>
                                      <label class="sr-only" for="editor-${sec.id}">Código para ${sec.title}</label>
                                      <textarea id="editor-${sec.id}" class="code-editor" aria-label="Código para ${sec.title}" spellcheck="false" autocapitalize="off" autocomplete="off" ${isFinalized ? 'disabled' : ''}>${savedCode}</textarea>
                                  </div>

                                  <div class="student-run-actions">
                                      <button class="btn btn-primary student-run-primary" id="btn-run-${sec.id}" onclick="ejecutarCodigo('${sec.id}')" ${isFinalized ? 'disabled' : ''}>
                                          <i class="fa-solid fa-play"></i> Ejecutar código
                                      </button>
                                      <button class="btn btn-preview" id="btn-preview-${sec.id}" onclick="previsualizarNotaIA('${sec.id}')" ${isFinalized ? 'disabled' : ''}>
                                          <i class="fa-solid fa-star-half-stroke"></i> Nota previa (${3 - contadorPrevisualizaciones[sec.id]})
                                      </button>
                                      <button class="btn btn-ai" id="btn-ai-${sec.id}" onclick="resolverYCompararIA('${sec.id}')" ${isFinalized ? 'disabled' : ''}>
                                          <i class="fa-solid fa-flag-checkered"></i> Entregar y comparar
                                      </button>
                                      <button class="btn btn-secondary" id="btn-reset-${sec.id}" onclick="restablecerCodigo('${sec.id}')" ${isFinalized ? 'disabled' : ''} title="Volver al código inicial">
                                          <i class="fa-solid fa-rotate-left"></i> Restablecer
                                      </button>
                                  </div>

                                  <div class="student-console-panel">
                                      <div class="student-console-header">
                                          <strong><i class="fa-solid fa-terminal"></i> Consola</strong>
                                          <small>Resultado de la última ejecución</small>
                                      </div>
                                      <div class="console-output" id="console-${sec.id}" role="status" aria-live="polite">${isFinalized ? '// Actividad finalizada y bloqueada.' : '// Ejecutá el código para ver aquí los resultados o errores.'}</div>
                                  </div>
                              </section>

                              <aside class="student-ai-column ${tutorMinimizado ? 'is-minimized' : ''}" aria-label="Tutor de programación">
                                  <div class="ai-chat-box" id="ai-chat-${sec.id}">
                                      <div class="ai-chat-header">
                                          <div class="ai-chat-title"><i class="fa-solid fa-graduation-cap"></i><span>Tutor de programación</span></div>
                                          <div class="ai-chat-header-actions">
                                              <div class="ai-chat-status">
                                                  <span class="ai-chat-note">${window.firebaseAIRealConfigurada ? "IA segura conectada" : "Tutor local activo"}</span>
                                                  <span class="ai-chat-sync saved" id="ai-chat-sync-${sec.id}"><i class="fa-solid fa-cloud"></i> Sincronizado</span>
                                              </div>
                                              <button class="ai-chat-minimize" type="button" onclick="alternarTutorProgramacion('${sec.id}', this)" aria-expanded="${String(!tutorMinimizado)}" title="${tutorMinimizado ? 'Restaurar Tutor de programación' : 'Minimizar Tutor de programación'}">
                                                  <i class="fa-solid ${tutorMinimizado ? 'fa-chevron-left' : 'fa-chevron-right'}"></i>
                                                  <span class="sr-only">${tutorMinimizado ? 'Restaurar Tutor de programación' : 'Minimizar Tutor de programación'}</span>
                                              </button>
                                          </div>
                                      </div>
                                      <div class="student-ai-principle"><i class="fa-solid fa-shield-halved"></i> Te guía con pistas y preguntas. No entrega la solución completa.</div>
                                      <div class="ai-chat-messages" id="ai-chat-messages-${sec.id}" aria-live="polite"></div>
                                      <div class="ai-chat-quick-actions">
                                          <button class="btn btn-chat-primary" type="button" onclick="pedirPistaIA('${sec.id}', 'pista')"><i class="fa-solid fa-lightbulb"></i> Nueva pista</button>
                                          <button class="btn btn-secondary" type="button" onclick="pedirPistaIA('${sec.id}', 'siguiente')"><i class="fa-solid fa-forward"></i> Siguiente paso</button>
                                          <button class="btn btn-chat-primary" type="button" onclick="pedirPistaIA('${sec.id}', 'casos')"><i class="fa-solid fa-vial"></i> Casos de prueba</button>
                                          <button class="btn btn-secondary" type="button" onclick="pedirPistaIA('${sec.id}', 'linea')"><i class="fa-solid fa-list-ol"></i> Error por línea</button>
                                          <button class="btn btn-chat-danger" type="button" onclick="limpiarChatIA('${sec.id}')"><i class="fa-solid fa-trash-can"></i> Limpiar</button>
                                      </div>
                                      <div class="student-ai-hint-levels" aria-label="Nivel de pista progresiva">
                                          <span><i class="fa-solid fa-stairs"></i> Pista progresiva</span>
                                          <button type="button" data-ai-editor-action onclick="pedirPistaIA('${sec.id}', 'pista1')">1</button>
                                          <button type="button" data-ai-editor-action onclick="pedirPistaIA('${sec.id}', 'pista2')">2</button>
                                          <button type="button" data-ai-editor-action onclick="pedirPistaIA('${sec.id}', 'pista3')">3</button>
                                      </div>
                                      <form class="ai-chat-composer" onsubmit="enviarMensajeIA(event, '${sec.id}')">
                                          <input class="ai-chat-input" id="ai-chat-input-${sec.id}" maxlength="240" autocomplete="off" placeholder="Preguntá sobre tu código o el error..." aria-label="Pregunta a la IA sobre ${sec.title}" ${isFinalized ? 'disabled' : ''}>
                                          <button class="btn btn-ai" type="submit" ${isFinalized ? 'disabled' : ''} title="Enviar consulta"><i class="fa-solid fa-paper-plane"></i><span>Enviar</span></button>
                                      </form>
                                  </div>
                              </aside>
                          </div>

                          <div class="ai-feedback-box ${isFinalized ? 'active' : ''}" id="ai-feedback-${sec.id}">
                              <div class="ai-header"><i class="fa-solid fa-wand-magic-sparkles"></i> Evaluación automática orientativa</div>
                              <div class="ai-comparison-grid">
                                  <div class="ai-column">
                                      <h4><i class="fa-solid fa-user-graduate"></i> Tu Código Entregado</h4>
                                      <pre id="ai-student-code-${sec.id}">${savedCode}</pre>
                                  </div>
                                  <div class="ai-column">
                                      <h4><i class="fa-solid fa-robot"></i> Solución de referencia</h4>
                                      <pre id="ai-ideal-code-${sec.id}">${sec.aiSolution}</pre>
                                  </div>
                              </div>
                              <div class="ai-eval-summary" id="ai-text-${sec.id}">${isFinalized ? 'Actividad previamente evaluada de forma estricta y cerrada.' : 'Generando comparativa...'}</div>

                              <div class="analyst-box" id="analyst-${sec.id}">
                                  <div class="analyst-header">
                                      <i class="fa-solid fa-user-check"></i>
                                      Analista de Viabilidad y Excelencia — RESPONDE AHORA
                                  </div>
                                  <div style="margin-bottom:0.8rem;color:#cbd5e1;line-height:1.45;">
                                      🤖 Al pulsar <strong>IA</strong>, estas preguntas se habilitan para responder.
                                      Están basadas en <strong>tu código</strong>, en la <strong>solución de la IA</strong>
                                      y en la <strong>comparación entre ambos</strong>. Algunas tienen más de una respuesta correcta.
                                  </div>
                                  <div class="analyst-score" id="analyst-score-${sec.id}">
                                      <span class="analyst-badge" id="viability-${sec.id}">Viabilidad: pendiente</span>
                                      <span class="analyst-badge" id="excellence-${sec.id}">Excelencia: pendiente</span>
                                  </div>
                                  <div id="analyst-questions-${sec.id}"></div>
                                  <button class="btn btn-success" id="analyst-submit-${sec.id}" onclick="evaluarAnalista('${sec.id}')">
                                      <i class="fa-solid fa-check-double"></i> Entregar respuestas al analista
                                  </button>
                                  <div class="analyst-result" id="analyst-result-${sec.id}"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              `;
              sectionsContainer.appendChild(card);
              actualizarNotaDocenteVisibleEstudiante(sec.id);
              restaurarInterfazAyuda(sec.id);
              analizarDesafioConIA(sec);
              try {
                  const guardadoChat = JSON.parse(getLocalStorage(`ai_chat_${sec.id}`) || "[]");
                  const chatFirebase = historialChatIA[sec.id];
                  if (!Array.isArray(chatFirebase)) {
                      historialChatIA[sec.id] = Array.isArray(guardadoChat) ? guardadoChat.slice(-20) : [];
                  } else {
                      historialChatIA[sec.id] = chatFirebase.slice(-20);
                      setLocalStorage(`ai_chat_${sec.id}`, JSON.stringify(historialChatIA[sec.id]));
                  }
              } catch (_) {
                  if (!Array.isArray(historialChatIA[sec.id])) historialChatIA[sec.id] = [];
              }
              renderizarChatIA(sec.id);
              actualizarDisplayTiempo(sec.id);

              if (isFinalized) {
                  actualizarIconoEstado(sec.id, true);
              }
          });

          document.getElementById('currentTitle').innerText = seccionesData[0].title;
          configurarEditores();
          await window.iniciarColaboracionCRDTEstudiante?.();
          bloquearCopiaYPegado();
          actualizarProgreso();

          // Autoguardado de respaldo: captura también cambios que no pasan por localStorage.
          clearInterval(window.__firebaseAutoSaveInterval);
          window.__firebaseAutoSaveInterval = setInterval(() => {
              if (document.visibilityState !== 'hidden' && firebaseSaveDirty) guardarAhoraFirebase();
          }, 180000);
          window.addEventListener('beforeunload', () => {
              // El último estado queda además en localStorage; Firebase se actualiza con el debounce normal.
              programarGuardadoFirebase();
          });

          guardarAhoraFirebase();
          aplicarControlCronometrosDocente(ultimoControlCronometros);
          aplicarControlCronometroIndividual(ultimoControlCronometroIndividual);
      }

      function abrirJustificacionUltimaSalida() {
          const evento = [...eventosSalidasPestana].reverse().find(x => !x.justificacion);
          if (!evento) {
              alert('No hay cambios de pestaña pendientes de justificación.');
              return;
          }
          document.getElementById('justificarSalidaDescripcion').textContent =
              `Evento ${evento.numero}, actividad ${evento.seccion || 'sin identificar'}, duración ${evento.duracionSegundos ?? 'en curso'} segundos.`;
          document.getElementById('motivoJustificacionSalida').value = '';
          document.getElementById('detalleJustificacionSalida').value = '';
          document.getElementById('justificarSalidaModal').dataset.eventoId = evento.id;
          document.getElementById('justificarSalidaModal').classList.add('active');
      }

      function cerrarJustificacionSalida() {
          document.getElementById('justificarSalidaModal').classList.remove('active');
      }

      function guardarJustificacionSalida() {
          const modal = document.getElementById('justificarSalidaModal');
          const evento = eventosSalidasPestana.find(x => x.id === modal.dataset.eventoId);
          const motivo = document.getElementById('motivoJustificacionSalida').value;
          const detalle = document.getElementById('detalleJustificacionSalida').value.trim();
          if (!evento || !motivo || !detalle) {
              alert('Seleccioná un motivo y escribí una explicación.');
              return;
          }
          evento.justificacion = {
              motivo,
              detalle,
              enviadaEn: new Date().toISOString()
          };
          setLocalStorage('app_tab_events', JSON.stringify(eventosSalidasPestana));
          cerrarJustificacionSalida();
          programarGuardadoFirebase();
          alert('La justificación quedó registrada para revisión docente.');
      }

      function actualizarDisplayTiempo(sectionId) {
          let segs = tiemposRestantes[sectionId];
          let mins = Math.floor(segs / 60);
          let sRestantes = segs % 60;
          let displayStr = `${mins.toString().padStart(2, '0')}:${sRestantes.toString().padStart(2, '0')}`;

          const el = document.getElementById(`timer-display-${sectionId}`);
          if (el) el.innerText = displayStr;
      }

      function iniciarCronometro(sectionId) {
          if (
              sectionId !== seccionActivaActual ||
              !cuentaEstudianteActiva ||
              !claseHabilitada ||
              cronometrosActivos[sectionId] ||
              actividadesFinalizadas[sectionId] ||
              modulosPausados[sectionId]
          ) return;

          Object.keys(cronometrosActivos).forEach(id => {
              if (id === sectionId || !cronometrosActivos[id]) return;
              clearInterval(cronometrosActivos[id]);
              cronometrosActivos[id] = null;
          });
          moduloCronometroEnCurso = sectionId;

          cronometrosActivos[sectionId] = setInterval(() => {
              if (!cuentaEstudianteActiva || !claseHabilitada || modulosPausados[sectionId] || actividadesFinalizadas[sectionId]) {
                  clearInterval(cronometrosActivos[sectionId]);
                  cronometrosActivos[sectionId] = null;
                  return;
              }

              if (tiemposRestantes[sectionId] > 0) {
                  tiemposRestantes[sectionId]--;
                  setLocalStorage(`timer_${sectionId}`, tiemposRestantes[sectionId]);
                  actualizarDisplayTiempo(sectionId);
              } else {
                  clearInterval(cronometrosActivos[sectionId]);
                  cronometrosActivos[sectionId] = null;
                  if (moduloCronometroEnCurso === sectionId) moduloCronometroEnCurso = null;
                  expirarTiempoModulo(sectionId);
              }
          }, 1000);
      }

      function expirarTiempoModulo(sectionId) {
          if (!cuentaEstudianteActiva || !claseHabilitada || actividadesFinalizadas[sectionId]) return;

          alert(`⏰ ¡Tiempo agotado (40 minutos) para este módulo! Se registrará nota 1 por tiempo expirado.`);

          const editor = document.getElementById(`editor-${sectionId}`);
          if (editor) editor.disabled = true;
          document.getElementById(`btn-run-${sectionId}`).disabled = true;
          document.getElementById(`btn-preview-${sectionId}`).disabled = true;
          document.getElementById(`btn-ai-${sectionId}`).disabled = true;
          document.getElementById(`btn-reset-${sectionId}`).disabled = true;
          document.getElementById(`btn-pause-${sectionId}`).disabled = true;
          document.querySelectorAll(`#${CSS.escape(sectionId)} [data-ai-editor-action]`).forEach(control => {
              control.disabled = true;
          });
          actualizarEstadoEditorEstudiante(sectionId, "error", "Tiempo agotado");

          actividadesFinalizadas[sectionId] = true;
          setLocalStorage(`finalized_${sectionId}`, 'true');

          if(!historialResultados[sectionId]) historialResultados[sectionId] = {};
          historialResultados[sectionId].codigo = editor ? editor.value : '';
          historialResultados[sectionId].notaCodigo = 1;
          historialResultados[sectionId].notaPreguntas = 0;
          historialResultados[sectionId].notaFinal = 1;
          historialResultados[sectionId].notaIA = 1;
          historialResultados[sectionId].analisisIA = "Módulo expirado por límite de tiempo (40 minutos). Nota: 1/10.";
          historialResultados[sectionId].exito = false;

          const feedbackBox = document.getElementById(`ai-feedback-${sectionId}`);
          const studentCodeDisplay = document.getElementById(`ai-student-code-${sectionId}`);
          const sec = seccionesData.find(s => s.id === sectionId);
          document.getElementById(`ai-ideal-code-${sectionId}`).innerText = sec.aiSolution;
          const feedbackText = document.getElementById(`ai-text-${sectionId}`);

          if (feedbackBox) feedbackBox.classList.add('active');
          if (studentCodeDisplay && editor) studentCodeDisplay.innerText = editor.value;
          if (feedbackText) feedbackText.innerHTML = "<strong>Resultado automático orientativo: 1/10</strong><br>Tiempo agotado (40 min). Requiere revisión docente.";

          actualizarIconoEstado(sectionId, false);
          actualizarProgreso();
      }

      function solicitarPausaModulo(sectionId) {
          seccionPendientePausa = sectionId;
          solicitarAccionProfesor('pausar_modulo');
      }

      function solicitarAccionProfesor(accion) {
          tipoAccionModal = accion;
          const modal = document.getElementById('passwordModal');
          const desc = document.getElementById('modalDescription');

          if (accion === 'unlock_current') {
              desc.innerHTML = `Autorizar desbloqueo del ejercicio actual <b>(${seccionActivaActual})</b>:`;
          } else if (accion === 'unlock_all') {
              desc.innerHTML = `Autorizar desbloqueo <b>global de todos los ejercicios</b> de la plataforma:`;
          } else if (accion === 'unlock_screen') {
              desc.innerHTML = `Autorizar el <b>desbloqueo de la pantalla</b> tras un cambio de pestaña:`;
          } else if (accion === 'panel_profesor') {
              desc.innerHTML = `Autorizar <b>acceso al Panel del Profesor</b>:`;
          } else if (accion === 'editor_desafios') {
              desc.innerHTML = `Autorizar <b>acceso al editor de desafíos</b>:`;
          } else if (accion === 'reset_contador_salidas') {
              desc.innerHTML = `Autorizar el reinicio del <b>contador visible</b>. El historial permanecerá disponible para revisión:`;
          } else if (accion === 'pausar_modulo') {
              desc.innerHTML = `Autorizar pausa/reanudación del módulo <b>${seccionPendientePausa}</b>:`;
          } else if (accion === 'pausar_global') {
              desc.innerHTML = `Autorizar <b>pausa/reanudación GLOBAL</b> para todos los módulos de la clase:`;
          } else {
              desc.innerHTML = `Autorizar el <b>reseteo completo</b> con la cuenta docente:`;
          }

          modal.classList.add('active');
      }

      function cerrarModalPassword() {
          document.getElementById('passwordModal').classList.remove('active');
      }

      function handleModalKeydown(e) {
          if (e.key === 'Escape') cerrarModalPassword();
      }

      async function confirmarAccionProfesor() {
          const autorizado = await window.autorizarDocenteFirebase?.();
          if (autorizado) {
              const accionConfirmada = tipoAccionModal;
              const sectionIdConfirmada = seccionPendientePausa;

              cerrarModalPassword();

              if (accionConfirmada === 'global_reset') {
                  resetearSistemaCompleto();
              } else if (accionConfirmada === 'unlock_current') {
                  desbloquearEjercicioActual();
              } else if (accionConfirmada === 'unlock_all') {
                  desbloquearTodosEjercicios();
              } else if (accionConfirmada === 'unlock_screen') {
                  const estudianteUid = window.firebaseCurrentUser?.uid;
                  if (!estudianteUid) {
                      alert('No se pudo identificar al estudiante para registrar el desbloqueo.');
                      return;
                  }
                  const motivoIngresado = prompt(
                      'Indicá el motivo del desbloqueo para el historial de auditoría:',
                      'Desbloqueo autorizado presencialmente por el docente'
                  );
                  if (motivoIngresado === null) return;
                  const motivo = motivoIngresado.trim() || 'Desbloqueo autorizado presencialmente por el docente';
                  const nombre = document.getElementById('studentName')?.value?.trim() || '';
                  const desbloqueado = await window.desbloquearPantallaEstudianteFirebase?.(
                      estudianteUid,
                      { motivo, nombre }
                  );
                  if (!desbloqueado) {
                      alert('No se pudo registrar el desbloqueo. La pantalla continuará bloqueada.');
                      return;
                  }
                  pantallaBloqueada = false;
                  pantallaBloqueadaEn = "";
                  pantallaBloqueadaSeccion = "";
                  removeLocalStorage('app_screen_locked_at');
                  removeLocalStorage('app_screen_locked_section');
                  aplicarBloqueoInterfazEstudiante(false);
                  alert('Pantalla desbloqueada. El contador y el historial docente fueron actualizados.');
              } else if (accionConfirmada === 'pausar_modulo' && sectionIdConfirmada) {
                  togglePausaModulo(sectionIdConfirmada);
              } else if (accionConfirmada === 'pausar_global') {
                  togglePausaGlobal();
              } else if (accionConfirmada === 'reset_contador_salidas') {
                  reiniciarContadorSalidasProfesor();
              } else if (accionConfirmada === 'panel_profesor') {
                  abrirPanelProfesor();
              } else if (accionConfirmada === 'editor_desafios') {
                  abrirEditorDesafiosFirebase();
              }
              seccionPendientePausa = null;
          } else {
              alert("No hay una cuenta docente autorizada. Iniciá sesión con la cuenta institucional o verificá los permisos de Firebase.");
          }
      }

      window.addEventListener('keydown', event => {
          const atajoFinClase = event.ctrlKey && event.altKey && !event.shiftKey && event.key.toLowerCase() === 'f';
          if (atajoFinClase) {
              event.preventDefault();
              if (event.repeat) return;
              window.finalizarClaseFirebase?.().then(finalizada => {
                  if (finalizada) {
                      aplicarEstadoInicioClase(false, {
                          finalizadaPor: window.firebaseTeacherUser?.email || window.firebaseCurrentUser?.email || "docente autorizado"
                      });
                      alert("Clase finalizada. Todos los estudiantes volvieron al estado de espera.");
                  }
              });
              return;
          }
          const atajoInicioClase = event.ctrlKey && event.altKey && !event.shiftKey && event.key.toLowerCase() === 'c';
          if (atajoInicioClase) {
              event.preventDefault();
              if (event.repeat) return;
              window.iniciarClaseFirebase?.().then(iniciada => {
                  if (iniciada) {
                      aplicarEstadoInicioClase(true, {
                          iniciadaPor: window.firebaseTeacherUser?.email || window.firebaseCurrentUser?.email || "docente autorizado"
                      });
                      alert("Clase iniciada. Los estudiantes conectados ya pueden comenzar.");
                  }
              });
              return;
          }
          const modal = document.getElementById('passwordModal');
          if (event.key === 'Escape' && modal?.classList.contains('active')) {
              event.preventDefault();
              cerrarModalPassword();
              return;
          }
          const atajoDocente = event.ctrlKey && event.altKey && event.shiftKey && event.key.toLowerCase() === 'p';
          if (!atajoDocente) return;
          event.preventDefault();
          if (!modal?.classList.contains('active')) {
              solicitarAccionProfesor('panel_profesor');
          }
          confirmarAccionProfesor();
      });

      async function reiniciarContadorSalidasProfesor() {
          const autorizado = await window.esDocenteAutorizadoFirebase?.();
          if (!autorizado) {
              alert("Solo una cuenta docente autorizada puede reiniciar el contador.");
              return;
          }
          if (!confirm("El contador visible volverá a cero. El historial de cambios de pestaña, las justificaciones y la revisión docente se conservarán. ¿Continuar?")) {
              return;
          }
          const cantidadAnterior = totalSalidasPestana;
          totalSalidasPestana = 0;
          salidaActivaPestana = null;
          setLocalStorage('app_blur_count', totalSalidasPestana);
          setLocalStorage('app_tab_events', JSON.stringify(eventosSalidasPestana));
          document.getElementById('blurCount').innerText = totalSalidasPestana;
          const hayPendientes = eventosSalidasPestana.some(evento => !evento.justificacion);
          document.getElementById('btnJustificarSalida').style.display = hayPendientes ? 'inline-flex' : 'none';
          await guardarAhoraFirebase();
          alert(`Contador reiniciado: ${cantidadAnterior} cambio(s) pasaron a 0. El historial anterior continúa disponible para el profesor.`);
      }

      function desbloquearEjercicioActual() {
          const sectionId = seccionActivaActual;
          if (!actividadesFinalizadas[sectionId]) {
              alert("ℹ️ Este ejercicio ya se encuentra desbloqueado y activo.");
              return;
          }

          delete actividadesFinalizadas[sectionId];
          removeLocalStorage(`finalized_${sectionId}`);
          removeLocalStorage(`preview_count_${sectionId}`);
          delete historialResultados[sectionId];
          contadorPrevisualizaciones[sectionId] = 0;

          const editor = document.getElementById(`editor-${sectionId}`);
          actualizarBloqueoEditorEstudiante(sectionId);

          ['run', 'preview', 'ai', 'reset', 'pause'].forEach(btn => {
              const el = document.getElementById(`btn-${btn}-${sectionId}`);
              if (el) el.disabled = false;
          });
          document.querySelectorAll(`#${CSS.escape(sectionId)} [data-ai-editor-action]`).forEach(control => {
              control.disabled = false;
          });
          actualizarMetricasEditor(sectionId);
          actualizarEstadoEditorEstudiante(sectionId, "idle", "Actividad desbloqueada");

          const btnPreview = document.getElementById(`btn-preview-${sectionId}`);
          if (btnPreview) btnPreview.innerText = `Consultar Nota Previa (3 usos)`;

          const feedbackBox = document.getElementById(`ai-feedback-${sectionId}`);
          if (feedbackBox) feedbackBox.classList.remove('active');

          const navBtn = document.getElementById(`nav-btn-${sectionId}`);
          if (navBtn) {
              const statusIcon = navBtn.querySelector('.status-icon');
              if (statusIcon) statusIcon.remove();
          }

          tiemposRestantes[sectionId] = TIEMPO_MAXIMO_SEGUNDOS;
          removeLocalStorage(`timer_${sectionId}`);
          actualizarDisplayTiempo(sectionId);

          actualizarProgreso();
          alert(`🔓 ¡El ejercicio actual (${sectionId}) ha sido desbloqueado con éxito por el profesor!`);
      }

      function desbloquearTodosEjercicios() {
          seccionesData.forEach(sec => {
              delete actividadesFinalizadas[sec.id];
              removeLocalStorage(`finalized_${sec.id}`);
              removeLocalStorage(`preview_count_${sec.id}`);
              delete historialResultados[sec.id];
              contadorPrevisualizaciones[sec.id] = 0;

              const editor = document.getElementById(`editor-${sec.id}`);
              actualizarBloqueoEditorEstudiante(sec.id);

              ['run', 'preview', 'ai', 'reset', 'pause'].forEach(btn => {
                  const el = document.getElementById(`btn-${btn}-${sec.id}`);
                  if (el) el.disabled = false;
              });
              document.querySelectorAll(`#${CSS.escape(sec.id)} [data-ai-editor-action]`).forEach(control => {
                  control.disabled = false;
              });
              actualizarMetricasEditor(sec.id);
              actualizarEstadoEditorEstudiante(sec.id, "idle", "Actividad desbloqueada");

              const btnPreview = document.getElementById(`btn-preview-${sec.id}`);
              if (btnPreview) btnPreview.innerText = `Consultar Nota Previa (3 usos)`;

              const feedbackBox = document.getElementById(`ai-feedback-${sec.id}`);
              if (feedbackBox) feedbackBox.classList.remove('active');

              const navBtn = document.getElementById(`nav-btn-${sec.id}`);
              if (navBtn) {
                  const statusIcon = navBtn.querySelector('.status-icon');
                  if (statusIcon) statusIcon.remove();
              }

              tiemposRestantes[sec.id] = TIEMPO_MAXIMO_SEGUNDOS;
              removeLocalStorage(`timer_${sec.id}`);
              actualizarDisplayTiempo(sec.id);
          });

          actualizarProgreso();
          alert("🔓 ¡Todos los ejercicios de la plataforma han sido desbloqueados con éxito!");
      }

      function togglePausaModulo(sectionId) {
          const btnPause = document.getElementById(`btn-pause-${sectionId}`);
          const banner = document.getElementById(`pause-banner-${sectionId}`);
          const editor = document.getElementById(`editor-${sectionId}`);

          modulosPausados[sectionId] = !modulosPausados[sectionId];

          if (modulosPausados[sectionId]) {
              if (cronometrosActivos[sectionId]) {
                  clearInterval(cronometrosActivos[sectionId]);
                  cronometrosActivos[sectionId] = null;
              }

              if (btnPause) {
                  btnPause.innerHTML = `<i class="fa-solid fa-play"></i> Reanudar (Profe)`;
                  btnPause.classList.remove('btn-warning');
                  btnPause.classList.add('btn-success');
              }

              if (banner) banner.classList.add('active');
              if (editor) editor.disabled = true;

              ['run', 'preview', 'ai', 'reset'].forEach(btn => {
                  const el = document.getElementById(`btn-${btn}-${sectionId}`);
                  if (el) el.disabled = true;
              });
              document.querySelectorAll(`#${CSS.escape(sectionId)} [data-ai-editor-action]`).forEach(control => {
                  control.disabled = true;
              });

              alert(`⏸️ Cronómetro y edición pausados por el profesor para el módulo ${sectionId}.`);
          } else {
              if (btnPause) {
                  btnPause.innerHTML = `<i class="fa-solid fa-pause"></i> Pausar (Profe)`;
                  btnPause.classList.remove('btn-success');
                  btnPause.classList.add('btn-warning');
              }

              if (banner) banner.classList.remove('active');

              if (!actividadesFinalizadas[sectionId]) {
                  actualizarBloqueoEditorEstudiante(sectionId);
                  ['run', 'preview', 'ai', 'reset'].forEach(btn => {
                      const el = document.getElementById(`btn-${btn}-${sectionId}`);
                      if (el) el.disabled = false;
                  });
                  document.querySelectorAll(`#${CSS.escape(sectionId)} [data-ai-editor-action]`).forEach(control => {
                      control.disabled = false;
                  });
                  if (
                      moduloCronometroEnCurso === sectionId &&
                      seccionActivaActual === sectionId
                  ) {
                      iniciarCronometro(sectionId);
                  }
              }

              alert(`▶️ Cronómetro y edición reanudados para el módulo ${sectionId}.`);
          }
      }

      function establecerPausaGlobal(nuevoEstadoPausa, mostrarAviso = true) {
          cronometrosPausadosPorDocente = Boolean(nuevoEstadoPausa);
          const pausaEfectiva = cronometrosPausadosPorDocente || cronometrosPausadosIndividualmente;
          seccionesData.forEach(sec => {
              modulosPausados[sec.id] = pausaEfectiva;
              const btnPause = document.getElementById(`btn-pause-${sec.id}`);
              const banner = document.getElementById(`pause-banner-${sec.id}`);
              const editor = document.getElementById(`editor-${sec.id}`);

              if (pausaEfectiva) {
                  if (cronometrosActivos[sec.id]) {
                      clearInterval(cronometrosActivos[sec.id]);
                      cronometrosActivos[sec.id] = null;
                  }
                  if (btnPause) {
                      btnPause.innerHTML = `<i class="fa-solid fa-play"></i> Reanudar (Profe)`;
                      btnPause.className = "btn btn-success";
                  }
                  if (banner) banner.classList.add('active');
                  if (editor) editor.disabled = true;
                  ['run', 'preview', 'ai', 'reset'].forEach(btn => {
                      const el = document.getElementById(`btn-${btn}-${sec.id}`);
                      if (el) el.disabled = true;
                  });
                  document.querySelectorAll(`#${CSS.escape(sec.id)} [data-ai-editor-action]`).forEach(control => {
                      control.disabled = true;
                  });
              } else {
                  if (btnPause) {
                      btnPause.innerHTML = `<i class="fa-solid fa-pause"></i> Pausar (Profe)`;
                      btnPause.className = "btn btn-warning";
                  }
                  if (banner) banner.classList.remove('active');
                  if (!actividadesFinalizadas[sec.id]) {
                      actualizarBloqueoEditorEstudiante(sec.id);
                      ['run', 'preview', 'ai', 'reset'].forEach(btn => {
                          const el = document.getElementById(`btn-${btn}-${sec.id}`);
                          if (el) el.disabled = false;
                      });
                      document.querySelectorAll(`#${CSS.escape(sec.id)} [data-ai-editor-action]`).forEach(control => {
                          control.disabled = false;
                      });
                  }
              }
          });
          if (
              !pausaEfectiva &&
              moduloCronometroEnCurso &&
              moduloCronometroEnCurso === seccionActivaActual
          ) {
              iniciarCronometro(moduloCronometroEnCurso);
          }
          actualizarBotonPausaCronometros();
          if (mostrarAviso) {
              alert(cronometrosPausadosPorDocente
                  ? "⏸️ Pausa Global Activada: Se han congelado los cronómetros y editores de todos los módulos."
                  : "▶️ Pausa Global Desactivada: Se han reanudado todos los módulos activos.");
          }
      }

      function togglePausaGlobal() {
          establecerPausaGlobal(!cronometrosPausadosPorDocente, true);
      }

      function actualizarBotonPausaCronometros() {
          const pausar = document.getElementById('btnPausarCronometrosTodosProfesor');
          const continuar = document.getElementById('btnContinuarCronometrosTodosProfesor');
          const reiniciar = document.getElementById('btnReiniciarCronometrosTodosProfesor');
          const claseActiva = Boolean(claseHabilitada);
          if (pausar) {
              pausar.disabled = !claseActiva || cronometrosPausadosPorDocente;
              pausar.setAttribute('aria-pressed', String(cronometrosPausadosPorDocente));
              pausar.title = !claseActiva
                  ? 'Primero iniciá la clase'
                  : cronometrosPausadosPorDocente
                  ? 'Los cronómetros de todos ya están pausados'
                  : 'Pausar los cronómetros y la edición de todos los estudiantes';
          }
          if (continuar) {
              continuar.disabled = !claseActiva || !cronometrosPausadosPorDocente;
              continuar.setAttribute('aria-pressed', String(!cronometrosPausadosPorDocente));
              continuar.title = !claseActiva
                  ? 'Primero iniciá la clase'
                  : cronometrosPausadosPorDocente
                  ? 'Continuar los cronómetros y la edición de todos los estudiantes'
                  : 'Los cronómetros de todos ya están activos';
          }
          if (reiniciar) {
              reiniciar.disabled = !claseActiva;
              reiniciar.title = claseActiva
                  ? 'Reiniciar a 40 minutos los módulos activos de todos los estudiantes'
                  : 'Primero iniciá la clase';
          }
      }

      function reiniciarCronometrosLocales() {
          seccionesData.forEach(sec => {
              if (actividadesFinalizadas[sec.id]) return;
              if (cronometrosActivos[sec.id]) {
                  clearInterval(cronometrosActivos[sec.id]);
                  cronometrosActivos[sec.id] = null;
              }
              tiemposRestantes[sec.id] = TIEMPO_MAXIMO_SEGUNDOS;
              setLocalStorage(`timer_${sec.id}`, TIEMPO_MAXIMO_SEGUNDOS);
              actualizarDisplayTiempo(sec.id);
          });
          moduloCronometroEnCurso = null;
      }

      function aplicarControlCronometrosDocente(datos = {}) {
          establecerPausaGlobal(Boolean(datos.cronometrosPausados), false);
          const reinicioId = String(datos.cronometrosReinicioId || '');
          const ultimoReinicio = getLocalStorage('app_last_timer_reset') || '';
          if (!reinicioId || reinicioId === ultimoReinicio) return;
          reiniciarCronometrosLocales();
          setLocalStorage('app_last_timer_reset', reinicioId);
          const responsable = datos.cronometrosActualizadosPor
              ? ` por ${datos.cronometrosActualizadosPor}`
              : '';
          alert(`El docente reinició los cronómetros a 40:00${responsable}.`);
      }

      function aplicarControlCronometroIndividual(datos = {}) {
          cronometrosPausadosIndividualmente = Boolean(datos.pausado);
          establecerPausaGlobal(cronometrosPausadosPorDocente, false);
          const reinicioId = String(datos.reinicioId || '');
          const ultimoReinicio = getLocalStorage('app_last_individual_timer_reset') || '';
          if (!reinicioId || reinicioId === ultimoReinicio) return;
          reiniciarCronometrosLocales();
          setLocalStorage('app_last_individual_timer_reset', reinicioId);
          const responsable = datos.actualizadoPor ? ` por ${datos.actualizadoPor}` : '';
          alert(`Tu cronómetro fue reiniciado a 40:00${responsable}.`);
      }

      function resetearSistemaCompleto() {
          actividadesFinalizadas = {};
          contadorPrevisualizaciones = {};
          totalSalidasPestana = 0;
          eventosSalidasPestana = [];
          salidaActivaPestana = null;
          revisionSalidasActual = {
              estado: "pendiente",
              penalizacion: 0,
              motivo: "",
              notaConfirmada: false,
              notaFinalDocente: null,
              notaConfirmadaValor: null,
              notaCalculadaAlConfirmar: null,
              notaModificadaManualmente: false
          };
          removeLocalStorage('app_blur_count');
          removeLocalStorage('app_tab_events');
          document.getElementById('blurCount').innerText = '0';
          document.getElementById('btnJustificarSalida').style.display = 'none';

          seccionesData.forEach(sec => {
              removeLocalStorage(`finalized_${sec.id}`);
              removeLocalStorage(`preview_count_${sec.id}`);
              removeLocalStorage(`timer_${sec.id}`);
              tiemposRestantes[sec.id] = TIEMPO_MAXIMO_SEGUNDOS;
              modulosPausados[sec.id] = false;
              if(cronometrosActivos[sec.id]) {
                  clearInterval(cronometrosActivos[sec.id]);
                  cronometrosActivos[sec.id] = null;
              }
              actualizarDisplayTiempo(sec.id);

              const banner = document.getElementById(`pause-banner-${sec.id}`);
              if (banner) banner.classList.remove('active');

              const editor = document.getElementById(`editor-${sec.id}`);
              actualizarBloqueoEditorEstudiante(sec.id);

              ['run', 'preview', 'ai', 'reset', 'pause'].forEach(btn => {
                  const el = document.getElementById(`btn-${btn}-${sec.id}`);
                  if (el) el.disabled = false;
              });
              const btnPause = document.getElementById(`btn-pause-${sec.id}`);
              if (btnPause) {
                  btnPause.innerHTML = `<i class="fa-solid fa-pause"></i> Pausar (Profe)`;
                  btnPause.className = "btn btn-warning";
              }

              const consoleBox = document.getElementById(`console-${sec.id}`);
              if (consoleBox) consoleBox.innerText = '// Ejercicio desbloqueado.';

              const navBtn = document.getElementById(`nav-btn-${sec.id}`);
              if (navBtn) {
                  const statusIcon = navBtn.querySelector('.status-icon');
                  if (statusIcon) statusIcon.remove();
              }
          });
          actualizarProgreso();
          programarGuardadoFirebase();
          alert("Sistema, actividades y registro de cambios de pestaña reiniciados.");
      }

      function actualizarIconoEstado(sectionId, esExitoso) {
          const navBtn = document.getElementById(`nav-btn-${sectionId}`);
          if (navBtn) {
              let statusIcon = navBtn.querySelector('.status-icon');
              if (!statusIcon) {
                  statusIcon = document.createElement('i');
                  statusIcon.className = 'fa-solid fa-circle-check status-icon';
                  navBtn.appendChild(statusIcon);
              }
              statusIcon.style.color = esExitoso ? 'var(--success)' : 'var(--danger)';
          }
      }

      function restablecerCodigo(sectionId) {
          if (!claseHabilitada) return;
          if (actividadesFinalizadas[sectionId] || modulosPausados[sectionId]) return;

          if (confirm("¿Estás seguro de restablecer este ejercicio?")) {
              const sec = seccionesData.find(s => s.id === sectionId);
              if (sec) {
                  document.getElementById(`editor-${sectionId}`).value = sec.initialCode;
                  document.getElementById(`editor-${sectionId}`).dispatchEvent(new Event('input', { bubbles: true }));
                  document.getElementById(`console-${sectionId}`).innerText = '// Código restablecido.';
                  document.getElementById(`ai-feedback-${sectionId}`).classList.remove('active');
                  removeLocalStorage(`draft_editor-${sectionId}`);
                  delete historialResultados[sectionId];

                  const navBtn = document.getElementById(`nav-btn-${sectionId}`);
                  if (navBtn) {
                      const statusIcon = navBtn.querySelector('.status-icon');
                      if (statusIcon) statusIcon.remove();
                  }
                  actualizarProgreso();
                  actualizarMetricasEditor(sectionId);
                  actualizarEstadoEditorEstudiante(sectionId, "idle", "Código inicial restaurado");
              }
          }
      }

      async function reiniciarSesionEstudiante() {
          if (confirm("⚠️ ¿Iniciar nueva sesión? Se cerrará la cuenta de Google y se borrará el avance local de este equipo.")) {
              if (window.cerrarSesionGoogle) await window.cerrarSesionGoogle();
              else window.location.reload();
          }
      }

      function switchSection(sectionId) {
          Object.keys(cronometrosActivos).forEach(id => {
              if (!cronometrosActivos[id]) return;
              clearInterval(cronometrosActivos[id]);
              cronometrosActivos[id] = null;
          });
          moduloCronometroEnCurso = null;
          seccionActivaActual = sectionId;
          document.querySelectorAll('.section-card').forEach(card => card.classList.remove('active'));
          document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
          document.querySelectorAll('.nav-item').forEach(item => item.setAttribute('aria-current', 'false'));

          const targetCard = document.getElementById(sectionId);
          const targetNav = document.getElementById(`nav-btn-${sectionId}`);

          if (targetCard && targetNav) {
              targetCard.classList.add('active');
              targetNav.classList.add('active');
              targetNav.setAttribute('aria-current', 'page');
              const data = seccionesData.find(s => s.id === sectionId);
              if (data) document.getElementById('currentTitle').innerText = data.title;
          }
          actualizarContextoExtensionSeguimiento();
          programarGuardadoFirebase();
          window.dispatchEvent(new CustomEvent("seccion-estudiante-cambiada", {
              detail: { sectionId }
          }));
      }

      function actualizarProgreso() {
          const finalizadasCount = Object.keys(actividadesFinalizadas).length;
          const porcentaje = Math.round((finalizadasCount / seccionesData.length) * 100);
          document.getElementById('progressBar').style.width = `${porcentaje}%`;
          document.getElementById('progressBarContainer')?.setAttribute('aria-valuenow', String(porcentaje));
          document.getElementById('progressText').innerText = `Progreso: ${porcentaje}% (${finalizadasCount}/${seccionesData.length} finalizadas)`;
      }

      async function ejecutarCodigoAislado(code) {
          const workerSource = `
              const serializar = valor => {
                  if (typeof valor !== "object" || valor === null) return String(valor);
                  try { return JSON.stringify(valor, null, 2); }
                  catch { return "[Objeto circular o no serializable]"; }
              };
              const bloquearRed = () => { throw new Error("El acceso a red no está permitido en los ejercicios."); };
              self.fetch = bloquearRed;
              self.XMLHttpRequest = undefined;
              self.WebSocket = undefined;
              self.EventSource = undefined;
              self.importScripts = bloquearRed;
              self.onmessage = event => {
                  const logs = [];
                  const consola = {
                      log: (...args) => logs.push("[LOG]: " + args.map(serializar).join(" ")),
                      info: (...args) => logs.push("[INFO]: " + args.map(serializar).join(" ")),
                      warn: (...args) => logs.push("[AVISO]: " + args.map(serializar).join(" ")),
                      error: (...args) => logs.push("[ERROR]: " + args.map(serializar).join(" "))
                  };
                  try {
                      const ejecutar = new Function("console", '"use strict";\\n' + event.data.code);
                      ejecutar(consola);
                      self.postMessage({ ok: true, logs });
                  } catch (error) {
                      self.postMessage({ ok: false, logs, error: error?.message || String(error) });
                  }
              };
          `;
          try {
              return await new Promise((resolve, reject) => {
                  const blob = new Blob([workerSource], { type: "text/javascript" });
                  const workerUrl = URL.createObjectURL(blob);
                  const worker = new Worker(workerUrl);
                  const timeout = setTimeout(() => {
                      worker.terminate();
                      URL.revokeObjectURL(workerUrl);
                      reject(new Error("La ejecución superó el límite de 2 segundos."));
                  }, 2000);

                  worker.onmessage = event => {
                      clearTimeout(timeout);
                      worker.terminate();
                      URL.revokeObjectURL(workerUrl);
                      resolve(event.data);
                  };
                  worker.onerror = event => {
                      clearTimeout(timeout);
                      worker.terminate();
                      URL.revokeObjectURL(workerUrl);
                      reject(new Error(event.message || "Error en el entorno aislado."));
                  };
                  worker.postMessage({ code });
              });
          } catch (error) {
              return { ok: false, logs: [], error: error.message };
          }
      }

      function actualizarMetricasEditor(sectionId) {
          const editor = document.getElementById(`editor-${sectionId}`);
          const indicador = document.getElementById(`editor-metrics-${sectionId}`);
          if (!editor || !indicador) return;
          const texto = editor.value || "";
          const lineas = texto ? texto.split(/\r?\n/).length : 0;
          indicador.textContent = `${lineas} línea${lineas === 1 ? '' : 's'} · ${texto.length} caracteres`;
      }

      function actualizarEstadoEditorEstudiante(sectionId, estado = "idle", texto = "") {
          const indicador = document.getElementById(`editor-state-${sectionId}`);
          if (!indicador) return;
          const configuracion = {
              idle: ["fa-pen", texto || "Listo para programar"],
              dirty: ["fa-circle", texto || "Cambios sin ejecutar"],
              running: ["fa-spinner fa-spin", texto || "Ejecutando..."],
              success: ["fa-circle-check", texto || "Ejecución correcta"],
              error: ["fa-triangle-exclamation", texto || "Revisá el error"],
              ai: ["fa-wand-magic-sparkles", texto || "La IA está analizando"]
          };
          const [icono, etiqueta] = configuracion[estado] || configuracion.idle;
          indicador.className = `student-editor-state ${estado}`;
          indicador.innerHTML = `<i class="fa-solid ${icono}"></i> ${escaparTextoAnalista(etiqueta)}`;
      }

      function alternarModoEnfoque(sectionId, boton = null) {
          const seccion = document.getElementById(sectionId);
          if (!seccion) return;
          const activo = !seccion.classList.contains("student-focus-mode");
          seccion.classList.toggle("student-focus-mode", activo);
          if (boton) {
              boton.setAttribute("aria-pressed", String(activo));
              boton.classList.toggle("active", activo);
              boton.innerHTML = activo
                  ? '<i class="fa-solid fa-compress"></i><span>Ver todo</span>'
                  : '<i class="fa-solid fa-expand"></i><span>Enfoque</span>';
              boton.title = activo
                  ? "Volver a mostrar teoría y herramientas de comprensión"
                  : "Ocultar temporalmente teoría y ayudas";
          }
          document.querySelector(`#${CSS.escape(sectionId)} .student-coding-workspace`)?.scrollIntoView({
              behavior: "smooth",
              block: "start"
          });
      }

      function alternarTutorProgramacion(sectionId, boton = null) {
          const seccion = document.getElementById(sectionId);
          const columna = seccion?.querySelector('.student-ai-column');
          const espacio = seccion?.querySelector('.student-coding-workspace');
          if (!columna || !espacio) return;
          const minimizar = !columna.classList.contains('is-minimized');
          columna.classList.toggle('is-minimized', minimizar);
          espacio.classList.toggle('tutor-minimized', minimizar);
          setLocalStorage(`ai_tutor_minimized_${sectionId}`, String(minimizar));
          const control = boton || columna.querySelector('.ai-chat-minimize');
          if (control) {
              const accion = minimizar
                  ? 'Restaurar Tutor de programación'
                  : 'Minimizar Tutor de programación';
              control.setAttribute('aria-expanded', String(!minimizar));
              control.title = accion;
              control.innerHTML = `
                  <i class="fa-solid ${minimizar ? 'fa-chevron-left' : 'fa-chevron-right'}"></i>
                  <span class="sr-only">${accion}</span>`;
          }
          if (!minimizar) {
              columna.querySelector('.ai-chat-input')?.focus({ preventScroll: true });
          }
      }

      async function solicitarAyudaEditor(sectionId, modo, boton = null) {
          if (!claseHabilitada || actividadesFinalizadas[sectionId] || modulosPausados[sectionId]) return;
          const controles = [...document.querySelectorAll(`#${CSS.escape(sectionId)} [data-ai-editor-action]`)];
          controles.forEach(control => control.disabled = true);
          boton?.classList.add("is-loading");
          actualizarEstadoEditorEstudiante(sectionId, "ai", "Analizando tu código");
          try {
              await pedirPistaIA(sectionId, modo);
              const chat = document.getElementById(`ai-chat-${sectionId}`);
              chat?.classList.add("is-attention");
              setTimeout(() => chat?.classList.remove("is-attention"), 1400);
              document.getElementById(`ai-chat-input-${sectionId}`)?.focus({ preventScroll: true });
              const ejecucion = historialResultados[sectionId];
              actualizarEstadoEditorEstudiante(
                  sectionId,
                  ejecucion?.exito === true ? "success" : ejecucion?.exito === false ? "error" : "dirty",
                  "Pista disponible en el tutor"
              );
          } finally {
              boton?.classList.remove("is-loading");
              controles.forEach(control => {
                  control.disabled = Boolean(actividadesFinalizadas[sectionId] || modulosPausados[sectionId]);
              });
          }
      }

      async function ejecutarCodigo(sectionId) {
          if (!claseHabilitada) return;
          if (actividadesFinalizadas[sectionId] || modulosPausados[sectionId]) return;

          const editor = document.getElementById(`editor-${sectionId}`);
          const consoleBox = document.getElementById(`console-${sectionId}`);
          if (!editor || !consoleBox) return;
          const code = editor.value;

          actualizarEstadoEditorEstudiante(sectionId, "running");
          consoleBox.style.color = "#fbbf24";
          consoleBox.textContent = "// Ejecutando en un entorno aislado...";

          const resultado = await ejecutarCodigoAislado(code);

          const logs = Array.isArray(resultado.logs) ? resultado.logs : [];
          if (!resultado.ok) logs.push("[EXCEPCIÓN]: " + resultado.error);
          if (logs.length === 0) logs.push("// Ejecutado sin salida en consola.");
          consoleBox.style.color = resultado.ok ? "#10b981" : "#ef4444";
          consoleBox.innerText = logs.join("\n");

          const esExitoso = Boolean(resultado.ok);
          actualizarEstadoEditorEstudiante(
              sectionId,
              esExitoso ? "success" : "error",
              esExitoso ? "Código ejecutado correctamente" : "La consola encontró un error"
          );

          if(!historialResultados[sectionId]) historialResultados[sectionId] = {};
          historialResultados[sectionId].codigo = code;
          historialResultados[sectionId].salida = logs.join("\n");
          historialResultados[sectionId].error = resultado.error || "";
          historialResultados[sectionId].fecha = new Date().toLocaleString();
          historialResultados[sectionId].exito = esExitoso;
          const sec = seccionesData.find(s => s.id === sectionId);
          if (sec) {
              historialResultados[sectionId].evaluacionCodigo = evaluarCodigoPorEvidencias(
                  code,
                  sec,
                  { ok: esExitoso, logs, salida: logs.join("\n"), error: resultado.error || "" }
              );
              historialResultados[sectionId].notaCodigo = historialResultados[sectionId].evaluacionCodigo.nota;
          }
          programarGuardadoFirebase();
      }

      function normalizarEvaluacion(v) {
          return String(v || "")
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/\s+/g, " ")
              .trim();
      }

      function validarSintaxisCodigo(code) {
          try {
              new Function('"use strict";\n' + String(code || ""));
              return { valida: true, error: "" };
          } catch (error) {
              return { valida: false, error: error?.message || String(error) };
          }
      }

      function limpiarSalidaEvaluacion(valor) {
          return normalizarEvaluacion(String(valor || "")
              .replace(/\[(?:LOG|INFO|AVISO|ERROR|EXCEPCIÓN)\]:/gi, " ")
              .replace(/\/\/ ejecutado sin salida en consola\./gi, " ")
              .replace(/[{}[\]",'`]/g, " "));
      }

      function calcularSimilitudSalida(real, esperada) {
          const a = limpiarSalidaEvaluacion(real);
          const b = limpiarSalidaEvaluacion(esperada);
          if (!b) return a ? 0.75 : 1;
          if (!a) return 0;
          if (a === b || a.includes(b) || b.includes(a)) return 1;
          const tokensA = new Set(a.split(/[^a-z0-9_$.-]+/).filter(x => x.length > 1));
          const tokensB = new Set(b.split(/[^a-z0-9_$.-]+/).filter(x => x.length > 1));
          if (!tokensB.size) return a ? 0.65 : 0;
          const interseccion = [...tokensB].filter(x => tokensA.has(x)).length;
          const union = new Set([...tokensA, ...tokensB]).size || 1;
          const coberturaEsperada = interseccion / tokensB.size;
          const jaccard = interseccion / union;
          return Math.max(0, Math.min(1, coberturaEsperada * 0.7 + jaccard * 0.3));
      }

      function evaluarCodigoPorEvidencias(code, sec, resultadoEjecucion) {
          const fuente = String(code || "");
          const limpia = normalizarEvaluacion(fuente);
          const sintaxis = validarSintaxisCodigo(fuente);
          const ejecucionIntentada = resultadoEjecucion !== null && resultadoEjecucion !== undefined;
          const salidaReal = resultadoEjecucion?.salida ||
              (Array.isArray(resultadoEjecucion?.logs) ? resultadoEjecucion.logs.join("\n") : "");
          const salidaEsperada = resultadoEjecucion?.salidaEsperada || "";
          const error = resultadoEjecucion?.error ||
              (ejecucionIntentada && !resultadoEjecucion?.ok ? "Error de ejecución" : "");
          const esPlantilla = !fuente.trim() ||
              (sec?.initialCode && fuente.trim() === String(sec.initialCode).trim());
          const lineas = fuente.split(/\r?\n/);
          const lineasUtiles = lineas.filter(linea => {
              const texto = linea.trim();
              return texto && !texto.startsWith("//") && !/^[{}[\]();,]+$/.test(texto);
          });
          const instruccionesEstimadas = Math.max(
              lineasUtiles.length,
              (fuente.match(/;/g) || []).length,
              (fuente.match(/\b(if|switch|for|while|return|console\.(?:log|info|warn|error))\b/g) || []).length
          );
          const tienePendientes = /\b(TODO|FIXME)\b|completar|escrib[ií].*aqu[ií]|tu c[oó]digo/i.test(fuente);
          const declaraciones = [...fuente.matchAll(/\b(?:let|const|var)\s+([A-Za-z_$][\w$]*)/g)].map(x => x[1]);
          const declaracionesRepetidas = [...new Set(declaraciones.filter((x, i) => declaraciones.indexOf(x) !== i))];
          const nombresDescriptivos = declaraciones.length
              ? declaraciones.filter(x => x.length >= 3 && !/^(x|y|z|a|b|c|n|i|j|k|dato|valor)\d*$/i.test(x)).length / declaraciones.length
              : 0.6;
          const lineasMuyLargas = lineas.filter(x => x.length > 120).length;
          const usaVar = /\bvar\b/.test(fuente);
          const usaConstOLet = /\b(const|let)\b/.test(fuente);
          const complejidad = (fuente.match(/\b(if|switch|for|while|forEach|map|filter|reduce)\b/g) || []).length;

          const patrones = {
              "variable": /\b(let|const|var)\b/,
              "variables": /\b(let|const|var)\b/,
              "constante": /\bconst\b/,
              "constantes": /\bconst\b/,
              "funcion": /\bfunction\b|=>/,
              "funciones": /\bfunction\b|=>/,
              "condicion": /\bif\b|\bswitch\b|\?[^:]+:/,
              "condicional": /\bif\b|\bswitch\b|\?[^:]+:/,
              "bucle": /\b(for|while|do)\b|\.forEach\s*\(/,
              "ciclo": /\b(for|while|do)\b|\.forEach\s*\(/,
              "array": /\[[\s\S]*\]|\.map\s*\(|\.filter\s*\(|\.reduce\s*\(/,
              "arreglo": /\[[\s\S]*\]|\.map\s*\(|\.filter\s*\(|\.reduce\s*\(/,
              "objeto": /(?:const|let|var)\s+\w+\s*=\s*\{|Object\.(?:keys|values|entries|assign)\s*\(/,
              "objetos": /(?:const|let|var)\s+\w+\s*=\s*\{|Object\.(?:keys|values|entries|assign)\s*\(/,
              "console": /console\.(log|info|warn|error)\s*\(/,
              "salida": /console\.(log|info|warn|error)\s*\(/,
              "metodo": /\.[a-zA-Z_$][\w$]*\s*\(/,
              "parametro": /function\s*\w*\s*\([^)]*\)|(?:\([^)]*\)|[A-Za-z_$][\w$]*)\s*=>/,
              "return": /\breturn\b/,
              "retorno": /\breturn\b/,
              "template literal": /`[\s\S]*\$\{[\s\S]*\}[\s\S]*`/,
              "interpolacion": /`[\s\S]*\$\{[\s\S]*\}[\s\S]*`/
          };
          const conceptos = Array.isArray(sec?.conceptosDetectar) ? sec.conceptosDetectar : [];
          const referencia = normalizarEvaluacion(sec?.aiSolution || "");
          const palabrasClaveReferencia = [...new Set(
              (referencia.match(/\b(?:const|let|var|function|if|else|for|while|return|switch|map|filter|reduce|push|pop|shift|replace|trim|tolowercase|touppercase|typeof|prompt|localstorage|innertext|style)\b/g) || [])
          )];
          const nombresExigidos = [...new Set(
              String(sec?.exerciseDesc || "").match(/['"`]([A-Za-z_$][\w$]*)['"`]/g)?.map(x => x.slice(1, -1)) || []
          )];
          const estructurasReferenciaCumplidas = palabrasClaveReferencia.filter(token =>
              new RegExp(`\\b${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(limpia)
          );
          const nombresExigidosCumplidos = nombresExigidos.filter(nombre =>
              new RegExp(`\\b${nombre.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(fuente)
          );
          const coberturaReferencia = palabrasClaveReferencia.length
              ? estructurasReferenciaCumplidas.length / palabrasClaveReferencia.length
              : (referencia ? 0.65 : 0.5);
          const coberturaNombresExigidos = nombresExigidos.length
              ? nombresExigidosCumplidos.length / nombresExigidos.length
              : 1;
          const evidenciasConceptos = conceptos.map(concepto => {
              const nombre = String(concepto);
              const clave = normalizarEvaluacion(nombre);
              const clavePatron = Object.keys(patrones).find(k => clave === k || clave.includes(k));
              const palabras = clave.split(/[^a-z0-9]+/).filter(x => x.length >= 4);
              const patron = clavePatron
                  ? patrones[clavePatron]
                  : palabras.length
                      ? new RegExp(palabras.map(p => `\\b${p}\\b`).join("|"), "i")
                      : /$a/;
              const cumple = patron.test(limpia);
              return {
                  nombre,
                  cumple,
                  evidencia: cumple
                      ? `Se encontró una estructura compatible con “${nombre}”.`
                      : `No se encontró una estructura verificable para “${nombre}”.`
              };
          });
          const conceptosCumplidos = evidenciasConceptos.filter(x => x.cumple).length;
          const proporcionConceptos = evidenciasConceptos.length
              ? conceptosCumplidos / evidenciasConceptos.length
              : (lineasUtiles.length >= 2 ? 0.75 : 0.35);

          const puntajeSintaxis = esPlantilla ? 0 : (sintaxis.valida ? 1 : 0);
          const puntajeEjecucion = esPlantilla || !sintaxis.valida
              ? 0
              : ejecucionIntentada
                  ? (resultadoEjecucion?.ok ? 1 : 0)
                  : 0.45;
          const similitudSalida = salidaEsperada
              ? calcularSimilitudSalida(salidaReal, salidaEsperada)
              : (limpiarSalidaEvaluacion(salidaReal) ? 0.75 : (resultadoEjecucion?.ok ? 0.55 : 0));
          const puntajeComportamiento = esPlantilla || !sintaxis.valida || !resultadoEjecucion?.ok
              ? 0
              : similitudSalida;
          const suficiencia = Math.min(1, instruccionesEstimadas / Math.max(2, Math.min(6, conceptos.length + 1)));
          const puntajeEstructura = esPlantilla ? 0 : Math.max(0, Math.min(1,
              proporcionConceptos * 0.55 +
              suficiencia * 0.2 +
              coberturaReferencia * 0.15 +
              coberturaNombresExigidos * 0.1 +
              (complejidad || conceptos.length <= 1 ? 0.05 : 0)
          ));
          const puntajeCalidad = esPlantilla ? 0 : Math.max(0, Math.min(1,
              0.35 +
              (usaConstOLet ? 0.15 : 0) +
              nombresDescriptivos * 0.25 +
              (lineasMuyLargas === 0 ? 0.1 : 0) +
              (declaracionesRepetidas.length === 0 ? 0.1 : 0) +
              (!tienePendientes ? 0.05 : 0) -
              (usaVar ? 0.08 : 0)
          ));

          const criteriosDefinidos = Array.isArray(sec?.criteriosEvaluacion)
              ? sec.criteriosEvaluacion.filter(c => c && (c.criterio || c.indicador))
              : [];
          const criteriosBase = criteriosDefinidos.length ? criteriosDefinidos : [
              { criterio: "Sintaxis y ejecución", peso: 25, indicador: "El código es válido, se ejecuta sin errores y termina." },
              { criterio: "Requisitos del desafío", peso: 30, indicador: "Usa las estructuras y conceptos solicitados." },
              { criterio: "Comportamiento verificable", peso: 25, indicador: "La salida coincide razonablemente con el comportamiento de referencia." },
              { criterio: "Calidad y claridad", peso: 20, indicador: "La solución es legible, suficiente y evita problemas básicos de mantenimiento." }
          ];
          const obtenerResultadoCriterio = criterio => {
              const texto = normalizarEvaluacion(`${criterio.criterio} ${criterio.indicador}`);
              if (/sintaxis|compil/.test(texto)) {
                  return { proporcion: puntajeSintaxis * 0.4 + puntajeEjecucion * 0.6, evidencia: sintaxis.valida ? (resultadoEjecucion?.ok ? "Sintaxis válida y ejecución correcta." : "La sintaxis es válida, pero falta una ejecución correcta.") : `Error de sintaxis: ${sintaxis.error}` };
              }
              if (/ejec|error|funciona|termina/.test(texto)) {
                  return { proporcion: puntajeEjecucion, evidencia: resultadoEjecucion?.ok ? "La ejecución terminó sin excepciones." : (error || "Todavía no hay una ejecución correcta registrada.") };
              }
              if (/concept|consigna|requis|estructura solicit|contenido/.test(texto)) {
                  return { proporcion: proporcionConceptos * 0.75 + coberturaNombresExigidos * 0.25, evidencia: `${conceptosCumplidos}/${evidenciasConceptos.length || conceptos.length || 1} conceptos esperados detectados; nombres exigidos: ${nombresExigidosCumplidos.length}/${nombresExigidos.length || 0}.` };
              }
              if (/referencia|solucion esperada|correspondencia|implement/.test(texto)) {
                  return { proporcion: coberturaReferencia * 0.7 + coberturaNombresExigidos * 0.3, evidencia: `Estructuras clave de referencia: ${estructurasReferenciaCumplidas.length}/${palabrasClaveReferencia.length || 0}; identificadores exigidos: ${nombresExigidosCumplidos.length}/${nombresExigidos.length || 0}.` };
              }
              if (/salida|resultado|objetivo|comport|evidencia|prueba/.test(texto)) {
                  return { proporcion: puntajeComportamiento, evidencia: salidaEsperada ? `Coincidencia orientativa con la salida de referencia: ${Math.round(similitudSalida * 100)}%.` : "Se verificó la existencia de una salida, pero este módulo no define una salida de referencia automática." };
              }
              if (/clar|legib|orden|calidad|manten|nombre/.test(texto)) {
                  return { proporcion: puntajeCalidad, evidencia: declaracionesRepetidas.length ? `Hay declaraciones repetidas: ${declaracionesRepetidas.join(", ")}.` : "Se revisaron nombres, declaraciones, extensión de líneas y marcadores pendientes." };
              }
              return {
                  proporcion: puntajeEstructura * 0.45 + puntajeComportamiento * 0.35 + puntajeCalidad * 0.2,
                  evidencia: "Evaluado mediante requisitos, comportamiento y calidad del código."
              };
          };
          const totalPeso = criteriosBase.reduce((s, c) => s + (Number(c.peso) || 0), 0) || 100;
          const criterios = criteriosBase.map((c, i) => {
              const peso = (Number(c.peso) || 0) * 100 / totalPeso;
              const resultadoCriterio = obtenerResultadoCriterio(c);
              const proporcion = Math.max(0, Math.min(1, resultadoCriterio.proporcion));
              return {
                  id: c.id || `criterio-${i + 1}`,
                  nombre: c.criterio || `Criterio ${i + 1}`,
                  peso: Number(peso.toFixed(1)),
                  puntos: Number((peso * proporcion).toFixed(1)),
                  estado: proporcion >= 0.8 ? "cumplido" : (proporcion >= 0.45 ? "parcial" : "pendiente"),
                  evidencia: resultadoCriterio.evidencia
              };
          });

          const porcentajeBase = Math.max(0, Math.min(100, criterios.reduce((s, c) => s + c.puntos, 0)));
          let nota = Number((porcentajeBase / 10).toFixed(1));
          const limites = [];
          if (esPlantilla) {
              nota = 1;
              limites.push("Plantilla inicial o editor vacío: nota máxima 1.");
          } else if (!sintaxis.valida) {
              nota = Math.min(nota, 3);
              limites.push("Error de sintaxis: nota máxima 3.");
          } else if (ejecucionIntentada && !resultadoEjecucion?.ok) {
              nota = Math.min(nota, 4);
              limites.push("Error de ejecución: nota máxima 4.");
          } else if (!ejecucionIntentada) {
              nota = Math.min(nota, 6);
              limites.push("Sin ejecución comprobada: nota máxima 6.");
          }
          if (!esPlantilla && instruccionesEstimadas < 2) {
              nota = Math.min(nota, 5);
              limites.push("Código insuficiente para demostrar una solución completa: nota máxima 5.");
          }
          if (!esPlantilla && coberturaNombresExigidos < 0.5) {
              nota = Math.min(nota, 5);
              limites.push("Faltan identificadores o funciones expresamente solicitados en la consigna: nota máxima 5.");
          }
          if (!esPlantilla && referencia && coberturaReferencia < 0.45) {
              nota = Math.min(nota, 6);
              limites.push("La implementación no demuestra suficientes estructuras de la solución esperada: nota máxima 6.");
          }
          if (resultadoEjecucion?.ok && salidaEsperada && similitudSalida < 0.35) {
              nota = Math.min(nota, 6);
              limites.push("La salida difiere sustancialmente de la referencia: nota máxima 6.");
          }
          if (tienePendientes) {
              nota = Math.min(nota, 7);
              limites.push("Persisten marcadores de código pendiente: nota máxima 7.");
          }
          nota = Number(Math.max(1, Math.min(10, nota)).toFixed(1));
          const porcentaje = Number((nota * 10).toFixed(1));

          const fortalezas = [];
          const mejoras = [];
          if (sintaxis.valida && !esPlantilla) fortalezas.push("La sintaxis del código es válida.");
          else mejoras.push(sintaxis.error ? `Corregir la sintaxis: ${sintaxis.error}` : "Reemplazar la plantilla por una solución propia.");
          if (resultadoEjecucion?.ok) fortalezas.push("El código se ejecuta sin errores.");
          else mejoras.push(error ? `Corregir la ejecución: ${error}` : "Ejecutar el código antes de entregar.");
          if (conceptosCumplidos) fortalezas.push(`Se verificaron ${conceptosCumplidos}/${evidenciasConceptos.length || conceptos.length || 1} conceptos esperados.`);
          if (evidenciasConceptos.some(x => !x.cumple)) mejoras.push("Completar las estructuras que exige la consigna.");
          if (coberturaNombresExigidos < 1 && nombresExigidos.length) mejoras.push(`Incorporar los identificadores exigidos: ${nombresExigidos.filter(nombre => !nombresExigidosCumplidos.includes(nombre)).join(", ")}.`);
          if (referencia && coberturaReferencia < 0.75) mejoras.push("Comparar la estructura de tu solución con las acciones y métodos pedidos, sin copiar la referencia.");
          if (puntajeComportamiento >= 0.8) fortalezas.push("La salida coincide razonablemente con el comportamiento de referencia.");
          else if (salidaEsperada) mejoras.push("Revisar la salida: no coincide suficientemente con el comportamiento esperado.");
          if (puntajeCalidad < 0.65) mejoras.push("Mejorar nombres, declaraciones y organización del código.");

          return {
              nota,
              porcentaje,
              porcentajeBase: Number(porcentajeBase.toFixed(1)),
              criterios,
              fortalezas,
              mejoras,
              limites,
              advertencias: [
                  "Evaluación automática orientativa: el docente conserva la decisión final.",
                  ...limites
              ],
              ejecucion: {
                  intentada: ejecucionIntentada,
                  ok: Boolean(resultadoEjecucion?.ok),
                  salida: salidaReal,
                  salidaEsperada,
                  similitudSalida: Number(similitudSalida.toFixed(3)),
                  error: error || ""
              },
              sintaxis,
              conceptos: evidenciasConceptos,
              metricas: {
                  lineasUtiles: lineasUtiles.length,
                  instruccionesEstimadas,
                  sintaxis: puntajeSintaxis,
                  ejecucion: puntajeEjecucion,
                  requisitos: Number(proporcionConceptos.toFixed(3)),
                  referencia: Number(coberturaReferencia.toFixed(3)),
                  nombresExigidos: Number(coberturaNombresExigidos.toFixed(3)),
                  comportamiento: Number(puntajeComportamiento.toFixed(3)),
                  estructura: Number(puntajeEstructura.toFixed(3)),
                  calidad: Number(puntajeCalidad.toFixed(3))
              }
          };
      }

      function generarDiagnosticoIA(evaluacion, sec, resultadoEjecucion = null) {
          const ejecucion = resultadoEjecucion && typeof resultadoEjecucion === "object"
              ? {
                  ok: resultadoEjecucion.ok !== undefined
                      ? Boolean(resultadoEjecucion.ok)
                      : Boolean(resultadoEjecucion.exito),
                  error: resultadoEjecucion.error || "",
                  salida: resultadoEjecucion.salida || ""
              }
              : null;
          const criteriosPendientes = (evaluacion?.criterios || [])
              .filter(c => c.estado !== "cumplido")
              .map(c => `${c.nombre}: ${c.evidencia || "revisar este criterio"}`)
              .slice(0, 4);
          const conceptosPendientes = (evaluacion?.conceptos || [])
              .filter(c => !c.cumple)
              .map(c => c.nombre)
              .slice(0, 4);
          const pasos = [];
          if (!ejecucion) {
              pasos.push("Ejecutá el código con distintos datos y observá la consola.");
          } else if (!ejecucion.ok) {
              pasos.push(`Revisá el error de ejecución: ${ejecucion.error || "la consola indicó un problema"}.`);
          } else {
              pasos.push("La ejecución no muestra errores; ahora comprobá casos normales y casos límite.");
          }
          if (conceptosPendientes.length) {
              pasos.push(`Revisá la consigna para incorporar: ${conceptosPendientes.join(", ")}.`);
          }
          if (criteriosPendientes.length) {
              pasos.push(...criteriosPendientes);
          }
          if (!pasos.length) {
              pasos.push("La solución presenta evidencias suficientes. Justificá tus decisiones antes de entregar.");
          }
          const referencia = Number(evaluacion?.metricas?.referencia ?? 0);
          const nombres = Number(evaluacion?.metricas?.nombresExigidos ?? 1);
          if (referencia < 0.75 || nombres < 1) {
              pasos.push(`La correspondencia estricta todavía es incompleta: ${Math.round(referencia * 100)}% de estructuras clave y ${Math.round(nombres * 100)}% de identificadores exigidos.`);
          }
          return {
              resumen: evaluacion?.nota >= 8 && referencia >= 0.75 && nombres >= 1
                  ? "La solución muestra un avance sólido y evidencia la mayoría de los requisitos explícitos."
                  : evaluacion?.nota >= 5
                      ? "La solución es parcial: la nota considera requisitos explícitos, estructura, ejecución y comportamiento."
                      : "Todavía faltan evidencias importantes para considerar resuelto el desafío; la estimación se limitó por los requisitos ausentes.",
              pasos: pasos.slice(0, 5),
              preguntaGuia: sec?.preguntasSocraticas?.[0] ||
                  "¿Qué parte del código cambiarías primero para acercarte al objetivo y por qué?"
          };
      }

      function calcularNotaEstricta(code, sec, resultadoEjecucion) {
          return evaluarCodigoPorEvidencias(code, sec, resultadoEjecucion).nota;
      }

      function calcularNotaCombinada(notaCodigo, porcentajePreguntas, evaluacionCodigo = null) {
          const codigo = Math.max(0, Math.min(10, Number(notaCodigo) || 0));
          const preguntas = Math.max(0, Math.min(100, Number(porcentajePreguntas) || 0)) / 10;
          let nota = codigo * 0.7 + preguntas * 0.3;
          const sintaxisValida = evaluacionCodigo?.sintaxis?.valida !== false;
          const ejecucionCorrecta = evaluacionCodigo?.ejecucion?.ok !== false;
          const comportamiento = Number(evaluacionCodigo?.metricas?.comportamiento);
          if (!sintaxisValida) nota = Math.min(nota, 3);
          else if (!ejecucionCorrecta) nota = Math.min(nota, 4);
          else if (Number.isFinite(comportamiento) && comportamiento < 0.35) nota = Math.min(nota, 6);
          return Number(Math.max(1, Math.min(10, nota)).toFixed(1));
      }

      function previsualizarNotaIA(sectionId) {
          if (!claseHabilitada) return;
          if (actividadesFinalizadas[sectionId] || modulosPausados[sectionId]) return;

          let usos = contadorPrevisualizaciones[sectionId] || 0;
          if (usos >= 3) {
              alert("⚠️ Has alcanzado el límite máximo de 3 consultas de nota previa para este módulo.");
              return;
          }

          usos++;
          contadorPrevisualizaciones[sectionId] = usos;
          setLocalStorage(`preview_count_${sectionId}`, usos);

          const btnPreview = document.getElementById(`btn-preview-${sectionId}`);
          btnPreview.innerText = `Consultar Nota Previa (${3 - usos} usos)`;

          const editor = document.getElementById(`editor-${sectionId}`);
          const sec = seccionesData.find(s => s.id === sectionId);
          const code = editor.value.trim();
          const feedbackBox = document.getElementById(`ai-feedback-${sectionId}`);
          const studentCodeDisplay = document.getElementById(`ai-student-code-${sectionId}`);
          const feedbackText = document.getElementById(`ai-text-${sectionId}`);

          feedbackBox.classList.add('active');
          studentCodeDisplay.innerText = code;
          document.getElementById(`ai-ideal-code-${sectionId}`).innerText = "// (Oculto en previsualización parcial)";

          const evaluacion = evaluarCodigoPorEvidencias(code, sec, historialResultados[sectionId]?.exito === undefined ? null : {
              ok: Boolean(historialResultados[sectionId]?.exito),
              salida: historialResultados[sectionId]?.salida || "",
              error: historialResultados[sectionId]?.exito ? "" : "La ejecución todavía no fue validada."
          });
          let notaEstimada = evaluacion.nota;
          const diagnostico = generarDiagnosticoIA(evaluacion, sec, historialResultados[sectionId]);
          feedbackText.innerHTML =
              `<strong>Estimación orientativa (${usos}/3): ${notaEstimada}/10</strong>` +
              `<br>${escaparTextoAnalista(diagnostico.resumen)}` +
              `<br><strong>Próximos pasos:</strong><ol>${diagnostico.pasos.map(x => `<li>${escaparTextoAnalista(x)}</li>`).join("")}</ol>` +
              `<br><strong>Pregunta guía:</strong> ${escaparTextoAnalista(diagnostico.preguntaGuia)}` +
              `<br><small>La nota previa orienta tu revisión; no reemplaza la entrega ni la corrección docente.</small>`;
      }

      const preguntasSocraticas = [
          {
              respuestaAbierta: true,
              q: () => `Elegí una decisión concreta de tu código, nombrá la variable, condición, bucle o función involucrada y explicá qué problema resuelve. ¿Qué cambiaría en el resultado si la eliminaras o la reemplazaras?`
          },
          {
              respuestaAbierta: true,
              q: () => `Proponé un caso de prueba diferente del ejemplo de la consigna. Indicá la entrada, anticipá la salida y explicá qué parte de tu código permite obtener ese resultado.`
          },
          {
              respuestaAbierta: true,
              q: () => `Compará una diferencia concreta entre tu solución y la solución de referencia. Elegí un criterio —claridad, robustez, eficiencia o facilidad de mantenimiento— y defendé cuál decisión es más adecuada y en qué situación podría convenir la otra.`
          },
          {
              respuestaAbierta: true,
              q: () => `Identificá una suposición que hace tu código sobre los datos de entrada. Construí un caso límite que cuestione esa suposición y explicá cómo comprobarías o mejorarías el comportamiento del programa.`
          },
          {
              respuestaAbierta: true,
              q: () => `Imaginá que otro estudiante debe modificar tu programa sin preguntarte nada. Señalá la parte que podría resultarle más difícil de comprender y proponé una mejora concreta que conserve el comportamiento.`
          },
          {
              respuestaAbierta: true,
              q: () => `Tu programa produce la salida esperada, pero eso no demuestra por sí solo que la solución sea correcta. ¿Qué evidencias adicionales reunirías y qué error podría seguir oculto aunque el ejemplo funcione?`
          },
          {
              respuestaAbierta: true,
              q: () => `Si descubrís que el resultado correcto apareció por una coincidencia, describí cómo localizarías la causa, qué prueba usarías para confirmarla y qué modificación harías para evitar que vuelva a ocurrir.`
          },
          {
              respuestaAbierta: true,
              q: () => `Usando un ejemplo específico de tu código, explicá la diferencia entre “obtener la salida correcta” y construir una solución técnicamente sólida. Proponé una mejora y justificá qué calidad aporta.`
          }
      ];

      const analistaPlantillas = [
          {
              tipo: "ESTUDIANTE",
              q: code => `¿Cuál de las siguientes afirmaciones describe correctamente algo que aparece en el código que programaste?`,
              opciones: code => {
                  const snippets = extraerEvidencias(code);
                  return [
                      {t:`El código contiene: ${snippets[0] || "una instrucción ejecutable"}`, c:true},
                      {t:`El código contiene: ${snippets[1] || "una estructura declarativa"}`, c:true},
                      {t:"El código necesariamente utiliza una API externa aunque no aparezca en el código.", c:false},
                      {t:"El código no contiene ninguna instrucción ejecutable.", c:false}
                  ];
              }
          },
          {
              tipo: "ESTUDIANTE",
              q: code => `Observando tu código, ¿cuáles de estas características pueden identificarse realmente?`,
              opciones: code => {
                  const features = detectarCaracteristicas(code);
                  const correctas = features.filter(x => x.c).slice(0,2);
                  const falsas = [
                      "Utiliza una base de datos externa obligatoriamente.",
                      "Contiene una clase CSS con el mismo comportamiento que una función JavaScript."
                  ];
                  return [...correctas, ...falsas.map(t=>({t,c:false}))];
              }
          },
          {
              tipo: "ESTUDIANTE",
              q: code => `¿Qué afirmaciones son compatibles con la lógica de tu código entregado?`,
              opciones: code => generarAfirmacionesEstudiante(code)
          },
          {
              tipo: "IA",
              q: (code, ideal) => `Al comparar tu solución con la solución programada por la IA, ¿cuáles afirmaciones describen correctamente la solución ideal?`,
              opciones: (code, ideal) => generarAfirmacionesIA(ideal)
          },
          {
              tipo: "IA",
              q: (code, ideal) => `Respecto de la solución de IA mostrada en la evaluación, ¿qué elementos forman parte de su lógica?`,
              opciones: (code, ideal) => generarAfirmacionesIA(ideal)
          },
          {
              tipo: "COMPARACION",
              q: (code, ideal) => `Comparando ambos códigos, ¿qué afirmaciones son verdaderas?`,
              opciones: (code, ideal) => generarComparaciones(code, ideal)
          }
      ];

      function escaparTextoAnalista(s) {
          return String(s || "")
              .replace(/&/g,"&amp;").replace(/</g,"&lt;")
              .replace(/>/g,"&gt;").replace(/"/g,"&quot;");
      }

      const historialChatIA = {};

      function guardarChatIA(sectionId) {
          const mensajes = historialChatIA[sectionId] || [];
          setLocalStorage(`ai_chat_${sectionId}`, JSON.stringify(mensajes.slice(-20)));
      }

      function actualizarEstadoChatIA(sectionId, estado, texto) {
          const indicador = document.getElementById(`ai-chat-sync-${sectionId}`);
          if (!indicador) return;
          indicador.className = `ai-chat-sync ${estado || ""}`.trim();
          indicador.innerHTML = `<i class="fa-solid ${estado === "error" ? "fa-triangle-exclamation" : estado === "saving" ? "fa-cloud-arrow-up" : "fa-cloud"}"></i> ${escaparTextoAnalista(texto)}`;
      }

      function actualizarTodosEstadosChatIA(estado, texto) {
          seccionesData.forEach(sec => actualizarEstadoChatIA(sec.id, estado, texto));
      }

      function renderizarChatIA(sectionId) {
          const contenedor = document.getElementById(`ai-chat-messages-${sectionId}`);
          if (!contenedor) return;
          const mensajes = historialChatIA[sectionId] || [];
          contenedor.innerHTML = mensajes.length
              ? mensajes.map(m => {
                  const esEstudiante = m.rol === "student";
                  return `<div class="ai-chat-message ${esEstudiante ? "student" : "assistant"}">
                      <span class="ai-message-label">${esEstudiante ? "Tu consulta" : "Guía IA"}</span>${escaparTextoAnalista(m.texto)}
                  </div>`;
              }).join("")
              : `<div class="ai-chat-message assistant"><span class="ai-message-label">Guía IA</span>Voy a leer tu código antes de responder. Puedo ayudarte a entender la consigna, localizar un error, revisar decisiones y diseñar pruebas. Te daré pistas progresivas, no la solución completa.</div>`;
          contenedor.scrollTop = contenedor.scrollHeight;
      }

      function agregarMensajeChatIA(sectionId, rol, texto) {
          if (!historialChatIA[sectionId]) historialChatIA[sectionId] = [];
          historialChatIA[sectionId].push({ rol, texto: String(texto || "").trim() });
          guardarChatIA(sectionId);
          renderizarChatIA(sectionId);
          actualizarEstadoChatIA(sectionId, "saving", "Pendiente de guardar");
          programarGuardadoFirebase();
      }

      function diagnosticarCodigoChatIA(code, sec, evaluacion, historial) {
          const fuente = String(code || "");
          const lineas = fuente.split(/\r?\n/);
          const lineasUtiles = lineas
              .map((texto, indice) => ({ numero: indice + 1, texto: texto.trim() }))
              .filter(x => x.texto && !x.texto.startsWith("//"));
          const lineasConContenido = lineas.map((texto, indice) => ({
              numero: indice + 1,
              texto: texto.trim()
          }));
          const esPlantilla = !fuente.trim() ||
              (sec.initialCode && fuente.trim() === String(sec.initialCode).trim());
          const marcadoresPendientes = lineasUtiles
              .filter(x => /\b(TODO|FIXME)\b|completar|tu codigo|escrib/i.test(x.texto))
              .slice(0, 2);
          const delimitadores = [
              ["(", ")"], ["[", "]"], ["{", "}"]
          ].map(([abre, cierra]) => ({
              simbolo: `${abre}${cierra}`,
              diferencia: (fuente.split(abre).length - 1) - (fuente.split(cierra).length - 1)
          })).filter(x => x.diferencia !== 0);
          const variables = [...fuente.matchAll(/\b(?:let|const|var)\s+([A-Za-z_$][\w$]*)/g)]
              .map(x => x[1]);
          const repetidas = [...new Set(variables.filter((nombre, indice) => variables.indexOf(nombre) !== indice))];
          const conceptosCumplidos = (evaluacion.conceptos || [])
              .filter(x => x.cumple).map(x => x.nombre).slice(0, 3);
          const conceptosPendientes = (evaluacion.conceptos || [])
              .filter(x => !x.cumple).map(x => x.nombre).slice(0, 3);
          const errorTexto = String(historial.error || (historial.exito === false ? historial.salida : "") || "").trim();
          const coincidenciaLinea = errorTexto.match(/(?:line|línea)\s*(\d+)/i);
          const lineaSospechosa = lineasConContenido.find(x =>
              /\b(?:prompt|Number|parseInt|parseFloat)\s*\(/.test(x.texto) ||
              /\b(?:if|while|for)\b/.test(x.texto) ||
              /\b(?:undefined|null)\b/.test(x.texto)
          )?.numero || lineasUtiles[0]?.numero || null;

          return {
              esPlantilla,
              lineas: lineasConContenido,
              lineasUtiles,
              marcadoresPendientes,
              delimitadores,
              variables,
              repetidas,
              conceptosCumplidos,
              conceptosPendientes,
              errorTexto,
              lineaError: coincidenciaLinea ? Number(coincidenciaLinea[1]) : null,
              lineaSospechosa,
              tieneSalida: /\bconsole\.(log|info|warn|error)\s*\(/.test(fuente),
              tieneDecision: /\b(if|switch)\b/.test(fuente),
              tieneRepeticion: /\b(for|while|do)\b/.test(fuente),
              tieneFuncion: /\bfunction\b|=>/.test(fuente),
              asignacionEnCondicion: /\b(if|while)\s*\([^)]*(?<![=!<>])=(?!=)[^)]*\)/.test(fuente),
              funcionSinRetorno: /\bfunction\b|=>/.test(fuente) && !/\breturn\b/.test(fuente),
              usaEntradaNoValidada: /\b(prompt|Number|parseInt|parseFloat)\s*\(/.test(fuente) && !/\b(Number\.isFinite|isNaN)\s*\(/.test(fuente),
              usaVar: /\bvar\b/.test(fuente),
              lineasMuyLargas: lineas.some(x => x.length > 120)
          };
      }

      function obtenerNivelPistaIA(sectionId, pregunta) {
          const mensajes = historialChatIA[sectionId] || [];
          const consultas = mensajes.filter(m => m.rol === "student");
          const clave = normalizarEvaluacion(pregunta).replace(/[¿?¡!.,;:]+/g, "").trim();
          const similares = consultas.filter(m => {
              const anterior = normalizarEvaluacion(m.texto).replace(/[¿?¡!.,;:]+/g, "").trim();
              return anterior === clave || (clave.length > 12 && (anterior.includes(clave) || clave.includes(anterior)));
          }).length;
          return Math.max(1, Math.min(3, similares));
      }

      function construirRespuestaIA(titulo, observacion, accion, preguntaGuia = "") {
          return [
              titulo ? `${titulo}` : "",
              observacion ? `Lo que observo: ${observacion}` : "",
              accion ? `Próximo paso: ${accion}` : "",
              preguntaGuia ? `Comprobación: ${preguntaGuia}` : ""
          ].filter(Boolean).join("\n\n");
      }

      function validarRespuestaTutorRemoto(texto, respaldoLocal) {
          const respuesta = String(texto || "").trim();
          if (!respuesta) return respaldoLocal;
          const bloquesCodigo = respuesta.match(/```[\s\S]*?```/g) || [];
          const lineasCodigo = bloquesCodigo.reduce((total, bloque) => total + bloque.split(/\r?\n/).length, 0);
          const instruccionesEjecutables = (respuesta.match(/(?:\bconst\b|\blet\b|\bfunction\b|=>|console\.log\s*\()/g) || []).length;
          if (lineasCodigo > 6 || instruccionesEjecutables > 8) {
              return `${respaldoLocal}\n\nLa respuesta remota fue reemplazada porque incluía demasiado código listo para copiar.`;
          }
          return respuesta.slice(0, 1800);
      }

      async function generarRespuestaChatIASegura(sectionId, pregunta, modo = "consulta") {
          const respaldoLocal = generarRespuestaChatIA(sectionId, pregunta, modo);
          if (!window.firebaseAIRealConfigurada || typeof window.consultarTutorIAFirebase !== "function") {
              return respaldoLocal;
          }
          const sec = seccionesData.find(s => s.id === sectionId) || {};
          const code = document.getElementById(`editor-${sectionId}`)?.value || "";
          const mensajes = (historialChatIA[sectionId] || []).slice(-6);
          const historial = historialResultados[sectionId] || {};
          const evaluacion = evaluarCodigoPorEvidencias(code, sec, historial.exito === undefined ? null : {
              ok: Boolean(historial.exito),
              salida: historial.salida || "",
              error: historial.error || ""
          });
          const resumenLocal = [
              `Nota orientativa local: ${evaluacion.nota}/10.`,
              `Sintaxis válida: ${evaluacion.sintaxis?.valida ? "sí" : "no"}.`,
              `Ejecución correcta: ${evaluacion.ejecucion?.ok ? "sí" : "no"}.`,
              `Conceptos pendientes: ${(evaluacion.conceptos || []).filter(x => !x.cumple).map(x => x.nombre).join(", ") || "ninguno detectado"}.`,
              `Mejora prioritaria: ${evaluacion.mejoras?.[0] || "probar casos diferentes"}.`
          ].join(" ");
          actualizarEstadoChatIA(sectionId, "saving", "Consultando tutor IA seguro...");
          try {
              const consulta = window.consultarTutorIAFirebase({
                  nombreModulo: sec.title || sectionId,
                  consigna: sec.exerciseDesc || "",
                  pregunta,
                  modo,
                  codigo: code,
                  conceptos: (sec.conceptosDetectar || []).join(", "),
                  diagnosticoLocal: resumenLocal,
                  historialReciente: mensajes.map(m => `${m.rol === "student" ? "Alumno" : "Tutor"}: ${m.texto}`).join("\n")
              });
              const respuestaRemota = await Promise.race([
                  consulta,
                  new Promise((_, reject) => setTimeout(() => reject(new Error("Tiempo de espera agotado.")), 15000))
              ]);
              return validarRespuestaTutorRemoto(respuestaRemota, respaldoLocal);
          } catch (error) {
              console.warn("Tutor IA remoto no disponible; se usará el tutor local.", error);
              actualizarEstadoChatIA(sectionId, "error", "Tutor local activo");
              return respaldoLocal;
          }
      }

      function generarRespuestaChatIA(sectionId, pregunta, modo = "consulta") {
          const sec = seccionesData.find(s => s.id === sectionId) || {};
          const editor = document.getElementById(`editor-${sectionId}`);
          const code = editor?.value || "";
          const historial = historialResultados[sectionId] || {};
          const evaluacion = evaluarCodigoPorEvidencias(code, sec, historial.exito === undefined ? null : {
              ok: Boolean(historial.exito),
              salida: historial.salida || "",
              error: historial.exito ? "" : "La ejecución no fue validada correctamente."
          });
          const texto = normalizarEvaluacion(`${pregunta} ${modo}`);
          const diagnostico = diagnosticarCodigoChatIA(code, sec, evaluacion, historial);
          const pendientes = diagnostico.conceptosPendientes;
          const nivelPista = /^pista[123]$/.test(modo)
              ? Number(modo.slice(-1))
              : obtenerNivelPistaIA(sectionId, pregunta);
          const preguntaSocratica = (sec.preguntasSocraticas || [])[Math.min(nivelPista - 1, Math.max(0, (sec.preguntasSocraticas || []).length - 1))];

          if (/^(hola|buenas|buen dia|buenas tardes|buenas noches)\b/.test(texto)) {
              return construirRespuestaIA(
                  "Hola. Ya estoy mirando este módulo.",
                  diagnostico.esPlantilla
                      ? "todavía está la plantilla inicial."
                      : `hay ${diagnostico.lineasUtiles.length} líneas útiles y la evaluación orientativa marca ${evaluacion.nota}/10.`,
                  "Elegí “Entender consigna” si todavía estás planificando o “Revisar mi código” si ya hiciste un intento."
              );
          }

          if (modo === "consigna" || /consigna|que pide|objetivo|entender/.test(texto)) {
              return construirRespuestaIA(
                  "Lectura de la consigna",
                  sec.exerciseDesc || "debes resolver el desafío del módulo.",
                  "Escribí tres comentarios en el editor: 1) datos de entrada, 2) transformación o decisión, 3) salida esperada.",
                  preguntaSocratica || "¿Qué resultado concreto debería mostrar el programa para demostrar que resolviste el problema?"
              );
          }
          if (modo === "revisar" || /revisar mi codigo|revisar|esta bien|calidad/.test(texto)) {
              if (diagnostico.esPlantilla) {
                  return construirRespuestaIA(
                      "Todavía no puedo revisar una solución.",
                      "el editor conserva la plantilla inicial.",
                      "Transformá el primer comentario de la plantilla en una instrucción ejecutable y volvé a consultar.",
                      "¿Cuál es el primer dato que necesita tu programa?"
                  );
              }
              const fortalezas = (evaluacion.fortalezas || []).slice(0, 2);
              const mejoras = (evaluacion.mejoras || []).slice(0, 2);
              const problemaEstructural = diagnostico.delimitadores.length
                  ? `hay delimitadores desbalanceados: ${diagnostico.delimitadores.map(x => x.simbolo).join(", ")}.`
                  : diagnostico.repetidas.length
                      ? `se repiten declaraciones de variables: ${diagnostico.repetidas.join(", ")}.`
                      : "";
              return construirRespuestaIA(
                  `Revisión orientativa: ${evaluacion.nota}/10`,
                  problemaEstructural ||
                      (fortalezas.length ? fortalezas.join(" · ") : "ya existe un intento ejecutable para analizar."),
                  mejoras.length
                      ? mejoras[0]
                      : pendientes.length
                          ? `Hacé visible en el código el concepto “${pendientes[0]}”.`
                          : "Ejecutá dos casos con datos distintos y compará los resultados esperados.",
                  preguntaSocratica || "¿Qué línea demuestra mejor que tu programa cumple la consigna?"
              );
          }
          if (diagnostico.asignacionEnCondicion || /igual|comparar|comparacion|asignacion/.test(texto)) {
              if (diagnostico.asignacionEnCondicion) {
                  return construirRespuestaIA(
                      "Revisá la condición",
                      "detecté un signo `=` dentro de un `if` o `while`; eso asigna un valor en vez de comparar.",
                      "Probá con `===` para comparar valores y ejecutá un caso verdadero y otro falso.",
                      "¿Qué valor debería tener la expresión antes y después de la comparación?"
                  );
              }
              return construirRespuestaIA(
                  "Comparaciones",
                  "una comparación debe expresar con claridad qué dos valores se relacionan.",
                  "Escribí primero la regla en palabras y elegí entre `===`, `>`, `<`, `>=` o `<=` según esa regla.",
                  "¿Qué resultado esperás cuando los valores son iguales?"
              );
          }
          if (diagnostico.funcionSinRetorno || /return|retornar|devuelve|devolver/.test(texto)) {
              if (diagnostico.funcionSinRetorno) {
                  return construirRespuestaIA(
                      "Revisá el valor de retorno",
                      "hay una función, pero no encuentro `return`; si otra parte del programa necesita su resultado, recibirá `undefined`.",
                      "Decidí qué dato debe devolver la función y colocá `return` en el camino que corresponde.",
                      "¿La función debe mostrar el resultado o entregarlo para que otra instrucción lo use?"
                  );
              }
              return construirRespuestaIA(
                  "Funciones y `return`",
                  "mostrar un valor con `console.log` no es lo mismo que devolverlo.",
                  "Seguí el recorrido del dato: entrada, procesamiento y valor que la función entrega.",
                  "¿Qué variable debería recibir el resultado de la llamada?"
              );
          }
          if (diagnostico.usaEntradaNoValidada || /validar|validacion|dato invalido|entrada/.test(texto)) {
              return construirRespuestaIA(
                  "Validación de datos",
                  "tu código recibe o convierte datos, pero no veo una comprobación clara para entradas inválidas.",
                  "Probá con un valor vacío, texto y un número válido; verificá el resultado antes de continuar.",
                  "¿Qué debería hacer el programa si el usuario escribe algo que no es un número?"
              );
          }
          if (modo === "ejemplo" || /prueba|caso|ejemplo|dato/.test(texto)) {
              const foco = diagnostico.tieneDecision
                  ? "un valor que cumpla la condición y otro que no la cumpla"
                  : diagnostico.tieneRepeticion
                      ? "una colección con varios elementos y otra vacía o con un solo elemento"
                      : "dos valores de entrada claramente diferentes";
              const casos = diagnostico.tieneDecision
                  ? "Caso 1: condición verdadera · Caso 2: condición falsa · Caso 3: valor límite (igual al umbral)."
                  : diagnostico.tieneRepeticion
                      ? "Caso 1: colección con varios elementos · Caso 2: colección vacía · Caso 3: un solo elemento."
                      : "Caso 1: entrada habitual · Caso 2: entrada mínima · Caso 3: entrada inesperada o límite.";
              return construirRespuestaIA(
                  "Plan de prueba",
                  `tu código ${diagnostico.tieneDecision ? "contiene decisiones" : diagnostico.tieneRepeticion ? "contiene una repetición" : "necesita validar su resultado con más de un caso"}.`,
                  `${casos} Probá ${foco}. Antes de ejecutar, anotá la salida que esperás en cada caso.`,
                  "¿La salida real coincide exactamente con lo esperado en ambos casos?"
              );
          }
          if (modo === "linea" || /por linea|por línea|linea|línea/.test(texto)) {
              const linea = diagnostico.lineaError || diagnostico.lineaSospechosa;
              const contexto = linea
                  ? diagnostico.lineas.find(x => x.numero === linea)
                  : diagnostico.lineasUtiles[0];
              if (!contexto) {
                  return construirRespuestaIA(
                      "Todavía no hay una línea para analizar",
                      "el editor está vacío o conserva la plantilla inicial.",
                      "Escribí una primera instrucción, ejecutá el programa y volvé a pedir la explicación por línea.",
                      "¿Qué línea esperás que produzca el primer resultado?"
                  );
              }
              return construirRespuestaIA(
                  `Análisis de la línea ${contexto.numero}`,
                  `la instrucción es: ${contexto.texto}`,
                  diagnostico.errorTexto
                      ? `El error registrado apunta a esta zona. Revisá qué variables existen antes de la línea ${contexto.numero}, qué tipo de dato recibe y qué resultado debería producir.`
                      : "No hay un error de ejecución registrado; revisá el dato que entra, la operación que realiza y el valor que deja disponible para la siguiente línea.",
                  `¿Qué valor tiene cada variable justo antes de ejecutar la línea ${contexto.numero}?`
              );
          }
          if (/solucion|codigo completo|respuesta completa|hacelo por mi|dame el codigo/.test(texto)) {
              return construirRespuestaIA(
                  "No voy a entregar el código completo.",
                  "la actividad evalúa tu razonamiento y tus decisiones, no solo el resultado final.",
                  pendientes.length
                      ? `Trabajemos sobre “${pendientes[0]}”: explicá en una frase qué debería hacer esa parte.`
                      : "Decime qué parte te cuesta: entrada, condición, repetición, función o salida.",
                  "¿Qué intentaste hasta ahora y qué resultado obtuviste?"
              );
          }
          if (modo === "error" || /error|no funciona|falla|undefined|syntax/.test(texto)) {
              if (diagnostico.delimitadores.length) {
                  return construirRespuestaIA(
                      "Posible error de sintaxis",
                      `los delimitadores ${diagnostico.delimitadores.map(x => x.simbolo).join(", ")} no están balanceados.`,
                      "Revisá desde la última estructura que abriste y cerrá solo el bloque correspondiente.",
                      "¿Cada paréntesis, corchete y llave de apertura tiene su cierre?"
                  );
              }
              if (diagnostico.errorTexto) {
                  return construirRespuestaIA(
                      "Diagnóstico de ejecución",
                      `${diagnostico.errorTexto}${diagnostico.lineaError ? ` El navegador señala la línea ${diagnostico.lineaError}.` : ""}`,
                      "Revisá primero nombres de variables y el valor disponible justo antes de esa instrucción. Cambiá una sola cosa y volvé a ejecutar.",
                      "¿Qué valor esperabas y qué valor existe realmente en ese punto?"
                  );
              }
              return construirRespuestaIA(
                  "Necesito una ejecución reciente.",
                  "no encuentro un error registrado en la consola del módulo.",
                  "Pulsá “Ejecutar y probar” y después volvé a “Ayúdame con el error”.",
                  "¿Cuál es la primera salida que difiere de lo esperado?"
              );
          }
          if (modo === "siguiente" || /ahora|sigo|continuo|reviso/.test(texto)) {
              const foco = pendientes[0];
              return construirRespuestaIA(
                  "Un solo foco para avanzar",
                  foco
                      ? `todavía no encuentro evidencia clara de “${foco}”.`
                      : `la estructura alcanza una estimación de ${evaluacion.nota}/10 y no detecto un concepto principal ausente.`,
                  foco
                      ? `Agregá o corregí únicamente la parte que demuestra “${foco}” y ejecutá de nuevo.`
                      : "Diseñá un caso límite y verificá que la salida siga siendo correcta.",
                  preguntaSocratica || "¿Qué cambio pequeño podés comprobar antes de continuar?"
              );
          }
          if (/condicion|if|decidir/.test(texto)) return construirRespuestaIA("Condiciones", diagnostico.tieneDecision ? "tu código ya contiene una decisión." : "todavía no detecto una decisión explícita.", "Escribí la regla en palabras: “si ocurre..., entonces...; de lo contrario...”. Después traducí exactamente esa regla.", "¿Qué dos resultados diferentes debería producir la condición?");
          if (/bucle|repet|for|while|recorrer/.test(texto)) return construirRespuestaIA("Repeticiones", diagnostico.tieneRepeticion ? "tu código ya contiene una estructura repetitiva." : "todavía no detecto un bucle.", "Definí qué dato recorrés, dónde empieza y cuál es la condición de finalización.", "¿Qué cambia en cada vuelta para evitar un ciclo infinito?");
          if (/funcion|parametro|return/.test(texto)) return construirRespuestaIA("Funciones", diagnostico.tieneFuncion ? "tu código ya declara una función." : "todavía no detecto una función.", "Definí una tarea única, los datos que recibe y el resultado que devuelve. Probala con un ejemplo pequeño.", "¿La función devuelve un valor o solamente lo muestra?");
          if (/salida|console|mostrar|resultado/.test(texto)) return construirRespuestaIA("Salida del programa", diagnostico.tieneSalida ? "hay una instrucción de salida en tu código." : "no encuentro una salida visible con console.log.", "Compará la variable mostrada con la salida exacta que exige la consigna y verificá cuándo se calcula.", "¿La salida permite comprobar el resultado sin leer el código?");
          if (/no entiendo|no se|no puedo|estoy perdido|me trabe|me trabé/.test(texto)) {
              return construirRespuestaIA(
                  "Vamos a reducir el problema.",
                  diagnostico.esPlantilla ? "todavía no hay un intento ejecutable." : `ya escribiste ${diagnostico.lineasUtiles.length} líneas útiles.`,
                  nivelPista >= 3 && pendientes.length
                      ? `Buscá en la teoría del módulo el concepto “${pendientes[0]}” y escribí una sola instrucción que lo represente.`
                      : "Completá esta frase en un comentario: “Mi programa recibe..., hace... y muestra...”.",
                  preguntaSocratica || "¿Cuál de esas tres partes podés resolver primero?"
              );
          }
          if (pendientes.length) {
              const accion = nivelPista === 1
                  ? `Revisá la consigna y localizá dónde debería aparecer “${pendientes[0]}”.`
                  : nivelPista === 2
                      ? `Escribí en un comentario qué debería hacer “${pendientes[0]}” y convertí ese comentario en una instrucción.`
                      : `Concentrate solo en “${pendientes[0]}”: agregá la estructura mínima que lo demuestre y ejecutá un caso pequeño.`;
              return construirRespuestaIA(
                  `Pista ${nivelPista} de 3`,
                  `detecté ${diagnostico.conceptosCumplidos.length ? `como avances ${diagnostico.conceptosCumplidos.join(", ")}, pero ` : ""}falta evidencia clara de ${pendientes.join(", ")}.`,
                  accion,
                  preguntaSocratica || "¿Cómo vas a comprobar que ese cambio funciona?"
              );
          }
          return construirRespuestaIA(
              "Tu solución está encaminada.",
              `la evaluación orientativa es ${evaluacion.nota}/10 y no detecto conceptos principales ausentes.`,
              "Explicá qué debe entrar, qué se procesa y qué sale; después probá un caso límite.",
              preguntaSocratica || "¿Qué evidencia usarías para defender que tu solución es correcta?"
          );
      }

      async function pedirPistaIA(sectionId, modo = "pista") {
          if (!claseHabilitada || actividadesFinalizadas[sectionId] || modulosPausados[sectionId]) return;
          const textos = {
              consigna: "Ayudame a entender la consigna.",
              revisar: "Revisá mi código sin darme la solución.",
              pista: "Dame una pista para avanzar.",
              error: "Ayúdame a revisar un posible error.",
              siguiente: "¿Qué debería revisar ahora?",
              ejemplo: "Proponeme una prueba para verificar mi solución.",
              casos: "Generá tres casos de prueba y decime qué debería observar en cada uno.",
              linea: "Explicame el error o la línea más importante de mi código.",
              pista1: "Dame una pista de nivel 1: ayudame a ubicar el concepto sin decirme cómo resolverlo.",
              pista2: "Dame una pista de nivel 2: ayudame a convertir el concepto en un paso concreto.",
              pista3: "Dame una pista de nivel 3: indicame qué cambio mínimo puedo probar ahora."
          };
          const pregunta = textos[modo] || textos.pista;
          agregarMensajeChatIA(sectionId, "student", pregunta);
          const respuesta = await generarRespuestaChatIASegura(sectionId, pregunta, modo);
          agregarMensajeChatIA(sectionId, "assistant", respuesta);
      }

      function limpiarChatIA(sectionId) {
          if (!claseHabilitada || actividadesFinalizadas[sectionId] || modulosPausados[sectionId]) return;
          if (!confirm("¿Limpiar las consultas de IA de este módulo? El docente dejará de ver este historial después de sincronizarse.")) return;
          historialChatIA[sectionId] = [];
          guardarChatIA(sectionId);
          renderizarChatIA(sectionId);
          programarGuardadoFirebase();
      }

      async function enviarMensajeIA(event, sectionId) {
          event.preventDefault();
          if (!claseHabilitada || actividadesFinalizadas[sectionId] || modulosPausados[sectionId]) return;
          const input = document.getElementById(`ai-chat-input-${sectionId}`);
          const pregunta = input?.value.trim() || "";
          if (!pregunta) return;
          input.value = "";
          input.disabled = true;
          agregarMensajeChatIA(sectionId, "student", pregunta);
          const respuesta = await generarRespuestaChatIASegura(sectionId, pregunta);
          agregarMensajeChatIA(sectionId, "assistant", respuesta);
          input.disabled = false;
          input.focus();
      }

      function extraerEvidencias(code) {
          const lineas = String(code || "").split("\n")
              .map(x => x.trim())
              .filter(x => x && !x.startsWith("//"));
          return lineas.slice(0, 4);
      }

      function detectarCaracteristicas(code) {
          const c = String(code || "");
          const out = [];
          if (/\b(if|else if|else)\b/.test(c))
              out.push({t:"Utiliza estructuras condicionales.",c:true});
          if (/\b(for|while|forEach)\b/.test(c))
              out.push({t:"Utiliza una estructura de repetición.",c:true});
          if (/\bfunction\b|=>/.test(c))
              out.push({t:"Define o utiliza funciones.",c:true});
          if (/\b(const|let|var)\b/.test(c))
              out.push({t:"Declara variables mediante const, let o var.",c:true});
          if (/\b(array|push|pop|shift|unshift|map|filter|reduce)\b/i.test(c) || /\[[^\]]*\]/.test(c))
              out.push({t:"Trabaja con estructuras tipo array.",c:true});
          if (/console\.log/.test(c))
              out.push({t:"Muestra información mediante console.log().",c:true});
          if (/\.length\b/.test(c))
              out.push({t:"Consulta la propiedad length.",c:true});
          if (/\.trim\(\)|toLowerCase|toUpperCase/.test(c))
              out.push({t:"Realiza operaciones de normalización de texto.",c:true});
          if (/this\./.test(c))
              out.push({t:"Utiliza this para acceder al estado de un objeto/clase.",c:true});

          if (!out.length)
              out.push({t:"Contiene instrucciones JavaScript ejecutables.",c:true});

          return out;
      }

      function generarAfirmacionesEstudiante(code) {
          const reales = detectarCaracteristicas(code).filter(x=>x.c).slice(0,2);
          const opciones = reales.map(x=>({t:x.t,c:true}));
          opciones.push(
              {t:"El código contiene obligatoriamente una conexión a una base de datos.",c:false},
              {t:"El código ejecuta automáticamente una solución generada por una IA externa.",c:false},
              {t:"Todas las variables del código son constantes inmutables.",c:false}
          );
          return opciones.slice(0,5);
      }

      function generarAfirmacionesIA(ideal) {
          const reales = detectarCaracteristicas(ideal).filter(x=>x.c).slice(0,3);
          const opciones = reales.map(x=>({t:x.t,c:true}));
          opciones.push(
              {t:"La solución ideal no contiene ninguna instrucción ejecutable.",c:false},
              {t:"La solución ideal depende obligatoriamente de una base de datos externa.",c:false},
              {t:"La solución ideal utiliza solamente HTML y nunca JavaScript.",c:false}
          );
          return opciones.slice(0,5);
      }

      function generarComparaciones(code, ideal) {
          const fc = detectarCaracteristicas(code).filter(x=>x.c);
          const fi = detectarCaracteristicas(ideal).filter(x=>x.c);
          const opciones = [];

          const common = fc.find(a => fi.some(b => b.t === a.t));
          if (common)
              opciones.push({t:`Ambos códigos ${common.t.toLowerCase()}`,c:true});

          const onlyIA = fi.find(a => !fc.some(b => b.t === a.t));
          if (onlyIA)
              opciones.push({t:`La solución de IA ${onlyIA.t.toLowerCase()} y eso no se detecta en tu código entregado.`,c:true});

          const onlyStudent = fc.find(a => !fi.some(b => b.t === a.t));
          if (onlyStudent)
              opciones.push({t:`Tu código ${onlyStudent.t.toLowerCase()} y esa característica no se detecta en la solución ideal.`,c:true});

          opciones.push(
              {t:"Ambos códigos son necesariamente idénticos carácter por carácter.",c:false},
              {t:"La solución de IA siempre debe tener exactamente la misma cantidad de líneas que tu código.",c:false},
              {t:"Si dos códigos resuelven el mismo problema, obligatoriamente deben utilizar las mismas variables.",c:false}
          );

          return opciones.slice(0,5);
      }

      function mezclarArray(arr) {
          const copia = [...arr];
          for (let i = copia.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [copia[i], copia[j]] = [copia[j], copia[i]];
          }
          return copia;
      }

      function construirPreguntasAnalista(sectionId, code, ideal) {
          const sec = seccionesData.find(s => s.id === sectionId) || {};
          const configuradas = Array.isArray(sec.preguntasSocraticas) ? sec.preguntasSocraticas.filter(Boolean) : [];
          const base = mezclarArray(analistaPlantillas).slice(0,4);
          const personalizadas = configuradas.slice(0,2).map(q => ({
              tipo:"SOCRÁTICA",
              categoria:"SOCRÁTICA DEL DESAFÍO",
              respuestaAbierta:true,
              q:()=>`${q} Fundamentá tu respuesta con una decisión concreta del código, una evidencia y una consecuencia.`
          }));
          const gen = mezclarArray(preguntasSocraticas).slice(0,Math.max(0,2-personalizadas.length));
          return [...base.map(p=>({...p,categoria:"ANÁLISIS TÉCNICO"})),...personalizadas,...gen.map(p=>({...p,tipo:"SOCRÁTICA",categoria:"SOCRÁTICA"}))].map((p,i)=>{
            const respuestaAbierta = p.respuestaAbierta === true || p.tipo === "SOCRÁTICA";
            const opciones = respuestaAbierta ? [] : mezclarArray(p.opciones(code,ideal));
            if (!respuestaAbierta && !opciones.some(x=>x.c)) opciones[0].c=true;
            return {
                id:i,
                tipo:p.tipo,
                categoria:p.categoria,
                q:p.q(code,ideal),
                opciones,
                respuestaAbierta,
                codigoContexto:code
            };
          });
      }

      function construirAnalista(sectionId, code) {
          const box = document.getElementById(`analyst-${sectionId}`);
          const container = document.getElementById(`analyst-questions-${sectionId}`);
          const result = document.getElementById(`analyst-result-${sectionId}`);
          const sec = seccionesData.find(s => s.id === sectionId);
          if (!box || !container || !sec) return;

          const ideal = sec.aiSolution || "";
          const preguntas = construirPreguntasAnalista(sectionId, code, ideal);

          window.analistaActual = window.analistaActual || {};
          window.analistaActual[sectionId] = preguntas;

          container.innerHTML = preguntas.map((p, i) => `
              <div class="analyst-question">
                  <strong>${i + 1}. ${p.q}</strong>
                  <div style="margin:.4rem 0 .7rem;color:var(--text-muted);font-size:.75rem">
                      <span class="analyst-badge">${p.categoria || "ANÁLISIS"}</span>
                      ${p.respuestaAbierta ? "🟠 Respuesta razonada sobre tu solución" :
                        p.tipo === "ESTUDIANTE" ? "🔵 Basada en tu código" :
                        p.tipo === "IA" ? "🟣 Basada en la solución de IA" :
                        "🟢 Comparación entre ambos códigos"}
                      <br>${p.respuestaAbierta
                          ? "Incluí una decisión concreta, una justificación, una evidencia y una consecuencia o mejora."
                          : 'Puede haber <strong>más de una respuesta correcta</strong>.'}
                  </div>
                   ${p.respuestaAbierta ? `
                       <label class="analyst-open-label" for="analyst-open-${sectionId}-${i}">
                           Tu explicación
                       </label>
                       <textarea class="analyst-open-response"
                                 id="analyst-open-${sectionId}-${i}"
                                 name="analyst-open-${sectionId}-${i}"
                                 rows="5"
                                 maxlength="900"
                                 placeholder="Escribí entre 3 y 6 oraciones. No alcanza con decir que funciona: explicá por qué y con qué evidencia."></textarea>
                       <div class="analyst-open-counter">Máximo 900 caracteres</div>
                   ` : p.opciones.map((op,j) => `
                       <label class="analyst-option">
                           <input type="checkbox"
                                  name="analyst-${sectionId}-${i}"
                                  value="${j}">
                           ${String.fromCharCode(65+j)}) ${escaparTextoAnalista(op.t)}
                       </label>
                   `).join("")}
                   <div class="analyst-question-feedback"
                        id="analyst-feedback-${sectionId}-${i}"
                        aria-live="polite"></div>
               </div>
           `).join("");

          result.innerHTML = "";
          box.classList.add("active");
           document.getElementById(`analyst-submit-${sectionId}`).disabled = false;
       }

       function calificarRespuestaAnalista(marcadas, reales) {
           const puntosRubrica = normalizarRubricaSocratica(rubricaSocraticaActual).puntos;
           const aciertos = marcadas.filter(x => reales.includes(x)).length;
           const errores = marcadas.filter(x => !reales.includes(x)).length;
           const faltantes = reales.filter(x => !marcadas.includes(x)).length;

           if (aciertos === reales.length && errores === 0) {
               return {
                   nivel: "completa",
                   etiqueta: "Correcta completa",
                   puntos: puntosRubrica.completa,
                   detalle: "Identificaste todas las opciones correctas sin agregar afirmaciones incorrectas."
               };
           }
           if (aciertos > 0 && errores === 0) {
               return {
                   nivel: "incompleta",
                   etiqueta: "Correcta incompleta",
                   puntos: puntosRubrica.incompleta,
                   detalle: `Tu razonamiento es correcto, pero faltó reconocer ${faltantes} opción${faltantes === 1 ? "" : "es"} válida${faltantes === 1 ? "" : "s"}.`
               };
           }
           if (aciertos > 0) {
               return {
                   nivel: "parcial",
                   etiqueta: "Parcial con errores",
                   puntos: puntosRubrica.parcial,
                   detalle: `Reconociste ${aciertos} opción${aciertos === 1 ? "" : "es"} válida${aciertos === 1 ? "" : "s"}, pero también elegiste ${errores} incorrecta${errores === 1 ? "" : "s"}.`
               };
           }
           return {
               nivel: "incorrecta",
               etiqueta: "Incorrecta",
               puntos: puntosRubrica.incorrecta,
               detalle: "Las opciones elegidas no aportan evidencia correcta para esta pregunta."
           };
       }

       function calificarRazonamientoSocratico(respuestaOriginal, codigo) {
           const rubrica = normalizarRubricaSocratica(rubricaSocraticaActual);
           const respuesta = String(respuestaOriginal || "").trim();
           const normalizada = normalizarEvaluacion(respuesta);
           const palabras = normalizada.split(/\s+/).filter(Boolean);
           const trivial = /^(no se|no sé|nose|porque si|porque sí|funciona|esta bien|está bien|da igual|no entiendo)[.! ]*$/i.test(respuesta);
           const identificadoresCodigo = [...new Set(
               String(codigo || "").match(/\b[A-Za-z_$][\w$]{2,}\b/g) || []
           )]
               .map(normalizarEvaluacion)
               .filter(x => !/^(const|let|var|function|return|console|log|true|false|null|undefined|else|while|for|if)$/.test(x));
           const mencionaIdentificador = identificadoresCodigo.some(id =>
               id.length >= 3 && new RegExp(`\\b${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(normalizada)
           );
           const criterios = [
               {
                   clave: "desarrollo",
                   nombre: "desarrollo suficiente",
                   cumple: palabras.length >= rubrica.palabrasMinimas
               },
               {
                   clave: "justificacion",
                   nombre: "justificación causal",
                   cumple: /\b(porque|por que|ya que|debido|entonces|por lo tanto|por eso|permite|evita|provoca|genera|hace que)\b/.test(normalizada)
               },
               {
                   clave: "evidencia",
                   nombre: "evidencia del código o de una prueba",
                   cumple: mencionaIdentificador ||
                       /\b(variable|funcion|condicion|bucle|for|while|if|return|entrada|salida|resultado|prueba|caso|valor|error|linea|console|array|objeto)\b/.test(normalizada)
               },
               {
                   clave: "consecuencia",
                   nombre: "consecuencia, límite o mejora",
                   cumple: /\b(si |cambi|elimin|reemplaz|mejor|podria|podría|fall|limite|límite|riesgo|manten|robust|clar|eficien|correg|evitar|comprobar|verificar)\b/.test(normalizada)
               }
           ];
           const criteriosActivos = criterios.filter(x => rubrica.criterios[x.clave] !== false);
           const cumplidos = criteriosActivos.filter(x => x.cumple);
           const faltantes = criteriosActivos.filter(x => !x.cumple);

           if (!respuesta || palabras.length < 6 || trivial) {
               return {
                   nivel: "incorrecta",
                   etiqueta: "Razonamiento insuficiente",
                   puntos: 0,
                   detalle: "La respuesta es demasiado breve o no presenta una explicación verificable.",
                   criteriosCumplidos: cumplidos.map(x => x.nombre),
                   criteriosFaltantes: faltantes.map(x => x.nombre)
               };
           }

           const cantidad = cumplidos.length;
           const totalCriterios = criteriosActivos.length;
           const nivel = cantidad === totalCriterios ? "completa" :
               cantidad === Math.max(1, totalCriterios - 1) ? "incompleta" :
               cantidad > 0 ? "parcial" : "incorrecta";
           const etiqueta = nivel === "completa" ? "Razonamiento completo" :
               nivel === "incompleta" ? "Razonamiento correcto incompleto" :
               nivel === "parcial" ? "Razonamiento parcial" : "Razonamiento insuficiente";
           const puntos = Number(rubrica.puntos[nivel] || 0);
           const detalle = faltantes.length
               ? `Se reconoció ${cumplidos.map(x => x.nombre).join(", ") || "una idea inicial"}. Falta fortalecer: ${faltantes.map(x => x.nombre).join(", ")}.`
               : "La respuesta identifica una decisión, la justifica con evidencia y analiza sus consecuencias.";
           return {
               nivel,
               etiqueta,
               puntos,
               detalle,
               criteriosCumplidos: cumplidos.map(x => x.nombre),
               criteriosFaltantes: faltantes.map(x => x.nombre),
               rubricaAplicada: rubrica
           };
       }

       function resaltarRespuestasAnalista(sectionId) {
           const preguntas = (window.analistaActual && window.analistaActual[sectionId]) || [];
           preguntas.forEach((p, i) => {
               if (p.respuestaAbierta) return;
               const inputs = document.querySelectorAll(`input[name="analyst-${sectionId}-${i}"]`);
              inputs.forEach((input, j) => {
                  const label = input.closest(".analyst-option");
                  if (!label) return;
                  const elegida = input.checked;
                  const correcta = !!p.opciones[j].c;
                  label.classList.remove("analyst-correct", "analyst-wrong", "analyst-selected-correct");
                  if (elegida && correcta) label.classList.add("analyst-selected-correct");
                  else if (elegida) label.classList.add("analyst-wrong");
                  else if (correcta) label.classList.add("analyst-correct");
              });
          });
      }

       function evaluarAnalista(sectionId) {
           const preguntas = (window.analistaActual && window.analistaActual[sectionId]) || [];
           const rubricaAplicada = normalizarRubricaSocratica(rubricaSocraticaActual);
           let correctas = 0;
           let respondidas = 0;
           let maxPuntos = preguntas.length * rubricaAplicada.puntos.completa;
           let puntosObtenidos = 0;
           const resultadosPreguntas = [];
           const conteoNiveles = {
               completa: 0,
               incompleta: 0,
               parcial: 0,
               incorrecta: 0
           };

           preguntas.forEach((p,i) => {
               let resultadoPregunta;
               if (p.respuestaAbierta) {
                   const respuestaTexto = document.getElementById(`analyst-open-${sectionId}-${i}`)?.value.trim() || "";
                   if (respuestaTexto) respondidas++;
                   resultadoPregunta = {
                       ...calificarRazonamientoSocratico(respuestaTexto, p.codigoContexto),
                       respuestaTexto
                   };
               } else {
                   const marcadas = [...document.querySelectorAll(`input[name="analyst-${sectionId}-${i}"]:checked`)]
                       .map(x => Number(x.value)).sort((a,b)=>a-b);
                   if (marcadas.length) respondidas++;
                   const reales = p.opciones
                       .map((x,j)=>x.c ? j : null)
                       .filter(x=>x !== null)
                       .sort((a,b)=>a-b);
                   resultadoPregunta = {
                       ...calificarRespuestaAnalista(marcadas, reales),
                       seleccionadas: marcadas,
                       correctas: reales
                   };
               }
               resultadosPreguntas.push(resultadoPregunta);
               conteoNiveles[resultadoPregunta.nivel]++;
               if (resultadoPregunta.nivel === "completa") correctas++;
               puntosObtenidos += resultadoPregunta.puntos;
           });

          const result = document.getElementById(`analyst-result-${sectionId}`);

           if (respondidas < preguntas.length) {
               result.innerHTML = `⚠️ Debes responder todas las preguntas. Las socráticas requieren una explicación escrita y las técnicas pueden tener varias opciones correctas.`;
               return;
           }

           resultadosPreguntas.forEach((resultadoPregunta, i) => {
               const feedbackPregunta = document.getElementById(`analyst-feedback-${sectionId}-${i}`);
               if (!feedbackPregunta) return;
               feedbackPregunta.className = `analyst-question-feedback is-${resultadoPregunta.nivel}`;
               feedbackPregunta.innerHTML =
                   `<strong>${resultadoPregunta.etiqueta}: ${resultadoPregunta.puntos.toFixed(2)} / 1,00</strong>` +
                   `<span>${escaparTextoAnalista(resultadoPregunta.detalle)}</span>`;
           });

           const porcentaje = Math.round((puntosObtenidos / maxPuntos) * 100);
          const notaPreguntas = Number((porcentaje / 10).toFixed(1));
          const viabilidad = porcentaje >= 80 ? "ALTA" : porcentaje >= 60 ? "MEDIA" : "BAJA";
          const excelencia = porcentaje === 100 ? "EXCELENTE" :
                             porcentaje >= 80 ? "MUY BUENA" :
                             porcentaje >= 60 ? "EN DESARROLLO" : "REQUIERE MEJORA";

          document.getElementById(`viability-${sectionId}`).innerText = `Viabilidad: ${viabilidad}`;
          document.getElementById(`excellence-${sectionId}`).innerText = `Excelencia: ${excelencia}`;

          if (!historialResultados[sectionId]) historialResultados[sectionId] = {};
          const notaCodigo = Number(historialResultados[sectionId].notaCodigo ?? historialResultados[sectionId].notaIA ?? 0);
          const evaluacionCodigo = historialResultados[sectionId].evaluacionCodigo || null;
          const notaFinal = calcularNotaCombinada(notaCodigo, porcentaje, evaluacionCodigo);
          const limiteFinal = evaluacionCodigo?.sintaxis?.valida === false
              ? "La calificación automática del módulo se limitó a 3 porque el código contiene un error de sintaxis."
              : evaluacionCodigo?.ejecucion?.ok === false
                  ? "La calificación automática del módulo se limitó a 4 porque el código no se ejecutó correctamente."
                  : Number(evaluacionCodigo?.metricas?.comportamiento) < 0.35
                      ? "La calificación automática del módulo se limitó a 6 porque la salida no demuestra el comportamiento esperado."
                      : "";

           result.innerHTML =
               `<strong>Calificación automática del módulo: ${notaFinal}/10</strong><br>` +
               `Código: <strong>${notaCodigo}/10</strong> (70%).<br>` +
               `Preguntas: <strong>${notaPreguntas}/10</strong> (30%).<br>` +
               `<strong>Desglose:</strong> ${conteoNiveles.completa} completas (${rubricaAplicada.puntos.completa.toFixed(2)}), ${conteoNiveles.incompleta} correctas incompletas (${rubricaAplicada.puntos.incompleta.toFixed(2)}), ${conteoNiveles.parcial} parciales (${rubricaAplicada.puntos.parcial.toFixed(2)}) y ${conteoNiveles.incorrecta} incorrectas (${rubricaAplicada.puntos.incorrecta.toFixed(2)}).<br>` +
               `Viabilidad: <strong>${viabilidad}</strong>.<br>` +
              `Excelencia: <strong>${excelencia}</strong>.<br>` +
              `Las preguntas mezclaron evidencias de tu código, de la solución IA, de la comparación entre ambos y situaciones de razonamiento socrático.` +
              (limiteFinal ? `<br><strong>${escaparTextoAnalista(limiteFinal)}</strong>` : "");

           resaltarRespuestasAnalista(sectionId);
           document.querySelectorAll(`#analyst-${sectionId} input, #analyst-${sectionId} textarea`).forEach(el => el.disabled = true);
          document.getElementById(`analyst-submit-${sectionId}`).disabled = true;

          historialResultados[sectionId].notaPreguntas = notaPreguntas;
          historialResultados[sectionId].notaFinal = notaFinal;
          historialResultados[sectionId].notaIA = notaFinal;
          historialResultados[sectionId].analista = {
              correctas,
              total: preguntas.length,
              maxPuntos: Number(maxPuntos.toFixed(2)),
              porcentaje,
               puntosObtenidos: Number(puntosObtenidos.toFixed(2)),
               rubrica: rubricaAplicada,
               conteoNiveles,
               viabilidad,
              excelencia,
              preguntas: preguntas.map((p, i) => ({
                  tipo: p.tipo,
                  categoria: p.categoria || "ANÁLISIS",
                  pregunta: p.q,
                  formato: p.respuestaAbierta ? "abierta" : "seleccion-multiple",
                  opciones: p.opciones.map(x => ({
                      texto: x.t || "",
                      correcta: !!x.c
                  })),
                   respuestaTexto: resultadosPreguntas[i]?.respuestaTexto || "",
                   seleccionadas: resultadosPreguntas[i]?.seleccionadas || [],
                   correctas: resultadosPreguntas[i]?.correctas || [],
                   nivel: resultadosPreguntas[i]?.nivel || "incorrecta",
                   etiquetaNivel: resultadosPreguntas[i]?.etiqueta || "Incorrecta",
                   puntos: resultadosPreguntas[i]?.puntos || 0,
                   criteriosCumplidos: resultadosPreguntas[i]?.criteriosCumplidos || [],
                   criteriosFaltantes: resultadosPreguntas[i]?.criteriosFaltantes || []
               }))
          };
          actividadesFinalizadas[sectionId] = true;
          setLocalStorage(`finalized_${sectionId}`, 'true');
          actualizarIconoEstado(sectionId, true);
          actualizarProgreso();
          const feedbackText = document.getElementById(`ai-text-${sectionId}`);
          if (feedbackText) {
              feedbackText.insertAdjacentHTML(
                  "beforeend",
                  `<div style="margin-top:.8rem;padding:.7rem;border:1px solid rgba(16,185,129,.4);border-radius:6px;color:#a7f3d0">
                      <strong>Calificación automática del módulo: ${notaFinal}/10</strong><br>
                      Código ${notaCodigo}/10 × 70% + preguntas ${notaPreguntas}/10 × 30%.
                  </div>`
              );
          }
          programarGuardadoFirebase();
      }

      async function resolverYCompararIA(sectionId) {
          if (!claseHabilitada) return;
          if (actividadesFinalizadas[sectionId] || modulosPausados[sectionId]) return;

          if (!confirm("ATENCIÓN: esta acción mostrará una solución de referencia, realizará una evaluación automática orientativa y bloqueará la actividad. ¿Deseas continuar?")) {
              return;
          }

          const editor = document.getElementById(`editor-${sectionId}`);
          const sec = seccionesData.find(s => s.id === sectionId);
          const feedbackBox = document.getElementById(`ai-feedback-${sectionId}`);
          const studentCodeDisplay = document.getElementById(`ai-student-code-${sectionId}`);
          const idealDisplay = document.getElementById(`ai-ideal-code-${sectionId}`);
          const feedbackText = document.getElementById(`ai-text-${sectionId}`);
          const code = editor.value.trim();

          if (!editor || !sec || !feedbackBox || !feedbackText) return;

          if (idealDisplay) idealDisplay.innerText = "// La solución de referencia se habilita después de entregar el análisis.";
          feedbackBox.classList.add('active');
          if (studentCodeDisplay) studentCodeDisplay.innerText = code;
          feedbackText.innerHTML = "<i>Ejecutando el código del estudiante y la referencia en entornos aislados...</i>";

          await new Promise(resolve => setTimeout(resolve, 300));
          const [resultadoAlumno, resultadoReferencia] = await Promise.all([
              ejecutarCodigoAislado(code),
              ejecutarCodigoAislado(sec.aiSolution || "")
          ]);
          const salidaAlumno = [
              ...(Array.isArray(resultadoAlumno.logs) ? resultadoAlumno.logs : []),
              ...(!resultadoAlumno.ok && resultadoAlumno.error ? [`[EXCEPCIÓN]: ${resultadoAlumno.error}`] : [])
          ].join("\n");
          const salidaReferencia = resultadoReferencia.ok
              ? (Array.isArray(resultadoReferencia.logs) ? resultadoReferencia.logs.join("\n") : "")
              : "";
          const evaluacion = evaluarCodigoPorEvidencias(code, sec, {
              ok: Boolean(resultadoAlumno.ok),
              logs: resultadoAlumno.logs || [],
              salida: salidaAlumno,
              error: resultadoAlumno.error || "",
              salidaEsperada: salidaReferencia
          });
              const diagnostico = generarDiagnosticoIA(evaluacion, sec, {
                  ok: Boolean(resultadoAlumno.ok),
                  salida: salidaAlumno,
                  error: resultadoAlumno.error || ""
              });
              const puntaje = evaluacion.nota;
              let analisis = "";

              if (puntaje === 1) analisis = "❌ <strong>Evaluación Estricta (1/10):</strong> Plantilla inicial sin resolver.";
              else if (puntaje === 4) analisis = "⚠️ <strong>Evaluación Estricta (4/10):</strong> Código sin estructuras lógicas requeridas.";
              else if (puntaje === 7) analisis = "🎯 <strong>Evaluación Estricta (7/10):</strong> Alcanza o supera el 70% de desarrollo.";
              else if (puntaje === 5) analisis = "🔍 <strong>Evaluación Estricta (5/10):</strong> Resolución parcial por debajo del 70%.";
              else if (puntaje === 3) analisis = "⚠️ <strong>Evaluación Estricta (3/10):</strong> Código demasiado escueto.";
              else if (puntaje === 10) analisis = "✅ <strong>¡Excelente Trabajo! (10/10):</strong> Cumple rigurosamente con los parámetros ideales.";

              analisis = `<strong>Estimación orientativa estricta (${puntaje}/10):</strong> ${diagnostico.resumen}` +
                  `<br><strong>Guía de mejora:</strong><ol>${diagnostico.pasos.map(x => `<li>${escaparTextoAnalista(x)}</li>`).join("")}</ol>` +
                  `<br><strong>Fortalezas:</strong> ${evaluacion.fortalezas.length ? evaluacion.fortalezas.map(escaparTextoAnalista).join(" · ") : "Todavía no se observan evidencias suficientes."}` +
                  `<br><strong>Mejoras:</strong> ${evaluacion.mejoras.length ? evaluacion.mejoras.map(escaparTextoAnalista).join(" · ") : "No se detectaron mejoras prioritarias."}` +
                  `<br><strong>Correspondencia con lo pedido:</strong> ${Math.round((evaluacion.metricas.referencia || 0) * 100)}% de estructuras clave y ${Math.round((evaluacion.metricas.nombresExigidos || 1) * 100)}% de identificadores exigidos.` +
                  `<hr><strong>Desglose verificable:</strong><ul>${evaluacion.criterios.map(c => `<li>${escaparTextoAnalista(c.nombre)}: ${c.puntos}/${c.peso} puntos (${c.estado}). ${escaparTextoAnalista(c.evidencia)}</li>`).join("")}</ul>` +
                  (evaluacion.limites.length ? `<strong>Límites aplicados:</strong><ul>${evaluacion.limites.map(x => `<li>${escaparTextoAnalista(x)}</li>`).join("")}</ul>` : "") +
                  `<strong>Ejecución del estudiante:</strong> ${resultadoAlumno.ok ? "correcta" : `fallida: ${escaparTextoAnalista(resultadoAlumno.error || "error no especificado")}`}.<br>` +
                  `<strong>Coincidencia de comportamiento:</strong> ${Math.round((evaluacion.ejecucion.similitudSalida || 0) * 100)}%.`;
              const objetivos = Array.isArray(sec.objetivosPedagogicos) ? sec.objetivosPedagogicos : [];
              const conceptos = Array.isArray(sec.conceptosDetectar) ? sec.conceptosDetectar : [];
              const errores = Array.isArray(sec.erroresFrecuentes) ? sec.erroresFrecuentes : [];
              feedbackText.innerHTML = `<strong>Nota del código: ${puntaje}/10 (70% de la calificación automática del módulo)</strong><br><small>La calificación automática se calculará después de entregar todas las preguntas, que representan el 30%. La nota definitiva requiere confirmación docente.</small><br>${analisis}` +
                (objetivos.length ? `<hr><strong>🎯 Objetivos:</strong><ul>${objetivos.map(x=>`<li>${escaparTextoAnalista(x)}</li>`).join("")}</ul>`:"") +
                (conceptos.length ? `<strong>🧠 Conceptos que la IA revisa:</strong> ${conceptos.map(x=>escaparTextoAnalista(x)).join(", ")}<br>`:"") +
                (errores.length ? `<strong>⚠️ Errores frecuentes a revisar:</strong> ${errores.slice(0,3).map(x=>escaparTextoAnalista(x)).join(" · ")}<br>`:"") +
                `<div style="margin-top:.6rem;color:#a5b4fc"><strong>🚫 Protección IA:</strong> no se entrega código listo para copiar ni se revelan directamente las respuestas.</div>`;

              construirAnalista(sectionId, code);
              if (idealDisplay) {
                  idealDisplay.innerText = `${sec.aiSolution}\n\n// Usá esta referencia para comparar decisiones, no para copiarla.`;
              }

              const analystBox = document.getElementById(`analyst-${sectionId}`);
              if (analystBox) {
                  analystBox.scrollIntoView({ behavior: "smooth", block: "center" });
              }

              editor.disabled = true;
              ["run","preview","ai","reset","pause"].forEach(btn => {
                  const el = document.getElementById(`btn-${btn}-${sectionId}`);
                  if (el) el.disabled = true;
              });
              document.querySelectorAll(`#${CSS.escape(sectionId)} [data-ai-editor-action]`).forEach(control => {
                  control.disabled = true;
              });
              actualizarEstadoEditorEstudiante(sectionId, "success", "Código entregado");

              if (cronometrosActivos[sectionId]) {
                  clearInterval(cronometrosActivos[sectionId]);
                  cronometrosActivos[sectionId] = null;
              }

              if (!historialResultados[sectionId]) historialResultados[sectionId] = {};
              historialResultados[sectionId].codigo = code;
              historialResultados[sectionId].solucionIA = sec.aiSolution;
              historialResultados[sectionId].notaCodigo = puntaje;
              historialResultados[sectionId].evaluacionCodigo = evaluacion;
              historialResultados[sectionId].salida = salidaAlumno;
              historialResultados[sectionId].error = resultadoAlumno.error || "";
              delete historialResultados[sectionId].notaPreguntas;
              delete historialResultados[sectionId].notaFinal;
              delete historialResultados[sectionId].notaIA;
              historialResultados[sectionId].analisisIA = analisis.replace(/<[^>]*>?/gm, '');
              historialResultados[sectionId].exito = Boolean(resultadoAlumno.ok);
              programarGuardadoFirebase();
      }

      function generarTextoAnalistaPDF(sectionId) {
          const data = historialResultados[sectionId] || {};
          const preguntas = data.analista && data.analista.preguntas ? data.analista.preguntas : [];
          if (!preguntas.length) return "ANALISTA DE VIABILIDAD Y EXCELENCIA\nNo se respondió el cuestionario del analista.\n";

          let texto = "\n\n════════════════════════════════════════════════════\n";
          texto += "ANALISTA DE VIABILIDAD Y EXCELENCIA\n";
          texto += "════════════════════════════════════════════════════\n\n";

          texto += `Resultado: ${data.analista.correctas || 0}/${data.analista.total || preguntas.length} `;
          texto += `(${data.analista.porcentaje || 0}%)\n`;
          texto += `Viabilidad: ${data.analista.viabilidad || "PENDIENTE"}\n`;
          texto += `Excelencia: ${data.analista.excelencia || "PENDIENTE"}\n\n`;

          preguntas.forEach((p, i) => {
              texto += `${i + 1}. [${p.categoria || p.tipo || "ANÁLISIS"}]\n`;
              texto += `${p.pregunta}\n`;

              if (p.opciones) {
                  p.opciones.forEach((op, j) => {
                      const marcada = p.seleccionadas && p.seleccionadas.includes(j) ? "☑" : "☐";
                      texto += `   ${marcada} ${String.fromCharCode(65 + j)}) ${op.texto || op.t || ""}`;
                      if (op.correcta === true || op.c === true) texto += "  [CORRECTA]";
                      texto += "\n";
                  });
              } else if (p.correctas) {
                  texto += `   Respuestas correctas: ${p.correctas.map(j => String.fromCharCode(65 + j)).join(", ")}\n`;
              }

              if (p.respuestaTexto) {
                  texto += `   Respuesta del estudiante: ${p.respuestaTexto}\n`;
              }
              texto += `   Nivel: ${p.etiquetaNivel || p.nivel || "Sin clasificar"} · ${Number(p.puntos || 0).toFixed(2)}/1,00\n`;
              if (Array.isArray(p.criteriosCumplidos) && p.criteriosCumplidos.length) {
                  texto += `   Criterios cumplidos: ${p.criteriosCumplidos.join(", ")}\n`;
              }
              if (Array.isArray(p.criteriosFaltantes) && p.criteriosFaltantes.length) {
                  texto += `   Criterios a fortalecer: ${p.criteriosFaltantes.join(", ")}\n`;
              }
              texto += "\n";
          });

          return texto;
      }

      function inicializarEditorCodeMirror(textarea) {
          if (!textarea || textarea.__codeMirrorView) return textarea?.__codeMirrorView || null;
          const CM = window.CodeMirror6;
          if (!CM) return null;
          const {
              Compartment,
              Decoration,
              EditorState,
              EditorView,
              keymap,
              lineNumbers,
              highlightActiveLine,
              drawSelection,
              defaultKeymap,
              indentWithTab,
              javascript,
              closeBrackets,
              closeBracketsKeymap,
              autocompletion,
              completionKeymap,
              startCompletion
          } = CM;

          const host = document.createElement("div");
          host.className = "codemirror-host";
          textarea.parentNode.insertBefore(host, textarea);
          textarea.classList.add("codemirror-source-hidden");

          const barra = document.createElement("div");
          barra.className = "cm-workbench-toolbar";
          barra.setAttribute("role", "toolbar");
          barra.setAttribute("aria-label", "Herramientas del editor de código");
          barra.innerHTML = `
              <label class="cm-workbench-search">
                  <span class="sr-only">Buscar en el código</span>
                  <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                  <input type="search" placeholder="Buscar en el código" autocomplete="off">
              </label>
              <button type="button" data-cm-find title="Buscar siguiente" aria-label="Buscar siguiente"><i class="fa-solid fa-arrow-down"></i></button>
              <button type="button" data-cm-replace title="Reemplazar selección" aria-label="Reemplazar selección"><i class="fa-solid fa-arrow-right-arrow-left"></i></button>
              <button type="button" data-cm-undo title="Deshacer" aria-label="Deshacer"><i class="fa-solid fa-rotate-left"></i></button>
              <button type="button" data-cm-redo title="Rehacer" aria-label="Rehacer"><i class="fa-solid fa-rotate-right"></i></button>
              <button type="button" data-cm-complete title="Mostrar sugerencias (Ctrl+Espacio)" aria-label="Mostrar sugerencias"><i class="fa-solid fa-wand-magic-sparkles"></i></button>
              <select data-cm-font aria-label="Tamaño de fuente">
                  <option value=".8rem">Pequeña</option>
                  <option value=".9rem" selected>Normal</option>
                  <option value="1rem">Grande</option>
                  <option value="1.1rem">Muy grande</option>
              </select>
              <button type="button" data-cm-wrap title="Ajustar líneas largas" aria-label="Ajustar líneas largas" aria-pressed="false"><i class="fa-solid fa-align-left"></i></button>
              <span class="cm-workbench-position" aria-live="polite">Línea 1, columna 1</span>
              <span class="cm-workbench-status" aria-live="polite"></span>`;
          host.appendChild(barra);

          const cursores = document.createElement("div");
          cursores.className = "cm-remote-cursors";
          host.appendChild(cursores);

          let sincronizando = false;
          const restringirPortapapeles = () =>
              textarea.matches('.code-editor[id^="editor-"]') &&
              !document.body.classList.contains('teacher-authorized');
          let restaurandoHistorial = false;
          let ultimoGrupoHistorial = 0;
          const historialDeshacer = [];
          const historialRehacer = [];
          const ajusteLineas = new Compartment();
          const autoriasCodigo = new Compartment();
          const posicionCursor = barra.querySelector(".cm-workbench-position");
          const estadoHerramientas = barra.querySelector(".cm-workbench-status");

          const actualizarPosicion = estado => {
              const cabeza = estado.selection.main.head;
              const linea = estado.doc.lineAt(cabeza);
              posicionCursor.textContent = `Línea ${linea.number}, columna ${cabeza - linea.from + 1}`;
          };

          let view;
          const reemplazarDocumento = (valor, conservarHistorial = true) => {
              const siguiente = String(valor || "");
              if (!view || view.state.doc.toString() === siguiente) return;
              if (!conservarHistorial) sincronizando = true;
              view.dispatch({
                  changes: { from: 0, to: view.state.doc.length, insert: siguiente },
                  selection: { anchor: Math.min(siguiente.length, textarea.selectionStart || 0) }
              });
              sincronizando = false;
          };

          const deshacer = () => {
              const anterior = historialDeshacer.pop();
              if (anterior === undefined) {
                  estadoHerramientas.textContent = "No hay más cambios para deshacer.";
                  return true;
              }
              historialRehacer.push(view.state.doc.toString());
              restaurandoHistorial = true;
              reemplazarDocumento(anterior);
              restaurandoHistorial = false;
              estadoHerramientas.textContent = "Cambio deshecho.";
              return true;
          };

          const rehacer = () => {
              const siguiente = historialRehacer.pop();
              if (siguiente === undefined) {
                  estadoHerramientas.textContent = "No hay cambios para rehacer.";
                  return true;
              }
              historialDeshacer.push(view.state.doc.toString());
              restaurandoHistorial = true;
              reemplazarDocumento(siguiente);
              restaurandoHistorial = false;
              estadoHerramientas.textContent = "Cambio rehecho.";
              return true;
          };

          const atajos = keymap.of([
              { key: "Mod-z", run: deshacer },
              { key: "Mod-Shift-z", run: rehacer },
              { key: "Mod-y", run: rehacer },
              { key: "Mod-s", run: () => { window.guardarAhoraFirebase?.(); return true; } },
              { key: "Mod-Enter", run: () => { window.ejecutarCodigo?.(textarea.id.replace("editor-", "")); return true; } },
              ...defaultKeymap,
              ...closeBracketsKeymap,
              ...completionKeymap,
              indentWithTab
          ]);

          try {
              view = new EditorView({
                  state: EditorState.create({
                      doc: textarea.value || "",
                      extensions: [
                          lineNumbers(),
                          javascript(),
                          closeBrackets(),
                          autocompletion(),
                          highlightActiveLine(),
                          drawSelection(),
                          ajusteLineas.of([]),
                          autoriasCodigo.of([]),
                          atajos,
                          EditorView.domEventHandlers({
                              focus: () => {
                                  textarea.dispatchEvent(new Event("click", { bubbles: true }));
                                  return false;
                              },
                              paste: evento => {
                                  if (!restringirPortapapeles()) return false;
                                  evento.preventDefault();
                                  estadoHerramientas.textContent = "Pegado deshabilitado para estudiantes.";
                                  return true;
                              },
                              copy: evento => {
                                  if (!restringirPortapapeles()) return false;
                                  evento.preventDefault();
                                  estadoHerramientas.textContent = "Copiado deshabilitado para estudiantes.";
                                  return true;
                              },
                              cut: evento => {
                                  if (!restringirPortapapeles()) return false;
                                  evento.preventDefault();
                                  estadoHerramientas.textContent = "Cortar deshabilitado para estudiantes.";
                                  return true;
                              },
                              dragstart: evento => {
                                  if (!restringirPortapapeles()) return false;
                                  evento.preventDefault();
                                  if (evento.dataTransfer) evento.dataTransfer.dropEffect = "none";
                                  estadoHerramientas.textContent = "Arrastrar código está deshabilitado para estudiantes.";
                                  return true;
                              },
                              dragover: evento => {
                                  if (!restringirPortapapeles()) return false;
                                  evento.preventDefault();
                                  if (evento.dataTransfer) evento.dataTransfer.dropEffect = "none";
                                  return true;
                              },
                              drop: evento => {
                                  if (!restringirPortapapeles()) return false;
                                  evento.preventDefault();
                                  if (evento.dataTransfer) evento.dataTransfer.dropEffect = "none";
                                  estadoHerramientas.textContent = "Soltar código está deshabilitado para estudiantes.";
                                  return true;
                              }
                          }),
                          EditorView.updateListener.of(update => {
                              if (update.docChanged && !sincronizando) {
                                  const ahora = Date.now();
                                  const anterior = update.startState.doc.toString();
                                  if (!restaurandoHistorial) {
                                      if (!historialDeshacer.length || ahora - ultimoGrupoHistorial > 700) {
                                          historialDeshacer.push(anterior);
                                          if (historialDeshacer.length > 100) historialDeshacer.shift();
                                      }
                                      historialRehacer.length = 0;
                                      ultimoGrupoHistorial = ahora;
                                  }
                                  textarea.value = update.state.doc.toString();
                                  textarea.dispatchEvent(new Event("input", { bubbles: true }));
                              }
                              if (update.selectionSet) {
                                  const seleccion = update.state.selection.main;
                                  textarea.setSelectionRange(seleccion.from, seleccion.to);
                                  textarea.dispatchEvent(new Event("cm-selection-change"));
                              }
                              if (update.selectionSet || update.docChanged) actualizarPosicion(update.state);
                          })
                      ]
                  }),
                  parent: host
              });
          } catch (error) {
              console.warn("CodeMirror no pudo iniciarse; se mantiene el editor compatible.", error);
              host.remove();
              textarea.classList.remove("codemirror-source-hidden");
              return null;
          }

          textarea.__codeMirrorView = view;
          textarea.__codeMirrorHost = host;
          textarea.__syncCodeMirror = valor => reemplazarDocumento(valor, false);
          textarea.__getCodeMirrorSelection = () => ({
              inicio: view.state.selection.main.from,
              fin: view.state.selection.main.to
          });
          textarea.__getCodeMirrorSelectedText = () => {
              const seleccion = view.state.selection.main;
              return view.state.sliceDoc(seleccion.from, seleccion.to);
          };
          textarea.__setCodeMirrorDisabled = deshabilitado => {
              const bloqueado = Boolean(deshabilitado);
              host.classList.toggle("cm-disabled", bloqueado);
              host.setAttribute("aria-disabled", String(bloqueado));
              view.contentDOM.contentEditable = bloqueado ? "false" : "true";
              view.contentDOM.tabIndex = bloqueado ? -1 : 0;
              if (bloqueado && view.hasFocus) view.contentDOM.blur();
          };
          textarea.__renderAuthorDecorations = fragmentos => {
              let posicion = 0;
              const limite = view.state.doc.length;
              const rangos = [];
              (Array.isArray(fragmentos) ? fragmentos : []).forEach(fragmento => {
                  const texto = typeof fragmento?.insert === "string" ? fragmento.insert : String(fragmento?.insert || "");
                  const inicio = Math.min(limite, posicion);
                  posicion += texto.length;
                  const fin = Math.min(limite, posicion);
                  if (fin <= inicio) return;
                  const rol = fragmento?.attributes?.autorRol;
                  const clase = rol === "docente" ? "cm-author-teacher" : rol === "estudiante" ? "cm-author-student" : "cm-author-base";
                  rangos.push(Decoration.mark({ class: clase }).range(inicio, fin));
              });
              view.dispatch({
                  effects: autoriasCodigo.reconfigure(EditorView.decorations.of(Decoration.set(rangos, true)))
              });
          };
          textarea.__renderRemoteCursors = participantes => {
              textarea.__remoteCursorParticipants = Array.isArray(participantes) ? participantes : [];
              cursores.replaceChildren();
              const propio = window.firebaseTeacherUser?.uid || window.firebaseCurrentUser?.uid;
              textarea.__remoteCursorParticipants
                  .filter(item => item?.autorUid && item.autorUid !== propio)
                  .forEach(item => {
                      const posicion = Math.max(0, Math.min(view.state.doc.length, Number(item.cursorInicio) || 0));
                      const coordenadas = view.coordsAtPos(posicion);
                      if (!coordenadas) return;
                      const rect = host.getBoundingClientRect();
                      const marcador = document.createElement("span");
                      marcador.className = `cm-remote-cursor ${item.rol === "docente" ? "teacher" : "student"}`;
                      marcador.style.left = `${coordenadas.left - rect.left}px`;
                      marcador.style.top = `${coordenadas.top - rect.top}px`;
                      const etiqueta = document.createElement("span");
                      etiqueta.className = "cm-remote-cursor-label";
                      etiqueta.textContent = item.nombre || (item.rol === "docente" ? "Docente" : "Estudiante");
                      marcador.appendChild(etiqueta);
                      cursores.appendChild(marcador);
                  });
          };

          textarea.addEventListener("input", () => {
              if (!sincronizando && view.state.doc.toString() !== textarea.value) {
                  textarea.__syncCodeMirror(textarea.value);
              }
          });
          textarea.addEventListener("crdt-remote-change", () => {
              textarea.__syncCodeMirror(textarea.value);
              textarea.__renderRemoteCursors(textarea.__remoteCursorParticipants || []);
          });
          view.scrollDOM.addEventListener("scroll", () => {
              textarea.__renderRemoteCursors(textarea.__remoteCursorParticipants || []);
          }, { passive: true });

          const observadorBloqueo = new MutationObserver(() => textarea.__setCodeMirrorDisabled(textarea.disabled));
          observadorBloqueo.observe(textarea, { attributes: true, attributeFilter: ["disabled"] });
          textarea.__codeMirrorObserver = observadorBloqueo;
          textarea.focus = () => view.focus();

          const campoBusqueda = barra.querySelector("input[type=search]");
          const buscarSiguiente = () => {
              const termino = campoBusqueda.value;
              if (!termino) {
                  estadoHerramientas.textContent = "Escribí un texto para buscar.";
                  campoBusqueda.focus();
                  return false;
              }
              const documento = view.state.doc.toString();
              let posicion = documento.indexOf(termino, view.state.selection.main.to);
              if (posicion < 0) posicion = documento.indexOf(termino);
              if (posicion < 0) {
                  estadoHerramientas.textContent = `No se encontró “${termino}”.`;
                  return false;
              }
              const coincidencias = documento.split(termino).length - 1;
              view.dispatch({ selection: { anchor: posicion, head: posicion + termino.length }, scrollIntoView: true });
              view.focus();
              estadoHerramientas.textContent = `${coincidencias} coincidencia${coincidencias === 1 ? "" : "s"}.`;
              return true;
          };
          barra.querySelector("[data-cm-find]").onclick = buscarSiguiente;
          campoBusqueda.addEventListener("keydown", evento => {
              if (evento.key === "Enter") { evento.preventDefault(); buscarSiguiente(); }
              if (evento.key === "Escape") {
                  campoBusqueda.value = "";
                  estadoHerramientas.textContent = "";
                  view.focus();
              }
          });
          barra.querySelector("[data-cm-replace]").onclick = () => {
              const termino = campoBusqueda.value;
              if (!termino) {
                  estadoHerramientas.textContent = "Buscá primero el texto que querés reemplazar.";
                  campoBusqueda.focus();
                  return;
              }
              const seleccion = view.state.selection.main;
              if (view.state.sliceDoc(seleccion.from, seleccion.to) !== termino && !buscarSiguiente()) return;
              const reemplazo = prompt(`Reemplazar “${termino}” por:`, "");
              if (reemplazo === null) return;
              const rango = view.state.selection.main;
              view.dispatch({
                  changes: { from: rango.from, to: rango.to, insert: reemplazo },
                  selection: { anchor: rango.from + reemplazo.length }
              });
              view.focus();
              estadoHerramientas.textContent = "Coincidencia reemplazada.";
          };
          barra.querySelector("[data-cm-undo]").onclick = deshacer;
          barra.querySelector("[data-cm-redo]").onclick = rehacer;
          barra.querySelector("[data-cm-complete]").onclick = () => { view.focus(); startCompletion(view); };
          barra.querySelector("[data-cm-font]").onchange = evento => host.style.setProperty("--cm-font-size", evento.target.value);
          barra.querySelector("[data-cm-wrap]").onclick = evento => {
              const activo = evento.currentTarget.getAttribute("aria-pressed") !== "true";
              evento.currentTarget.setAttribute("aria-pressed", String(activo));
              view.dispatch({ effects: ajusteLineas.reconfigure(activo ? EditorView.lineWrapping : []) });
              view.focus();
          };

          textarea.__setCodeMirrorDisabled(textarea.disabled);
          actualizarPosicion(view.state);
          return view;
      }
      window.inicializarEditorCodeMirror = inicializarEditorCodeMirror;

      function configurarEditores() {
          document.querySelectorAll('.code-editor').forEach(textarea => {
              inicializarEditorCodeMirror(textarea);
              const sectionIdInicial = textarea.id.replace('editor-', '');
              actualizarMetricasEditor(sectionIdInicial);
              textarea.addEventListener('click', (e) => {
                  const secId = e.target.id.replace('editor-', '');
                  iniciarCronometro(secId);
              });
              textarea.addEventListener('input', (e) => {
                  const secId = e.target.id.replace('editor-', '');
                  if (!actividadesFinalizadas[secId] && !modulosPausados[secId]) {
                      setLocalStorage(`draft_${e.target.id}`, e.target.value);
                      actualizarMetricasEditor(secId);
                      actualizarEstadoEditorEstudiante(secId, "dirty");
                      registrarActividadConexionEstudiante(secId);
                  }
              });
              textarea.addEventListener('keydown', function(e) {
                  if (e.key === 'Tab') {
                      e.preventDefault();
                      const start = this.selectionStart;
                      const end = this.selectionEnd;
                      this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
                      this.selectionStart = this.selectionEnd = start + 4;
                      this.dispatchEvent(new Event('input', { bubbles: true }));
                      setLocalStorage(`draft_${this.id}`, this.value);
                      const secId = this.id.replace('editor-', '');
                      actualizarMetricasEditor(secId);
                      actualizarEstadoEditorEstudiante(secId, "dirty");
                  }
              });
          });
      }

      function bloquearCopiaYPegado() {
          document.querySelectorAll('.code-editor').forEach(editor => {
              if (editor.dataset.clipboardGuard === 'true') return;
              editor.dataset.clipboardGuard = 'true';
              const bloquear = e => {
                  if (document.body.classList.contains('teacher-authorized')) return;
                  e.preventDefault();
              };
              editor.addEventListener('paste', bloquear);
              editor.addEventListener('copy', bloquear);
              editor.addEventListener('cut', bloquear);
              editor.addEventListener('contextmenu', bloquear);
              editor.addEventListener('dragstart', bloquear);
              editor.addEventListener('dragover', bloquear);
              editor.addEventListener('drop', bloquear);
          });
      }

      // ==========================================
      // FUNCIONES DE IMPORTACIÓN Y EXPORTACIÓN JSON Y PDF
      // ==========================================

      // ===============================
      // PANEL PROFESOR EN TIEMPO REAL
      // ===============================
      let profesorUnsubscribe = null;
      let estudiantesProfesor = [];
      let solicitudesPendientesConocidas = null;
      let sonidoSolicitudesActivo = localStorage.getItem('teacher_pending_request_sound') === 'true';

      function cambiarSonidoSolicitudes(activo) {
          sonidoSolicitudesActivo = Boolean(activo);
          localStorage.setItem('teacher_pending_request_sound', String(sonidoSolicitudesActivo));
          if (sonidoSolicitudesActivo) reproducirSonidoSolicitud();
      }

      function reproducirSonidoSolicitud() {
          if (!sonidoSolicitudesActivo) return;
          try {
              const AudioContextClass = window.AudioContext || window.webkitAudioContext;
              if (!AudioContextClass) return;
              const contexto = new AudioContextClass();
              const oscilador = contexto.createOscillator();
              const volumen = contexto.createGain();
              oscilador.type = 'sine';
              oscilador.frequency.setValueAtTime(740, contexto.currentTime);
              oscilador.frequency.setValueAtTime(920, contexto.currentTime + .12);
              volumen.gain.setValueAtTime(.0001, contexto.currentTime);
              volumen.gain.exponentialRampToValueAtTime(.12, contexto.currentTime + .02);
              volumen.gain.exponentialRampToValueAtTime(.0001, contexto.currentTime + .28);
              oscilador.connect(volumen);
              volumen.connect(contexto.destination);
              oscilador.start();
              oscilador.stop(contexto.currentTime + .3);
              oscilador.addEventListener('ended', () => contexto.close().catch(() => null));
          } catch (error) {
              console.warn('No se pudo reproducir el aviso sonoro.', error);
          }
      }

      function ocultarAlertaNuevaSolicitud() {
          document.getElementById('alertaNuevaSolicitud')?.classList.remove('active');
      }

      function mostrarAlertaNuevaSolicitud(nuevas) {
          if (!nuevas.length) return;
          const nombres = nuevas.map(d => d.estudiante?.nombre || d.nombreGoogle || d.email || 'Estudiante');
          const texto = nuevas.length === 1
              ? `Nueva solicitud: ${nombres[0]}.`
              : `${nuevas.length} nuevas solicitudes de estudiantes.`;
          const etiqueta = document.getElementById('textoAlertaNuevaSolicitud');
          if (etiqueta) etiqueta.textContent = texto;
          document.getElementById('alertaNuevaSolicitud')?.classList.add('active');
          reproducirSonidoSolicitud();
      }

      function detectarNuevasSolicitudes(datos) {
          const pendientes = datos.filter(d => d.estadoCuenta === 'pendiente' && d.uid);
          const idsActuales = new Set(pendientes.map(d => d.uid));
          if (solicitudesPendientesConocidas === null) {
              solicitudesPendientesConocidas = idsActuales;
              return;
          }
          const nuevas = pendientes.filter(d => !solicitudesPendientesConocidas.has(d.uid));
          solicitudesPendientesConocidas = idsActuales;
          mostrarAlertaNuevaSolicitud(nuevas);
      }

      function renderSolicitudesPendientesProfesor() {
          const lista = document.getElementById('listaSolicitudesPendientes');
          const contador = document.getElementById('contadorSolicitudesPendientes');
          const panel = document.getElementById('solicitudesPendientesProfesor');
          if (!lista || !contador || !panel) return;
          const pendientes = estudiantesProfesor.filter(d => d.estadoCuenta === 'pendiente');
          contador.textContent = String(pendientes.length);
          panel.style.display = 'block';
          lista.innerHTML = pendientes.length ? pendientes.map(d => {
              const e = d.estudiante || {};
              const indice = estudiantesProfesor.indexOf(d);
              const fechaValor = d.solicitudAprobacionEn;
              const fecha = fechaValor?.toDate
                  ? fechaValor.toDate().toLocaleString()
                  : (fechaValor ? new Date(fechaValor).toLocaleString() : 'Sin fecha');
              return `<article class="pending-request-card">
                  <h4>${escapeHtml(e.nombre || d.nombreGoogle || 'Estudiante sin nombre')}</h4>
                  <p>
                      ${escapeHtml(d.email || 'Sin correo')}<br>
                      ${escapeHtml(e.curso || 'Sin curso')} ${escapeHtml(e.division || '')} · ${escapeHtml(e.turno || 'Sin turno')}<br>
                      Solicitud: ${escapeHtml(fecha)}
                  </p>
                  <div class="pending-request-actions">
                      <button class="btn btn-success" onclick="cambiarEstadoCuentaEstudiante(${indice}, 'activo')"><i class="fa-solid fa-user-check"></i> Aceptar</button>
                      <button class="btn btn-danger" onclick="cambiarEstadoCuentaEstudiante(${indice}, 'rechazado')"><i class="fa-solid fa-user-xmark"></i> Rechazar</button>
                  </div>
              </article>`;
          }).join('') : '<p style="color:var(--text-muted);margin:0">No hay solicitudes pendientes.</p>';
      }

      function obtenerFechaSolicitudMs(d) {
          const valor = d?.solicitudAprobacionEn;
          if (valor?.toMillis) return valor.toMillis();
          if (valor?.seconds) return Number(valor.seconds) * 1000;
          const fecha = Date.parse(valor || '');
          return Number.isFinite(fecha) ? fecha : 0;
      }

      function formatearAntiguedadSolicitud(d) {
          const inicio = obtenerFechaSolicitudMs(d);
          if (!inicio) return 'fecha no disponible';
          const minutos = Math.max(0, Math.floor((Date.now() - inicio) / 60000));
          if (minutos < 1) return 'menos de 1 minuto';
          if (minutos < 60) return `${minutos} min`;
          const horas = Math.floor(minutos / 60);
          if (horas < 24) return `${horas} h ${minutos % 60} min`;
          const dias = Math.floor(horas / 24);
          return `${dias} día${dias === 1 ? '' : 's'} ${horas % 24} h`;
      }

      function validarSolicitudEstudiante(d) {
          const e = d?.estudiante || {};
          const problemas = [];
          if (!String(e.nombre || '').trim()) problemas.push('Falta nombre y apellido.');
          if (!String(e.curso || '').trim()) problemas.push('Falta curso.');
          if (!String(e.division || '').trim()) problemas.push('Falta división.');
          if (!String(e.turno || '').trim()) problemas.push('Falta turno.');
          if (!String(d?.email || '').trim()) problemas.push('Falta correo electrónico.');
          if (d?.emailVerificado !== true) problemas.push('El correo de Google no figura como verificado.');
          return problemas;
      }

      function seleccionarTodasLasSolicitudes(seleccionar) {
          document.querySelectorAll('.pending-request-select:not(:disabled)').forEach(input => {
              input.checked = Boolean(seleccionar);
          });
          actualizarSeleccionSolicitudes();
      }

      function actualizarSeleccionSolicitudes() {
          const habilitadas = [...document.querySelectorAll('.pending-request-select:not(:disabled)')];
          const seleccionadas = habilitadas.filter(input => input.checked);
          const boton = document.getElementById('btnAceptarSolicitudesSeleccionadas');
          const resumen = document.getElementById('resumenSeleccionSolicitudes');
          const todas = document.getElementById('seleccionarTodasSolicitudes');
          if (boton) boton.disabled = seleccionadas.length === 0;
          if (resumen) resumen.textContent = `${seleccionadas.length} seleccionada${seleccionadas.length === 1 ? '' : 's'}`;
          if (todas) {
              todas.checked = habilitadas.length > 0 && seleccionadas.length === habilitadas.length;
              todas.indeterminate = seleccionadas.length > 0 && seleccionadas.length < habilitadas.length;
          }
      }

      function renderBandejaSolicitudesPendientes() {
          const lista = document.getElementById('listaSolicitudesPendientes');
          const contador = document.getElementById('contadorSolicitudesPendientes');
          if (!lista || !contador) return;
          const pendientes = estudiantesProfesor
              .filter(d => d.estadoCuenta === 'pendiente')
              .sort((a, b) => obtenerFechaSolicitudMs(a) - obtenerFechaSolicitudMs(b));
          contador.textContent = String(pendientes.length);
          lista.innerHTML = pendientes.length ? pendientes.map(d => {
              const e = d.estudiante || {};
              const indice = estudiantesProfesor.indexOf(d);
              const fechaMs = obtenerFechaSolicitudMs(d);
              const fecha = fechaMs ? new Date(fechaMs).toLocaleString() : 'Sin fecha';
              const problemas = validarSolicitudEstudiante(d);
              const seleccionable = problemas.length === 0;
              const antecedentes = Array.isArray(d.antecedentesRechazo) ? d.antecedentesRechazo : [];
              return `<article class="pending-request-card">
                  <input class="pending-request-select" type="checkbox" data-solicitud-uid="${escapeHtml(d.uid || '')}" onchange="actualizarSeleccionSolicitudes()" ${seleccionable ? '' : 'disabled'} aria-label="Seleccionar solicitud">
                  <h4>${escapeHtml(e.nombre || d.nombreGoogle || 'Estudiante sin nombre')}</h4>
                  <div class="pending-request-wait"><i class="fa-solid fa-hourglass-half"></i> Espera: ${escapeHtml(formatearAntiguedadSolicitud(d))}</div>
                  <p>
                      <strong>Correo:</strong> ${escapeHtml(d.email || 'Sin correo')} ${d.emailVerificado === true ? '· Verificado' : '· No verificado'}<br>
                      <strong>Curso:</strong> ${escapeHtml(e.curso || 'Sin curso')}<br>
                      <strong>División:</strong> ${escapeHtml(e.division || 'Sin división')}<br>
                      <strong>Turno:</strong> ${escapeHtml(e.turno || 'Sin turno')}<br>
                      <strong>Solicitud:</strong> ${escapeHtml(fecha)}
                  </p>
                  ${antecedentes.length ? `<details style="margin-bottom:.6rem;font-size:.73rem;color:var(--text-muted)"><summary style="cursor:pointer;color:#fca5a5">Antecedentes de rechazo (${antecedentes.length})</summary>${antecedentes.map(a => `<div style="margin-top:.35rem">Motivo: ${escapeHtml(a.motivo || 'Sin motivo')}<br>Responsable: ${escapeHtml(a.rechazadoPor || 'Sin registrar')}</div>`).join('')}</details>` : ''}
                  ${problemas.length ? `<div class="pending-request-warning"><i class="fa-solid fa-triangle-exclamation"></i> No se puede aceptar todavía:<br>${problemas.map(escapeHtml).join('<br>')}</div>` : ''}
                  <div class="pending-request-actions">
                      <button class="btn btn-success" onclick="cambiarEstadoCuentaEstudiante(${indice}, 'activo')" ${seleccionable ? '' : 'disabled'}><i class="fa-solid fa-user-check"></i> Aceptar</button>
                      <button class="btn btn-danger" onclick="cambiarEstadoCuentaEstudiante(${indice}, 'rechazado')"><i class="fa-solid fa-user-xmark"></i> Rechazar</button>
                  </div>
              </article>`;
          }).join('') : '<p style="color:var(--text-muted);margin:0">No hay solicitudes pendientes.</p>';
          const todas = document.getElementById('seleccionarTodasSolicitudes');
          if (todas) todas.checked = false;
          actualizarSeleccionSolicitudes();
      }

      async function aceptarSolicitudesSeleccionadas() {
          const ids = [...document.querySelectorAll('.pending-request-select:checked')].map(input => input.dataset.solicitudUid);
          const solicitudes = ids.map(uid => estudiantesProfesor.find(d => d.uid === uid)).filter(Boolean);
          if (!solicitudes.length) return;
          if (solicitudes.some(d => validarSolicitudEstudiante(d).length)) {
              alert('Hay solicitudes con datos incompletos o correo no verificado.');
              return;
          }
          const nombres = solicitudes.map(d => d.estudiante?.nombre || d.email || 'Estudiante');
          if (!confirm(`¿Aceptar ${solicitudes.length} solicitud(es)?\n\n${nombres.join('\n')}`)) return;
          let aceptadas = 0;
          for (const solicitud of solicitudes) {
              if (await aceptarSolicitudDocenteDirecta(solicitud)) aceptadas++;
          }
          renderPanelProfesor();
          alert(`Se aceptaron ${aceptadas} de ${solicitudes.length} solicitudes.`);
      }

      async function aceptarSolicitudDocenteDirecta(d) {
          if (!d?.uid || validarSolicitudEstudiante(d).length) return false;
          const responsable = window.firebaseTeacherUser?.email || window.firebaseCurrentUser?.email ||
              window.firebaseTeacherUser?.displayName || window.firebaseCurrentUser?.displayName || '';
          const payload = {
              estadoCuenta: 'activo',
              aprobadoEn: new Date().toISOString(),
              aprobadoPor: responsable,
              bajaMotivo: '',
              bajaFecha: null,
              bajaPor: ''
          };
          const ok = await window.guardarEstadoEstudianteFirebase?.(d.uid, payload);
          if (ok) Object.assign(d, payload);
          return Boolean(ok);
      }

      function renderDocentesAutorizados() {
          const contenedor = document.getElementById('listaDocentesAutorizados');
          const cantidad = document.getElementById('cantidadDocentesAutorizados');
          if (!contenedor || !cantidad) return;
          const docentesAutorizados = Array.isArray(window.TEACHER_EMAILS)
              ? window.TEACHER_EMAILS
              : [];
          const correoSesion = String(
              window.firebaseTeacherUser?.email ||
              window.firebaseCurrentUser?.email ||
              ''
          ).trim().toLowerCase();
          cantidad.textContent = `(${docentesAutorizados.length})`;
          contenedor.innerHTML = docentesAutorizados.map((email, indice) => {
              const actual = email.toLowerCase() === correoSesion;
              return `<div style="display:flex;align-items:center;gap:.55rem;padding:.6rem .7rem;border:1px solid ${actual ? 'rgba(16,185,129,.55)' : 'rgba(148,163,184,.2)'};border-radius:6px;background:${actual ? 'rgba(16,185,129,.12)' : 'rgba(15,23,42,.45)'}">
                  <i class="fa-solid ${actual ? 'fa-circle-check' : 'fa-envelope'}" style="color:${actual ? '#6ee7b7' : '#7dd3fc'}"></i>
                  <div style="min-width:0">
                      <strong style="display:block;overflow-wrap:anywhere">${escapeHtml(email)}</strong>
                      <small style="color:${actual ? '#a7f3d0' : 'var(--text-muted)'}">${actual ? 'Sesión docente verificada y activa' : `Docente autorizado ${indice + 1} · requiere correo verificado`}</small>
                  </div>
              </div>`;
          }).join('');
      }

      let documentosHistorialJitsiAdministrador = [];

      function actualizarMantenimientoJitsiAdministrador() {
          const seccion = document.getElementById('mantenimientoJitsiAdministrador');
          if (!seccion) return;
          seccion.hidden = window.esAdministradorPrincipalDocente?.() !== true;
      }

      function actualizarConfirmacionEliminarHistorialJitsi() {
          const confirmacion = document.getElementById('confirmacionEliminarHistorialJitsi');
          const boton = document.getElementById('btnConfirmarEliminarHistorialJitsi');
          if (!boton) return;
          boton.disabled = String(confirmacion?.value || '').trim().toUpperCase() !== 'BORRAR JITSI' ||
              documentosHistorialJitsiAdministrador.length === 0;
      }

      function abrirEliminacionHistorialJitsiAdministrador() {
          if (window.esAdministradorPrincipalDocente?.() !== true) {
              alert('Solo la cuenta administradora principal puede realizar esta operación.');
              return;
          }
          documentosHistorialJitsiAdministrador = [];
          const modal = document.getElementById('eliminarHistorialJitsiAdminModal');
          const resumen = document.getElementById('resumenEliminacionHistorialJitsi');
          const alcance = document.getElementById('alcanceEliminacionHistorialJitsi');
          const confirmacion = document.getElementById('confirmacionEliminarHistorialJitsi');
          if (resumen) resumen.textContent = 'Presioná “Revisar documentos” para contar el historial existente.';
          if (alcance) alcance.textContent = 'Todas las clases y fechas';
          if (confirmacion) confirmacion.value = '';
          actualizarConfirmacionEliminarHistorialJitsi();
          modal?.classList.add('active');
          setTimeout(() => modal?.querySelector('.teacher-danger-operation-box')?.focus(), 0);
      }

      function cerrarEliminacionHistorialJitsiAdministrador() {
          document.getElementById('eliminarHistorialJitsiAdminModal')?.classList.remove('active');
          documentosHistorialJitsiAdministrador = [];
      }

      document.getElementById('eliminarHistorialJitsiAdminModal')?.addEventListener('click', evento => {
          if (evento.target?.id === 'eliminarHistorialJitsiAdminModal') {
              cerrarEliminacionHistorialJitsiAdministrador();
          }
      });
      document.addEventListener('keydown', evento => {
          if (evento.key === 'Escape' &&
              document.getElementById('eliminarHistorialJitsiAdminModal')?.classList.contains('active')) {
              evento.preventDefault();
              cerrarEliminacionHistorialJitsiAdministrador();
          }
      });

      async function revisarHistorialJitsiAdministrador() {
          const boton = document.getElementById('btnRevisarHistorialJitsiFirestore');
          const resumen = document.getElementById('resumenEliminacionHistorialJitsi');
          const original = boton?.innerHTML || '';
          if (boton) {
              boton.disabled = true;
              boton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Revisando...';
          }
          if (resumen) resumen.textContent = 'Consultando Firestore...';
          const resultado = await window.revisarHistorialJitsiAdministradorFirebase?.();
          if (boton) {
              boton.disabled = false;
              boton.innerHTML = original;
          }
          if (!resultado?.ok) {
              documentosHistorialJitsiAdministrador = [];
              if (resumen) resumen.textContent = resultado?.error || 'No se pudo revisar el historial.';
              actualizarConfirmacionEliminarHistorialJitsi();
              return;
          }
          documentosHistorialJitsiAdministrador = resultado.documentos || [];
          if (resumen) {
              resumen.innerHTML = resultado.cantidad
                  ? `<strong>${resultado.cantidad}</strong> documento${resultado.cantidad === 1 ? '' : 's'} histórico${resultado.cantidad === 1 ? '' : 's'} listo${resultado.cantidad === 1 ? '' : 's'} para eliminar.`
                  : '<strong>No hay documentos históricos Jitsi.</strong> No es necesario ejecutar la eliminación.';
          }
          actualizarConfirmacionEliminarHistorialJitsi();
      }

      async function eliminarHistorialJitsiAdministrador() {
          const confirmacion = String(document.getElementById('confirmacionEliminarHistorialJitsi')?.value || '').trim().toUpperCase();
          if (confirmacion !== 'BORRAR JITSI' || !documentosHistorialJitsiAdministrador.length) return;
          const cantidadEsperada = documentosHistorialJitsiAdministrador.length;
          if (!confirm(`Se eliminarán definitivamente ${cantidadEsperada} documento(s) históricos Jitsi de todas las clases y fechas. ¿Continuar?`)) return;
          const boton = document.getElementById('btnConfirmarEliminarHistorialJitsi');
          const resumen = document.getElementById('resumenEliminacionHistorialJitsi');
          if (boton) {
              boton.disabled = true;
              boton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Eliminando...';
          }
          if (resumen) resumen.textContent = 'Eliminando documentos por lotes. No cierres esta ventana.';
          const resultado = await window.eliminarHistorialJitsiAdministradorFirebase?.(
              documentosHistorialJitsiAdministrador
          );
          if (!resultado?.ok) {
              if (boton) {
                  boton.innerHTML = '<i class="fa-solid fa-trash-can"></i> Reintentar eliminación';
                  boton.disabled = false;
              }
              if (resumen) {
                  resumen.textContent = `${resultado?.error || 'No se pudo completar la eliminación.'} Eliminados antes del error: ${Number(resultado?.eliminadas || 0)}.`;
              }
              return;
          }
          documentosHistorialJitsiAdministrador = [];
          if (resumen) {
              resumen.innerHTML = resultado.auditoriaRegistrada === false
                  ? `<strong>Eliminación completada con advertencia.</strong> Se borraron ${resultado.eliminadas} documento(s), pero no se pudo registrar la auditoría. Publicá las reglas actualizadas y revisá la consola.`
                  : `<strong>Eliminación completada.</strong> Se borraron ${resultado.eliminadas} documento(s) y se registró la operación administrativa.`;
          }
          if (boton) {
              boton.innerHTML = '<i class="fa-solid fa-circle-check"></i> Historial eliminado';
              boton.disabled = true;
          }
          const confirmacionInput = document.getElementById('confirmacionEliminarHistorialJitsi');
          if (confirmacionInput) confirmacionInput.value = '';
      }

      async function eliminarHistorialAportesAdministrador() {
          if (window.esAdministradorPrincipalDocente?.() !== true) {
              alert('Solo la cuenta administradora principal puede realizar esta operación.');
              return;
          }
          const confirmacion = prompt('Esta operación elimina definitivamente todos los aportes colaborativos antiguos. Escribí BORRAR APORTES para continuar.');
          if (String(confirmacion || '').trim().toUpperCase() !== 'BORRAR APORTES') return;
          const boton = document.getElementById('btnEliminarHistorialAportesFirestore');
          const original = boton?.innerHTML || '';
          if (boton) {
              boton.disabled = true;
              boton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Eliminando aportes...';
          }
          const resultado = await window.eliminarHistorialAportesAdministradorFirebase?.();
          if (boton) {
              boton.disabled = false;
              boton.innerHTML = original;
          }
          if (!resultado?.ok) {
              alert(`${resultado?.error || 'No se pudo completar la eliminación.'} Eliminados antes del error: ${Number(resultado?.eliminadas || 0)}.`);
              return;
          }
          alert(`Limpieza completada. Se eliminaron ${Number(resultado.eliminadas || 0)} documento(s) antiguos de historialAportes.`);
      }

      function completarFormularioRubricaSocratica() {
          const rubrica = normalizarRubricaSocratica(rubricaSocraticaActual);
          const asignarValor = (id, valor) => {
              const campo = document.getElementById(id);
              if (campo) campo.value = valor;
          };
          const asignarCheck = (id, valor) => {
              const campo = document.getElementById(id);
              if (campo) campo.checked = valor !== false;
          };
          asignarValor("rubricaPuntosCompleta", rubrica.puntos.completa);
          asignarValor("rubricaPuntosIncompleta", rubrica.puntos.incompleta);
          asignarValor("rubricaPuntosParcial", rubrica.puntos.parcial);
          asignarValor("rubricaPuntosIncorrecta", rubrica.puntos.incorrecta);
          asignarValor("rubricaPalabrasMinimas", rubrica.palabrasMinimas);
          asignarCheck("rubricaCriterioDesarrollo", rubrica.criterios.desarrollo);
          asignarCheck("rubricaCriterioJustificacion", rubrica.criterios.justificacion);
          asignarCheck("rubricaCriterioEvidencia", rubrica.criterios.evidencia);
          asignarCheck("rubricaCriterioConsecuencia", rubrica.criterios.consecuencia);
          asignarValor("rubricaAlertaRiesgoMinimo", rubrica.alertas.riesgoMinimo);
          asignarValor("rubricaAlertaAumentoMinimo", rubrica.alertas.aumentoMinimo);
          asignarValor("rubricaAlertaMuestraMinima", rubrica.alertas.muestraMinima);
          asignarValor("rubricaAlertaSeveridadAlta", rubrica.alertas.severidadAlta);
      }

      function leerFormularioRubricaSocratica() {
          const numero = id => Number(document.getElementById(id)?.value);
          return normalizarRubricaSocratica({
              puntos: {
                  completa: numero("rubricaPuntosCompleta"),
                  incompleta: numero("rubricaPuntosIncompleta"),
                  parcial: numero("rubricaPuntosParcial"),
                  incorrecta: numero("rubricaPuntosIncorrecta")
              },
              palabrasMinimas: numero("rubricaPalabrasMinimas"),
              criterios: {
                  desarrollo: document.getElementById("rubricaCriterioDesarrollo")?.checked === true,
                  justificacion: document.getElementById("rubricaCriterioJustificacion")?.checked === true,
                  evidencia: document.getElementById("rubricaCriterioEvidencia")?.checked === true,
                  consecuencia: document.getElementById("rubricaCriterioConsecuencia")?.checked === true
              },
              alertas: {
                  riesgoMinimo: numero("rubricaAlertaRiesgoMinimo"),
                  aumentoMinimo: numero("rubricaAlertaAumentoMinimo"),
                  muestraMinima: numero("rubricaAlertaMuestraMinima"),
                  severidadAlta: numero("rubricaAlertaSeveridadAlta")
              }
          });
      }

      function validarRubricaSocratica(rubrica) {
          const p = rubrica.puntos;
          if (!(p.completa > 0)) return "El puntaje de respuesta completa debe ser mayor que cero.";
          if (!(p.completa >= p.incompleta && p.incompleta >= p.parcial && p.parcial >= p.incorrecta)) {
              return "Los puntajes deben respetar este orden: completa ≥ incompleta ≥ parcial ≥ incorrecta.";
          }
          if (!Object.values(rubrica.criterios).some(Boolean)) {
              return "Activá al menos un criterio de evaluación.";
          }
          if (rubrica.alertas.severidadAlta < rubrica.alertas.riesgoMinimo) {
              return "El umbral de severidad alta no puede ser menor que el riesgo mínimo.";
          }
          return "";
      }

      async function guardarRubricaSocraticaProfesor(boton = null) {
          const estado = document.getElementById("estadoRubricaSocraticaProfesor");
          const rubrica = leerFormularioRubricaSocratica();
          const error = validarRubricaSocratica(rubrica);
          if (error) {
              if (estado) {
                  estado.className = "is-error";
                  estado.textContent = error;
              }
              return;
          }
          const contenido = boton?.innerHTML || "";
          if (boton) {
              boton.disabled = true;
              boton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Guardando...';
          }
          if (estado) {
              estado.className = "";
              estado.textContent = "Guardando configuración...";
          }
          try {
              const guardada = await window.guardarRubricaSocraticaFirebase?.(rubrica);
              if (guardada === false) throw new Error("Firebase rechazó la actualización.");
              aplicarRubricaSocratica({
                  ...rubrica,
                  actualizadaPor: window.firebaseTeacherUser?.email || window.firebaseCurrentUser?.email || "docente",
                  actualizadaEn: new Date().toISOString()
              });
              localStorage.setItem("rubrica_socratica_docente", JSON.stringify(rubricaSocraticaActual));
              if (estado) {
                  estado.className = "is-success";
                  estado.textContent = "Rúbrica guardada y sincronizada.";
              }
              renderInformeGrupalSocratico();
          } catch (e) {
              if (estado) {
                  estado.className = "is-error";
                  estado.textContent = `No se pudo guardar: ${e.message}`;
              }
          } finally {
              if (boton) {
                  boton.disabled = false;
                  boton.innerHTML = contenido;
              }
          }
      }

      function restaurarRubricaSocraticaProfesor() {
          aplicarRubricaSocratica(RUBRICA_SOCRATICA_PREDETERMINADA);
          const estado = document.getElementById("estadoRubricaSocraticaProfesor");
          if (estado) {
              estado.className = "";
              estado.textContent = "Valores predeterminados cargados. Presioná Guardar rúbrica para sincronizarlos.";
          }
      }

      function prepararFiltroInformeSocratico() {
          const selector = document.getElementById("filtroInformeSocraticoModulo");
          if (!selector || selector.dataset.ready === "true") return;
          selector.insertAdjacentHTML("beforeend", seccionesData.map(sec =>
              `<option value="${escapeHtml(sec.id)}">${escapeHtml(sec.title)}</option>`
          ).join(""));
          selector.dataset.ready = "true";
      }

      function obtenerConteoInformeSocratico(estudiante, sectionId = "") {
          const historial = estudiante?.historialResultados || {};
          if (sectionId) return obtenerConteoNivelesAnalista(historial[sectionId]?.analista);
          return resumirNivelesAnalistaEstudiante(historial);
      }

      function obtenerFiltrosGrupoInformeSocratico() {
          return {
              curso: document.getElementById("filtroCursoProfesor")?.value || "",
              division: document.getElementById("filtroDivisionProfesor")?.value || "",
              turno: document.getElementById("filtroTurnoProfesor")?.value || ""
          };
      }

      function obtenerEstudiantesFiltradosInformeSocratico() {
          const filtros = obtenerFiltrosGrupoInformeSocratico();
          return estudiantesProfesor.filter(d => {
              if (d?.estadoCuenta === "rechazado") return false;
              const estudiante = d.estudiante || {};
              if (filtros.curso && estudiante.curso !== filtros.curso) return false;
              if (filtros.division && estudiante.division !== filtros.division) return false;
              if (filtros.turno && estudiante.turno !== filtros.turno) return false;
              return true;
          });
      }

      function describirAlcanceGrupoInformeSocratico() {
          const filtros = obtenerFiltrosGrupoInformeSocratico();
          const partes = [
              filtros.curso ? `Curso ${filtros.curso}` : "",
              filtros.division ? `División ${filtros.division}` : "",
              filtros.turno ? `Turno ${filtros.turno}` : ""
          ].filter(Boolean);
          return partes.length ? partes.join(" · ") : "Todos los cursos, divisiones y turnos";
      }

      function obtenerDatosInformeGrupalSocratico() {
          prepararFiltroInformeSocratico();
          const sectionId = document.getElementById("filtroInformeSocraticoModulo")?.value || "";
          const orden = document.getElementById("ordenInformeSocratico")?.value || "nombre";
          const estudiantesAlcance = obtenerEstudiantesFiltradosInformeSocratico();
          const filas = estudiantesAlcance
              .map(d => {
                  const conteo = obtenerConteoInformeSocratico(d, sectionId);
                  const total = Object.values(conteo).reduce((suma, valor) => suma + Number(valor || 0), 0);
                  return {
                      nombre: d.estudiante?.nombre || d.nombreGoogle || d.email || "Sin nombre",
                      email: d.email || "",
                      cursoNombre: d.estudiante?.curso || "",
                      division: d.estudiante?.division || "",
                      turno: d.estudiante?.turno || "",
                      curso: [d.estudiante?.curso, d.estudiante?.division, d.estudiante?.turno].filter(Boolean).join(" · "),
                      conteo,
                      total,
                      revision: conteo.parcial + conteo.incorrecta
                  };
              })
              .filter(fila => fila.total > 0);
          filas.sort((a, b) => {
              if (orden === "completas") return b.conteo.completa - a.conteo.completa || a.nombre.localeCompare(b.nombre);
              if (orden === "revision") return b.revision - a.revision || a.nombre.localeCompare(b.nombre);
              return a.nombre.localeCompare(b.nombre);
          });
          const total = filas.reduce((acumulado, fila) => {
              Object.keys(acumulado).forEach(nivel => acumulado[nivel] += fila.conteo[nivel]);
              return acumulado;
          }, { completa: 0, incompleta: 0, parcial: 0, incorrecta: 0 });
          const totalRespuestas = Object.values(total).reduce((suma, valor) => suma + valor, 0);
          const porcentaje = nivel => totalRespuestas ? Math.round(total[nivel] * 100 / totalRespuestas) : 0;
          const actividad = sectionId
              ? seccionesData.find(sec => sec.id === sectionId)?.title || sectionId
              : "Todas las actividades";
          return {
              filas,
              total,
              totalRespuestas,
              porcentaje,
              sectionId,
              actividad,
              orden,
              alcance: describirAlcanceGrupoInformeSocratico(),
              estudiantesAlcance
          };
      }

      function renderInformeGrupalSocratico() {
          const contenedor = document.getElementById("informeGrupalSocratico");
          if (!contenedor) return;
          const componenteSeguro = (nombre, renderizar) => {
              try {
                  return renderizar();
              } catch (error) {
                  console.error(`No se pudo renderizar ${nombre}:`, error);
                  return `<div class="teacher-report-diagnostic is-warning">
                      <i class="fa-solid fa-triangle-exclamation"></i>
                      <span><strong>${escapeHtml(nombre)}</strong> no pudo mostrarse por un dato histórico incompatible. Los demás componentes continúan disponibles.</span>
                  </div>`;
              }
          };
          try {
              const datos = obtenerDatosInformeGrupalSocratico();
              const { filas, total, porcentaje } = datos;
              const evolucion = obtenerEvolucionInformeGrupalSocratico();
              const alertas = detectarAlertasEvolucionSocratica(evolucion, datos.estudiantesAlcance);
              const estudiantesConHistorial = datos.estudiantesAlcance.filter(estudiante =>
                  Object.keys(estudiante?.historialResultados || {}).length > 0
              ).length;
              contenedor.innerHTML = `
              <div class="teacher-report-scope"><i class="fa-solid fa-filter"></i> Alcance: <strong>${escapeHtml(datos.alcance)}</strong> · ${datos.estudiantesAlcance.length} estudiante${datos.estudiantesAlcance.length === 1 ? "" : "s"}</div>
              <div class="teacher-report-diagnostic ${datos.totalRespuestas ? "is-ok" : "is-warning"}">
                  <i class="fa-solid ${datos.totalRespuestas ? "fa-chart-line" : "fa-circle-info"}"></i>
                  <span><strong>Datos del informe:</strong> ${estudiantesConHistorial} estudiante${estudiantesConHistorial === 1 ? "" : "s"} con historial y ${datos.totalRespuestas} respuesta${datos.totalRespuestas === 1 ? "" : "s"} socrática${datos.totalRespuestas === 1 ? "" : "s"}. ${datos.totalRespuestas ? "Los gráficos se calcularon con estos registros." : "Cambiá los filtros o esperá entregas del Analista de Viabilidad y Excelencia."}</span>
              </div>
              <div class="teacher-group-report-summary">
                  <div class="is-completa"><small>Completas</small><strong>${total.completa}</strong><span>${porcentaje("completa")}%</span></div>
                  <div class="is-incompleta"><small>Incompletas</small><strong>${total.incompleta}</strong><span>${porcentaje("incompleta")}%</span></div>
                  <div class="is-parcial"><small>Parciales</small><strong>${total.parcial}</strong><span>${porcentaje("parcial")}%</span></div>
                  <div class="is-incorrecta"><small>Incorrectas</small><strong>${total.incorrecta}</strong><span>${porcentaje("incorrecta")}%</span></div>
              </div>
              ${componenteSeguro("Gráficos de distribución y evolución", () => renderGraficosInformeGrupalSocratico(datos, evolucion))}
              ${componenteSeguro("Análisis por criterio", () => renderAnalisisCriteriosSocraticos(datos))}
              ${componenteSeguro("Alertas de evolución", () => renderAlertasEvolucionSocratica(alertas))}
              ${componenteSeguro("Tabla de evolución", () => renderTablaEvolucionPanelSocratico(evolucion, alertas))}
              ${componenteSeguro("Comparación de grupos", () => renderComparacionGruposSocratico(datos))}
              ${filas.length ? `<div class="teacher-group-report-table"><table>
                  <thead><tr><th>Estudiante</th><th>Grupo</th><th>Completas</th><th>Incompletas</th><th>Parciales</th><th>Incorrectas</th><th>Total</th></tr></thead>
                  <tbody>${filas.map(fila => `<tr>
                      <td><strong>${escapeHtml(fila.nombre)}</strong></td>
                      <td>${escapeHtml(fila.curso || "Sin grupo")}</td>
                      <td class="is-completa">${fila.conteo.completa}</td>
                      <td class="is-incompleta">${fila.conteo.incompleta}</td>
                      <td class="is-parcial">${fila.conteo.parcial}</td>
                      <td class="is-incorrecta">${fila.conteo.incorrecta}</td>
                      <td>${fila.total}</td>
                  </tr>`).join("")}</tbody>
              </table></div>` : `<p class="teacher-group-report-empty">Todavía no hay respuestas entregadas para el alcance seleccionado.</p>`}`;
              componenteSeguro("Formulario de refuerzo", () => {
                  prepararFormularioPlanRefuerzoSocratico();
                  renderPlanesRefuerzoSocratico();
                  return "";
              });
          } catch (error) {
              console.error("No se pudo construir el informe grupal socrático:", error);
              contenedor.innerHTML = `<div class="teacher-report-diagnostic is-error">
                  <i class="fa-solid fa-circle-exclamation"></i>
                  <span><strong>No se pudo construir el informe.</strong> ${escapeHtml(error?.message || "Error desconocido")}</span>
                  <button class="btn btn-secondary" type="button" onclick="renderInformeGrupalSocratico()"><i class="fa-solid fa-rotate"></i> Reintentar</button>
              </div>`;
          }
      }

      const CRITERIOS_SOCRATICOS_INFORME = [
          { clave: "desarrollo suficiente", etiqueta: "Desarrollo suficiente", icono: "fa-align-left" },
          { clave: "justificación causal", etiqueta: "Justificación causal", icono: "fa-link" },
          { clave: "evidencia del código o de una prueba", etiqueta: "Evidencia concreta", icono: "fa-code" },
          { clave: "consecuencia, límite o mejora", etiqueta: "Consecuencia o mejora", icono: "fa-arrow-trend-up" }
      ];

      function obtenerAnalisisCriteriosSocraticos(datos) {
          const acumulado = Object.fromEntries(CRITERIOS_SOCRATICOS_INFORME.map(item => [
              item.clave,
              { ...item, cumplido: 0, faltante: 0 }
          ]));
          datos.estudiantesAlcance.forEach(estudiante => {
              const historial = estudiante?.historialResultados || {};
              const ids = datos.sectionId ? [datos.sectionId] : Object.keys(historial);
              ids.forEach(sectionId => {
                  const preguntas = historial[sectionId]?.analista?.preguntas || [];
                  preguntas.forEach(pregunta => {
                      const cumplidos = Array.isArray(pregunta?.criteriosCumplidos)
                          ? pregunta.criteriosCumplidos
                          : (pregunta?.criteriosCumplidos ? [pregunta.criteriosCumplidos] : []);
                      const faltantes = Array.isArray(pregunta?.criteriosFaltantes)
                          ? pregunta.criteriosFaltantes
                          : (pregunta?.criteriosFaltantes ? [pregunta.criteriosFaltantes] : []);
                      cumplidos.forEach(criterio => {
                          const clave = String(criterio || "").trim().toLowerCase();
                          if (acumulado[clave]) acumulado[clave].cumplido++;
                      });
                      faltantes.forEach(criterio => {
                          const clave = String(criterio || "").trim().toLowerCase();
                          if (acumulado[clave]) acumulado[clave].faltante++;
                      });
                  });
              });
          });
          return Object.values(acumulado).map(item => {
              const evaluaciones = item.cumplido + item.faltante;
              return {
                  ...item,
                  evaluaciones,
                  porcentajeCumplido: evaluaciones ? item.cumplido * 100 / evaluaciones : 0,
                  porcentajeFaltante: evaluaciones ? item.faltante * 100 / evaluaciones : 0
              };
          });
      }

      function renderAnalisisCriteriosSocraticos(datos) {
          const criterios = obtenerAnalisisCriteriosSocraticos(datos);
          const conDatos = criterios.filter(item => item.evaluaciones > 0);
          if (!conDatos.length) return "";
          const principal = [...conDatos].sort((a, b) => b.porcentajeFaltante - a.porcentajeFaltante)[0];
          return `<section class="teacher-criteria-analysis">
              <header>
                  <div><i class="fa-solid fa-magnifying-glass-chart"></i><strong>Análisis por criterio de razonamiento</strong></div>
                  <small>Principal aspecto a reforzar: <strong>${escapeHtml(principal.etiqueta)}</strong> (${porcentajeExactoPanel(principal.porcentajeFaltante)} pendiente).</small>
              </header>
              <div class="teacher-criteria-grid">${criterios.map(item => `<article class="${item.evaluaciones ? "" : "is-empty"}">
                  <div class="teacher-criterion-heading"><span><i class="fa-solid ${item.icono}"></i>${escapeHtml(item.etiqueta)}</span><strong>${item.evaluaciones ? porcentajeExactoPanel(item.porcentajeCumplido) : "Sin datos"}</strong></div>
                  <div class="teacher-criterion-bar"><span style="width:${item.porcentajeCumplido}%"></span></div>
                  <small>${item.cumplido} cumplidos · ${item.faltante} a fortalecer · ${item.evaluaciones} evaluaciones</small>
              </article>`).join("")}</div>
          </section>`;
      }

      function renderGraficosInformeGrupalSocratico(datos, evolucion) {
          const barras = SERIES_GRAFICO_SOCRATICO.map(serie => {
              const cantidad = Number(datos.total[serie.nivel] || 0);
              const porcentaje = datos.totalRespuestas ? cantidad * 100 / datos.totalRespuestas : 0;
              return `<div class="teacher-distribution-column is-${serie.nivel}" title="${serie.etiqueta}: ${cantidad} respuestas, ${porcentaje.toFixed(1)}%">
                  <strong>${porcentaje.toFixed(1)}%</strong>
                  <div><span style="height:${Math.max(0, Math.min(100, porcentaje))}%"></span></div>
                  <small>${serie.etiqueta}</small>
                  <em>${cantidad}</em>
              </div>`;
          }).join("");
          const ancho = 1000;
          const alto = 240;
          const margenX = 48;
          const margenY = 24;
          const anchoUtil = ancho - margenX * 2;
          const altoUtil = alto - margenY * 2 - 24;
          const paso = evolucion.length > 1 ? anchoUtil / (evolucion.length - 1) : 0;
          const lineas = SERIES_GRAFICO_SOCRATICO.map(serie => {
              const puntos = evolucion.map((item, indice) => {
                  const x = evolucion.length > 1 ? margenX + indice * paso : ancho / 2;
                  const y = margenY + altoUtil - altoUtil * Number(item.porcentajes[serie.nivel] || 0) / 100;
                  return { x, y, item, valor: Number(item.porcentajes[serie.nivel] || 0) };
              });
              const polyline = puntos.map(punto => `${punto.x.toFixed(1)},${punto.y.toFixed(1)}`).join(" ");
              return `<polyline class="chart-line is-${serie.nivel}" points="${polyline}"></polyline>` +
                  puntos.map(punto => `<circle class="chart-point is-${serie.nivel}" cx="${punto.x.toFixed(1)}" cy="${punto.y.toFixed(1)}" r="5">
                      <title>${escapeHtml(`${punto.item.indice}. ${punto.item.titulo}: ${punto.valor.toFixed(1)}% ${serie.etiqueta.toLowerCase()}`)}</title>
                  </circle>`).join("");
          }).join("");
          const ejes = [0, 25, 50, 75, 100].map(valor => {
              const y = margenY + altoUtil - altoUtil * valor / 100;
              return `<line x1="${margenX}" y1="${y}" x2="${ancho - margenX}" y2="${y}"></line>
                  <text x="${margenX - 8}" y="${y + 4}" text-anchor="end">${valor}%</text>`;
          }).join("");
          const etiquetas = evolucion.map((item, indice) => {
              const x = evolucion.length > 1 ? margenX + indice * paso : ancho / 2;
              return `<text x="${x}" y="${alto - 8}" text-anchor="middle"><title>${escapeHtml(item.titulo)}</title>${item.indice}</text>`;
          }).join("");
          return `<div class="teacher-group-charts">
              <section class="teacher-chart-panel">
                  <header><div><strong>Distribución</strong><small>${escapeHtml(datos.actividad)}</small></div></header>
                  <div class="teacher-distribution-chart">${barras}</div>
              </section>
              <section class="teacher-chart-panel">
                  <header>
                      <div><strong>Evolución por actividad</strong><small>Porcentaje de cada nivel</small></div>
                      <div class="teacher-chart-legend">${SERIES_GRAFICO_SOCRATICO.map(serie =>
                          `<span class="is-${serie.nivel}">${serie.etiqueta}</span>`
                      ).join("")}</div>
                  </header>
                  ${evolucion.length ? `<div class="teacher-evolution-chart">
                      <svg viewBox="0 0 ${ancho} ${alto}" role="img" aria-label="Evolución porcentual de respuestas por actividad">
                          <g class="chart-grid">${ejes}</g>
                          <g class="chart-series">${lineas}</g>
                          <g class="chart-labels">${etiquetas}</g>
                      </svg>
                      <small>Eje horizontal: número de actividad. Posá el cursor sobre un punto para consultar su valor exacto.</small>
                  </div>` : `<p class="teacher-group-report-empty">Aún no hay actividades respondidas para mostrar evolución.</p>`}
              </section>
          </div>`;
      }

      function porcentajeExactoPanel(valor) {
          return `${Number(valor || 0).toLocaleString("es-AR", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1
          })}%`;
      }

      function obtenerCriteriosFaltantesActividad(estudiantes, sectionId) {
          const frecuencias = {};
          estudiantes.forEach(estudiante => {
              const preguntas = estudiante?.historialResultados?.[sectionId]?.analista?.preguntas || [];
              preguntas.forEach(pregunta => {
                  (Array.isArray(pregunta?.criteriosFaltantes) ? pregunta.criteriosFaltantes : []).forEach(criterio => {
                      const clave = String(criterio || "").trim();
                      if (clave) frecuencias[clave] = Number(frecuencias[clave] || 0) + 1;
                  });
              });
          });
          return Object.entries(frecuencias).sort((a, b) => b[1] - a[1]);
      }

      function sugerirRefuerzoActividadSocratica(item, estudiantes) {
          const sec = seccionesData[item.indice - 1] || {};
          const criterioPrincipal = obtenerCriteriosFaltantesActividad(estudiantes, sec.id)[0]?.[0] || "";
          const sugerenciasPorCriterio = {
              "desarrollo suficiente": "Modelar respuestas breves con la estructura decisión, explicación, evidencia y consecuencia.",
              "justificación causal": "Repasar relaciones de causa y efecto usando conectores como “porque”, “permite”, “evita” y “por lo tanto”.",
              "evidencia del código o de una prueba": "Practicar cómo citar una variable, condición, función o caso de prueba concreto para sostener una afirmación.",
              "consecuencia, límite o mejora": "Trabajar casos límite y pedir que anticipen qué cambia, qué puede fallar y cómo comprobar una mejora."
          };
          const sugerencias = [];
          if (criterioPrincipal && sugerenciasPorCriterio[criterioPrincipal]) {
              sugerencias.push(sugerenciasPorCriterio[criterioPrincipal]);
          }
          if (sec.theory) sugerencias.push(`Reforzar el contenido: ${String(sec.theory).slice(0, 180)}`);
          if (sec.exerciseTitle) sugerencias.push(`Retomar “${sec.exerciseTitle}” con una entrada alternativa y una explicación paso a paso.`);
          return sugerencias.slice(0, 3);
      }

      function detectarAlertasEvolucionSocratica(evolucion, estudiantes) {
          const configuracion = normalizarRubricaSocratica(rubricaSocraticaActual).alertas;
          const alertas = [];
          evolucion.forEach((item, indice) => {
              const riesgo = Number(item.porcentajes.parcial || 0) + Number(item.porcentajes.incorrecta || 0);
              const anterior = indice > 0 ? evolucion[indice - 1] : null;
              const riesgoAnterior = anterior
                  ? Number(anterior.porcentajes.parcial || 0) + Number(anterior.porcentajes.incorrecta || 0)
                  : null;
              const aumento = riesgoAnterior === null ? 0 : Number((riesgo - riesgoAnterior).toFixed(1));
              item.riesgo = Number(riesgo.toFixed(1));
              item.aumentoRiesgo = aumento;
              item.muestraInsuficiente = item.respuestas < configuracion.muestraMinima;
              if (
                  anterior &&
                  !item.muestraInsuficiente &&
                  anterior.respuestas >= configuracion.muestraMinima &&
                  aumento >= configuracion.aumentoMinimo &&
                  riesgo >= configuracion.riesgoMinimo
              ) {
                  alertas.push({
                      ...item,
                      actividadAnterior: anterior.titulo,
                      riesgoAnterior: Number(riesgoAnterior.toFixed(1)),
                      severidad: riesgo >= configuracion.severidadAlta ||
                          aumento >= Math.max(configuracion.aumentoMinimo * 2, 20) ? "alta" : "media",
                      sugerencias: sugerirRefuerzoActividadSocratica(item, estudiantes)
                  });
              }
          });
          return alertas;
      }

      function renderAlertasEvolucionSocratica(alertas) {
          const configuracion = normalizarRubricaSocratica(rubricaSocraticaActual).alertas;
          if (!alertas.length) {
              return `<div class="teacher-risk-status is-ok"><i class="fa-solid fa-circle-check"></i><span>No se detectaron aumentos relevantes de respuestas parciales o incorrectas entre actividades consecutivas.</span></div>`;
          }
          return `<section class="teacher-risk-alerts">
              <header><div><i class="fa-solid fa-triangle-exclamation"></i><strong>Actividades que requieren refuerzo</strong></div><small>Umbral: riesgo ${porcentajeExactoPanel(configuracion.riesgoMinimo)}, aumento ${porcentajeExactoPanel(configuracion.aumentoMinimo)} y ${configuracion.muestraMinima} respuestas.</small></header>
              <div>${alertas.map(alerta => `<article class="teacher-risk-card is-${alerta.severidad}">
                  <div class="teacher-risk-card-heading">
                      <strong>${alerta.indice}. ${escapeHtml(alerta.titulo)}</strong>
                      <span>Riesgo ${porcentajeExactoPanel(alerta.riesgo)} · +${porcentajeExactoPanel(alerta.aumentoRiesgo)}</span>
                  </div>
                  <p>Las respuestas parciales o incorrectas aumentaron desde ${porcentajeExactoPanel(alerta.riesgoAnterior)} en “${escapeHtml(alerta.actividadAnterior)}”.</p>
                  <ul>${alerta.sugerencias.map(sugerencia => `<li>${escapeHtml(sugerencia)}</li>`).join("")}</ul>
              </article>`).join("")}</div>
          </section>`;
      }

      function renderTablaEvolucionPanelSocratico(evolucion, alertas) {
          if (!evolucion.length) return "";
          const indicesAlerta = new Set(alertas.map(alerta => alerta.indice));
          return `<details class="teacher-evolution-data" open>
              <summary><i class="fa-solid fa-table-list"></i> Porcentajes exactos por actividad</summary>
              <div class="teacher-group-report-table"><table>
                  <thead><tr><th>N.º</th><th>Actividad</th><th>Respuestas</th><th>Completas</th><th>Incompletas</th><th>Parciales</th><th>Incorrectas</th><th>Riesgo</th><th>Cambio</th></tr></thead>
                  <tbody>${evolucion.map((item, indice) => `<tr class="${indicesAlerta.has(item.indice) ? "is-risk-row" : ""}">
                      <td>${item.indice}</td>
                      <td><strong>${escapeHtml(item.titulo)}</strong>${indicesAlerta.has(item.indice) ? ' <span class="teacher-risk-badge">Refuerzo</span>' : ""}</td>
                      <td>${item.respuestas}</td>
                      <td class="is-completa">${porcentajeExactoPanel(item.porcentajes.completa)}</td>
                      <td class="is-incompleta">${porcentajeExactoPanel(item.porcentajes.incompleta)}</td>
                      <td class="is-parcial">${porcentajeExactoPanel(item.porcentajes.parcial)}</td>
                      <td class="is-incorrecta">${porcentajeExactoPanel(item.porcentajes.incorrecta)}</td>
                      <td>${porcentajeExactoPanel(item.riesgo)}</td>
                      <td>${indice === 0 ? "—" : `${item.aumentoRiesgo > 0 ? "+" : ""}${porcentajeExactoPanel(item.aumentoRiesgo)}`}</td>
                  </tr>`).join("")}</tbody>
              </table></div>
          </details>`;
      }

      function renderComparacionGruposSocratico(datos) {
          const agrupacion = document.getElementById("agrupacionInformeSocratico")?.value || "grupo";
          const etiquetaAgrupacion = {
              grupo: "curso, división y turno",
              curso: "curso",
              division: "división",
              turno: "turno"
          }[agrupacion] || "grupo";
          const claveGrupo = estudiante => {
              const e = estudiante.estudiante || {};
              if (agrupacion === "curso") return e.curso || "Sin curso";
              if (agrupacion === "division") return e.division || "Sin división";
              if (agrupacion === "turno") return e.turno || "Sin turno";
              return [e.curso || "Sin curso", e.division || "Sin división", e.turno || "Sin turno"].join(" · ");
          };
          const grupos = new Map();
          datos.estudiantesAlcance.forEach(estudiante => {
              const clave = claveGrupo(estudiante);
              if (!grupos.has(clave)) {
                  grupos.set(clave, {
                      nombre: clave,
                      estudiantes: 0,
                      conteo: { completa: 0, incompleta: 0, parcial: 0, incorrecta: 0 }
                  });
              }
              const grupo = grupos.get(clave);
              grupo.estudiantes++;
              const conteo = obtenerConteoInformeSocratico(estudiante, datos.sectionId);
              Object.keys(grupo.conteo).forEach(nivel => grupo.conteo[nivel] += Number(conteo[nivel] || 0));
          });
          const filas = [...grupos.values()].map(grupo => {
              const total = Object.values(grupo.conteo).reduce((suma, valor) => suma + valor, 0);
              return {
                  ...grupo,
                  total,
                  porcentajes: Object.fromEntries(Object.entries(grupo.conteo).map(([nivel, valor]) => [
                      nivel,
                      total ? valor * 100 / total : 0
                  ]))
              };
          }).filter(grupo => grupo.total > 0).sort((a, b) => a.nombre.localeCompare(b.nombre));
          if (!filas.length) return "";
          return `<details class="teacher-group-comparison" open>
              <summary><i class="fa-solid fa-people-group"></i> Comparación por ${escapeHtml(etiquetaAgrupacion)}</summary>
              <div class="teacher-comparison-list">${filas.map(grupo => `<article>
                  <div class="teacher-comparison-heading"><strong>${escapeHtml(grupo.nombre)}</strong><span>${grupo.estudiantes} estudiante${grupo.estudiantes === 1 ? "" : "s"} · ${grupo.total} respuestas</span></div>
                  <div class="teacher-comparison-bar" aria-label="${escapeHtml(`Distribución de ${grupo.nombre}`)}">
                      ${SERIES_GRAFICO_SOCRATICO.map(serie => `<span class="is-${serie.nivel}" style="width:${grupo.porcentajes[serie.nivel]}%" title="${serie.etiqueta}: ${porcentajeExactoPanel(grupo.porcentajes[serie.nivel])}"></span>`).join("")}
                  </div>
                  <div class="teacher-comparison-values">${SERIES_GRAFICO_SOCRATICO.map(serie =>
                      `<span class="is-${serie.nivel}">${serie.etiqueta}: <strong>${porcentajeExactoPanel(grupo.porcentajes[serie.nivel])}</strong></span>`
                  ).join("")}</div>
              </article>`).join("")}</div>
          </details>`;
      }

      function obtenerMetricaRiesgoEstudiante(estudiante, sectionId) {
          const conteo = obtenerConteoInformeSocratico(estudiante, sectionId);
          const total = Object.values(conteo).reduce((suma, valor) => suma + Number(valor || 0), 0);
          const riesgo = total ? (Number(conteo.parcial || 0) + Number(conteo.incorrecta || 0)) * 100 / total : null;
          return { conteo, total, riesgo: riesgo === null ? null : Number(riesgo.toFixed(1)) };
      }

      function prepararFormularioPlanRefuerzoSocratico() {
          const origen = document.getElementById("refuerzoActividadOrigen");
          const objetivo = document.getElementById("refuerzoActividadObjetivo");
          if (!origen || !objetivo) return;
          const opciones = seccionesData.map((sec, indice) =>
              `<option value="${escapeHtml(sec.id)}">${indice + 1}. ${escapeHtml(sec.title)}</option>`
          ).join("");
          const valorOrigen = origen.value;
          const valorObjetivo = objetivo.value;
          if (origen.dataset.ready !== "true") {
              origen.innerHTML = opciones;
              objetivo.innerHTML = opciones;
              origen.dataset.ready = "true";
              objetivo.dataset.ready = "true";
          }
          const evolucion = obtenerEvolucionInformeGrupalSocratico();
          const alertas = detectarAlertasEvolucionSocratica(evolucion, obtenerEstudiantesFiltradosInformeSocratico());
          const idSugerido = alertas.at(-1)
              ? seccionesData[alertas.at(-1).indice - 1]?.id
              : document.getElementById("filtroInformeSocraticoModulo")?.value || seccionesData[0]?.id;
          origen.value = valorOrigen || idSugerido || "";
          const indiceOrigen = seccionesData.findIndex(sec => sec.id === origen.value);
          objetivo.value = valorObjetivo ||
              seccionesData[Math.min(seccionesData.length - 1, Math.max(0, indiceOrigen + 1))]?.id ||
              origen.value;
          const fecha = document.getElementById("refuerzoFechaLimite");
          if (fecha && !fecha.value) {
              const limite = new Date();
              limite.setDate(limite.getDate() + 7);
              fecha.value = limite.toISOString().slice(0, 10);
          }
          const contenido = document.getElementById("refuerzoContenido");
          if (contenido && !contenido.value) {
              const datos = obtenerDatosInformeGrupalSocratico();
              const principal = obtenerAnalisisCriteriosSocraticos(datos)
                  .filter(item => item.evaluaciones > 0)
                  .sort((a, b) => b.porcentajeFaltante - a.porcentajeFaltante)[0];
              if (principal) contenido.value = principal.etiqueta;
          }
      }

      function obtenerPlanesRefuerzoEstudiante(estudiante) {
          const planes = estudiante?.planesRefuerzo || {};
          if (Array.isArray(planes)) return Object.fromEntries(planes.filter(Boolean).map(plan => [plan.id, plan]));
          return planes && typeof planes === "object" ? planes : {};
      }

      async function asignarPlanRefuerzoSocratico(boton = null) {
          const estado = document.getElementById("estadoPlanRefuerzoSocratico");
          const origenId = document.getElementById("refuerzoActividadOrigen")?.value || "";
          const objetivoId = document.getElementById("refuerzoActividadObjetivo")?.value || "";
          const tipoDestinatarios = document.getElementById("refuerzoDestinatarios")?.value || "riesgo";
          const contenido = document.getElementById("refuerzoContenido")?.value.trim() || "";
          const indicaciones = document.getElementById("refuerzoIndicaciones")?.value.trim() || "";
          const fechaLimite = document.getElementById("refuerzoFechaLimite")?.value || "";
          if (!origenId || !objetivoId || !contenido || !indicaciones) {
              if (estado) {
                  estado.className = "is-error";
                  estado.textContent = "Seleccioná las actividades y completá contenido e indicaciones.";
              }
              return;
          }
          const alcance = obtenerEstudiantesFiltradosInformeSocratico();
          const destinatarios = alcance.filter(estudiante => {
              if (tipoDestinatarios === "todos") return true;
              const metrica = obtenerMetricaRiesgoEstudiante(estudiante, origenId);
              return metrica.total > 0 && metrica.riesgo > 0;
          });
          if (!destinatarios.length) {
              if (estado) {
                  estado.className = "is-error";
                  estado.textContent = "No hay estudiantes que cumplan el criterio de destinatarios.";
              }
              return;
          }
          const id = `refuerzo-${Date.now()}`;
          const origen = seccionesData.find(sec => sec.id === origenId);
          const objetivo = seccionesData.find(sec => sec.id === objetivoId);
          const original = boton?.innerHTML || "";
          if (boton) {
              boton.disabled = true;
              boton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Asignando...';
          }
          if (estado) {
              estado.className = "";
              estado.textContent = `Asignando a ${destinatarios.length} estudiante${destinatarios.length === 1 ? "" : "s"}...`;
          }
          let guardados = 0;
          for (const estudiante of destinatarios) {
              const lineaBase = obtenerMetricaRiesgoEstudiante(estudiante, origenId);
              const plan = {
                  id,
                  contenido,
                  indicaciones,
                  actividadOrigenId: origenId,
                  actividadOrigenTitulo: origen?.title || origenId,
                  actividadObjetivoId: objetivoId,
                  actividadObjetivoTitulo: objetivo?.title || objetivoId,
                  fechaLimite,
                  estado: "asignado",
                  alcance: describirAlcanceGrupoInformeSocratico(),
                  lineaBase: {
                      riesgo: lineaBase.riesgo,
                      respuestas: lineaBase.total,
                      conteo: lineaBase.conteo
                  },
                  creadoEn: new Date().toISOString(),
                  creadoPor: window.firebaseTeacherUser?.email || window.firebaseCurrentUser?.email || "docente"
              };
              const guardado = await window.guardarPlanRefuerzoFirebase?.(estudiante.uid, plan);
              if (guardado) {
                  estudiante.planesRefuerzo = { ...obtenerPlanesRefuerzoEstudiante(estudiante), [id]: plan };
                  guardados++;
              }
          }
          if (boton) {
              boton.disabled = false;
              boton.innerHTML = original;
          }
          if (estado) {
              estado.className = guardados === destinatarios.length ? "is-success" : "is-error";
              estado.textContent = `${guardados} de ${destinatarios.length} planes asignados.`;
          }
          renderPlanesRefuerzoSocratico();
      }

      function resumirPlanesRefuerzoSocratico() {
          const grupos = new Map();
          obtenerEstudiantesFiltradosInformeSocratico().forEach(estudiante => {
              Object.values(obtenerPlanesRefuerzoEstudiante(estudiante)).forEach(plan => {
                  if (!plan?.id) return;
                  if (!grupos.has(plan.id)) grupos.set(plan.id, { plan, estudiantes: [] });
                  const objetivo = obtenerMetricaRiesgoEstudiante(estudiante, plan.actividadObjetivoId);
                  const base = Number(plan.lineaBase?.riesgo);
                  const variacion = objetivo.riesgo === null || !Number.isFinite(base)
                      ? null
                      : Number((objetivo.riesgo - base).toFixed(1));
                  grupos.get(plan.id).estudiantes.push({
                      uid: estudiante.uid,
                      nombre: estudiante.estudiante?.nombre || estudiante.nombreGoogle || estudiante.email || "Sin nombre",
                      estado: plan.estado || "asignado",
                      riesgoBase: Number.isFinite(base) ? base : null,
                      riesgoActual: objetivo.riesgo,
                      respuestasActuales: objetivo.total,
                      variacion
                  });
              });
          });
          return [...grupos.values()].sort((a, b) =>
              String(b.plan.creadoEn || "").localeCompare(String(a.plan.creadoEn || ""))
          );
      }

      function renderPlanesRefuerzoSocratico() {
          const contenedor = document.getElementById("listaPlanesRefuerzoSocratico");
          if (!contenedor) return;
          const grupos = resumirPlanesRefuerzoSocratico();
          if (!grupos.length) {
              contenedor.innerHTML = '<p class="teacher-group-report-empty">No hay planes de refuerzo asignados para el alcance actual.</p>';
              return;
          }
          contenedor.innerHTML = `<div class="teacher-reinforcement-list">${grupos.map(grupo => {
              const medidos = grupo.estudiantes.filter(item => item.riesgoActual !== null);
              const mejoraron = medidos.filter(item => item.variacion < 0).length;
              const estables = medidos.filter(item => item.variacion === 0).length;
              const retrocedieron = medidos.filter(item => item.variacion > 0).length;
              const completados = grupo.estudiantes.filter(item => item.estado === "completado").length;
              return `<article>
                  <header>
                      <div><strong>${escapeHtml(grupo.plan.contenido)}</strong><small>${escapeHtml(grupo.plan.actividadOrigenTitulo)} → ${escapeHtml(grupo.plan.actividadObjetivoTitulo)}</small></div>
                      <span>${completados}/${grupo.estudiantes.length} completados</span>
                  </header>
                  <p>${escapeHtml(grupo.plan.indicaciones)}</p>
                  <div class="teacher-reinforcement-metrics">
                      <span class="is-improved"><strong>${mejoraron}</strong> mejoraron</span>
                      <span><strong>${estables}</strong> estables</span>
                      <span class="is-worse"><strong>${retrocedieron}</strong> retrocedieron</span>
                      <span><strong>${grupo.estudiantes.length - medidos.length}</strong> sin medición</span>
                  </div>
                  <div class="teacher-reinforcement-students">${grupo.estudiantes.map(item => `<span title="${item.riesgoActual === null ? "Aún no respondió la actividad de comprobación" : `Base ${porcentajeExactoPanel(item.riesgoBase)} · Actual ${porcentajeExactoPanel(item.riesgoActual)}`}">
                      ${escapeHtml(item.nombre)} · ${item.riesgoActual === null ? "pendiente" : `${item.variacion > 0 ? "+" : ""}${porcentajeExactoPanel(item.variacion)}`}
                  </span>`).join("")}</div>
                  <footer>
                      <small>Vence: ${escapeHtml(grupo.plan.fechaLimite || "sin fecha")} · ${escapeHtml(grupo.plan.alcance || "")}</small>
                      <button class="btn btn-secondary" type="button" onclick="actualizarEstadoPlanRefuerzoSocratico('${escapeHtml(grupo.plan.id)}','completado',this)"><i class="fa-solid fa-check"></i> Marcar completado</button>
                  </footer>
              </article>`;
          }).join("")}</div>`;
      }

      async function actualizarEstadoPlanRefuerzoSocratico(planId, estadoNuevo, boton = null) {
          const destinatarios = obtenerEstudiantesFiltradosInformeSocratico().filter(estudiante =>
              obtenerPlanesRefuerzoEstudiante(estudiante)[planId]
          );
          const original = boton?.innerHTML || "";
          if (boton) {
              boton.disabled = true;
              boton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
          }
          for (const estudiante of destinatarios) {
              const plan = obtenerPlanesRefuerzoEstudiante(estudiante)[planId];
              const medicion = obtenerMetricaRiesgoEstudiante(estudiante, plan.actividadObjetivoId);
              const actualizado = {
                  ...plan,
                  estado: estadoNuevo,
                  completadoEn: estadoNuevo === "completado" ? new Date().toISOString() : null,
                  medicionPosterior: {
                      riesgo: medicion.riesgo,
                      respuestas: medicion.total,
                      conteo: medicion.conteo,
                      variacion: medicion.riesgo === null || plan.lineaBase?.riesgo === null
                          ? null
                          : Number((medicion.riesgo - Number(plan.lineaBase.riesgo)).toFixed(1))
                  }
              };
              const guardado = await window.guardarPlanRefuerzoFirebase?.(estudiante.uid, actualizado);
              if (guardado) estudiante.planesRefuerzo = { ...obtenerPlanesRefuerzoEstudiante(estudiante), [planId]: actualizado };
          }
          if (boton) {
              boton.disabled = false;
              boton.innerHTML = original;
          }
          renderPlanesRefuerzoSocratico();
      }

      function escaparCampoCSV(valor) {
          const texto = String(valor ?? "").replace(/\r?\n/g, " ");
          return `"${texto.replace(/"/g, '""')}"`;
      }

      function descargarArchivoTexto(contenido, nombre, tipo) {
          const blob = new Blob([contenido], { type: tipo });
          const enlace = document.createElement("a");
          enlace.href = URL.createObjectURL(blob);
          enlace.download = nombre;
          document.body.appendChild(enlace);
          enlace.click();
          enlace.remove();
          setTimeout(() => URL.revokeObjectURL(enlace.href), 1000);
      }

      function exportarInformeGrupalSocraticoCSV() {
          const datos = obtenerDatosInformeGrupalSocratico();
          if (!datos.filas.length) {
              alert("No hay respuestas para exportar con el alcance seleccionado.");
              return;
          }
          const encabezados = [
              "Estudiante", "Email", "Curso", "División", "Turno",
              "Respuestas completas", "Correctas incompletas",
              "Respuestas parciales", "Respuestas incorrectas", "Total"
          ];
          const filas = datos.filas.map(fila => [
              fila.nombre,
              fila.email,
              fila.cursoNombre,
              fila.division,
              fila.turno,
              fila.conteo.completa,
              fila.conteo.incompleta,
              fila.conteo.parcial,
              fila.conteo.incorrecta,
              fila.total
          ]);
          filas.push([
              "TOTAL DEL GRUPO", "", "", "", "",
              datos.total.completa,
              datos.total.incompleta,
              datos.total.parcial,
              datos.total.incorrecta,
              datos.totalRespuestas
          ]);
          const metadatos = [
              ["Informe grupal de respuestas socráticas"],
              ["Actividad", datos.actividad],
              ["Alcance", datos.alcance],
              ["Estudiantes incluidos", datos.estudiantesAlcance.length],
              ["Generado", new Date().toLocaleString("es-AR")],
              []
          ];
          const contenido = "\uFEFF" + [...metadatos, encabezados, ...filas]
              .map(fila => fila.map(escaparCampoCSV).join(";"))
              .join("\r\n");
          const nombre = nombreArchivoPDFProfesor(`Informe_socratico_${datos.actividad}`) + ".csv";
          descargarArchivoTexto(contenido, nombre, "text/csv;charset=utf-8");
      }

      function obtenerEvolucionInformeGrupalSocratico() {
          const estudiantes = obtenerEstudiantesFiltradosInformeSocratico();
          return seccionesData.map((sec, indice) => {
              const total = estudiantes.reduce((acumulado, estudiante) => {
                  const conteo = obtenerConteoInformeSocratico(estudiante, sec.id);
                  Object.keys(acumulado).forEach(nivel => {
                      acumulado[nivel] += Number(conteo[nivel] || 0);
                  });
                  return acumulado;
              }, { completa: 0, incompleta: 0, parcial: 0, incorrecta: 0 });
              const respuestas = Object.values(total).reduce((suma, valor) => suma + valor, 0);
              return {
                  indice: indice + 1,
                  titulo: sec.title || `Actividad ${indice + 1}`,
                  total,
                  respuestas,
                  porcentajes: Object.fromEntries(
                      Object.entries(total).map(([nivel, valor]) => [
                          nivel,
                          respuestas ? Number((valor * 100 / respuestas).toFixed(1)) : 0
                      ])
                  )
              };
          }).filter(item => item.respuestas > 0);
      }

      const SERIES_GRAFICO_SOCRATICO = [
          { nivel: "completa", etiqueta: "Completas", color: [34, 197, 94] },
          { nivel: "incompleta", etiqueta: "Incompletas", color: [14, 165, 233] },
          { nivel: "parcial", etiqueta: "Parciales", color: [245, 158, 11] },
          { nivel: "incorrecta", etiqueta: "Incorrectas", color: [239, 68, 68] }
      ];

      function dibujarLeyendaGraficoSocraticoPDF(doc, x, y) {
          let cursor = x;
          doc.setFont("helvetica", "normal");
          doc.setFontSize(7);
          SERIES_GRAFICO_SOCRATICO.forEach(serie => {
              doc.setFillColor(...serie.color);
              doc.rect(cursor, y - 2.5, 4, 4, "F");
              doc.setTextColor(30, 41, 59);
              doc.text(serie.etiqueta, cursor + 5.5, y + 0.5);
              cursor += 32;
          });
      }

      function dibujarDistribucionInformePDF(doc, datos, x, y, ancho, alto) {
          doc.setFont("helvetica", "bold");
          doc.setFontSize(11);
          doc.setTextColor(15, 23, 42);
          doc.text("Distribución de respuestas", x, y);
          const baseY = y + alto;
          const graficoAlto = alto - 15;
          const anchoBarra = Math.min(18, (ancho - 24) / 6);
          const espacio = (ancho - anchoBarra * SERIES_GRAFICO_SOCRATICO.length) /
              (SERIES_GRAFICO_SOCRATICO.length + 1);
          doc.setDrawColor(203, 213, 225);
          doc.line(x, baseY, x + ancho, baseY);
          SERIES_GRAFICO_SOCRATICO.forEach((serie, indice) => {
              const valor = Number(datos.total[serie.nivel] || 0);
              const porcentaje = datos.totalRespuestas ? valor * 100 / datos.totalRespuestas : 0;
              const altoBarra = graficoAlto * porcentaje / 100;
              const barraX = x + espacio + indice * (anchoBarra + espacio);
              doc.setFillColor(...serie.color);
              doc.rect(barraX, baseY - altoBarra, anchoBarra, altoBarra, "F");
              doc.setFont("helvetica", "bold");
              doc.setFontSize(8);
              doc.setTextColor(30, 41, 59);
              doc.text(`${Math.round(porcentaje)}%`, barraX + anchoBarra / 2, baseY - altoBarra - 2, { align: "center" });
              doc.setFont("helvetica", "normal");
              doc.setFontSize(6.5);
              doc.text(serie.etiqueta, barraX + anchoBarra / 2, baseY + 4.5, { align: "center" });
              doc.text(`${valor} resp.`, barraX + anchoBarra / 2, baseY + 8, { align: "center" });
          });
      }

      function dibujarEvolucionInformePDF(doc, evolucion, x, y, ancho, alto) {
          doc.setFont("helvetica", "bold");
          doc.setFontSize(11);
          doc.setTextColor(15, 23, 42);
          doc.text("Evolución porcentual por actividad", x, y);
          dibujarLeyendaGraficoSocraticoPDF(doc, x + ancho - 130, y);
          const graficoX = x + 10;
          const graficoY = y + 8;
          const graficoAncho = ancho - 14;
          const graficoAlto = alto - 20;
          doc.setFont("helvetica", "normal");
          doc.setFontSize(6.5);
          [0, 25, 50, 75, 100].forEach(valor => {
              const puntoY = graficoY + graficoAlto - graficoAlto * valor / 100;
              doc.setDrawColor(226, 232, 240);
              doc.line(graficoX, puntoY, graficoX + graficoAncho, puntoY);
              doc.setTextColor(100, 116, 139);
              doc.text(`${valor}%`, graficoX - 2, puntoY + 1, { align: "right" });
          });
          const separacion = evolucion.length > 1 ? graficoAncho / (evolucion.length - 1) : 0;
          evolucion.forEach((item, indice) => {
              const puntoX = evolucion.length > 1
                  ? graficoX + indice * separacion
                  : graficoX + graficoAncho / 2;
              doc.setTextColor(71, 85, 105);
              doc.text(String(item.indice), puntoX, graficoY + graficoAlto + 5, { align: "center" });
          });
          SERIES_GRAFICO_SOCRATICO.forEach(serie => {
              doc.setDrawColor(...serie.color);
              doc.setFillColor(...serie.color);
              doc.setLineWidth(0.7);
              let anterior = null;
              evolucion.forEach((item, indice) => {
                  const puntoX = evolucion.length > 1
                      ? graficoX + indice * separacion
                      : graficoX + graficoAncho / 2;
                  const puntoY = graficoY + graficoAlto -
                      graficoAlto * Number(item.porcentajes[serie.nivel] || 0) / 100;
                  if (anterior) doc.line(anterior.x, anterior.y, puntoX, puntoY);
                  doc.circle(puntoX, puntoY, 1.15, "F");
                  anterior = { x: puntoX, y: puntoY };
              });
          });
          doc.setLineWidth(0.2);
          doc.setFontSize(6.2);
          doc.setTextColor(71, 85, 105);
          doc.text("Eje X: número de actividad según el orden del curso.", x, y + alto + 2);
      }

      function dibujarTablaEvolucionInformePDF(doc, evolucion) {
          const columnas = [
              { titulo: "N.º", x: 10, ancho: 10 },
              { titulo: "Actividad", x: 21, ancho: 82 },
              { titulo: "Resp.", x: 106, ancho: 16 },
              { titulo: "Completas", x: 125, ancho: 22 },
              { titulo: "Incompletas", x: 150, ancho: 24 },
              { titulo: "Parciales", x: 177, ancho: 21 },
              { titulo: "Incorrectas", x: 201, ancho: 23 },
              { titulo: "Riesgo", x: 228, ancho: 20 },
              { titulo: "Cambio", x: 252, ancho: 20 },
              { titulo: "Estado", x: 275, ancho: 13 }
          ];
          const porcentajeExacto = valor =>
              `${Number(valor || 0).toLocaleString("es-AR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`;
          const dibujarEncabezado = () => {
              doc.setFillColor(15, 23, 42);
              doc.rect(8, 18, 281, 9, "F");
              doc.setTextColor(255, 255, 255);
              doc.setFont("helvetica", "bold");
              doc.setFontSize(7.5);
              columnas.forEach(columna => doc.text(columna.titulo, columna.x, 24));
              doc.setTextColor(15, 23, 42);
          };
          doc.addPage("a4", "landscape");
          doc.setFont("helvetica", "bold");
          doc.setFontSize(12);
          doc.text("Tabla de evolución por actividad", 12, 10);
          dibujarEncabezado();
          let y = 34;
          evolucion.forEach((item, indice) => {
              const tituloLineas = doc.splitTextToSize(item.titulo, columnas[1].ancho);
              const altoFila = Math.max(7, tituloLineas.length * 4);
              if (y + altoFila > 198) {
                  doc.addPage("a4", "landscape");
                  doc.setFont("helvetica", "bold");
                  doc.setFontSize(12);
                  doc.text("Tabla de evolución por actividad (continuación)", 12, 10);
                  dibujarEncabezado();
                  y = 34;
              }
              if (indice % 2 === 1) {
                  doc.setFillColor(241, 245, 249);
                  doc.rect(8, y - 4, 281, altoFila, "F");
              }
              doc.setFont("helvetica", "normal");
              doc.setFontSize(7.5);
              doc.text(String(item.indice), columnas[0].x, y);
              doc.text(tituloLineas, columnas[1].x, y);
              doc.text(String(item.respuestas), columnas[2].x, y);
              doc.text(porcentajeExacto(item.porcentajes.completa), columnas[3].x, y);
              doc.text(porcentajeExacto(item.porcentajes.incompleta), columnas[4].x, y);
              doc.text(porcentajeExacto(item.porcentajes.parcial), columnas[5].x, y);
              doc.text(porcentajeExacto(item.porcentajes.incorrecta), columnas[6].x, y);
              doc.text(porcentajeExacto(item.riesgo), columnas[7].x, y);
              doc.text(
                  indice === 0 ? "-" : `${item.aumentoRiesgo > 0 ? "+" : ""}${porcentajeExacto(item.aumentoRiesgo)}`,
                  columnas[8].x,
                  y
              );
              doc.text(item.esAlerta ? "Refuerzo" : "-", columnas[9].x, y);
              y += altoFila;
          });
      }

      function exportarInformeGrupalSocraticoPDF() {
          if (!window.jspdf?.jsPDF) {
              alert("No se pudo cargar el generador de PDF. Verificá la conexión e intentá nuevamente.");
              return;
          }
          const datos = obtenerDatosInformeGrupalSocratico();
          if (!datos.filas.length) {
              alert("No hay respuestas para exportar con el alcance seleccionado.");
              return;
          }
          const { jsPDF } = window.jspdf;
          const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
          const evolucion = obtenerEvolucionInformeGrupalSocratico();
          const alertas = detectarAlertasEvolucionSocratica(evolucion, datos.estudiantesAlcance);
          const indicesAlerta = new Set(alertas.map(alerta => alerta.indice));
          evolucion.forEach(item => {
              item.esAlerta = indicesAlerta.has(item.indice);
          });
          const columnas = [
              { titulo: "Estudiante", x: 12, ancho: 60 },
              { titulo: "Grupo", x: 74, ancho: 58 },
              { titulo: "Completas", x: 136, ancho: 24 },
              { titulo: "Incompletas", x: 164, ancho: 26 },
              { titulo: "Parciales", x: 194, ancho: 22 },
              { titulo: "Incorrectas", x: 220, ancho: 24 },
              { titulo: "Total", x: 251, ancho: 18 }
          ];
          const dibujarEncabezado = (encabezadoY = 14) => {
              doc.setFillColor(15, 23, 42);
              doc.rect(8, encabezadoY, 281, 9, "F");
              doc.setTextColor(255, 255, 255);
              doc.setFont("helvetica", "bold");
              doc.setFontSize(8);
              columnas.forEach(columna => doc.text(columna.titulo, columna.x, encabezadoY + 6));
              doc.setTextColor(15, 23, 42);
          };
          doc.setFont("helvetica", "bold");
          doc.setFontSize(16);
          doc.text("Informe grupal de respuestas socráticas", 12, 14);
          doc.setFont("helvetica", "normal");
          doc.setFontSize(9);
          doc.text(`Actividad: ${datos.actividad}`, 12, 21);
          doc.text(`Alcance: ${datos.alcance}`, 12, 27);
          doc.text(`Generado: ${new Date().toLocaleString("es-AR")} · Estudiantes incluidos: ${datos.estudiantesAlcance.length} · Con respuestas: ${datos.filas.length}`, 12, 33);
          doc.text(
              `Totales: completas ${datos.total.completa} · incompletas ${datos.total.incompleta} · parciales ${datos.total.parcial} · incorrectas ${datos.total.incorrecta}`,
              12,
              38
          );
          dibujarDistribucionInformePDF(doc, datos, 12, 49, 92, 58);
          if (evolucion.length) {
              dibujarEvolucionInformePDF(doc, evolucion, 116, 49, 169, 58);
          } else {
              doc.setFont("helvetica", "normal");
              doc.setFontSize(9);
              doc.text("No hay actividades respondidas para mostrar la evolución.", 116, 61);
          }
          doc.setFont("helvetica", "normal");
          doc.setFontSize(7);
          doc.setTextColor(100, 116, 139);
          doc.text(
              "La distribución corresponde al filtro seleccionado. La evolución compara todas las actividades que tienen respuestas.",
              12,
              122
          );
          if (alertas.length) {
              doc.setFont("helvetica", "bold");
              doc.setTextColor(185, 28, 28);
              doc.text(
                  `${alertas.length} actividad${alertas.length === 1 ? "" : "es"} marcada${alertas.length === 1 ? "" : "s"} para refuerzo por aumento de respuestas parciales o incorrectas.`,
                  12,
                  129
              );
          }

          if (evolucion.length) dibujarTablaEvolucionInformePDF(doc, evolucion);
          doc.addPage("a4", "landscape");
          doc.setFont("helvetica", "bold");
          doc.setFontSize(12);
          doc.setTextColor(15, 23, 42);
          doc.text("Detalle por estudiante", 12, 10);
          dibujarEncabezado(14);
          let y = 29;
          datos.filas.forEach((fila, indice) => {
              const altoNombre = doc.splitTextToSize(fila.nombre, columnas[0].ancho).length;
              const altoGrupo = doc.splitTextToSize(fila.curso || "Sin grupo", columnas[1].ancho).length;
              const altoFila = Math.max(7, Math.max(altoNombre, altoGrupo) * 4);
              if (y + altoFila > 198) {
                  doc.addPage("a4", "landscape");
                  doc.setFontSize(8);
                  dibujarEncabezado(14);
                  y = 29;
              }
              if (indice % 2 === 1) {
                  doc.setFillColor(241, 245, 249);
                  doc.rect(8, y - 4, 281, altoFila, "F");
              }
              doc.setFont("helvetica", "normal");
              doc.setFontSize(8);
              doc.text(doc.splitTextToSize(fila.nombre, columnas[0].ancho), columnas[0].x, y);
              doc.text(doc.splitTextToSize(fila.curso || "Sin grupo", columnas[1].ancho), columnas[1].x, y);
              doc.text(String(fila.conteo.completa), columnas[2].x, y);
              doc.text(String(fila.conteo.incompleta), columnas[3].x, y);
              doc.text(String(fila.conteo.parcial), columnas[4].x, y);
              doc.text(String(fila.conteo.incorrecta), columnas[5].x, y);
              doc.text(String(fila.total), columnas[6].x, y);
              y += altoFila;
          });
          if (y + 10 > 198) {
              doc.addPage("a4", "landscape");
              y = 18;
          }
          doc.setDrawColor(100, 116, 139);
          doc.line(8, y - 3, 289, y - 3);
          doc.setFont("helvetica", "bold");
          doc.text("TOTAL DEL GRUPO", columnas[0].x, y + 2);
          doc.text(String(datos.total.completa), columnas[2].x, y + 2);
          doc.text(String(datos.total.incompleta), columnas[3].x, y + 2);
          doc.text(String(datos.total.parcial), columnas[4].x, y + 2);
          doc.text(String(datos.total.incorrecta), columnas[5].x, y + 2);
          doc.text(String(datos.totalRespuestas), columnas[6].x, y + 2);
          guardarPDFProfesor(doc, `Informe_socratico_${datos.actividad}`);
      }

      function abrirPanelProfesor() {
          document.getElementById('panelProfesorModal').classList.add('active');
          actualizarBotonPausaCronometros();
          actualizarMantenimientoJitsiAdministrador();
          const controlSonido = document.getElementById('sonidoSolicitudesProfesor');
          if (controlSonido) controlSonido.checked = sonidoSolicitudesActivo;
          renderDocentesAutorizados();
          renderBandejaSolicitudesPendientes();
          completarFormularioRubricaSocratica();
          prepararFiltroInformeSocratico();
          renderInformeGrupalSocratico();
          iniciarPanelProfesorTiempoReal();
      }
      function cerrarPanelProfesor() {
          document.getElementById('panelProfesorModal').classList.remove('active');
          if (profesorUnsubscribe) { profesorUnsubscribe(); profesorUnsubscribe = null; }
          if (window.__profesorUnsubscribe) { window.__profesorUnsubscribe(); window.__profesorUnsubscribe = null; }
      }

      const LIMITE_CONEXION_PROFESOR_MS = 2 * 60 * 1000;
      let estadosConexionProfesor = new Map();
      let estadosConexionProfesorInicializados = false;
      let avisoDesconexionProfesorTimeout = null;

      function obtenerMarcaConexionProfesor(estudiante) {
          const valor = estudiante?.__controlEstudiante?.activoEn || estudiante?.actualizadoEn;
          return valor?.toDate
              ? valor.toDate().getTime()
              : (valor?.seconds ? Number(valor.seconds) * 1000 : new Date(valor || 0).getTime());
      }

      function estudianteEnLineaProfesor(estudiante) {
          const actualizado = obtenerMarcaConexionProfesor(estudiante);
          return Number.isFinite(actualizado) && actualizado > 0 &&
              Date.now() - actualizado < LIMITE_CONEXION_PROFESOR_MS;
      }

      function mostrarAvisoDesconexionProfesor(estudiante) {
          if (!document.getElementById('panelProfesorModal')?.classList.contains('active')) return;
          let aviso = document.getElementById('avisoDesconexionProfesor');
          if (!aviso) {
              aviso = document.createElement('div');
              aviso.id = 'avisoDesconexionProfesor';
              aviso.className = 'teacher-offline-alert';
              aviso.setAttribute('role', 'status');
              aviso.setAttribute('aria-live', 'polite');
              document.body.appendChild(aviso);
          }
          const nombre = estudiante?.estudiante?.nombre || estudiante?.nombreGoogle || estudiante?.email || 'El estudiante';
          aviso.innerHTML = `<i class="fa-solid fa-wifi"></i><div><strong>Estudiante desconectado</strong><span>${escapeHtml(nombre)} lleva 2 minutos sin actividad.</span></div>`;
          aviso.classList.add('active');
          if (avisoDesconexionProfesorTimeout) clearTimeout(avisoDesconexionProfesorTimeout);
          avisoDesconexionProfesorTimeout = setTimeout(() => aviso.classList.remove('active'), 6000);
      }

      function detectarDesconexionesProfesor() {
          const actuales = new Map();
          estudiantesProfesor.forEach(estudiante => {
              if (!estudiante?.uid) return;
              const conectado = estudianteEnLineaProfesor(estudiante);
              actuales.set(estudiante.uid, conectado);
              if (estadosConexionProfesorInicializados &&
                  estadosConexionProfesor.get(estudiante.uid) === true &&
                  conectado === false) {
                  mostrarAvisoDesconexionProfesor(estudiante);
              }
          });
          estadosConexionProfesor = actuales;
          estadosConexionProfesorInicializados = true;
      }

      function actualizarBotonSoloEnLineaProfesor() {
          const activo = document.getElementById('filtroEstadoProfesor')?.value === 'conectados';
          const boton = document.getElementById('btnSoloEnLineaProfesor');
          if (!boton) return;
          boton.classList.toggle('is-active', activo);
          boton.setAttribute('aria-pressed', String(activo));
          boton.innerHTML = activo
              ? '<i class="fa-solid fa-signal"></i> Mostrando en línea'
              : '<i class="fa-solid fa-signal"></i> Solo en línea';
      }

      function alternarFiltroSoloEnLineaProfesor() {
          const filtro = document.getElementById('filtroEstadoProfesor');
          if (!filtro) return;
          filtro.value = filtro.value === 'conectados' ? '' : 'conectados';
          renderPanelProfesor();
      }

      function limpiarFiltrosProfesor() {
          const valoresIniciales = {
              filtroProfesor: '',
              filtroEmailProfesor: '',
              filtroCursoProfesor: '',
              filtroDivisionProfesor: '',
              filtroTurnoProfesor: '',
              filtroEstadoProfesor: '',
              filtroBloqueoProfesor: '',
              filtroProgresoProfesor: '',
              filtroSalidasProfesor: '',
              filtroNotaProfesor: '',
              filtroDescuentoProfesor: '',
              filtroActualizacionProfesor: '',
              ordenProfesor: 'actualizacion-desc'
          };

          Object.entries(valoresIniciales).forEach(([id, valor]) => {
              const control = document.getElementById(id);
              if (!control) return;
              control.value = valor;
              if (control.value !== valor && control.options?.length) {
                  control.selectedIndex = 0;
              }
              control.classList.remove('teacher-filter-active');
          });

          const contenedor = document.getElementById('filtrosPanelProfesor');
          contenedor?.classList.remove('has-active-filters');
          actualizarBotonSoloEnLineaProfesor();
          renderPanelProfesor();

          document.getElementById('btnLimpiarFiltrosProfesor')?.focus({ preventScroll: true });
      }

      function calcularProgresoEstudiante(d) {
          const finalizadas = d.finalizadas || {};
          const total = seccionesData.length || 1;
          return Math.round((Object.values(finalizadas).filter(Boolean).length / total) * 100);
      }
      function obtenerNotaDesafioEstudiante(d, sectionId, resultado = null) {
          const ajuste = d?.notasDesafiosDocente?.[sectionId];
          const notaDocente = ajuste?.nota === null || ajuste?.nota === undefined || ajuste?.nota === ''
              ? NaN
              : Number(ajuste.nota);
          if (Number.isFinite(notaDocente)) return Math.max(0, Math.min(10, notaDocente));
          const registro = resultado || d?.historialResultados?.[sectionId] || {};
          const notaAutomatica = Number(registro.notaFinal ?? registro.notaIA);
          return Number.isFinite(notaAutomatica) ? Math.max(0, Math.min(10, notaAutomatica)) : null;
      }
      function calcularNotaEstudiante(d) {
          const h = d.historialResultados || {};
          const idsConNota = [...new Set([
              ...Object.keys(h),
              ...Object.keys(d.notasDesafiosDocente || {})
          ])];
          const notas = idsConNota
              .map(sectionId => obtenerNotaDesafioEstudiante(d, sectionId, h[sectionId] || {}))
              .filter(n => Number.isFinite(n));
          if (!notas.length) return '—';
          return (notas.reduce((a,b)=>a+b,0)/notas.length).toFixed(1);
      }
      function calcularNotaProvisionalEstudiante(d) {
          const academica = Number(calcularNotaEstudiante(d));
          if (!Number.isFinite(academica)) return '—';
          const penalizacion = Math.max(0, Math.min(10, Number(d.revisionSalidas?.penalizacion) || 0));
          return Math.max(0, academica - penalizacion).toFixed(1);
      }
      function calcularNotaDefinitivaEstudiante(d) {
          const revision = d.revisionSalidas || {};
          if (revision.notaConfirmada !== true) return '—';
          const confirmada = revision.notaConfirmadaValor === null || revision.notaConfirmadaValor === ''
              ? NaN
              : Number(revision.notaConfirmadaValor);
          if (Number.isFinite(confirmada)) return Math.max(0, Math.min(10, confirmada)).toFixed(1);
          return '—';
      }
      function obtenerDetallePromedioEstudiante(d) {
          const historial = d.historialResultados || {};
          const actividades = seccionesData.map(sec => {
              const resultado = historial[sec.id] || {};
              const valor = obtenerNotaDesafioEstudiante(d, sec.id, resultado);
              return {
                  id: sec.id,
                  titulo: sec.title,
                  nota: Number.isFinite(valor) ? valor : null
              };
          });
          const evaluadas = actividades.filter(x => x.nota !== null);
          const suma = evaluadas.reduce((total,x)=>total+x.nota,0);
          return {
              actividades,
              evaluadas,
              suma,
              promedio: evaluadas.length ? suma / evaluadas.length : null
          };
      }
      function formatearTiempoProfesor(segundos) {
          const total = Math.max(0, Number(segundos) || 0);
          const minutos = Math.floor(total / 60);
          const resto = total % 60;
          return `${String(minutos).padStart(2,'0')}:${String(resto).padStart(2,'0')}`;
      }
      function cerrarDetalleEstudianteProfesor() {
          document.getElementById('detalleEstudianteProfesorModal').classList.remove('active');
      }
      let detalleEstudianteProfesorIndiceActual = null;

      async function actualizarDetalleEstudianteProfesor() {
          const indice = detalleEstudianteProfesorIndiceActual;
          const actual = Number.isInteger(indice) ? estudiantesProfesor[indice] : null;
          const boton = document.getElementById('btnActualizarDetalleEstudianteProfesor');
          if (!actual?.uid) {
              alert('No se pudo identificar al estudiante que esta abierto.');
              return;
          }
          const etiquetaOriginal = boton?.innerHTML || '<i class="fa-solid fa-rotate"></i> Actualizar datos';
          if (boton) {
              boton.disabled = true;
              boton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Actualizando...';
          }
          try {
              const actualizado = await window.cargarEstudianteProfesorFirebase?.(actual.uid);
              if (!actualizado) throw new Error('student-refresh-failed');
              estudiantesProfesor[indice] = actualizado;
              renderPanelProfesor();
              abrirDetalleEstudianteProfesor(indice);
              const subtitulo = document.getElementById('detalleEstudianteProfesorSubtitulo');
              if (subtitulo) {
                  subtitulo.textContent = `Datos actualizados ${new Date().toLocaleTimeString('es-AR', {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit'
                  })}.`;
              }
          } catch (error) {
              console.error('No se pudieron actualizar los datos del estudiante:', error);
              alert('No se pudieron actualizar los datos de este estudiante. Verifica la autorizacion docente, la conexion y las reglas de Firebase.');
          } finally {
              const botonActual = document.getElementById('btnActualizarDetalleEstudianteProfesor');
              if (botonActual) {
                  botonActual.disabled = false;
                  botonActual.innerHTML = etiquetaOriginal;
              }
          }
      }

      function obtenerIndicesDetalleEstudiantesVisibles() {
          return [...document.querySelectorAll('#tablaProfesorBody .btn-abrir-acciones-estudiante')]
              .map(boton => Number(boton.dataset.estudianteIndex))
              .filter(indice => Number.isInteger(indice) && estudiantesProfesor[indice]);
      }

      function actualizarNavegacionDetalleEstudianteProfesor() {
          const indices = obtenerIndicesDetalleEstudiantesVisibles();
          const posicion = indices.indexOf(detalleEstudianteProfesorIndiceActual);
          const anterior = document.getElementById('btnDetalleEstudianteAnterior');
          const siguiente = document.getElementById('btnDetalleEstudianteSiguiente');
          const hayAnterior = posicion > 0;
          const haySiguiente = posicion >= 0 && posicion < indices.length - 1;
          if (anterior) {
              anterior.disabled = !hayAnterior;
              anterior.title = hayAnterior ? 'Estudiante anterior en la vista filtrada' : 'No hay un estudiante anterior visible';
          }
          if (siguiente) {
              siguiente.disabled = !haySiguiente;
              siguiente.title = haySiguiente ? 'Estudiante siguiente en la vista filtrada' : 'No hay un estudiante siguiente visible';
          }
      }

      function navegarDetalleEstudianteProfesor(direccion) {
          const indices = obtenerIndicesDetalleEstudiantesVisibles();
          const posicion = indices.indexOf(detalleEstudianteProfesorIndiceActual);
          if (posicion < 0) return;
          const destino = indices[posicion + Number(direccion || 0)];
          if (destino === undefined) return;
          abrirDetalleEstudianteProfesor(destino);
      }

      function filtrarDesafiosDetalleProfesor(valor = '') {
          const selector = document.getElementById('filtroDesafiosDetalleProfesor');
          if (selector && arguments.length > 0 && valor !== selector.value) {
              selector.value = String(valor || '');
          }
          const filtro = String(selector?.value || valor || '');
          const busqueda = String(document.getElementById('buscarDesafioDetalleProfesor')?.value || '')
              .trim().toLowerCase();
          const orden = String(document.getElementById('ordenDesafiosDetalleProfesor')?.value || 'original');
          const contenedor = document.getElementById('listaDesafiosDetalleProfesor');
          const actividades = [...document.querySelectorAll(
              '#detalleEstudianteProfesorContenido .teacher-activity[data-detail-status]'
          )];
          let visibles = 0;
          actividades.forEach(actividad => {
              const coincideEstado = !filtro || actividad.dataset.detailStatus?.split(' ').includes(filtro);
              const coincideTexto = !busqueda || String(actividad.dataset.detailSearch || '').includes(busqueda);
              const mostrar = coincideEstado && coincideTexto;
              actividad.hidden = !mostrar;
              if (mostrar) visibles++;
          });
          if (contenedor) {
              const ordenadas = [...actividades].sort((a, b) => {
                  if (orden === 'nota-desc') {
                      return Number(b.dataset.detailGrade || -1) - Number(a.dataset.detailGrade || -1);
                  }
                  if (orden === 'nota-asc') {
                      const notaA = a.dataset.detailGrade === '' ? 99 : Number(a.dataset.detailGrade);
                      const notaB = b.dataset.detailGrade === '' ? 99 : Number(b.dataset.detailGrade);
                      return notaA - notaB;
                  }
                  if (orden === 'titulo') {
                      return String(a.dataset.detailSearch || '').localeCompare(
                          String(b.dataset.detailSearch || ''),
                          'es'
                      );
                  }
                  if (orden === 'estado') {
                      return Number(b.dataset.detailPriority || 0) - Number(a.dataset.detailPriority || 0);
                  }
                  return Number(a.dataset.detailOrder || 0) - Number(b.dataset.detailOrder || 0);
              });
              ordenadas.forEach(actividad => contenedor.appendChild(actividad));
          }
          const estado = document.getElementById('estadoFiltroDetalleProfesor');
          if (estado) estado.textContent = `${visibles} de ${actividades.length} desafío${actividades.length === 1 ? '' : 's'}`;
          const vacio = document.getElementById('sinResultadosDetalleProfesor');
          if (vacio) vacio.hidden = visibles > 0;
          document.querySelectorAll('[data-detail-filter-chip]').forEach(boton => {
              const activo = String(boton.dataset.detailFilterChip || '') === filtro;
              boton.classList.toggle('is-active', activo);
              boton.setAttribute('aria-pressed', activo ? 'true' : 'false');
          });
      }
      function aplicarFiltroRapidoDetalleProfesor(valor = '') {
          const selector = document.getElementById('filtroDesafiosDetalleProfesor');
          if (selector) selector.value = String(valor || '');
          filtrarDesafiosDetalleProfesor();
      }
      function alternarDesafiosVisiblesDetalleProfesor(expandir) {
          document.querySelectorAll(
              '#listaDesafiosDetalleProfesor .teacher-activity:not([hidden])'
          ).forEach(actividad => {
              actividad.open = expandir === true;
          });
      }
      async function guardarNotaDesafioProfesor(indice, sectionId) {
          const d = estudiantesProfesor[indice];
          const input = document.getElementById(`notaDesafioDocente-${sectionId}`);
          const motivoInput = document.getElementById(`motivoNotaDesafioDocente-${sectionId}`);
          const estado = document.getElementById(`estadoNotaDesafioDocente-${sectionId}`);
          const nota = Number(input?.value);
          if (!d?.uid) {
              alert('No se encontró el identificador Firebase del estudiante.');
              return;
          }
          if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
              alert('La nota del desafío debe ser un número entre 0 y 10.');
              input?.focus();
              return;
          }
          const autorizado = await window.autorizarDocenteFirebase?.();
          if (!autorizado) {
              alert('Solo una cuenta docente autorizada puede modificar notas.');
              return;
          }
          if (estado) {
              estado.className = 'teacher-challenge-grade-status saving';
              estado.textContent = 'Guardando...';
          }
          const notaNormalizada = Number(nota.toFixed(1));
          const motivo = motivoInput?.value.trim() || '';
          const ok = await window.guardarNotaDesafioDocenteFirebase?.(d.uid, sectionId, {
              nota: notaNormalizada,
              motivo
          });
          if (!ok) {
              if (estado) {
                  estado.className = 'teacher-challenge-grade-status error';
                  estado.textContent = 'No se pudo guardar';
              }
              const errorFirebase = window.ultimoErrorNotaDesafioDocente || {};
              const codigo = String(errorFirebase.code || '');
              const detalle = String(errorFirebase.message || '');
              const orientacion = codigo.includes('permission-denied')
                  ? 'Publicá la versión actualizada de REGLAS.TXT en Firebase Console y verificá que la cuenta figure activa en docentesAutorizados.'
                  : 'Revisá la conexión, la autenticación docente y la consola de Firebase.';
              alert(
                  `No se pudo guardar la nota del desafío.${codigo ? `\n\nCódigo: ${codigo}` : ''}` +
                  `${detalle ? `\nDetalle: ${detalle}` : ''}\n\n${orientacion}`
              );
              return;
          }
          const notaAutomatica = Number(
              d.historialResultados?.[sectionId]?.notaFinal ??
              d.historialResultados?.[sectionId]?.notaIA
          );
          d.notasDesafiosDocente = {
              ...(d.notasDesafiosDocente || {}),
              [sectionId]: {
                  nota: notaNormalizada,
                  motivo,
                  notaAutomatica: Number.isFinite(notaAutomatica) ? notaAutomatica : null,
                  modificadaPor: window.firebaseTeacherUser?.email || window.firebaseCurrentUser?.email || ''
              }
          };
          d.revisionSalidas = {
              ...(d.revisionSalidas || {}),
              notaConfirmada: false,
              notaFinalDocente: null,
              notaConfirmadaValor: null,
              notaCalculadaAlConfirmar: null,
              notaModificadaManualmente: false
          };
          renderPanelProfesor();
          abrirDetalleEstudianteProfesor(indice);
          const estadoActualizado = document.getElementById(`estadoNotaDesafioDocente-${sectionId}`);
          if (estadoActualizado) {
              estadoActualizado.className = 'teacher-challenge-grade-status saved';
              estadoActualizado.textContent = 'Nota guardada';
          }
      }
      async function restaurarNotaDesafioProfesor(indice, sectionId) {
          const d = estudiantesProfesor[indice];
          if (!d?.uid || !d.notasDesafiosDocente?.[sectionId]) return;
          const confirmacion = await mostrarConfirmacionDocente({
              tipo: 'warning',
              icono: 'fa-arrow-rotate-left',
              titulo: 'Restaurar nota automática',
              mensaje: 'Se quitará la corrección docente de este desafío.',
              detalles: [
                  'Volverá a utilizarse la calificación automática del código y las preguntas.',
                  'La nota definitiva general quedará pendiente de una nueva confirmación.'
              ],
              confirmarTexto: 'Restaurar nota',
              confirmarIcono: 'fa-arrow-rotate-left',
              confirmarClase: 'btn-warning'
          });
          if (!confirmacion?.confirmado) return;
          const ok = await window.guardarNotaDesafioDocenteFirebase?.(d.uid, sectionId, { restaurar: true });
          if (!ok) {
              const errorFirebase = window.ultimoErrorNotaDesafioDocente || {};
              const codigo = String(errorFirebase.code || '');
              const detalle = String(errorFirebase.message || '');
              alert(
                  `No se pudo restaurar la nota automática.${codigo ? `\n\nCódigo: ${codigo}` : ''}` +
                  `${detalle ? `\nDetalle: ${detalle}` : ''}\n\nPublicá la versión actualizada de REGLAS.TXT y verificá la autorización docente.`
              );
              return;
          }
          const nuevasNotas = { ...(d.notasDesafiosDocente || {}) };
          delete nuevasNotas[sectionId];
          d.notasDesafiosDocente = nuevasNotas;
          d.revisionSalidas = {
              ...(d.revisionSalidas || {}),
              notaConfirmada: false,
              notaFinalDocente: null,
              notaConfirmadaValor: null,
              notaCalculadaAlConfirmar: null,
              notaModificadaManualmente: false
          };
          renderPanelProfesor();
          abrirDetalleEstudianteProfesor(indice);
      }
      async function cargarHistorialNotasDesafioProfesor(indice, sectionId) {
          const d = estudiantesProfesor[indice];
          const contenedor = document.getElementById(`historialNotaDesafio-${sectionId}`);
          if (!d?.uid || !contenedor) return;
          contenedor.hidden = false;
          contenedor.innerHTML = '<div class="teacher-challenge-grade-history-empty">Cargando historial...</div>';
          window.ultimoErrorHistorialNotasDesafios = null;
          const historial = await window.obtenerHistorialNotasDesafiosFirebase?.(d.uid, sectionId) || [];
          if (!historial.length) {
              contenedor.innerHTML = `<div class="teacher-challenge-grade-history-empty">${
                  window.ultimoErrorHistorialNotasDesafios
                      ? 'No se pudo consultar el historial. Verificá los permisos de Firestore.'
                      : 'Todavía no hay cambios registrados para este desafío.'
              }</div>`;
              return;
          }
          contenedor.innerHTML = `
              <div class="teacher-challenge-grade-history-title">
                  <strong><i class="fa-solid fa-clock-rotate-left"></i> Historial de cambios</strong>
                  <span>${historial.length} registro${historial.length === 1 ? '' : 's'}</span>
              </div>
              <div class="teacher-challenge-grade-history-list">
                  ${historial.map(evento => {
                      const fechaValor = evento.cambiadoEn?.toDate
                          ? evento.cambiadoEn.toDate()
                          : new Date(evento.cambiadoEn || 0);
                      const fecha = Number.isNaN(fechaValor.getTime())
                          ? 'Fecha no disponible'
                          : fechaValor.toLocaleString('es-AR');
                      const anterior = evento.valorAnterior !== null &&
                          evento.valorAnterior !== undefined &&
                          evento.valorAnterior !== '' &&
                          Number.isFinite(Number(evento.valorAnterior))
                          ? `${Number(evento.valorAnterior).toFixed(1)}/10`
                          : 'Sin nota';
                      const nuevo = evento.valorNuevo !== null &&
                          evento.valorNuevo !== undefined &&
                          evento.valorNuevo !== '' &&
                          Number.isFinite(Number(evento.valorNuevo))
                          ? `${Number(evento.valorNuevo).toFixed(1)}/10`
                          : 'Sin nota';
                      return `<article class="teacher-challenge-grade-history-item">
                          <div class="teacher-challenge-grade-history-change">
                              <span>${escapeHtml(anterior)}</span>
                              <i class="fa-solid fa-arrow-right"></i>
                              <strong>${escapeHtml(nuevo)}</strong>
                              ${evento.tipo === 'restauracion' ? '<em>Nota automática restaurada</em>' : ''}
                          </div>
                          <div class="teacher-challenge-grade-history-meta">
                              <span><i class="fa-solid fa-calendar-days"></i> ${escapeHtml(fecha)}</span>
                              <span><i class="fa-solid fa-user-shield"></i> ${escapeHtml(evento.docente || 'Docente autorizado')}</span>
                          </div>
                          ${evento.motivo ? `<p><strong>Motivo:</strong> ${escapeHtml(evento.motivo)}</p>` : ''}
                      </article>`;
                  }).join('')}
              </div>`;
      }
      async function guardarRevisionSalidasProfesor(indice) {
          const d = estudiantesProfesor[indice];
          if (!d?.uid) {
              alert('No se encontró el identificador Firebase del estudiante.');
              return;
          }
          const autorizado = await window.autorizarDocenteFirebase?.();
          if (!autorizado) {
              alert('Solo una cuenta docente autorizada puede editar el descuento de puntos.');
              return;
          }
          const penalizacion = Math.max(0, Math.min(10, Number(document.getElementById('penalizacionRevisionProfesor')?.value) || 0));
          const estado = document.getElementById('estadoRevisionProfesor')?.value || 'pendiente';
          const motivo = document.getElementById('motivoRevisionProfesor')?.value.trim() || '';
          const notaCalculada = calcularNotaProvisionalEstudiante(d);
          const notaConfirmada = document.getElementById('confirmarNotaDefinitivaProfesor')?.checked === true;
          const notaFinalTexto = String(document.getElementById('notaFinalDocenteProfesor')?.value || '').trim();
          const notaFinalDocente = notaFinalTexto === '' ? NaN : Number(notaFinalTexto);
          if (penalizacion > 0 && !motivo) {
              alert('Escribí una justificación antes de aplicar una penalización.');
              return;
          }
          if (notaConfirmada && notaCalculada === '—') {
              alert('Todavía no hay un promedio académico para confirmar.');
              return;
          }
          if (notaConfirmada && (!Number.isFinite(notaFinalDocente) || notaFinalDocente < 0 || notaFinalDocente > 10)) {
              alert('La nota final debe ser un número entre 0 y 10.');
              document.getElementById('notaFinalDocenteProfesor')?.focus();
              return;
          }
          const notaFinalConfirmada = notaConfirmada
              ? Number(notaFinalDocente.toFixed(1))
              : null;
          const notaModificadaManualmente = notaConfirmada &&
              notaFinalConfirmada !== Number(notaCalculada);
          if (notaModificadaManualmente && !motivo) {
              alert('Escribí un fundamento para modificar la nota calculada.');
              document.getElementById('motivoRevisionProfesor')?.focus();
              return;
          }
          const revision = {
              estado,
              penalizacion,
              motivo,
              notaConfirmada,
              notaFinalDocente: notaFinalConfirmada,
              notaConfirmadaValor: notaFinalConfirmada,
              notaCalculadaAlConfirmar: notaConfirmada ? Number(notaCalculada) : null,
              notaModificadaManualmente
          };
          const ok = await window.guardarRevisionDocenteFirebase?.(d.uid, revision);
          if (!ok) {
              alert('No se pudo guardar la revisión. Verificá los permisos de Firestore.');
              return;
          }
          d.revisionSalidas = {
              ...revision,
              revisadoPor: window.firebaseTeacherUser?.email || window.firebaseCurrentUser?.email || window.firebaseTeacherUser?.displayName || window.firebaseCurrentUser?.displayName || '',
              notaConfirmadaPor: notaConfirmada
                  ? (window.firebaseTeacherUser?.email || window.firebaseCurrentUser?.email || '')
                  : ''
          };
          renderPanelProfesor();
          abrirDetalleEstudianteProfesor(indice);
          alert(notaConfirmada
              ? `Revisión guardada. Nota definitiva confirmada: ${notaFinalConfirmada}/10.`
              : 'Revisión guardada. La nota definitiva queda pendiente de confirmación docente.');
      }
      async function cambiarEstadoCuentaEstudiante(indice, nuevoEstado, opciones = {}) {
          const d = estudiantesProfesor[indice];
          const estadoActual = d?.estadoCuenta || 'activo';
          const responsable = window.firebaseTeacherUser?.email || window.firebaseCurrentUser?.email ||
              window.firebaseTeacherUser?.displayName || window.firebaseCurrentUser?.displayName || '';
          if (!d?.uid) {
              alert('No se encontró el identificador Firebase del estudiante.');
              return;
          }
          if (nuevoEstado === 'rechazado') {
              const motivo = prompt('Motivo del rechazo (obligatorio):', 'Datos no autorizados por la institución');
              if (!motivo || !motivo.trim()) return;
              if (!confirm('El estudiante no podrá ingresar. ¿Confirmás el rechazo?')) return;
              const payload = {
                  estadoCuenta: 'rechazado',
                  rechazoMotivo: motivo.trim(),
                  rechazadoEn: new Date().toISOString(),
                  rechazadoPor: responsable,
                  bajaMotivo: '',
                  bajaFecha: null,
                  bajaPor: ''
              };
              const ok = await window.guardarEstadoEstudianteFirebase?.(d.uid, payload);
              if (!ok) {
                  alert('No se pudo rechazar la solicitud. Verificá las reglas de Firestore.');
                  return;
              }
              Object.assign(d, payload);
              renderPanelProfesor();
              abrirDetalleEstudianteProfesor(indice);
              return;
          }
          if (estadoActual === 'pendiente' && nuevoEstado === 'activo') {
              const problemas = validarSolicitudEstudiante(d);
              if (problemas.length) {
                  alert(`No se puede aceptar esta solicitud todavía:\n\n${problemas.join('\n')}`);
                  return false;
              }
              if (!confirm('¿Aceptar a este estudiante y habilitar su acceso a las actividades?')) return;
              const payload = {
                  estadoCuenta: 'activo',
                  aprobadoEn: new Date().toISOString(),
                  aprobadoPor: responsable,
                  rechazoMotivo: '',
                  rechazadoEn: null,
                  rechazadoPor: '',
                  bajaMotivo: '',
                  bajaFecha: null,
                  bajaPor: ''
              };
              const ok = await window.guardarEstadoEstudianteFirebase?.(d.uid, payload);
              if (!ok) {
                  alert('No se pudo aceptar al estudiante. Verificá las reglas de Firestore.');
                  return;
              }
              Object.assign(d, payload);
              renderPanelProfesor();
              abrirDetalleEstudianteProfesor(indice);
              return;
          }
          if (nuevoEstado === 'inactivo') {
              const motivo = prompt('Motivo de la baja (obligatorio):', 'Baja institucional');
              if (!motivo || !motivo.trim()) return;
              if (!confirm('La cuenta no podrá ingresar, pero se conservará todo el historial. ¿Confirmás la baja?')) return;
              const payload = {
                  estadoCuenta: 'inactivo',
                  bajaMotivo: motivo.trim(),
                  bajaFecha: new Date().toISOString(),
                  bajaPor: window.firebaseTeacherUser?.email || window.firebaseCurrentUser?.email || window.firebaseTeacherUser?.displayName || window.firebaseCurrentUser?.displayName || ''
              };
              const ok = await window.guardarEstadoEstudianteFirebase?.(d.uid, payload);
              if (!ok) {
                  alert('No se pudo dar de baja la cuenta. Verificá las reglas de Firestore.');
                  return;
              }
              d.estadoCuenta = payload.estadoCuenta;
              d.bajaMotivo = payload.bajaMotivo;
              d.bajaFecha = payload.bajaFecha;
              d.bajaPor = payload.bajaPor;
              renderPanelProfesor();
              abrirDetalleEstudianteProfesor(indice);
              return;
          }
          if (!confirm('¿Reactivar esta cuenta para permitirle ingresar nuevamente?')) return;
          const payload = {
              estadoCuenta: 'activo',
              bajaMotivo: '',
              bajaFecha: null,
              bajaPor: window.firebaseTeacherUser?.email || window.firebaseCurrentUser?.email || window.firebaseTeacherUser?.displayName || window.firebaseCurrentUser?.displayName || ''
          };
          const ok = await window.guardarEstadoEstudianteFirebase?.(d.uid, payload);
          if (!ok) {
              alert('No se pudo reactivar la cuenta. Verificá las reglas de Firestore.');
              return;
          }
          d.estadoCuenta = payload.estadoCuenta;
          d.bajaMotivo = '';
          d.bajaFecha = null;
          d.bajaPor = payload.bajaPor;
          renderPanelProfesor();
          abrirDetalleEstudianteProfesor(indice);
      }

      async function reiniciarSalidasEstudianteProfesor(indice) {
          const d = estudiantesProfesor[indice];
          if (!d?.uid) {
              alert('No se encontró el identificador Firebase del estudiante.');
              return;
          }
          const nombre = d.estudiante?.nombre || d.nombreGoogle || d.email || 'este estudiante';
          if (!confirm(`¿Reiniciar a cero el contador visible de cambios de pestaña de ${nombre}?\n\nEl historial detallado y las justificaciones se conservarán.`)) {
              return;
          }
          const ok = await window.reiniciarSalidasEstudianteFirebase?.(d.uid);
          if (!ok) {
              const error = window.ultimoErrorReinicioSalidas;
              if (error?.code === 'teacher-not-authorized') {
                  alert('No hay una sesión docente autorizada activa. Ingresá nuevamente con una cuenta docente.');
              } else if (error?.code === 'permission-denied') {
                  alert(
                      'Firestore rechazó el reinicio por permisos.\n\n' +
                      `Cuenta utilizada: ${error.email || 'sin identificar'}\n` +
                      `Correo verificado: ${error.emailVerified ? 'sí' : 'no'}\n\n` +
                      `Proyecto Firebase: ${error.projectId || 'sin identificar'}\n\n` +
                      'Confirmá que esta cuenta figure en firestore.rules y que las reglas estén publicadas.'
                  );
              } else {
                  alert(`No se pudo reiniciar el contador${error?.message ? `: ${error.message}` : '.'}`);
              }
              return;
          }
          d.salidasPestana = 0;
          renderPanelProfesor();
          abrirDetalleEstudianteProfesor(indice);
          if (window.ultimoErrorReinicioSalidas?.code === 'diagnostic-minimal-write-ok') {
              alert(
                  'El contador se reinició mediante la escritura mínima.\n\n' +
                  'Diagnóstico: Firestore acepta salidasPestana, pero rechaza reinicioSalidas o actualizadoEn.'
              );
          } else {
              alert('Contador de cambios de pestaña reiniciado correctamente.');
          }
      }

      async function controlarCronometroEstudianteProfesor(indice, accion) {
          const d = estudiantesProfesor[indice];
          if (!d?.uid) {
              alert('No se encontró el identificador Firebase del estudiante.');
              return;
          }
          const nombre = d.estudiante?.nombre || d.nombreGoogle || d.email || 'el estudiante';
          const mensajes = {
              pausar: `¿Pausar el cronómetro y la edición de ${nombre}?`,
              reanudar: `¿Reanudar el cronómetro y la edición de ${nombre}?`,
              reiniciar: `¿Reiniciar a 40:00 los módulos activos de ${nombre}?\n\nNo se borrarán códigos, respuestas ni calificaciones.`
          };
          if (!confirm(mensajes[accion] || '¿Confirmar la operación?')) return;
          const ok = await window.controlarCronometroEstudianteFirebase?.(d.uid, accion);
          if (!ok) {
              alert('No se pudo actualizar el cronómetro individual. Verificá las reglas de Firestore.');
              return;
          }
          const control = d.controlCronometroIndividual || {};
          if (accion === 'pausar') control.pausado = true;
          if (accion === 'reanudar') control.pausado = false;
          if (accion === 'reiniciar') control.reinicioId = `${Date.now()}-${d.uid}`;
          d.controlCronometroIndividual = control;
          renderPanelProfesor();
          abrirDetalleEstudianteProfesor(indice);
          const resultado = accion === 'pausar'
              ? 'Cronómetro individual pausado.'
              : accion === 'reanudar'
                  ? 'Cronómetro individual reanudado.'
                  : 'Cronómetro individual reiniciado a 40:00.';
          alert(resultado);
      }

      async function desbloquearPantallaEstudianteProfesor(indice) {
          const d = estudiantesProfesor[indice];
          if (!d?.uid) { alert('No se encontró el identificador Firebase del estudiante.'); return; }
          const nombre = d.estudiante?.nombre || d.nombreGoogle || d.email || 'este estudiante';
          const confirmacion = await mostrarConfirmacionDocente({
              tipo: 'warning',
              icono: 'fa-unlock-keyhole',
              titulo: 'Desbloquear pantalla',
              mensaje: `Se habilitará nuevamente la pantalla de ${nombre}.`,
              detalles: [
                  'El estudiante podrá continuar usando todas las actividades.',
                  'El desbloqueo quedará registrado con fecha, motivo y docente.',
                  `Desbloqueos anteriores: ${Number(d.cantidadDesbloqueos || 0)}.`
              ],
              campoLabel: 'Motivo del desbloqueo',
              campoValor: 'Desbloqueo autorizado por el docente',
              campoPlaceholder: 'Indicá por qué se autoriza el desbloqueo.',
              campoRequerido: true,
              confirmarTexto: 'Desbloquear',
              confirmarIcono: 'fa-unlock-keyhole',
              confirmarClase: 'btn-success'
          });
          if (!confirmacion.confirmado) return;
          const motivo = confirmacion.valor;
          const ok = await window.desbloquearPantallaEstudianteFirebase?.(d.uid, { motivo, nombre });
          if (!ok) { alert('No se pudo desbloquear la pantalla. Puede que ya estuviera desbloqueada o que las reglas de Firestore no permitan registrar el historial.'); return; }
          const ahora = new Date().toISOString();
          const responsable = window.firebaseTeacherUser?.email || window.firebaseCurrentUser?.email || 'Docente autorizado';
          d.pantallaBloqueada = false;
          d.cantidadDesbloqueos = Number(d.cantidadDesbloqueos || 0) + 1;
          d.ultimoDesbloqueo = { por: responsable, motivo, en: ahora };
          renderPanelProfesor();
          alert('Pantalla desbloqueada y evento registrado en el historial.');
      }

      async function bloquearPantallaEstudianteProfesor(indice) {
          const d = estudiantesProfesor[indice];
          if (!d?.uid) { alert('No se encontró el identificador Firebase del estudiante.'); return; }
          if (d.pantallaBloqueada === true) {
              alert('Este estudiante ya se encuentra bloqueado.');
              return;
          }
          const nombre = d.estudiante?.nombre || d.nombreGoogle || d.email || 'este estudiante';
          const confirmacion = await mostrarConfirmacionDocente({
              tipo: 'danger',
              icono: 'fa-lock',
              titulo: 'Bloquear pantalla',
              mensaje: `La pantalla de ${nombre} quedará completamente bloqueada.`,
              detalles: [
                  'El estudiante no podrá escribir, navegar ni usar las actividades.',
                  'Solo un docente autorizado podrá desbloquearla.',
                  'El bloqueo se aplicará inmediatamente en el dispositivo conectado.'
              ],
              campoLabel: 'Motivo del bloqueo',
              campoValor: 'Bloqueo preventivo solicitado por el docente',
              campoPlaceholder: 'Indicá por qué se bloquea la pantalla.',
              campoRequerido: true,
              confirmarTexto: 'Bloquear',
              confirmarIcono: 'fa-lock',
              confirmarClase: 'btn-danger'
          });
          if (!confirmacion.confirmado) return;
          const motivo = confirmacion.valor;
          const ok = await window.bloquearPantallaEstudianteFirebase?.(d.uid, {
              motivo,
              seccion: d.seccionActiva || ''
          });
          if (!ok) {
              alert('No se pudo bloquear la pantalla. Verificá la autorización docente y las reglas de Firestore.');
              return;
          }
          d.pantallaBloqueada = true;
          d.bloqueoManual = true;
          d.pantallaBloqueadaEn = new Date().toISOString();
          renderPanelProfesor();
          alert('Pantalla bloqueada y registrada correctamente.');
      }

      function renderPreguntaProfesor(p, indice) {
          const seleccionadas = Array.isArray(p?.seleccionadas) ? p.seleccionadas : [];
          const opciones = Array.isArray(p?.opciones) ? p.opciones : [];
          const correctas = Array.isArray(p?.correctas)
              ? p.correctas
              : opciones.map((op,i)=>(op?.correcta === true || op?.c === true) ? i : null).filter(i=>i !== null);
          const esAbierta = p?.formato === "abierta" || (p?.tipo === "SOCRÁTICA" && Boolean(p?.respuestaTexto));
          const esCorrecta = esAbierta
              ? p?.nivel === "completa"
              : JSON.stringify([...seleccionadas].sort((a,b)=>a-b)) === JSON.stringify([...correctas].sort((a,b)=>a-b));
          const nivel = p?.nivel || (esCorrecta ? "completa" : "incorrecta");
          const etiquetaNivel = p?.etiquetaNivel || (esCorrecta ? "Correcta completa" : "Incorrecta");
          const colorNivel = nivel === "completa" ? "#6ee7b7" :
              nivel === "incompleta" ? "#7dd3fc" :
              nivel === "parcial" ? "#fde68a" : "#fca5a5";
          const criteriosCumplidos = Array.isArray(p?.criteriosCumplidos) ? p.criteriosCumplidos : [];
          const criteriosFaltantes = Array.isArray(p?.criteriosFaltantes) ? p.criteriosFaltantes : [];
          return `<div class="teacher-question">
              <strong>${indice + 1}. ${escapeHtml(p?.pregunta || 'Pregunta sin texto')}</strong>
              <div style="color:var(--text-muted);font-size:.75rem;margin-top:.25rem;">
                  ${escapeHtml(p?.categoria || p?.tipo || 'ANÁLISIS')} ·
                  <strong style="color:${colorNivel}">${escapeHtml(etiquetaNivel)} · ${Number(p?.puntos || 0).toFixed(2)}/1,00</strong>
              </div>
              ${esAbierta ? `
                  <div class="teacher-socratic-response">
                      <small>Respuesta del estudiante</small>
                      <p>${escapeHtml(p?.respuestaTexto || 'Sin respuesta escrita')}</p>
                  </div>
                  <div class="teacher-socratic-criteria">
                      <div><strong>Criterios cumplidos:</strong> ${criteriosCumplidos.length ? escapeHtml(criteriosCumplidos.join(", ")) : "ninguno registrado"}</div>
                      <div><strong>Criterios a fortalecer:</strong> ${criteriosFaltantes.length ? escapeHtml(criteriosFaltantes.join(", ")) : "ninguno"}</div>
                  </div>
              ` : opciones.map((op,j)=>{
                  const seleccionada=seleccionadas.includes(j);
                  const correcta=correctas.includes(j);
                  const clases=['teacher-answer',seleccionada?'selected':'',correcta?'correct':(seleccionada?'wrong':'')].filter(Boolean).join(' ');
                  const marcas=[seleccionada?'Seleccionada':'',correcta?'Correcta':''].filter(Boolean).join(' · ');
                  return `<span class="${clases}">
                      ${seleccionada ? '☑' : '☐'} ${String.fromCharCode(65+j)}) ${escapeHtml(op?.texto || op?.t || '')}
                      ${marcas ? `<small style="color:var(--text-muted)"> — ${marcas}</small>` : ''}
                  </span>`;
              }).join('')}
          </div>`;
      }

      function resumirConsultasIAEstudiante(d) {
          const chat = d?.chatIA && typeof d.chatIA === "object" ? d.chatIA : {};
          const categorias = {
              "Errores y depuración": 0,
              "Comprensión de consigna": 0,
              "Revisión de código": 0,
              "Pistas para avanzar": 0,
              "Pruebas y resultados": 0,
              "Conceptos de programación": 0,
              "Otras consultas": 0
          };
          const modulos = [];
          const preguntas = new Map();
          let total = 0;

          Object.entries(chat).forEach(([sectionId, mensajes]) => {
              const consultas = (Array.isArray(mensajes) ? mensajes : [])
                  .filter(m => m?.rol === "student" && String(m?.texto || "").trim());
              if (!consultas.length) return;
              const sec = seccionesData.find(s => s.id === sectionId);
              modulos.push({
                  id: sectionId,
                  titulo: sec?.title || sectionId,
                  cantidad: consultas.length
              });
              consultas.forEach(m => {
                  const original = String(m.texto || "").trim();
                  const texto = normalizarEvaluacion(original);
                  total++;
                  let categoria = "Otras consultas";
                  if (/error|falla|no funciona|bug|syntax|undefined|consola/.test(texto)) categoria = "Errores y depuración";
                  else if (/consigna|entender|que pide|objetivo/.test(texto)) categoria = "Comprensión de consigna";
                  else if (/revisa|revisar|codigo|esta bien|calidad/.test(texto)) categoria = "Revisión de código";
                  else if (/pista|avanzar|siguiente|continuar|ahora/.test(texto)) categoria = "Pistas para avanzar";
                  else if (/prueba|caso|ejemplo|resultado|salida/.test(texto)) categoria = "Pruebas y resultados";
                  else if (/variable|condicion|if|bucle|for|while|funcion|parametro|return|array|objeto/.test(texto)) categoria = "Conceptos de programación";
                  categorias[categoria]++;

                  const clave = texto.replace(/[¿?¡!.,;:]+/g, "").trim().slice(0, 120);
                  if (clave) {
                      const actual = preguntas.get(clave) || { texto: original.slice(0, 160), cantidad: 0 };
                      actual.cantidad++;
                      preguntas.set(clave, actual);
                  }
              });
          });

          return {
              total,
              categorias: Object.entries(categorias)
                  .filter(([, cantidad]) => cantidad > 0)
                  .sort((a, b) => b[1] - a[1]),
              modulos: modulos.sort((a, b) => b.cantidad - a.cantidad),
              frecuentes: [...preguntas.values()]
                  .sort((a, b) => b.cantidad - a.cantidad)
                  .slice(0, 5)
          };
      }

      function obtenerAlertaConsultasIA(d) {
          const resumen = resumirConsultasIAEstudiante(d);
          const categoriaRepetida = resumen.categorias.find(([, cantidad]) => cantidad >= 4);
          const preguntaRepetida = resumen.frecuentes.find(p => p.cantidad >= 3);
          if (!categoriaRepetida && !preguntaRepetida) {
              return { activa: false, nivel: "", texto: "", detalle: "" };
          }
          if (preguntaRepetida) {
              return {
                  activa: true,
                  nivel: preguntaRepetida.cantidad >= 5 ? "alta" : "media",
                  texto: "Consulta repetida",
                  detalle: `${preguntaRepetida.texto} (${preguntaRepetida.cantidad} veces)`
              };
          }
          return {
              activa: true,
              nivel: categoriaRepetida[1] >= 7 ? "alta" : "media",
              texto: "Necesita seguimiento",
              detalle: `${categoriaRepetida[0]} (${categoriaRepetida[1]} consultas)`
          };
      }

      function resumirConsultasIAGeneral(estudiantes) {
          const categorias = new Map();
          const modulos = new Map();
          const preguntas = new Map();
          let totalConsultas = 0;
          let alumnosConConsultas = 0;
          let alumnosConAlerta = 0;

          (Array.isArray(estudiantes) ? estudiantes : []).forEach(d => {
              const resumen = resumirConsultasIAEstudiante(d);
              if (resumen.total > 0) alumnosConConsultas++;
              if (obtenerAlertaConsultasIA(d).activa) alumnosConAlerta++;
              totalConsultas += resumen.total;
              resumen.categorias.forEach(([nombre, cantidad]) => {
                  categorias.set(nombre, (categorias.get(nombre) || 0) + cantidad);
              });
              resumen.modulos.forEach(m => {
                  const actual = modulos.get(m.id) || { titulo: m.titulo, cantidad: 0 };
                  actual.cantidad += m.cantidad;
                  modulos.set(m.id, actual);
              });
              resumen.frecuentes.forEach(p => {
                  const clave = normalizarEvaluacion(p.texto).replace(/[¿?¡!.,;:]+/g, "").trim();
                  if (!clave) return;
                  const actual = preguntas.get(clave) || { texto: p.texto, cantidad: 0 };
                  actual.cantidad += p.cantidad;
                  preguntas.set(clave, actual);
              });
          });

          return {
              totalConsultas,
              alumnosConConsultas,
              alumnosConAlerta,
              categorias: [...categorias.entries()].sort((a, b) => b[1] - a[1]),
              modulos: [...modulos.values()].sort((a, b) => b.cantidad - a.cantidad),
              preguntas: [...preguntas.values()].sort((a, b) => b.cantidad - a.cantidad).slice(0, 5)
          };
      }

      let estudiantesConsultasIAVisibles = [];

      async function borrarConsultasIAGeneralesProfesor() {
          const estudiantes = estudiantesConsultasIAVisibles.filter(d => d?.uid);
          const conConsultas = estudiantes.filter(d => resumirConsultasIAEstudiante(d).total > 0);
          const totalConsultas = conConsultas.reduce((total, d) => total + resumirConsultasIAEstudiante(d).total, 0);
          if (!conConsultas.length) {
              alert("No hay consultas de IA para borrar entre los alumnos mostrados.");
              return;
          }
          if (!confirm(
              `¿Borrar ${totalConsultas} consulta(s) del chat IA de ${conConsultas.length} alumno(s) mostrados?\n\n` +
              "Se eliminarán preguntas y respuestas del chat. No se borrarán códigos, notas, cronómetros ni actividades."
          )) return;
          if (!confirm("Esta acción no se puede deshacer desde el panel. ¿Confirmás el borrado definitivo?")) return;

          const boton = document.getElementById("btnBorrarConsultasIAGenerales");
          const contenidoOriginal = boton?.innerHTML || "";
          if (boton) {
              boton.disabled = true;
              boton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Borrando...';
          }
          const ok = await window.borrarConsultasIAEstudiantesFirebase?.(conConsultas.map(d => d.uid));
          if (boton) {
              boton.disabled = false;
              boton.innerHTML = contenidoOriginal;
          }
          if (!ok) {
              alert("No se pudieron borrar las consultas. Verificá que las reglas actualizadas estén publicadas en Firebase.");
              return;
          }
          const ids = new Set(conConsultas.map(d => d.uid));
          estudiantesProfesor.forEach(d => {
              if (ids.has(d.uid)) d.chatIA = {};
          });
          renderPanelProfesor();
          alert("Las consultas generales del chat IA fueron borradas correctamente.");
      }

      async function borrarConsultasIAAlumnoProfesor(indice, origen = "tabla") {
          const d = estudiantesProfesor[indice];
          if (!d?.uid) {
              alert("No se encontró el identificador Firebase del alumno.");
              return;
          }
          const resumen = resumirConsultasIAEstudiante(d);
          const nombre = d.estudiante?.nombre || d.nombreGoogle || d.email || "este alumno";
          if (!resumen.total) {
              alert(`${nombre} no tiene consultas del chat IA para borrar.`);
              return;
          }
          const confirmacion = await mostrarConfirmacionDocente({
              tipo: 'danger',
              icono: 'fa-comments',
              titulo: 'Borrar consultas IA',
              mensaje: `Se borrarán ${resumen.total} consulta(s) del chat IA de ${nombre}.`,
              detalles: [
                  'Se eliminarán las preguntas y respuestas guardadas del chat.',
                  'No se borrarán códigos, notas, cronómetros ni actividades.',
                  'El historial de consultas no podrá recuperarse desde el panel.'
              ],
              requiereCheck: true,
              checkTexto: 'Comprendo que las consultas IA seleccionadas se eliminarán definitivamente.',
              confirmarTexto: 'Borrar consultas',
              confirmarIcono: 'fa-trash-can',
              confirmarClase: 'btn-danger'
          });
          if (!confirmacion.confirmado) return;

          const boton = origen === "detalle"
              ? document.getElementById("btnBorrarConsultasIAAlumnoDetalle")
              : document.getElementById(`btnBorrarConsultasIAAlumno-${indice}`);
          const contenidoOriginal = boton?.innerHTML || "";
          if (boton) {
              boton.disabled = true;
              boton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Borrando...';
          }
          const ok = await window.borrarConsultasIAEstudiantesFirebase?.([d.uid]);
          if (boton) {
              boton.disabled = false;
              boton.innerHTML = contenidoOriginal;
          }
          if (!ok) {
              alert("No se pudieron borrar las consultas del alumno. Verificá las reglas publicadas en Firebase.");
              return;
          }
          d.chatIA = {};
          renderPanelProfesor();
          if (origen === "detalle") abrirDetalleEstudianteProfesor(indice);
          alert(`Las consultas IA de ${nombre} fueron borradas correctamente.`);
      }

      function renderResumenConsultasIAGeneral(estudiantes) {
          const contenedor = document.getElementById("resumenConsultasIAProfesor");
          if (!contenedor) return;
          estudiantesConsultasIAVisibles = Array.isArray(estudiantes) ? [...estudiantes] : [];
          const resumen = resumirConsultasIAGeneral(estudiantes);
          if (!resumen.totalConsultas) {
              contenedor.innerHTML = `<div style="padding:1rem;border:1px solid rgba(139,92,246,.28);border-radius:8px;background:rgba(139,92,246,.05);color:var(--text-muted)">
                  <strong>Consultas generales al chat IA:</strong> todavía no hay consultas guardadas entre los alumnos mostrados.
              </div>`;
              return;
          }
          contenedor.innerHTML = `<div style="padding:1rem;border:1px solid rgba(139,92,246,.38);border-radius:8px;background:rgba(139,92,246,.07)">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:.7rem;flex-wrap:wrap;margin-bottom:.8rem">
                  <h3 style="margin:0;color:#d8b4fe"><i class="fa-solid fa-chart-line"></i> Consultas generales al chat IA</h3>
                  <div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap">
                      <span style="padding:.35rem .55rem;border-radius:6px;background:${resumen.alumnosConAlerta ? "rgba(239,68,68,.16)" : "rgba(16,185,129,.13)"};color:${resumen.alumnosConAlerta ? "#fecaca" : "#a7f3d0"}">
                          ${resumen.alumnosConAlerta} alumno(s) con alerta
                      </span>
                      <button class="btn btn-danger" id="btnBorrarConsultasIAGenerales" type="button" onclick="borrarConsultasIAGeneralesProfesor()">
                          <i class="fa-solid fa-trash-can"></i> Borrar consultas generales
                      </button>
                  </div>
              </div>
              <div class="teacher-detail-summary" style="margin:.4rem 0 .9rem">
                  <div class="teacher-detail-stat"><small>Consultas totales</small><strong>${resumen.totalConsultas}</strong></div>
                  <div class="teacher-detail-stat"><small>Alumnos que consultaron</small><strong>${resumen.alumnosConConsultas}</strong></div>
                  <div class="teacher-detail-stat"><small>Tema principal</small><strong>${escapeHtml(resumen.categorias[0]?.[0] || "Sin clasificar")}</strong></div>
                  <div class="teacher-detail-stat"><small>Módulo principal</small><strong>${escapeHtml(resumen.modulos[0]?.titulo || "Sin módulo")}</strong></div>
              </div>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.9rem">
                  <div><h4>Temas más consultados</h4><div style="margin-top:.4rem;line-height:1.65">${resumen.categorias.slice(0, 6).map(([nombre, cantidad]) => `<div>${escapeHtml(nombre)}: <strong>${cantidad}</strong></div>`).join("")}</div></div>
                  <div><h4>Módulos con más consultas</h4><div style="margin-top:.4rem;line-height:1.65">${resumen.modulos.slice(0, 6).map(m => `<div>${escapeHtml(m.titulo)}: <strong>${m.cantidad}</strong></div>`).join("")}</div></div>
                  <div><h4>Preguntas más repetidas</h4><ol style="margin:.4rem 0 0 1.2rem;line-height:1.6">${resumen.preguntas.map(p => `<li>${escapeHtml(p.texto)}${p.cantidad > 1 ? ` <strong>(${p.cantidad})</strong>` : ""}</li>`).join("") || "<li>Sin repeticiones.</li>"}</ol></div>
              </div>
          </div>`;
      }

      function resumirAyudasComprensionEstudiante(estudiante) {
          const ayudas = estudiante?.ayudasComprension && typeof estudiante.ayudasComprension === "object"
              ? estudiante.ayudasComprension
              : {};
          const resumen = {
              consultasPalabras: 0,
              palabrasUnicas: new Set(),
              pasosVistos: 0,
              materialApoyoVistas: 0,
              verificacionesCorrectas: 0,
              verificacionesIntentadas: 0,
              checklistMarcados: 0,
              checklistTotal: 0,
              modulosConAyuda: 0,
              palabrasFrecuentes: {}
          };
          seccionesData.forEach(sec => {
              const registro = ayudas[sec.id];
              if (!registro || typeof registro !== "object") return;
              let tuvoUso = false;
              Object.values(registro.palabras || {}).forEach(item => {
                  const consultas = Number(item?.consultas || 0);
                  if (!consultas) return;
                  tuvoUso = true;
                  resumen.consultasPalabras += consultas;
                  const termino = String(item?.termino || "").trim();
                  if (termino) {
                      resumen.palabrasUnicas.add(termino.toLocaleLowerCase("es"));
                      resumen.palabrasFrecuentes[termino] = Number(resumen.palabrasFrecuentes[termino] || 0) + consultas;
                  }
              });
              resumen.pasosVistos += Number(registro.pasosVistos || 0);
              resumen.materialApoyoVistas += Number(registro.materialApoyoVistas || 0);
              if (Number(registro.pasosVistos || 0) || Number(registro.materialApoyoVistas || 0)) tuvoUso = true;
              const intentos = Number(registro.verificacion?.intentos || 0);
              if (intentos) {
                  tuvoUso = true;
                  resumen.verificacionesIntentadas++;
                  if (registro.verificacion?.correcta === true) resumen.verificacionesCorrectas++;
              }
              const totalChecklist = generarChecklistConsigna(sec).length;
              const marcados = Object.values(registro.checklist || {}).filter(Boolean).length;
              resumen.checklistTotal += totalChecklist;
              resumen.checklistMarcados += Math.min(marcados, totalChecklist);
              if (marcados) tuvoUso = true;
              if (tuvoUso) resumen.modulosConAyuda++;
          });
          resumen.palabrasUnicasCantidad = resumen.palabrasUnicas.size;
          resumen.palabrasFrecuentesOrdenadas = Object.entries(resumen.palabrasFrecuentes)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 8);
          return resumen;
      }

      function renderResumenAyudasComprensionProfesor(estudiante) {
          const resumen = resumirAyudasComprensionEstudiante(estudiante);
          const tieneUso = resumen.consultasPalabras || resumen.pasosVistos ||
              resumen.materialApoyoVistas || resumen.verificacionesIntentadas ||
              resumen.checklistMarcados;
          if (!tieneUso) {
              return `<div style="padding:1rem;border:1px solid rgba(56,189,248,.3);border-radius:8px;background:rgba(56,189,248,.05);margin-bottom:1rem;color:var(--text-muted)">
                  <strong><i class="fa-solid fa-graduation-cap"></i> Registro de ayudas de comprensión:</strong>
                  el estudiante todavía no utilizó las ayudas pedagógicas.
              </div>`;
          }
          const frecuentes = resumen.palabrasFrecuentesOrdenadas.length
              ? resumen.palabrasFrecuentesOrdenadas.map(([termino, cantidad]) =>
                  `<span style="display:inline-flex;padding:.3rem .45rem;border-radius:5px;background:rgba(139,92,246,.14);margin:.18rem">${escapeHtml(termino)} (${cantidad})</span>`
                ).join("")
              : '<span style="color:var(--text-muted)">Sin palabras consultadas.</span>';
          return `<div style="padding:1rem;border:1px solid rgba(56,189,248,.38);border-radius:8px;background:rgba(56,189,248,.07);margin-bottom:1rem">
              <h3 style="margin:0 0 .7rem;color:#7dd3fc"><i class="fa-solid fa-graduation-cap"></i> Registro de ayudas de comprensión</h3>
              <p style="margin:0 0 .75rem;color:var(--text-muted);font-size:.82rem">
                  Estos datos muestran qué apoyos utilizó el estudiante. No modifican automáticamente la calificación.
              </p>
              <div class="teacher-detail-summary">
                  <div class="teacher-detail-stat"><small>Consultas de palabras</small><strong>${resumen.consultasPalabras}</strong></div>
                  <div class="teacher-detail-stat"><small>Palabras diferentes</small><strong>${resumen.palabrasUnicasCantidad}</strong></div>
                  <div class="teacher-detail-stat"><small>Aperturas de pasos</small><strong>${resumen.pasosVistos}</strong></div>
                  <div class="teacher-detail-stat"><small>Material de apoyo</small><strong>${resumen.materialApoyoVistas}</strong></div>
                  <div class="teacher-detail-stat"><small>Comprensión verificada</small><strong>${resumen.verificacionesCorrectas}/${resumen.verificacionesIntentadas}</strong></div>
                  <div class="teacher-detail-stat"><small>Lista de control</small><strong>${resumen.checklistMarcados}/${resumen.checklistTotal}</strong></div>
                  <div class="teacher-detail-stat"><small>Módulos con ayuda</small><strong>${resumen.modulosConAyuda}</strong></div>
              </div>
              <div style="margin-top:.7rem"><strong>Palabras más consultadas:</strong><div style="margin-top:.35rem">${frecuentes}</div></div>
          </div>`;
      }

      function obtenerConteoNivelesAnalista(analista) {
          const conteo = { completa: 0, incompleta: 0, parcial: 0, incorrecta: 0 };
          if (!analista) return conteo;
          if (analista.conteoNiveles && typeof analista.conteoNiveles === "object") {
              Object.keys(conteo).forEach(nivel => {
                  conteo[nivel] = Number(analista.conteoNiveles[nivel] || 0);
              });
              return conteo;
          }
          (Array.isArray(analista.preguntas) ? analista.preguntas : []).forEach(pregunta => {
              const nivel = String(pregunta?.nivel || "");
              if (Object.prototype.hasOwnProperty.call(conteo, nivel)) {
                  conteo[nivel]++;
                  return;
              }
              const seleccionadas = Array.isArray(pregunta?.seleccionadas) ? [...pregunta.seleccionadas].sort((a,b)=>a-b) : [];
              const correctas = Array.isArray(pregunta?.correctas) ? [...pregunta.correctas].sort((a,b)=>a-b) : [];
              const completa = JSON.stringify(seleccionadas) === JSON.stringify(correctas);
              conteo[completa ? "completa" : "incorrecta"]++;
          });
          return conteo;
      }

      function resumirNivelesAnalistaEstudiante(historial) {
          return Object.values(historial || {}).reduce((total, resultado) => {
              const conteo = obtenerConteoNivelesAnalista(resultado?.analista);
              Object.keys(total).forEach(nivel => {
                  total[nivel] += Number(conteo[nivel] || 0);
              });
              return total;
          }, { completa: 0, incompleta: 0, parcial: 0, incorrecta: 0 });
      }

      function renderAnalistaViabilidadExcelenciaProfesor(analista) {
          if (!analista || !Array.isArray(analista.preguntas) || !analista.preguntas.length) {
              return `<div class="teacher-analyst-empty">
                  <i class="fa-solid fa-circle-info"></i>
                  <span>El estudiante todavía no entregó respuestas al Analista de Viabilidad y Excelencia.</span>
              </div>`;
          }
          const porcentaje = Number.isFinite(Number(analista.porcentaje))
              ? `${Number(analista.porcentaje)}%`
              : 'Pendiente';
          const conteo = obtenerConteoNivelesAnalista(analista);
          const puntos = normalizarRubricaSocratica(analista.rubrica || rubricaSocraticaActual).puntos;
          return `<section class="teacher-analyst-review">
              <div class="teacher-analyst-review-header">
                  <div>
                      <h4><i class="fa-solid fa-user-check"></i> Analista de Viabilidad y Excelencia</h4>
                      <p>Respuestas técnicas y explicaciones socráticas, con el nivel alcanzado y las evidencias consideradas.</p>
                  </div>
                  <div class="teacher-analyst-review-score">
                      <strong>${escapeHtml(analista.viabilidad || 'Pendiente')}</strong>
                      <span>Viabilidad</span>
                      <strong>${escapeHtml(analista.excelencia || 'Pendiente')}</strong>
                      <span>Excelencia</span>
                      <small>${Number(analista.correctas || 0)}/${Number(analista.total || analista.preguntas.length)} completas · ${porcentaje}</small>
                  </div>
              </div>
              <div class="teacher-analyst-levels" aria-label="Desglose de respuestas">
                  <div class="is-completa"><small>Completas</small><strong>${conteo.completa}</strong><span>${puntos.completa.toFixed(2)} puntos</span></div>
                  <div class="is-incompleta"><small>Incompletas</small><strong>${conteo.incompleta}</strong><span>${puntos.incompleta.toFixed(2)} puntos</span></div>
                  <div class="is-parcial"><small>Parciales</small><strong>${conteo.parcial}</strong><span>${puntos.parcial.toFixed(2)} puntos</span></div>
                  <div class="is-incorrecta"><small>Incorrectas</small><strong>${conteo.incorrecta}</strong><span>${puntos.incorrecta.toFixed(2)} puntos</span></div>
              </div>
              <div class="teacher-analyst-review-list">
                  ${analista.preguntas.map((pregunta, indice) => renderPreguntaProfesor(pregunta, indice)).join('')}
              </div>
          </section>`;
      }

      function renderDetalleEvaluacionCodigoProfesor(evaluacionCodigo, salida, sec) {
          if (!evaluacionCodigo) {
              return `<div class="teacher-full-evaluation is-empty">
                  <strong><i class="fa-solid fa-circle-info"></i> Análisis automático pendiente</strong>
                  <p>El estudiante todavía no entregó una ejecución evaluable para este desafío.</p>
              </div>`;
          }
          const conceptos = Array.isArray(evaluacionCodigo.conceptos) ? evaluacionCodigo.conceptos : [];
          const cumplidos = conceptos.filter(item => item.cumple).map(item => item.nombre);
          const faltantes = conceptos.filter(item => !item.cumple).map(item => item.nombre);
          const metricas = evaluacionCodigo.metricas || {};
          const ejecucion = evaluacionCodigo.ejecucion || {};
          const criterios = Array.isArray(evaluacionCodigo.criterios) ? evaluacionCodigo.criterios : [];
          const mejoras = Array.isArray(evaluacionCodigo.mejoras) ? evaluacionCodigo.mejoras : [];
          const limites = Array.isArray(evaluacionCodigo.limites) ? evaluacionCodigo.limites : [];
          return `<details class="teacher-full-evaluation" open>
              <summary><i class="fa-solid fa-list-check"></i> Detalle completo del análisis automático</summary>
              <div class="teacher-full-evaluation-grid">
                  <div><small>Nota estricta</small><strong>${Number(evaluacionCodigo.nota || 0).toFixed(1)}/10</strong></div>
                  <div><small>Sintaxis</small><strong>${evaluacionCodigo.sintaxis?.valida ? 'Válida' : 'Con errores'}</strong></div>
                  <div><small>Ejecución</small><strong>${ejecucion.ok ? 'Correcta' : 'No validada'}</strong></div>
                  <div><small>Comportamiento</small><strong>${Math.round(Number(metricas.comportamiento || 0) * 100)}%</strong></div>
                  <div><small>Requisitos</small><strong>${Math.round(Number(metricas.requisitos || 0) * 100)}%</strong></div>
                  <div><small>Referencia</small><strong>${Math.round(Number(metricas.referencia || 0) * 100)}%</strong></div>
                  <div><small>Identificadores exigidos</small><strong>${Math.round(Number(metricas.nombresExigidos ?? 1) * 100)}%</strong></div>
                  <div><small>Instrucciones</small><strong>${Number(metricas.instruccionesEstimadas || 0)}</strong></div>
              </div>
              <div class="teacher-full-evaluation-columns">
                  <section>
                      <h5><i class="fa-solid fa-circle-check"></i> Evidencias encontradas</h5>
                      <p>${cumplidos.length ? cumplidos.map(x => `<span class="teacher-evidence-chip is-ok">${escapeHtml(x)}</span>`).join('') : '<span class="teacher-empty-evidence">Ninguna registrada.</span>'}</p>
                  </section>
                  <section>
                      <h5><i class="fa-solid fa-triangle-exclamation"></i> Evidencias faltantes</h5>
                      <p>${faltantes.length ? faltantes.map(x => `<span class="teacher-evidence-chip is-missing">${escapeHtml(x)}</span>`).join('') : '<span class="teacher-empty-evidence">No se detectaron faltantes.</span>'}</p>
                  </section>
              </div>
              ${criterios.length ? `<div class="teacher-evaluation-list"><h5><i class="fa-solid fa-scale-balanced"></i> Criterios y evidencias</h5><ul>${criterios.map(c => `<li><strong>${escapeHtml(c.nombre)}:</strong> ${Number(c.puntos || 0)}/${Number(c.peso || 0)} (${escapeHtml(c.estado || 'pendiente')}). ${escapeHtml(c.evidencia || '')}</li>`).join('')}</ul></div>` : ''}
              <div class="teacher-full-evaluation-columns">
                  <section>
                      <h5><i class="fa-solid fa-terminal"></i> Salida real</h5>
                      <pre class="teacher-code">${escapeHtml(ejecucion.salida || salida || '// Sin salida registrada')}</pre>
                  </section>
                  <section>
                      <h5><i class="fa-solid fa-bullseye"></i> Resultado de referencia</h5>
                      <pre class="teacher-code teacher-code-expected">${escapeHtml(ejecucion.salidaEsperada || sec?.aiSolution || '// No definido')}</pre>
                  </section>
              </div>
              ${mejoras.length ? `<div class="teacher-evaluation-list is-improvement"><h5><i class="fa-solid fa-arrow-up-right-dots"></i> Mejoras prioritarias</h5><ul>${mejoras.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul></div>` : ''}
              ${limites.length ? `<div class="teacher-evaluation-list is-limit"><h5><i class="fa-solid fa-gavel"></i> Límites aplicados</h5><ul>${limites.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul></div>` : ''}
          </details>`;
      }

      function abrirDetalleEstudianteProfesor(indice) {
          const d = estudiantesProfesor[indice];
          if (!d) return;
          detalleEstudianteProfesorIndiceActual = indice;
          const e = d.estudiante || {};
          const historial = d.historialResultados || {};
          const chatIA = d.chatIA || {};
          const codigos = d.codigos || {};
          const tiempos = d.tiemposRestantes || {};
          const finalizadas = d.finalizadas || {};
          const previews = d.contadorPrevisualizaciones || {};
          const ayudas = d.ayudasComprension || {};
          const progreso = calcularProgresoEstudiante(d);
          const promedio = calcularNotaEstudiante(d);
          const notaCalculada = calcularNotaProvisionalEstudiante(d);
          const notaDefinitiva = calcularNotaDefinitivaEstudiante(d);
          const notaFinalEditable = notaDefinitiva !== '—' ? notaDefinitiva : notaCalculada;
          const detallePromedio = obtenerDetallePromedioEstudiante(d);
          const resumenConsultasIA = resumirConsultasIAEstudiante(d);
          const resumenNivelesAnalista = resumirNivelesAnalistaEstudiante(historial);
          const eventos = Array.isArray(d.eventosSalidasPestana)
              ? d.eventosSalidasPestana
              : (Array.isArray(d.eventosSalidasPestana) ? d.eventosSalidasPestana : []);
          const revision = d.revisionSalidas || {};
          const cronometroIndividualPausado = d.controlCronometroIndividual?.pausado === true;
          const cuentaInactiva = d.estadoCuenta === 'inactivo';
          const cuentaPendiente = d.estadoCuenta === 'pendiente';
          const cuentaRechazada = d.estadoCuenta === 'rechazado';
          const estadoCuentaDetalle = cuentaPendiente ? 'Pendiente de aprobación' :
              (cuentaRechazada ? 'Rechazada' : (cuentaInactiva ? 'Inactiva' : 'Activa'));
          const colorCuentaDetalle = cuentaPendiente ? '#fde68a' :
              ((cuentaRechazada || cuentaInactiva) ? '#fca5a5' : '#6ee7b7');
          const panelAprobacion = cuentaPendiente ? `
              <div style="padding:1rem;border:1px solid rgba(245,158,11,.45);border-radius:8px;background:rgba(245,158,11,.08);margin-bottom:1rem">
                  <strong style="color:#fde68a"><i class="fa-solid fa-user-clock"></i> Solicitud de acceso pendiente</strong>
                  <div class="btn-group" style="margin-top:.75rem">
                      <button class="btn btn-success" onclick="cambiarEstadoCuentaEstudiante(${indice}, 'activo')"><i class="fa-solid fa-user-check"></i> Aceptar estudiante</button>
                      <button class="btn btn-danger" onclick="cambiarEstadoCuentaEstudiante(${indice}, 'rechazado')"><i class="fa-solid fa-user-xmark"></i> Rechazar solicitud</button>
                  </div>
              </div>` : (cuentaRechazada ? `
              <div style="padding:1rem;border:1px solid rgba(239,68,68,.45);border-radius:8px;background:rgba(239,68,68,.08);margin-bottom:1rem">
                  <strong style="color:#fca5a5"><i class="fa-solid fa-user-xmark"></i> Solicitud rechazada</strong>
                  <div style="margin-top:.45rem">Motivo: ${escapeHtml(d.rechazoMotivo || 'Sin motivo registrado')}</div>
                  <button class="btn btn-success" style="margin-top:.75rem" onclick="cambiarEstadoCuentaEstudiante(${indice}, 'activo')"><i class="fa-solid fa-user-check"></i> Habilitar cuenta</button>
              </div>` : '');
          const fecha = d.actualizadoEn?.toDate ? d.actualizadoEn.toDate().toLocaleString() : 'Sin fecha';
          const cantidadDesbloqueos = Number(d.cantidadDesbloqueos || 0);
          const ultimoDesbloqueo = d.ultimoDesbloqueo || d.desbloqueoPantalla || {};
          const ultimoDesbloqueoFecha = ultimoDesbloqueo.en?.toDate
              ? ultimoDesbloqueo.en.toDate().toLocaleString()
              : (ultimoDesbloqueo.en ? new Date(ultimoDesbloqueo.en).toLocaleString() : 'Sin desbloqueos registrados');
          document.getElementById('detalleEstudianteProfesorTitle').innerHTML =
              `<i class="fa-solid fa-user-graduate"></i> ${escapeHtml(e.nombre || d.nombreGoogle || 'Estudiante sin nombre')}`;
          document.getElementById('detalleEstudianteProfesorSubtitulo').textContent =
              `${d.email || 'Sin email'} · ${e.curso || 'Sin curso'} ${e.division || ''} · ${e.turno || 'Sin turno'}`;

          const actividadesHtml = seccionesData.map((sec, numero) => {
              const r = historial[sec.id] || {};
              const ajusteNotaDocente = d.notasDesafiosDocente?.[sec.id] || null;
              const mensajesChat = Array.isArray(chatIA[sec.id]) ? chatIA[sec.id] : [];
              const preguntas = Array.isArray(r.analista?.preguntas) ? r.analista.preguntas : [];
              const codigo = r.codigo || codigos[sec.id] || '// Sin código guardado';
              const salida = r.salida || '// Sin salida de ejecución guardada';
              const notaAutomatica = r.notaFinal ?? r.notaIA;
              const notaFinal = obtenerNotaDesafioEstudiante(d, sec.id, r);
              const tieneNotaDocente = ajusteNotaDocente?.nota !== null
                  && ajusteNotaDocente?.nota !== undefined
                  && ajusteNotaDocente?.nota !== ''
                  && Number.isFinite(Number(ajusteNotaDocente.nota));
              const evaluacionCodigo = r.evaluacionCodigo || null;
              const ayudaModulo = ayudas[sec.id] || {};
              const palabrasModulo = Object.values(ayudaModulo.palabras || {});
              const consultasPalabrasModulo = palabrasModulo.reduce((total, item) => total + Number(item?.consultas || 0), 0);
              const palabrasModuloHtml = palabrasModulo
                  .filter(item => Number(item?.consultas || 0) > 0)
                  .sort((a, b) => Number(b.consultas || 0) - Number(a.consultas || 0))
                  .map(item => `${escapeHtml(item.termino || "")} (${Number(item.consultas || 0)})`)
                  .join(", ");
              const checklistModuloTotal = generarChecklistConsigna(sec).length;
              const checklistModuloMarcado = Object.values(ayudaModulo.checklist || {}).filter(Boolean).length;
              const estado = finalizadas[sec.id] ? 'Finalizada' : (r.notaCodigo !== undefined ? 'Preguntas pendientes' : 'En curso');
              const formulaActividad = r.notaCodigo !== undefined && r.notaPreguntas !== undefined
                  ? `(${r.notaCodigo} × 0,70) + (${r.notaPreguntas} × 0,30) = ${notaAutomatica}`
                  : 'La fórmula se completará al entregar código y preguntas.';
              const estadosDetalle = [
                  (!evaluacionCodigo?.sintaxis?.valida || evaluacionCodigo?.ejecucion?.ok === false || Boolean(r.error)) ? 'errores' : '',
                  (!finalizadas[sec.id] || r.notaPreguntas === undefined || notaAutomatica === undefined) ? 'pendientes' : '',
                  tieneNotaDocente ? 'modificadas' : '',
                  finalizadas[sec.id] ? 'finalizadas' : '',
                  notaFinal === null ? 'sin-nota' : '',
                  notaFinal !== null && Number(notaFinal) >= 6 ? 'aprobadas' : '',
                  notaFinal !== null && Number(notaFinal) < 6 ? 'desaprobadas' : '',
                  finalizadas[sec.id] && notaFinal !== null &&
                      evaluacionCodigo?.sintaxis?.valida !== false &&
                      evaluacionCodigo?.ejecucion?.ok !== false &&
                      !r.error && !tieneNotaDocente ? 'completas' : ''
              ].filter(Boolean).join(' ');
              const estadoDetalleFinal = estadosDetalle || 'completas';
              const prioridadDetalle = estadosDetalle.includes('errores') ? 4
                  : (estadosDetalle.includes('pendientes') ? 3 : (tieneNotaDocente ? 2 : 1));
              const etiquetasEstado = [
                  estadosDetalle.includes('errores') ? '<span class="teacher-activity-badge is-error">Error</span>' : '',
                  estadosDetalle.includes('pendientes') ? '<span class="teacher-activity-badge is-pending">Pendiente</span>' : '',
                  tieneNotaDocente ? '<span class="teacher-activity-badge is-adjusted">Nota docente</span>' : '',
                  notaFinal !== null && Number(notaFinal) >= 6 ? '<span class="teacher-activity-badge is-approved">Aprobado</span>' : '',
                  notaFinal !== null && Number(notaFinal) < 6 ? '<span class="teacher-activity-badge is-failed">A revisar</span>' : ''
              ].filter(Boolean).join('');
              return `<details class="teacher-activity" data-section-id="${sec.id}" data-detail-status="${estadoDetalleFinal}"
                  data-detail-search="${escapeHtml(`${sec.title} ${estado} ${estadoDetalleFinal}`.toLowerCase())}"
                  data-detail-grade="${notaFinal === null ? '' : Number(notaFinal)}"
                  data-detail-priority="${prioridadDetalle}" data-detail-order="${numero}">
                  <summary>
                      <span class="teacher-activity-summary-main">
                          <strong>${escapeHtml(sec.title)}</strong>
                          <small>${estado} · Nota vigente ${notaFinal !== null ? `${notaFinal}/10` : 'pendiente'}</small>
                      </span>
                      <span class="teacher-activity-badges">${etiquetasEstado}</span>
                  </summary>
                  <div class="teacher-activity-content">
                      <div class="teacher-detail-summary">
                          <div class="teacher-detail-stat"><small>Estado</small><strong>${estado}</strong></div>
                          <div class="teacher-detail-stat"><small>Nota del código (70%)</small><strong>${r.notaCodigo !== undefined ? `${r.notaCodigo}/10` : 'Pendiente'}</strong></div>
                          <div class="teacher-detail-stat"><small>Nota de preguntas (30%)</small><strong>${r.notaPreguntas !== undefined ? `${r.notaPreguntas}/10` : 'Pendiente'}</strong></div>
                          <div class="teacher-detail-stat"><small>Calificación automática</small><strong>${notaAutomatica !== undefined ? `${notaAutomatica}/10` : 'Pendiente'}</strong></div>
                          <div class="teacher-detail-stat ${tieneNotaDocente ? 'teacher-grade-adjusted' : ''}"><small>Nota vigente</small><strong>${notaFinal !== null ? `${notaFinal}/10` : 'Pendiente'}</strong></div>
                          <div class="teacher-detail-stat"><small>Tiempo restante</small><strong>${formatearTiempoProfesor(tiempos[sec.id] ?? 2400)}</strong></div>
                          <div class="teacher-detail-stat"><small>Consultas de nota</small><strong>${Number(previews[sec.id] || 0)}/3</strong></div>
                      </div>
                      <div style="padding:.65rem;border-radius:6px;background:rgba(56,189,248,.07);border:1px solid rgba(56,189,248,.25);margin-bottom:.8rem;">
                          <strong>Cálculo de esta actividad:</strong> ${escapeHtml(formulaActividad)}
                      </div>
                      <div class="teacher-challenge-grade-editor">
                          <div class="teacher-challenge-grade-heading">
                              <div>
                                  <h4><i class="fa-solid fa-pen-to-square"></i> Calificación del docente</h4>
                                  <p>${tieneNotaDocente
                                      ? `Esta nota reemplaza la automática en el promedio. Última modificación: ${escapeHtml(ajusteNotaDocente.modificadaPor || 'docente autorizado')}.`
                                      : 'Podés reemplazar la nota automática de este desafío sin modificar el código ni las respuestas.'}</p>
                              </div>
                              <span id="estadoNotaDesafioDocente-${sec.id}" class="teacher-challenge-grade-status ${tieneNotaDocente ? 'saved' : ''}">
                                  ${tieneNotaDocente ? 'Nota docente activa' : 'Sin cambios'}
                              </span>
                          </div>
                          <div class="teacher-challenge-grade-fields">
                              <label>
                                  Nota del desafío
                                  <input id="notaDesafioDocente-${sec.id}" type="number" min="0" max="10" step="0.1"
                                      value="${notaFinal !== null ? notaFinal : ''}" placeholder="0 a 10">
                              </label>
                              <label>
                                  Observación
                                  <input id="motivoNotaDesafioDocente-${sec.id}" type="text" maxlength="1000"
                                      value="${escapeHtml(ajusteNotaDocente?.motivo || '')}" placeholder="Criterio o fundamento de la corrección">
                              </label>
                          </div>
                          <div class="teacher-challenge-grade-actions">
                              <button class="btn btn-primary" type="button" onclick="guardarNotaDesafioProfesor(${indice}, '${sec.id}')">
                                  <i class="fa-solid fa-floppy-disk"></i> Guardar nota
                              </button>
                              <button class="btn btn-secondary" type="button" onclick="cargarHistorialNotasDesafioProfesor(${indice}, '${sec.id}')">
                                  <i class="fa-solid fa-clock-rotate-left"></i> Ver historial
                              </button>
                              ${tieneNotaDocente ? `<button class="btn btn-secondary" type="button" onclick="restaurarNotaDesafioProfesor(${indice}, '${sec.id}')">
                                  <i class="fa-solid fa-arrow-rotate-left"></i> Usar nota automática
                              </button>` : ''}
                          </div>
                          <div class="teacher-challenge-grade-history" id="historialNotaDesafio-${sec.id}" hidden></div>
                      </div>
                      <div style="padding:.7rem;border-radius:6px;background:rgba(139,92,246,.07);border:1px solid rgba(139,92,246,.25);margin-bottom:.8rem;line-height:1.5">
                          <strong><i class="fa-solid fa-graduation-cap"></i> Ayudas de comprensión:</strong><br>
                          Palabras consultadas: ${consultasPalabrasModulo}${palabrasModuloHtml ? ` · ${palabrasModuloHtml}` : ""}<br>
                          Aperturas de pasos: ${Number(ayudaModulo.pasosVistos || 0)} · Material de apoyo: ${Number(ayudaModulo.materialApoyoVistas || 0)}<br>
                          Verificación: ${Number(ayudaModulo.verificacion?.intentos || 0)
                              ? (ayudaModulo.verificacion?.correcta === true ? "Correcta" : "Pendiente") + ` (${Number(ayudaModulo.verificacion?.intentos || 0)} intento/s)`
                              : "Sin realizar"} · Lista: ${checklistModuloMarcado}/${checklistModuloTotal}
                      </div>
                      <div style="display:flex;justify-content:space-between;align-items:center;gap:.6rem;flex-wrap:wrap">
                          <h4 style="margin:0">Código entregado</h4>
                          <button class="btn btn-primary" type="button" onclick="abrirEditorColaborativoProfesor(${indice}, '${sec.id}')">
                              <i class="fa-solid fa-code-branch"></i> Abrir cooperación y mensajes
                          </button>
                      </div>
                      <pre class="teacher-code">${escapeHtml(codigo)}</pre>
                      <h4 style="margin-top:.8rem">Salida de ejecución</h4>
                      <pre class="teacher-code" style="color:#7dd3fc">${escapeHtml(salida)}</pre>
                      ${renderDetalleEvaluacionCodigoProfesor(evaluacionCodigo, salida, sec)}
                      ${r.analisisIA ? `<div style="margin-top:.8rem"><strong>Análisis automático:</strong><div style="margin-top:.35rem;color:#cbd5e1">${escapeHtml(r.analisisIA)}</div></div>` : ''}
                      <div style="margin-top:.8rem">
                          <h4>Chat guiado con IA (${mensajesChat.length} mensajes)</h4>
                          ${mensajesChat.length
                              ? `<div style="display:flex;flex-direction:column;gap:.45rem;margin-top:.4rem;">${mensajesChat.map(m => `
                                  <div style="padding:.55rem .65rem;border-radius:6px;background:${m.rol === 'student' ? 'rgba(139,92,246,.14)' : 'rgba(56,189,248,.08)'};border:1px solid rgba(148,163,184,.18);">
                                      <small style="color:var(--text-muted)">${m.rol === 'student' ? 'Alumno' : 'IA'}</small>
                                      <div style="margin-top:.2rem;white-space:pre-wrap;">${escapeHtml(m.texto || '')}</div>
                                  </div>`).join('')}</div>`
                              : '<div style="color:var(--text-muted);margin-top:.35rem;">No hay consultas guardadas para este módulo.</div>'}
                      </div>
                      <div style="margin-top:1rem">
                          ${renderAnalistaViabilidadExcelenciaProfesor(r.analista)}
                      </div>
                  </div>
              </details>`;
          }).join('');

          const notasUsadas = detallePromedio.evaluadas.length
              ? detallePromedio.evaluadas.map(x=>`${escapeHtml(x.titulo)}: ${x.nota}/10`).join('<br>')
              : 'Todavía no hay actividades con una nota vigente para incluir en el promedio.';
          const formulaPromedio = detallePromedio.promedio !== null
              ? `${detallePromedio.evaluadas.map(x=>x.nota).join(' + ')} = ${detallePromedio.suma.toFixed(1)}; ${detallePromedio.suma.toFixed(1)} ÷ ${detallePromedio.evaluadas.length} = ${detallePromedio.promedio.toFixed(1)}`
              : 'Pendiente';
          const eventosHtml = eventos.length ? eventos.map(evento => {
              const salida = evento.salidaEn ? new Date(evento.salidaEn).toLocaleString() : 'Sin fecha';
              const duracion = evento.duracionSegundos === null || evento.duracionSegundos === undefined
                  ? 'No registrada'
                  : `${evento.duracionSegundos} segundos`;
              const justificacion = evento.justificacion
                  ? `<div style="margin-top:.4rem;color:#cbd5e1"><strong>Justificación:</strong> ${escapeHtml(evento.justificacion.motivo || '')} — ${escapeHtml(evento.justificacion.detalle || '')}</div>`
                  : '<div style="margin-top:.4rem;color:#fbbf24">Sin justificación del estudiante.</div>';
              return `<div class="teacher-question">
                  <strong>Evento ${Number(evento.numero || 0)} · ${escapeHtml(salida)}</strong>
                  <div style="margin-top:.3rem;color:var(--text-muted)">
                      Actividad: ${escapeHtml(evento.seccion || 'Sin identificar')} · Duración: ${escapeHtml(duracion)}
                  </div>
                  ${justificacion}
              </div>`;
          }).join('') : '<p style="color:var(--text-muted)">No hay cambios de pestaña registrados.</p>';

          const resumenConsultasHtml = resumenConsultasIA.total
              ? `<div style="padding:1rem;border:1px solid rgba(139,92,246,.38);border-radius:8px;background:rgba(139,92,246,.07);margin-bottom:1rem">
                  <div style="display:flex;justify-content:space-between;align-items:center;gap:.6rem;flex-wrap:wrap;margin-bottom:.7rem">
                      <h3 style="color:#d8b4fe;margin:0"><i class="fa-solid fa-chart-column"></i> Resumen de consultas al chat IA</h3>
                      <button class="btn btn-danger" id="btnBorrarConsultasIAAlumnoDetalle" type="button" onclick="borrarConsultasIAAlumnoProfesor(${indice}, 'detalle')">
                          <i class="fa-solid fa-trash-can"></i> Borrar consultas de este alumno
                      </button>
                  </div>
                  <div class="teacher-detail-summary" style="margin:.4rem 0 .9rem">
                      <div class="teacher-detail-stat"><small>Consultas del alumno</small><strong>${resumenConsultasIA.total}</strong></div>
                      <div class="teacher-detail-stat"><small>Tema más consultado</small><strong>${escapeHtml(resumenConsultasIA.categorias[0]?.[0] || "Sin clasificar")}</strong></div>
                      <div class="teacher-detail-stat"><small>Módulo con más consultas</small><strong>${escapeHtml(resumenConsultasIA.modulos[0]?.titulo || "Sin módulo")}</strong></div>
                  </div>
                  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.8rem">
                      <div>
                          <h4>Temas frecuentes</h4>
                          <div style="margin-top:.4rem;line-height:1.65">${resumenConsultasIA.categorias.map(([nombre, cantidad]) =>
                              `<div>${escapeHtml(nombre)}: <strong>${cantidad}</strong></div>`).join("")}</div>
                      </div>
                      <div>
                          <h4>Consultas por módulo</h4>
                          <div style="margin-top:.4rem;line-height:1.65">${resumenConsultasIA.modulos.slice(0, 6).map(m =>
                              `<div>${escapeHtml(m.titulo)}: <strong>${m.cantidad}</strong></div>`).join("")}</div>
                      </div>
                  </div>
                  <div style="margin-top:.8rem">
                      <h4>Preguntas más repetidas</h4>
                      <ol style="margin:.45rem 0 0 1.2rem;line-height:1.6">${resumenConsultasIA.frecuentes.map(p =>
                          `<li>${escapeHtml(p.texto)}${p.cantidad > 1 ? ` <strong>(${p.cantidad} veces)</strong>` : ""}</li>`).join("")}</ol>
                  </div>
              </div>`
              : `<div style="padding:1rem;border:1px solid rgba(139,92,246,.3);border-radius:8px;background:rgba(139,92,246,.05);margin-bottom:1rem;color:var(--text-muted)">
                  <strong>Resumen de consultas al chat IA:</strong> este alumno todavía no realizó consultas guardadas.
              </div>`;

          document.getElementById('detalleEstudianteProfesorContenido').innerHTML = `
              ${panelAprobacion}
              <div class="teacher-detail-summary">
                  <div class="teacher-detail-stat"><small>Nombre</small><strong>${escapeHtml(e.nombre || d.nombreGoogle || 'Sin nombre')}</strong></div>
                  <div class="teacher-detail-stat"><small>Email</small><strong>${escapeHtml(d.email || 'Sin email')}</strong></div>
                  <div class="teacher-detail-stat"><small>Curso y división</small><strong>${escapeHtml(`${e.curso || '—'} ${e.division || ''}`)}</strong></div>
                  <div class="teacher-detail-stat"><small>Turno</small><strong>${escapeHtml(e.turno || '—')}</strong></div>
                  <div class="teacher-detail-stat"><small>Progreso</small><strong>${progreso}%</strong></div>
                  <div class="teacher-detail-stat"><small>Promedio académico</small><strong>${promedio === '—' ? 'Pendiente' : `${promedio}/10`}</strong></div>
                  <div class="teacher-detail-stat"><small>Nota calculada</small><strong>${notaCalculada === '—' ? 'Pendiente' : `${notaCalculada}/10`}</strong></div>
                  <div class="teacher-detail-stat"><small>Nota definitiva</small><strong>${notaDefinitiva === '—' ? 'Pendiente de confirmación' : `${notaDefinitiva}/10`}</strong></div>
                  <div class="teacher-detail-stat teacher-level-completa"><small>Respuestas completas</small><strong>${resumenNivelesAnalista.completa}</strong></div>
                  <div class="teacher-detail-stat teacher-level-incompleta"><small>Correctas incompletas</small><strong>${resumenNivelesAnalista.incompleta}</strong></div>
                  <div class="teacher-detail-stat teacher-level-parcial"><small>Respuestas parciales</small><strong>${resumenNivelesAnalista.parcial}</strong></div>
                  <div class="teacher-detail-stat teacher-level-incorrecta"><small>Respuestas incorrectas</small><strong>${resumenNivelesAnalista.incorrecta}</strong></div>
                  <div class="teacher-detail-stat"><small>Estado de cuenta</small><strong style="color:${colorCuentaDetalle}">${estadoCuentaDetalle}</strong></div>
                  <div class="teacher-detail-stat"><small>Salidas de pestaña</small><strong>${Number(d.salidasPestana ?? d.salidasPestana ?? 0)}</strong></div>
                  <div class="teacher-detail-stat"><small>Desbloqueos</small><strong>${cantidadDesbloqueos}</strong></div>
                  <div class="teacher-detail-stat"><small>Última actualización</small><strong>${escapeHtml(fecha)}</strong></div>
              </div>
              <div class="teacher-detail-toolbar">
                  <div class="teacher-detail-toolbar-title">
                      <strong><i class="fa-solid fa-layer-group"></i> Desafíos del informe</strong>
                      <span id="estadoFiltroDetalleProfesor">${seccionesData.length} de ${seccionesData.length} desafíos</span>
                  </div>
                  <div class="teacher-detail-quick-filters" aria-label="Filtros rápidos de desafíos">
                      <button type="button" data-detail-filter-chip="" class="is-active" aria-pressed="true" onclick="aplicarFiltroRapidoDetalleProfesor('')">Todos</button>
                      <button type="button" data-detail-filter-chip="errores" aria-pressed="false" onclick="aplicarFiltroRapidoDetalleProfesor('errores')">Errores</button>
                      <button type="button" data-detail-filter-chip="pendientes" aria-pressed="false" onclick="aplicarFiltroRapidoDetalleProfesor('pendientes')">Pendientes</button>
                      <button type="button" data-detail-filter-chip="modificadas" aria-pressed="false" onclick="aplicarFiltroRapidoDetalleProfesor('modificadas')">Corregidos</button>
                  </div>
                  <div class="teacher-detail-controls">
                      <label class="teacher-detail-search">
                          <span>Buscar</span>
                          <div><i class="fa-solid fa-magnifying-glass"></i><input id="buscarDesafioDetalleProfesor" type="search" placeholder="Título o estado" oninput="filtrarDesafiosDetalleProfesor()"></div>
                      </label>
                      <label>
                          <span>Mostrar</span>
                          <select id="filtroDesafiosDetalleProfesor" onchange="filtrarDesafiosDetalleProfesor(this.value)">
                          <option value="">Todos</option>
                          <option value="errores">Con errores</option>
                          <option value="pendientes">Pendientes</option>
                          <option value="modificadas">Nota docente modificada</option>
                          <option value="finalizadas">Finalizados</option>
                          <option value="sin-nota">Sin nota vigente</option>
                          <option value="aprobadas">Nota vigente 6 o más</option>
                          <option value="desaprobadas">Nota vigente menor a 6</option>
                          <option value="completas">Completos sin observaciones</option>
                          </select>
                      </label>
                      <label>
                          <span>Ordenar</span>
                          <select id="ordenDesafiosDetalleProfesor" onchange="filtrarDesafiosDetalleProfesor()">
                              <option value="original">Orden del curso</option>
                              <option value="estado">Prioridad: errores primero</option>
                              <option value="nota-asc">Nota: menor primero</option>
                              <option value="nota-desc">Nota: mayor primero</option>
                              <option value="titulo">Título: A-Z</option>
                          </select>
                      </label>
                  </div>
                  <div class="teacher-detail-toolbar-actions">
                      <button class="btn btn-primary" type="button" onclick="alternarDesafiosVisiblesDetalleProfesor(true)">
                          <i class="fa-solid fa-angles-down"></i> Expandir visibles
                      </button>
                      <button class="btn btn-secondary" type="button" onclick="alternarDesafiosVisiblesDetalleProfesor(false)">
                          <i class="fa-solid fa-angles-up"></i> Contraer visibles
                      </button>
                  </div>
              </div>
              <div style="${(cuentaPendiente || cuentaRechazada) ? 'display:none;' : ''}padding:1rem;border:1px solid ${cuentaInactiva ? 'rgba(239,68,68,.35)' : 'rgba(16,185,129,.35)'};border-radius:8px;background:${cuentaInactiva ? 'rgba(239,68,68,.06)' : 'rgba(16,185,129,.06)'};margin-bottom:1rem">
                  <strong>Estado institucional: ${cuentaInactiva ? 'INACTIVA' : 'ACTIVA'}</strong>
                  ${cuentaInactiva ? `<div style="margin-top:.35rem">Motivo: ${escapeHtml(d.bajaMotivo || 'Sin motivo')}<br>Fecha: ${escapeHtml(d.bajaFecha ? new Date(d.bajaFecha).toLocaleString() : 'Sin fecha')}<br>Responsable: ${escapeHtml(d.bajaPor || 'Sin registrar')}</div>` : '<div style="margin-top:.35rem;color:var(--text-muted)">La cuenta puede iniciar sesión normalmente.</div>'}
                  <div style="margin-top:.7rem">
                      <button class="btn ${cuentaInactiva ? 'btn-success' : 'btn-danger'}" onclick="cambiarEstadoCuentaEstudiante(${indice}, '${cuentaInactiva ? 'activo' : 'inactivo'}')">
                          <i class="fa-solid ${cuentaInactiva ? 'fa-user-check' : 'fa-user-slash'}"></i>
                          ${cuentaInactiva ? 'Reactivar cuenta' : 'Dar de baja'}
                      </button>
                  </div>
              </div>
              <div style="padding:1rem;border:1px solid rgba(56,189,248,.35);border-radius:8px;background:rgba(56,189,248,.06);margin-bottom:1rem">
                  <strong>Control individual del cronómetro: ${cronometroIndividualPausado ? 'PAUSADO' : 'ACTIVO'}</strong>
                  <div class="btn-group" style="margin-top:.7rem">
                      <button class="btn ${cronometroIndividualPausado ? 'btn-success' : 'btn-warning'}" onclick="controlarCronometroEstudianteProfesor(${indice}, '${cronometroIndividualPausado ? 'reanudar' : 'pausar'}')">
                          <i class="fa-solid ${cronometroIndividualPausado ? 'fa-play' : 'fa-pause'}"></i>
                          ${cronometroIndividualPausado ? 'Reanudar cronómetro' : 'Pausar cronómetro'}
                      </button>
                      <button class="btn btn-secondary" onclick="controlarCronometroEstudianteProfesor(${indice}, 'reiniciar')">
                          <i class="fa-solid fa-clock-rotate-left"></i> Reiniciar a 40:00
                      </button>
                      <button class="btn btn-danger" onclick="desbloquearPantallaEstudianteProfesor(${indice})">
                          <i class="fa-solid fa-unlock-keyhole"></i> Desbloquear pantalla
                      </button>
                  </div>
              </div>
              <div style="padding:1rem;border:1px solid ${d.pantallaBloqueada ? 'rgba(239,68,68,.45)' : 'rgba(16,185,129,.35)'};border-radius:8px;background:${d.pantallaBloqueada ? 'rgba(239,68,68,.08)' : 'rgba(16,185,129,.06)'};margin-bottom:1rem">
                  <strong>Estado de pantalla: ${d.pantallaBloqueada ? 'BLOQUEADO' : 'ACTIVO'}</strong>
                  <div style="margin-top:.4rem;color:var(--text-muted);line-height:1.5">
                    Fecha del bloqueo: ${escapeHtml(d.pantallaBloqueadaEn ? new Date(d.pantallaBloqueadaEn).toLocaleString() : 'Sin bloqueo registrado')}<br>
                    Cantidad de salidas: ${Number(d.pantallaBloqueadaSalidas || d.salidasPestana || 0)}<br>
                    Última sección: ${escapeHtml(d.pantallaBloqueadaSeccion || 'Sin identificar')}<br>
                    Total de desbloqueos: ${cantidadDesbloqueos}<br>
                    Último desbloqueo: ${escapeHtml(ultimoDesbloqueoFecha)}<br>
                    Realizado por: ${escapeHtml(ultimoDesbloqueo.por || 'Sin registrar')}<br>
                    Motivo: ${escapeHtml(ultimoDesbloqueo.motivo || 'Sin motivo registrado')}
                  </div>
              </div>
              ${resumenConsultasHtml}
              ${renderResumenAyudasComprensionProfesor(d)}
              <details class="teacher-activity">
                  <summary>Cómo se calculó el promedio académico</summary>
                  <div class="teacher-activity-content">
                      <p><strong>Fórmula:</strong> suma de las notas vigentes evaluadas ÷ cantidad de actividades evaluadas. Las correcciones docentes reemplazan a la nota automática.</p>
                      <p style="margin-top:.5rem;"><strong>Cálculo actual:</strong> ${escapeHtml(formulaPromedio)}</p>
                      <p style="margin-top:.7rem;"><strong>Actividades incluidas (${detallePromedio.evaluadas.length}):</strong></p>
                      <div style="margin-top:.35rem;color:#cbd5e1;line-height:1.5">${notasUsadas}</div>
                      <p style="margin-top:.7rem;color:var(--text-muted);">Las actividades sin nota automática ni corrección docente no forman parte del promedio.</p>
                  </div>
              </details>
              <details class="teacher-activity teacher-tab-review-compact">
                  <summary>Registro de cambios de pestaña y revisión docente <small>${eventos.length} evento${eventos.length === 1 ? '' : 's'} · ${revision.estado || 'pendiente'}</small></summary>
                  <div class="teacher-activity-content">
                      <p style="color:var(--text-muted);margin-bottom:.7rem;">Estos eventos son indicadores para revisión; no constituyen por sí solos una prueba de fraude.</p>
                      <button class="btn btn-danger" style="margin-bottom:.8rem" onclick="reiniciarSalidasEstudianteProfesor(${indice})">
                          <i class="fa-solid fa-rotate-left"></i> Reiniciar contador de cambios de pestaña
                      </button>
                      ${eventosHtml}
                      <div style="margin-top:1rem;padding:1rem;border:1px solid rgba(245,158,11,.35);border-radius:8px;background:rgba(245,158,11,.06)">
                          <h4>Decisión docente</h4>
                          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.7rem;margin-top:.7rem">
                              <div class="input-group">
                                  <label for="estadoRevisionProfesor">Estado</label>
                                  <select id="estadoRevisionProfesor">
                                      <option value="pendiente" ${revision.estado === 'pendiente' ? 'selected' : ''}>Pendiente</option>
                                      <option value="sin_observaciones" ${revision.estado === 'sin_observaciones' ? 'selected' : ''}>Sin observaciones</option>
                                      <option value="advertencia" ${revision.estado === 'advertencia' ? 'selected' : ''}>Advertencia</option>
                                      <option value="penalizacion" ${revision.estado === 'penalizacion' ? 'selected' : ''}>Penalización</option>
                                      <option value="repetir_actividad" ${revision.estado === 'repetir_actividad' ? 'selected' : ''}>Solicitar repetición</option>
                                  </select>
                              </div>
                              <div class="input-group">
                                  <label for="penalizacionRevisionProfesor">Descuento sobre el promedio</label>
                                  <input id="penalizacionRevisionProfesor" type="number" min="0" max="10" step="0.1" value="${Number(revision.penalizacion || 0)}">
                              </div>
                          </div>
                          <div class="input-group" style="margin-top:.7rem">
                              <label for="motivoRevisionProfesor">Fundamento de la decisión</label>
                              <textarea id="motivoRevisionProfesor" style="min-height:90px;padding:.7rem;border-radius:6px;background:var(--bg-dark);color:white;border:1px solid var(--border)">${escapeHtml(revision.motivo || '')}</textarea>
                          </div>
                          <div class="input-group" style="margin-top:.7rem">
                              <label for="notaFinalDocenteProfesor">Nota final que desea confirmar el docente</label>
                              <input id="notaFinalDocenteProfesor" type="number" min="0" max="10" step="0.1" value="${notaFinalEditable === '—' ? '' : notaFinalEditable}">
                              <small style="color:var(--text-muted)">Puede conservar la nota calculada o reemplazarla por otro valor entre 0 y 10. Solo será definitiva al marcar la confirmación.</small>
                          </div>
                          <div style="margin-top:.7rem;line-height:1.5">
                              Promedio académico: <strong>${promedio === '—' ? 'Pendiente' : `${promedio}/10`}</strong><br>
                              Penalización: <strong>-${Number(revision.penalizacion || 0).toFixed(1)}</strong><br>
                              Nota calculada: <strong>${notaCalculada === '—' ? 'Pendiente' : `${notaCalculada}/10`}</strong><br>
                              Nota definitiva: <strong>${notaDefinitiva === '—' ? 'Pendiente de confirmación docente' : `${notaDefinitiva}/10`}</strong>
                              ${revision.notaConfirmada === true && revision.notaModificadaManualmente === true
                                  ? '<br><small>La nota definitiva fue modificada manualmente por el docente.</small>'
                                  : ''}
                              ${revision.revisadoPor ? `<br><small>Última revisión: ${escapeHtml(revision.revisadoPor)}</small>` : ''}
                          </div>
                          <label style="display:flex;align-items:flex-start;gap:.55rem;margin-top:.8rem;padding:.75rem;border:1px solid rgba(56,189,248,.35);border-radius:7px;background:rgba(56,189,248,.08);cursor:pointer">
                              <input id="confirmarNotaDefinitivaProfesor" type="checkbox" ${revision.notaConfirmada === true ? 'checked' : ''} ${notaCalculada === '—' ? 'disabled' : ''} style="margin-top:.2rem">
                              <span>
                                  <strong>Confirmar nota definitiva</strong><br>
                                  <small>Se confirmará el valor ingresado arriba. Si se modifica el descuento desde el editor rápido, deberá confirmarse nuevamente.</small>
                              </span>
                          </label>
                          <button class="btn btn-warning" style="margin-top:.8rem" onclick="guardarRevisionSalidasProfesor(${indice})">
                              <i class="fa-solid fa-floppy-disk"></i> Guardar decisión y confirmación
                          </button>
                      </div>
                  </div>
              </details>
              <div style="display:flex;justify-content:space-between;align-items:center;gap:.7rem;flex-wrap:wrap;margin:1rem 0 .7rem;">
                  <h3 style="margin:0;color:var(--primary)">Actividades</h3>
              </div>
              <div id="sinResultadosDetalleProfesor" class="teacher-detail-empty" hidden>
                  <i class="fa-solid fa-filter-circle-xmark"></i>
                  <strong>No hay desafíos que coincidan.</strong>
                  <span>Modificá la búsqueda o elegí otro filtro.</span>
              </div>
              <div id="listaDesafiosDetalleProfesor">${actividadesHtml}</div>`;
          document.getElementById('detalleEstudianteProfesorModal').classList.add('active');
          actualizarNavegacionDetalleEstudianteProfesor();
          filtrarDesafiosDetalleProfesor();
      }

      function cerrarHistorialDesbloqueos() {
          document.getElementById('historialDesbloqueosModal')?.classList.remove('active');
      }

      async function abrirHistorialDesbloqueos(indice) {
          const d = estudiantesProfesor[indice];
          if (!d?.uid) return;
          const nombre = d.estudiante?.nombre || d.nombreGoogle || d.email || 'Estudiante';
          const contenido = document.getElementById('historialDesbloqueosContenido');
          document.getElementById('historialDesbloqueosSubtitulo').textContent = `${nombre} · ${d.email || 'Sin email'}`;
          document.getElementById('historialDesbloqueosModal').classList.add('active');
          contenido.innerHTML = '<p style="color:var(--text-muted)">Cargando historial...</p>';
          const historial = await window.obtenerHistorialDesbloqueosFirebase?.(d.uid) || [];
          if (!historial.length) {
              contenido.innerHTML = '<div class="history-event"><strong>No hay desbloqueos registrados.</strong><div style="margin-top:.35rem;color:var(--text-muted)">El contador actual es 0.</div></div>';
              return;
          }
          const formatoFecha = valor => {
              if (!valor) return 'Sin fecha';
              if (valor.toDate) return valor.toDate().toLocaleString('es-AR');
              const fecha = new Date(valor);
              return Number.isNaN(fecha.getTime()) ? 'Sin fecha' : fecha.toLocaleString('es-AR');
          };
          contenido.innerHTML = `
            <div class="teacher-detail-summary" style="margin:0 0 1rem">
              <div class="teacher-detail-stat"><small>Total de desbloqueos</small><strong>${historial.length}</strong></div>
              <div class="teacher-detail-stat"><small>Contador guardado</small><strong>${Number(d.cantidadDesbloqueos || historial.length)}</strong></div>
            </div>
            ${historial.map((evento, posicion) => `
              <article class="history-event">
                <strong><i class="fa-solid fa-unlock-keyhole"></i> Desbloqueo ${historial.length - posicion}</strong>
                <div class="history-event-meta">
                  <span><b>Fecha:</b> ${escapeHtml(formatoFecha(evento.desbloqueadoEn))}</span>
                  <span><b>Docente:</b> ${escapeHtml(evento.desbloqueadoPor || 'Sin registrar')}</span>
                  <span><b>Motivo:</b> ${escapeHtml(evento.motivo || 'Sin motivo registrado')}</span>
                  <span><b>Salidas:</b> ${Number(evento.bloqueoSalidas || 0)}</span>
                  <span><b>Sección:</b> ${escapeHtml(evento.bloqueoSeccion || 'Sin identificar')}</span>
                  <span><b>Bloqueo original:</b> ${escapeHtml(formatoFecha(evento.bloqueoEn))}</span>
                </div>
              </article>`).join('')}`;
      }

      let historialDescuentosActual = [];
      let estudianteHistorialDescuentosActual = null;

      function fechaHistorialDescuento(valor) {
          if (!valor) return null;
          const fecha = valor.toDate ? valor.toDate() : new Date(valor);
          return Number.isNaN(fecha.getTime()) ? null : fecha;
      }

      function formatoFechaHistorialDescuento(valor) {
          const fecha = fechaHistorialDescuento(valor);
          return fecha ? fecha.toLocaleString('es-AR') : 'Sin fecha';
      }

      function formatoPuntosHistorialDescuento(valor) {
          return Number(valor || 0).toFixed(1);
      }

      function fechaLocalParaInput(fecha) {
          const anio = fecha.getFullYear();
          const mes = String(fecha.getMonth() + 1).padStart(2, '0');
          const dia = String(fecha.getDate()).padStart(2, '0');
          return `${anio}-${mes}-${dia}`;
      }

      function actualizarFiltroRapidoActivoHistorialDescuentos() {
          const valorDesde = document.getElementById('historialDescuentosDesde')?.value || '';
          const valorHasta = document.getElementById('historialDescuentosHasta')?.value || '';
          const hoy = new Date();
          hoy.setHours(0, 0, 0, 0);
          const hastaEsperado = fechaLocalParaInput(hoy);
          document.querySelectorAll('.discount-history-quick-filter').forEach(boton => {
              const dias = Number(boton.dataset.dias || 0);
              const desdeEsperado = new Date(hoy);
              desdeEsperado.setDate(desdeEsperado.getDate() - Math.max(0, dias - 1));
              const activo = dias > 0 &&
                  valorDesde === fechaLocalParaInput(desdeEsperado) &&
                  valorHasta === hastaEsperado;
              boton.classList.toggle('is-active', activo);
              boton.setAttribute('aria-pressed', activo ? 'true' : 'false');
          });
      }

      function aplicarFiltroRapidoHistorialDescuentos(dias) {
          const cantidadDias = Math.max(1, Number(dias) || 1);
          const hasta = new Date();
          hasta.setHours(0, 0, 0, 0);
          const desde = new Date(hasta);
          desde.setDate(desde.getDate() - (cantidadDias - 1));
          const campoDesde = document.getElementById('historialDescuentosDesde');
          const campoHasta = document.getElementById('historialDescuentosHasta');
          if (campoDesde) campoDesde.value = fechaLocalParaInput(desde);
          if (campoHasta) campoHasta.value = fechaLocalParaInput(hasta);
          aplicarFiltrosHistorialDescuentos();
      }

      function cerrarHistorialDescuentos() {
          document.getElementById('historialDescuentosModal')?.classList.remove('active');
          historialDescuentosActual = [];
          estudianteHistorialDescuentosActual = null;
      }

      function limpiarFiltrosHistorialDescuentos() {
          const desde = document.getElementById('historialDescuentosDesde');
          const hasta = document.getElementById('historialDescuentosHasta');
          const docente = document.getElementById('historialDescuentosDocente');
          if (desde) desde.value = '';
          if (hasta) hasta.value = '';
          if (docente) docente.value = '';
          aplicarFiltrosHistorialDescuentos();
      }

      function aplicarFiltrosHistorialDescuentos() {
          const contenido = document.getElementById('historialDescuentosContenido');
          if (!contenido || !estudianteHistorialDescuentosActual) return;
          const valorDesde = document.getElementById('historialDescuentosDesde')?.value || '';
          const valorHasta = document.getElementById('historialDescuentosHasta')?.value || '';
          const docenteSeleccionado = document.getElementById('historialDescuentosDocente')?.value || '';
          const fechaDesde = valorDesde ? new Date(`${valorDesde}T00:00:00`) : null;
          const fechaHasta = valorHasta ? new Date(`${valorHasta}T23:59:59.999`) : null;
          actualizarFiltroRapidoActivoHistorialDescuentos();
          const filtrados = historialDescuentosActual.filter(evento => {
              const fecha = fechaHistorialDescuento(evento.cambiadoEn);
              const docente = String(evento.docente || 'Sin registrar');
              if (docenteSeleccionado && docente !== docenteSeleccionado) return false;
              if (fechaDesde && (!fecha || fecha < fechaDesde)) return false;
              if (fechaHasta && (!fecha || fecha > fechaHasta)) return false;
              return true;
          });
          const d = estudianteHistorialDescuentosActual;
          const descuentoActual = Math.max(0, Math.min(10, Number(d.revisionSalidas?.penalizacion) || 0));
          const resumen = `
            <div class="teacher-detail-summary" style="margin:0 0 1rem">
              <div class="teacher-detail-stat"><small>Coincidencias</small><strong>${filtrados.length}</strong></div>
              <div class="teacher-detail-stat"><small>Total de cambios</small><strong>${historialDescuentosActual.length}</strong></div>
              <div class="teacher-detail-stat"><small>Descuento actual</small><strong>${formatoPuntosHistorialDescuento(descuentoActual)} puntos</strong></div>
            </div>`;
          if (!filtrados.length) {
              contenido.innerHTML = `${resumen}<div class="history-event">
                <strong><i class="fa-solid fa-filter-circle-xmark"></i> No hay cambios que coincidan con los filtros.</strong>
                <div style="margin-top:.35rem;color:var(--text-muted)">Modificá las fechas, elegí otro docente o limpiá los filtros.</div>
              </div>`;
              return;
          }
          contenido.innerHTML = `${resumen}${filtrados.map(evento => {
              const valorNuevo = Number(evento.valorNuevo || 0);
              const motivoAnterior = evento.motivoAnterior || 'Sin motivo';
              const motivoNuevo = evento.motivoNuevo || 'Sin motivo';
              const numeroCambio = historialDescuentosActual.length - historialDescuentosActual.indexOf(evento);
              return `
                <article class="history-event">
                  <strong><i class="fa-solid fa-pen-to-square"></i> Cambio ${numeroCambio}</strong>
                  <div class="discount-history-change">
                    <span class="discount-history-value old"><i class="fa-solid fa-minus"></i> ${formatoPuntosHistorialDescuento(evento.valorAnterior)} puntos</span>
                    <i class="fa-solid fa-arrow-right discount-history-arrow" aria-hidden="true"></i>
                    <span class="discount-history-value new ${valorNuevo === 0 ? 'cleared' : ''}"><i class="fa-solid ${valorNuevo === 0 ? 'fa-circle-check' : 'fa-minus'}"></i> ${formatoPuntosHistorialDescuento(valorNuevo)} puntos</span>
                  </div>
                  <div class="history-event-meta">
                    <span><b>Fecha:</b> ${escapeHtml(formatoFechaHistorialDescuento(evento.cambiadoEn))}</span>
                    <span><b>Docente:</b> ${escapeHtml(evento.docente || 'Sin registrar')}</span>
                  </div>
                  <div class="discount-history-reasons">
                    <div class="discount-history-reason"><small>Motivo anterior</small>${escapeHtml(motivoAnterior)}</div>
                    <div class="discount-history-reason"><small>Motivo nuevo</small>${escapeHtml(motivoNuevo)}</div>
                  </div>
                </article>`;
          }).join('')}`;
      }

      async function abrirHistorialDescuentos(indice) {
          const d = estudiantesProfesor[indice];
          if (!d?.uid) return;
          const autorizado = await window.autorizarDocenteFirebase?.();
          if (!autorizado) {
              alert('Solo una cuenta docente autorizada puede consultar el historial de descuentos.');
              return;
          }
          const modal = document.getElementById('historialDescuentosModal');
          const contenido = document.getElementById('historialDescuentosContenido');
          const subtitulo = document.getElementById('historialDescuentosSubtitulo');
          const filtros = document.getElementById('historialDescuentosFiltros');
          if (!modal || !contenido || !subtitulo || !filtros) return;
          const nombre = d.estudiante?.nombre || d.nombreGoogle || d.email || 'Estudiante';
          subtitulo.textContent = `${nombre} · ${d.email || 'Sin email'}`;
          modal.classList.add('active');
          filtros.hidden = true;
          contenido.innerHTML = '<p style="color:var(--text-muted)"><i class="fa-solid fa-spinner fa-spin"></i> Cargando historial...</p>';
          window.ultimoErrorHistorialDescuentos = null;
          const historial = await window.obtenerHistorialDescuentosFirebase?.(d.uid) || [];
          if (!historial.length) {
              const huboError = Boolean(window.ultimoErrorHistorialDescuentos);
              contenido.innerHTML = `<div class="history-event">
                <strong><i class="fa-solid ${huboError ? 'fa-triangle-exclamation' : 'fa-circle-info'}"></i> ${huboError ? 'No se pudo cargar el historial.' : 'No hay cambios de descuento registrados.'}</strong>
                <div style="margin-top:.35rem;color:var(--text-muted)">${huboError ? 'Verificá la conexión y que las reglas de Firestore estén publicadas.' : 'Los próximos cambios de valor o motivo aparecerán en esta ventana.'}</div>
              </div>`;
              return;
          }
          historialDescuentosActual = historial;
          estudianteHistorialDescuentosActual = d;
          const selectorDocente = document.getElementById('historialDescuentosDocente');
          const docentes = [...new Set(historial.map(evento => String(evento.docente || 'Sin registrar')))]
              .sort((a, b) => a.localeCompare(b, 'es'));
          selectorDocente.innerHTML = '<option value="">Todos los docentes</option>';
          docentes.forEach(docente => {
              const opcion = document.createElement('option');
              opcion.value = docente;
              opcion.textContent = docente;
              selectorDocente.appendChild(opcion);
          });
          document.getElementById('historialDescuentosDesde').value = '';
          document.getElementById('historialDescuentosHasta').value = '';
          filtros.hidden = false;
          aplicarFiltrosHistorialDescuentos();
      }

      function cerrarHistorialPestanas() {
          document.getElementById('historialPestanasModal')?.classList.remove('active');
      }

      function formatearDuracionHistorialPestanas(segundos) {
          const total = Math.max(0, Math.round(Number(segundos) || 0));
          const horas = Math.floor(total / 3600);
          const minutos = Math.floor((total % 3600) / 60);
          const restantes = total % 60;
          if (horas) return `${horas} h ${minutos} min ${restantes} s`;
          if (minutos) return `${minutos} min ${restantes} s`;
          return `${restantes} s`;
      }

      async function abrirHistorialPestanas(indice) {
          const d = estudiantesProfesor[indice];
          if (!d?.uid) return;
          const autorizado = await window.autorizarDocenteFirebase?.();
          if (!autorizado) {
              alert('Solo una cuenta docente autorizada puede consultar el historial de pestañas.');
              return;
          }
          const modal = document.getElementById('historialPestanasModal');
          const contenido = document.getElementById('historialPestanasContenido');
          const subtitulo = document.getElementById('historialPestanasSubtitulo');
          if (!modal || !contenido || !subtitulo) return;
          const nombre = d.estudiante?.nombre || d.nombreGoogle || d.email || 'Estudiante';
          subtitulo.textContent = `${nombre} · ${d.email || 'Sin email'}`;
          modal.classList.add('active');
          contenido.innerHTML = '<p style="color:var(--text-muted)"><i class="fa-solid fa-spinner fa-spin"></i> Cargando historial...</p>';
          window.ultimoErrorHistorialPestanas = null;
          const historial = await window.obtenerHistorialPestanasFirebase?.(d.uid) || [];
          if (!historial.length) {
              const huboError = Boolean(window.ultimoErrorHistorialPestanas);
              contenido.innerHTML = `<div class="history-event">
                <strong><i class="fa-solid ${huboError ? 'fa-triangle-exclamation' : 'fa-circle-info'}"></i> ${huboError ? 'No se pudo cargar el historial.' : 'No hay pestañas externas registradas.'}</strong>
                <div style="margin-top:.35rem;color:var(--text-muted)">${huboError ? 'Verificá la conexión y publicá las reglas actualizadas de Firestore.' : 'Instalá la extensión en el navegador del estudiante e iniciá una clase para comenzar el registro.'}</div>
              </div>`;
              return;
          }
          const fecha = valor => {
              const objeto = new Date(valor || '');
              return Number.isNaN(objeto.getTime()) ? 'Sin fecha' : objeto.toLocaleString('es-AR');
          };
          const tiempo = valor => {
              const objeto = new Date(valor || '');
              return Number.isNaN(objeto.getTime())
                  ? 'Sin hora'
                  : objeto.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          };
          const eventosCronologicos = [...historial].sort(
              (a, b) => new Date(a.salidaEn || 0).getTime() - new Date(b.salidaEn || 0).getTime()
          );
          const grupos = [];
          const gruposPorId = new Map();
          eventosCronologicos.forEach(evento => {
              const grupoExplicito = String(evento.salidaGrupoId || '').trim();
              let grupo = grupoExplicito ? gruposPorId.get(grupoExplicito) : null;
              if (!grupo && !grupoExplicito) {
                  const ultimo = grupos[grupos.length - 1];
                  const inicioActual = new Date(evento.salidaEn || 0).getTime();
                  const finalAnterior = new Date(ultimo?.eventos?.[ultimo.eventos.length - 1]?.regresoEn || 0).getTime();
                  const continuidad = ultimo &&
                      ultimo.legacy === true &&
                      ultimo.claseId === String(evento.claseId || '') &&
                      Number.isFinite(inicioActual) &&
                      Number.isFinite(finalAnterior) &&
                      Math.abs(inicioActual - finalAnterior) <= 3000;
                  if (continuidad) grupo = ultimo;
              }
              if (!grupo) {
                  grupo = {
                      id: grupoExplicito || `legacy-${evento.id || grupos.length}`,
                      legacy: !grupoExplicito,
                      claseId: String(evento.claseId || ''),
                      eventos: []
                  };
                  grupos.push(grupo);
                  if (grupoExplicito) gruposPorId.set(grupoExplicito, grupo);
              }
              grupo.eventos.push(evento);
          });
          grupos.forEach(grupo => {
              grupo.eventos.sort(
                  (a, b) => new Date(a.salidaEn || 0).getTime() - new Date(b.salidaEn || 0).getTime()
              );
              grupo.salidaEn = grupo.eventos[0]?.salidaEn || '';
              grupo.regresoEn = grupo.eventos[grupo.eventos.length - 1]?.regresoEn || '';
              grupo.duracionSegundos = grupo.eventos.reduce(
                  (suma, evento) => suma + Math.max(0, Number(evento.duracionSegundos) || 0),
                  0
              );
          });
          grupos.sort((a, b) => new Date(b.salidaEn || 0).getTime() - new Date(a.salidaEn || 0).getTime());
          const tiempoTotal = historial.reduce((suma, evento) => suma + Math.max(0, Number(evento.duracionSegundos) || 0), 0);
          const dominios = new Set(historial.map(evento => evento.dominioDestino).filter(Boolean));
          contenido.innerHTML = `
            <div class="teacher-detail-summary" style="margin:0 0 1rem">
              <div class="teacher-detail-stat"><small>Salidas de la actividad</small><strong>${grupos.length}</strong></div>
              <div class="teacher-detail-stat"><small>Visitas registradas</small><strong>${historial.length}</strong></div>
              <div class="teacher-detail-stat"><small>Dominios distintos</small><strong>${dominios.size}</strong></div>
              <div class="teacher-detail-stat"><small>Tiempo total fuera</small><strong>${escapeHtml(formatearDuracionHistorialPestanas(tiempoTotal))}</strong></div>
            </div>
            ${grupos.map((grupo, posicionGrupo) => {
              const primerEvento = grupo.eventos[0] || {};
              const dominiosGrupo = new Set(grupo.eventos.map(evento => evento.dominioDestino).filter(Boolean));
              return `
                <article class="tab-excursion">
                  <div class="tab-excursion-header">
                    <div>
                      <strong><i class="fa-solid fa-route"></i> Salida ${grupos.length - posicionGrupo}</strong>
                      <div style="margin-top:.3rem;color:var(--text-muted);font-size:.76rem">
                        ${escapeHtml(fecha(grupo.salidaEn))} · regreso ${escapeHtml(tiempo(grupo.regresoEn))}
                      </div>
                    </div>
                    <div class="tab-excursion-summary">
                      <span><i class="fa-solid fa-window-restore"></i> ${grupo.eventos.length} página${grupo.eventos.length === 1 ? '' : 's'}</span>
                      <span><i class="fa-solid fa-globe"></i> ${dominiosGrupo.size} dominio${dominiosGrupo.size === 1 ? '' : 's'}</span>
                      <span><i class="fa-solid fa-stopwatch"></i> ${escapeHtml(formatearDuracionHistorialPestanas(grupo.duracionSegundos))}</span>
                    </div>
                  </div>
                  <div class="history-event-meta">
                    <span><b>Sección de origen:</b> ${escapeHtml(primerEvento.seccionTitulo || primerEvento.seccionOrigen || 'Sin identificar')}</span>
                    <span><b>Clase:</b> ${escapeHtml(primerEvento.claseId || 'Sin identificar')}</span>
                  </div>
                  <div class="tab-excursion-route">
                    ${grupo.eventos.map((evento, indiceEvento) => `
                      <div class="tab-route-step">
                        <span class="tab-route-number">${indiceEvento + 1}</span>
                        <span class="tab-history-domain"><i class="fa-solid fa-globe"></i> ${escapeHtml(evento.dominioDestino || 'desconocido')}</span>
                        <span class="tab-history-title">${escapeHtml(evento.tituloDestino || 'Sin título')}</span>
                        <div class="history-event-meta">
                          <span><b>Desde:</b> ${escapeHtml(tiempo(evento.salidaEn))}</span>
                          <span><b>Hasta:</b> ${escapeHtml(tiempo(evento.regresoEn))}</span>
                          <span class="tab-history-duration"><b>Duración:</b> ${escapeHtml(formatearDuracionHistorialPestanas(evento.duracionSegundos))}</span>
                        </div>
                      </div>`).join('')}
                  </div>
                </article>`;
            }).join('')}`;
      }

      let confirmacionDocentePendiente = null;

      function cerrarConfirmacionDocente(resultado = { confirmado: false, valor: '' }) {
          const modal = document.getElementById('confirmacionDocenteModal');
          modal?.classList.remove('active');
          if (modal) modal.style.zIndex = '';
          if (resultado?.confirmado) {
              const jitsiModal = document.getElementById('jitsiModal');
              if (jitsiModal?.dataset.hostConfirmation === 'true') {
                  jitsiModal.style.display = 'flex';
                  jitsiModal.classList.add('active');
                  jitsiModal.style.zIndex = '11000';
                  setTimeout(() => {
                      try { window.focus(); } catch (error) {}
                      jitsiModal.querySelector('.jitsi-box')?.focus({ preventScroll: true });
                  }, 0);
              }
          }
          if (confirmacionDocentePendiente) {
              const resolver = confirmacionDocentePendiente;
              confirmacionDocentePendiente = null;
              resolver(resultado);
          }
      }

      function mostrarConfirmacionDocente(configuracion = {}) {
          const modal = document.getElementById('confirmacionDocenteModal');
          const caja = modal?.querySelector('.teacher-confirm-box');
          const titulo = document.getElementById('confirmacionDocenteTitulo');
          const mensaje = document.getElementById('confirmacionDocenteMensaje');
          const icono = document.getElementById('confirmacionDocenteIcono');
          const detalles = document.getElementById('confirmacionDocenteDetalles');
          const campo = document.getElementById('confirmacionDocenteCampo');
          const campoLabel = document.getElementById('confirmacionDocenteCampoLabel');
          const entrada = document.getElementById('confirmacionDocenteEntrada');
          const checkContenedor = document.getElementById('confirmacionDocenteCheckContenedor');
          const check = document.getElementById('confirmacionDocenteCheck');
          const checkTexto = document.getElementById('confirmacionDocenteCheckTexto');
          const error = document.getElementById('confirmacionDocenteError');
          const cancelar = document.getElementById('confirmacionDocenteCancelar');
          const aceptar = document.getElementById('confirmacionDocenteAceptar');
          if (!modal || !caja || !titulo || !mensaje || !icono || !detalles || !campo || !campoLabel || !entrada || !checkContenedor || !check || !checkTexto || !error || !aceptar || !cancelar) {
              return Promise.resolve({ confirmado: false, valor: '' });
          }

          if (confirmacionDocentePendiente) cerrarConfirmacionDocente();
          caja.classList.remove('is-warning', 'is-danger');
          if (configuracion.tipo === 'warning') caja.classList.add('is-warning');
          if (configuracion.tipo === 'danger') caja.classList.add('is-danger');
          titulo.textContent = configuracion.titulo || 'Confirmar acción';
          mensaje.textContent = configuracion.mensaje || 'Revisá la información antes de continuar.';
          icono.className = `fa-solid ${configuracion.icono || 'fa-circle-question'}`;

          const listaDetalles = Array.isArray(configuracion.detalles) ? configuracion.detalles : [];
          detalles.hidden = listaDetalles.length === 0;
          detalles.innerHTML = listaDetalles.length
              ? `<ul>${listaDetalles.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
              : '';

          const usaCampo = Boolean(configuracion.campoLabel || configuracion.valorEsperado);
          campo.hidden = !usaCampo;
          campoLabel.textContent = configuracion.campoLabel || 'Confirmación';
          entrada.value = configuracion.campoValor || '';
          entrada.placeholder = configuracion.campoPlaceholder || '';

          checkContenedor.hidden = !configuracion.requiereCheck;
          check.checked = false;
          checkTexto.textContent = configuracion.checkTexto || 'Comprendo el alcance de esta acción.';
          error.style.display = 'none';
          error.textContent = '';

          aceptar.className = `btn ${configuracion.confirmarClase || 'btn-primary'}`;
          aceptar.innerHTML = `<i class="fa-solid ${configuracion.confirmarIcono || 'fa-check'}"></i> ${escapeHtml(configuracion.confirmarTexto || 'Confirmar')}`;

          return new Promise(resolve => {
              confirmacionDocentePendiente = resolve;
              const cancelarAccion = () => cerrarConfirmacionDocente({ confirmado: false, valor: '' });
              cancelar.onclick = cancelarAccion;
              modal.onclick = evento => {
                  if (evento.target === modal) cancelarAccion();
              };
              aceptar.onclick = () => {
                  const valor = entrada.value.trim();
                  if (configuracion.campoRequerido && !valor) {
                      error.textContent = 'Completá el campo requerido para continuar.';
                      error.style.display = 'block';
                      entrada.focus();
                      return;
                  }
                  if (configuracion.valorEsperado && valor !== configuracion.valorEsperado) {
                      error.textContent = `Escribí exactamente ${configuracion.valorEsperado} para confirmar.`;
                      error.style.display = 'block';
                      entrada.focus();
                      return;
                  }
                  if (configuracion.requiereCheck && !check.checked) {
                      error.textContent = 'Marcá la casilla de confirmación para continuar.';
                      error.style.display = 'block';
                      check.focus();
                      return;
                  }
                  cerrarConfirmacionDocente({ confirmado: true, valor });
              };
              modal.style.zIndex = '12000';
              modal.classList.add('active');
              setTimeout(() => {
                  if (usaCampo) entrada.focus();
                  else caja.focus({ preventScroll: true });
              }, 0);
          });
      }

      function cerrarAccionesEstudiante() {
          const modal = document.getElementById('accionesEstudianteModal');
          modal?.classList.remove('active');
          modal?.style.removeProperty('display');
      }

      function clasificarAccionEstudiante(boton) {
          const texto = String(boton?.textContent || '').toLowerCase();
          if (/detalle|descuento/.test(texto)) return 'evaluacion';
          if (/historial|pestaña|pesta/.test(texto)) return 'historiales';
          if (/jitsi|llamada|video/.test(texto)) return 'comunicacion';
          if (/eliminar|borrar|reiniciar contador/.test(texto)) return 'criticas';
          return 'control';
      }

      function filtrarOrdenarAccionesEstudiante() {
          const contenedor = document.getElementById('accionesEstudianteContenido');
          if (!contenedor) return;
          const texto = String(document.getElementById('filtroAccionesEstudiante')?.value || '').trim().toLowerCase();
          const categoria = String(document.getElementById('categoriaAccionesEstudiante')?.value || '');
          const orden = String(document.getElementById('ordenAccionesEstudiante')?.value || 'recomendado');
          const botones = [...contenedor.querySelectorAll(':scope > button')];
          let visibles = 0;
          botones.forEach((boton, indice) => {
              const etiqueta = String(boton.textContent || '').replace(/\s+/g, ' ').trim();
              const clase = clasificarAccionEstudiante(boton);
              boton.dataset.accionCategoria = clase;
              boton.dataset.accionOrden = String(indice);
              const mostrar = (!texto || etiqueta.toLowerCase().includes(texto)) && (!categoria || categoria === clase);
              boton.hidden = !mostrar;
              if (mostrar) visibles++;
          });
          if (orden !== 'recomendado') {
              botones.sort((a, b) => {
                  const etiquetaA = String(a.textContent || '').trim();
                  const etiquetaB = String(b.textContent || '').trim();
                  return orden === 'za'
                      ? etiquetaB.localeCompare(etiquetaA, 'es')
                      : etiquetaA.localeCompare(etiquetaB, 'es');
              }).forEach(boton => contenedor.appendChild(boton));
          }
          const resultado = document.getElementById('accionesEstudianteResultados');
          if (resultado) resultado.textContent = visibles
              ? `${visibles} acción${visibles === 1 ? '' : 'es'} disponible${visibles === 1 ? '' : 's'}`
              : 'No hay acciones que coincidan con los filtros.';
      }

      let indiceEditorDescuentoEstudiante = null;

      function cerrarEditorDescuentoEstudiante() {
          document.getElementById('editarDescuentoEstudianteModal')?.classList.remove('active');
          indiceEditorDescuentoEstudiante = null;
      }

      function abrirEditorDescuentoEstudiante(indice) {
          const d = estudiantesProfesor[indice];
          const modal = document.getElementById('editarDescuentoEstudianteModal');
          if (!d || !modal) return;
          const nombre = d.estudiante?.nombre || d.nombreGoogle || d.email || 'Estudiante';
          const revision = d.revisionSalidas || {};
          const nota = calcularNotaProvisionalEstudiante(d);
          indiceEditorDescuentoEstudiante = indice;
          document.getElementById('editarDescuentoSubtitulo').textContent = `${nombre} · ${d.email || 'Sin email'}`;
          document.getElementById('editarDescuentoNotaActual').textContent = nota === '—' ? 'Pendiente' : `${nota}/10 calculada`;
          document.getElementById('editarDescuentoPuntos').value = Number(revision.penalizacion || 0).toFixed(1);
          document.getElementById('editarDescuentoMotivo').value = revision.motivo || '';
          const error = document.getElementById('editarDescuentoError');
          error.textContent = '';
          error.style.display = 'none';
          modal.classList.add('active');
          setTimeout(() => document.getElementById('editarDescuentoPuntos')?.focus(), 0);
      }

      async function guardarEditorDescuentoEstudiante() {
          const indice = indiceEditorDescuentoEstudiante;
          const d = Number.isInteger(indice) ? estudiantesProfesor[indice] : null;
          if (!d?.uid) return;
          const autorizado = await window.autorizarDocenteFirebase?.();
          if (!autorizado) {
              const errorAutorizacion = document.getElementById('editarDescuentoError');
              errorAutorizacion.textContent = 'Solo una cuenta docente autorizada puede editar el descuento.';
              errorAutorizacion.style.display = 'block';
              return;
          }
          const puntos = Math.max(0, Math.min(10, Number(document.getElementById('editarDescuentoPuntos')?.value) || 0));
          const motivo = String(document.getElementById('editarDescuentoMotivo')?.value || '').trim();
          const error = document.getElementById('editarDescuentoError');
          if (puntos > 0 && !motivo) {
              error.textContent = 'Escribí un motivo para aplicar un descuento.';
              error.style.display = 'block';
              document.getElementById('editarDescuentoMotivo')?.focus();
              return;
          }
          const boton = document.getElementById('btnGuardarDescuentoEstudiante');
          const original = boton?.innerHTML || '';
          if (boton) {
              boton.disabled = true;
              boton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Guardando...';
          }
          const revisionAnterior = d.revisionSalidas || {};
          const revision = {
              estado: puntos > 0 ? (revisionAnterior.estado === 'pendiente' ? 'penalizacion' : (revisionAnterior.estado || 'penalizacion')) : (revisionAnterior.estado || 'sin_observaciones'),
              penalizacion: puntos,
              motivo,
              notaConfirmada: false,
              notaFinalDocente: null,
              notaConfirmadaValor: null,
              notaCalculadaAlConfirmar: null,
              notaModificadaManualmente: false
          };
          const ok = await window.guardarRevisionDocenteFirebase?.(d.uid, revision);
          if (boton) {
              boton.disabled = false;
              boton.innerHTML = original;
          }
          if (!ok) {
              error.textContent = 'No se pudo guardar el descuento. Verificá los permisos de Firebase.';
              error.style.display = 'block';
              return;
          }
          d.revisionSalidas = {
              ...revision,
              revisadoPor: window.firebaseTeacherUser?.email || window.firebaseCurrentUser?.email || ''
          };
          cerrarEditorDescuentoEstudiante();
          renderPanelProfesor();
      }

      if (!window.__accionesEstudianteDelegadas) {
          window.__accionesEstudianteDelegadas = true;
          document.addEventListener('click', event => {
              const boton = event.target.closest?.('.btn-abrir-acciones-estudiante');
              if (!boton || boton.dataset.listenerBound === 'true') return;
              const indice = Number(boton.dataset.estudianteIndex);
              if (Number.isInteger(indice)) {
                  event.preventDefault();
                  event.stopPropagation();
                  abrirAccionesEstudiante(indice);
              }
          });
      }

      function abrirAccionesEstudiante(indice) {
          const d = estudiantesProfesor[indice];
          if (!d) {
              alert('No se pudo identificar al estudiante seleccionado.');
              return;
          }
          const nombre = d.estudiante?.nombre || d.nombreGoogle || d.email || 'Estudiante';
          const bloqueado = d.pantallaBloqueada === true;
          const pausado = d.controlCronometroIndividual?.pausado === true;
          const jitsiDisponible = d.jitsiDisponible === true || d.jitsiSala?.disponible === true || d.jitsiGrupal?.disponible === true;
          const jitsiTieneSala = Boolean(d.jitsiSala?.id || d.jitsiGrupal?.id);
          const llamadaJitsiId = String(d.jitsiGrupal?.id || d.jitsiSala?.id || '');
          const estadoJitsi = llamadaJitsiId ? (window.estadoParticipacionJitsi?.(d, llamadaJitsiId) || 'invitado') : '';
          const etiquetasJitsi = {
            invitado: 'Invitado',
            notificado: 'Notificado',
            unido: 'Pulsó Unirse ahora',
            rechazado: 'Rechazó',
            salio: 'Salió o cerró la pestaña',
            finalizada: 'Finalizada'
          };
          const contenido = document.getElementById('accionesEstudianteContenido');
          const subtitulo = document.getElementById('accionesEstudianteSubtitulo');
          const estadoPantalla = document.getElementById('accionesEstudianteEstado');
          const modal = document.getElementById('accionesEstudianteModal');
          if (!contenido || !subtitulo || !estadoPantalla || !modal) {
              alert('No se pudo cargar la ventana de acciones. Actualizá la página e intentá nuevamente.');
              return;
          }
          subtitulo.textContent = `${nombre} · ${d.email || 'Sin email'}`;
          estadoPantalla.className = bloqueado ? 'is-locked' : 'is-unlocked';
          estadoPantalla.innerHTML = bloqueado
              ? '<i class="fa-solid fa-lock"></i> Pantalla bloqueada'
              : '<i class="fa-solid fa-circle-check"></i> Pantalla habilitada';
          contenido.innerHTML = `
            ${llamadaJitsiId ? `<div class="student-action-jitsi-state"><i class="fa-solid fa-signal"></i><span>Estado Jitsi</span><strong>${escapeHtml(etiquetasJitsi[estadoJitsi] || 'Invitado')}</strong></div>` : ''}
            <button class="btn btn-primary" onclick="cerrarAccionesEstudiante();abrirDetalleEstudianteProfesor(${indice})"><i class="fa-solid fa-eye"></i><span>Ver detalle completo</span></button>
            <button class="btn btn-success" onclick="cerrarAccionesEstudiante();(window.abrirProgramacionDocente ? window.abrirProgramacionDocente(${indice}) : alert('La herramienta de programación todavía está cargando. Actualizá la página e intentá nuevamente.'))"><i class="fa-solid fa-clipboard-list"></i><span>Editar programación y comentarios</span></button>
            <button class="btn btn-secondary" onclick="cerrarAccionesEstudiante();abrirHistorialDesbloqueos(${indice})"><i class="fa-solid fa-clock-rotate-left"></i><span>Historial de desbloqueos</span></button>
            <button class="btn btn-secondary" onclick="cerrarAccionesEstudiante();abrirHistorialDescuentos(${indice})"><i class="fa-solid fa-file-invoice-dollar"></i><span>Historial de descuentos</span></button>
            <button class="btn btn-secondary" onclick="cerrarAccionesEstudiante();abrirHistorialPestanas(${indice})"><i class="fa-solid fa-window-restore"></i><span>Historial de pestañas</span></button>
            <button class="btn btn-primary" onclick="cerrarAccionesEstudiante();abrirMensajeriaDocente('${escapeHtml(d.uid)}')"><i class="fa-solid fa-message"></i><span>Enviar mensaje en pantalla</span></button>
            <button class="btn btn-success" onclick="cerrarAccionesEstudiante();abrirJitsiDocente(${indice})"><i class="fa-solid fa-video"></i><span>${jitsiDisponible ? 'Volver a la llamada Jitsi' : 'Iniciar llamada Jitsi'}</span></button>
            ${jitsiDisponible ? `<button class="btn btn-danger" onclick="cerrarAccionesEstudiante();cerrarSalaJitsiProfesor(${indice})"><i class="fa-solid fa-video-slash"></i><span>Cancelar invitación / finalizar</span></button>` : ''}
            ${jitsiTieneSala && !jitsiDisponible ? `<button class="btn btn-danger" onclick="cerrarAccionesEstudiante();cerrarSalaJitsiProfesor(${indice})"><i class="fa-solid fa-broom"></i><span>Limpiar llamada anterior</span></button>` : ''}
            <button class="btn btn-warning" onclick="cerrarAccionesEstudiante();abrirEditorDescuentoEstudiante(${indice})"><i class="fa-solid fa-circle-minus"></i><span>Editar descuento y motivo</span></button>
            <button class="btn btn-danger" ${bloqueado ? 'disabled title="La pantalla ya está bloqueada"' : ''} onclick="cerrarAccionesEstudiante();bloquearPantallaEstudianteProfesor(${indice})"><i class="fa-solid fa-lock"></i><span>Bloquear pantalla</span></button>
            <button class="btn student-action-highlight" ${bloqueado ? '' : 'disabled title="La pantalla no está bloqueada"'} onclick="cerrarAccionesEstudiante();desbloquearPantallaEstudianteProfesor(${indice})"><i class="fa-solid fa-unlock-keyhole"></i><span>Desbloquear pantalla</span></button>
            <button class="btn ${pausado ? 'btn-success' : 'btn-warning'}" onclick="cerrarAccionesEstudiante();controlarCronometroEstudianteProfesor(${indice}, '${pausado ? 'reanudar' : 'pausar'}')"><i class="fa-solid ${pausado ? 'fa-play' : 'fa-pause'}"></i><span>${pausado ? 'Reanudar' : 'Pausar'} cronómetro</span></button>
            <button class="btn btn-secondary" onclick="cerrarAccionesEstudiante();controlarCronometroEstudianteProfesor(${indice}, 'reiniciar')"><i class="fa-solid fa-clock-rotate-left"></i><span>Reiniciar cronómetro a 40:00</span></button>
            <button class="btn btn-warning" onclick="cerrarAccionesEstudiante();reiniciarSalidasEstudianteProfesor(${indice})"><i class="fa-solid fa-rotate-left"></i><span>Reiniciar contador de pestañas</span></button>
            <button class="btn btn-secondary" onclick="cerrarAccionesEstudiante();borrarConsultasIAAlumnoProfesor(${indice}, 'tabla')"><i class="fa-solid fa-comments"></i><span>Borrar consultas IA</span></button>
            <button class="btn student-action-danger" onclick="cerrarAccionesEstudiante();eliminarEstudianteProfesor(estudiantesProfesor[${indice}])"><i class="fa-solid fa-trash-can"></i><span>Eliminar estudiante</span></button>`;
          const filtroAcciones = document.getElementById('filtroAccionesEstudiante');
          const categoriaAcciones = document.getElementById('categoriaAccionesEstudiante');
          const ordenAcciones = document.getElementById('ordenAccionesEstudiante');
          if (filtroAcciones) filtroAcciones.value = '';
          if (categoriaAcciones) categoriaAcciones.value = '';
          if (ordenAcciones) ordenAcciones.value = 'recomendado';
          filtrarOrdenarAccionesEstudiante();
          modal.style.removeProperty('display');
          modal.classList.add('active');
          modal.querySelector('.student-actions-modal-box')?.focus({ preventScroll: true });
      }
      function renderPanelProfesor() {
          renderBandejaSolicitudesPendientes();
          detectarDesconexionesProfesor();
          window.setTimeout(() => window.actualizarResumenJitsiProfesor?.(), 0);
          window.setTimeout(() => renderInformeGrupalSocratico(), 0);
          const q = (document.getElementById('filtroProfesor').value || '').toLowerCase().trim();
          const emailFiltro = (document.getElementById('filtroEmailProfesor')?.value || '').toLowerCase().trim();
          const curso = document.getElementById('filtroCursoProfesor').value;
          const division = document.getElementById('filtroDivisionProfesor')?.value || '';
          const turno = document.getElementById('filtroTurnoProfesor').value;
          const estadoFiltro = document.getElementById('filtroEstadoProfesor')?.value || '';
          actualizarBotonSoloEnLineaProfesor();
          const bloqueoFiltro = document.getElementById('filtroBloqueoProfesor')?.value || '';
          const progresoFiltro = document.getElementById('filtroProgresoProfesor')?.value || '';
          const salidasFiltro = document.getElementById('filtroSalidasProfesor')?.value || '';
          const notaFiltro = document.getElementById('filtroNotaProfesor')?.value || '';
          const descuentoFiltro = document.getElementById('filtroDescuentoProfesor')?.value || '';
          const actualizacionFiltro = document.getElementById('filtroActualizacionProfesor')?.value || '';
          const orden = document.getElementById('ordenProfesor')?.value || 'actualizacion-desc';
          const rows = estudiantesProfesor.filter(d => {
              const e=d.estudiante||{};
              const nombre = String(e.nombre||d.nombreGoogle||'').toLowerCase();
              const email = String(d.email||'').toLowerCase();
              const progreso = calcularProgresoEstudiante(d);
              const notaTexto = calcularNotaDefinitivaEstudiante(d);
              const nota = notaTexto === '—' ? NaN : Number(notaTexto);
              const descuento = Math.max(0, Math.min(10, Number(d.revisionSalidas?.penalizacion) || 0));
              const alerta = obtenerAlertaConsultasIA(d);
              const actualizado = obtenerMarcaConexionProfesor(d);
              const conectado = actualizado > 0 && Date.now() - actualizado < LIMITE_CONEXION_PROFESOR_MS;
              const trabajando = conectado && (d.__controlEstudiante?.escribiendo === true || progreso < 100);
              const finalizado = progreso >= 100;
              const cuentaInactiva = d.estadoCuenta === 'inactivo';
              const cuentaPendiente = d.estadoCuenta === 'pendiente';
              const cuentaRechazada = d.estadoCuenta === 'rechazado';
              const cronometroPausado = d.controlCronometroIndividual?.pausado === true
                  || d.controlCronometros?.pausado === true;
              const pantallaBloqueada = d.pantallaBloqueada === true;
              const salidas = Number(d.salidasPestana ?? d.salidasPestana ?? 0);
              const tieneCambios = salidas > 0;
              const cumpleProgreso = !progresoFiltro || (
                  progresoFiltro === '0' ? progreso === 0 :
                  progresoFiltro === '100' ? progreso === 100 :
                  (() => {
                      const [min, max] = progresoFiltro.split('-').map(Number);
                      return progreso >= min && progreso <= max;
                  })()
              );
              const cumpleSalidas = !salidasFiltro || (
                  salidasFiltro === '0' ? salidas === 0 : salidas >= Number(salidasFiltro)
              );
              const cumpleNota = !notaFiltro
                  || (notaFiltro === 'sin-nota' && !Number.isFinite(nota))
                  || (notaFiltro !== 'sin-nota' && (() => {
                      if (!Number.isFinite(nota)) return false;
                      const [min, max] = notaFiltro.split('-').map(Number);
                      return nota >= min && nota <= max;
                  })());
              const cumpleDescuento = !descuentoFiltro
                  || (descuentoFiltro === 'con-descuento' && descuento > 0)
                  || (descuentoFiltro === 'sin-descuento' && descuento === 0)
                  || (['1','2','3'].includes(descuentoFiltro) && descuento >= Number(descuentoFiltro));
              const antiguedad = actualizado ? Date.now() - actualizado : Infinity;
              const inicioHoy = new Date();
              inicioHoy.setHours(0,0,0,0);
              const cumpleActualizacion = !actualizacionFiltro
                  || (actualizacionFiltro === 'sin-fecha' && !actualizado)
                  || (actualizacionFiltro === '5m' && antiguedad <= 5 * 60 * 1000)
                  || (actualizacionFiltro === '15m' && antiguedad <= 15 * 60 * 1000)
                  || (actualizacionFiltro === '1h' && antiguedad <= 60 * 60 * 1000)
                  || (actualizacionFiltro === 'hoy' && actualizado >= inicioHoy.getTime())
                  || (actualizacionFiltro === '7d' && antiguedad <= 7 * 24 * 60 * 60 * 1000);
              const cumpleEstado = !estadoFiltro
                || (estadoFiltro === 'activa' && !cuentaInactiva && !cuentaPendiente && !cuentaRechazada)
                || (estadoFiltro === 'solicitudes' && cuentaPendiente)
                || (estadoFiltro === 'rechazadas' && cuentaRechazada)
                || (estadoFiltro === 'inactiva' && cuentaInactiva)
                || (estadoFiltro === 'conectados' && conectado)
                || (estadoFiltro === 'desconectados' && !conectado)
                || (estadoFiltro === 'trabajando' && trabajando)
                || (estadoFiltro === 'pausados' && cronometroPausado)
                || (estadoFiltro === 'finalizados' && finalizado)
                || (estadoFiltro === 'pendientes' && !finalizado)
                || (estadoFiltro === 'alertas' && alerta.activa)
                || (estadoFiltro === 'cambios' && tieneCambios);
              const cumpleBloqueo = !bloqueoFiltro
                || (bloqueoFiltro === 'bloqueados' && pantallaBloqueada)
                || (bloqueoFiltro === 'activos' && !pantallaBloqueada);
              d.__panelMeta = { progreso, nota, alerta: alerta.activa, actualizado, conectado, cuentaInactiva, cuentaPendiente, cuentaRechazada, cronometroPausado, tieneCambios, salidas };
              return (!cuentaPendiente || estadoFiltro === 'solicitudes')
                  && (!q || nombre.includes(q) || email.includes(q))
                  && (!emailFiltro || email.includes(emailFiltro))
                  && (!curso || e.curso===curso)
                  && (!division || e.division===division)
                  && (!turno || e.turno===turno)
              && cumpleEstado && cumpleBloqueo && cumpleProgreso && cumpleSalidas && cumpleNota && cumpleDescuento && cumpleActualizacion;
          }).sort((a,b) => {
              const am=a.__panelMeta||{}, bm=b.__panelMeta||{};
              const texto = (valorA, valorB, direccion='asc') => {
                  const resultado = String(valorA||'').localeCompare(String(valorB||''), 'es', { numeric:true, sensitivity:'base' });
                  return direccion === 'desc' ? -resultado : resultado;
              };
              const numero = (valorA, valorB, direccion='asc') => {
                  const aNumero = Number.isFinite(Number(valorA)) ? Number(valorA) : (direccion === 'asc' ? Infinity : -Infinity);
                  const bNumero = Number.isFinite(Number(valorB)) ? Number(valorB) : (direccion === 'asc' ? Infinity : -Infinity);
                  return direccion === 'desc' ? bNumero-aNumero : aNumero-bNumero;
              };
              const [campo, direccion='asc'] = orden.split('-');
              if (campo === 'nombre') return texto(a.estudiante?.nombre||a.nombreGoogle, b.estudiante?.nombre||b.nombreGoogle, direccion);
              if (campo === 'email') return texto(a.email, b.email, direccion);
              if (campo === 'curso') return texto(a.estudiante?.curso, b.estudiante?.curso, direccion);
              if (campo === 'division') return texto(a.estudiante?.division, b.estudiante?.division, direccion);
              if (campo === 'turno') return texto(a.estudiante?.turno, b.estudiante?.turno, direccion);
              if (campo === 'estado') return numero(Number(am.cuentaInactiva), Number(bm.cuentaInactiva), direccion);
              if (campo === 'progreso') return numero(am.progreso, bm.progreso, direccion);
              if (campo === 'nota') return numero(am.nota, bm.nota, direccion);
              if (campo === 'salidas') return numero(am.salidas, bm.salidas, direccion);
              if (campo === 'alertas') return Number(bm.alerta)-Number(am.alerta) || (bm.actualizado||0)-(am.actualizado||0);
              return numero(am.actualizado, bm.actualizado, direccion);
          });
          const cursos=[...new Set(estudiantesProfesor.map(d=>d.estudiante?.curso).filter(Boolean))].sort();
          const sel=document.getElementById('filtroCursoProfesor');
          const old=sel.value; sel.innerHTML='<option value="">Todos los cursos</option>'+cursos.map(c=>`<option>${c}</option>`).join(''); if(cursos.includes(old)) sel.value=old;
          const divisiones=[...new Set(estudiantesProfesor.map(d=>d.estudiante?.division).filter(Boolean))].sort();
          const selDivision=document.getElementById('filtroDivisionProfesor');
          if(selDivision){const anterior=selDivision.value;selDivision.innerHTML='<option value="">Todas las divisiones</option>'+divisiones.map(d=>`<option>${escapeHtml(d)}</option>`).join('');if(divisiones.includes(anterior))selDivision.value=anterior;}
          const total=rows.length, completos=rows.filter(d=>calcularProgresoEstudiante(d)>=100).length;
          const conectados=rows.filter(d=>d.__panelMeta?.conectado).length;
          const trabajando=rows.filter(d=>d.__panelMeta?.conectado && d.__panelMeta?.progreso<100).length;
          const solicitudesPendientes=rows.filter(d=>d.estadoCuenta==='pendiente').length;
          const conAlertas=rows.filter(d=>d.__panelMeta?.alerta).length;
          const bloqueados=rows.filter(d=>d.pantallaBloqueada===true).length;
          const desbloqueosTotales=rows.reduce((total,d)=>total+Number(d.cantidadDesbloqueos||0),0);
          const notas=rows.map(calcularNotaDefinitivaEstudiante).filter(n=>n!=='—').map(Number);
          const promedio=notas.length?(notas.reduce((a,b)=>a+b,0)/notas.length).toFixed(1):'—';
          document.getElementById('resumenProfesor').innerHTML=[
              ['Estudiantes',total,'','fa-users'],
              ['Solicitudes pendientes',solicitudesPendientes,'','fa-user-clock'],
              ['Bloqueados',bloqueados,'blocked','fa-lock'],
              ['Desbloqueos registrados',desbloqueosTotales,'','fa-unlock-keyhole'],
              ['Conectados',conectados,'','fa-wifi'],
              ['Trabajando',trabajando,'','fa-laptop-code'],
              ['Con alertas',conAlertas,'','fa-triangle-exclamation'],
              ['Completaron',completos,'','fa-circle-check'],
              ['Promedio de notas confirmadas',promedio,'','fa-chart-line']
          ].map(x=>`<div class="teacher-summary-card ${x[2] === 'blocked' && Number(x[1]) > 0 ? 'teacher-blocked-summary' : ''}" style="border:1px solid rgba(148,163,184,.2);"><span class="teacher-summary-icon"><i class="fa-solid ${x[3]}"></i></span><small>${x[0]}</small><strong style="display:block;font-size:1.4rem;margin-top:.2rem;">${x[1]}</strong></div>`).join('');
          renderResumenConsultasIAGeneral(rows);
          document.getElementById('tablaProfesorBody').innerHTML=rows.map(d=>{
              const e=d.estudiante||{}, p=calcularProgresoEstudiante(d), n=calcularNotaDefinitivaEstudiante(d);
              const versionCodigo = String(d.versionCodigo || VERSION_CODIGO_SUBIDO);
              const resumenAyudasFila = resumirAyudasComprensionEstudiante(d);
              const ayudasFilaHtml = (resumenAyudasFila.consultasPalabras || resumenAyudasFila.pasosVistos || resumenAyudasFila.verificacionesIntentadas)
                  ? `<div style="margin-top:.35rem;padding:.3rem .45rem;border-radius:5px;background:rgba(56,189,248,.11);color:#bae6fd;font-size:.7rem;line-height:1.35" title="Registro de ayudas de comprensión">
                      <i class="fa-solid fa-graduation-cap"></i>
                      Ayudas: ${resumenAyudasFila.consultasPalabras + resumenAyudasFila.pasosVistos + resumenAyudasFila.materialApoyoVistas}
                      · Comprensión: ${resumenAyudasFila.verificacionesCorrectas}/${resumenAyudasFila.verificacionesIntentadas}
                    </div>`
                  : '';
              const fecha=d.actualizadoEn?.toDate ? d.actualizadoEn.toDate().toLocaleString() : '—';
              const indice=estudiantesProfesor.indexOf(d);
              const inactiva = d.estadoCuenta === 'inactivo';
              const cronometroPausado = d.controlCronometroIndividual?.pausado === true;
              const alertaIA = obtenerAlertaConsultasIA(d);
              const alertaHtml = alertaIA.activa
                  ? `<div title="${escapeHtml(alertaIA.detalle)}" style="margin-top:.35rem;padding:.3rem .45rem;border-radius:5px;background:${alertaIA.nivel === 'alta' ? 'rgba(239,68,68,.18)' : 'rgba(245,158,11,.16)'};color:${alertaIA.nivel === 'alta' ? '#fecaca' : '#fde68a'};font-size:.7rem;line-height:1.3">
                      <i class="fa-solid fa-triangle-exclamation"></i> ${escapeHtml(alertaIA.texto)}<br>${escapeHtml(alertaIA.detalle)}
                    </div>`
                  : '';
              const bloqueado = d.pantallaBloqueada === true;
              const estadoVisual = bloqueado ? 'Bloqueado' : (inactiva ? 'Inactiva' : 'Activa');
              const colorEstado = bloqueado ? '#fca5a5' : (inactiva ? '#fca5a5' : '#6ee7b7');
              const estadoHtml = bloqueado
                  ? `<span class="teacher-lock-badge" title="Abrí Acciones para administrar el bloqueo"><i class="fa-solid fa-lock"></i> BLOQUEADO</span>`
                  : `<span style="color:${colorEstado};font-weight:700"><i class="fa-solid fa-circle-check"></i> ${estadoVisual}</span>`;
              const progresoClase = p >= 100 ? 'is-complete' : (p < 35 ? 'is-low' : '');
              const progresoIcono = p >= 100 ? 'fa-circle-check' : 'fa-chart-line';
              const progresoHtml = `<div class="teacher-progress-indicator ${progresoClase}" title="Progreso completado: ${p}%"><div class="teacher-progress-value"><span>${p}%</span><i class="fa-solid ${progresoIcono}"></i></div><div class="teacher-progress-track" aria-hidden="true"><span class="teacher-progress-fill" style="width:${Math.max(0, Math.min(100, p))}%"></span></div></div>`;
              const notaNumero = n === '—' ? NaN : Number(n);
              const notaClase = !Number.isFinite(notaNumero) ? '' : (notaNumero >= 7 ? 'grade-high' : (notaNumero >= 6 ? 'grade-medium' : 'grade-low'));
              const notaIcono = !Number.isFinite(notaNumero) ? 'fa-minus' : (notaNumero >= 7 ? 'fa-star' : (notaNumero >= 6 ? 'fa-circle-half-stroke' : 'fa-triangle-exclamation'));
              const notaCalculada = calcularNotaProvisionalEstudiante(d);
              const notaHtml = Number.isFinite(notaNumero)
                  ? `<span class="teacher-grade-badge ${notaClase}" title="Nota definitiva confirmada por el docente: ${n}"><i class="fa-solid ${notaIcono}"></i> ${n}</span>`
                  : `<span class="teacher-grade-badge" title="${notaCalculada === '—' ? 'Sin nota calculada' : `Nota calculada ${notaCalculada}/10, pendiente de confirmación docente`}"><i class="fa-solid fa-clock"></i> ${notaCalculada === '—' ? 'Pendiente' : `${notaCalculada} sin confirmar`}</span>`;
              const descuentoPuntos = Math.max(0, Math.min(10, Number(d.revisionSalidas?.penalizacion) || 0));
              const descuentoMotivo = String(d.revisionSalidas?.motivo || '').trim();
              const descuentoTitulo = descuentoPuntos > 0
                  ? `Descuento aplicado: ${descuentoPuntos.toFixed(1)} punto(s)${descuentoMotivo ? `. Motivo: ${descuentoMotivo}` : ''}`
                  : 'Sin descuento de puntos';
              const descuentoHtml = `<span class="teacher-discount-badge ${descuentoPuntos > 0 ? 'has-discount' : ''}" title="${escapeHtml(descuentoTitulo)}"><i class="fa-solid ${descuentoPuntos > 0 ? 'fa-circle-minus' : 'fa-circle-check'}"></i> ${descuentoPuntos > 0 ? `-${descuentoPuntos.toFixed(1)}` : '0.0'}</span>`;
              const cantidadSalidas = Number(d.salidasPestana ?? 0);
              const salidasClase = cantidadSalidas >= LIMITE_SALIDAS_PARA_BLOQUEO ? 'tabs-danger' : (cantidadSalidas > 0 ? 'tabs-warning' : '');
              const salidasIcono = cantidadSalidas >= LIMITE_SALIDAS_PARA_BLOQUEO ? 'fa-triangle-exclamation' : (cantidadSalidas > 0 ? 'fa-arrow-up-right-from-square' : 'fa-circle-check');
              const salidasTitulo = cantidadSalidas >= LIMITE_SALIDAS_PARA_BLOQUEO
                  ? `${cantidadSalidas} cambios: alcanzó el límite de bloqueo`
                  : (cantidadSalidas > 0 ? `${cantidadSalidas} cambio(s) de pestaña` : 'Sin cambios de pestaña');
              const salidasHtml = `<span class="teacher-tab-badge ${salidasClase}" title="${salidasTitulo}"><i class="fa-solid ${salidasIcono}"></i> ${cantidadSalidas}</span>`;
              const conectadoFila = d.__panelMeta?.conectado === true;
              const escribiendoFila = conectadoFila && d.__controlEstudiante?.escribiendo === true;
              const claseAcciones = conectadoFila ? 'btn-success teacher-actions-online' : 'btn-secondary';
              const tituloAcciones = escribiendoFila ? 'Estudiante programando ahora. Abrir acciones' : (conectadoFila ? 'Estudiante en línea. Abrir acciones' : 'Estudiante sin actividad reciente. Abrir acciones');
              const estadoConexionAcciones = conectadoFila
                  ? `<span class="teacher-actions-online-label"><i class="fa-solid fa-circle"></i> ${escribiendoFila ? 'Programando' : 'En línea'}</span>`
                  : '';
          return `<tr class="${bloqueado ? 'teacher-blocked-row' : ''}" style="${!bloqueado && alertaIA.activa ? `background:${alertaIA.nivel === 'alta' ? 'rgba(239,68,68,.045)' : 'rgba(245,158,11,.035)'}` : ''}"><td class="acciones-principales-cell"><button type="button" class="btn ${claseAcciones} btn-abrir-acciones-estudiante" data-estudiante-index="${indice}" data-listener-bound="true" onclick="abrirAccionesEstudiante(${indice})" style="width:100%;justify-content:flex-start;text-align:left;padding:.55rem .7rem" title="${tituloAcciones}"><i class="fa-solid fa-sliders"></i><span>Acciones</span>${estadoConexionAcciones}</button></td><td class="descuento-puntos-cell">${descuentoHtml}</td><td>${escapeHtml(e.nombre||d.nombreGoogle||'Sin nombre')}<div class="code-version-badge" style="margin-top:.4rem;font-size:.68rem;padding:.25rem .45rem"><i class="fa-solid fa-code-branch"></i> Código v${escapeHtml(versionCodigo)}</div>${alertaHtml}${ayudasFilaHtml}</td><td>${escapeHtml(d.email||'')}</td><td>${escapeHtml(e.curso||'')}</td><td>${escapeHtml(e.division||'')}</td><td>${escapeHtml(e.turno||'')}</td><td>${estadoHtml}</td><td>${progresoHtml}</td><td>${notaHtml}</td><td>${salidasHtml}</td><td><strong>${Number(d.cantidadDesbloqueos || 0)}</strong></td></tr>`;
              }).join('') || '<tr><td colspan="12" style="padding:1rem;text-align:center;">No hay estudiantes que coincidan con los filtros.</td></tr>';
          [...document.querySelectorAll('#tablaProfesorBody tr')].forEach((fila, posicion) => {
              const estudiante = rows[posicion];
              if (!estudiante) return;
              const etiquetasColumnas = ['Acciones','Descuento de puntos','Estudiante','Email','Curso','División','Turno','Estado','Progreso','Nota definitiva','Cambios de pestaña','Desbloqueos'];
              [...fila.children].forEach((celda, indiceCelda) => {
                  if (etiquetasColumnas[indiceCelda]) celda.setAttribute('data-label', etiquetasColumnas[indiceCelda]);
              });
              const estado = estudiante.estadoCuenta || 'activo';
              const celdaEstado = fila.children[7];
              if (celdaEstado && estudiante.pantallaBloqueada !== true) {
                  const configuracion = {
                      activo: ['Activa', '#6ee7b7'],
                      pendiente: ['Pendiente', '#fde68a'],
                      rechazado: ['Rechazada', '#fca5a5'],
                      inactivo: ['Inactiva', '#fca5a5']
                  }[estado] || ['Activa', '#6ee7b7'];
                  celdaEstado.textContent = configuracion[0];
                  celdaEstado.style.color = configuracion[1];
                  celdaEstado.style.fontWeight = '700';
              }
              if (estado === 'pendiente') {
                  fila.style.background = 'rgba(245,158,11,.08)';
                  const acciones = fila.querySelector('td:last-child > div');
                  const indiceReal = estudiantesProfesor.indexOf(estudiante);
                  if (acciones) acciones.insertAdjacentHTML('afterbegin', `
                      <button class="btn btn-success" style="padding:.4rem .65rem" onclick="cambiarEstadoCuentaEstudiante(${indiceReal}, 'activo')"><i class="fa-solid fa-user-check"></i> Aceptar</button>
                      <button class="btn btn-danger" style="padding:.4rem .65rem" onclick="cambiarEstadoCuentaEstudiante(${indiceReal}, 'rechazado')"><i class="fa-solid fa-user-xmark"></i> Rechazar</button>
                  `);
              }
          });
          document.querySelectorAll('#tablaProfesorBody td:last-child > div').forEach(contenedor => {
              contenedor.classList.add('teacher-action-buttons');
              if (!contenedor.querySelector('.teacher-actions-label')) {
                  const filaOrigen = contenedor.closest('tr');
                  const nombreVisible = filaOrigen?.querySelector('td:first-child')?.textContent?.trim().split('Ayudas:')[0].trim() || 'estudiante';
                  const etiqueta = document.createElement('div');
                  etiqueta.className = 'teacher-actions-label';
                  etiqueta.innerHTML = `<i class="fa-solid fa-sliders"></i> Acciones: ${escapeHtml(nombreVisible)}`;
                  contenedor.prepend(etiqueta);
              }
              contenedor.querySelectorAll('.btn').forEach(boton => {
                  if (boton.title) return;
                  const texto = boton.textContent.trim().toLowerCase();
                  if (texto.includes('ver todo')) boton.title = 'Ver progreso y detalle completo del estudiante';
                  else if (texto.includes('pausar') || texto.includes('reanudar')) boton.title = 'Pausar o reanudar el cronómetro del estudiante';
              });
              if (!contenedor.querySelector('.btn-eliminar-estudiante')) {
                  const botonEliminar = document.createElement('button');
                  botonEliminar.className = 'btn btn-danger btn-eliminar-estudiante';
                  botonEliminar.type = 'button';
                  botonEliminar.title = 'Eliminar al estudiante y todo su historial';
                  botonEliminar.setAttribute('aria-label', 'Eliminar estudiante y su historial');
                  botonEliminar.innerHTML = '<i class="fa-solid fa-trash-can" aria-hidden="true"></i> Eliminar estudiante';
                  const filaActual = contenedor.closest('tr');
                  const registro = filaActual ? rows.find(r => String(r.email || '') === String(filaActual.querySelector('td:nth-child(3)')?.textContent || '')) : null;
                  botonEliminar.onclick = () => eliminarEstudianteProfesor(registro);
                  contenedor.appendChild(botonEliminar);
              }
              if (!contenedor.querySelector('.btn-historial-desbloqueos')) {
                  const botonHistorial = document.createElement('button');
                  botonHistorial.className = 'btn btn-secondary btn-historial-desbloqueos';
                  botonHistorial.type = 'button';
                  botonHistorial.title = 'Ver historial completo de desbloqueos';
                  botonHistorial.innerHTML = '<i class="fa-solid fa-clock-rotate-left"></i> Historial desbloqueos';
                  const filaHistorial = contenedor.closest('tr');
                  const registroHistorial = filaHistorial ? rows.find(r => String(r.email || '') === String(filaHistorial.querySelector('td:nth-child(4)')?.textContent || '')) : null;
                  botonHistorial.onclick = () => abrirHistorialDesbloqueos(estudiantesProfesor.indexOf(registroHistorial));
                  contenedor.appendChild(botonHistorial);
              }
              const fila = contenedor.closest('tr');
              if (fila) {
                  const indiceEstudiante = estudiantesProfesor.indexOf(
                      rows.find(r => String(r.email || '') === String(fila.querySelector('td:nth-child(4)')?.textContent || ''))
                  );
                  fila.nextElementSibling?.classList.contains('teacher-actions-row') && fila.nextElementSibling.remove();
                  const filaAcciones = document.createElement('tr');
                  filaAcciones.className = 'teacher-actions-row';
                  filaAcciones.innerHTML = '<td colspan="13"></td>';
                  filaAcciones.firstElementChild.appendChild(contenedor);
                  fila.parentNode.insertBefore(filaAcciones, fila.nextSibling);
              }
          });
          if (document.getElementById('detalleEstudianteProfesorModal')?.classList.contains('active')) {
              actualizarNavegacionDetalleEstudianteProfesor();
          }
      }
      function escapeHtml(v){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
      async function eliminarEstudianteProfesor(estudiante) {
          if (!estudiante?.uid) {
              alert('No se pudo identificar al estudiante.');
              return;
          }
          const nombre = estudiante.estudiante?.nombre || estudiante.nombreGoogle || estudiante.email || estudiante.uid;
          const confirmacion = await mostrarConfirmacionDocente({
              tipo: 'danger',
              icono: 'fa-user-xmark',
              titulo: 'Eliminar estudiante',
              mensaje: `Se eliminará definitivamente a ${nombre}.`,
              detalles: [
                  'Se borrará el documento completo: identidad, progreso, códigos, respuestas, notas, cronómetros, bloqueos y consultas IA.',
                  'Se eliminarán los historiales de desbloqueos, descuentos, pestañas, revisiones y auditoría antes de borrar al estudiante.',
                  'La cuenta externa de Google no se elimina; se borran todos los datos almacenados por esta aplicación.',
                  'Esta acción no se puede deshacer.'
              ],
              campoLabel: 'Escribí ELIMINAR para confirmar',
              campoPlaceholder: 'ELIMINAR',
              campoRequerido: true,
              valorEsperado: 'ELIMINAR',
              confirmarTexto: 'Eliminar definitivamente',
              confirmarIcono: 'fa-trash-can',
              confirmarClase: 'btn-danger'
          });
          if (!confirmacion.confirmado) return;
          const ok = await window.eliminarEstudianteFirebase?.(estudiante.uid);
          if (!ok) {
              const detalleError = window.ultimoResumenEliminacionEstudiante?.error || '';
              alert(`No se pudo completar la eliminación total. Verificá la autorización docente y que las reglas de Firebase estén publicadas.${detalleError ? `\n\nDetalle: ${detalleError}` : ''}`);
              return;
          }
          const resumenEliminacion = window.ultimoResumenEliminacionEstudiante || {};
          estudiantesProfesor = estudiantesProfesor.filter(item => item.uid !== estudiante.uid);
          renderPanelProfesor();
          alert(`Estudiante y todos sus datos almacenados fueron eliminados correctamente.\n\nRegistros asociados eliminados: ${Number(resumenEliminacion.documentosAsociadosEliminados || 0)}.`);
      }
      async function iniciarPanelProfesorTiempoReal() {
          if (profesorUnsubscribe) profesorUnsubscribe();
          try {
              const { getFirestore, collection, onSnapshot } = await import('https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js');
              // Usamos la instancia Firestore ya inicializada dentro del módulo Firebase.
              if (!window.__firestorePanel) { document.getElementById('estadoPanelProfesor').textContent='Panel disponible cuando las reglas de Firestore permitan consultar la colección estudiantes.'; }
              const u=window.firebaseTeacherUser || window.firebaseCurrentUser;
              if (!u) return;
              // Solicita la colección mediante un evento al módulo Firebase.
              window.__abrirPanelProfesorFirestore?.();
              profesorUnsubscribe = () => { if (window.__profesorUnsubscribe) window.__profesorUnsubscribe(); window.__profesorUnsubscribe = null; };
          } catch(e) { document.getElementById('estadoPanelProfesor').textContent='Error al conectar con Firebase: '+e.message; }
      }


      // ============================================================
      // EDITOR DE DESAFÍOS DEL PANEL PROFESOR
      // ============================================================
      let desafioEditorActual=0;
      let desafiosEditorFirebase=[];

      function abrirEditorDesafiosFirebase(){
        document.getElementById('editorDesafiosFirebaseModal').classList.add('active');
        desafiosEditorFirebase=JSON.parse(JSON.stringify(seccionesData));
        desafioEditorActual=0;
        renderListaDesafiosFirebase();
        renderFormularioDesafioFirebase();
      }
      function cerrarEditorDesafiosFirebase(){document.getElementById('editorDesafiosFirebaseModal').classList.remove('active');}
      function textoArray(v){return Array.isArray(v)?v.join('\\n'):String(v||'');}
      function lineas(id){return String(document.getElementById(id)?.value||'').split(/\\n+/).map(x=>x.trim()).filter(Boolean);}

      function renderListaDesafiosFirebase(){
        const q=(document.getElementById('buscarDesafioFirebase')?.value||'').toLowerCase().trim();
        const el=document.getElementById('listaDesafiosFirebase'); if(!el)return;
        el.innerHTML='';
        desafiosEditorFirebase.forEach((d,i)=>{
          if(q&&!JSON.stringify(d).toLowerCase().includes(q))return;
          const b=document.createElement('button');
          b.className='btn '+(i===desafioEditorActual?'btn-primary':'btn-secondary');
          b.style='display:block;width:100%;text-align:left;margin-bottom:.4rem;';
          b.textContent=(d.id||('sec-'+(i+1)))+' — '+(d.title||'Sin título');
          b.onclick=()=>{guardarFormularioDesafioFirebase(false);desafioEditorActual=i;renderListaDesafiosFirebase();renderFormularioDesafioFirebase();};
          el.appendChild(b);
        });
      }

      function renderFormularioDesafioFirebase(){
        const d=desafiosEditorFirebase[desafioEditorActual];if(!d)return;
        const criterios=d.criteriosEvaluacion||[];
        document.getElementById('formDesafioFirebase').innerHTML=`
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:.7rem;">
            <div><label>ID</label><input id="edf_id" value="${escapeHtml(d.id||'')}" readonly></div>
            <div><label>Ícono</label><input id="edf_icon" value="${escapeHtml(d.icon||'')}"></div>
            <div><label>Título</label><input id="edf_title" value="${escapeHtml(d.title||'')}"></div>
            <div><label>Título del desafío</label><input id="edf_exerciseTitle" value="${escapeHtml(d.exerciseTitle||'')}"></div>
            <div style="grid-column:1/-1"><label>Teoría</label><textarea id="edf_theory">${escapeHtml(d.theory||'')}</textarea></div>
            <div style="grid-column:1/-1"><label>Consigna</label><textarea id="edf_exerciseDesc" style="min-height:120px">${escapeHtml(d.exerciseDesc||'')}</textarea></div>
            <div style="grid-column:1/-1"><label>Código inicial</label><textarea id="edf_initialCode" style="min-height:140px">${escapeHtml(d.initialCode||'')}</textarea></div>
            <div style="grid-column:1/-1"><label>Solución de referencia IA</label><textarea id="edf_aiSolution" style="min-height:160px">${escapeHtml(d.aiSolution||'')}</textarea></div>
            <div style="grid-column:1/-1"><label>🎯 Objetivos pedagógicos</label><textarea id="edf_objetivos">${escapeHtml(textoArray(d.objetivosPedagogicos))}</textarea></div>
            <div style="grid-column:1/-1"><label>🧠 Conceptos que debe detectar la IA</label><textarea id="edf_conceptos">${escapeHtml(textoArray(d.conceptosDetectar))}</textarea></div>
            <div style="grid-column:1/-1"><label>❓ Preguntas socráticas</label><textarea id="edf_preguntas" style="min-height:120px">${escapeHtml(textoArray(d.preguntasSocraticas))}</textarea></div>
            <div style="grid-column:1/-1"><label>⚠️ Errores frecuentes</label><textarea id="edf_errores" style="min-height:120px">${escapeHtml(textoArray(d.erroresFrecuentes))}</textarea></div>
            <div style="grid-column:1/-1"><label>🚫 Qué NO debe revelar la IA</label><textarea id="edf_norevelar" style="min-height:120px">${escapeHtml(textoArray(d.noRevelarIA))}</textarea></div>
          </div>
          <h4>📊 Criterios de evaluación</h4>
          <p style="color:var(--text-muted);font-size:.8rem;">Los pesos deben sumar 100.</p>
          <table style="width:100%;border-collapse:collapse;min-width:650px;"><thead><tr><th>Criterio</th><th>Peso</th><th>Indicador</th><th></th></tr></thead><tbody id="edf_criterios"></tbody></table>
          <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.7rem;">
            <button class="btn btn-secondary" onclick="agregarCriterioFirebase()">➕ Criterio</button>
            <button class="btn btn-secondary" onclick="normalizarCriteriosFirebase()">⚖️ Normalizar</button>
            <button class="btn btn-primary" onclick="guardarDesafioActualFirebase()">☁️ Guardar desafío</button>
            <button class="btn btn-secondary" onclick="guardarLos19Firebase()">☁️ Guardar los 19</button>
          </div>`;
        criterios.forEach(c=>agregarFilaCriterioFirebase(c));
        document.querySelectorAll('#formDesafioFirebase input,#formDesafioFirebase textarea').forEach(el => {
          el.addEventListener('input', () => {
            const estado = document.getElementById('estadoEditorDesafiosFirebase');
            if (estado) estado.textContent = 'Cambios sin guardar';
          });
        });
      }

      function agregarFilaCriterioFirebase(c={criterio:'',peso:0,indicador:''}){
        const tr=document.createElement('tr');
        tr.innerHTML=`<td><input data-k="criterio" value="${escapeHtml(c.criterio||'')}"></td>
          <td><input data-k="peso" type="number" min="0" max="100" value="${Number(c.peso)||0}" style="width:80px"></td>
          <td><input data-k="indicador" value="${escapeHtml(c.indicador||'')}"></td>
          <td><button class="btn btn-danger" onclick="this.closest('tr').remove()">🗑️</button></td>`;
        document.getElementById('edf_criterios').appendChild(tr);
      }
      function agregarCriterioFirebase(){agregarFilaCriterioFirebase();}
      function criteriosFirebase(){return [...document.querySelectorAll('#edf_criterios tr')].map(tr=>{
        const o={};tr.querySelectorAll('[data-k]').forEach(x=>o[x.dataset.k]=x.dataset.k==='peso'?Number(x.value)||0:x.value.trim());return o;
      }).filter(x=>x.criterio||x.indicador);}
      function normalizarCriteriosFirebase(){
        const rows=[...document.querySelectorAll('#edf_criterios tr')],v=rows.map(r=>Number(r.querySelector('[data-k="peso"]').value)||0),t=v.reduce((a,b)=>a+b,0);
        if(!t){alert('Asigná los pesos primero.');return;} rows.forEach((r,i)=>r.querySelector('[data-k="peso"]').value=Math.round(v[i]*100/t));
      }
      function guardarFormularioDesafioFirebase(){
        const d=desafiosEditorFirebase[desafioEditorActual];if(!d)return;
        const map={icon:'edf_icon',title:'edf_title',exerciseTitle:'edf_exerciseTitle',theory:'edf_theory',exerciseDesc:'edf_exerciseDesc',initialCode:'edf_initialCode',aiSolution:'edf_aiSolution'};
        Object.entries(map).forEach(([k,id])=>d[k]=document.getElementById(id)?.value||'');
        d.objetivosPedagogicos=lineas('edf_objetivos');d.conceptosDetectar=lineas('edf_conceptos');d.preguntasSocraticas=lineas('edf_preguntas');d.erroresFrecuentes=lineas('edf_errores');d.noRevelarIA=lineas('edf_norevelar');d.criteriosEvaluacion=criteriosFirebase();
        return d;
      }
      async function guardarDesafioActualFirebase(){
        const d=guardarFormularioDesafioFirebase();if(!d)return;
        const suma=(d.criteriosEvaluacion||[]).reduce((a,c)=>a+(Number(c.peso)||0),0);
        if(Math.round(suma)!==100){alert('La rúbrica debe sumar 100%. Actualmente suma '+suma+'%.');return;}
        const ok=await window.guardarDesafioFirebase(d);
        if(ok){
          seccionesData=seccionesData.map(x=>x.id===d.id?({...x,...d}):x);
          document.getElementById('estadoEditorDesafiosFirebase').textContent='Guardado: '+d.id+' · '+new Date().toLocaleTimeString();
        }else document.getElementById('estadoEditorDesafiosFirebase').textContent='❌ No se pudo guardar. Revisá las reglas de Firestore.';
      }
      async function guardarLos19Firebase(){
        guardarFormularioDesafioFirebase();
        const invalid=desafiosEditorFirebase.find(d=>Math.round((d.criteriosEvaluacion||[]).reduce((a,c)=>a+(Number(c.peso)||0),0))!==100);
        if(invalid){alert('La rúbrica de '+invalid.id+' no suma 100%.');return;}
        const ok=await window.guardarTodosDesafiosFirebase(desafiosEditorFirebase);
        if(ok){
          seccionesData=JSON.parse(JSON.stringify(desafiosEditorFirebase));
          document.getElementById('estadoEditorDesafiosFirebase').textContent='Los 19 desafíos fueron guardados · '+new Date().toLocaleTimeString();
        }else document.getElementById('estadoEditorDesafiosFirebase').textContent='❌ No se pudieron guardar los desafíos.';
      }
      document.getElementById('buscarDesafioFirebase')?.addEventListener('input',renderListaDesafiosFirebase);
      document.addEventListener('keydown', event => {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's' && document.getElementById('editorDesafiosFirebaseModal')?.classList.contains('active')) {
          event.preventDefault();
          guardarDesafioActualFirebase();
        }
      });

      function agregarTextoPDFProfesor(doc, texto, y, opciones = {}) {
          const margen = opciones.margen || 14;
          const ancho = opciones.ancho || 182;
          const altoLinea = opciones.altoLinea || 4.2;
          const lineas = doc.splitTextToSize(String(texto || ''), ancho);
          for (const linea of lineas) {
              if (y > 282) {
                  doc.addPage();
                  y = 18;
              }
              doc.text(linea, margen, y);
              y += altoLinea;
          }
          return y;
      }

      function nombreArchivoPDFProfesor(valor) {
          return String(valor || 'reporte')
              .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
              .replace(/[^a-z0-9_-]+/gi, '_')
              .replace(/^_+|_+$/g, '')
              .slice(0, 80) || 'reporte';
      }

      function guardarPDFProfesor(doc, nombre) {
          doc.save(`${nombreArchivoPDFProfesor(nombre)}.pdf`);
      }

      function agregarAnalistaViabilidadExcelenciaPDF(doc, analista, y) {
          const preguntas = Array.isArray(analista?.preguntas) ? analista.preguntas : [];
          if (!preguntas.length) {
              return agregarTextoPDFProfesor(doc, 'Analista de Viabilidad y Excelencia: sin respuestas entregadas.', y);
          }
          doc.setFont('helvetica', 'bold');
          y = agregarTextoPDFProfesor(
              doc,
              `Analista de Viabilidad y Excelencia · Viabilidad: ${analista.viabilidad || 'Pendiente'} · Excelencia: ${analista.excelencia || 'Pendiente'} · Resultado: ${Number(analista.correctas || 0)}/${Number(analista.total || preguntas.length)} (${Number(analista.porcentaje || 0)}%)`,
              y
          );
          doc.setFont('helvetica', 'normal');
          preguntas.forEach((pregunta, indice) => {
              const opciones = Array.isArray(pregunta.opciones) ? pregunta.opciones : [];
              const seleccionadas = Array.isArray(pregunta.seleccionadas) ? pregunta.seleccionadas : [];
              const correctas = Array.isArray(pregunta.correctas)
                  ? pregunta.correctas
                  : opciones.map((opcion, posicion) => opcion?.correcta === true ? posicion : null).filter(posicion => posicion !== null);
              const esCorrecta = JSON.stringify([...seleccionadas].sort((a,b) => a-b)) ===
                  JSON.stringify([...correctas].sort((a,b) => a-b));
              const seleccionTexto = seleccionadas.length
                  ? seleccionadas.map(posicion => `${String.fromCharCode(65 + posicion)}) ${opciones[posicion]?.texto || opciones[posicion]?.t || 'Opción'}`).join(' | ')
                  : 'Sin selección';
              const correctaTexto = correctas.length
                  ? correctas.map(posicion => `${String.fromCharCode(65 + posicion)}) ${opciones[posicion]?.texto || opciones[posicion]?.t || 'Opción'}`).join(' | ')
                  : 'No definida';
              const esAbierta = pregunta.formato === "abierta" || Boolean(pregunta.respuestaTexto);
              const detalleRespuesta = esAbierta
                  ? `Respuesta del estudiante: ${pregunta.respuestaTexto || "Sin respuesta escrita"}\nCriterios cumplidos: ${(pregunta.criteriosCumplidos || []).join(", ") || "ninguno"}\nCriterios a fortalecer: ${(pregunta.criteriosFaltantes || []).join(", ") || "ninguno"}`
                  : `Respuesta del estudiante: ${seleccionTexto}\nRespuesta correcta esperada: ${correctaTexto}`;
              y = agregarTextoPDFProfesor(
                  doc,
                  `${indice + 1}. ${pregunta.pregunta || 'Pregunta sin texto'} · ${pregunta.categoria || pregunta.tipo || 'ANÁLISIS'} · ${pregunta.etiquetaNivel || (esCorrecta ? 'Correcta completa' : 'Incorrecta')} · ${Number(pregunta.puntos || 0).toFixed(2)}/1,00\n${detalleRespuesta}`,
                  y,
                  { altoLinea: 3.8 }
              );
          });
          return y;
      }

      function exportarDetalleEstudianteProfesorPDF() {
          if (!window.jspdf?.jsPDF) {
              alert('No se pudo cargar el generador de PDF. Verificá la conexión e intentá nuevamente.');
              return;
          }
          const d = estudiantesProfesor[detalleEstudianteProfesorIndiceActual];
          if (!d) {
              alert('Abrí primero el detalle de un estudiante.');
              return;
          }
          const { jsPDF } = window.jspdf;
          const doc = new jsPDF();
          const e = d.estudiante || {};
          const historial = d.historialResultados || {};
          const finalizadas = d.finalizadas || {};
          const notasDocente = d.notasDesafiosDocente || {};
          const nombre = e.nombre || d.nombreGoogle || d.email || 'Estudiante';
          let y = 18;
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(15);
          doc.text('IPEM 146 - Detalle completo del estudiante', 14, y);
          y += 8;
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9);
          y = agregarTextoPDFProfesor(doc, `Estudiante: ${nombre}\nEmail: ${d.email || 'Sin email'}\nCurso: ${e.curso || 'Sin curso'} ${e.division || ''} · Turno: ${e.turno || 'Sin turno'}\nFecha de emisión: ${new Date().toLocaleString('es-AR')}`, y);
          y += 3;
          doc.line(14, y, 196, y);
          y += 6;
          doc.setFont('helvetica', 'bold');
          y = agregarTextoPDFProfesor(doc, `Progreso: ${calcularProgresoEstudiante(d)}% · Promedio académico: ${calcularNotaEstudiante(d)} · Nota definitiva: ${calcularNotaDefinitivaEstudiante(d)}`, y);
          doc.setFont('helvetica', 'normal');

          const actividadesVisibles = [...document.querySelectorAll('#detalleEstudianteProfesorContenido .teacher-activity[data-section-id]')]
              .filter(elemento => !elemento.hidden)
              .map(elemento => elemento.dataset.sectionId);
          const filtroSeleccionado = document.getElementById('filtroDesafiosDetalleProfesor');
          const busquedaActiva = String(document.getElementById('buscarDesafioDetalleProfesor')?.value || '').trim();
          const seccionesExportar = actividadesVisibles
              .map(sectionId => seccionesData.find(sec => sec.id === sectionId))
              .filter(Boolean);
          if (!seccionesExportar.length) {
              alert('El filtro seleccionado no tiene desafíos para exportar.');
              return;
          }
          const detalleFiltroPDF = [
              filtroSeleccionado?.selectedOptions?.[0]?.textContent || 'Todos',
              busquedaActiva ? `búsqueda: ${busquedaActiva}` : ''
          ].filter(Boolean).join(' · ');
          y = agregarTextoPDFProfesor(doc, `Vista exportada: ${detalleFiltroPDF} · Desafíos incluidos: ${seccionesExportar.length}`, y);

          seccionesExportar.forEach((sec, indice) => {
              const r = historial[sec.id] || {};
              const evaluacion = r.evaluacionCodigo || {};
              const ajuste = notasDocente[sec.id] || {};
              const notaVigente = obtenerNotaDesafioEstudiante(d, sec.id, r);
              const codigo = r.codigo || d.codigos?.[sec.id] || '// Sin código guardado';
              if (y > 248) {
                  doc.addPage();
                  y = 18;
              }
              y += 5;
              doc.setFont('helvetica', 'bold');
              doc.setFontSize(11);
              y = agregarTextoPDFProfesor(doc, `${indice + 1}. ${sec.title}`, y);
              doc.setFontSize(8.5);
              y = agregarTextoPDFProfesor(doc, `Estado: ${finalizadas[sec.id] ? 'Finalizada' : 'Pendiente'} · Nota automática: ${r.notaFinal ?? r.notaIA ?? 'Pendiente'} · Nota vigente: ${notaVigente ?? 'Pendiente'}${ajuste.nota !== undefined && ajuste.nota !== null ? ' (corrección docente)' : ''}`, y);
              doc.setFont('helvetica', 'normal');
              y = agregarTextoPDFProfesor(doc, `Consigna: ${sec.exerciseDesc || 'Sin consigna'}`, y);
              if (evaluacion.nota !== undefined) {
                  const metricas = evaluacion.metricas || {};
                  y = agregarTextoPDFProfesor(doc, `Análisis estricto: ${evaluacion.nota}/10 · Sintaxis: ${evaluacion.sintaxis?.valida ? 'válida' : 'con errores'} · Ejecución: ${evaluacion.ejecucion?.ok ? 'correcta' : 'no validada'} · Requisitos: ${Math.round(Number(metricas.requisitos || 0) * 100)}% · Referencia: ${Math.round(Number(metricas.referencia || 0) * 100)}% · Comportamiento: ${Math.round(Number(metricas.comportamiento || 0) * 100)}%`, y);
                  if (evaluacion.limites?.length) y = agregarTextoPDFProfesor(doc, `Límites: ${evaluacion.limites.join(' | ')}`, y);
                  if (evaluacion.mejoras?.length) y = agregarTextoPDFProfesor(doc, `Mejoras: ${evaluacion.mejoras.join(' | ')}`, y);
              }
              if (ajuste.nota !== undefined && ajuste.nota !== null) {
                  y = agregarTextoPDFProfesor(doc, `Corrección docente: ${ajuste.nota}/10 · Docente: ${ajuste.modificadaPor || 'Sin registrar'} · Observación: ${ajuste.motivo || 'Sin observación'}`, y);
              }
              doc.setFont('courier', 'normal');
              doc.setFontSize(7.5);
              y = agregarTextoPDFProfesor(doc, `Código entregado:\n${codigo}`, y, { altoLinea: 3.5 });
              doc.setFont('helvetica', 'normal');
              y = agregarTextoPDFProfesor(doc, `Salida: ${r.salida || 'Sin salida registrada'}`, y);
              y = agregarAnalistaViabilidadExcelenciaPDF(doc, r.analista, y);
              y += 2;
              doc.line(14, y, 196, y);
          });
          guardarPDFProfesor(doc, `Detalle_docente_${nombre}_${e.curso || ''}_${e.division || ''}`);
      }

      async function exportarCursoProfesorPDF() {
          if (!window.jspdf?.jsPDF) {
              alert('No se pudo cargar el generador de PDF. Verificá la conexión e intentá nuevamente.');
              return;
          }
          const curso = String(document.getElementById('filtroCursoProfesor')?.value || '').trim();
          const division = String(document.getElementById('filtroDivisionProfesor')?.value || '').trim();
          const turno = String(document.getElementById('filtroTurnoProfesor')?.value || '').trim();
          const camposFaltantes = [
              !curso ? { nombre: 'curso', id: 'filtroCursoProfesor' } : null,
              !division ? { nombre: 'división', id: 'filtroDivisionProfesor' } : null,
              !turno ? { nombre: 'turno', id: 'filtroTurnoProfesor' } : null
          ].filter(Boolean);
          if (camposFaltantes.length) {
              alert(`Seleccioná ${camposFaltantes.map(item => item.nombre).join(', ')} para identificar el grupo exacto que se exportará.`);
              document.getElementById(camposFaltantes[0].id)?.focus();
              return;
          }
          const estudiantes = estudiantesProfesor.filter(d => {
              const e = d.estudiante || {};
              return String(e.curso || '') === curso &&
                  String(e.division || '') === division &&
                  String(e.turno || '') === turno;
          }).sort((a, b) => String(a.estudiante?.nombre || a.email || '').localeCompare(String(b.estudiante?.nombre || b.email || ''), 'es'));
          if (!estudiantes.length) {
              alert('No hay estudiantes para la combinación de curso, división y turno seleccionada.');
              return;
          }
          const historialNotasPorUid = new Map(await Promise.all(estudiantes.map(async d => {
              if (!d.uid || typeof window.obtenerHistorialNotasDesafiosFirebase !== 'function') {
                  return [d.uid || d.email || '', []];
              }
              try {
                  const historial = await window.obtenerHistorialNotasDesafiosFirebase(d.uid);
                  return [d.uid, Array.isArray(historial) ? historial : []];
              } catch (_) {
                  return [d.uid, []];
              }
          })));
          const { jsPDF } = window.jspdf;
          const doc = new jsPDF();
          const grupo = `${curso} · División ${division} · Turno ${turno}`;
          const fechaEmision = new Date().toLocaleString('es-AR');
          const formatearFechaPDF = valor => {
              if (!valor) return 'Sin registrar';
              try {
                  const fecha = valor.toDate
                      ? valor.toDate()
                      : (valor.seconds ? new Date(Number(valor.seconds) * 1000) : new Date(valor));
                  return Number.isNaN(fecha.getTime()) ? 'Sin registrar' : fecha.toLocaleString('es-AR');
              } catch (_) {
                  return 'Sin registrar';
              }
          };
          const textoEstadoCuenta = d => {
              const estado = d.estadoCuenta || 'activo';
              if (estado === 'pendiente') return 'Pendiente de aprobación';
              if (estado === 'rechazado') return 'Solicitud rechazada';
              if (estado === 'inactivo') return 'Cuenta inactiva';
              return 'Cuenta activa';
          };
          const contarSituacionDesafios = d => {
              const historial = d.historialResultados || {};
              const finalizadas = d.finalizadas || {};
              return seccionesData.reduce((resumen, sec) => {
                  const resultado = historial[sec.id] || {};
                  const evaluacion = resultado.evaluacionCodigo || {};
                  const nota = obtenerNotaDesafioEstudiante(d, sec.id, resultado);
                  const conError = evaluacion.sintaxis?.valida === false ||
                      evaluacion.ejecucion?.ok === false || Boolean(resultado.error);
                  const pendiente = !finalizadas[sec.id] ||
                      resultado.notaPreguntas === undefined || nota === null;
                  if (conError) resumen.errores += 1;
                  if (pendiente) resumen.pendientes += 1;
                  if (d.notasDesafiosDocente?.[sec.id]?.nota !== undefined &&
                      d.notasDesafiosDocente?.[sec.id]?.nota !== null) resumen.modificadas += 1;
                  if (finalizadas[sec.id]) resumen.finalizadas += 1;
                  return resumen;
              }, { errores: 0, pendientes: 0, modificadas: 0, finalizadas: 0 });
          };
          const estadisticas = estudiantes.map(d => ({ estudiante: d, ...contarSituacionDesafios(d) }));
          const notasAcademicas = estudiantes.map(calcularNotaEstudiante).filter(x => x !== '—').map(Number);
          const notasDefinitivas = estudiantes.map(calcularNotaDefinitivaEstudiante).filter(x => x !== '—').map(Number);
          const promedio = valores => valores.length
              ? (valores.reduce((a, b) => a + b, 0) / valores.length).toFixed(1)
              : 'Pendiente';
          const progresoPromedio = (
              estudiantes.reduce((total, d) => total + calcularProgresoEstudiante(d), 0) /
              estudiantes.length
          ).toFixed(1);
          const activas = estudiantes.filter(d => !['pendiente', 'rechazado', 'inactivo'].includes(d.estadoCuenta)).length;
          const pendientesCuenta = estudiantes.filter(d => d.estadoCuenta === 'pendiente').length;
          const inactivas = estudiantes.filter(d => ['rechazado', 'inactivo'].includes(d.estadoCuenta)).length;
          const totalErrores = estadisticas.reduce((total, item) => total + item.errores, 0);
          const totalPendientes = estadisticas.reduce((total, item) => total + item.pendientes, 0);
          const totalModificadas = estadisticas.reduce((total, item) => total + item.modificadas, 0);
          const totalSalidas = estudiantes.reduce((total, d) => total + Number(d.salidasPestana || 0), 0);
          const totalDesbloqueos = estudiantes.reduce((total, d) => total + Number(d.cantidadDesbloqueos || 0), 0);
          let y = 18;
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(18);
          doc.text('IPEM 146', 14, y);
          y += 9;
          doc.setFontSize(15);
          doc.text('Informe completo del grupo', 14, y);
          y += 10;
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(10);
          y = agregarTextoPDFProfesor(doc, `Curso: ${curso}\nDivisión: ${division}\nTurno: ${turno}\nFecha de emisión: ${fechaEmision}`, y, { altoLinea: 5 });
          y += 6;
          doc.line(14, y, 196, y);
          y += 9;
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(12);
          y = agregarTextoPDFProfesor(doc, 'Resumen institucional del grupo', y);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9);
          y = agregarTextoPDFProfesor(doc, [
              `Estudiantes: ${estudiantes.length} · Cuentas activas: ${activas} · Solicitudes pendientes: ${pendientesCuenta} · Inactivas o rechazadas: ${inactivas}`,
              `Progreso promedio: ${progresoPromedio}% · Promedio académico: ${promedio(notasAcademicas)}/10 · Promedio definitivo confirmado: ${promedio(notasDefinitivas)}/10`,
              `Desafíos con errores: ${totalErrores} · Desafíos pendientes: ${totalPendientes} · Notas corregidas por docentes: ${totalModificadas}`,
              `Cambios de pestaña: ${totalSalidas} · Desbloqueos registrados: ${totalDesbloqueos}`
          ].join('\n'), y, { altoLinea: 5 });
          y += 5;
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(12);
          y = agregarTextoPDFProfesor(doc, 'Nómina y situación general', y);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.5);
          estadisticas.forEach((item, indice) => {
              const d = item.estudiante;
              const e = d.estudiante || {};
              const notaDefinitiva = calcularNotaDefinitivaEstudiante(d);
              y = agregarTextoPDFProfesor(
                  doc,
                  `${indice + 1}. ${e.nombre || d.nombreGoogle || 'Sin nombre'} · ${d.email || 'Sin email'}\n` +
                  `Estado: ${textoEstadoCuenta(d)} · Progreso: ${calcularProgresoEstudiante(d)}% · Promedio: ${calcularNotaEstudiante(d)}/10 · Nota definitiva: ${notaDefinitiva === '—' ? 'Pendiente' : `${notaDefinitiva}/10`} · Errores: ${item.errores} · Pendientes: ${item.pendientes} · Correcciones docentes: ${item.modificadas}`,
                  y,
                  { altoLinea: 4 }
              );
              y += 2;
          });

          estudiantes.forEach((d, indice) => {
              doc.addPage();
              y = 18;
              const e = d.estudiante || {};
              const historial = d.historialResultados || {};
              const finalizadas = d.finalizadas || {};
              const notasDocente = d.notasDesafiosDocente || {};
              const revision = d.revisionSalidas || {};
              const eventos = Array.isArray(d.eventosSalidasPestana) ? d.eventosSalidasPestana : [];
              const chatIA = d.chatIA || {};
              const codigos = d.codigos || {};
              const tiempos = d.tiemposRestantes || {};
              const previews = d.contadorPrevisualizaciones || {};
              const ayudas = d.ayudasComprension || {};
              const historialNotasDesafios = historialNotasPorUid.get(d.uid || d.email || '') || [];
              const resumen = estadisticas[indice];
              doc.setFont('helvetica', 'bold');
              doc.setFontSize(15);
              y = agregarTextoPDFProfesor(doc, `${indice + 1}. ${e.nombre || d.nombreGoogle || 'Estudiante sin nombre'}`, y);
              doc.setFont('helvetica', 'normal');
              doc.setFontSize(9);
              y = agregarTextoPDFProfesor(doc, [
                  `Email: ${d.email || 'Sin email'} · UID: ${d.uid || 'Sin registrar'}`,
                  `Grupo: ${grupo} · Estado: ${textoEstadoCuenta(d)}`,
                  `Última actualización: ${formatearFechaPDF(d.actualizadoEn)}`,
                  `Progreso: ${calcularProgresoEstudiante(d)}% · Promedio académico: ${calcularNotaEstudiante(d)}/10 · Nota calculada: ${calcularNotaProvisionalEstudiante(d)}/10 · Nota definitiva: ${calcularNotaDefinitivaEstudiante(d) === '—' ? 'Pendiente' : `${calcularNotaDefinitivaEstudiante(d)}/10`}`,
                  `Desafíos finalizados: ${resumen.finalizadas}/${seccionesData.length} · Con errores: ${resumen.errores} · Pendientes: ${resumen.pendientes} · Notas docentes: ${resumen.modificadas}`,
                  d.estadoCuenta === 'inactivo' ? `Baja: ${d.bajaMotivo || 'Sin motivo'} · Fecha: ${formatearFechaPDF(d.bajaFecha)} · Responsable: ${d.bajaPor || 'Sin registrar'}` : '',
                  d.estadoCuenta === 'rechazado' ? `Rechazo: ${d.rechazoMotivo || 'Sin motivo'} · Fecha: ${formatearFechaPDF(d.rechazadoEn)} · Responsable: ${d.rechazadoPor || 'Sin registrar'}` : ''
              ].filter(Boolean).join('\n'), y, { altoLinea: 4.5 });
              y += 3;
              doc.line(14, y, 196, y);
              y += 7;

              doc.setFont('helvetica', 'bold');
              doc.setFontSize(11);
              y = agregarTextoPDFProfesor(doc, 'Revisión docente, nota final y seguimiento', y);
              doc.setFont('helvetica', 'normal');
              doc.setFontSize(8.5);
              y = agregarTextoPDFProfesor(doc, [
                  `Estado de revisión: ${revision.estado || 'Pendiente'} · Descuento: ${Number(revision.penalizacion || 0).toFixed(1)} punto(s)`,
                  `Fundamento: ${revision.motivo || 'Sin fundamento registrado'}`,
                  `Revisado por: ${revision.revisadoPor || 'Sin registrar'} · Fecha: ${formatearFechaPDF(revision.revisadoEn)}`,
                  `Confirmación de nota final: ${revision.notaConfirmada === true ? 'Confirmada' : 'Pendiente'}${revision.notaModificadaManualmente === true ? ' · Modificada manualmente por el docente' : ''}`,
                  `Cambios de pestaña: ${Number(d.salidasPestana || 0)} · Pantalla bloqueada: ${d.pantallaBloqueada === true ? 'Sí' : 'No'} · Desbloqueos: ${Number(d.cantidadDesbloqueos || 0)}`,
                  d.ultimoDesbloqueo || d.desbloqueoPantalla
                      ? `Último desbloqueo: ${formatearFechaPDF((d.ultimoDesbloqueo || d.desbloqueoPantalla).en)} · Docente: ${(d.ultimoDesbloqueo || d.desbloqueoPantalla).por || 'Sin registrar'} · Motivo: ${(d.ultimoDesbloqueo || d.desbloqueoPantalla).motivo || 'Sin motivo'}`
                      : 'Último desbloqueo: sin registros'
              ].join('\n'), y, { altoLinea: 4.2 });

              if (eventos.length) {
                  y += 3;
                  doc.setFont('helvetica', 'bold');
                  y = agregarTextoPDFProfesor(doc, `Recorrido de cambios de pestaña (${eventos.length})`, y);
                  doc.setFont('helvetica', 'normal');
                  eventos.forEach((evento, posicion) => {
                      const duracion = evento.duracionSegundos === null || evento.duracionSegundos === undefined
                          ? 'duración no registrada'
                          : `${evento.duracionSegundos} segundos`;
                      const justificacion = evento.justificacion
                          ? `${evento.justificacion.motivo || 'Justificada'}: ${evento.justificacion.detalle || 'Sin detalle'}`
                          : 'Sin justificación';
                      const revisionEvento = evento.revisionDocente || evento.revision || {};
                      y = agregarTextoPDFProfesor(
                          doc,
                          `${posicion + 1}. ${formatearFechaPDF(evento.salidaEn)} · Actividad: ${evento.seccion || 'Sin identificar'} · ${duracion} · ${justificacion}` +
                          `${revisionEvento.estado ? ` · Revisión docente: ${revisionEvento.estado}` : ''}`,
                          y,
                          { margen: 18, ancho: 178, altoLinea: 3.8 }
                      );
                  });
              } else {
                  y = agregarTextoPDFProfesor(doc, 'Recorrido de pestañas: no se registraron cambios.', y);
              }

              seccionesData.forEach((sec, desafioIndice) => {
                  const r = historial[sec.id] || {};
                  const evaluacion = r.evaluacionCodigo || {};
                  const ajuste = notasDocente[sec.id] || {};
                  const notaVigente = obtenerNotaDesafioEstudiante(d, sec.id, r);
                  const notaAutomatica = r.notaFinal ?? r.notaIA;
                  const codigo = r.codigo || codigos[sec.id] || '// Sin código guardado';
                  const mensajes = Array.isArray(chatIA[sec.id]) ? chatIA[sec.id] : [];
                  const ayudaModulo = ayudas[sec.id] || {};
                  const consultasPalabras = Object.values(ayudaModulo.palabras || {})
                      .reduce((total, item) => total + Number(item?.consultas || 0), 0);
                  const historialNotaDesafio = historialNotasDesafios.filter(item => item.sectionId === sec.id);
                  if (y > 235) {
                      doc.addPage();
                      y = 18;
                  } else {
                      y += 6;
                  }
                  doc.setFont('helvetica', 'bold');
                  doc.setFontSize(11);
                  y = agregarTextoPDFProfesor(doc, `Desafío ${desafioIndice + 1}: ${sec.title}`, y);
                  doc.setFontSize(8.5);
                  y = agregarTextoPDFProfesor(doc, [
                      `Estado: ${finalizadas[sec.id] ? 'Finalizado' : 'Pendiente'}`,
                      `Nota del código (70%): ${r.notaCodigo ?? 'Pendiente'} · Nota de preguntas (30%): ${r.notaPreguntas ?? 'Pendiente'} · Nota automática: ${notaAutomatica ?? 'Pendiente'} · Nota vigente: ${notaVigente ?? 'Pendiente'}${ajuste.nota !== undefined && ajuste.nota !== null ? ' (corregida por docente)' : ''}`,
                      `Tiempo restante: ${formatearTiempoProfesor(tiempos[sec.id] ?? 2400)} · Consultas de nota previa: ${Number(previews[sec.id] || 0)}/3`,
                      `Ayudas pedagógicas: palabras consultadas ${consultasPalabras} · pasos abiertos ${Number(ayudaModulo.pasosVistos || 0)} · material de apoyo ${Number(ayudaModulo.materialApoyoVistas || 0)} · verificación ${Number(ayudaModulo.verificacion?.intentos || 0)} intento(s)`
                  ].join('\n'), y, { altoLinea: 4 });
                  doc.setFont('helvetica', 'normal');
                  y = agregarTextoPDFProfesor(doc, `Consigna: ${sec.exerciseDesc || 'Sin consigna registrada'}`, y, { altoLinea: 3.8 });

                  if (ajuste.nota !== undefined && ajuste.nota !== null) {
                      y = agregarTextoPDFProfesor(doc, [
                          `Corrección docente: ${ajuste.nota}/10 · Valor automático anterior: ${ajuste.notaAutomatica ?? notaAutomatica ?? 'Sin nota'}`,
                          `Docente: ${ajuste.modificadaPor || 'Sin registrar'} · Fecha: ${formatearFechaPDF(ajuste.modificadaEn)}`,
                          `Observación: ${ajuste.motivo || 'Sin observación'}`
                      ].join('\n'), y, { altoLinea: 3.8 });
                  }
                  if (historialNotaDesafio.length) {
                      doc.setFont('helvetica', 'bold');
                      y = agregarTextoPDFProfesor(doc, `Historial de cambios de nota (${historialNotaDesafio.length})`, y);
                      doc.setFont('helvetica', 'normal');
                      historialNotaDesafio.forEach((cambio, cambioIndice) => {
                          y = agregarTextoPDFProfesor(
                              doc,
                              `${cambioIndice + 1}. ${formatearFechaPDF(cambio.cambiadoEn)} · Docente: ${cambio.docente || 'Sin registrar'} · Valor anterior: ${cambio.valorAnterior ?? 'Sin nota'} · Valor nuevo: ${cambio.valorNuevo ?? 'Sin nota'} · Motivo: ${cambio.motivo || 'Sin motivo'}`,
                              y,
                              { margen: 18, ancho: 178, altoLinea: 3.7 }
                          );
                      });
                  } else {
                      y = agregarTextoPDFProfesor(doc, 'Historial de cambios de nota: sin modificaciones históricas disponibles.', y);
                  }

                  if (evaluacion.nota !== undefined) {
                      const metricas = evaluacion.metricas || {};
                      const conceptos = Array.isArray(evaluacion.conceptos) ? evaluacion.conceptos : [];
                      const criterios = Array.isArray(evaluacion.criterios) ? evaluacion.criterios : [];
                      y = agregarTextoPDFProfesor(doc, [
                          `Análisis automático estricto: ${Number(evaluacion.nota).toFixed(1)}/10 · Sintaxis: ${evaluacion.sintaxis?.valida ? 'válida' : 'con errores'} · Ejecución: ${evaluacion.ejecucion?.ok ? 'correcta' : 'no validada'}`,
                          `Métricas: requisitos ${Math.round(Number(metricas.requisitos || 0) * 100)}% · referencia ${Math.round(Number(metricas.referencia || 0) * 100)}% · comportamiento ${Math.round(Number(metricas.comportamiento || 0) * 100)}% · identificadores ${Math.round(Number(metricas.nombresExigidos ?? 1) * 100)}%`,
                          conceptos.length ? `Conceptos: ${conceptos.map(item => `${item.nombre || 'Sin nombre'} (${item.cumple ? 'cumple' : 'falta'})`).join(' | ')}` : '',
                          criterios.length ? `Criterios: ${criterios.map(item => `${item.nombre || 'Criterio'} ${item.puntos ?? 0}/${item.peso ?? 0} (${item.estado || 'pendiente'}): ${item.evidencia || 'sin evidencia'}`).join(' | ')}` : '',
                          Array.isArray(evaluacion.mejoras) && evaluacion.mejoras.length ? `Mejoras prioritarias: ${evaluacion.mejoras.join(' | ')}` : '',
                          Array.isArray(evaluacion.limites) && evaluacion.limites.length ? `Límites aplicados: ${evaluacion.limites.join(' | ')}` : '',
                          r.error ? `Error registrado: ${r.error}` : ''
                      ].filter(Boolean).join('\n'), y, { altoLinea: 3.7 });
                  } else {
                      y = agregarTextoPDFProfesor(doc, `Análisis automático: ${r.analisisIA || 'Pendiente'}`, y);
                  }

                  doc.setFont('courier', 'normal');
                  doc.setFontSize(7);
                  y = agregarTextoPDFProfesor(doc, `Código entregado:\n${codigo}`, y, { altoLinea: 3.2 });
                  doc.setFont('helvetica', 'normal');
                  doc.setFontSize(8);
                  y = agregarTextoPDFProfesor(doc, `Salida de ejecución:\n${r.salida || evaluacion.ejecucion?.salida || 'Sin salida registrada'}`, y, { altoLinea: 3.6 });

                  if (mensajes.length) {
                      doc.setFont('helvetica', 'bold');
                      y = agregarTextoPDFProfesor(doc, `Tutor IA (${mensajes.length} mensajes)`, y);
                      doc.setFont('helvetica', 'normal');
                      mensajes.forEach((mensaje, mensajeIndice) => {
                          y = agregarTextoPDFProfesor(
                              doc,
                              `${mensajeIndice + 1}. ${mensaje.rol === 'student' ? 'Estudiante' : 'Tutor IA'}: ${mensaje.texto || 'Sin texto'}`,
                              y,
                              { margen: 18, ancho: 178, altoLinea: 3.6 }
                          );
                      });
                  } else {
                      y = agregarTextoPDFProfesor(doc, 'Tutor IA: sin consultas guardadas.', y);
                  }
                  y = agregarAnalistaViabilidadExcelenciaPDF(doc, r.analista, y);
                  y += 2;
                  doc.line(14, y, 196, y);
              });
          });

          const cantidadPaginas = doc.internal.getNumberOfPages();
          for (let pagina = 1; pagina <= cantidadPaginas; pagina += 1) {
              doc.setPage(pagina);
              doc.setFont('helvetica', 'normal');
              doc.setFontSize(7.5);
              doc.setTextColor(90);
              doc.text(`IPEM 146 · ${grupo}`, 14, 9);
              const pie = `Página ${pagina} de ${cantidadPaginas} · Emitido ${fechaEmision}`;
              doc.text(pie, 196 - doc.getTextWidth(pie), 290);
              doc.setTextColor(0);
          }
          guardarPDFProfesor(doc, `Informe_completo_${curso}_division_${division}_turno_${turno}`);
      }

      async function exportarResultadosPDF() {
          if (!window.jspdf?.jsPDF) {
              alert('No se pudo cargar el generador de PDF. Verificá la conexión a Internet e intentá nuevamente.');
              return;
          }
          const { jsPDF } = window.jspdf;
          const doc = new jsPDF();
          const nombre = document.getElementById('studentName').value.trim() || 'Estudiante Sin Nombre';
          const curso = document.getElementById('studentCourse').value.trim() || 'Sin Curso';
           const division = document.getElementById('studentDivision').value.trim() || 'Sin División';
          const turno = document.getElementById('studentTurno').value.trim() || 'Sin Turno';

          doc.setFontSize(16);
          doc.text("IPEM 146 - Reporte de Evaluaciones JavaScript", 14, 20);
          doc.setFontSize(10);
          doc.text(`Alumno: ${nombre} | Curso: ${curso} | División: ${division} | Turno: ${turno}`, 14, 28);
          doc.text(`Cambios de pestaña registrados: ${totalSalidasPestana}`, 14, 34);
          doc.text(`Fecha de Emisión: ${new Date().toLocaleString()}`, 14, 40);
          doc.line(14, 43, 196, 43);

          let yPos = 50;
          const asegurarEspacioPDF = (altoNecesario = 10) => {
              if (yPos + altoNecesario > 280) {
                  doc.addPage();
                  yPos = 20;
              }
          };
          const actividadesEvaluadasPDF = seccionesData.map(sec => {
              const detalleNota = obtenerNotaVigenteModuloEstudiante(sec.id);
              return {
                  titulo: sec.title,
                  nota: detalleNota.nota,
                  notaAutomatica: detalleNota.notaAutomatica,
                  corregida: detalleNota.corregida,
                  ajuste: detalleNota.ajuste
              };
          }).filter(x => x.nota !== null);
          const notasFinales = actividadesEvaluadasPDF.map(x => x.nota);
          const sumaNotasFinales = notasFinales.reduce((a,b)=>a+b,0);
          const promedioFinalNumero = notasFinales.length ? sumaNotasFinales / notasFinales.length : null;
          const promedioFinal = promedioFinalNumero !== null ? promedioFinalNumero.toFixed(2) : 'Sin evaluar';
          const penalizacionRevision = Math.max(0, Math.min(10, Number(revisionSalidasActual.penalizacion) || 0));
          const notaCalculadaNumero = promedioFinalNumero !== null
              ? Math.max(0, promedioFinalNumero - penalizacionRevision)
              : null;
          const notaConfirmadaNumero = revisionSalidasActual.notaConfirmada === true &&
              revisionSalidasActual.notaConfirmadaValor !== null &&
              revisionSalidasActual.notaConfirmadaValor !== ''
              ? Number(revisionSalidasActual.notaConfirmadaValor)
              : NaN;
          const notaDefinitivaNumero = Number.isFinite(notaConfirmadaNumero) ? notaConfirmadaNumero : null;
          const notaCalculadaPDF = notaCalculadaNumero !== null ? notaCalculadaNumero.toFixed(2) : 'Sin evaluar';
          const notaDefinitivaPDF = notaDefinitivaNumero !== null ? notaDefinitivaNumero.toFixed(2) : 'Pendiente';
          doc.setFontSize(11);
          doc.text(`Promedio académico: ${promedioFinal}/10 | Nota calculada: ${notaCalculadaPDF}/10`, 14, yPos);
          yPos += 6;
          doc.text(`Nota definitiva: ${notaDefinitivaNumero !== null ? `${notaDefinitivaPDF}/10 (confirmada por docente)` : 'pendiente de confirmación docente'}`, 14, yPos);
          yPos += 8;

          doc.setFont("helvetica", "bold");
          doc.setFontSize(12);
          doc.text("Desarrollo del cálculo del promedio", 14, yPos);
          yPos += 6;
          doc.setFont("helvetica", "normal");
          doc.setFontSize(9);
          const formulaGeneral = doc.splitTextToSize(
              "Fórmula: suma de las notas vigentes de las actividades evaluadas ÷ cantidad de actividades evaluadas. Cuando existe una corrección docente, esa nota reemplaza a la automática en el promedio. Las actividades pendientes no se incluyen.",
              180
          );
          doc.text(formulaGeneral, 14, yPos);
          yPos += formulaGeneral.length * 4 + 3;

          if (actividadesEvaluadasPDF.length) {
              actividadesEvaluadasPDF.forEach((actividad, indice) => {
                  asegurarEspacioPDF(7);
                  doc.text(
                      `${indice + 1}. ${actividad.titulo}: ${actividad.nota.toFixed(1)}/10${actividad.corregida ? ' (corregida por docente)' : ' (automática)'}`,
                      18,
                      yPos
                  );
                  yPos += 5;
                  if (actividad.corregida) {
                      asegurarEspacioPDF(6);
                      const detalleCorreccion = doc.splitTextToSize(
                          `   Automática: ${actividad.notaAutomatica !== null ? `${actividad.notaAutomatica.toFixed(1)}/10` : 'sin nota'} | Docente: ${actividad.ajuste?.modificadaPor || 'Docente autorizado'}${actividad.ajuste?.motivo ? ` | Observación: ${actividad.ajuste.motivo}` : ''}`,
                          172
                      );
                      doc.text(detalleCorreccion, 18, yPos);
                      yPos += detalleCorreccion.length * 4 + 1;
                  }
              });
              asegurarEspacioPDF(18);
              const operacionSuma = notasFinales.map(n => n.toFixed(1)).join(" + ");
              const lineasSuma = doc.splitTextToSize(
                  `Suma: ${operacionSuma} = ${sumaNotasFinales.toFixed(1)}`,
                  176
              );
              doc.text(lineasSuma, 14, yPos);
              yPos += lineasSuma.length * 4 + 1;
              doc.text(
                  `División: ${sumaNotasFinales.toFixed(1)} ÷ ${actividadesEvaluadasPDF.length} actividades = ${promedioFinal}/10`,
                  14,
                  yPos
              );
              yPos += 7;
          } else {
              doc.text("No hay actividades con una nota vigente para calcular el promedio.", 14, yPos);
              yPos += 7;
          }

          asegurarEspacioPDF(25);
          doc.setFont("helvetica", "bold");
          doc.setFontSize(11);
          doc.text("Revisión docente de cambios de pestaña", 14, yPos);
          yPos += 6;
          doc.setFont("helvetica", "normal");
          doc.setFontSize(9);
          const estadoRevision = revisionSalidasActual.estado || 'pendiente';
          doc.text(`Estado: ${estadoRevision} | Penalización: -${penalizacionRevision.toFixed(1)} puntos`, 14, yPos);
          yPos += 5;
          const motivoRevision = revisionSalidasActual.motivo || 'Sin fundamento docente registrado.';
          const lineasMotivoRevision = doc.splitTextToSize(`Fundamento: ${motivoRevision}`, 180);
          doc.text(lineasMotivoRevision, 14, yPos);
          yPos += lineasMotivoRevision.length * 4 + 1;
          doc.text(
              `Cálculo provisorio: ${promedioFinal}/10 - ${penalizacionRevision.toFixed(1)} = ${notaCalculadaPDF}/10`,
              14,
              yPos
          );
          yPos += 5;
          doc.text(
              notaDefinitivaNumero !== null
                  ? `Confirmación docente: nota definitiva ${notaDefinitivaPDF}/10${revisionSalidasActual.notaModificadaManualmente === true ? ' (modificada por el docente)' : ''}`
                  : 'Confirmación docente: pendiente; este cálculo todavía no es una nota definitiva.',
              14,
              yPos
          );
          yPos += 7;

          asegurarEspacioPDF(12);
          doc.setFont("helvetica", "bold");
          doc.text(`Detalle de cambios de pestaña (${eventosSalidasPestana.length})`, 14, yPos);
          yPos += 6;
          doc.setFont("helvetica", "normal");
          if (eventosSalidasPestana.length) {
              eventosSalidasPestana.forEach(evento => {
                  const salida = evento.salidaEn ? new Date(evento.salidaEn).toLocaleString() : 'Sin fecha';
                  const duracion = evento.duracionSegundos === null || evento.duracionSegundos === undefined
                      ? 'duración no registrada'
                      : `${evento.duracionSegundos} segundos`;
                  const justificacion = evento.justificacion
                      ? `${evento.justificacion.motivo}: ${evento.justificacion.detalle}`
                      : 'Sin justificación';
                  const textoEvento =
                      `Evento ${evento.numero || ''}: ${salida} | Actividad ${evento.seccion || 'sin identificar'} | ${duracion}. Justificación: ${justificacion}`;
                  const lineasEvento = doc.splitTextToSize(textoEvento, 176);
                  asegurarEspacioPDF(lineasEvento.length * 4 + 3);
                  doc.text(lineasEvento, 18, yPos);
                  yPos += lineasEvento.length * 4 + 2;
              });
          } else {
              doc.text("No se registraron cambios de pestaña.", 18, yPos);
              yPos += 6;
          }

          asegurarEspacioPDF(12);
          doc.line(14, yPos, 196, yPos);
          yPos += 7;

          seccionesData.forEach((sec, idx) => {
              asegurarEspacioPDF(20);

              const res = historialResultados[sec.id] || {};
              const detalleNotaModulo = obtenerNotaVigenteModuloEstudiante(sec.id);
              const notaFinalModulo = res.notaFinal ?? res.notaIA;
              const nota = detalleNotaModulo.nota !== null
                  ? `${detalleNotaModulo.nota.toFixed(1)}/10`
                  : 'Pendiente de preguntas';
              const codigo = res.codigo || document.getElementById(`editor-${sec.id}`)?.value || '// Sin código';

              doc.setFontSize(12);
              doc.setFont("helvetica", "bold");
              doc.text(
                  `${sec.title} - ${detalleNotaModulo.corregida ? 'Nota vigente corregida por docente' : 'Calificación automática del módulo'}: ${nota}`,
                  14,
                  yPos
              );
              yPos += 6;

              if (detalleNotaModulo.corregida) {
                  doc.setFontSize(9);
                  doc.setFont("helvetica", "normal");
                  const fechaCorreccion = formatearFechaNotaDocente(detalleNotaModulo.ajuste?.modificadaEn);
                  const datosCorreccion = [
                      `Calificación automática anterior: ${detalleNotaModulo.notaAutomatica !== null ? `${detalleNotaModulo.notaAutomatica.toFixed(1)}/10` : 'sin calificación'}`,
                      `Docente: ${detalleNotaModulo.ajuste?.modificadaPor || 'Docente autorizado'}`,
                      fechaCorreccion ? `Fecha: ${fechaCorreccion}` : '',
                      detalleNotaModulo.ajuste?.motivo ? `Observación: ${detalleNotaModulo.ajuste.motivo}` : ''
                  ].filter(Boolean).join(' | ');
                  const lineasCorreccion = doc.splitTextToSize(datosCorreccion, 180);
                  asegurarEspacioPDF(lineasCorreccion.length * 4 + 2);
                  doc.text(lineasCorreccion, 14, yPos);
                  yPos += lineasCorreccion.length * 4 + 2;
              }

              if (res.notaCodigo !== undefined || res.notaPreguntas !== undefined) {
                  doc.setFontSize(9);
                  doc.setFont("helvetica", "normal");
                  const desglose = `Código (70%): ${res.notaCodigo ?? 'Pendiente'}/10 | Preguntas (30%): ${res.notaPreguntas ?? 'Pendiente'}/10`;
                  doc.text(desglose, 14, yPos);
                  yPos += 5;
                  if (res.notaCodigo !== undefined && res.notaPreguntas !== undefined && notaFinalModulo !== undefined) {
                      const formulaModulo =
                          `Cálculo: (${res.notaCodigo} × 0,70) + (${res.notaPreguntas} × 0,30) = ${notaFinalModulo}/10`;
                      doc.text(formulaModulo, 14, yPos);
                      yPos += 5;
                  }
              }

              if (res.evaluacionCodigo?.criterios?.length) {
                  doc.setFontSize(8);
                  doc.setFont("helvetica", "normal");
                  const criteriosPDF = res.evaluacionCodigo.criterios
                      .map(c => `${c.nombre}: ${c.puntos}/${c.peso} (${c.estado})`)
                      .join(" | ");
                  const lineasEvaluacion = doc.splitTextToSize(`Evaluación automática orientativa: ${res.evaluacionCodigo.nota}/10\n${criteriosPDF}`, 180);
                  asegurarEspacioPDF(lineasEvaluacion.length * 4 + 2);
                  doc.text(lineasEvaluacion, 14, yPos);
                  yPos += lineasEvaluacion.length * 4 + 2;
              }

              doc.setFontSize(9);
              doc.setFont("courier", "normal");
              
              const codeLines = doc.splitTextToSize(`Código:\n${codigo}`, 180);
              asegurarEspacioPDF(Math.min(codeLines.length * 4 + 4, 250));
              doc.text(codeLines, 14, yPos);
              yPos += (codeLines.length * 4) + 4;

              if (res.analista) {
                  doc.setFont("helvetica", "italic");
                  doc.text(`Analista: Viabilidad [${res.analista.viabilidad}] | Excelencia [${res.analista.excelencia}]`, 14, yPos);
                  yPos += 6;
              }

              yPos += 4;
          });

          const pdfBytes = doc.output('arraybuffer');
          
          try {
              if (!window.PDFLib?.PDFDocument) throw new Error('pdf-lib no disponible');
              const pdfDoc = await PDFLib.PDFDocument.load(pdfBytes);
              const protectedPdfBytes = await pdfDoc.save();
              const blob = new Blob([protectedPdfBytes], { type: 'application/pdf' });
              const link = document.createElement('a');
              link.href = URL.createObjectURL(blob);
              link.download = `Reporte_JS_${nombre.replace(/\s+/g, '_')}.pdf`;
              link.click();
              setTimeout(() => URL.revokeObjectURL(link.href), 1000);
          } catch (e) {
              doc.save(`Reporte_JS_${nombre.replace(/\s+/g, '_')}.pdf`);
          }
      }
