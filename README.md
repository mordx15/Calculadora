# 🧮 Calculadora básica

Calculadora web hecha con **HTML, CSS y JavaScript puro**, sin librerías ni frameworks. Permite realizar las cuatro operaciones básicas, corregir errores de escritura y usar tanto el mouse como el teclado.

## ✨ Características

- Suma, resta, multiplicación y división
- Soporte para números decimales
- Botón **C** para borrar todo
- Botón **←** para borrar el último carácter
- Manejo de errores: muestra `Error` si la operación es inválida (por ejemplo `5++` o `2/`)
- Redondeo a 10 decimales para evitar resultados como `0.30000000000000004`
- Soporte de teclado
- Diseño adaptable (responsive) con CSS Grid

## 📁 Estructura del proyecto

```
calculadora/
├── index.html   # Estructura de la página
├── style.css    # Estilos y diseño
└── script.js    # Lógica de la calculadora
```

## 🚀 Cómo usarla

1. Clona el repositorio:
   ```bash
   git clone https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   ```
2. Entra en la carpeta del proyecto.
3. Abre `index.html` en tu navegador (doble clic o clic derecho → *Abrir con*).

No necesita instalación ni servidor: funciona directamente en el navegador.

## ⌨️ Atajos de teclado

| Tecla | Acción |
|-------|--------|
| `0-9`, `.` | Escribe el número |
| `+` `-` `*` `/` | Operadores |
| `Enter` o `=` | Calcular |
| `Backspace` | Borrar el último carácter |
| `Esc` | Borrar todo |

## ⚙️ Cómo funciona

El proyecto separa las tres responsabilidades de una página web:

- **HTML**: define la pantalla (`<input readonly>`) y los botones. Cada botón llama a una función de JavaScript mediante `onclick`.
- **CSS**: usa `display: grid` con 4 columnas iguales. El botón `=` ocupa dos filas (`grid-row: span 2`) y el `0` ocupa dos columnas (`grid-column: span 2`).
- **JavaScript**: cuatro funciones principales.

| Función | Qué hace |
|---------|----------|
| `agregar(valor)` | Añade un carácter al final de la pantalla |
| `borrar()` | Vacía la pantalla |
| `borrarUltimo()` | Quita el último carácter con `slice(0, -1)` |
| `calcular()` | Valida y evalúa la operación |

### Sobre el cálculo y la seguridad

En lugar de usar `eval()` directamente, `calcular()` primero valida con una expresión regular que la pantalla solo contenga números, punto y los cuatro operadores. Después evalúa con `Function()` en modo estricto, dentro de un bloque `try/catch` para capturar expresiones incompletas.

## 🛠️ Tecnologías

- HTML5
- CSS3 (Grid)
- JavaScript (ES6)

## 📚 Qué se aprende con este proyecto

- Manipulación del DOM con `getElementById`
- Manejo de eventos con `onclick` y `addEventListener`
- Métodos de cadenas como `slice`
- Validación con expresiones regulares
- Manejo de errores con `try/catch`
- Diseño de cuadrículas con CSS Grid

## 👤 Autores

- **Samuel**

## 📄 Licencia

Proyecto con fines educativos. Libre de usar y modificar.
