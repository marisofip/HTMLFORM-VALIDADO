let forms= document.querySelector("#forms");

forms.addEventListener('submit', (evento) => {
  evento.preventDefault();
  
  haycampovacio = false;
  divalert = document.getElementById("alert");
    
inputTarjeta = document.getElementById("inputTarjeta");
campovacio(inputTarjeta);
  inputCVC = document.getElementById("inputCVC");
campovacio(inputCVC);
  inputAmount = document.getElementById("inputAmount");
campovacio(inputAmount);
  inputNombre = document.getElementById("inputNombre");
campovacio(inputNombre);
  inputApellido = document.getElementById("inputApellido");
campovacio(inputApellido);
  inputCity = document.getElementById("inputCity");
campovacio(inputCity);
  inputZip = document.getElementById("inputZip");
campovacio(inputZip);
 inputState = document.getElementById("inputState");
campovacio(inputState);
   inputMensaje= document.getElementById("inputMensaje");
campovacio(inputMensaje);
  
  haycampovacio ? divalert.classList.add("alert-show") : divalert.classList.remove("alert-show")

})

function campovacio (campo){
  if (campo.value == ""){
    campo.style.backgroundColor = "#f8d7da"
    haycampovacio = true;
  }else {
    campo.style.backgroundColor = "white"
    haycampovacio = false;
  }
 
}


function validarletras (){
  let nombre = document.querySelector("#inputnombre").value;
  alert (event.key);
     
}

 function soloLetras(e) {
    let key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (let i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }

 function soloNumeros(e) {
    let key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      numeros = " 0123456789",
      especiales = [8, 37, 39, 46,44],
      tecla_especial = false;

    for (let i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (numeros.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }
