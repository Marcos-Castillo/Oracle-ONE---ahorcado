let btnComprobar = document.querySelector("#comprobar");
let btnNuevaPalabra = document.querySelector("#nuevaPalabra");
let resultado = document.querySelector("#resultado");
let ingreso = document.querySelector("#ingresoUsr");
let mostrarVida = document.querySelector("#vida");
let mostrarCorrectas = document.querySelector("#correctas");
let largoPalabra = document.querySelector("#largoPalabra");

btnComprobar.addEventListener("click", function () {
  ahorcado(ingreso.value);
  console.log(ingreso.value);
  ingreso.value = "";
});
btnNuevaPalabra.addEventListener("click", function () {
  nuevaPalabraSecreta();
  //ingreso.value = "";
  resultado.value = "";
});
//logica
let listaPalabrasSecretas = ["ave", "telefono", "hipopotamo", "pizza"];
let palabraSecreta = "".toUpperCase();

let palabraSecretaArray = palabraSecreta.split("");
let letraUsr = "";
let descubierto = [];
let vida = 5;
let ganar = false;
let correctas = 0;

nuevaPalabraSecreta();

function nuevaPalabraSecreta() {
  palabraSecreta =
    listaPalabrasSecretas[Math.round(Math.random() * 3)].toUpperCase();
  console.log(palabraSecreta);
  largoPalabra.textContent = palabraSecreta.length;
  ingresoUsr = "";
  descubierto = [];
}
function ahorcado(ingresoParametro) {
  if (vida > 0) {
    letraUsr = ingresoParametro.toUpperCase();
    if (letraUsr.match(palabraSecreta)) {
      ganar = true;
      resultado.value = palabraSecreta;
      alert("Acertaste la palabra es " + palabraSecreta);
      mostrarCorrectas.textContent = ++correctas;

      nuevaPalabraSecreta();
    } else {
      if (palabraSecreta.match(letraUsr)) {
        descubierto.push(letraUsr);
      } else {
        alert("no contiene: " + letraUsr);
        vida--;
        mostrarVida.textContent = vida;
      }
    }
    if (
      compararArray(
        palabraSecretaArray,
        descubiertosOrdenado(descubierto)
      )
    ) {
      resultado.value = palabraSecreta;
      alert("Acertaste la palabra es " + palabraSecreta);
      mostrarCorrectas.textContent = ++correctas;
      nuevaPalabraSecreta();
    } else {
      resultado.value = descubiertosOrdenado(descubierto);
    }
  } else {
    alert("perdiste se reinicia el juego");

    vida = 5;
    mostrarVida.textContent = vida;
    correctas = 0;
    mostrarCorrectas.textContent = correctas;
    nuevaPalabraSecreta();
  }
}

function descubiertosOrdenado(descubiertos) {
  let x = [];
  for (letra of descubiertos) {
    x[palabraSecreta.indexOf(letra)] = letra;
  }
  return x;
}
function compararArray(arr1, arr2) {
  let ban = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      ban = false;
      break;
    } else {
      ban = true;
    }
  }
  return ban;
}