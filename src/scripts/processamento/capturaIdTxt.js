`
        CAPTURA DOS DADOS ID

    - Devolve um objeto chave:valor com uma lista dos valores e momentos.
    
    dados_ids = {

        id: [ [valor, momento], ... ]

    }
`


// Definição da função de estruturação do arquivo TXT
const capturaIdTxt = async (conteudo_session_storage) => {

    // Recuperação do conteúdo do arquivo
    const lista_linhas_txt = await conteudo_session_storage.split('\n')

    // Captura dos dados do id
    const dados_ids = {}
    
    // Verificação linha a linha
    await lista_linhas_txt.forEach( linha => {
        
        // O caractere '\t' em uma string representa um caractere de tabulação horizontal
        let dados_linha = linha.split('\t')
        let id = parseInt(dados_linha[0])   // Captura do id
        let valor = parseFloat(dados_linha[1])  // Captura do dado
        let momento = dados_linha[2]    // Captura do momento

        // Verificação de id para validar linha
        if (isFinite(id)) {

            // Verificando se o id já foi capturado
            if (id in dados_ids) {

                dados_ids[id].push([valor, momento])   // Incremento nos dados do id

            // Caso seja o primeiro incremento do id
            } else {

                dados_ids[id] = [[valor, momento]]     // Incremento nos dados do id
                
            }
        }
    })

    // Retorno
    return dados_ids

}



export default capturaIdTxt