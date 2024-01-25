`
    CRIAÇÃO DO BOTÃO DE DOWNLOAD
`


function baixarGrafico(id_area) {

    // Identificação da área
    const area = document.getElementById(id_area)

    // Criação
    const botao_download = document.createElement('span')
    botao_download.classList.add('btn', 'btn-download')
    botao_download.innerText = 'Download'

    // Função para download
    botao_download.addEventListener('click', ()=>{
        
        // Captura dos dados do SVG
        const svg = document.getElementById(id_area).querySelector('svg').outerHTML


        // Criação do elemento canvas
        let canvas = document.createElement('canvas')
        


        let largura_svg = svg.offsetWidth
        let altura_svg = svg.offsetHeight

        console.log(typeof(svg))
        
        

    })

    // Adicionando o botão na área
    area.appendChild(botao_download)
    
}


export default baixarGrafico
