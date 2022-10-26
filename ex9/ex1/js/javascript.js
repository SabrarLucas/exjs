var val1 = parseInt(prompt("Saisir la valeur 1"));
var val2 = parseInt(prompt("Saisir la valeur 2"));
var res;

function produit(a, b){
    res = a*b
    document.getElementById("multi").innerHTML = "Le produit de "+a+" x "+b+" = "+res;
}

function Cube(a){
    res = a*a*a;
    document.getElementById("calcul").innerHTML = "Le cube de "+a+" = "+res;
}

function afficheImg(){
    var img = document.createElement("img");
    img.src = "src/papillon.jpg";

    var div = document.getElementById("mon_img");
    div.appendChild(img);
}

afficheImg();
Cube(val1);
produit(val1,val2);