function generarCarta() {
  let palos = ['♦', '♥', '♠', '♣'];
  let valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let palo = palos[randomNumberFromArray(palos)];
  let valor = valores[randomNumberFromArray(valores)];

  let cartaHTML = `
    <div class="top">${palo}</div>
    <div class="center">${valor}</div>
    <div class="bottom">${palo}</div>
  `;

  const card = document.getElementById("card");
  card.innerHTML = cartaHTML;

  if (palo === '♦' || palo === '♥') {
    card.style.color = 'red';
  } else {
    card.style.color = 'black';
  }
}

function randomNumberFromArray(array) {
  return Math.floor(Math.random() * array.length);
}

window.onload = generarCarta;