`
    Função para graficar os dados das caixas
`


// Gerar gráficos
function graficos(dados) {

    // Identificação da seção campo de plotagem
    const area_resultados = d3.select('#resultados')


        // Identificação do link para os gráficos
        const link_graficos = document.getElementById('link-graficos')

        // Tornando visível ao primeiro clique.
        document.getElementById('resultados').classList.remove('oculto')
        document.getElementById('resultados').classList.remove('oculto')


        area_resultados.append('div')
            .attr('class', 'conteiner-grafico')
            .text('TEXTO TEXTO TEXTO')





        
}




export default graficos


