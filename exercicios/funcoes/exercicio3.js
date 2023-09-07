// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

const pow = (b, p) => {
    if (p == 0)
        return 1

    let x = b*b, a = pow (x, Math.floor(p/2))
    return p & 1 ? b * a : a
}

console.log(pow(2,3))

