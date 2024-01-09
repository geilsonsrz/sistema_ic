`
    FUNÇÃO DE AJUSTE DOS DADOS
`
import horarios from "./f_horarios.js";


// Função principal de ajuste
function ajusteNDias(dados) {

    // Captura das temperaturas
    const temperaturas = []
    dados.forEach(dado => temperaturas.push(dado[0]));

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

    // Função de ajuste
    let b = (2 * Math.PI) / 24
    let c = (Math.PI / 2) - (2 * Math.PI * dia_max) / 24

    // Tolerância e número máximo de iterações
    let tol = 1e-5
    let nMax = 200

    // Quantidade de intervalos de tempo
    let n = x.length

    // Contador de iterações
    let cont = 1

    while (cont < nMax) {

        // Cálculo da matriz jacobiana
        // Funções dos cálculos logo abaixo
        let parte1 = somatorioJacParte1(b, x, c)
        let parte2 = somatorioJacParte2(b, x, c, a, d, y)
        let parte3 = somatorioJacParte3(b, x, c)
        let parte4 = somatorioJacParte4(b, x, c)
        let parte5 = somatorioJacParte5(a, b, x, c, d, y)
        let parte6 = somatorioJacParte6(b, x, c)
        let parte7 = somatorioJacParte7(b, x, c)
        let parte8 = somatorioJacParte8(a, b, x, c)

        // Montando a Matriz Jacobiana com as partes
        let jac = [
            [parte1, parte2, parte3],
            [parte4, parte5, parte6],
            [parte7, parte8, n]
        ]

        // Campo vetorial F
        let F = [
            [vetorialParte1(a, b, x, c, d, y)],
            [vetorialParte2(a, b, x, c, d, y)],
            [vetorialParte3(a, b, x, c, d, y)]
        ]



    }


}



`
    FUNÇÕES DE CÁLCULO DE APOIO PARA OS AJUSTE
    - Média Aritmética
    - Calculos das partes da matriz jacobiana
    - Calculos das partes do campo vetorial
`
// Média aritmética
function mediaAritmetica(array) {

    // Soma dos elementos
    let soma = array.reduce((acc, val) => acc + val, 0)
    // Média
    let media = soma / array.length

    return media
}

// Somatório Matriz Jacobiana
// Parte 1
function somatorioJacParte1(b, x, c) {
    const resultado = b.map((bi, i) => Math.pow(Math.sin(bi * x[i] + c[i]), 2))
    const soma = resultado.reduce((acc, valor) => acc + valor, 0)

    return soma
}
// Parte 2
function somatorioJacParte2(b, x, c, a, d, y) {
    const resultado = b.map((bi, i) => {
        const termo1 = Math.cos(bi * x[i] + c[i]);
        const termo2 = 2 * a * Math.sin(bi * x[i] + c[i]) + d - y[i];
        return termo1 * termo2;
    });
    const soma = resultado.reduce((acc, valor) => acc + valor, 0);

    return soma;
}
// Parte 3
function somatorioJacParte3(b, x, c) {
    const resultado = b.map((bi, i) => Math.sin(bi * x[i] + c[i]));
    const soma = resultado.reduce((acc, valor) => acc + valor, 0);

    return soma;
}
// Parte 4
function somatorioJacParte4(b, x, c) {
    const resultado = b.map((bi, i) => Math.sin(bi * x[i] + c[i]) * Math.cos(bi * x[i] + c[i]));
    const soma = resultado.reduce((acc, valor) => acc + valor, 0);

    return soma;
}
// Parte 5
function somatorioJacParte5(a, b, x, c, d, y) {
    const resultado = b.map((bi, i) => {
        const termo1 = a * Math.pow(Math.cos(bi * x[i] + c[i]), 2);
        const termo2 = (a * Math.sin(bi * x[i] + c[i]) + d - y[i]) * Math.sin(bi * x[i] + c[i]);
        return termo1 - termo2;
    });
    const soma = resultado.reduce((acc, valor) => acc + valor, 0);

    return soma;
}
// Parte 6
function somatorioJacParte6(b, x, c) {
    const resultado = b.map((bi, i) => Math.cos(bi * x[i] + c[i]));
    const soma = resultado.reduce((acc, valor) => acc + valor, 0);

    return soma;
}
// Parte 7
function somatorioJacParte7(b, x, c) {
    const resultado = b.map((bi, i) => Math.sin(bi * x[i] + c[i]));
    const soma = resultado.reduce((acc, valor) => acc + valor, 0);

    return soma;
}
// Parte 8
function somatorioJacParte8(a, b, x, c) {
    const resultado = b.map((bi, i) => a * Math.cos(bi * x[i] + c[i]));
    const soma = resultado.reduce((acc, valor) => acc + valor, 0);

    return soma;
}


// Cálculo do Campo Vetorial F
// Vetorial Parte 1
function vetorialParte1(a, b, x, c, d, y) {
    const resultado = b.map((bi, i) => {
        const termo1 = (a * Math.sin(bi * x[i] + c[i]) + d - y[i]) * Math.sin(bi * x[i] + c[i]);
        return termo1;
    });
    const soma = resultado.reduce((acc, valor) => acc + valor, 0);

    return soma;
}
// Vetorial Parte 2
function vetorialParte2(a, b, x, c, d, y) {
    const resultado = b.map((bi, i) => {
        const termo1 = (a * Math.sin(bi * x[i] + c[i]) + d - y[i]) * Math.cos(bi * x[i] + c[i]);
        return termo1;
    });

    const soma = resultado.reduce((acc, valor) => acc + valor, 0);
    return soma;
}
// Vetorial Parte 3
function vetorialParte3(a, b, x, c, d, y) {
    const resultado = b.map((bi, i) => {
        const termo1 = a * Math.sin(bi * x[i] + c[i]);
        const termo2 = d - y[i];
        return termo1 + termo2;
    });

    const soma = resultado.reduce((acc, valor) => acc + valor, 0);
    return soma;
}


export default ajusteNDias