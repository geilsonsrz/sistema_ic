// Função inicial do botão de processamento
// Tratamento caso o documento seja .txt
import capturaIdTxt from "./capturaIdTxt"
// Tratamento caso o documento seja .xml
import capturaIdXml from "./capturaIdXml"


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
            
            const dados_id = await capturaIdTxt(conteudo)

            // Guardando os dados dos id's
            sessionStorage.setItem('dados_id', dados_id)


        // Controle do tipo do documento .xml
        } else if (tipo_documento == '.xml') {
            
            const dados_id = await capturaIdXml(conteudo)

            // Guardando os dados dos id's
            sessionStorage.setItem('dados_id', dados_id)

        // Seguda prevenção de outro tipo de documento
        } else {

            console.log('Verific1ar o tipo do arquivo.')

        }


    } else {

        console.log('Sem documento!')

    }

})

