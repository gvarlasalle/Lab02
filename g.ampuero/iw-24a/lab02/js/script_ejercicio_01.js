// Definir la función cambiarTipoTarjeta
function cambiarTipoTarjeta(){
    console.log("Función cambiarTipoTarjeta llamada"); // Asegúrate de que la función se esté llamando correctamente

    var valor = document.getElementById("cboTipoTarjeta").value;
    console.log("Valor seleccionado:", valor); // Asegúrate de que el valor seleccionado se esté capturando correctamente

    var inputsText = document.querySelectorAll("input[type=text]");
    var inputsPassword = document.querySelectorAll("input[type=password]");
    var tarjetaDNI = document.querySelectorAll(".tarjeta_dni");

    console.log("Inputs text:", inputsText); // Asegúrate de que los inputs de texto se estén seleccionando correctamente
    console.log("Inputs password:", inputsPassword); // Asegúrate de que los inputs de password se estén seleccionando correctamente
    console.log("Tarjetas DNI:", tarjetaDNI); // Asegúrate de que las tarjetas DNI se estén seleccionando correctamente

    for (var i = 0; i < inputsText.length; i++) {
        inputsText[i].value = '';
    }
    for (var i = 0; i < inputsPassword.length; i++) {
        inputsPassword[i].value = '';
    }
    for (var i = 0; i < tarjetaDNI.length; i++) {
        tarjetaDNI[i].style.display = 'none';
    }

    switch(valor){
        case '02':
            document.getElementById('txtNumeroTarjeta').style.display = 'block';
            document.getElementById('trNumeroTarjeta').style.display = 'block';
            document.getElementById('tipoNumDoc').style.display = 'block';
            document.getElementById('txtNumeroTarjeta').value = '4214';
            document.getElementById('txtPassword').maxLength = '6';
            document.getElementById('lblDigitosClave').innerHTML = '06';
            document.getElementById('ind_long_clave').value = '6';
            document.getElementById('txtNumeroTarjeta').focus();
            break;
        case '01':
            document.getElementById('txtDNI').style.display = 'block';
            document.getElementById('trDNI').style.display = 'block';
            document.getElementById('tipoNumDoc').style.display = 'none';
            document.getElementById('txtPassword').maxLength = '6';
            document.getElementById('lblDigitosClave').innerHTML = '06';
            document.getElementById('ind_long_clave').value = '6';
            document.getElementById('txtDNI').focus();
            break;
    }
}

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    // Llamar a la función al cargar la página para configurar el estado inicial
    cambiarTipoTarjeta();

    // Agregar un listener para el cambio en el select
    document.getElementById("cboTipoTarjeta").addEventListener("change", cambiarTipoTarjeta);
});

function evalRanTable(valor) {
    var longitud = parseInt(document.getElementById("ind_long_clave").value);
    var txtPassword = document.getElementById("txtPassword");

    if (txtPassword.value.length < longitud) {
        txtPassword.value += valor;
    }
}

function cambiarCaptcha() {
    // Array con los nombres de las imágenes de captcha
    var imagenes = ['captcha1.png', 'captcha2.png', 'captcha3.png', 'captcha4.png'];

    // Seleccionar aleatoriamente una imagen del array
    var randomIndex = Math.floor(Math.random() * imagenes.length);
    var randomImage = imagenes[randomIndex];

    // Obtener el elemento de la imagen y cambiar su atributo src
    var captchaImg = document.getElementById("captcha");
    captchaImg.src = "imagenes/" + randomImage;
}

window.onload = function() {
    generarNumerosAleatorios();
};

function generarNumerosAleatorios() {
    // Array con los números del 0 al 9
    var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    // Obtener el contenedor de los botones
    var contenedorBotones = document.getElementById("botones-clave");

    // Array para almacenar los botones
    var botones = contenedorBotones.querySelectorAll(".boton-clave");

    // Array para almacenar los números generados aleatoriamente
    var numerosAleatorios = [];

    // Generar números aleatorios y asignarlos a los botones
    for (var i = 0; i < botones.length - 1; i++) { // Excluimos el último botón (limpiar)
        var randomIndex = Math.floor(Math.random() * numeros.length);
        var numeroAleatorio = numeros.splice(randomIndex, 1)[0];
        botones[i].textContent = numeroAleatorio;
        botones[i].setAttribute("onclick", "evalRanTable('" + numeroAleatorio + "')");
    }
}

function limpiarTextbox() {
    document.getElementById("txtPassword").value = "";
}

