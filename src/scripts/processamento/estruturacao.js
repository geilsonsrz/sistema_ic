`
    ESTRUTURAÇÃO DO OBJETO

    Organiza os id por caixas
`
import referencias_id from './referenciasId'


// Função de estruturação
function estruturacao(dados_id){

    // Objeto organizado com os dados
    const dados = {}

    // Interações das caixas
    for (let n=1; n<4; n++) {
        
        let caixa = []
    
        // Interações da linhas
        for (let i=0; i<dados_id[referencias_id[`caixa_${n}_sensor_1`]].length; i++) {
    
            let linhas_caixa = [
                dados_id[referencias_id[`caixa_${n}_sensor_1`]][i][0],
                dados_id[referencias_id[`caixa_${n}_sensor_2`]][i][0],
                dados_id[referencias_id[`caixa_${n}_sensor_3`]][i][0],
                dados_id[referencias_id[`caixa_${n}_sensor_4`]][i][0],
                dados_id[referencias_id[`caixa_${n}_sensor_5`]][i][0],
                dados_id[referencias_id[`caixa_${n}_contador`]][i][0],
                dados_id[referencias_id[`caixa_${n}_sensor_1`]][i][1]
            ]
            
            if (i===0) {
                let data = (dados_id[referencias_id[`caixa_${n}_sensor_1`]][i][1]).split(' ')[0].split('-')

                let dia_inicial = `${data[2]}-${data[1]}-${data[0]}`
                
                sessionStorage.setItem('dia_inicial', dia_inicial)
            }

            // Agregando a linha na caixa
            caixa.push(linhas_caixa)
    
        }
    
        // Agregando a caixa no objeto
        dados[`caixa0${n}`] = caixa

    }

    // Agregando Umidade e Superfície ao objeto
    dados['umidade'] = dados_id[referencias_id['humidad']]
    dados['superficie'] = dados_id[referencias_id['superficie']]

    // Retornando o Objeto dos dados estruturados
    return dados

}


export default estruturacao

