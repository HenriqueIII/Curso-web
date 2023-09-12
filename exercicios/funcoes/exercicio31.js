/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

const negativos = (vetor) => {
    let neg = 0
    for (let i = 0; i < vetor.length; ++i)
        if (vetor[i] < 0)
            neg++

    return neg
} 

let vector = []

for (let i = 0; i < 10; ++i) {
    vector.push(Math.floor(Math.random()*(100-(-100))-100))
}
console.table(vector)
console.log (negativos(vector), 'negativos')