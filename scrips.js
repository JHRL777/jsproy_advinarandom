const numeroAzar = Math.floor(Math.random()*100) + 1;


let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');


let mensaje1 = document.getElementById('mensaje1');

let mensaje2 = 0;


function comporbarNumer(){
    mensaje2 ++

    mensaje1.textContent = mensaje2;

    let numerIngresado = parseInt(numeroEntrada.value)

    if(numerIngresado < 1 || numerIngresado > 100 || isNaN(numerIngresado) ){
         mensaje.textContent = 'Numero invalido ingrese un numero del 1 al 100'
         return
    }

    if(numerIngresado == numeroAzar){
        mensaje.textContent ='Adivinaste el numero';
        mensaje.style.color = "green";
        numerIngresado.disabled= true;
        
    }else if(numerIngresado > numeroAzar){
        mensaje.textContent ='Esta mas abajo'
        
    }else{
        mensaje.textContent ='Estas mas arriba'
        
    }

    

}