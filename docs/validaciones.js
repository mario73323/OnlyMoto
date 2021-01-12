function validarinputs(){
    var apellidos = document.getElementById("apellidos").value;
    var nombres = document.getElementById("nombres").value;
    var contrasena = document.getElementById("clave").value;
    var contrasena2 = document.getElementById("conf-clave").value;
    var correo = document.getElementById("correos").value;


    if( nombres == null || nombres.length == 0 || /^\s+$/.test(nombres) ) {
        alert("Ingresa un nombre al menos");
        return false;
    }
    if( apellidos == null || apellidos.length == 0 || /^\s+$/.test(apellidos) ) {
        alert("Ingresa un apellido al menos");
        return false;
    }
    if( correo == null || correo.length == 0 || /^\s+$/.test(correo) ) {
        alert("Ingresa una direccion de correo");
        return false;
    }
    else if( isEmail(correo)) {
        alert('¡Ingrese un correo valido!');
        return false;
    }
    
    if( contrasena == null || contrasena.length == 0 || /^\s+$/.test(contrasena) ) {
        alert("Ingresa una contraseña");
        return false;
    }

    if( contrasena2 == null || contrasena2.length == 0 || /^\s+$/.test(contrasena2) ) {
        alert("Confirma tu contraseña");
        return false;
    }
    else if(contrasena2!==contrasena){
        alert("¡Las contraseñas no coinciden! Vuelva a intentarlo");
        return false;
    }
   
    var terminos = document.getElementsByName("check");
    var seleccionado = false;
    for(var i=0; i<terminos.length; i++) {
        if(terminos[i].checked) {
            seleccionado = true;
            break;
        }
    }       
            if(!seleccionado) {
                alert("Debes aceptar los terminos y condiciones");
                return false;
            }
    else {
        alert("Formulario enviado");
        return true;
    }
}

function isEmail(correo) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[azA-Z]{2,}))$/.test(correo);
   }
