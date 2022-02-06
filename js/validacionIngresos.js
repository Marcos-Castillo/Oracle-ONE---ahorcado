//captura las letras presionadas

window.addEventListener("keydown", teclaPresionada)

function teclaPresionada(e){    
    
    console.log(e.key);
    validar(e.key);
}
function validar(x){
    const pattern = new RegExp('^[A-Z]+$', 'i');
    if(x.length ==1){
    if(pattern.test(x)){ 
        // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
        // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
          //isValid = false;
          console.log("OK")
        } 
        
    }
}