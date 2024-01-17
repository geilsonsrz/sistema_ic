`
    GRAFICAR DADOS COM MOMENTOS DIFERENTES

    ARGUMENTO 1:

        Recebe uma array com dos dados no seguinte formato,
        
        dados = [ dado1, dado2, ..., dadoN ]

        dadoN = [ temperaturas, horários ]


    ARGUMENTO 2:

        ID da divisão ('div') reservado para o gráfico.

`


function graficarMomentosDiferentes(dados, id_area) {
    `
        OBSERVAÇÃO:
            FALTA ARRUMAR AS LEGENDAS!!!
    `

    // Configurações do gráfico
    let margin = { top: 20, right: 20, bottom: 30, left: 50 };
    let width = 400 - margin.left - margin.right;
    let height = 300 - margin.top - margin.bottom;

    // Criação do SVG
    let svg = d3.select(`#${id_area}`).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append("g")
        .attr('transform', `translate(${margin.left}, ${margin.top})`)


    // Iteração dos sensores
    for (let n = 0; n < dados.length; n++) {

        const temperaturas = dados[n][0]
        const momentos = dados[n][1]

        // Escala x e y
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


        // Adiciona os eixos x e y
        svg.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        svg.append('g')
            .call(d3.axisLeft(y));


        // Adiciona título ao eixo x
        svg.append("text")
            .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 20) + ")")
            .style("text-anchor", "middle")
            .text("Momentos");

        // Adiciona título ao eixo y
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Temperaturas");


    }

}

// Definição das cores
const cores = {
    0: '#FF4500',
    1: '#32CD32',
    2: '#4682B4'
}




export default graficarMomentosDiferentes
