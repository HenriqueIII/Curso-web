// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const MinMax = (vetor) => {
    let max = vetor[0], min = vetor[0]
    for (let i = 1; i < vetor.length; ++i){
        if (vetor[i] > max)
            max = vetor[i]
        if (vetor[i] < min)
            min = vetor[i]
    }
    return [min, max]
}

let vector = []

for (let i = 0; i < 10; ++i) {
    vector.push(Math.floor(Math.random()*(100-1)+1))
}

console.log(vector, MinMax(vector))