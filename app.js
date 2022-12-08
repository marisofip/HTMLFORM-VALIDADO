let forms= document.querySelector("#forms");

forms.addEventListener('submit', (evento) => {
  evento.preventDefault();
  
  
  document.querySelector("#alert").classList.toggle("alert-show")
document.querySelector("#alert").classList.toggle("alert")
})

function campovacio (campo){
  if (campo.value == ""){
    campo.style.backgroundColor = "red"
  }else {
    campo.style.backgroundColor = "white"
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
