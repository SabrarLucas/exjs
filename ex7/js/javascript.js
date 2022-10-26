var val = window.prompt("Entrée un nombre");
var res;
res = parseInt(val)%2;
if(res==0){
    window.alert(val + " est un nombre pair");
}
else{
    window.alert(val + " est un nombre impair");
}