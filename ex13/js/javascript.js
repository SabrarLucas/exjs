var tab = new Array();
var i = 0;
var somme = 0;
var moyenne = 0;

while(nb != 0){
    var nb = parseInt(prompt("Saisir la valeur N°"+i));
    tab[i] = nb;
    somme = somme + tab[i];
    i++;
}
i--;
moyenne = somme / i;
alert("Vous avez saisi "+i+" valeurs. \nLa somme est : "+somme+".\nLa moyenne est : "+moyenne+".");