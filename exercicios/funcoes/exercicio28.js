// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const ParImpar = (vetor) => {
    let par = 0, impar = 0
    for (let i = 0; i < vetor.length; ++i) {
        vetor[i] & 1 ? impar++ : par++
    }
    console.log(`O vetor ${vetor} tem ${par} numero(s) par(es) e ${impar} numero(s) impar(es)`)
}

ParImpar([2, 10, 4, 6, 7, 1])