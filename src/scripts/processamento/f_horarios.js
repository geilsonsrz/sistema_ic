`
    Função de conversão de momentos para horários

    Recebe o objeto completo dos dados

    MOMENTO: 'data horário' -   '1994-05-20 23:20:20'
    HORÁRIO: hh.h%  -   23.34


    OBSERVAÇÃO:

        dados = dados da caixa

        e não uma lista dos momentos.
        
        Ex.:

        dados = [ [dado1, dado2, ..., dadoN, momento], ... ]
`

function horarios(dados) {

    // Função de conversão do momento para formato em Objeto Data
    const converterData = (momento) => {
        const partes = momento.split(/[- :.]/)

        // OBSERVAÇÃO: Para evitar dados NaN, o milesegundos são ignorados
        let data = new Date(partes[0], partes[1] - 1, partes[2], partes[3], partes[4], partes[5])

        // Controle caso tenha dados NaN, sem milesgundos
        if (isNaN(data.getTime())) {
            console.error(`Erro ao analisar a string de data: ${momento}`);
            return null; // ou faça algo para lidar com esse caso
        }

        // Retorno da data em horário
        return data
    }

    // Array com os horários convertidos
    const horarios = []

    // Momento inicial e id do momento da linha
    const id_momento = dados[0].length - 1
    const momento_inicial = converterData(dados[0][id_momento])

    // Função de conversão do momento em horários
    dados.forEach(linha => {

        // Momento de captura
        let momento = converterData(linha[id_momento])

        // Diferença em horas
        let diferenca = (momento - momento_inicial) / (1000 * 60 * 60)

        // Incremento do instante desde o primeiro horários com duas casas decimais
        horarios.push(parseFloat(diferenca.toFixed(2)))

    })

    // Retorno dos horários formatados
    return horarios
}



export default horarios
