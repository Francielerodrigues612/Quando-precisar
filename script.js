// =====================
// FRASES DA INTRODUÇÃO
// =====================

const frases = [
  "Oi, Gabriel.",
  "Como você está hoje?",
  "Seja qual for a resposta...",
  "Eu preparei algo para você.",
  "Existe algo aqui para você. 🌷"
];

const typing = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");

let fraseAtual = 0;

function escreverTexto(texto, callback){

  typing.innerHTML = "";

  let i = 0;

  const intervalo = setInterval(() => {

    typing.innerHTML += texto.charAt(i);

    i++;

    if(i >= texto.length){

      clearInterval(intervalo);

      setTimeout(callback, 1200);

    }

  }, 60);

}

function mostrarFrases(){

  if(fraseAtual < frases.length){

    escreverTexto(frases[fraseAtual], () => {

      fraseAtual++;

      mostrarFrases();

    });

  }else{

    startBtn.style.opacity = "1";

  }

}

mostrarFrases();


// =====================
// BOTÃO ENTRAR
// =====================

startBtn.addEventListener("click", () => {

  document.getElementById("intro").style.display = "none";

  const transition =
  document.getElementById("transition");

  transition.style.display = "flex";

  setTimeout(() => {

    transition.style.display = "none";

    document.getElementById("menu")
    .style.display = "block";

  }, 2500);

});


// =====================
// ABRIR PÁGINAS
// =====================

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("click", () => {

    document.getElementById("menu")
    .style.display = "none";

    const pagina =
    card.dataset.page;

    document
    .getElementById(pagina)
    .classList.add("active");

  });

});


// =====================
// BOTÕES VOLTAR
// =====================

const voltar =
document.querySelectorAll(".back");

voltar.forEach(btn => {

  btn.addEventListener("click", () => {

    document
    .querySelectorAll(".page")
    .forEach(page => {

      page.classList.remove("active");

    });

    document.getElementById("menu")
    .style.display = "block";

  });

});


// =====================
// DOSE DE CONFORTO
// =====================

const frasesConforto = [

`Gabriel,

se hoje está sendo um daqueles dias em que tudo parece pesado, quero que você saiba que não precisa carregar tudo sozinho.

Nem todos os dias serão incríveis, e tudo bem.

Você não precisa ter todas as respostas agora.

Às vezes o mais importante é apenas continuar, mesmo que seja devagar.

Descanse se precisar.

Respire fundo.

Amanhã pode parecer diferente. 🤍`,

`Ei,

talvez você esteja se cobrando mais do que deveria.

Talvez esteja olhando apenas para o que falta e esquecendo tudo o que já conquistou.

Você já passou por momentos difíceis antes.

Já enfrentou desafios que pareciam impossíveis.

E continua aqui.

Isso diz muito sobre a sua força.

Tenha mais paciência com você mesmo. 🌷`,

`Se o mundo parecer barulhento demais hoje, permita-se fazer uma pausa.

Nem toda batalha precisa ser vencida imediatamente.

Nem toda resposta precisa ser encontrada agora.

Às vezes o coração só precisa descansar um pouco.

Você merece gentileza.

Você merece cuidado.

Você merece paz. ☕🤍`,

`Quero que você lembre de uma coisa:

um dia difícil não define quem você é.

Um erro não define quem você é.

Um momento ruim não define sua história.

Você continua sendo alguém importante, especial e capaz.

Continue caminhando.

Um passo de cada vez. ✨`,

`Talvez ninguém tenha te dito isso hoje.

Então eu vou dizer:

você está indo melhor do que imagina.

Mesmo quando parece que não está avançando.

Mesmo quando acha que não está sendo suficiente.

Seu esforço importa.

Sua presença importa.

Você importa. 🤍`
];

const btnComfort =
document.getElementById("newComfort");

if(btnComfort){

btnComfort.addEventListener("click", () => {

const frase =
frasesConforto[
Math.floor(
Math.random() *
frasesConforto.length
)
];

const comfortText =
document.getElementById("comfortText");

function mostrarConforto(){

const texto =
frasesConforto[
Math.floor(
Math.random() *
frasesConforto.length
)
];

comfortText.innerHTML = texto;

}

mostrarConforto();

document
.getElementById("newComfort")
.addEventListener("click",mostrarConforto);

});

}


