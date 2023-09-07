/*05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/
const potencia = Math.pow(10, 15)

const FloatToString = v => {
    let string = ''
    while (!Number.isInteger(v)){
        v *= 10
        if (Math.floor(v) == 0)
            string = String.prototype.concat(string, '0')
    }
    string = String.prototype.concat(string, Math.floor(v))
    return string
}

const format = (value, sigla='€') => {
    let inteiro, flutuante, string =''
    inteiro = Math.floor(value) // obter a parte inteira

    // converter o flutuante e arredondar
    flutuante = (value - inteiro)
    flutuante *= potencia
    flutuante = Math.ceil(flutuante)
    flutuante /= potencia
    flutuante = flutuante.toFixed(3)


    flutuante = FloatToString(flutuante) // converter para string

    if (sigla !== '€') { string += sigla + ' '}
    string = String.prototype.concat(string, inteiro,',',flutuante)
    if (sigla == '€') { string += '€' }
    console.log(string)
}

format ((13.003+0.001))