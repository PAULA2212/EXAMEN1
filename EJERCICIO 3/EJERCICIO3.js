/* Crea un script que te salude con buenos dias, buenas tardes o buenas noches, en funcion de la hora del dia que sea */

//usamos el objeto date() para guardar el valor de la fecha y la hora justo en este momento:
let ahora = new Date();

//accedemos al metodo getHours propio de este objeto para guardar en una variable un valor entero con la hora:
let horaAhora = ahora.getHours();

//establecemos una estructura condicional que en funcion del valor de la hora, saludara apropiadamente al usuario a traves de la consola.
if (horaAhora > 8 && horaAhora <= 14){
    console.log(`Buenos dias, son las ${horaAhora} horas.`);
} else if (horaAhora > 14 && horaAhora <= 22){
    console.log(`Buenas tardes, son las ${horaAhora} horas.`);
}else{
    console.log(`Buenas noches, son las ${horaAhora} horas.`);
}