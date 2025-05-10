function generarCarta() {
  let elementos = ['♦', '♥', '♠', '♣'];
  let valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let elemento = elementos[randomNumberFromArray(elementos)];
  let valor = valores[randomNumberFromArray(valores)];

  let cartaHTML = `
    <div class="top">${elemento}</div>
    <div class="center">${valor}</div>
    <div class="bottom">${elemento}</div>
  `;

  const card = document.getElementById("card");
  card.innerHTML = cartaHTML;

  if (elemento === '♦' || elemento === '♥') {
    card.style.color = 'red';
  } else {
    card.style.color = 'black';
  }
}

function randomNumberFromArray(array) {
  return Math.floor(Math.random() * array.length);
}

window.onload = generarCarta;