// mode strict

`use strict`

let number
let somme
somme=0
let m1= `Quel est votre 1er chiffre`
let m2= `Quel est votre 2eme chiffre`
let start
start = Number(prompt(m1))
let end
end = Number(prompt(m2))

// calculer la somme de 1 jusqua'a 10
// utilise console.log pour afficher le résultat
/*
for (number=0; number<=10; number++) {
  somme = number+somme   
}
console.log(somme)
*/
// calculer la somme de 1 jusqua'a 16
// utilise console.log pour afficher le résultat
/*
for (number=0; number<=16; number++) {
    somme = number+somme   
  }
  console.log(somme)
*/
// déclarer des variable start et end
// calculer la somme de start jusqua'à end
// utilise console.log pour afficher le résultat
for (number=start; number <= end; number++) {
    somme = somme+number 
  }
  console.log(somme)