
const palpites = document.querySelector('.palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');



function verificarPalpite() {
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpite === 1) {
        palpites.textContent = "Palpites anteriores: "
    }

palpites.textContent += palpiteUsuario + " ";

if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = "Parabéns! Você Acertou!";
    
}

contagemPalpites++;
campoPalpite.value = "";
campoPalpite.focus();
}

envioPalpite.addEventListener('click', verificarPalpite);

function finalizarJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReiniciar = document.createElement('bottomm')
    document.body.appendChild(botaoReiniciar);
    botaoReiniciar.textContent = 'Reiniicar Jogo';
    botaoReiniciar.classList.add('botaoReiniciar');
    document.body.appendChild(botapReiniciar);
    botaoReiniciar.addEventListener('click', reinciiarJogo);
}

function reiniciarjogo() {
    contagemPalpites = 1;
    const paragrafosReiniciarr = document.querySelectorAll('.paragrafosResultado p');
    for (const paragrafoReiniciar of paragrafosReinciar)
        paragrafosReiniciar.textcontent = "";
}

botaoReiniciar.parentNode.removeChild(botaoReiniciar);
campoPalpite.disabled = false;
envioPalpite.disabled = false;
campoPalpite.value = "";
campoPalpite.focus();
ultimeResultado.style.backgroundColor = 'white';
numeroAleatorio = Math.floor(Math.random())
