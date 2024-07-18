let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function gerarNumeroAleatorio()
{
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
    
}
function exibirTextoNaTela(tag,texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial()
{
    exibirTextoNaTela('h1', 'JOGO DO CHUTE MAROTO');
    exibirTextoNaTela('p', 'Chuta um numero até 100 ai brother');
}
exibirMensagemInicial()
function verificarChute()
{
    let chute = document.querySelector('input').value
    console.log('Quoé tio apertou o gatilho ai??');
    if(chute == numeroSecreto)
    {
        exibirTextoNaTela('h1', 'DALEEEE');
        let palavraTentativa = tentativas > 1 ? 'TENTATIVAS' : 'TENTATIVA'  
        let mensagemTentativas = `MANDOU BEM PIVETE EM  ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else 
    {
        if(chute > numeroSecreto)
        {
        exibirTextoNaTela('h1', 'COÉÉÉ');
        exibirTextoNaTela('p', 'TENTA UM NUMERO É MENOR');
        }
        else
        {
        exibirTextoNaTela('h1', 'COÉÉÉ');
        exibirTextoNaTela('p', 'TENTA UM NUMERO É MAIOR');
        }
        tentativas++;
        limparCampo();
    }
}
function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = '';
}
function resetGame()
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
