`
        ESTRUTURAÇÃO DOS DADOS DO ARQUIVO

    - Devolve um objeto chave:valor com os dados das caixas. 
`
import referencias_id from './referenciasId.js'



const converter_txt = async (conteudo_session_storage) => {

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

        // Verificação de id
        if (isFinite(id)) {

            if (id in dados_ids) {

                dados_ids[id].push([valor, momento])   // Incremento nos dados do id

            } else {

                dados_ids[id] = [[valor, momento]]     // Incremento nos dados do id

            }


        }

    
    })

    console.log(dados_ids)

}



export default converter_txt