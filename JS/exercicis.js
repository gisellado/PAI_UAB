// Noms de variables
// 1.1.- Digues quins d'aquests noms de variables són correctes i quins no.
// 1. variAble -si
// 2. Variable -si
// 3. vari-able -si
// 4. vari_able -si
// 5. _variable -no
// 6. vari.able -no
// 7. vari4able -no
// 8. 4variable -no
// 9. variable4  -si
// 10.variable_4 -si
// 11.LaMevaVariable si
// 1.2.- Volem guardar a una variable el nom d'un empleat. Quin d'aquests noms de variable
// seria el més addient?
// 1. nomempleat 
// 2. Nomempleat -el mes adient
// 3. NomEmpleat 
// 4. nomEmpleat 
// 5. Nom_empleat 
// 6. _NomEmpleat
// 7. nomEmpleat0
// 8. nom_empleat
// 9. nom0empleat
// 10.Nom empleat
// Declaració
// 2.1.- Què passaria si féssim aquestes declaracions de variables?
// Pensa primer que creus que passaria. Després pots provar a executar aquestes instruccions
// i veure que passa (si passa alguna cosa).
// 2.1-a.-a la consola surt un 2
// var a = 1;
// var a = 2;
// console.log(a);
// b.-surt syntax error perque no es pot declarar dues vegades la mateixa variable amb let
// var a = 1;
// let a = 2;
// console.log(a);
// c.-surt syntax error perque no es pot declarar dues vegades la mateixa variable amb let
// let a = 1;
// var a = 2;
// console.log(a);
// d.- surt syntax error perque no es pot declarar dues vegades la mateixa variable amb let
// let a = 1;
// let a = 2;
// console.log(a);
// Subtema 3. Assignació
// 3.1.- Quines d'aquestes assignacions són correctes i quines no? Tracta cada assignació
// // com si fos independent.
// let a = 5; -correcte
// let b = 5z;-incorrecte
// let c = "c";-correcte
// let c = 'c';-correcte
// let c = "c';-incorrecte
// let c = "c'c'c";-correcte
// let c = "c'c"c';-incorrecte
// let n = 35;-correcte
// let n = 35va;-incorrecte
// 3.2.- Tenim un programa que té les assignacions que tenim a continuació. Hi ha, però, una
// línia errònia. Quina és? Escriu en un paper quina creus que és i desprès executa el codi.
// Fixa't en l'error que et dona el navegador.- el error esta qeu la c no te el valor assignat , caldria un let c = 7;
//  abans de fer la assignacio b = c;
// let a = 5;
// let b = c;
// c = 7;
// 3.3.- De quins tipus són les dades que assignem a aquestes variables?
// let a = 55;- numerica
// let b = 55.5;- numerica
// let c = "Hola";-string
// let d = 'Hola';-string
// let e = true;- booleana