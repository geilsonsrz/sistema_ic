



const converter_xml = (conteudo_session_storage) => {

    const parser = new DOMParser()

    const documento_xml = parser.parseFromString(conteudo_session_storage, 'text/xml')

    const ids = documento_xml.getElementsByTagName('tagid')

    console.log(ids)

}



export default converter_xml