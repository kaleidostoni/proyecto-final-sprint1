//revirtiendo el numero de tarjeta de credito
var cardNumber = [7,2,5,4];
var reversedNumber =cardNumber.reverse();
/* creando una funcion que separe los numeros que se encuentren en
 index non de los que se encuentran en index par (menores a 4)*/

 /*declaramos la variable suma1 donde se sumaran los numeros que filtre
 el for*/

 // declaramos la var suma2 donde se suman los numeros que filtra for
 //sumamos los dos sumas en la variable totalSum

 var lunhAlgoritm = function(array){
   var suma1 = 0;
   for (var i=0; i<array.length; i= i+2){
     suma1+=array[i];
    }
    var suma2 = 0;
    for (var j=1; j<array.length; j= j+2){
      if(array[j] < 4){
        suma2+=array[j]*2;
      }
    }var totalSum = suma1 + suma2;
  return totalSum;
  }
//llamando a la función lunnAlgoritm
  lunhAlgoritm(reversedNumber);

  /*haciendo una funcion  pairsOneDigit que reuna  con . push en un array
   los numeros en index par mayores a 4*/

  var pairsBiggerThanFour = function(array){
    var arrayNumbersFiltered = [];
    for(var k = 1; k < array.length; k = k+2){
      if(array[k] >4){
        arrayNumbersFiltered.push(array[k] *2);
      }
    }return arrayNumbersFiltered;
  }

  pairsBiggerThanFour(reversedNumber);


  /*creando una función que asigne un valor a cada numero del
  arrayNumbersFiltered el numero que resulte de multiplicarlo por
  dos y sumar su dos digitos para despues sumar esos resultados*/


     var turningToOneDigit = function(array){
        var suma4 = [];
       for(var l = 0; l < array.length; l++){
         var separateDigits = array[l].toString().split('');
         console.log(separateDigits);
       }
     }

 turningToOneDigit(pairsBiggerThanFour(reversedNumber));
