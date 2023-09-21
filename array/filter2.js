Array.prototype.filter2 = function (callbackFn) {
    let res = []
    for (let i = 0; i < this.length; ++i)
        if(callbackFn(this[i], i, this))
            res.push(this[i])
    return res
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil:true},
    { nome: 'iPad Pro', preco: 4199, fragil:true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil:true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil:false}
]

const fragil = p => p.fragil
const caro = p => p.preco >= 500

let res = produtos.filter2(fragil).filter2(caro)
console.log(res)