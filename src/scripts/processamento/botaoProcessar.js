// Função inicial do botão de processamento
// Tratamento caso o documento seja .txt
import capturaIdTxt from "./capturaIdTxt"
// Tratamento caso o documento seja .xml
import capturaIdXml from "./capturaIdXml"
// Estruturacao dos dados
import estruturacao from "./estruturacao.js"


// Ouvir o evento de clique no botão processar
document.getElementById('btn-processar').addEventListener('click', async () => {

    // Identificando o conteúdo do documento da Session Storage
    const conteudo = sessionStorage.getItem('conteudo')

    // Identificando o tipo do documento para formatação adequada dos dados
    const tipo_documento = sessionStorage.getItem('tipo_documento')

    let dados_id = ""

    // Controle de existência do conteúdo
    if (conteudo) {

        // Controle do tipo do documento .txt
        if (tipo_documento == '.txt') {
            
            dados_id = await capturaIdTxt(conteudo)

        // Controle do tipo do documento .xml
        } else if (tipo_documento == '.xml') {
            
            dados_id = await capturaIdXml(conteudo)

        // Seguda prevenção de outro tipo de documento
        } else {

            console.log('Verific1ar o tipo do arquivo.')

        }

        // Estruturando os dados nas caixas
        // Umidade e superfície são independentes
        if ( dados_id != "") {

            // Dados é um objeto com os dados organizados das caixas
            const dados = await estruturacao(dados_id)

            console.log(dados)

        }


    } else {

        console.log('Sem documento!')

    }

})

