function variables(){

/// calcular el area de un triangulo///
console.log ("Calcular el area de un triangulo")
var valor1 = prompt("Dame la medida de la base del triangulo", "");
var valor2 = prompt("Dame la medida de la altura del triangulo", "");
var area = valor1*valor2/2

console.log (area);


///convertir grados celsius a fahrenheit///
var gradosCelsius = prompt ("Ingrasa los grados celsius")
var gradosFahrenheit = gradosCelsius*9/5+32

console.log ("De grados Celsius a Fahrenheit")
console.log (gradosFahrenheit)


///Primo o no primo///
console.log ("verificar si un número es primo")
var numero = prompt ("Ingresa un número para saber si es primo") 

	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	} 
 
    if (numero==false){
        console.log("No es un numero primo");
     } else{
        console.log("Es un numero primo");
     }


///palindromo///
console.log("¿Es un palindromo?")
function palindromeChecker(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
  
    return newStr === strReversed ? "es palindromo" : "no es palindromo";
  }
  
  var palabra = prompt ("Ingresa una palabra para verificar si es palindromo") 
  console.log(palindromeChecker(palabra))


///Generar un número dentro de un rango///
console.log("Número random dentro de un parametro")
function random(max,min) {
    return Math.floor((Math.random() * (maxi - mini + 1)) + mini);
}
var maxi = prompt("Escribe el maximo del rango")
var mini = prompt("Escribe el minimo del rango")

console.log(random(maxi,mini))


///Encontrar el MAX entre dos numeros///
console.log("Encontrar el MAX entre dos numeros")

var num1 = prompt("Esribe el primer número")
var num2 = prompt("Esribe el segúndo número")
var resu = (Math.max(num1,num2))

console.log("El MAX es",resu)

///


}
variables();