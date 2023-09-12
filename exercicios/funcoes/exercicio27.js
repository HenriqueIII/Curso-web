/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

const crescimento = (c1alt, c1tac, c2alt, c2tac) => {
    if (c1alt == c2alt)
        return 'Altura das crianças é igual'

    if (c2alt < c1alt)
        [c1alt, c1tac, c2alt, c2tac] = [c2alt, c2tac, c1alt, c1tac]

    if (c1tac < c2tac)
        return 'A criança menor nunca ultrapassara a altura da criança maior'
    let anos = 0
    while(c1alt <= c2alt) {
        c1alt += c1tac
        c2alt += c2tac
        anos++ 
    }
    return `A criança menor ultrapassará a maior em ${anos} anos`
}

console.log(crescimento(120, 10, 120, 10))
console.log(crescimento(120, 10, 130, 20))
console.log(crescimento(130, 20, 120, 10))
console.log(crescimento(120, 20, 130, 10))
console.log(crescimento(130, 10, 120, 20))
