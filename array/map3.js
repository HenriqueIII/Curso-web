Array.prototype.map2 = function(callbackFn) {
    let res = []
    for (let i = 0; i < this.length; ++i)
        res.push(callbackFn(this[i], i, this))
    return res
}

Array.prototype.list = function() {
    console.log(this)
    for(let i in this)
        console.log (i, this[i])
}
// console.log(typeof Array.prototype)

Object.defineProperty(Array.prototype, "map2", {enumerable: false})
Object.defineProperty(Array.prototype, "list", {enumerable: false})

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const parser = e => JSON.parse(e)
const getPreco = e => e.preco

const res = carrinho.map2(parser).map2(getPreco)
console.log(res)

// res.list()