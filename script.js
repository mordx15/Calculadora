// Guardamos la referencia a la pantalla una sola vez.
const pantalla = document.getElementById("pantalla");

// Añade un carácter al final de la pantalla.
function agregar(valor) {
  if (pantalla.value === "Error") {
    pantalla.value = "";
  }
  pantalla.value += valor;
}

// Borra todo el contenido (botón C).
function borrar() {
  pantalla.value = "";
}

// Borra el último carácter (botón ←).
function borrarUltimo() {
  pantalla.value = pantalla.value.slice(0, -1);
}

// Evalúa la operación escrita en la pantalla.
function calcular() {
  const expresion = pantalla.value.trim();
  if (expresion === "") {
    return;
  }

  // Solo se permiten dígitos, punto, espacios y los cuatro operadores.
  if (!/^[0-9+\-*/.\s]+$/.test(expresion)) {
    pantalla.value = "Error";
    return;
  }

  try {
    const resultado = Function('"use strict"; return (' + expresion + ")")();
    if (Number.isFinite(resultado)) {
      pantalla.value = String(Math.round(resultado * 1e10) / 1e10);
    } else {
      pantalla.value = "Error";
    }
  } catch (e) {
    pantalla.value = "Error";
  }
}

// Permite usar el teclado además de los botones.
document.addEventListener("keydown", function (evento) {
  if (/^[0-9+\-*/.]$/.test(evento.key)) {
    agregar(evento.key);
  } else if (evento.key === "Enter" || evento.key === "=") {
    evento.preventDefault();
    calcular();
  } else if (evento.key === "Backspace") {
    borrarUltimo();
  } else if (evento.key === "Escape") {
    borrar();
  }
});
