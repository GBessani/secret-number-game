let listaDeNumerosSorteados = []; // array
let numeroLimite = 50; // inteiro
let numeroSecreto = gerarNumeroAleatorio(); // inteiro
let tentativas = 1 // inteiro

function gerarNumeroAleatorio()
{
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    //^ serve para sortear um numero aleatório e arredondar para um numero inteiro
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    //^ serve para mostrar a quantidade de elemntos em um array
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        // o .includes serve para verificar se o elemento especifico esta incluso em um array
        return gerarNumeroAleatorio();
        // caso o elemento ja esteja incluso no array a função sera chamada dentro dela mesma (isso se chama funcao recursiva)
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
    exibirTextoNaTela('p', 'Chuta um numero até 50 ai brother');
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
