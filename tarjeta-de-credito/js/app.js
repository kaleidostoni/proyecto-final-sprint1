//revirtiendo el numero de tarjeta de credito
var cardNumber = [7,2,5,4,];
var reversedNumber =cardNumber.reverse();
/* creando una funcion lunhAlgoritm que separe los numeros que se encuentren en
 index non y los sume en la variable suma1*/

/*dentro de la misma funcion lunhAlgoritm separamos con otro for los numeros que
se encuentren en index par si son menores a 4, los multiplique por 2 y
 los sume en la variable suma2*/

 /*por último que la funcion retorne las suma de las dos sumas en la variable
 totalSum*/

 var lunhAlgoritm = function(array){
   var sum1 = 0;
   for (var i=0; i<array.length; i= i+2){
     sum1+=array[i];
    }
    var sum2 = 0;
    for (var j=1; j<array.length; j= j+2){
      if(array[j] < 4){
        sum2+=array[j]*2;
      }
    }var totalSum = sum1 + sum2;
  return totalSum;
  }
//llamando a la función lunnAlgoritm
  lunhAlgoritm(reversedNumber);

  /*haciendo una funcion  pairsBiggerThanFourt que reuna  con . push en un array
   los numeros en index par mayores a 4 y los multiplique por 2*/

  var pairsBiggerThanFour = function(array){
    var arrayNumbersFiltered = [];
    for(var k = 1; k < array.length; k = k+2){
      if(array[k] >4){
        arrayNumbersFiltered.push(array[k] *2);
      }
    }return arrayNumbersFiltered;
  }
  //llamando la función pairsBiggerThanFour
  pairsBiggerThanFour(reversedNumber);


  /*creando una funcion  que usando un for vaya iterando cada valor de mi array
  arrayNumbersFiltered y separe con .split sus dos cifras para poder sumarlas
  y guardarlas en otro arreglo */


     var turningToOneDigit = function(array){
       var sum4 = [];
       for(var l = 0; l < array.length; l++){
         var separateDigits = array[l].toString().split('');
         console.log(separateDigits);
       }
     }
  // llamando la función turningToOneDigit
 turningToOneDigit(pairsBiggerThanFour(reversedNumber));
