var c = document.querySelector("#graficoAhorcado");
var ctx = c.getContext("2d");
ctx.lineWidth = 5;


//barra vertical horca
ctx.moveTo(50, 595);
ctx.lineTo(50, 50);
ctx.moveTo(50, 595);
ctx.lineTo(350, 595);
ctx.stroke();

//barra superior horca
ctx.moveTo(50, 50);
ctx.lineTo(250, 50);
ctx.moveTo(250, 50);
ctx.lineTo(250, 100);
ctx.stroke();

//cabeza
ctx.beginPath();
ctx.arc(250, 150, 50, 0, 2 * Math.PI);
ctx.stroke();

//cuerpo
ctx.moveTo(250, 200);
ctx.lineTo(250, 400);
ctx.stroke();

//brazo
ctx.moveTo(250, 240);
ctx.lineTo(180, 280);
ctx.stroke();

//pierna
ctx.moveTo(250, 400);
ctx.lineTo(180, 480);
ctx.stroke();

//brazo otro
ctx.moveTo(250, 240);
ctx.lineTo(320, 280);
ctx.stroke();

//pierna otro
ctx.moveTo(250, 400);
ctx.lineTo(320, 480);
ctx.stroke();