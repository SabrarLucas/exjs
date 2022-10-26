var bt1 = document.getElementById("bt1");
var bt2 = document.getElementById("bt2");
var bt3 = document.getElementById("bt3");
var bt4 = document.getElementById("bt4");

function Ex1(){
    var nom = window.prompt("Saisissez votre nom");
    var prenom = window.prompt("Saisissez votre prénom");
    var sexe = window.prompt("Quel est votre sexe ? (H/F)")
    var ident;
    if (sexe == "H"){
        if (window.confirm("Vous êtes un homme")){
            ident = "Monsieur";
        }
    }
    else if (sexe == "F"){
        if (window.confirm("Vous êtes une femme")){
            ident = "Madame";
        }
    }
    else{
        window.confirm("Il y a une erreur");
    }

    window.alert("Bonjour " + ident + " " + nom + " " + prenom);
}

function Ex2(){
    var a = "100";
    var b = 100;
    var c = 1.00;
    var d = new Boolean(1);

    window.alert("Ceci est une chaîne de caractère : " + a);
    b--;
    window.alert(b);
    window.confirm(parseInt(a)+c);
    window.confirm(!d);
}

function Ex3(){
    alert("Nombre pair ou impaire");
    var val = window.prompt("Entrée un nombre");
    var res;
    res = parseInt(val)%2;
    if(res==0){
        window.alert(val + " est un nombre pair");
    }
    else{
        window.alert(val + " est un nombre impair");
    }

    ///////////////////////////////////////////////////////
    alert("Exo sur l'âge");
    var annee = 2022;
    var age;
    var date = prompt("Donnée votre année de naissance");

    age = annee-date;

    (age >= 18) ? console.log("Vous êtes majeur") : console.log("Vous êtes mineur");
    alert("Vous avez : " + age);

    ///////////////////////////////////////////////////////
    alert("Calculatrice");
    var val1 = prompt("Saisir la 1er valeur");
    var ope = prompt("Saisir un opérateur(+, -, *, /)");
    var val2 = prompt("Saisir la 2eme valeur");

    switch (ope)
    {
        case "+":
            res = parseInt(val1) + parseInt(val2);
            break;
        
        case "-":
            res = parseInt(val1) - parseInt(val2);
            break;

        case "*":
            res = parseInt(val1) * parseInt(val2);
            break;

        case "/":
            if(val2==0){
                alert("Division par 0 impossible")
            }
            else{
                res = parseInt(val1) / parseInt(val2);
            }
            break;

        default:
            alert("Erreur sur l'opérateur");
    }

    alert("Le resultat est : " + res);
}

function Ex4(){
    alert("Exo 1");
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

    ///////////////////////////////////////////////////////
    alert("Exo 2");
    var val = prompt("Saisissez un nombre");
    var i = 0;

    for(i;i<=val;i++){
        console.log(i);
    }

    ///////////////////////////////////////////////////////
    alert("Exo 3");
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

    ///////////////////////////////////////////////////////
    alert("Exo 4");
    var N = parseInt(prompt("Saisire le nombres de multiples"));
    var X = parseInt(prompt("Saisire la valeur à calculer"));
    var i = 1;
    var res = 0;

    for(i; i<=N;i++){
        res=i*X;
        console.log(i + " x " + X + " = " + res);
    }

    ///////////////////////////////////////////////////////
    alert("Exo 5");
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
}


bt1.addEventListener('click', function(){
    Ex1();
});

bt2.addEventListener('click', function(){
    Ex2();
});

bt3.addEventListener('click', function(){
    Ex3();
});

bt4.addEventListener('click', function(){
    Ex4();
});