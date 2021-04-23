// Chiedere all'utente il suo nome

var namee = prompt("Qual'è il tuo nome?");
console.log(namee );

// Chiedere all'utente il suo cognnome

var lastName = prompt("Qual'è il tuo cognome?");
console.log(lastName);

// Chiedere all'utente il suo colore preferito

var favColour = prompt("Qual'è il tuo colore preferito?");
console.log(favColour);

//Password generata
var number = 21;

var pwGen = namee + lastName + favColour + number;
console.log(pwGen);

document.getElementById("namee").innerHTML = "Ciao " + namee;
document.getElementById('lastName').innerHTML = "La tua nuova password è " + namee + lastName + favColour + "21";

console.log(pwGen.toLowerCase)

document.getElementById('lastName').innerHTML = pwGen.toLowerCase();