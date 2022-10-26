var val;
var somme = 0;
var moyenne = 0;
var i = 0;

do{
    val = parseInt(prompt("Saisir une valeur"));
    somme = somme+val;
    i++;
}while(val!=0)
i = i-1;
console.log("La somme est : "+somme);
moyenne = somme/i;
console.log("La moyenne est : "+moyenne);