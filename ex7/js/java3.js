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