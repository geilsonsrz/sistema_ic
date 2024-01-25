`
    GRAFICAR SIMPLES
        Cria um gráfico simples conformes os argumentos.

    ARGUMENTO 1:

        Lista com as temperaturas

        temperaturas = [ temp0, temp1, ... tempN]
    
    ARGUMENTO 2:

        Lista com os horários

        horarios = [ hora0, hora1, ... horaN ]


    ARGUMENTO 3:

        ID da região reservada para o gráfico

    ARGUMENTO 4 (opcional):

        ID do sensor para agregar cor.
`



function graficar(temperaturas, horarios, id_area, cor = 9) {

    // Título gráfico
    const tituloGrafico = () => {

        // Separação do ID em partes
        let partes = id_area.split('-')

        // Captura do número do sensor
        let num_sensor = partes[1].match(/\d+/)

        // Dia inicial
        let dia_inicial = sessionStorage.getItem('dia_inicial')

        // Retorno do título
        return `Temperatura média ${(2 - num_sensor * 0.4).toFixed(1)}m | ${dia_inicial}`
    }



    // Configurações do gráfico
    let margin = { top: 20, right: 20, bottom: 30, left: 50 };
    let width = 600 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;

    // Criação do SVG
    let svg = d3.select(`#${id_area}`).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append("g")
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

    // Títulos
    svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 0)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .text(`${tituloGrafico()}`);

    // Escala x e y
    let x = d3.scaleBand().domain(horarios).range([0, width]).padding(0.1);

    // let y = d3.scaleLinear().domain([0, d3.max(temperaturas)]).range([height, 0]);
    let y = d3.scaleLinear().domain([d3.min(temperaturas) - 1, d3.max(temperaturas) + 1]).range([height, 0]);

    // Linha
    let line = d3.line()
        .x(function (d, i) { return x(horarios[i]) + x.bandwidth() / 2; }) // Centraliza a linha na banda
        .y(function (d) { return y(d); });


    // Adiciona a linha ao gráfico
    svg.append("path")
        .datum(temperaturas)
        .attr('class', 'line')
        .attr("d", line)
        .attr('fill', 'none')
        .attr('stroke', `${cores[cor]}`)
        .attr('stroke-width', 2);

    // Legenda para cada linha
    let legenda = svg.append("g")
        .attr("class", "legenda")
        .attr("transform", `translate(${5},${margin.top + 20})`);

    legenda.append("text")
        .attr("x", 25)
        .attr("y", 3)
        .style("font-size", "12px")
        .text(()=>{
            let id = parseInt(id_area.split('-')[1].match(/\d+/)[0])
            if (id>=0 && id<=4) {
                return `${(2-id*0.4).toFixed(1)}m` 
            } else {
                return ``
            }
        });

    legenda.append("rect")
        .attr("width", 20)
        .attr("height", 2)
        .attr("fill", `${cores[cor]}`);

    // Definindo escala X
    let legenda_x = [0, horarios[horarios.length - 1]]

    // Configurações da escala X
    let escala_x = d3.scaleLinear()
        .domain(legenda_x)
        .range([0, width])
        .nice()

    // Definindo escala Y
    let temp_minima = math.min(temperaturas)
    let temp_maxima = math.max(temperaturas)
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
        .attr("dy", "0.5em")
        .style("text-anchor", "middle")
        .text("Temperaturas (°C)")

}

const cores = {
    0: '#6495ED',
    1: '#800080',
    2: '#FF4500',
    3: '#FFD700',
    4: '#228B22',
    9: '#4444AA'
}



export default graficar
