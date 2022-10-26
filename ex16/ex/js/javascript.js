var filtre_cara = new RegExp("^[a-zA-Z0-9]+$");
var filtre_ville = new RegExp("^[a-zA-Z]+$");
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


var valid = document.getElementById("envoie");    
var societe = document.getElementById("societe");
var soc_manque = document.getElementById("raisonSoc");

var perCont = document.getElementById("perCont");
var raisonPersCont = document.getElementById("raisonPersCont");

var adrEnt = document.getElementById("adrEnt");
var raisonAdr = document.getElementById("raisonAdr");

var codPost = document.getElementById("codPost");
var raisonCodpost = document.getElementById("raisonCodpost");

var mail = document.getElementById("mail");
var raisonmail = document.getElementById("raisonmail");

var phone = document.getElementById("phone");
var raisonTel = document.getElementById("raisonTel");

valid.addEventListener("click",validation);



function validation(e){
    function TestSoc(){
        if(societe.value === ""){
            e.preventDefault();
            soc_manque.textContent = "Manquant";
            soc_manque.style.color = "red";
        }else if(filtre_cara.test(societe.value) == false){
            e.preventDefault();
            soc_manque.textContent = "Incorrect";
            soc_manque.style.color = "orange";
        }
    }
    TestSoc();

    function TestPersCont(){
        if(perCont.value === ""){
            e.preventDefault();
            raisonPersCont.textContent = "Manquant";
            raisonPersCont.style.color = "red";
        }else if(filtre_cara.test(perCont.value) == false){
            e.preventDefault();
            raisonPersCont.textContent = "Incorrect";
            raisonPersCont.style.color = "orange";
        }    
    }
    TestPersCont();

    function TestVille(){
        if(adrEnt.value === ""){
            e.preventDefault();
            raisonAdr.textContent = "Manquant";
            raisonAdr.style.color = "red";
        }else if(filtre_ville.test(adrEnt.value) == false){
            e.preventDefault();
            raisonAdr.textContent = "Incorrect";
            raisonAdr.style.color = "orange";
        }
    }
    TestVille();

    function TestCodePost(){
        if(codPost.value === ""){
            e.preventDefault();
            raisonCodpost.textContent = "Manquant";
            raisonCodpost.style.color = "red";
        }else if(filtre_num.test(codPost.value) == false){
            e.preventDefault();
            raisonCodpost.textContent = "Incorrect";
            raisonCodpost.style.color = "orange";
        }
    }
    TestCodePost();

    function TestMail(){
        if(mail.value === ""){
            e.preventDefault();
            raisonmail.textContent = "Manquant";
            raisonmail.style.color = "red";
        }else if(filtre_mail.test(mail.value) == false){
            e.preventDefault();
            raisonmail.textContent = "Incorrect";
            raisonmail.style.color = "orange";
        }
    }
    TestMail();

    function TestPhone(){
        if(phone.value === ""){
            e.preventDefault();
            raisonTel.textContent = "Manquant";
            raisonTel.style.color = "red";
        }else if(filtre_tel.test(phone.value) == false){
            e.preventDefault();
            raisonTel.textContent = "Incorrect";
            raisonTel.style.color = "orange";
        }
    }
    TestPhone();
}

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

select.addEventListener('click', function(){
    if(select.value=="choix"){
        document.getElementById("zoneText").value = "";
    }else{
        document.getElementById("zoneText").value = select.value;
    }
});