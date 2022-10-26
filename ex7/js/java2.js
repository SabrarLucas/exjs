var annee = 2022;
var age;
var date = prompt("Donnée votre année de naissance");

age = annee-date;

(age >= 18) ? console.log("Vous êtes majeur") : console.log("Vous êtes mineur");
alert("Vous avez : " + age);