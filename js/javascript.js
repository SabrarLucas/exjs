var filtre_cara = new RegExp("^[a-zA-Z0-9]+$");
var filtre_num = new RegExp("^([0-9a-z]){5}$");
var filtre_mail = new RegExp("(@){1}");
var filtre_tel = new RegExp("^0(6|7)[0-9]{8}$");

document.getElementById("societe").value = "";
document.getElementById("perCont").value = "";
document.getElementById("adrEnt").value = "";
document.getElementById("codPost").value = "";
document.getElementById("mail").value = "";
document.getElementById("phone").value = "";
document.getElementById("select").value = "choix";
document.getElementById("zoneText").value = "";

function TestSoc(){
    societe =  document.getElementById("societe").value;
    res = filtre_cara.test(societe);
    if(res == false)
        document.getElementById("raisonSoc").innerHTML = "Le champ Société doit comporter au moins 1 caractère";
}

function TestPersCont(){
    persCont = document.getElementById("perCont").value;
    res = filtre_cara.test(persCont);
    if(res == false)
        document.getElementById("raisonPersCont").innerHTML = "Le champ Personne à contacter doit contenir au moins 1 caractère";
}

function TestCodePost(){
    codPost = document.getElementById("codPost").value;
    res = filtre_num.test(codPost);
    if(res == false)
        document.getElementById("raisonCodpost").innerHTML = "Le champ Code Postale doit comporter 5 caractères numériques";
}

function TestVille(){
    ville = document.getElementById("adrEnt").value;
    res = filtre_cara.test(ville);
    if(res == false)
        document.getElementById("raisonAdr").innerHTML = "Le champ adresse de l'entreprise doit contenir au moins 1 caractère";
}

function TestMail(){
    mail = document.getElementById("mail").value;
    res = filtre_mail.test(mail);
    if(res == false)
        document.getElementById("raisonmail").innerHTML = "Le champ E-mail doit contenir le caractère '@'";
}

function TestPhone(){
    phone = document.getElementById("phone").value;
    res = filtre_tel.test(phone);
    if(res == false)
        document.getElementById("raisonTel").innerHTML = "Le numero de télephone doit commencer par 06 ou 07";
}


let select = document.getElementById("select");
let effacer = document.getElementById("effacer");
let envoie = document.getElementById("envoie");


select.addEventListener('click', function(){
    choix = document.getElementById("select").value;
    if(choix == "choix")
        document.getElementById("zoneText").value = "";
    else
        document.getElementById("zoneText").value = choix;   
});

effacer.addEventListener('click', function(){
    document.getElementById("societe").value = "";
    document.getElementById("perCont").value = "";
    document.getElementById("adrEnt").value = "";
    document.getElementById("codPost").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("select").value = "choix";
    document.getElementById("zoneText").value = "";
    document.getElementById("raisonSoc").remove();
    document.getElementById("raisonPersCont").remove();
    document.getElementById("raisonCodpost").remove();
    document.getElementById("raisonAdr").remove();
    document.getElementById("raisonmail").remove();
    document.getElementById("raisonTel").remove();
});

envoie.addEventListener('click', function(event){
    event.preventDefault();
    TestSoc();
    TestPersCont();
    TestVille();
    TestCodePost();
    TestMail();
    TestPhone();
    
});