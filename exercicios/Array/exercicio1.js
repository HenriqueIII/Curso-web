function cumprimentar(text) {
    console.log(`Olá, ${text}!`)
    return "Olá, ".concat(text, "!")
}

cumprimentar("Leonardo")
console.log(cumprimentar("Maria"))