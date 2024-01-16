`
    FUNÇÃO COMPARATIVA DAS TEMPERATURAS DOS SENSORES NA MESMA PROFUNDIDADE
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
            const momentos = []
            const temperaturas = []

            caixa.forEach( linha => {

                let momento = linha[linha.length-1]
                let temperatura = linha[id_sensor]

                momentos.push(momento)
                temperaturas.push(temperatura)
                
            });

            let horas = horarios(momentos)

            let dados_caixa = [temperaturas, horas]

            dados_sensores.push(dados_caixa)

        }

    }
    console.log(dados_sensores)

    return dados_sensores

}



export default comparativo
