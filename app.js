// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Obtenemos los siguentes elementos del HTML mediante el DOM:
const inputText = document.getElementById("amigo");
const btnAñadir = document.getElementById("button-add");
const btnSortear = document.querySelector(".button-draw");
const ulListaAmigos = document.getElementById("listaAmigos");
const pModalText = document.getElementById("pModalText");
const ulResultado = document.getElementById("resultado");
const btnAyuda = document.getElementById("btn-ayuda");

//Creamos una lista para agrupar los nombres de los amigos.
const arrayAmigos = [];
//De forma auxiliar, creamos una variable para guarda el valor del input
let text = "";

btnAñadir.addEventListener("click", ejecutar); //le adjuntamos el evento clic a nuestro boton de añadir amigos. Esto con la finalidad de que ejecute la funcion 'ejecutar' cuando le demos clic en el boton.
function ejecutar() {
  if (validarInput()) {
    //evalua si la validacion fue exitosa
    if (!arrayAmigos.length) {
      //si la lista esta en cero, entonces:
      ulResultado.textContent = ""; //eliminamos el texto del ulResultado
    }
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
    return true; //En caso de todo ir bien, retornamos true
  }
  modal.showModal(); // si algo fallo, mostramos el modal con la informacion a notificar
  return false;
}

function generarLista(text) {
  if (!arrayAmigos.includes(text)) {
    //verifica si aun no existe el amigo en la lista:
    arrayAmigos.push(text);
    ulListaAmigos.innerHTML += `<li class="Amigos-item">${text}</li>`;
    const liAmigosItem = document.querySelectorAll(".Amigos-item");
    addClick(liAmigosItem);
  } else {
    //si existe le indicamos a la persona que ya se agrego el nombre previamente
    pModalText.textContent =
      "El nombre ya existe en la lista de amigos, intenta con otro nombre.";
    modal.showModal();
  }
  resetInput();
}

btnSortear.addEventListener("click", sortear);

function sortear() {
  if (arrayAmigos.length > 1) {
    const random = Math.floor(Math.random() * arrayAmigos.length); //genera un numero al azar
    const amigoSecreto = arrayAmigos[random]; //busca un nombre en el arreglo en base al numero al azar.

    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`; //finalmente añade el nombre a el ul para mostrarlo en la pagina.

    //Reinicamos la informacion: Limpiamos el ul de amigos y el array de amigos.
    ulListaAmigos.textContent = "";
    arrayAmigos.length = ""; //vacia el arreglo
  } else {
    pModalText.textContent =
      "Debes de ingresar al menos dos nombres previamente.";
    modal.showModal();
  }
}

//?Añado un modal de forma nativa para expresar los mensajes de la pagina
const modal = document.getElementById("modal");

function closeModal() {
  document.querySelector(".img-close").style.display = "block";
  document.getElementById("youtube").style.display = "none";
  modal.close();
}

//funcion para limpiar y hacer un foco en el input
function resetInput() {
  inputText.value = "";
  inputText.focus();
}

//Logica para añadir eventos a los nombres que aparecen en la lista.

let presionado = false;
let esTactil = "ontouchstart" in window; // Detecta si el dispositivo es táctil

function addClick(liAmigosItem) {
  liAmigosItem.forEach((item) => {
    function iniciarPresion() {
      presionado = true;
      item.style.border = "1px solid red";
      item.style.animation =
        "bgdelete 1s ease infinite, sacudir .3s infinite";

      setTimeout(() => {
        if (presionado) {
          const id = arrayAmigos.indexOf(item.textContent);
          if (id !== -1) {
            arrayAmigos.splice(id, 1);
            ulListaAmigos.removeChild(item);
          }
        }
      }, 1000);
    }

    function soltarPresion() {
      presionado = false;
      item.style.border = "2px solid hsl(from var(--color-primary) h s 50%)";
      item.style.animation ="none";
    }

    if (esTactil) {
      // Si es táctil, solo usamos eventos de touch
      item.addEventListener("touchstart", iniciarPresion);
      item.addEventListener("touchend", soltarPresion);
      item.addEventListener("touchmove", soltarPresion);
    } else {
      // Si es un dispositivo con mouse, solo usamos eventos de mouse
      item.addEventListener("mousedown", iniciarPresion);
      item.addEventListener("mouseup", soltarPresion);
      item.addEventListener("mouseleave", soltarPresion);
    }
  });
}
//Contenido del modal cuando usamos el elemento de ayuda
btnAyuda.addEventListener("click", () => {
  const modalTitle = document.querySelector(".modal-title");
  const modalContent = document.querySelector(".modal-content");
  document.querySelector(".img-close").style.display = "none";
  modalTitle.textContent = "Challenge: Tu amigo secreto (GUIA)";
  pModalText.textContent = "";
  document.getElementById("youtube").style.display = "block";
  modal.showModal();
});
