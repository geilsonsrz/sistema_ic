`
    FUNÇÃO COMPARATIVA DAS TEMPERATURAS DOS SENSORES NA MESMA PROFUNDIDADE


    RETORNO :
        Devolve uma lista de lista com as temperaturas e horários dos sensores selecionaos

`
import horarios from "./f_horarios.js"



function comparativo(dados, id_sensor) {

    // Captura dos dados das caixas
    const caixas = [dados['caixa01'], dados['caixa02'], dados['caixa03']]

    // Armazenamento dos dados dos sensores desejados
    const dados_sensores = []
    
    for (let c in caixas) {
        // Facilitar a leitura da caixa
        const caixa = caixas[c]

        // Verificando se a caixa não está vazia
        if (caixa.length > 0) {

            // Dados por caixa
            const temperaturas = []
            const horas = horarios(caixa)

            caixa.forEach( linha => {

                let temperatura = linha[id_sensor]

                temperaturas.push(temperatura)
                
            });

            dados_sensores.push([temperaturas, horas])

        }

    }

    return dados_sensores

}



export default comparativo
