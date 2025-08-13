
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registroForm");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const password = document.getElementById("contraseña");

// FUNCIÓN ERROR (IMPORT):
    const mostrarError = (input, mensaje) => {
    // sube y consigue el elemento arriba del input, es decir todo el div de form-group
        const formGroup = input.parentElement;
    // busca el campo con la calase error es decir el html el small.
        const error = formGroup.querySelector(".error");
    // Escribe el mensjae dentro dle luagr encotnrado osea small
        error.textContent = mensaje;
    // cambia el estilo segun si hay mensaje o no.
        input.style.borderColor = mensaje ? "red" : "#ccc";
    };

    //FUNCION VALIDAR EL CAMPO NOMBRE (IMPORT)
    const validarNombre = () => {
        // trim() es un método de cadenas de texto que se utiliza para eliminar
        //  los espacios en blanco al principio y al final de una cadena. 
        if (nombre.value.trim() === ""){
            mostrarError(nombre, "El nombre es obligatorio");
            return false;
        }
        mostrarError(nombre,"");
        return true;
    };
    // FUNCION VALIDAR EMAIL (IMPORTANTE)
    const validarEmail = () =>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //.test valida que el email contenga los carateres dados la linea antes
        if(!regex.test(email.value.trim())){
            mostrarError(email, "Email invalido");
            return false;
        }

        mostrarError(email, "");
        return true;
    };

    // FUNCION VALIDAR CONSTRASEÑA (IMPORTANTE)
    const validarPassword = () => {

        if (password.value.length < 8) {
            mostrarError(password, "Minimo 8 caracteres");
            return false;
        }
        mostrarError(password, "");
        return true;
    };

    // VALIDACIÓN EN TIEMPO REAL

    nombre.addEventListener("input", validarNombre);
    nombre.addEventListener("input", validarEmail);
    nombre.addEventListener("input", validarPassword);

    // VALIDACIÓN AL ENVIAR
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if(validarNombre() & validarEmail() & validarPassword()){
            alert("Formulario enviado con éxito 🎉✨");
            form.reset();
        }
    });

});
