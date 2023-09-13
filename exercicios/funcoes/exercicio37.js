/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

const progAritmetica = (n, a1, r) => {
    let sum = 0
    console.log(`Termo 1: ${a1}`)
    for (let i = 2; i <= n; ++i) {
        a1 += r
        sum += sum
        console.log(`Termo ${i}: ${a1}`)
    }
}

const progGeometrica = (n, a1, r) => {
    let sum = 0
    console.log(`Termo 1: ${a1}`)
    for (let i = 2; i <= n; ++i) {
        a1 *= r
        sum += sum
        console.log(`Termo ${i}: ${a1}`)
    }
}

progAritmetica(10, 2, 2)
progGeometrica(10, 2, 2)

