`
    FUNÇÃO DE AJUSTE DOS DADOS
`
import horarios from "./f_horarios.js";


// Função principal de ajuste
function ajusteNDias(dados) {
    // Captura das temperaturas
    const temperaturas = dados.map(dado => dado[0]);

    // Captura dos horários - certifique-se de implementar corretamente a função horarios
    const horas = horarios(dados);

    // Converter tempo e temperatura para arrays numéricos
    const x = horas.map(parseFloat);
    const y = temperaturas.map(parseFloat);

    // Estimativas iniciais para os valores dos coeficientes da função seno
    const y_max = Math.max(...y);
    const dia_max = y.indexOf(y_max);
    const d = y.reduce((acc, val) => acc + val, 0) / y.length;
    const a = y_max - d;

    // MUDANÇA DE 365 PARA 24
    const b = (2 * Math.PI) / 24;
    const c = Math.PI / 2 - (2 * Math.PI * dia_max) / 24;

    // Tolerância e número máximo de iterações
    const tol = 1e-5;
    const nMax = 200;

    // Número de intervalos de tempo
    const n = x.length;

    let cont = 1; // Contador para o número de iterações
    while (cont < nMax) {
        // Computação da Matriz Jacobiana
        const parte1 = x.reduce((acc, val) => acc + Math.sin(b * val + c) ** 2, 0);
        const parte2 = x.reduce(
            (acc, val, i) => acc + Math.cos(b * val + c) * (2 * a * Math.sin(b * val + c) + d - y[i]),
            0
        );
        const parte3 = x.reduce((acc, val) => acc + Math.sin(b * val + c), 0);
        const parte4 = x.reduce(
            (acc, val) => acc + Math.sin(b * val + c) * Math.cos(b * val + c),
            0
        );
        const parte5 = x.reduce(
            (acc, val, i) =>
                acc +
                (a * Math.cos(b * val + c) ** 2 - (a * Math.sin(b * val + c) + d - y[i]) * Math.sin(b * val + c)),
            0
        );
        const parte6 = x.reduce((acc, val) => acc + Math.cos(b * val + c), 0);
        const parte7 = x.reduce((acc, val) => acc + Math.sin(b * val + c), 0);
        const parte8 = x.reduce((acc, val) => acc + a * Math.cos(b * val + c), 0);

        // Monta a matriz jac usando as partes intermediárias
        const jac = [
            [parte1, parte2, parte3],
            [parte4, parte5, parte6],
            [parte7, parte8, n]
        ];

        // Computação do Campo Vetorial F
        const F = [
            [x.reduce((acc, val, i) => acc + (a * Math.sin(b * val + c) + d - y[i]) * Math.sin(b * val + c), 0)],
            [x.reduce((acc, val, i) => acc + (a * Math.sin(b * val + c) + d - y[i]) * Math.cos(b * val + c), 0)],
            [x.reduce((acc, val, i) => acc + a * Math.sin(b * val + c) + d - y[i], 0)]
        ];

        // Resolvendo o sistema linear jac t = -F
        const t = solveLinearSystem(jac, F);

        // Verificar a convergência na norma do infinito
        if (Math.max(...t.map(Math.abs)) < tol) break;
        else {
            cont += 1;

            // Atualiza a solução usando variáveis temporárias
            const aTemp = a + t[0];
            const cTemp = c + t[1];
            const dTemp = d + t[2];

            // Atualiza as variáveis originais
            a = aTemp;
            c = cTemp;
            d = dTemp;
        }
    }

    // Retorno dos coeficientes
    return [a, c, d, b, x, y];
}

function solveLinearSystem(matrixA, vectorB) {
    const numRows = matrixA.length;
    const numCols = matrixA[0].length;

    // Criar cópias das matrizes para evitar modificação dos originais
    const A = matrixA.map(row => [...row]);
    const B = [...vectorB];

    // Eliminação de Gauss
    for (let i = 0; i < numRows; i++) {
        // Pivoteamento parcial para evitar divisão por zero
        let maxRowIndex = i;
        for (let k = i + 1; k < numRows; k++) {
            if (Math.abs(A[k][i]) > Math.abs(A[maxRowIndex][i])) {
                maxRowIndex = k;
            }
        }

        // Trocar linhas
        [A[i], A[maxRowIndex]] = [A[maxRowIndex], A[i]];
        [B[i], B[maxRowIndex]] = [B[maxRowIndex], B[i]];

        // Escalonamento
        const pivot = A[i][i];
        if (pivot === 0) {
            throw new Error('O sistema não tem uma solução única');
        }

        for (let j = i + 1; j < numRows; j++) {
            const factor = A[j][i] / pivot;
            B[j] -= factor * B[i];
            for (let k = i; k < numCols; k++) {
                A[j][k] -= factor * A[i][k];
            }
        }
    }

    // Retrosubstituição
    const solution = new Array(numRows).fill(0);
    for (let i = numRows - 1; i >= 0; i--) {
        let sum = 0;
        for (let j = i + 1; j < numCols; j++) {
            sum += A[i][j] * solution[j];
        }
        solution[i] = (B[i] - sum) / A[i][i];
    }

    return solution;
}





export default ajusteNDias