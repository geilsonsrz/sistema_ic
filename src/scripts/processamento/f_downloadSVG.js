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

    // Função para download
    botao_download.addEventListener('click', () => {

        // Capturando o SVG da área
        let svg
        for (let filho in area.children) {
            if (area.children[filho].tagName === 'svg') { svg = area.children[filho] }
        }

        const svg_img = new Image();
        const svg_txt = new XMLSerializer().serializeToString(svg);
        const blob = new Blob([svg_txt], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);

        `
            IMAGEM DO GRÁFICO TÁ SENDO CORTADA NA PARTE DA LEGENDA INFERIOR
        `
        svg_img.onload = function () {
            const canvas = document.createElement('canvas');
            canvas.width = svg.width.baseVal.value;
            canvas.height = svg.height.baseVal.value;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(svg_img, 0, 0);
            const dataURL = canvas.toDataURL('image/png');

            // Agora você pode usar dataURL como necessário
            console.log(dataURL);
        };

        svg_img.src = url;

    });

    // Adicionando o botão na área
    area.appendChild(botao_download)

}


export default baixarGrafico
