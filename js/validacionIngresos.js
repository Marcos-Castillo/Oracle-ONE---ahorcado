//captura las letras presionadas

function teclaPresionada(e){    
    
    console.log(e.key);
    validar(e.key.toUpperCase());
}
function validar(x){
    //validador de solo letras
    const pattern = new RegExp('^[A-Z]+$', 'i');
    if(x.length ==1){
    if(pattern.test(x)||(x=="ñ"||x=="Ñ")){ 
            comprobarLetra(x)
        } 
        
    }
}