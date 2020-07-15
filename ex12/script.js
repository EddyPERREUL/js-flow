"use strict"
//on va créer une simple calculatrice qui fait l'addition
/* demande a jusqu'au moment où tu obtiennes une valeur numérique */
/* demande b jusqu'au moment où tu obtiennes une valeur numérique */

/* fais l'addition et affiche le résultat */

let a 
const questiona = "Quel est-on 1er chiffre"

let b
const questionb = "Quel est-on 2ème chiffre"

while (isNaN(a)) {
    a = (Number(prompt(questiona)))
 }

 while (isNaN(b)) {
    b = (Number(prompt(questionb)))
 }

 alert(`T'on résultat est ${a+b}`)