function validarFormulario(){

    $('.alerta__error').remove();
    
    let nombre = $('#nombre').val();
        apellido = $('#apellido').val();
        email = $('#email').val();
        telefono = $('#telefono').val();
        mensaje = $('#mensaje').val();

    if(nombre=="" || nombre==null){
        errorColor("nombre");
        errorAlert(" Campo obligatorio");
        return false;
    }else{
        let expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(nombre)){
            errorColor("nombre");
            errorAlert(" No se permiten caracteres especiales o numeros");
            return false;
        }
    }

    if(apellido=="" || apellido==null){
        errorColor("apellido");
        errorAlert(" Campo obligatorio");
        return false;
    }else{
        let expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(apellido)){
            errorColor("apellido");
            errorAlert(" No se permiten caracteres especiales o numeros");
            return false;
        }
    }
    
    if(email=="" || email==null){
        errorColor("email");
        errorAlert(" Campo obligatorio");
        return false;
    }else{
        let expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if(!expresion.test(email)){
            errorColor("email");
            errorAlert(" Por favor ingrese un email valido");
            return false;
        }
    }

    if(telefono=="" || telefono==null){
        errorColor("telefono");
        errorAlert(" Campo obligatorio");
        return false;
    }else{
        let expresion = /^\d{10}$/;
        if(!expresion.test(telefono)){
            errorColor("telefono");
            errorAlert(" No se permite letras ni caracteres especiales, solo 10 dig.");
            return false;
        }
    }


    if(mensaje=="" || mensaje==null){
        errorColor("mensaje");
        errorAlert(" Campo obligatorio");
        return false;
    }else{
        let expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(mensaje)){
            errorColor("mensaje");
            errorAlert(" No se permite letras ni caracteres especiales");
            return false;
        }
    }

    $('#formulario').submit();
        return true;
   
}

$('#nombre').focus(function(){
    $('.alerta__error').remove();
    goodColor('nombre');
});

$('textarea').focus(function(){
    $('.alerta__error').remove();
    goodColor('mensaje');
});

function goodColor(data){
    $('#' + data).css({
        border: "2px solid #eda121"
    });
}

function errorColor(data){
    $('#' + data).css({
        border: "2px solid #12120f"
    });
} 

function errorAlert(texto){
    $('#nombre').before('<p class="alerta__error">Error :' + texto 