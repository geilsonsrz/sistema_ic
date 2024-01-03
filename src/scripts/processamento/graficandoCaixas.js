`
    Função para graficar os dados das caixas
`


// Gerar gráficos
async function graficos(dados) {

    // Identificação da seção campo de plotagem
    const resultados = document.getElementById('resultados')

    // Identificação do link para os gráficos
    const link_graficos = document.getElementById('link-graficos')

    // Tornando visível ao primeiro clique.
    resultados.classList.remove('oculto')
    link_graficos.classList.remove('oculto')

    // Inicialização do gráfico
    // Criação da divisão onde vai conter o canvas
    let divisao = document.createElement('div')

    // Atribuição da classe da divisão
    divisao.classList.add('conteiner-grafico')

    // Criação do canvas
    let canvas = document.createElement('canvas')

    // Identificação do gráfico por ID
    canvas.id = 'id-dados'



    const Chart = await import('chart.js');

    new Chart(canvas, {
        type: 'bar',
        data: {

            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });



    divisao.appendChild(canvas)

    resultados.appendChild(divisao)


}



export default graficos