// =====================
// MENSAGEM DO DIA
// =====================

const mensagensDia = [

"Você é mais forte do que imagina. 🤍",

"Hoje pode ser um bom dia.",

"Continue caminhando.",

"Você merece coisas boas.",

"Você importa.",

"Tudo bem descansar.",

"Seu esforço vale a pena.",

"Acredite mais em você."

];

const msgDia =
document.getElementById("mensagemDia");

if(msgDia){

msgDia.innerHTML =

mensagensDia[
Math.floor(
Math.random() *
mensagensDia.length
)
];

}


// =====================
// MODO NOTURNO
// =====================

const darkBtn =
document.getElementById("darkModeBtn");

if(darkBtn){

darkBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

});

}


// =====================
// ABRA QUANDO...
// =====================

function abrirEnvelope(tipo){

const caixa =
document.getElementById("textoEnvelope");

if(tipo === "triste"){

caixa.innerHTML = `
<p>
Tudo bem não estar bem todos os dias.
Você vai conseguir passar por isso. 🤍
</p>
`;

}

if(tipo === "feliz"){

caixa.innerHTML = `
<p>
Aproveite este momento.
Você merece viver dias felizes. 🌷
</p>
`;

}

if(tipo === "saudade"){

caixa.innerHTML = `
<p>
As pessoas importantes deixam marcas bonitas no coração. 💌
</p>
`;

}

if(tipo === "cansado"){

caixa.innerHTML = `
<p>
Descanse.
Você não precisa carregar o mundo nas costas.
☕🤍
</p>
`;

}

if(tipo === "acreditar"){

caixa.innerHTML = `
<p>
Você já venceu desafios antes.
Existe mais força dentro de você do que imagina. ✨
</p>
`;

}

}


// =====================
// 100 MOTIVOS
// =====================

const motivos = [

"Porque seu sorriso ilumina o ambiente.",

"Porque você é uma pessoa gentil.",

"Porque você sempre tenta continuar.",

"Porque sua presença faz diferença.",

"Porque você tem um coração bonito.",

"Porque você consegue fazer os outros sorrirem.",

"Porque você é único.",

"Porque você merece coisas boas.",

"Porque você é mais forte do que imagina.",

"Porque existem pessoas que gostam de você.",

"Porque seu jeito é especial.",

"Porque você já superou muita coisa.",

"Porque sua história ainda está sendo escrita.",

"Porque você merece ser feliz.",

"Porque o mundo fica melhor com você nele."

];

const motivoTexto =
document.getElementById("motivoTexto");

function mostrarMotivo(){

const motivo =
motivos[
Math.floor(
Math.random() *
motivos.length
)
];

motivoTexto.innerHTML = motivo;

}

mostrarMotivo();

document
.getElementById("motivoBtn")
.addEventListener(
"click",
mostrarMotivo
);


// =====================
// PARTÍCULAS
// =====================

const particles =
document.getElementById("particles");

if(particles){

for(let i = 0; i < 25; i++){

const p =
document.createElement("div");

const size =
Math.random() * 8 + 4;

p.style.position = "absolute";

p.style.width =
size + "px";

p.style.height =
size + "px";

p.style.borderRadius =
"50%";

p.style.background =
"rgba(255,255,255,0.7)";

p.style.left =
Math.random() * 100 + "%";

p.style.top =
Math.random() * 100 + "%";

p.style.animation =
`flutuar ${Math.random()*8+8}s infinite linear`;

particles.appendChild(p);

}

}


// =====================
// ANIMAÇÃO PARTÍCULAS
// =====================

const style =
document.createElement("style");

style.innerHTML = `

@keyframes flutuar{

0%{
transform:translateY(0);
opacity:.2;
}

50%{
opacity:.8;
}

100%{
transform:translateY(-120px);
opacity:.2;
}

}

`;

