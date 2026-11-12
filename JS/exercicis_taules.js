// 21.1.- Fes un programa que faci el següent:
// ● Defineix una variable de tipus taula, buida.
// ● Afegeixi el valor “Hola” a la posició 0.
// ● Afegeixi el valor “Adeu” a la posició 1.
// ● Escrigui a la consola el contingut de la taula.
// let taula = [ 0,1 ];
// taula[0] = "Hola";
// taula[1] = "Adeu";
// console.log(taula);
// // 21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log())
// // per a fer el següent:
// // ● Afegeixi el valor “Nom” a la posició 2 de la taula.
// // ● Escrigui a la consola el contingut de la taula.
// // ● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “
// // ● Escrigui a la consola el contingut de la taula.
// taula[2] = "Nom";
// console.log(taula);
// taula[1] = ", ";
// console.log(taula);
// 21.3.- Fes un programa que faci el següent:
// ● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73].
// ● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula.
// ● Guardi a la posició 6 de la taula la suma dels elements
// ● Escrigui a la consola el contingut de la taula. Què passa a la posició 5? - Surt com empty, ja que no s'ha assignat cap valor a la posicio 5.
// let taula = [23,45,98,73];
// console.log(taula[0] + taula[2]);
// taula[6] = taula[0] + taula[2];
// console.log(taula);
// 21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir
// prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la
// taula a la consola.
// let numero = parseInt(prompt("Introdueix un numero:"));
// let taula = [numero * 2, numero * 3];
// console.log(taula);
// 21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i
// emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la
// multiplicació i la divisió dels dos valors introduïts.
// let numero1 =parseInt (prompt("Introdueix el primer numero"));
// let numero2 =parseInt (prompt("Introdueix el segon numero"));
// let taula = [numero1+numero2, numero1-numero2,numero1*numero2, numero1/numero2];
// console.log(taula);
// 21.6.- Donada aquesta taula:
// let taula = [23,53,5,62,45,63,78,23,68,3,78,32,53,93,21,78];
// // Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició
// // de la taula.
// console.log(taula[0],taula[15])
// // Donada la definició d’aquesta taula:
let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// // 21.7.- Fes un programa que escrigui a la consola tots els valors emmagatzemats a la
// // taula, un a un.
// console.log(taula[0]);
// console.log(taula[1]);
// console.log(taula[2]);
// console.log(taula[3]);
// console.log(taula[4]);
// console.log(taula[5]);
// console.log(taula[6]);
// console.log(taula[7]);
// console.log(taula[8]);
// console.log(taula[9]);
// console.log(taula[10]);
// console.log(taula[11]);
// console.log(taula[12]);
// console.log(taula[13]);
// console.log(taula[14]);
// console.log(taula[15]);
// 21.8.- Fes un programa que escrigui a la consola la suma tots els valors
// emmagatzemats a la taula.
// let suma = 0;
// for (let i = 0; i < taula.length; i++) {
//     suma += taula[i];
// }
// console.log(suma);
// // or
// console.log(taula[0]+taula[1]+taula[2]+taula[3]+taula[4]+taula[5]+taula[6]+taula[7]+taula[8]+taula[9]+taula[10]+taula[11]+taula[12]+taula[13]+taula[14]+taula[15]);
// 21.9.- Fes un programa que crei una segona taula i emmagatzemi a ella tots els
// valors de la taula, tot sumant-los 25 (així les tres primeres posicions de la nova taula
// emmagatzemarien [48, 70, 88] Un cop fet haurà d’escriure la nova taula a la consola.

// 21.10.- Fes un programa que calculi la mitjana dels valors emmagatzemats a la taula
// i l’escrigui a la consola (la mitjana es calcula sumant tots els valors i dividint pel
// nombre de valors).
// 21.11.- Fes un programa que calculi i escrigui a la consola els valors més gran i més
// petit de la taula.
// 21.12.- Fes un programa que crei una nova taula on s’emmagatzemin només els
// valors parells de la taula i que escrigui el contingut d’aquesta nova taula a la consola.
// 21.13.- Fes un programa que demani a l’usuari un valor (fent servir prompt()) i
// escrigui a la consola quants cops apareix aquest valor a la taula. 