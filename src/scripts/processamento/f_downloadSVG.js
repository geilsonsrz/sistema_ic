`
    CRIAÇÃO DO BOTÃO DE DOWNLOAD


    CORRIGIR:

        Tá cortando a parte de baixo do gráfico


`


function baixarGrafico(id_area) {

    // Identificação da área
    const area = document.getElementById(id_area)

    // Criação
    const botao_download = document.createElement('a')
    botao_download.classList.add('btn', 'btn-download')
    botao_download.innerText = 'Download'

    // Capturando o SVG da área
    let svg
    for (let filho in area.children) {
        if (area.children[filho].tagName === 'svg') { svg = area.children[filho] }
    }

    // Criando a imagem do gráfico
    const svg_img = new Image();
    const svg_txt = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svg_txt], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    // Carregando o gráfico na imagem
    svg_img.onload = function () {

        // Criando e configurando o elemento canvas
        const canvas = document.createElement('canvas');
        canvas.width = svg.width.baseVal.value
        canvas.height = svg.height.baseVal.value

        // Configuração do contexto
        const ctx = canvas.getContext('2d')

        // Adiciona um retângulo como cor de fundo
        ctx.fillStyle = 'white'; // Cor de fundo desejada
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Desenhando a imagem
        ctx.drawImage(svg_img, 0, 0)

        // Configuração da URL
        const data_url = canvas.toDataURL('image/png')
        botao_download.href = data_url
    };

    // Atribuindo a url no source do botão
    svg_img.src = url;

    // Adicionando o botão na área
    area.appendChild(botao_download)

    // Detecção do clique para download
    botao_download.addEventListener('click', () => {

        botao_download.download = `${id_area}.png`

    });

}


export default baixarGrafico
