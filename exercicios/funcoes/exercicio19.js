/*19) O cardápio de uma lanchonete é o seguinte:
Código  Descrição do Produto    Preço
100     Cachorro Quente         R$ 3,00
200     Hambúrguer Simples      R$ 4,00
300     Cheeseburguer           R$ 5,50
400     Bauru                   R$ 7,50
500     Refrigerante            R$ 3,50
600     Suco                    R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

const preco = (cod, qt=1) => {
    let precos = [3, 4, 5.5, 7.5, 3.5, 2.8], 
    nome = ['cachoro quente', 'Hamburguer simples', 'Cheeseburguer', 'Bauru', 'Refrigerante', 'Suco']
    switch(cod) {
        case 100: case 200: case 300: case 400: case 500: case 600:
            console.log (`${qt} ${nome[(cod/100) - 1]} = ${(qt*precos[(cod/100) - 1]).toFixed(2)}€`)
            break
        default:
            console.log('codigo nao existe')
    }
}

for (let i = 100; i <= 700; i = i + 100){
    preco(i, 3)
}