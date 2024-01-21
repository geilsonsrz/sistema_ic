`
    FIGURA DA TELA INICIAL
`

function figura() {

    // ID da fatia
    const ids = {
        6: 'fatia-superficie',
        5: 'fatia-04m',
        4: 'fatia-08m',
        3: 'fatia-12m',
        2: 'fatia-16m',
        1: 'fatia-20m'
    }

    // Capturando a área da figura
    const area_figura = document.getElementById('area-figura')

    // Criando o objeto da figura
    const objeto = document.createElement('span')
    objeto.classList.add('figura')

    // Loop para adicionar os elementos filhos
    for (let n=6; n>0; n--) {

        // Criando as fatias
        const fatia = document.createElement('span')
        fatia.classList.add('fatia')
        fatia.style = `--i:${n}`
        fatia.id = ids[n]

        // Adicionando a fatia no objeto
        objeto.appendChild(fatia)
    }

    // Adicionando o objeto/figura na tela
    area_figura.appendChild(objeto)

}


figura()
