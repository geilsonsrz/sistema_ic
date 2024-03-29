import horarios from "./f_horarios.js";





`
    FUNÇÃO DE AJUSTE DOS DADOS
`

// Função principal de ajuste
function ajusteNDias(dados) {

    // Incremento das temperaturas na lista y
    const y = new Array();
    dados.forEach(dado => { y.push(dado[0]) });

    // Incremento dos momentos da lista x
    const x = horarios(dados);

    // Estimativas iniciais para os valores dos coeficientes da função seno
    const y_max = nj.max(y);

    // Momentos com a maior temperatura
    // Captura os id da tempetarura mais alta
    const momentosMaximos = (y, y_max) => {
        const id_maximos = []
        for (let i = 0; i < y.length; i++) {
            if (y[i] === y_max) {
                id_maximos.push(i)
            }
        }
        return id_maximos
    };
    const dia_max = momentosMaximos(y, y_max);

    // Média aritmética dos elementos da matriz
    const d = nj.mean(y);
    const a = y_max - d;

    // Mudança de 365 para 24
    const b = (2 * Math.PI) / 24;
    const c = (Math.PI / 2) - ((2 * Math.PI * dia_max[0]) / 24);

    // Tolerância e número máximo de iterações
    const tol = 1e-5;
    const n_max = 200;


    // Número de intervalos de tempo
    const n = x.length;

    // Contador da iterações
    let cont = 1;
    // Início dos calculos da matriz jacobiana
    while (cont < n_max) {



        // Função auxiliar para multiplicação escalar em um array/vetor
        const scalarMultiply = (scalar, array) => math.map(array, element => math.multiply(scalar, element));

        // Calculando as partes individuais para cada elemento de x e y
        const parte1 = math.map(x, xi => math.sum(math.square(math.sin(math.add(math.multiply(b, xi), c)))));
        const parte2 = math.map(x, xi => math.sum(math.multiply(
            math.cos(math.add(math.multiply(b, xi), c)),
            math.subtract(
                scalarMultiply(2 * a, math.sin(math.add(math.multiply(b, xi), c))),
                math.add(d, -y[x.indexOf(xi)])
            )
        )));
        const parte3 = math.map(x, xi => math.sum(math.sin(math.add(math.multiply(b, xi), c))));
        const parte4 = math.map(x, xi => math.sum(math.multiply(
            math.sin(math.add(math.multiply(b, xi), c)),
            math.cos(math.add(math.multiply(b, xi), c))
        )));
        const parte5 = math.map(x, xi => math.sum(math.subtract(
            math.square(scalarMultiply(a, math.cos(math.add(math.multiply(b, xi), c)))),
            math.multiply(
                math.subtract(
                    scalarMultiply(a, math.sin(math.add(math.multiply(b, xi), c))),
                    d, -y[x.indexOf(xi)],
                    math.sin(math.add(math.multiply(b, xi), c))
                )
            )
        )));
        const parte6 = math.map(x, xi => math.sum(math.cos(math.add(math.multiply(b, xi), c))));
        const parte7 = math.map(x, xi => math.sum(math.sin(math.add(math.multiply(b, xi), c))));
        const parte8 = math.map(x, xi => math.sum(scalarMultiply(a, math.cos(math.add(math.multiply(b, xi), c)))));



        console.log('Parte 1:', parte1);
        console.log('Parte 2:', parte2);
        console.log('Parte 3:', parte3);
        console.log('Parte 4:', parte4);
        console.log('Parte 5:', parte5);
        console.log('Parte 6:', parte6);
        console.log('Parte 7:', parte7);
        console.log('Parte 8:', parte8);






        // const jac = nj.array([
        //     [parte1, parte2, parte3],
        //     [parte4, parte5, parte6],
        //     [parte7, parte8, n]
        // ]);

        //     // Computação do Campo Vetorial F
        //     const F = nj.array([
        //         [nj.sum((a * nj.sin(b * x + c) + d - y) * nj.sin(b * x + c))],
        //         [nj.sum((a * nj.sin(b * x + c) + d - y) * (nj.cos(b * x + c)))],
        //         [nj.sum(a * nj.sin(b * x + c) + d - y)]
        //     ]);

        //     // Resolvendo o sistema linear jac t =-F
        //     const t = math.lusolve(jac, nj.negative(F));

        //     // Verificar a convergência na norma do infinito
        //     if (nj.max(nj.abs(t)).tolist() < tol) break;
        //     else {
        cont += 1;

        //         // Atualiza a solução
        //         a.add(t.get(0));
        //         c.add(t.get(1));
        //         d.add(t.get(2));
        //     }


    }

    // // Retorno dos coeficientes
    // let result = [a.tolist(), c.tolist(), d.tolist(), b, x.tolist(), y.tolist()];


}



export default ajusteNDias