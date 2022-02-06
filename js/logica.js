let listaPalabrasSecretas = ["AVE", "TELEFONO", "HIPOPOTAMO", "PIZZA"];
let btnNuevaPalabra = document.querySelector("#nuevaPalabra");
let btnNuevoJuego = document.querySelector("#nuevaJuego");
let contenedorAhorcado = document.querySelector("#contenedorAhorcado");
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
  contenedorAhorcado.style.display = "flex";
  palabraSecreta = definirPalabrasSecretas();
  vidas = 6;
  graficarAhorcado(vidas);
  console.log(palabraSecreta);
});
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
      console.log("fallido");
    }
    graficarAhorcado(vidas);
  }
}
