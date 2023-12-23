
const mudarTema = ()=>{

    const corpo = document.getElementById('corpo')

    const btn_tema = document.getElementById('btn-tema')


    btn_tema.addEventListener('click', ()=>{
        
        corpo.classList.toggle('claro')
        corpo.classList.toggle('escuro')

    })

}

mudarTema()
