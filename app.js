// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Obtenemos los siguentes elementos del HTML mediante el DOM:
const inputText = document.getElementById("amigo");
const btnAñadir = document.getElementById("button-add");
const btnSortear = document.querySelector(".button-draw");
const ulListaAmigos = document.getElementById("listaAmigos");
const pModalText = document.getElementById("pModalText");
const ulResultado = document.getElementById("resultado");


//Creamos una lista para agrupar los nombres de los amigos.
const arrayAmigos = [];
//De forma auxiliar, creamos una variable para guarda el valor del input
let text = "";

btnAñadir.addEventListener("click", ejecutar); //le adjuntamos el evento clic a nuestro boton de añadir amigos. Esto con la finalidad de que ejecute la funcion 'ejecutar' cuando le demos clic en el boton.
function ejecutar() {
  if (validarInput()) { //evalua si la validacion fue exitosa
    if (!arrayAmigos.length){ //si la lista esta en cero, entonces:
      ulResultado.textContent = ""; //eliminamos el texto del ulResultado
    };
    generarLista(text);
  }
}

function validarInput() {
  if (inputText.validity.patternMismatch) {
    //Verifica si el patron regex indicado en el input en el html no se a cumplido.
    pModalText.textContent =
      "El nombre ingresado no es valido, intenta nuevamente.";
  } else if (inputText.value == "") {
    //verifica si el input tiene texto
    pModalText.textContent = "Debes ingresar un nombre en dicho campo.";
  } else {
    text = inputText.value.trim().toLowerCase(); //Formatea el texto con la fines esteticos.
    return true;
  }
  modal.showModal();
  return false;
}

function generarLista(text) {
  arrayAmigos.push(text);
  ulListaAmigos.innerHTML += `<li>${text}</li>`;
  resetInput();
}

btnSortear.addEventListener("click", sortear);

function sortear() {
  const random = Math.floor(Math.random() * arrayAmigos.length);
  const amigoSecreto = arrayAmigos[random];
  ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

  //Reinicamos la informacion: Limpiamos el ul de amigos y el array de amigos.
  ulListaAmigos.textContent = "";
  arrayAmigos.length = ""; //vacia el arreglo
}

//?Añado un modal de forma nativa para expresar los mensajes de la pagina
const modal = document.getElementById("modal");

function closeModal() {
  modal.close();
};


function resetInput() {
  inputText.value = "";
  inputText.focus();    
};