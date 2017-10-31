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
4. En otro for separar los numeros en posición par m enosres  a 4
  4.1 el for debe iniciar desde 1 y aumentar de dos en dos
  4.2 sumarlos y multiplicarlos por dos en una variable nueva
  4.3 sumar las dos variables en una suma total
5. en otra funcion separamos con un for los numeros en index par mayores a 4  
  5.1 guardarlos en una nueva variable y multiplicarlos por dos
6. usando la variable de los numeros mayores a 4 separar con split cada digito
y guardarlo en un arreglo nuevo
7. por medio de un for ir sumando el primer y segundo digito del arreglo
para volverlo en una cifra
 7.1 hacer la suma de todos los nuevos valores de una cifra
 8. hacer una función isValidCard
  8.1 poner como condición que si la suma es modulo de 10 retorne que es Valida
  8.2 else si no no es valida
## Diagrama de flujo

![diagrama-de-flujo](https://www.lucidchart.com/publicSegments/view/8e2e96ff-d35e-4296-a34a-c03beda443ce/image.png);
