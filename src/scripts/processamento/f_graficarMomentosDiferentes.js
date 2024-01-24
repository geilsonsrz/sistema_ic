`
    GRAFICAR DADOS COM MOMENTOS DIFERENTES

    ARGUMENTO 1:

        Recebe uma array com dos dados no seguinte formato,
        
        dados = [ dado1, dado2, ..., dadoN ]

        dadoN = [ temperaturas, horários ]


    ARGUMENTO 2:

        ID da divisão ('div') reservado para o gráfico.
    
    ARGUMENTO 3:

        Controle de caixa ausente.

`


function graficarMomentosDiferentes(dados, id_area, caixas_ausentes = []) {

    // Título gráfico
    const tituloGrafico = () => {

        // Separação do ID em partes
        let partes = id_area.split('-')

        // Captura do número do sensor
        let num_sensor = partes[2].match(/\d+/)

        // Dia inicial
        let dia_inicial = sessionStorage.getItem('dia_inicial')

        // Retorno do título
        return `COMPARATIVO PROFUNDIDADE ${(2 - num_sensor * 0.4).toFixed(1)}m | ${dia_inicial}`
    }

    // Captura de dados para a lenda
    let todos_momentos = []
    let todas_temperaturas = []

    // Configurações do gráfico
    let margin = { top: 20, right: 20, bottom: 30, left: 50 };
    let width = 600 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;

    // Criação do SVG
    let svg = d3.select(`#${id_area}`).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + (margin.top+10) + margin.bottom)
        .append("g")
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

    // Títulos
    svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 0)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .text(`${tituloGrafico()}`);

    // Iteração dos sensores
    for (let n = 0; n < dados.length; n++) {

        let numero_caixa = n + 1

        // Verificação número da caixa
        if (numero_caixa in caixas_ausentes) {

            let teste = 3 - numero_caixa
            const verificador = {
                0: () => { numero_caixa = 3 },
                1: () => { numero_caixa = 2 },
                2: () => { numero_caixa = 1 },
            }

            verificador(teste)
        }



        // Identificação das temperaturas e momentos
        const temperaturas = dados[n][0]
        const momentos = dados[n][1]

        // Agregando dados para a legenda
        todas_temperaturas = todas_temperaturas.concat(temperaturas)
        todos_momentos = todos_momentos.concat(momentos)

        // Escala x e y para desenhar o gráfico
        let x = d3.scaleBand().domain(momentos).range([0, width]).padding(0.1);

        // let y = d3.scaleLinear().domain([0, d3.max(temperaturas)]).range([height, 0]);
        let y = d3.scaleLinear().domain([d3.min(temperaturas) - 1, d3.max(temperaturas) + 1]).range([height, 0]);

        // Linha
        let line = d3.line()
            .x(function (d, i) { return x(momentos[i]) + x.bandwidth() / 2; }) // Centraliza a linha na banda
            .y(function (d) { return y(d); });


        // Adiciona a linha ao gráfico
        svg.append("path")
            .datum(temperaturas)
            .attr('class', 'line')
            .attr('id', `${id_area}-sensor${n}`)
            .attr("d", line)
            .attr('fill', 'none')
            .attr('stroke', `${cores[n]}`)
            .attr('stroke-width', 2);

        // Legenda para cada linha
        let legenda = svg.append("g")
            .attr("class", "legenda")
            .attr("transform", `translate(${5},${margin.top + n * 20})`);

        legenda.append("text")
            .attr("x", 25)
            .attr("y", 3)
            .style("font-size", "12px")
            .text(`Caixa ${numero_caixa}`);

        legenda.append("rect")
            .attr("width", 20)
            .attr("height", 2)
            .attr("fill", `${cores[n]}`);
    }

    // Definindo escala X
    let ultima_hora = math.max(todos_momentos)
    let legenda_x = [0, ultima_hora]

    // Configurações da escala X
    let escala_x = d3.scaleLinear()
        .domain(legenda_x)
        .range([0, width])
        .nice()

    // Definindo escala Y
    let temp_minima = math.min(todas_temperaturas)
    let temp_maxima = math.max(todas_temperaturas)
    let legenda_y = [temp_minima, temp_maxima]

    // Configurações da escala Y
    let escala_y = d3.scaleLinear()
        .domain(legenda_y)
        .range([height, 0])
        .nice()

    // Adiciona escalas aos eixos x e y
    svg.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(escala_x));

    svg.append('g')
        .call(d3.axisLeft(escala_y));


    // Adiciona título ao eixo x
    svg.append("text")
        .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 20) + ")")
        .style("text-anchor", "middle")
        .text("Horas");

    // Adiciona título ao eixo y
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Temperaturas")
}

// Definição das cores
const cores = {
    0: '#FF4500',
    1: '#32CD32',
    2: '#4682B4'
}


export default graficarMomentosDiferentes