function soloNumeros(){ 
	var key=window.event.keyCode;//codigo de tecla. 
	if (key < 48 || key > 57){//si no es numero  
		window.event.keyCode=0;//anula la entrada de texto. 
	}
} 
/*
	Function encargada de validar que solo se ingresen n�meros en el
	campo de texto que llama a la funci�n, debe colocarse en el onkeypress 
	del control.FUNCIONA EN TODOS LOS BROWSER
*/

function soloNumerosAll(e){
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla!=0){ //Teclas especiales en FF retornan 0
	    if (tecla==8) return true;
	   	patron =/\d/
    	te = String.fromCharCode(tecla);
    	return patron.test(te);
    }
} 

function soloNumerosDNI(e){

	if(document.forms[0].cboTipoDoc.value==001){ 
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla!=0){ //Teclas especiales en FF retornan 0
	    if (tecla==8) return true;
	   	patron =/\d/
    	te = String.fromCharCode(tecla);
    	return patron.test(te);
    	}
	  } 
	}

// Función para limpiar el campo txtNumDoc cuando se cambia la opción de cboTipoDoc
function limpiarTxtNumDoc() {
    document.getElementById("txtNumDoc").value = ""; // Limpiar el campo txtNumDoc
}

// Función para ajustar la longitud máxima del campo txtNumDoc según la opción seleccionada
function ajustarLongitudMaxima() {
    // Obtener el valor seleccionado en el campo cboTipoDoc
    var tipoDocumento = document.getElementById("cboTipoDoc").value;
    
    // Definir la longitud máxima predeterminada
    var longitudMaxima = 12; // Valor predeterminado para Pasaporte, C. Extranjeria y RUC
    
    // Verificar la opción seleccionada y ajustar la longitud máxima según corresponda
    if (tipoDocumento === "1") { // DNI
        longitudMaxima = 8;
    } else if (tipoDocumento === "7") { // Pasaporte
        longitudMaxima = 10; // Cambiar la longitud máxima a 10 caracteres
    } else if (tipoDocumento === "3") { // C. Extranjeria
        longitudMaxima = 12; // Cambiar la longitud máxima a 12 caracteres
    } else if (tipoDocumento === "6") { // RUC
        longitudMaxima = 11; // Cambiar la longitud máxima a 11 caracteres
    } else if (tipoDocumento === "") { // "Seleccionar"
        longitudMaxima = 0; // No permitir ingresar nada
    }
    
    // Establecer la longitud máxima del campo txtNumDoc
    document.getElementById("txtNumDoc").maxLength = longitudMaxima;
}

// Llamar a la función ajustarLongitudMaxima cuando se cargue la página y cuando se cambie la opción seleccionada en cboTipoDoc
window.addEventListener("load", ajustarLongitudMaxima);
document.getElementById("cboTipoDoc").addEventListener("change", function() {
    limpiarTxtNumDoc(); // Limpiar el campo txtNumDoc al cambiar la opción seleccionada en cboTipoDoc
    ajustarLongitudMaxima(); // Ajustar la longitud máxima del campo txtNumDoc según la opción seleccionada
});

function Autenticar() {
    // Obtener los valores de los campos del formulario
    var tipoTarjeta = document.getElementById("cboTipoTarjeta").value;
    var numeroTarjeta = document.getElementById("txtNumeroTarjeta").value;
    var clave = document.getElementById("txtPassword").value;
    var captcha = document.getElementById("txtCaptcha").value;
    var tipoDocumento = document.getElementById("cboTipoDoc").value;
    var numDocumento = document.getElementById("txtNumDoc").value;

    // Validar que todos los campos estén llenos
    if (tipoTarjeta === "" || clave === "" || captcha === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Verificar el máximo de caracteres según el tipo de documento seleccionado si el campo de documento está visible
    if (document.getElementById("tipoNumDoc").style.display === "block") {
        var maxCaracteres = 0;
        switch (tipoDocumento) {
            case "1": // DNI
                maxCaracteres = 8;
                break;
            case "7": // Pasaporte
            case "3": // C. Extranjeria
                maxCaracteres = 12;
                break;
            case "6": // RUC
                maxCaracteres = 11;
                break;
        }

        // Verificar que el número de documento ocupe el máximo disponible
        if (numDocumento.length !== maxCaracteres) {
            alert("El número de documento debe tener " + maxCaracteres + " caracteres.");
            return;
        }
    }

    // Aquí iría tu lógica de autenticación
    // Por ahora, simplemente mostramos un mensaje de éxito
    alert("Autenticación exitosa. ¡Bienvenido!");
}
