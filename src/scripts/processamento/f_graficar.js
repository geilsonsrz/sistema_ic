`
Função para graficar

RECEBE COMO PARÂMETRO O SEGUINTE FORMADO
    [temperaturas, momentos]


`

function graficar(dados, id_area) {
    
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


    // Início do clico de montagem das linhas dos dados
    // Captura do tamanho da linha para saber quantidades de sensores
    const tamanho_linha = dados[0].length
    
    // Quantidade sensores de solo
    const quantidade_sensores_solo = 5

    // Controle de interações por dados de temperaturas
    for (let n=0; n<tamanho_linha-1; n++) {

        // Controle pra não capturar o contador
        if ( n < quantidade_sensores_solo ) {

            
            const temperaturas = []
            const momentos = []
        
            for (let i in dados) {
        
                temperaturas.push(dados[i][n])
        
                momentos.push(i)
        
            }
        
            // Escala x e y
            let x = d3.scaleBand().domain(momentos).range([0, width]).padding(0.1);
            let y = d3.scaleLinear().domain([0, d3.max(temperaturas)]).range([height, 0]);
        
            // Linha
            let line = d3.line()
                .x(function (d, i) { return x(momentos[i]) + x.bandwidth() / 2; }) // Centraliza a linha na banda
                .y(function (d) { return y(d); });
        
        
            // Adiciona a linha ao gráfico
            svg.append("path")
                .datum(temperaturas)
                .attr("class", "line")
                .attr("d", line)
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 2);
        
            // Adiciona os eixos x e y
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));
        
            svg.append("g")
                .call(d3.axisLeft(y));

        }
    }





}




export default graficar
