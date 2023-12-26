// Função de leitura do arquivo e arquivamento temporário no navegador

// Identificação do input do arquivo e observação do evento
document.getElementById('input-arquivo').addEventListener('change', (evento) => {

    // Captura do arquivo
    const arquivo = evento.target.files[0]

    // Critérios de verificação do tipo do arquivo
    const verificacao_txt = (/\.txt$|\.xml/).exec(arquivo.name)

    // Verificação do tipo do arquivo
    if (verificacao_txt) {
        
        // Criando leitor do arquivo
        const leitor = new FileReader()
        
        // Função de leitura
        leitor.onload = (e) => {
            
            // Conteúdo do evento
            const conteudo = e.target.result
            
            // Salvando dados no sessionStorage (memória temporária do navegador)
            // Limpando qualquer arquivo que esteja antes
            sessionStorage.clear()

            // Incluindo o tipo de documento
            sessionStorage.setItem('tipo_documento', verificacao_txt)
            
            // Incluindo arquivo atual
            sessionStorage.setItem('conteudo', conteudo)

        }

        // Chamada do leitor para ler o arquivo como texto (UTF-8)
        leitor.readAsText(arquivo)

    } else {

        // Aviso de ERRO
        alert(
        `ERRO: ${arquivo.name} não é válido.\n
        Insira um arquivo válido.`
        )

    }
})

