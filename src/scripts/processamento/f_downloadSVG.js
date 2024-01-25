`
    CRIAÇÃO DO BOTÃO DE DOWNLOAD
`

function baixarGrafico(id_area) {

    // Identificação da área
    const area = document.getElementById(id_area)

    // Criação
    const botao_download = document.createElement('a')
    botao_download.classList.add('btn', 'btn-download')
    botao_download.innerText = 'Download'

    // Função para download
    botao_download.addEventListener('click', () => {

        // Captura dos dados do SVG
        const svg_txt = document.getElementById(id_area).querySelector('svg').outerHTML;

        // Converte string para SVG
        const svg = new SVG(svg_txt);

        // Converte o SVG em uma imagem PNG
        const png_dados_url = svg.toDataURL('image/png');


        // Cria um link para baixar a imagem PNG
        botao_download.href = png_dados_url;
        botao_download.download = `${id_area}.png`;
    });

    // Adicionando o botão na área
    area.appendChild(botao_download)

}


export default baixarGrafico
