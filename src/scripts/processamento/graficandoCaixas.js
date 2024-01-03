`
    Função para graficar os dados das caixas
`


<<<<<<< HEAD
// Gerar gráficos
function graficos(dados) {

    // Identificação da seção campo de plotagem
    const resultados = document.getElementById('resultados')
=======
>>>>>>> c3bef897d6aadf05454838b220ef6fba9564d3a5

async function graficos(dados) {
    try {
        // Identificação da seção campo de plotagem
        const resultados = document.getElementById('resultados');

        // Identificação do link para os gráficos
        const link_graficos = document.getElementById('link-graficos');

        // Tornando visível ao primeiro clique.
        resultados.classList.remove('oculto');
        link_graficos.classList.remove('oculto');

<<<<<<< HEAD

    // Inicialização do gráfico
=======
        // Inicialização do gráfico
        // Criação da divisão onde vai conter o canvas
        let divisao = document.createElement('div');
>>>>>>> c3bef897d6aadf05454838b220ef6fba9564d3a5

        // Atribuição da classe da divisão
        divisao.classList.add('conteiner-grafico');

<<<<<<< HEAD



    




=======
        // Criação do canvas
        let canvas = document.createElement('canvas');

        // Identificação do gráfico por ID
        canvas.id = 'id-dados';

        // Carrega dinamicamente o módulo 'chart.js'
        const ChartModule = await import('chart.js');
        const Chart = ChartModule.default || ChartModule;

        // Aguarda o carregamento e, em seguida, cria o gráfico
        const chartConfig = {
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
        };

        const chartInstance = new Chart(canvas, chartConfig);

        divisao.appendChild(canvas);
        resultados.appendChild(divisao);
    } catch (error) {
        console.error('Erro ao carregar o módulo Chart.js:', error);
    }
>>>>>>> c3bef897d6aadf05454838b220ef6fba9564d3a5
}




export default graficos


