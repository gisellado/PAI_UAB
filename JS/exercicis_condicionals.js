// Condicional simple: if
// 13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el
// número llegit és negatiu” si el número és més petit que zero.
let numero1 = parseInt(prompt("13.1:Introdueix un numero:"));
 if (numero1 < 0) {
    console.log("13.1:El numero llegit es negatiu");
}
// 13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és parell” si el número es parell.
let numero2 = parseInt(prompt("13.2:Introdueix un numero:"));
if (numero2 % 2 === 0) {
    console.log("13.2:El numero llegit es parell");
}
// 13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit
// és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if
// per cada cas.
let numero3 = parseInt(prompt("13.3:Introdueix un numero:"));
if (numero3 % 2 === 0) {
    console.log("13.3:El numero llegit es parell");
} else {
    console.log("13.3:El numero llegit es senar");   
}
// 13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
// el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més
// gran que el segon i l’altre per comprovar si el segon número és més gran que el primer.
let numero4 = parseInt(prompt("13.4:Introdueix el primer numero:"));
let numero5 = parseInt(prompt("13.4:Introdueix el segon numero:"));  
if (numero4 > numero5) {
    console.log("13.4:El primer numero es el mes gran");
} else {
    console.log("13.4:El segon numero es el mes gran");
}
// 13.5.- Escriu un programa que, donat tres número llegits amb prompt, escrigui a la consola
// el més gran dels tres. Pista: fes servir tres if cadascun d’ells per comprovar si un dels
// números és el més gran.
let numero6 = parseInt(prompt("13.5:Introdueix el primer numero:"));
let numero7 = parseInt(prompt("13.5:Introdueix el segon numero:"));
let numero8 = parseInt(prompt("13.5:Introdueix el tercer numero:"));
if (numero6 >= numero7 && numero6 >= numero8) {
    console.log("13.5:El primer numero es el mes gran");
} else if (numero7 >= numero6 && numero7 >= numero8) {
    console.log("13.5:El segon numero es el mes gran");
} else {
    console.log("13.5:El tercer numero es el mes gran");
}
// 13.6.- Fent servir només if, escriure un programa que donat amb prompt un número de mes,
// entre 1 i 12, escrigui per pantalla el nom del mes que correspon. 
let mes = parseInt(prompt("13.6:Introdueix un numero de mes (1-12):"));
if (mes === 1) {
    console.log("13.6:Gener");
} else if (mes === 2) {
    console.log("13.6:Febrer");
} else if (mes === 3) {
    console.log("13.6:Març");
} else if (mes === 4) {
    console.log("13.6:Abril");
} else if (mes === 5) {
    console.log("13.6:Maig");
} else if (mes === 6) {
    console.log("13.6:Juny");
} else if (mes === 7) {
    console.log("13.6:Juliol");
} else if (mes === 8) {
    console.log("13.6:Agost");
} else if (mes === 9) {
    console.log("13.6:Setembre");
} else if (mes === 10) {
    console.log("13.6:Octubre");
} else if (mes === 11) {
    console.log("13.6:Novembre");
} else if (mes === 12) {
    console.log("13.6:Desembre");
} else {
    console.log("13.6:Numero de mes no valid");
}
