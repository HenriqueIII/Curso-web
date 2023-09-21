const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const parser = e => JSON.parse(e)
const getPreco = e => e.preco

let res = carrinho.map(parser).map(getPreco)
console.log(res)

let res2 = carrinho.map(function(e){
    return JSON.parse(e)
}).map(function(e){
    return e.preco
})

console.log(res)