document.head.appendChild(style);

const textosEsperanca = [

`Gabriel,

nem sempre conseguimos enxergar o que está sendo preparado para nós.

Às vezes tudo parece parado, confuso ou distante.

Mas a vida costuma surpreender justamente quando pensamos que nada está acontecendo.

Continue acreditando.

Nem toda demora significa que algo deu errado.

Algumas coisas apenas precisam de mais tempo para florescer. 🌻`,

`Se hoje você estiver sem esperança, pegue emprestada um pouquinho desta mensagem.

Existem capítulos da sua história que você ainda não leu.

Existem momentos felizes que você ainda não viveu.

Existem pessoas que ainda vão cruzar seu caminho.

Não desista antes de conhecer as coisas bonitas que o futuro pode trazer. ✨`,

`Talvez você esteja olhando apenas para os problemas de agora.

Mas tente lembrar de quantas vezes você pensou que não conseguiria continuar e mesmo assim continuou.

Você chegou até aqui.

E isso já é prova de que existe força e esperança dentro de você. 🤍`,

`Nenhuma noite dura para sempre.

Por mais escuro que pareça, o sol sempre encontra um jeito de nascer novamente.

Guarde isso no coração:

o fato de hoje estar difícil não significa que amanhã também será.

A história ainda continua. ☀️`,

`Às vezes a esperança não aparece como uma grande luz.

Às vezes ela chega devagar.

Em uma conversa.

Em uma música.

Em um sorriso.

Em uma pequena conquista.

Continue atento aos detalhes.

Muitas vezes são eles que nos lembram que vale a pena continuar. 🌷`

];

const hopeText =
document.getElementById("hopeText");

function mostrarEsperanca(){

const texto =
textosEsperanca[
Math.floor(
Math.random() *
textosEsperanca.length
)
];

hopeText.innerHTML = texto;

}

mostrarEsperanca();

document
.getElementById("newHope")
.addEventListener("click", mostrarEsperanca);

// =====================
// DOSE DE CORAGEM
// =====================

const textosCoragem = [

`Gabriel,

às vezes a coragem não é fazer algo grandioso.

Às vezes a coragem é simplesmente continuar quando tudo parece difícil.

E isso já é uma enorme vitória.

Você é mais forte do que imagina. 💪`,

`Você já enfrentou desafios antes.

Talvez tenha pensado que não conseguiria.

Mas conseguiu.

E continua aqui.

Isso prova a força que existe dentro de você. 🤍`,

`Nem toda vitória recebe aplausos.

Existem conquistas silenciosas que só você conhece.

E elas também merecem ser celebradas. ✨`

];

const courageText =
document.getElementById("courageText");

function mostrarCoragem(){

if(!courageText) return;

const texto =
textosCoragem[
Math.floor(Math.random() * textosCoragem.length)
];

courageText.innerHTML = texto;

}

mostrarCoragem();

const newCourage =
document.getElementById("newCourage");

if(newCourage){
newCourage.addEventListener(
"click",
mostrarCoragem
);
}

// =====================
// CARTA DE EMERGÊNCIA
// =====================

const cartasEmergencia = [

`Gabriel,

se você abriu esta carta hoje, quero que saiba que você não precisa carregar tudo sozinho.

Respire.

Descanse.

Um passo de cada vez.

Você vai conseguir. 🤍`,

`Talvez hoje esteja sendo difícil.

Mas um dia difícil não define quem você é.

Sua história continua.

E ainda existem capítulos lindos pela frente. 🌷`,

`Se ninguém te disse isso hoje:

você importa.

Sua presença faz diferença.

E o mundo é melhor com você nele. ✨`

];

const letterText =
document.getElementById("letterText");

function mostrarCarta(){

if(!letterText) return;

const texto =
cartasEmergencia[
Math.floor(Math.random() * cartasEmergencia.length)
];

letterText.innerHTML = texto;

}

mostrarCarta();

const newLetter =
document.getElementById("newLetter");

if(newLetter){
newLetter.addEventListener(
"click",
mostrarCarta
);
}

