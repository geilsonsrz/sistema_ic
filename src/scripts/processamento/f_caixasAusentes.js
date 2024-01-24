`
    FUNÇÃO QUE VERIFICA AS AUSÊNCIAS DE CAIXAS

    Retorna os números das caixas ausentes
`

function caixasAusentes(dados) {

    const caixas_ausentes = []

    const verificador = {
        'caixa01': () => caixas_ausentes.push(1),
        'caixa02': () => caixas_ausentes.push(2),
        'caixa03': () => caixas_ausentes.push(3)
    }
    
    for (let caixa in verificador) {

        if (!caixa in dados) {
        
            verificador[caixa]
        
        }
    }

    return caixas_ausentes
}


export default caixasAusentes
