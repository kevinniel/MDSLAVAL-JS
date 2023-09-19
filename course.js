console.log("course.js");

// sélection d'un élément => utilisant le sélecteur CSS
// const table = document.querySelector("table");
// sélection de plusieurs éléments
// const tds = document.querySelectorAll("td");
// sélection des marques : 
// const brands = document.querySelectorAll(".marque");

// plusieurs sélections d'affilé :
// 1 - sélectionner le tableau entier
// const table = document.querySelector("table");
// 2 - sélectionner le footer du tableau à partir du 1
// const table_footer = table.querySelector("tfoot");

// affichage des sélections
// console.log(table);
// console.log(tds);

// afficher la case 3 du tableau tds :
// console.log(tds[2]);

// affiche la case qui contient "champion"
// console.log(tds[7]);


// Afficher tous les tds 1 par 1, sans tableau :

// Première manière
// tds.forEach((td) => 
//     console.log(td)
// )

// deuxième manière
// for (let i = 0; i < tds.length; i++) {
//     console.log( tds[i] );
// }

// création d'une fonction "checkAge" pour vérifier si une personne est majeur ou non.
function checkAge(param1) {
    // contenu de la fonction
    if(param1 >= 18) {
        // le return arrête l'exécution de la fonction
        return true
    }
    return false
}

// j'appelle ma fonction pour la tester : 

console.log("12 ans : ", checkAge(12) )
console.log("19 ans : ", checkAge(19) )
console.log("18 ans : ", checkAge(18) )

let check_age_90 = checkAge(90);
console.log("90 ans : ", check_age_90 )
console.log("test : ", checkAge("toto") )