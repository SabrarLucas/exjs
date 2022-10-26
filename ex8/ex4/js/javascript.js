var N = parseInt(prompt("Saisire le nombres de multiples"));
var X = parseInt(prompt("Saisire la valeur à calculer"));
var i = 1;
var res = 0;

for(i; i<=N;i++){
    res=i*X;
    console.log(i + " x " + N + " = " + res);
}