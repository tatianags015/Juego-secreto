/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del número secreto";
let parrafo = document.querySelector("p");
parrafo.innerHTML = "indica un número del 1 al 10";

function intentoDeUsuario() {
    alert("click desde el botón");
}
*/

/* //intento muy fallido
 function mostrarSaludo() {
       console.log("Hola Mundo");
 }

function insertarNombre() {
    let nombre = prompt ("escriba su nombre");
     let ciudadMinuscula = nombre.toLowerCase();
      alert("¡Hola, " + nombre + " ! ");
}*/


/*Crear una función que muestra "¡Hola, mundo!" en la consola.
function mostrarHola() {
  console.log("¡Hola, mundo!");
}

mostrarHola();


Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.
function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

mostrarHolaNombre("Alice"); 

//Crear una función que recibe un número como parámetro y devuelve el doble de ese número.
function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);


//Crear una función que recibe tres números como parámetros y devuelve su promedio.
function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);

//Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.
function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);

//Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);*/









let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numweoMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(idElemento, texto) {
    let elementoHTML = document.querySelector(idElemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDelUsuario = parseInt(document.getElementById("valorUsuario").value);


   if (numeroDelUsuario === numeroSecreto) {
    asignarTextoElemento ("p", `acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById("reiniciar").removeAttribute("disabled");



    } else {
      //el usuario no acertó
      if (numeroDelUsuario>numeroSecreto){
        asignarTextoElemento ("p", "el número secreto es menor");
      } else {
        asignarTextoElemento ("p", "el número secreto es mayor");
      }    
      intentos++;
      limpiarCaja();
  }
  return;
}

function limpiarCaja() {
 document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerador = Math.floor(Math.random()*numweoMaximo)+1;  

    console.log(numeroGenerador);
    console.log(listaNumerosSorteados);

    // si ya sorteé todos los números posibles, limpiar la lista
    if (listaNumerosSorteados.length === numweoMaximo) {
      asignarTextoElemento("p", "se han sorteado todos los números posibles");

    } else {

    //si el numero ya fue sorteado, volver a generar
    if (listaNumerosSorteados.includes(numeroGenerador)) {
      return generarNumeroSecreto();
    }  else {
      listaNumerosSorteados.push(numeroGenerador);
      return numeroGenerador;
    }
}}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `indica un número del 1 al ${numweoMaximo}`);
    numeroSecreto = generarNumeroSecreto();
      intentos = 1;


}


function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();

  //indicar mensaje de intervalo de números
  condicionesIniciales();

  //generar nuevo número aleatorio
  numeroSecreto = generarNumeroSecreto();

  //reiniciar contador de intentos
  intentos = 1;

  //deshabilitar el botón de nuevo juego
  document.getElementById("reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();