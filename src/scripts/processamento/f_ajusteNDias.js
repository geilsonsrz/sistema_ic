import horarios from "./f_horarios.js";



`
    FUNÇÃO DE AJUSTE DOS DADOS
`

// Função principal de ajuste
function ajusteNDias(dados) {

    // Incremento das temperaturas na lista y
    const y = new Array();
    dados.forEach( dado => { y.push(dado[0]) });

    // Incremento dos momentos da lista x
    const x = horarios(dados);

    // Estimativas iniciais para os valores dos coeficientes da função seno
    const y_max = nj.max(y);

    // Momentos com a maior temperatura
    // Captura os id da tempetarura mais alta
    const momentosMaximos = (y, y_max) => {
        const id_maximos = []
        for (let i=0; i<y.length; i++) {
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
    const c = (Math.PI/2) - ((2 * Math.PI * dia_max[0])/24);

    // Tolerância e número máximo de iterações
    const tol = 1e-5;
    const n_max = 200;


    // Número de intervalos de tempo
    const n = x.length;
    
    // Contador da iterações
    let cont = 1;
    // Início dos calculos da matriz jacobiana
    while (cont < n_max) {

        



    }




    
}



export default ajusteNDias