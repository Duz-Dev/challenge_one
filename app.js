// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputText = document.getElementById("amigo");
const btnAñadir = document.getElementById("button-add");
const btnSortear = document.querySelector('.button-draw');

btnAñadir.addEventListener("click", ejecutar);

const arrayAmigos = [];
const contenedorListaAmigos = document.getElementById("listaAmigos");
let text = "";

function ejecutar() {
    text = inputText.value //texto del input

  if (text !== "") { //verificamos que no este vacio 
    generarLista(text);
    inputText.value = ""; //limpia el imput
  } else {
    alert("No has ingresado ningun valor en el input. Ingresa un nombre.");
  }
}

// function generarLista() {
//   contenedorListaAmigos.textContent = ""; //Limpiar previamente el elemento 'ul'
//   //?Por cada nombre del arreglo de nombres (arrayAmigos) 
//   arrayAmigos.forEach((nombre) => {
//     //creamos un item de lista (listItemNombre)
//     const listItemNombre = document.createElement("li");
//     //en dicho item, añadimos el nombre actual del arreglo como contenido de texto
//     listItemNombre.textContent = nombre;
//     //agregamos como hijo el elemento 'li' (listItemNombre) ya con su contenido añadido y lo añadimos al elemento 'ul' (contenedorListaAmigos)
//     contenedorListaAmigos.appendChild(listItemNombre);
//   });
// }


function generarLista(text) {
    arrayAmigos.push(text);
    contenedorListaAmigos.textContent = "";
    arrayAmigos.forEach((nombre) => {
        contenedorListaAmigos.innerHTML += `<li>${nombre}</li>`;
    });
};


btnSortear.addEventListener('click',sortear);

function sortear(){
    const random = Math.floor(Math.random()*arrayAmigos.length);
    const amigoSecreto = arrayAmigos[random];
    const contentResultado = document.getElementById('resultado');
    contentResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
};
