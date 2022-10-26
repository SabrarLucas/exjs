var propo;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    val_ale = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function verif(){
    propo = document.getElementById("textBox1").value;
    if(propo < val_ale)
        document.getElementById("label1").innerHTML = "Trop petit";

    if(propo > val_ale)
    document.getElementById("label1").innerHTML = "Trop grand";

    if(propo == val_ale)
    document.getElementById("label1").innerHTML = "TROUVER !";
}

alert("Vous devez trouver un nombre entre 0 et 100");

getRandomInt(0,101);

document.querySelector('#button1').onclick = function(){
        verif();
    };