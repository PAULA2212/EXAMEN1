/* A traves de una funcion constructura de prototipos crea una cuenta bancaria. atributos: nombre, dni, edad, y saldo. Con dos metodos, ingresar y retirar de la cuenta */ 


//utilizando una funcion contructura de prototipos, creamos el objeto cuentaBancaria:
function cuentaBancaria(nombre,dni,edad,saldo){
    //añadimos los atributos de este prototipo:
    this.nombre = nombre;
    this.dni = dni;
    this.edad = edad;
    this.saldo = saldo;


    //añadimos un metodo que modifica en negativo el saldo del objeto, una retirada:
    this.retirar = function(cantidadretiro){
        console.log(`Antes el saldo de tu cuenta era de ${this.saldo}.`);
        this.saldo -= cantidadretiro;
        console.log(`Despues de la retirada te quedan ${this.saldo}`);
    }

    //añadimos una funcion que incrementa el saldo de la cuenta:
    this.ingresar = function(cantidadingreso){
        console.log(`Antes el saldo de tu cuenta era de ${this.saldo}.`);
        this.saldo += cantidadingreso;
        console.log(`Despues del ingreso cuentas con ${this.saldo}`);
    }
}

//instanciamos un objeto usando el prototipo cuentaBancaria:
let miCuenta = new cuentaBancaria("paula", "ojoehh3", 23, 6000);

//utilizamos sobre el objeto los metodos propios del prototipo para comprobar su funcionamiento:
miCuenta.ingresar(100);
miCuenta.retirar(200);
