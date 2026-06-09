// CONTADOR DE ÁRVORES

let arvores = 0;

const treeBtn =
document.getElementById("treeBtn");

const counter =
document.getElementById("counter");

const badge =
document.getElementById("badge");

treeBtn.addEventListener("click",()=>{

arvores++;

counter.innerText =
`${arvores} árvores preservadas`;

if(arvores >= 10){
badge.innerText =
"🌱 Semente Verde";
}

if(arvores >= 25){
badge.innerText =
"🌳 Guardião da Natureza";
}

if(arvores >= 50){
badge.innerText =
"🏆 Herói Ambiental";
}

});

// CALCULADORA DE ÁGUA

function calcularAgua(){

let minutos =
document.getElementById("minutes").value;

let gasto = minutos * 12;

document.getElementById("resultadoAgua")
.innerText =
`Você gastou aproximadamente ${gasto} litros de água.`;

}

// QUIZ

function quiz(resposta){

const resultado =
document.getElementById("quizResultado");

if(resposta === "certo"){
resultado.innerText =
"✅ Correto!";
}
else{
resultado.innerText =
"❌ Resposta incorreta.";
}

}

// BARRA

let porcentagem = 0;

function progresso(){

if(porcentagem < 100){
porcentagem += 20;
}

document.getElementById("fill")
.style.width =
porcentagem + "%";

}

// GRÁFICO

new Chart(
document.getElementById("desmatamentoChart"),
{
type:"bar",
data:{
labels:["2023","2024"],
datasets:[{
label:"Área desmatada (hectares)",
data:[633,226]
}]
},
options:{
responsive:true
}
}
);

// MAPA

const map =
L.map('map').setView(
[-24.7,-51.5],
7
);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
attribution:'OpenStreetMap'
}
).addTo(map);

L.marker([-25.24,-50.02])
.addTo(map)
.bindPopup("Parque Estadual de Vila Velha");

L.marker([-24.57,-50.25])
.addTo(map)
.bindPopup("Parque Estadual do Guartelá");

L.marker([-25.55,-48.32])
.addTo(map)
.bindPopup("Parque Estadual Ilha do Mel");

L.marker([-25.39,-49.00])
.addTo(map)
.bindPopup("Parque Estadual Serra da Baitaca");

// FOLHAS

const canvas =
document.getElementById("leafCanvas");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const folhas = [];

for(let i=0;i<50;i++){

folhas.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*8+4,
speed:Math.random()*2+1
});

}

function animar(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

folhas.forEach(f=>{

ctx.beginPath();

ctx.fillStyle="#99CD85";

ctx.ellipse(
f.x,
f.y,
f.size,
f.size/2,
Math.PI/4,
0,
Math.PI*2
);

ctx.fill();

f.y += f.speed;

if(f.y > canvas.height){

f.y = -20;

f.x =
Math.random()*canvas.width;

}

});

requestAnimationFrame(animar);

}

animar();