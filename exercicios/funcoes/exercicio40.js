/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

const numberToGrade = (vetorNum) =>{
    let vetorGrade = []
    for (i in vetorNum){
        if (vetorNum[i]>=0 && vetorNum[i]<=4.9)
            vetorGrade.push ('D')
        else if (vetorNum[i]>4.9 && vetorNum[i]<=6.9)
            vetorGrade.push ('C')
        else if (vetorNum[i]>6.9 && vetorNum[i]<=8.9)
            vetorGrade.push('B')
        else if (vetorNum[i]>8.9 && vetorNum[i]<=10)
            vetorGrade.push('A')
        else
            vetorGrade.push(null)
    }
    return vetorGrade
}


let vetor = []

for (let i = 0; i < 10; ++i)
    vetor.push((Math.random()*(10)).toFixed(1))

console.log(vetor)

console.log(numberToGrade(vetor))