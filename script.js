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


// On gère l'ajout des lignes dans le tableau
const form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();

    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")

    td1.classList.add("identifiant");
    td2.classList.add("marque");
    td3.classList.add("nombre");

    const input1 = document.querySelector("#identifiant")
    const input2 = document.querySelector("#marque")
    const input3 = document.querySelector("#nombre")

    td1.innerHTML = input1.value
    td2.innerHTML = input2.value
    td3.innerHTML = input3.value

    const tr = document.createElement("tr")

    tr.append(td1)
    tr.append(td2)
    tr.append(td3)

    const tbody = document.querySelector("tbody");
    tbody.append(tr)

    // on relance les calculs des totaux
    integrate_results_count_brands()
    integrate_numbers_sum_nombre()
})