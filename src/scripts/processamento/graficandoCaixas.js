`
    Função para graficar os dados das caixas
`



function graficos() {

    const ativar_tela = document.getElementById('resultados')

    ativar_tela.classList.remove('tela-oculta')

    const resultados = document.getElementById('graficos')

    resultados.innerText = resultados.innerText + '\nMudou!'


}



export default graficos


