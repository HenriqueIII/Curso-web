/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

const bissexto = (ano) => {
    if(!(ano%4) && ano%100 || !(ano % 400)){
        console.log(`O ano de ${ano} é bisexto`)
        return true
    }else
        console.log(`O ano de ${ano} não é bisexto`)
    return false
}

bissexto(2020)
bissexto(1900)
bissexto(2024)
bissexto(2022)