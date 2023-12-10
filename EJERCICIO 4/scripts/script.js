//guardamos en una constante el elemento HTML con clase hamburguer, que es el menu hamburguesa:
const hamburguer = document.querySelector('.hamburguer');

//guardamos en una constante el elemento con clase nav-links, que es la barra de navegacion que queremos desplegar:
const navLink = document.querySelector('.nav-links');


//declaramos una funcion que permita cambiar la clase del menu de navegacion a active, para que esta se despliegue:
function desplegarNav(){
    navLink.classList.toggle('active');
}

//generamos un evento en el menu hamburguesa para que al clickar sobre el, salte la funcion desplegarNav y esta despliege el menu de navegacion:
hamburguer.addEventListener("click", desplegarNav); 

//aqui estamos haciendo exactamente lo mismo, pero usando una funcion flecha dentro del evento:
hamburguer.addEventListener("click", () =>{
    navLink.classList.toggle('active');
}) 

//aqui estamos haciendo lo mismo pero utilizando una funcion anonima dentro del evento:

hamburguer.addEventListener("click", function(){
    navLink.classList.toggle('active');
})