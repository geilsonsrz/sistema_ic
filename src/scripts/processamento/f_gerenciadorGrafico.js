`
    Função para graficar os dados das caixas
`
import graficar from "./f_graficar.js"
import ajusteNDias from "./f_ajusteNDias.js"
import comparativo from "./f_comparativos.js"



// Gerar gráficos
function graficos(dados) {

    // Identificação da seção campo de plotagem
    const area_resultados = d3.select('#resultados')

    // Tornando visível ao primeiro clique.
    document.getElementById('resultados').classList.remove('oculto')
    document.getElementById('link-graficos').classList.remove('oculto')


    // // Para cada elemento dos dados, gerar um gráfico e cria uma área do gráfico
    // // CRIAÇÃO DOS GRÁFICOS:
    // // CAIXA01; CAIXA02; CAIXA03; ÚMIDADE; SUPERFÍCIE;
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



    // Criação dos gráficos comparativos
    // CRIAÇÃO DOS GRÁFICOS:
    // SENSOR 2m; SENSOR 1.6m; SENSOR 1.2m; SENSOR 0.8m; SENSOR 0.4m;
    for (let id_sensor = 0; id_sensor < 1; id_sensor++) {

        // ID da área do gráfico
        const id_comparativo = `id-comparativo-sensor${id_sensor}`

        //Criação da divisão do gráfico
        area_resultados.append('div')
            .attr('class', 'conteiner-grafico')
            .attr('id', id_comparativo)
            .text(`${id_comparativo}`)
        
        //Captura dos dados dos sensores
        const dados_sensores = comparativo(dados, id_sensor)

        //Graficando
        graficar(dados_sensores, id_comparativo)


    }



    










`
    FALTA CORRIGIR A FUNÇÃO DE AJUSTE
    - ERRO NO CALCULO DA MATRIZ

    // Criação da área do gráfico do ajuste
    area_resultados.append('div')
        .attr('class', 'conteiner-grafico')
        .attr('id', 'id-ajuste')
        .text('Ajuste')
    
    // Função de ajuste dos dados
    let d = ajusteNDias(dados['superficie'])
    
    // Criação do gráfico do ajuste
    graficar(dados['superficie'], 'id-ajuste')
`
    


}




export default graficos


