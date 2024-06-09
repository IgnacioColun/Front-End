function validar() {
    var retorno_usuario = validar_usuario();
    var retorno_contraseña = validar_contraseña();
    var retorno_direccion = validar_direccion();
    var retorno_telefono = validar_telefono();
    var retorno_url = validar_url();
    var retorno_aficiones = validar_aficiones();
    var retorno_confirmacion = validar_confirmacion();
    var retorno_comuna = validar_comuna();

    return retorno_usuario && retorno_contraseña && retorno_confirmacion && retorno_direccion && retorno_telefono && retorno_url && retorno_aficiones && retorno_comuna;
}

//Validar Usuario

function validar_usuario() {
    var input_usuario = document.getElementById("input-usuario");
    var div_error_usuario = document.getElementById("error-usuario");
    var usuario = input_usuario.value;

    if (usuario === "") {
        div_error_usuario.innerHTML = "El Nombre de usuario es obligatorio";
        div_error_usuario.className = "text-intense-danger mt-1";
        return false;
    }
    if (usuario.length < 5 || usuario.length > 10) {
        div_error_usuario.innerHTML = "El Nombre de usuario debe tener entre 5 y 10 caracteres";
        div_error_usuario.className = "text-intense-danger mt-1";
        return false;
    }
    if (!isNaN(usuario.charAt(0))) {
        div_error_usuario.innerHTML = "El Nombre de usuario debe comenzar con una letra";
        div_error_usuario.className = "text-intense-danger mt-1";
        return false;
    }
    for (var i = 0; i < usuario.length; i++) {
        var char = usuario.charAt(i);
        if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9'))) {
            div_error_usuario.innerHTML = "El Nombre de usuario no puede contener caracteres especiales";
            div_error_usuario.className = "text-intense-danger mt-1";
            return false;
        }
    }
    div_error_usuario.innerHTML = "";
    return true;
}

//Validar contraseña

function validar_contraseña() {
    var input_contraseña = document.getElementById("input-contraseña");
    var div_error_contraseña = document.getElementById("error-contraseña");
    var contraseña = input_contraseña.value;
    var usuario = document.getElementById("input-usuario").value;
    var tieneLetra = false;
    var tieneDigito = false;

    if (contraseña == "") {
        div_error_contraseña.innerHTML = "La contraseña es obligatorio";
        div_error_contraseña.className = "text-intense-danger mt-1";
        return false;
    }
    if (contraseña.length < 3 || contraseña.length > 6) {
        div_error_contraseña.innerHTML = "La contraseña debe tener entre 3 y 6 caracteres";
        div_error_contraseña.className = "text-intense-danger mt-1";
        return false;
    }
    for (var i = 0; i < contraseña.length; i++) {
        var char = contraseña.charAt(i);
        if (isNaN(char)) {
            tieneLetra = true;
        } else {
            tieneDigito = true;
        }
    }
    if (!tieneLetra || !tieneDigito) {
        div_error_contraseña.innerHTML = "La contraseña debe contener al menos una letra y un dígito";
        div_error_contraseña.className = "text-intense-danger mt-1";
        return false;
    }
    if (contraseña.includes(usuario)) {
        div_error_contraseña.innerHTML = "La contraseña no puede contener el nombre de usuario";
        div_error_contraseña.className = "text-intense-danger mt-1";
        return false;
    }
    div_error_contraseña.innerHTML = "";
    return true;
}

//Validar confirmacion

function validar_confirmacion() {
    var input_contraseña = document.getElementById("input-contraseña");
    var input_confirmar_contraseña = document.getElementById("confirmar-contraseña");
    var div_error_confirmacion = document.getElementById("error-confirmacion");

    var contraseña = input_contraseña.value;
    var confirmar_contraseña = input_confirmar_contraseña.value;

    if (contraseña !== confirmar_contraseña) {
        div_error_confirmacion.innerHTML = "Las contraseñas no coinciden";
        div_error_confirmacion.className = "text-intense-danger mt-1";
        return false;
    }
    div_error_confirmacion.innerHTML = "";
    return true;
}

//Validar Direccion

function validar_direccion() {
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;
    if (direccion == "") {
        div_error_direccion.innerHTML = "La direccion es obligatorio";
        div_error_direccion.className = "text-intense-danger mt-1";
        return false;
    }   else {
        div_error_direccion.innerHTML = "";
        return true
    }
}

//Validar Url

function validar_url() {
    var input_website = document.getElementById("input-website");
    var div_error_sitio = document.getElementById("error-sitio");
    var url = input_website.value;

    if (!(url.startsWith("http://") || url.startsWith("https://"))) {
        div_error_sitio.innerHTML = "La url debe comenzar con http:// o https://"
        div_error_sitio.className = "text-intense-danger mt-1";
        return false;
    }
    if (url.indexOf(".", url.indexOf("//") + 2) == -1) {
        div_error_sitio.innerHTML = "La url debe contener al menos un punto despues del dominio"
        div_error_sitio.className = "text-intense-danger mt-1";
        return false;
    }
    div_error_sitio.innerHTML = "";
    return true; 

}

//Validar Telefono

function validar_telefono() {
    var input_telefono = document.getElementById("input-telefono");
    var div_error_telefono = document.getElementById("error-telefono");
    var telefono = input_telefono.value;

    if (telefono === "") {
        div_error_telefono.innerHTML = "El número de teléfono es obligatorio";
        div_error_telefono.className = "text-intense-danger mt-1";
        return false;
    }
    if (telefono.charAt(0) !== '+') {
        div_error_telefono.innerHTML = "El número de teléfono debe comenzar con +";
        div_error_telefono.className = "text-intense-danger mt-1";
        return false;
    }
    for (var i = 1; i < telefono.length; i++) {
        var char = telefono.charAt(i);
        if (char !== ' ' && isNaN(char)) {
            div_error_telefono.innerHTML = "El número de teléfono solo puede contener dígitos y espacios";
            div_error_telefono.className = "text-intense-danger mt-1";
            return false;
        }
    }
    div_error_telefono.innerHTML = "";
    return true;
}

//Aficiones 

function validar_aficiones() {
    var lista_hobbies = document.getElementById("lista-hobbies").children;
    var div_error_aficiones = document.getElementById("error-aficiones");

    if (lista_hobbies.length < 2) {
        div_error_aficiones.innerHTML = "Debe ingresar al menos 2 aficiones";
        div_error_aficiones.className = "text-intense-danger mt-1";
        return false;
    }

    div_error_aficiones.innerHTML = "";
    return true;
}

document.getElementById('añadir-hobbie').addEventListener('click', function() {
    var hobby_Input = document.getElementById('input-aficiones');
    var hobby = hobby_Input.value.trim();
    if (hobby) {
        var hobbyLista = document.getElementById('lista-hobbies');
        var li = document.createElement('li');
        li.textContent = hobby;
        hobbyLista.appendChild(li);
        hobby_Input.value = '';
        document.getElementById('error-aficiones').innerHTML = ''; // Clear error message
    }
});

// Validar comuna

function validar_comuna() {
    var seleccion_comuna = document.getElementById("comuna");
    var div_error_comuna = document.getElementById("error-comuna");

    if (seleccion_comuna.value == "") {
        div_error_comuna.innerHTML = "Debe seleccionar una comuna";
        div_error_comuna.className = "text-intense-danger mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}
