`
    FIGURA DA TELA INICIAL
`

function figura() {

    // Capturando a área da figura
    const area_figura = document.getElementById('area-figura')

    // Criando o objeto da figura
    const objeto = document.createElement('span')
    objeto.classList.add('figura')

    // Loop para adicionar os elementos filhos
    for (let n=10; n>0; n--) {



        
        const fatia = document.createElement('span')
        fatia.style = `--i:${n}`
        fatia.innerText = `${n}`

        objeto.appendChild(fatia)

    }

    // Adicionando o objeto/figura na tela
    area_figura.appendChild(objeto)

}


figura()
