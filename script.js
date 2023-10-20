function count_brands() {
    const brands = document.querySelectorAll(".marque");
    const b = []
    for ( let i = 0; i < brands.length; i++ ) {
        if( b.includes(brands[i].innerHTML) == false) {
            b.push(brands[i].innerHTML);
        }
    }
    return b.length
}

function count_sum() {
    const numbers = document.querySelectorAll(".nombre")
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i].innerHTML);
    }
    return sum;
}

function integrate_results_count_brands() {
    let nombre_marque = count_brands()
    const total_marque = document.querySelector(".total_marque")
    total_marque.innerHTML = nombre_marque
}

function integrate_numbers_sum_nombre() {
    let somme_nombre = count_sum()
    const total_nombre = document.querySelector(".total_nombre");
    total_nombre.innerHTML = somme_nombre;
}

function add_line(val1, val2, val3) {
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")

    td1.classList.add("identifiant");
    td2.classList.add("marque");
    td3.classList.add("nombre");

    td1.innerHTML = val1
    td2.innerHTML = val2
    td3.innerHTML = val3

    const tr = document.createElement("tr")

    tr.append(td1)
    tr.append(td2)
    tr.append(td3)

    const tbody = document.querySelector("tbody");
    tbody.append(tr)
}

function check_identifiant(valeur) {
    const tbody = document.querySelector("tbody");
    const trs = tbody.querySelectorAll("tr")
    const last_tr = trs[trs.length - 1]
    const last_tr_id = last_tr.querySelector(".identifiant").innerHTML
    if(parseInt(valeur) == parseInt(last_tr_id) + 1) {
        return true
    } else {
        return false
    }
}

function check_marque(valeur) {
    if(valeur[0] === undefined) {
        return false
    }
    return valeur[0] === valeur[0].toUpperCase()
}

function check_nombre(valeur) {
    return typeof(parseInt(valeur)) === 'number' && parseInt(valeur) > 0
}

function checkup(input1, input2, input3) {
    let count = 0;

    // vérifications
    if(check_identifiant(input1.value)) {
        document.querySelector(".error_identifiant").innerHTML = ""
    } else {
        document.querySelector(".error_identifiant").innerHTML = "Attention, l'id doit suivre le dernier du tableau !"
        count++
    }
    // VERIFICATION DE LA MARQUE (doit obligatoirement commencer par une majuscule)
    if( check_marque(input2.value) ) {
        document.querySelector(".error_marque").innerHTML = ""
    } else {
        document.querySelector(".error_marque").innerHTML = "Attention, la première lettre doit être en majuscule"
        count++
    }
    // VERIFICATION DU NOMBRE (<0)
    if( check_nombre(input3.value)) {
        document.querySelector(".error_nombre").innerHTML = ""
    } else {
        document.querySelector(".error_nombre").innerHTML = "Attention à bien mettre un nombre positif supérieur à 0"
        count++
    }

    return count;
}

function exists_marque(marque) {
    const brands = document.querySelectorAll(".marque");
    for ( let i = 0; i < brands.length; i++ ) {
        if( brands[i].innerHTML == marque ) {
            return true;
        }
    }
    return false;
}

function updateLine(marque, nombre) {
    const brands = document.querySelectorAll(".marque");
    const nombres = document.querySelectorAll(".nombre");
    for ( let i = 0; i < brands.length; i++ ) {
        if( brands[i].innerHTML == marque) {
            // ici, je suis sur la ligne de la marque
            // brands[i] ==> case marque concernée
            // i ==> numéro de ligne
            nombres[i].innerHTML = parseInt(nombres[i].innerHTML) + parseInt(nombre)
        }
    }
}


integrate_results_count_brands()
integrate_numbers_sum_nombre()

// On gère l'ajout des lignes dans le tableau
const form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();

    const input1 = document.querySelector("#identifiant")
    const input2 = document.querySelector("#marque")
    const input3 = document.querySelector("#nombre")

    let errors_count = checkup(input1, input2, input3)

    if(errors_count == 0) {
        if(exists_marque(input2.value)) {
            updateLine(input2.value, input3.value)
        } else {
            add_line(input1.value, input2.value, input3.value)
        }

        // on relance les calculs des totaux
        integrate_results_count_brands()
        integrate_numbers_sum_nombre()
    }
})