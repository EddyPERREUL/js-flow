"use strict"
const start = 2
const end = 10
/* affiche les nombres de start au end, essaye while, do while et for */

/*
let step = start
while (step <= end) {
    console.log(step)
    step++
}
*/
/*
let step = start
do {
    console.log(step)
    step += 1
} while (step <= end)
*/

for (let step = start; step <= end; step += 1) {
    console.log(step)
}
