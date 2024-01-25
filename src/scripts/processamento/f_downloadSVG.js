`
Função para converter e baixar o SVG como PNG
`

function baixarGrafico(svg, id_area) {

    // Selecione o seu elemento SVG
    var svgElement = svg;

    var canvas = document.createElement('canvas');
    canvas.width = svgElement.clientWidth;
    canvas.height = svgElement.clientHeight;

    var context = canvas.getContext('2d');

    // Criar um Blob a partir do conteúdo do SVG
    var svgBlob = new Blob([new XMLSerializer().serializeToString(svgElement)], {type: 'image/svg+xml'});

    // Ler o Blob como uma URL de dados
    var svgUrl = URL.createObjectURL(svgBlob);

    // Carregar a URL do SVG no canvas usando canvg
    canvg(canvas, svgUrl);

    // Criar uma imagem a partir do conteúdo do canvas
    var img = new Image();
    img.src = canvas.toDataURL('image/png'); // Altere para 'image/jpeg' se desejar JPEG

    document.body.appendChild(img);


}


export default baixarGrafico
