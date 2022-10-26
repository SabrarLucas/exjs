var i = 1;
var prenom
alert("envoyer rien pour arreter la saisie");

while(prenom!=""){
    prenom = prompt("Saisissez le prénom N°" + i);
    console.log("Prénom N°"+i+" : "+prenom);
    i++;
}
i = i-2;
console.log("==================");
console.log("Vous avez saisie "+i+" prénom");