//Lire un entier saisie au clavier
function GetInteger(){
    val = prompt("entrez un entier !");
    while(val != parseInt(val)){
        val = prompt("Error !");
    }
}

//Initialier un tableau avec une taille saisie au clavier
function InitTab(){
    console.log(val+" La taille dans InitTab()");
    tab = new Array(val);
}

//Fire la saisie des valeurs d'un tableau
function SaisieTab(){
    for(i=0; i<val; i++){
        tab[i] = parseInt(prompt("Saisie N°"+i));
    }
}

//Afficher un tableau
function AfficheTab(){
    for(i=0; i<val; i++){
        console.log(i+1+" : "+tab[i]);
    }
}

//Afficher le contenue d'un index saisie au clavier
function RechecheTab(){
    choix = parseInt(prompt("Quel poste choisi ?"));
    confirm("Votre choix : "+tab[choix-1]);
}

//Affiche le maximum et la moyenne d'un tableau
function InfoTab(){
    var somme=0;
    var maximum=0;
    var moyenne=0;
    for(i=0; i<val; i++){
        somme = somme + tab[i];
        if(maximum < tab[i]){
            maximum = tab[i];
        }
    }
    moyenne = somme / val;
    alert("La moyenne est : "+moyenne + "\nLe maximun est : "+maximum);
}


GetInteger();
InitTab();
SaisieTab();
AfficheTab();
RechecheTab();
InfoTab();