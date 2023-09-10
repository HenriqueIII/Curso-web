/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

const media = (cod, nota1, nota2, nota3) => {

    if (cod<0)
        return

    let notafinal = 0
    let notas = [nota1,nota2,nota3]
    notas.sort((a,b)=>a-b)

    notafinal = ((notas[0]*3) + (notas[1]*3) + (notas[2]*4))/10

    console.log(`Aluno ${cod} : ${notas} : Media : ${notafinal} - ${notafinal>=5?'Aprovado':'Reprovado'}`)
}

media(100, 10, 1, 8)
media(200, 8, 4, 4)
media(300, 5, 5, 3)
