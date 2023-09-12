/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

vetorInt = [1, 2, 3, 4]
vetorStr = ['um', 'dois', 'tres', 'quatro']
vetorFloat = [1.1, 1.2, 1.3, 1.4]

let vetorResult = ''

for (let i = 0; i < vetorInt.length; ++i) {
    vetorResult = String.prototype.concat(vetorResult, vetorInt[i], vetorStr[i], vetorFloat[i])
}

console.log(vetorResult)

vetorResult = ''

vetorResult = vetorResult.concat(vetorInt, vetorStr, vetorFloat)

console.log(vetorResult)