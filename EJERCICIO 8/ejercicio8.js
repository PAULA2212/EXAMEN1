/* Crea una clase pelicula que permita gestionar esta informacion: nombre, duracion, año de estreno,genero, 6 actores,url del cartel promocional y director, y una accion que permita mostrar por pantalla toda la informacion. el constructor debera recibir los datos en una cadena JSON de la que debera sacar los valores de cada propiedad. Crea un objeto de la clase y ponla a prueba */

//creamos un objeto de Javascript con los datos de la pelicula que tenemos:
let datos = {
    nombre: "la verdad",
    duracion: 120,
    estreno: 2017,
    genero: "drama",
    actores: [
        "pepe",
        "juan",
        "alex",
        "lucia",
        "chloe",
        "encarni"
    ],
    url: "http://.....",
    director: "pepito"
}

//guardamos en una variable la conversion de estos datos a una cadena JSON:
let datosJSON = JSON.stringify(datos);

//creamos la clase Pelicula, que recibira una cadenaJSON como parametro de entrada:
class Pelicula{
    constructor(datosJSON){
        //creamos el atributo datos, que convierte la cadena JSON en un objeto de Javascript
        this.datos = JSON.parse(datosJSON);

        //accediendo a los atributos de datos, podemos construir los atributos de la clase pelicula:
        this.nombre = this.datos.nombre;
        this.duracion = this.datos.duracion;
        this.estreno = this.datos.estreno;
        this.genero = this.datos.genero;
        this.actores = this.datos.actores;
        this.url = this.datos.url;
        this.director = this.datos.director;
    }
    //agregamos un sencillo metodo que muestra el valor de lo atributos:
    mostrarInfo(){
        console.log(`En la pelicula ${this.nombre} que dura ${this.duracion} y que se estreno en el año ${this.estreno} del genero ${this.genero}, aparecen los actores ${this.actores} y fue dirigida por ${this.director}, aqui puedes ver su cartel: ${this.url}`);
    }
}
 //instanciamos un objeto de la clase pelicula, metiendole como parametro de entrada la cadena JSON, y comprobamos el correcto funcionamiento del metodo:
let unaPeli = new Pelicula(datosJSON);
unaPeli.mostrarInfo();