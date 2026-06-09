let arvores = 0;

const treeBtn = document.getElementById("treeBtn");
const counter = document.getElementById("counter");

treeBtn.addEventListener("click", () => {
    arvores++;
    counter.innerText = `${arvores} árvores preservadas`;
});

function calcularAgua() {

    let minutos =
    document.getElementById("minutes").value;

    let gasto = minutos * 12;

    document.getElementById("resultadoAgua").innerText =
    `Você gastou aproximadamente ${gasto} litros de água.`;
}

function quiz(resposta){

    let resultado =
    document.getElementById("quizResultado");

    if(resposta === "certo"){
        resultado.innerText =
        "✅ Correto! O papel vai na coleta azul.";
    }
    else{
        resultado.innerText =
        "❌ Resposta incorreta.";
    }
}

let porcentagem = 0;

function progresso(){

    if(porcentagem < 100){
        porcentagem += 20;
    }

    document.getElementById("fill").style.width =
    porcentagem + "%";
}