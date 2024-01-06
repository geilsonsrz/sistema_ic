`
    Função para graficar os dados das caixas
`

// Gerar gráficos
function graficos(dados) {

    // Identificação da seção campo de plotagem
    const area_resultados = d3.select('#resultados')

    // Tornando visível ao primeiro clique.
    document.getElementById('resultados').classList.remove('oculto')
    document.getElementById('link-graficos').classList.remove('oculto')


    // Especificando as funções para cada chaves
    const funcoesChaves = {

        'caixa01': (dado) => {},


        'caixa02': (dado) => {},


        'caixa03': (dado) => {},


        'umidade': (dado) => {},


        'superficie': (dado) => {

            const temperaturas = []
            const momentos = []

            for (let i in dado) {
            
                temperaturas.push(dado[i][0])

                momentos.push(i)
            
            }

            console.log(temperaturas)
            console.log(momentos)

            let dados = momentos.map(function(d, i) {
                return { momento: d, temperatura: temperaturas[i] };
            });



        }

    }


    // Para cada elemento dos dados, gerar um gráfico
    for (let chave in dados) {

        // Criação da divisão do gráfico
        area_resultados.append('div')
            .attr('class', 'conteiner-grafico')
            .text(`${chave}`)

        funcoesChaves[chave](dados[chave])
        
    }


}




export default graficos


