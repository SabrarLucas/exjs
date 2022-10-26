var str1;
var str2;
var n;

function strtok(str1,str2,n){
    str1 = prompt("Saisissez une liste avec un séparatuer");
    str2 = prompt("Quel est votre séparateur ?");
    confirm("Votre liste est : "+str1);
    n = parseInt(prompt("Quel mot récuperer ?"));

    var sep = str1.split(str2);
    alert(sep[n-1]);
}

strtok(str1,str2,n);