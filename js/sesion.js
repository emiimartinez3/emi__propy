const formulario = document.getElementById("form__ini");

const inputs = document.querySelectorAll("#form__ini input");

const expresiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/
}

const campos = {
    email: false,
    password: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
       case "email":
          formCorrecto (expresiones.email, e.target, "email");
       break;
       case "password":
          formCorrecto (expresiones.password, e.target, "password");
       break;
       }
    }

const formCorrecto = (expresion, input, campo) => {
        if(expresion.test(input.value)){
           document.getElementById(`grupo__${campo}`).classList.remove("form__grupo-mal");
           document.getElementById(`grupo__${campo}`).classList.add("form__grupo-bien");
           campos[campo] = true;
        } else {
           document.getElementById(`grupo__${campo}`).classList.add("form__grupo-mal");
           document.getElementById(`grupo__${campo}`).classList.remove("form__grupo-bien");
           campos[campo] = false;
        }
     }

inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
     });