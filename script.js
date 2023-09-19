console.log("-----------------------------------");
console.log("script.js");

// Sélectionner toutes les marques et les compter
count_brands();
// Sélectioner toutes les cases de nombre, et faire le total
count_sum();

// transformer les 2 codes ci-dessus en 2 fonctions distinctes.

function count_brands() {
    const brands = document.querySelectorAll(".marque");
    console.log("nombre de marques : ", brands.length)
    return brands.length
}

function count_sum() {
    const numbers = document.querySelectorAll(".nombre")
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i].innerHTML);
    }
    console.log("somme : ", sum);
}

// intégrer les résultats des fonctions précédentes dans le footer du tableau
// marque
let nombre_marque = count_brands()
const total_marque = document.querySelector(".total_marque")
console.log(total_marque);
total_marque.innerHTML = nombre_marque

// nombre