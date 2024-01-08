`
    Função para graficar os dados das caixas
`
import graficar from "./f_graficar.js"



// Gerar gráficos
function graficos(dados) {

    // Identificação da seção campo de plotagem
    const area_resultados = d3.select('#resultados')

    // Tornando visível ao primeiro clique.
    document.getElementById('resultados').classList.remove('oculto')
    document.getElementById('link-graficos').classList.remove('oculto')


    // Para cada elemento dos dados, gerar um gráfico e cria uma área do gráfico
    for (let chave in dados) {

        const id_area = `id-${chave}`

        // Criação da divisão do gráfico
        area_resultados.append('div')
            .attr('class', 'conteiner-grafico')
            .attr('id', id_area)
            .text(`${chave}`)

        graficar(dados[chave], id_area)

    }


}




export default graficos


