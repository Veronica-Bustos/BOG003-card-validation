import validator from "./validator.js";
//El document.querySelector son selectores del CSS y su parametro es el selector entre comillas
// y nos devuelve un elemento html.

//instanciar un elemento de HTML para darle interactividad.

let inputNombre = document.querySelector("#input_nombre");
let inputNumero = document.querySelector("#input_numero");

//Son los datos que se muestran en la tarjeta segun lo ingresado por el usuario.
let divNombre = document.querySelector("#nombre");
let divNumero = document.querySelector("#numero");

let formulario = document.querySelector("#formulario");

inputNombre.oninput = function (e) {
  divNombre.innerText = e.target.value;
};

inputNumero.oninput = function (e) {
  divNumero.innerText = e.target.value;
};

formulario.onsubmit = function (e) {
  e.preventDefault();

  alert(validator.isValid(inputNumero.value) ? "Es valido" : "No es valido");
};
