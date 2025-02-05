// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let cajaAmigos = []; //Array donde de despositaran los amigos para su posterior sorteo


// Agregar amigos a la array
function agregarAmigos() {

    let amigoTexto = document.getElementById('amigo').value;

    if (amigoTexto == "") { // Validamos de que no este en blanco
        return alert("Por favor, inserte un nombre valido");  
    } else {
        cajaAmigos.push(amigoTexto);
        console.log(cajaAmigos); // Para validar si el amigo ya esta en la array
        document.getElementById('amigo').value = "";
        return actualizarLista();
    }
}

// Crear y Actualizar Lista

function actualizarLista() {

    let crearElemento = document.createElement('li');

    for (let i = 0; i < cajaAmigos.length; i++) {
        console.log(cajaAmigos[i]);
        crearElemento.innerHTML = cajaAmigos[i];
        document.getElementById('listaAmigos').appendChild(crearElemento);
    }
}

// Sortear Amigo

function sorteoAmigos() {

    if (cajaAmigos.length < 2){
        return alert("Agrega amigos para sortear.");
    }

    let crearElemento = document.createElement('li');
    let amigoGenerado = Math.floor(Math.random() * cajaAmigos.length);

    console.log(amigoGenerado);
    crearElemento.innerHTML = (`Tu amigo ganador es: ${cajaAmigos[amigoGenerado]}`);
    document.getElementById('resultado').innerHTML = "";
    return document.getElementById('resultado').appendChild(crearElemento);
}
