

const converter_txt = async (conteudo_session_storage) => {

    const lista_linhas_txt = await conteudo_session_storage.split('\n')

    // O caractere '\t' em uma string representa um caractere de tabulação horizontal
    let linha = lista_linhas_txt[50].split('\t')

    let id = parseInt(linha[0])
    let valor = parseFloat(linha[1])
    let momento = linha[2]

    console.log(id, valor, momento)

    // lista_linhas_txt.forEach( element => {

    //     console.log(element)
        
    // });


}



export default converter_txt