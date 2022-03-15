var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

// Essa função irá capturar o tamanho da janela, pra que as posições randômicas sejam criadas apenas nesse espaço
function capturarTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth
    //console.log(altura, largura)
}

capturarTamanhoTela()

var cronometro = setInterval(function(){
    tempo -= 1
    if ( tempo < 0 ){
        clearInterval(cronometro) // Para de executar a função repretidas vezes
        clearInterval(criarMosca)
        window.location.href = 'vitoria.html'
    } else {
       document.querySelector('#cronometro').innerHTML = tempo 
    }
}, 1000);


function criarTamanhoMosquito(){
    classe = Math.floor(Math.random()*3)
    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2: 
            return 'mosquito3'  
    }
    
}

function ladoMosquito(){
    classe = Math.floor(Math.random()*2)
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
  
    }
    
}



function criandoMosquito(){
    
    // Lógica que irá remover o mosquito anterior caso ele exista
    if(document.querySelector('#mosquito')){
        document.querySelector('#mosquito').remove()
        document.querySelector('#v' + vidas).src = 'imagens/coracao_vazio.png'
        vidas++
        if (vidas == 4) {
            window.location.href = 'game_over.html'
        }
    }
    

    // As 2 linhas de código abaixo irão criar valores randômicos que se encaixem dentro da janela
    var posicaoX = Math.floor(Math.random()*largura) - 90 
    var posicaoY = Math.floor(Math.random()*altura) - 90
    //Esse menos - 90 é utilizado pois, a aparição da imagem é de acordo com o eixo da imagem que se localiza no canto superior esquerdo. Dessa forma a imagem completa pode ultrapassar o tamanho da janela. usando o - 90 diminuimos o espaço disponível para a aparição da imagem, evitando que apareça a barra de rolagem.
    console.log(posicaoX, posicaoY)

    // Há a possibilidade de a imagem assumir posições negativas, isso ocorrerá caso o número randômico seja 0. Para evitar esse tipo de erro é necessário criar uma condicional para quando isso ocorrer.
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //Criando elementos html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = criarTamanhoMosquito() + ' ' + ladoMosquito()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        // para evitar essa linha de código verbosa, usamos o atributo this que já indica que é pra remover o elemento que recebe a função document.querySelector('#mosquito').remove()
        this.remove()
    }

    document.body.appendChild(mosquito)
}
