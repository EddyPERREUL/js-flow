"use strict"
const question = "Quel est le nom de ton école ?"
let answer = "Alyra"
// pose la question jusqu'au moment ou l'utilisateur entre Alyra (la reponse est 'Alyra')
// exprime ton enthousiasme

//méthode plus appropriée
 
do {
 answer = prompt(question)
} while (answer !== "Alyra")

alert("Bravo! jeune padawan")


// autre méthode, la boucle n'est pas générée si answer est spécifié
/*
while (answer !== "Alyra") {
    answer = prompt(question)
}

alert("Bravo! jeune padawan")
*/