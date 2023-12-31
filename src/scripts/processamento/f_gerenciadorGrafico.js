`
    Função para graficar os dados das caixas
`
import graficar from "./f_graficar.js"
import ajusteNDias from "./f_ajusteNDias.js"



// Gerar gráficos
function graficos(dados) {

    // Identificação da seção campo de plotagem
    const area_resultados = d3.select('#resultados')

    // Tornando visível ao primeiro clique.
    document.getElementById('resultados').classList.remove('oculto')
    document.getElementById('link-graficos').classList.remove('oculto')


    // Para cada elemento dos dados, gerar um gráfico e cria uma área do gráfico
    // for (let chave in dados) {

    //     // Criação do id da área
    //     const id_area = `id-${chave}`

    //     // Criação da divisão do gráfico
    //     area_resultados.append('div')
    //         .attr('class', 'conteiner-grafico')
    //         .attr('id', id_area)
    //         .text(`${chave}`)

    //     graficar(dados[chave], id_area)

    // }


    // Criação da área do gráfico do ajuste
    area_resultados.append('div')
        .attr('class', 'conteiner-grafico')
        .attr('id', 'id-ajuste')
        .text('Ajuste')
    

    // Função de ajuste dos dados
    ajusteNDias(dados['superficie'])


    
    // Criação do gráfico do ajuste
    graficar(dados['superficie'], 'id-ajuste')


}




export default graficos


