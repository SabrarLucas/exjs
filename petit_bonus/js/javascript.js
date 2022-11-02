var bt1 = document.getElementById("bt1");
var bt2 = document.getElementById("bt2");
var bt3 = document.getElementById("bt3");
var bt4 = document.getElementById("bt4");

/*-------------------------------- EX 1 -----------------------------*/
function Ex1(){
    var age;
    var jeune = 0;
    var moyen = 0;
    var vieux = 0;
    var arret = 0;
    var i = 0;

    while(arret != -1){
        age = parseInt(prompt("Donnez l'âge"));
        if(age >= 100){
            arret = -1;
        }else if(age < 20){
            jeune = jeune + 1;
        }else if(age > 40){
            vieux = vieux + 1;
        }else if((age >= 20) && (age <= 40)){
            moyen = moyen + 1;
        }

        i++;
    }
    console.log("prenom saisie : "+i);
    alert("Il y a "+jeune+" personnes de moins de 20 ans.\nIl y a "+moyen+" personnes entre 20 et 40 ans.\nIl y a "+vieux+" personnes de plus de 40 ans.")
}

/*-------------------------------- EX 2 -----------------------------*/
function Ex2(){
    var table = parseInt(prompt("Quelle table calculer ?"));

    function TableMultiplication(x){
        var i = 0;
        var res = 0;
        var tab = new Array();
        for(i; i <= 10; i++){
            res = i * x;
            tab[i] = i+" x "+x+" = "+res+"\n";
        }

        alert(tab);
    }
    TableMultiplication(table);
}

/*-------------------------------- EX 3 -----------------------------*/
function Ex3(){
    const tab = ["audrey", "aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
    const saisie = window.prompt(`Veuillez choisir un prénom parmi ${[...tab]}.`);
    if(tab.includes(saisie)){
        console.log(saisie);
	    tab.splice(tab.indexOf(saisie),1);
	    tab.push(" ");
	    console.log(tab);
    }
    else{
        alert("erreur")
    }
}

/*-------------------------------- EX 4 -----------------------------*/
function Ex4(){
    var PU = parseInt(prompt("Saisir le prix unitaire."));
    var QTECOM = parseInt(prompt("Saisir la quantité commandée."));
    var PAP;
    var REM;
    var PORT;
    var res;
    var TOT = PU * QTECOM;

    if(TOT >= 100 && TOT <= 200){
        REM = TOT * 5/100;
        PAP = TOT - REM;
        if(PAP >= 500){
            PORT = 0;
            alert("remise de 5% (-"+REM+") soit "+PAP+"€ et frais de port "+PORT+" à payer : "+PAP+"€");
        }
        else{
            PORT = PAP * 2/100;
            if(PORT < 6){
                res = PAP + 6;
                alert("remise de 5% (-"+REM+") soit "+PAP+"€ et frais de port 2% soit "+PORT.toFixed(2)+"€ mini 6€; à payer : "+res.toFixed(2)+"€");
            }
            else{
                res = PAP + PORT;
                alert("remise de 5% (-"+REM+") soit "+PAP+"€ et frais de port 2% soit "+PORT.toFixed(2)+"€; à payer : "+res.toFixed(2)+"€");
            }
        }
    }
    else if(TOT > 200){
        REM = TOT * 10/100;
        PAP = TOT - REM;
        if(PAP >= 500){
            PORT = 0;
            alert("remise de 10% (-"+REM+") soit "+PAP+"€ et frais de port = "+PORT+"; à payer : "+PAP.toFixed(2)+"€");
        }
        else{
            PORT = PAP * 2/100;
            res = PAP + PORT;
            alert("remise de 10% (-"+REM+") soit "+PAP+"€ et frais de port 2% soit +"+PORT.toFixed(2)+"€; à payer : "+res.toFixed(2)+"€");
        }
    }
    else if(TOT < 100){
        REM = 0;
        PAP = TOT - REM;
        PORT = PAP * 2/100;
        if(PORT < 6){
            res = PAP + 6;
            alert("remise de "+REM+" et frais de port 2% soit "+PORT.toFixed(2)+"€ mini 6€; à payer : "+res.toFixed(2)+"€");
        }
        else{
            res = PAP + PORT;
            alert("remise de "+REM+" et frais de port 2% soit "+PORT.toFixed(2)+"€; à payer : "+res.toFixed(2)+"€");
        }
    }
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