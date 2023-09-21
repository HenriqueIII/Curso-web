const alunos = [
    {nome: 'João', nota:7.3, bolsista: false},
    {nome: 'Maria', nota:9.2, bolsista: true},
    {nome: 'Pedro', nota:9.8, bolsista: false},
    {nome: 'Maria', nota:8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsitas?
const res1 = alunos.map((a) => a.bolsista).reduce((soma, atual) => soma && atual)

console.log(res1)


// Desafio 2: Algum aluno é bolsita?
const res2 = alunos.map(a => a.bolsista).reduce((soma, atual) => soma || atual)

console.log(res2)