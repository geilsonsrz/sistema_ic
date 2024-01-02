`
    Função para graficar os dados das caixas
`


// Gerar gráficos
function graficos(dados) {
    
    // Identificação da seção campo de plotagem
    const resultados = document.getElementById('resultados')
    // Tornando visível ao primeiro clique.
    resultados.classList.remove('tela-oculta')

    // Inicialização do CANVAS para desenhar os gráficos
    let canvas = document.createElement('canvas')
    let div = document.createElement('div')
    div.appendChild(canvas)
    resultados.appendChild(div)


    // Desenhando no canvas e configurações
    let contexto = canvas.getContext('2d')

    contexto.fillStyle = 'blue'

    contexto.fillRect(100, 100, 100, 100)




    

}



export default graficos


