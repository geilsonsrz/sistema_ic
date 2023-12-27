`
        ESTRUTURAÇÃO DOS DADOS DO ARQUIVO

    - Devolve um objeto chave:valor com os dados das caixas. 
`
import { compileString } from 'sass'
import referencias_id from './referenciasId.js'


const converter_txt = async (conteudo_session_storage) => {

    const lista_linhas_txt = await conteudo_session_storage.split('\n')

    const dados_caixa = {
        'caixa01': {
            'momentos': []
        },
        'caixa02': {
            'momentos': []
        },
        'caixa03': {
            'momentos': []
        }
    }
    
    
    lista_linhas_txt.forEach( linha => {
        
        // O caractere '\t' em uma string representa um caractere de tabulação horizontal
        let dados_linha = linha.split('\t')
        let id = parseInt(dados_linha[0])
        let valor = parseFloat(dados_linha[1])
        let momento = dados_linha[2]

        if (isFinite(id)) {
            console.log(id, valor, momento)
        }

    
    });

    return dados_caixa

}



export default converter_txt