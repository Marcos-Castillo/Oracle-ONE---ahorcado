var c = document.querySelector("#graficoAhorcado");
var ctx = c.getContext("2d");

function resetGrafico() {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "steelblue";
  ctx.beginPath();
  //barra vertical horca
  ctx.moveTo(50, 600);
  ctx.lineTo(50, 45);
  ctx.moveTo(50, 595);
  ctx.lineTo(350, 595);
  ctx.stroke();

  //barra superior horca
  ctx.moveTo(50, 50);
  ctx.lineTo(255, 50);
  ctx.moveTo(250, 50);
  ctx.lineTo(250, 100);
  ctx.stroke();
}
function graficarAhorcado(vidas) {
  if (vidas < 6) {
    //cabeza error1
    ctx.strokeStyle = "tomato";
    ctx.beginPath();
    ctx.arc(250, 150, 50, 0, 2 * Math.PI);
    ctx.stroke();
    if (vidas < 5) {
      //cuerpo error2
      ctx.moveTo(250, 200);
      ctx.lineTo(250, 400);
      ctx.stroke();
      if (vidas < 4) {
        //brazo error3
        ctx.moveTo(250, 240);
        ctx.lineTo(180, 280);
        ctx.stroke();
        if (vidas < 3) {
          //pierna error4
          ctx.moveTo(250, 400);
          ctx.lineTo(180, 480);
          ctx.stroke();
          if (vidas < 2) {
            //brazo otro error5
            ctx.moveTo(250, 240);
            ctx.lineTo(320, 280);
            ctx.stroke();
            if (vidas < 1) {
              //pierna otro error6
              ctx.moveTo(250, 400);
              ctx.lineTo(320, 480);
              ctx.stroke();
              if (vidas < 0) {
                alert("Fin del juego la palabra era " + palabraSecreta);
                nuevoJuego()
              }
            }
          }
        }
      }
    }
  }
}
