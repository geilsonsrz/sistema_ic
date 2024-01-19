// Função para mudar o tema

const mudarTema = () => {

    // Identificação do body
    const corpo = document.getElementById('corpo')

    // Identificação do botão
    const btn_tema = document.getElementById('botao-tema')

    // Função de acionamento do botão
    btn_tema.addEventListener('click', () => {

        // Troca dos temas
        corpo.classList.toggle('claro')
        corpo.classList.toggle('escuro')

    })

}

// Inicialização da função
mudarTema()
