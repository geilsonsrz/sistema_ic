// Inclução do SCSS
import './style/index.scss'

// Scripts de efeitos SCSS e funcionalidades
import './scripts/efeitos_estilos/tema.js'

// SCRIPT DE PROCESSAMENTO DOS DADOS
// Script inicial de leitura do arquivo
import './scripts/processamento/leituraArquivo.js'

// Script do botão para o início do processamento
import './scripts/processamento/botaoProcessar.js'




// Aviso de seleção do arquivo
if (sessionStorage.getItem('nome_arquivo')) {

    document.getElementById('texto-aviso-arquivo').innerText = `ARQUIVO SELECIONADO\n${sessionStorage.getItem('nome_arquivo')}`

} else {

    document.getElementById('texto-aviso-arquivo').innerText = 'INSIRA UM ARQUIVO'

}
