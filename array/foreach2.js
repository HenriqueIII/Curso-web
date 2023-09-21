// Implementação do metodo forEach by me

Array.prototype.forEach2 = function (callbackFn) {
    for (let i = 0; i < this.length; ++i){
        callbackFn(this[i], i, this)
    }
}

const aprovados = ['Ana', 'Jeremias', 'Gisele', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})

// Implementação do metodo forEach by professor



