`
    Função de conversão de momentos para horários

    Recebe o objeto completo dos dados

    MOMENTO: 'data horário' -   '1994-05-20 23:20:20'
    HORÁRIO: hh.h%  -   23.34
`

function horarios(dados) {

    // Array com os horários convertidos
    const horarios = []

    // Momento inicial e id do momento da linha
    const id_momento = dados[0].length - 1
    const momento_inicial = dados[0][id_momento]

    // Função de conversão do momento em horários
    dados.forEach( linha => {

        let momento = linha[id_momento]



        

    })





    return horarios
}



export default horarios
