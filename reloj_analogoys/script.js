const deg = 6;

/* vamos a crear constantes para guardar todo lo que pase ne el reloj*/
const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');

setInterval(()=>{ /*esta funcion para que el reloj se actualize*/
    let tiempo = new Date();

    let hr = tiempo.getHours()* 30;
    let min = tiempo.getMinutes()* deg;
    let seg = tiempo.getSeconds()* deg;
 /*funcion transform permite traer lo del css y permite moverlo */
 /*comilla alrevez alt 96*/
    hora.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minuto.style.transform = `rotate(${(min)}deg)`;
    segundo.style.transform = `rotate(${(seg)}deg`;



})

/*permite traer lo del css y permite moverlo*/