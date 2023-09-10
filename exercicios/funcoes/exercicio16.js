/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

const calc = (num1, op, num2) => {
    switch (op) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'operação inválida'
    }
}

console.log(calc(1, '+', 2))
console.log(calc(1, '-', 2))
console.log(calc(1, '*', 2))
console.log(calc(1, '/', 2))
console.log(calc(1, '%', 2))