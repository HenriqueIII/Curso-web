/*Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/

const aprovacao = (nota) => {
    if (nota < 38)
        return 'Reprovado'

    let multiplo5 = nota
    if (nota%5){
        multiplo5 = (Math.floor(nota / 5) + 1) * 5
    }
    if ((multiplo5 - nota) < 3) { nota = multiplo5 }
    
    return `Aprovado com ${nota} valores.` 
}


for (let i = 0; i <= 100; ++i){ 
    console.log(aprovacao(i)) 
}



