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
        document.getElementById('link-graficos').classList.remove('oculto')


        // Para cada elemento dos dados, gerar um gráfico
        for (let chave in dados) {
            
            // Criação da divisão do gráfico
            area_resultados.append('div')
                .attr('class', 'conteiner-grafico')
                .text(`${chave}`)


            for (let i in dados[chave]) {

                let dado = dados[chave][i][0]

            }

        }

        
}




export default graficos


