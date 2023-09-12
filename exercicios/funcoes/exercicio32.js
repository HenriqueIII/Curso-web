// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const mediaVetor = (vetor) => {
    let sum = 0
    for (i in vetor) {
        sum += vetor[i]
    }
    return sum / vetor.length
}

let vector = []

for (let i = 0; i < 10; ++i) {
    vector.push(Math.floor(Math.random()*(10-1)+1))
}
console.table(vector)
console.log ('media:', mediaVetor(vector))