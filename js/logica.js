let listaPalabrasSecretas = ["AVE", "TELEFONO", "HIPOPOTAMO", "PIZZA"];
let btnNuevaPalabra = document.querySelector("#nuevaPalabra");
let btnNuevoJuego = document.querySelector("#nuevaJuego");
let contenedorAhorcado = document.querySelector("#contenedorAhorcado");
let entradasIncorrectas = document.querySelector("#entradasIncorrectas");
let divPalabraSecreta = document.querySelector("#palabraSecreta");
let vidas = 6;
let palabraSecreta = "";
let listaErrores = "";
//boton nueva palabra
btnNuevaPalabra.addEventListener("click", function () {
  let ingresoUsr = prompt("Ingrese nueva palabra.").toUpperCase();
  const pattern = new RegExp("^[A-Z]+$", "i");
  if (pattern.test(ingresoUsr)) {
    listaPalabrasSecretas.push(ingresoUsr);
  }
});
//boton nuevo juego
btnNuevoJuego.addEventListener("click", function () {
  nuevoJuego()
});
function nuevoJuego(){
  contenedorAhorcado.style.display = "flex";
  palabraSecreta = definirPalabrasSecretas();
  vidas = 6;
  listaErrores = "";
  entradasIncorrectas.textContent= listaErrores.split("");
  resetGrafico()
  graficarAhorcado(6);
  console.log(palabraSecreta);
  mostarPalabraSecreta();
}
function definirPalabrasSecretas() {
  return listaPalabrasSecretas[
    Math.floor(Math.random() * listaPalabrasSecretas.length)
  ];
}
function comprobarLetra(letra) {
  if (palabraSecreta.includes(letra)) {
    console.log("incluido");
  } else {
    if (!listaErrores.includes(letra)) {
      vidas--;
      listaErrores += letra;
      entradasIncorrectas.textContent= listaErrores.split("");
    }
    graficarAhorcado(vidas);
  }
}
function mostarPalabraSecreta(){

  divPalabraSecreta.textContent = "_______";

  // 
}
function compararI