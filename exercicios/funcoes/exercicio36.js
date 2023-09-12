/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

const mult = (vetor, num) => {
    let res = []
    for (i in vetor)
        res.push (vetor[i]*num)
    return res
}

const mult5 = (vetor, num) => {
    if (num > 5)
        return mult(vetor, num)
    return 'num deve ser > 5'
}

console.log(mult([1,2,3,4,5], 2))
console.log(mult5([1,2,3,4,5], 6))
console.log(mult5([1,2,3,4,5], 5))