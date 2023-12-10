//generamos una lista de nodos con los elementos HTML que tengan la clase arrow, que son los iconos de las flechas que dispararan el evento:
flecha = document.querySelectorAll('.arrow');


//recorremos la lista de nodos con un forEach:
flecha.forEach(flecha => {

    //agregamos a cada flecha un evento escuchador:
    flecha.addEventListener('click', function (){

        //almacenamos en una constante el valor del submenu que queremos desplegar, basandonos en su posicion relativa a la flecha:
        const subMenu = this.parentElement.nextElementSibling;

        //cambiamos la clase del submenu a show para que este se desplige
        subMenu.classList.toggle('show');

        //cambiamos la clase del contenedor de la flecha para que se le aplique la rotacion a la misma:
        this.parentElement.classList.toggle('expanded');
    });
})