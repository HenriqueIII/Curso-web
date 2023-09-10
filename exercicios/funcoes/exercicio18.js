/*Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

const extenso = (num) => {
    let arr = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
    switch (num) {
        case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10:
            console.log(arr[num-1])
            break
        default:
            console.log('Número inválido')
    }
}

for (let i = 0; i <= 10; ++i)
    extenso(i)