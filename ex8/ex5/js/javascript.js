var mot = prompt("Saisir une mot");
var nbLettre = mot.length;
var i=0;
var lettre;
var nbVoyelle = 0;

while(i<=nbLettre){
    lettre = mot.substring(i, i+1);
    console.log(lettre); 
    i++;
    if(lettre=="a" || lettre=="e" || lettre=="i" || lettre=="o" || lettre=="u" || lettre=="y"){
        nbVoyelle = nbVoyelle+1;
    }
}
console.log("Il y a " + nbVoyelle + " voyelle dans le mot " + mot);