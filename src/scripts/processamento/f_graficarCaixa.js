`
Função para graficar

RECEBE COMO PARÂMETRO O SEGUINTE FORMADO
    [temperaturas, momentos]

`
import horarios from "./f_horarios.js";




function graficarCaixa(dados, id_area, chave) {

    // Legenda
    const capturarLegenda = (chave, n) => {

        let legenda

        if (chave === 'umidade') { legenda = 'Umidade' }
        else if (chave === 'superficie') { legenda ='Superfície' }
        else { legenda = `${(2-n*0.4).toFixed(1)}m` }

        return legenda
    }


    // Converter momentos em strings para horas em float
    const momentos = horarios(dados)

    // Lista contendo todas as temperaturas
    let todas_temperaturas = []

    // Configurações do gráfico
    let margin = { top: 20, right: 20, bottom: 30, left: 50 };
    let width = 650 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;

    // Criação do SVG
    let svg = d3.select(`#${id_area}`).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append("g")
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

    let dia_inicial = sessionStorage.getItem('dia_inicial')

    // Títulos
    svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 0)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .text(`Gráfico ${chave} | ${dia_inicial}`);

    // Início do clico de montagem das linhas dos dados
    // Captura do tamanho da linha para saber quantidades de sensores
    const tamanho_linha = dados[0].length

    // Quantidade sensores de solo
    const quantidade_sensores_solo = 5

    // Controle de interações por dados de temperaturas
    for (let n = 0; n < tamanho_linha - 1; n++) {

        // Controle pra não capturar o contador
        if (n < quantidade_sensores_solo) {

            // Array das temperaturas e momentos
            const temperaturas = []

            // Incremento das temperaturas e momentos
            for (let i in dados) {

                // Captura da temperatura do sensor
                temperaturas.push(dados[i][n])

            }
            // Agregando as temperatura de todo o gráfico
            todas_temperaturas = todas_temperaturas.concat(temperaturas)

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
                .attr('stroke', `${cores[tamanho_linha][n]}`)
                .attr('stroke-width', 2);

            // Adicionando legenda
            let legenda = svg.append("g")
                .attr("class", "legenda")
                .attr("transform", `translate(${5},${margin.top + n * 20})`);

            legenda.append("text")
                .attr("x", 25)
                .attr("y", 5)
                .style("font-size", "12px")
                .text(capturarLegenda(chave, n));

            legenda.append("rect")
                .attr("width", 20)
                .attr("height", 2)
                .attr("fill", `${cores[tamanho_linha][n]}`);
        }
    }

    // Definindo escala X
    let legenda_x = [0, momentos[momentos.length - 1]]

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
        .text("Temperaturas (°C)");

    // Retorno para download
    return svg

}


const cores = {

    2: { 0: '#4444AA' },

    7: {
        0: '#6495ED',
        1: '#800080',
        2: '#FF4500',
        3: '#FFD700',
        4: '#228B22'
    }
}




export default graficarCaixa
