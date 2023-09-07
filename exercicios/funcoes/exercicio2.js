/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 * triângulo).*/



const testaTriang = (a, b, c) => {
    
    let triang = [  !!((a == b) && (b == c)), 
                    !!((a!=b) && (b!=c)) && (a!=c)]

    triang.push(!!(!triang[0] && !triang[1]))

    let label = ['equilatero', 'Escaleno', 'Isosceles']
    
    for (let i = 0; i < 3; ++i)
        if(triang[i])
            return label[i]

}

console.log(testaTriang(1,1,1))//todos iguais
console.log(testaTriang(1,2,3))//todos diferentes
console.log(testaTriang(1,1,2))//a == b
console.log(testaTriang(2,1,1))//b == c
console.log(testaTriang(2,1,2))//a == c
