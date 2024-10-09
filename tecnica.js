const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* 1) Observe o trecho de código abaixo: 
   int INDICE = 13, SOMA = 0, K = 0; 
   Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } 
   Imprimir(SOMA); Ao final do processamento, qual será o valor da variável SOMA? 
*/
let INDICE = 13, SOMA = 0, K = 0;
while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
console.log("\nValor final de SOMA: " + SOMA );

/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 
   2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.. .). 
   Escreva um programa na linguagem que desejar onde, informe um número, ele calcule a sequência de Fibonacci 
   e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 
   IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser 
   previamente definido no código; 
*/
function isFibonacci(num) {
    let a = 0, b = 1;
    if (num === a || num === b) return true;
    let next = a + b;
    while (next <= num) {
        if (next === num) return true;
        a = b;
        b = next;
        next = a + b;
    }
    return false;
}

// Solicita ao usuário um número para verificar
rl.question("\nInforme um número para verificar se pertence à sequência de Fibonacci: ", (answer) => {
    let numberToCheck = parseInt(answer);
    if (isFibonacci(numberToCheck)) {
        console.log(`O número ${numberToCheck} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numberToCheck} NÃO pertence à sequência de Fibonacci.`);
    }


    /* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, 
       na linguagem que desejar, que calcule e retorne: 
       • O menor valor de faturamento ocorrido em um dia do mês; 
       • O maior valor de faturamento ocorrido em um dia do mês; 
       • Número de dias no mês em que o valor do faturamento diário foi superior à média mensal. 
       IMPORTANTE: a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; 
       b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser 
       ignorados no cálculo da média; 
    */
    const faturamentoDiario = [
        22174.1664, 24537.6698, 26139.6134, 0, 0, 26742.6612,
        0, 0, 17098.8779, 0, 21016.1808, 16000, 18000, 20000
    ];
    
    const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0);
    const menorValor = Math.min(...diasComFaturamento);
    const maiorValor = Math.max(...diasComFaturamento);
    const soma = diasComFaturamento.reduce((acc, curr) => acc + curr, 0);
    const media = soma / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > media).length;

    console.log(`\nMenor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
    console.log(`\nMaior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
    console.log(`\nDias com faturamento acima da média: ${diasAcimaDaMedia}`);


    /* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: 
       • SP – R$ 67.836,43 
       • RJ – R$ 36.678,66 
       • MG – R$ 29.229,88 
       • ES – R$ 27.165,48 
       • Outros – R$ 19.849, 53 
       Escreva um programa na linguagem que desejar onde calcular o percentual de representação que cada estado 
       teve dentro do valor total mensal da distribuidora. 
    */
    const faturamentoEstados = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Outros": 19849.53
    };
    
    const total = Object.values(faturamentoEstados).reduce((acc, curr) => acc + curr, 0);
    for (const estado in faturamentoEstados) {
        const percentual = (faturamentoEstados[estado] / total) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    }


    /* 5) Escreva um programa que inverta os caracteres de uma string. 
       IMPORTANTE: a) Essa string pode ser informada através de qualquer entrada de sua preferência ou 
       pode ser previamente definida no código; 
       b) Evite utilizar funções prontas, como, por exemplo, reverter; 
    */
    rl.question("\nInforme uma string para inverter: ", (str) => {
        let invertida = "";
        for (let i = str.length - 1; i >= 0; i--) {
            invertida += str[i];
        }
        console.log("String invertida: " + invertida);
        rl.close();
    });
});
