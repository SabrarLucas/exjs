var taille_tab = parseInt(prompt("Saisissez la taille du tableau"));
var tableau = new Array(taille_tab);

for(var i = 0; i <= taille_tab; i++){
    tableau[i] = prompt("Votre valeur");

    console.log(tableau[i]);
}