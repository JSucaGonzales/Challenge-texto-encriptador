const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const info = document.querySelector(".informacion"); // Seleccionar el elemento h6

/* Función para encriptar el texto */
function botonEncriptar() {
    const textoIngresado = textArea.value;
    
    // Limpiar mensaje anterior en h6
    info.textContent = "Solo letras minúsculas y sin acento";
    info.style.color = "#495057"; // Color original

    if (!validateInput(textoIngresado)) {
        info.textContent = "Error: El texto contiene mayúsculas o acentos. Por favor, ingrese solo letras minúsculas y sin acentos.";
        info.style.color = "red"; // Cambiar el color del texto a rojo para indicar un error
        return; // Evita que se encripte si hay mayúsculas o acentos.
    }
    
    const textoEncriptado = encriptar(textoIngresado);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

/* Validación de mayúsculas y acentos */
function validateInput(text) {
    const regex = /^[a-z\s]+$/; // Permite solo letras minúsculas y espacios
    return regex.test(text);
}

/* Función para encriptar el texto */
function encriptar(fraseEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (fraseEncriptado.includes(matrizCodigo[i][0])) {
            fraseEncriptado = fraseEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return fraseEncriptado;
}

/* Evento para limpiar mensaje de error */
textArea.addEventListener('input', function() {
    if (info.style.color === "red") {
        info.textContent = "Solo letras minúsculas y sin acento";
        info.style.color = "#495057"; // Restaurar el color original
    }
});

/* Función para desencriptar el texto */
function botonDesencriptar() {
    const textoIngresado = textArea.value;
    
    // Validar el texto antes de desencriptar
    if (!validateInput(textoIngresado)) {
        info.textContent = "Error: El texto contiene mayúsculas o acentos. Por favor, ingrese solo letras minúsculas y sin acentos.";
        info.style.color = "red"; // Mostrar error si los datos son incorrectos
        return; // Evita que se desencripte si el texto es incorrecto
    }

    const textoDesencriptado = desencriptar(textoIngresado);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

/* Función para desencriptar el texto */
function desencriptar(fraseDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (fraseDesencriptado.includes(matrizCodigo[i][1])) {
            fraseDesencriptado = fraseDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return fraseDesencriptado;
}

/* Función para copiar el texto en el portapapeles */
function botonCopiar() {
    const textoACopiar = mensaje.value;
    navigator.clipboard.writeText(textoACopiar);
    alert("Texto copiado");
}

