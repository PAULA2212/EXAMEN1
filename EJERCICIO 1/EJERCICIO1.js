/* Diseña una jerarquia de clases donde musica y tecnologia sean clases derivadas de aula, para modelar las instlaciones de un instituto de enseñanza secundaria. Elige un metodo con el que evidenciar el concepto de polimorfismo */

//creamos la clase aula:
class Aula{
    //con el metodo contructor para introducir los valores de los atributos cuando instanciemos un objeto:
    constructor(capacidad, metros, ventanas){
        this.capacidad = capacidad;
        this.metros = metros;
        this.ventanas = ventanas;
    }
    // con un metodo propio de la clase que simplemente muestra el valor de sus atributos:
    mostrarInfo(){
        console.log(`En este aula caben ${this.capacidad} alumnos, tiene ${this.metros} metros cuadrados y cuenta con ${this.ventanas} numero de ventanas.`);
    }
}
//instanciamos un objeto para comprobar el funcionamiento del metodo:
let aula1 = new Aula(30,15,5);
aula1.mostrarInfo();

//creamos la clase Musica que hereda de la clase aula:
class Musica extends Aula{
    constructor(capacidad, metros, ventanas, instrumentos){
        //hereda los atributos de la clase aula:
        super(capacidad,metros,ventanas);
        //introduce un nuevo atributo propio de esta clase:
        this.instrumentos = instrumentos;
    }

    //rescribimos el metodo anterior para adaptarlo a esta nueva clase, lo cual es posible gracias al polimorfismo
    mostrarInfo(){
        console.log(`En este aula de musica caben ${this.capacidad} alumnos, tiene ${this.metros} metros cuadrados y cuenta con ${this.ventanas} numero de ventanas. Ademas se pueden tocar ${this.instrumentos} instrumentos distintos`);
    }

}
//instanciamos un objeto de la clase aula para comprobar el funcionamiento del metodo:
let aulaMusica = new Musica(20,30,4,7);
aulaMusica.mostrarInfo();


//creamos la clase sistemas que hereda de la clase aula
class Sistemas extends Aula{
    constructor(capacidad, metros, ventanas, ordenadores){
        //con los atributos que hereda de la clase aula:
        super(capacidad,metros,ventanas);
        //con un atributo propio de esta clase:
        this.ordenadores = ordenadores;
    }

    //reescribimos el metodo para que se adapte mejor a la nueva clase, lo cual es posible gracias al polimorfismo:
    mostrarInfo(){
        console.log(`En este aula de sistemas caben ${this.capacidad} alumnos, tiene ${this.metros} metros cuadrados y cuenta con ${this.ventanas} numero de ventanas. Ademas se pueden usar ${this.ordenadores} ordenadores.`);
    }
}

//instanciamos un objeto de la clase sistemas para comprobar el funcionamiento del metodo:
let aulaSistemas = new Sistemas(20,14,3,20);
aulaSistemas.mostrarInfo();