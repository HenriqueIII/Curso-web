/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

const div3 = (num) => {
    return (!(num%3))
}

for (let i = 1; i <= 30; ++i) {
    console.log (`O numero ${i} ${div3(i) ? 'é' : 'nao é'} divisivel por 3`)
}