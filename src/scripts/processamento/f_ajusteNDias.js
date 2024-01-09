`
    FUNÇÃO DE AJUSTE DOS DADOS
`
import horarios from "./f_horarios.js";



function ajusteNDias(dados) {

    // Captura das temperaturas
    const temperaturas = []
    dados.forEach( dado => temperaturas.push(dado[0]));

    // Captura dos horários
    const horas = horarios(dados)

    // Início das declarações para a função de ajuste
    let y = temperaturas
    let x = horas

    // Estimativas dos valores iniciais dos coeficientes
    // Temperatura máxima
    let y_max = Math.max(y)
    // Índice da temperatura máxima
    let dia_max = Math.indexOf(Math.max(y))
    // Média aritmética das temperaturas
    let d = mediaAritmetica(y)
    // Amplitude
    let a = y_max - d









}



`
    FUNÇÕES DE CÁLCULO DE APOIO PARA OS AJUSTE
`
function mediaAritmetica(array) {

    // Soma dos elementos
    let soma = array.reduce((acc, val) => acc + val, 0)
    // Média
    let media = soma / array.length
    
    return media
}





export default ajusteNDias