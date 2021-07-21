import validator from "./validator.js";

let inputNombre = document.querySelector("#input_nombre");
let inputNumero = document.querySelector("#input_numero");

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
