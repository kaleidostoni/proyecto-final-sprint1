##TARJETA DE CRÉDITO

Crea una web que pida, por medio de un prompt(), el número de una tarjeta de
crédito y confirme su validez según el algoritmo de Luhn.

Consideraciones Específicas

Tu código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío

##Pseudocódigo

1. Por medio de un prompt preguntar al usuario el numero de TARJETA
2. convertir el  imput del prompt al revés por medio del metodo reverse
3. Por medio de un for separar los numeros que esten en las posiciones nones
  3.1 El for debe empezar desde el 0 y aumentar de dos en dos
  3.2 guardar todos los numeros en posición non en una variable
  3.3 sumar todos los numeros de esa nueva variable de numeros en posición none
4. En otro for separar los numeros en posición par
  4.1 el for debe iniciar desde 1 y aumentar de dos en dos
  4.2 con un if separaremos los numeros de 0 a 4  y los numeros de 5 a 9
  4.3 los numeros de vayan en el if seran los de 5 a 9
  dentro usare otro if para ir asignando un valor a cada numero
  4.4 delvolvere los resultados en una variable nueva
  4.5 los numeros de 0 a 4 solo se multiplicaran por dos y los guardaremos en
   una nueva variable
5. Sumare los resultados de las tres variables en una nueva variable
6. en una funcion is ValidCard pondre un if
  6.1 dentro del if la tarjeta retornara  is valid si el numero de la suma es
  multiplo de 10
  6.2 para confirmar si el numero es multiplo de 10 usare el operador modulo %
  6.3 si el resultado es == a 0 retornara "is valid"
  6.4 de los contrario en el else retornara "is not valid"

## Diagrama de flujo

![diagrama-de-flujo](http://subefotos.com/ver/?283d4902a9974c9b5b6159a736b06547o.png
)
