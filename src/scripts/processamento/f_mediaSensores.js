`
    CRIAÇÃO DA FUNÇÃO MÉDIA DOS SENSORES

    ARGUMENTO 1:

        Recebe uma array com dos dados no seguinte formato,
        
        dados = [ dado1, dado2, ..., dadoN ]

        dadoN = [ temperaturas, horários ]

    RETORNO:

        Temperatura média dos sensores por hora em forma de dicionário.

        {
            hora: temperatura_media
        }

`

function mediaSensores(sensores) {

    // Armazenação das temperaturas no hora
    const temperaturas_horas = {}

    // Iteração em cada sensor para agregar as temperaturas na hora
    sensores.forEach( sensor => {

        // Identificação dos dados
        const temperaturas = sensor[0]
        const momentos= sensor[1]

        // Incremento das temperaturas nos horários
        for (let n = 0; n < temperaturas.length; n++) {

            // Trucamento da parte inteira da hora
            let hora = Math.trunc(momentos[n])

            // Verificação se o horário já foi agregado
            if (hora in temperaturas_horas) {

                // Agregando a temperatura na lista no horário já registrado
                temperaturas_horas[hora].push(temperaturas[n])

            } else {

                // Criando a lista no novo horário
                temperaturas_horas[hora] = [temperaturas[n]]

            }
        }
    })

    // Armazenar a temperatura média por hora
    const temperatura_media = {}

    for (let hora in temperaturas_horas) {

        // Temperaturas do horário
        const temperaturas = temperaturas_horas[hora]
        
        // Somatório das temperaturas
        let somatorio = 0
        temperaturas.forEach( t => somatorio += t)

        // Média - Arredonda em duas casas decimais
        const media = ((somatorio)/(temperaturas.length)).toFixed(2)

        // Agregando no dicionário de temperatura média
        temperatura_media[hora] = media

    }

    // Retorno do dicionário
    return temperatura_media

}


export default mediaSensores
