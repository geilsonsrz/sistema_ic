// Função inicial do botão de processamento
// Tratamento caso o documento seja .txt
import converter_txt from "./converterTxt"
// Tratamento caso o documento seja .xml
import converter_xml from "./converterXml"


// Ouvir o evento de clique no botão processar
document.getElementById('btn-processar').addEventListener('click', async () => {

    // Identificando o conteúdo do documento da Session Storage
    const conteudo = sessionStorage.getItem('conteudo')

    // Identificando o tipo do documento para formatação adequada dos dados
    const tipo_documento = sessionStorage.getItem('tipo_documento')

    // Controle de existência do conteúdo
    if (conteudo) {

        // Controle do tipo do documento .txt
        if (tipo_documento == '.txt') {
            
            const dados_arquivo = await converter_txt(conteudo)

            console.log(dados_arquivo)

        // Controle do tipo do documento .xml
        } else if (tipo_documento == '.xml') {

            const dados_arquivo = converter_xml(conteudo)


        // Seguda prevenção de outro tipo de documento
        } else {

            console.log('Verificar o tipo do arquivo.')

        }

    } else {

        console.log('Sem documento!')

    }

})

