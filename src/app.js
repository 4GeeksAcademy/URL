import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
const palo = ['♠', '♥', '♦', '♣'];
const numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function generateCard() {
  const card = document.getElementById('card');

  card.classList.add('fade');

  setTimeout(() => {
    const palorandom = palo[Math.floor(Math.random() * palo.length)];
    const numerorandom = numero[Math.floor(Math.random() * numero.length)];

    document.getElementById('palotop').textContent = palorandom;
    document.getElementById('palobot').textContent = palorandom;
    document.getElementById('numeros').textContent = numerorandom;

    const color = (palorandom === '♥' || palorandom === '♦') ? 'red' : 'black';
    card.style.color = color;

    card.classList.remove('fade');
  }, 300);
}

document.getElementById('generateBtn').addEventListener('click', generateCard);

};
