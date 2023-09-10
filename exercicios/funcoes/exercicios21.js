/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

const seguro = (idade) => {
    const valorInicial = 100
    if (idade < 10)
        return valorInicial + 80
    if (idade <= 30)
        return valorInicial + 50
    if (idade <= 60)
        return valorInicial + 95
    return valorInicial+130
}

console.log(seguro(9))
console.log(seguro(10))
console.log(seguro(30))
console.log(seguro(31))
console.log(seguro(60))
console.log(seguro(61))