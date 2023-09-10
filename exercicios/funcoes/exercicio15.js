/*15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

const stand = (carro) => {
    string = [  "Compra efectuada com sucesso.",
                "Tem a certeza que não prefere este modelo?", 
                "Não trabalhamos com este tipo de automóvel aqui."]
    switch(carro.toLowerCase()){
        case 'hatch':
            return string[0]
        case 'sedan': case 'ciclomotor': case 'carrinha':
            return string [1]
        default:
            return string[2]
    }
}

console.log(stand('hatch'))
console.log(stand('sedan'))
console.log(stand('ciclomotor'))
console.log(stand('carrinha'))
console.log(stand('descapotavel'))