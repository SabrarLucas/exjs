var element = document.getElementById("button1");
var nom;

element.addEventListener("click", function() 
{
   nom = prompt("Saisissez votre nom");
   alert("Vous avez saisi: "+nom);
});