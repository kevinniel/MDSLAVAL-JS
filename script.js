console.log("-----------------------------------");
console.log("script.js");

// Sélectionner toutes les marques et les compter
count_brands();
// Sélectioner toutes les cases de nombre, et faire le total
count_sum();

// transformer les 2 codes ci-dessus en 2 fonctions distinctes.

function count_brands() {
    const brands = document.querySelectorAll(".marque");
    return brands.length
}

function count_sum() {
    const numbers = document.querySelectorAll(".nombre")
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i].innerHTML);
    }
    return sum;
}

// intégrer les résultats des fonctions précédentes dans le footer du tableau
// marque
function integrate_results_count_brands() {
    let nombre_marque = count_brands()
    const total_marque = document.querySelector(".total_marque")
    total_marque.innerHTML = nombre_marque
}
integrate_results_count_brands()

// nombre
function integrate_numbers_sum_nombre() {
    let somme_nombre = count_sum()
    const total_nombre = document.querySelector(".total_nombre");
    total_nombre.innerHTML = somme_nombre;
}
integrate_numbers_sum_nombre()
// créer 2 fonctions pour MAJ le total Marque et le total Nombre