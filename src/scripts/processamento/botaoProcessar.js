// Função inicial do botão de processamento
import converter_txt from "./converterTxt"

import converter_xml from "./converterXml"


// Ouvir o evento de clique no botão processar
document.getElementById('btn-processar').addEventListener('click', () => {

    const conteudo = sessionStorage.getItem('conteudo')

    const tipo_documento = sessionStorage.getItem('tipo_documento')

    if (conteudo) {

        if (tipo_documento == '.txt') {
            
            converter_txt(conteudo)

        } else if (tipo_documento == '.xml') {

            converter_xml(conteudo)

        } else {

            console.log('Verificar o tipo do arquivo.')

        }

    } else {

        console.log('Sem documento!')

    }

})

