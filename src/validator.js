const validator = {
  isValid: function (valor) {
    let sumatoria = 0;
    let requiereValidar = false;

    for (let n = valor.length - 1; n >= 0; n--) {
      let digito = parseInt(valor[n]);

      if (requiereValidar) {
        digito = (digito * 2);
      }

      if (digito > 9) {
        digito = digito - 9;
      }

      sumatoria += digito;
      requiereValidar = !requiereValidar;
    }

    return sumatoria % 10 == 0;
  },
  maskify: function (numero_oculto) {
    let mascara = [];

    for (let i = 0; i < numero_oculto.length; i++) {
      if (i < numero_oculto.length - 4) {
        mascara[i] = "#";
      } else {
        mascara[i] = numero_oculto[i];
      }
    }
    
    return mascara.join("");
  }
}

export default validator;

