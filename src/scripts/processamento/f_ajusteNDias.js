import horarios from "./f_horarios.js";


`
    Funções de apoio para o ajuste
`

function argmax(array) {
    const maxIndices = [];
    const maxValue = Math.max(array);

    array.forEach((value, index) => {
        if (value === maxValue) {
            maxIndices.push(index);
        }
    });

    return maxIndices;
}





`
    FUNÇÃO DE AJUSTE DOS DADOS
`

// Função principal de ajuste
function ajusteNDias(dados) {

    // Atribuição dos valores de x, horários
    const tempos = new Array(horarios(dados))

    // Atribuição dos valores de y, temperaturas
    const temperaturas = new Array()
    for (let i in dados) { temperaturas.push(dados[i][0]) }


    // Converter lista_dias para um array numérico
    const x = nj.array(tempos, 'float64');
    // Atribuindo os dados ao y
    const y = nj.array(temperaturas, 'float64');

    // Estimativas iniciais para os valores dos coeficientes da função seno
    const y_max = nj.max(y);


    const dia_max = argmax(temperaturas); // ID da maior temperatura
    dia_max.tolist()



    const d = nj.mean(y).tolist();  // Média aritmética dos elementos da matriz
    const a = y_max - d;

    // MUDANÇA DE 365 PARA 24
    const b = (2 * Math.PI) / 24;
    const c = Math.PI / 2 - (2 * Math.PI * dia_max[0]) / 24;

    // Tolerância e número máximo de iterações
    const tol = 1e-5;
    const nMax = 200;

    // Número de intervalos de tempo
    const n = x.shape[0];

    let cont = 1;  // Contador para o número de iterações
    while (cont < nMax) {
        // Computação da Matriz Jacobiana
        const parte1 = nj.sum(nj.sin(b.mul(x).add(c)).pow(2));
        const parte2 = nj.sum(nj.cos(b.mul(x).add(c)).mul(2 * a * nj.sin(b.mul(x).add(c)).add(d).subtract(y)));
        const parte3 = nj.sum(nj.sin(b.mul(x).add(c)));
        const parte4 = nj.sum(nj.sin(b.mul(x).add(c)).mul(nj.cos(b.mul(x).add(c))));
        const parte5 = nj.sum(
            a.mul(nj.cos(b.mul(x).add(c)).pow(2)).subtract(
                a.mul(nj.sin(b.mul(x).add(c)).add(d).subtract(y)).mul(nj.sin(b.mul(x).add(c)))
            )
        );
        const parte6 = nj.sum(nj.cos(b.mul(x).add(c)));
        const parte7 = nj.sum(nj.sin(b.mul(x).add(c)));
        const parte8 = nj.sum(a.mul(nj.cos(b.mul(x).add(c))));

        const jac = nj.array([
            [parte1.tolist(), parte2.tolist(), parte3.tolist()],
            [parte4.tolist(), parte5.tolist(), parte6.tolist()],
            [parte7.tolist(), parte8.tolist(), n]
        ]);

        // Computação do Campo Vetorial F
        const F = nj.array([
            [nj.sum(a.mul(nj.sin(b.mul(x).add(c)).add(d).subtract(y)).mul(nj.sin(b.mul(x).add(c))))],
            [nj.sum(a.mul(nj.sin(b.mul(x).add(c)).add(d).subtract(y)).mul(nj.cos(b.mul(x).add(c))))],
            [nj.sum(a.mul(nj.sin(b.mul(x).add(c)).add(d).subtract(y)))]
        ]);

        // Resolvendo o sistema linear jac t =-F
        const t = nj.solve(jac, nj.neg(F));

        // Verificar a convergência na norma do infinito
        if (nj.max(nj.abs(t)).tolist() < tol) break;
        else {
            cont += 1;

            // Atualiza a solução
            a.add(t.get(0));
            c.add(t.get(1));
            d.add(t.get(2));
        }
    }

    // Retorno dos coeficientes
    return [a.tolist(), c.tolist(), d.tolist(), b, x.tolist(), y.tolist()];

}



export default ajusteNDias