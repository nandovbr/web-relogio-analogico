const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

let data = new Date();
console.log(data);

let hora = data.getHours();
let minuto = data.getMinutes();
let segundo = data.getSeconds();
console.log("Horas: " + hora, "Minutos: " + minuto, "Segundos: " + segundo);

let posicaoHora = (hora * 360 / 12) + (minuto * (360 / 60) / 12);
let posicaoMinuto = (minuto * 360 / 60) + (segundo * (360 / 60) / 60);
let posicaoSegundo = segundo * 360 / 60;

function executaRelogio() {
  posicaoHora = posicaoHora + (3 / 360);
  posicaoMinuto = posicaoMinuto + (6 / 60);
  posicaoSegundo = posicaoSegundo + 6;

  PONTEIROHORA.style.transform = `rotate(${posicaoHora}deg)`;
  PONTEIROMINUTO.style.transform = `rotate(${posicaoMinuto}deg)`;
  PONTEIROSEGUNDO.style.transform = `rotate(${posicaoSegundo}deg)`;
}

const atualizaRelógio = setInterval(executaRelogio, 1000);
