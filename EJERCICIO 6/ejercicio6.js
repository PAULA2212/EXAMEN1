/*Crea un script que pida al usuario 15 números, y muestre en pantalla únicamente la suma de los que son
números primos. */

//inicializamos sumaPrimos y numIntroducidos en 0
let sumaPrimos = 0;
let numIntroducidos = 0;


//creamos un bucle while que iterara 15 veces:
while (numIntroducidos < 15){
    //preguntamos al usuario por un valor numerico:
    let numero = parseInt(prompt("Introduce un numero: "));

    //la varible esPrimo tendra un valor true en su inicio
    esPrimo = true;

    //aplicamos el algoritmo matematico fundamental que nos permite descartar todos los numeros que no son primos:
    if(numero <= 1){
        esPrimo = false;
    }else{
        for (let i = 2; i <= numero / 2; i++){
            if (numero % i === 0){
                esPrimo = false;
                break;
            }
        }
    }
    //creamos un condicional que nos permita ir sumando los numeros a sumaPrimos, solo si estos son primos
    if(esPrimo){
        sumaPrimos += numero;
    }

    //incrementamos el valor de la variable numIntroducidos para que el bucle While funcione correctamente:
    numIntroducidos++
}

//mostramos en el documento html el resultado de sumar todos los primos:
document.write(`La suma de los primos es: ${sumaPrimos}`);