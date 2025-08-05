// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre === ""){
        alert("No se ha ingresado nombre. Ingrese el nombre de un amigo");
    }
    else {
        if (/\d/.test(nombre)){
            alert("Los nombres no tienen números. Ingrese un nombre válido");
            limpiarCaja();
        }
        else {
            amigos.push(nombre);
            console.log(amigos);
            limpiarCaja();
        }
    }
}

function limpiarCaja(){
    document.getElementById("amigo").value = "";
}

function sortearAmigo(){
    let numeroAmigo = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[numeroAmigo]
    if (amigos != ""){
        alert(`El nombre de su amigo secreto es ${amigoSecreto}`);
        condicionesIniciales()
    }
    else {
        alert("Ingrese los nombres de sus amigos para poder comenzar");
    }
        
}

function condicionesIniciales(){
    amigos = [];
}