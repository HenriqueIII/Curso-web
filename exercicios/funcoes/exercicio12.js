// 12) Faça um algoritmo que calcule o fatorial de um número.

const fact = (num) => {
    res = num
    if (num == 1)
        return 1
    res *= fact(num-1)
    return res
}

console.log(fact(5))