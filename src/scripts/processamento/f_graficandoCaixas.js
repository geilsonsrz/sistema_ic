`
    Função para graficar os dados das caixas
`


// Gerar gráficos
function graficos(dados) {

    // Identificação da seção campo de plotagem
    const resultados = document.getElementById('resultados')


        // Identificação do link para os gráficos
        const link_graficos = document.getElementById('link-graficos');

        // Tornando visível ao primeiro clique.
        resultados.classList.remove('oculto');
        link_graficos.classList.remove('oculto');
}




export default graficos


