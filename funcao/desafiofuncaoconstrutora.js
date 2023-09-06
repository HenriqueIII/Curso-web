function Pessoa (nome) {
    let name = nome

    this.falar = () => {
        console.log(`Meu nome é ${name}`)
    }
}

p1 = new Pessoa('Paulo')
p1.falar()
