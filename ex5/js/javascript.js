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