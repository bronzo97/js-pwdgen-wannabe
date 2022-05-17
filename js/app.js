alert(`Benvenuto/a nel suggeritore di password: ti porremo un qualche domanda per aiutarci a creare una password per te!`);
const name = prompt("Quale è il tuo nome??");
const surname = prompt("Quale è il tuo Cognome??");
const color = prompt("Qual'è il tuo colore preferito??");
alert(`Ecco come promesso una password per te!`);



document.getElementById("passwordSuggest").innerHTML = `${name}${surname}${color}22`;
