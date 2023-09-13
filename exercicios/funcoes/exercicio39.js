// 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.

const trocarVetor = (vetorA, vetorB) => {
    if (vetorA.length != vetorB.length){
        console.log('tamanhos dos vetores diferentes')
        return 0
    }

    for (i in vetorA)
        [vetorA[i], vetorB[i]]=[vetorB[i], vetorA[i]]

    return [vetorA, vetorB]
}

let vetor1 = [1, 2, 3, 4, 5], vetor2 = [6, 7, 8, 9, 10]
console.log(vetor1, vetor2)
let [vetor3, vetor4] = trocarVetor(vetor1, vetor2)
console.log(vetor3, vetor4)

