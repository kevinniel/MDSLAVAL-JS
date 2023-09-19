console.log("-----------------------------------");
console.log("script.js");

// Sélectionner toutes les marques et les compter
const brands = document.querySelectorAll(".marque");
console.log("nombre de marques : ", brands.length)
// Sélectioner toutes les cases de nombre, et faire le total
const numbers = document.querySelectorAll(".nombre")
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    console.log( numbers[i].innerHTML );
    sum += parseInt(numbers[i].innerHTML);
}
console.log("somme : ", sum);


// transformer les 2 codes ci-dessus en 2 fonctions distinctes.