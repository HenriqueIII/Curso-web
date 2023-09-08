/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/


class Resultados{
    #resultado; #records; #worst; #best

    constructor(resultadosStr){
        this.#resultado = resultadosStr.split(" ")
        this.#records = 0; this.#worst = 0; this.#best = this.#resultado[0]
        let arr = this.#resultado
        for (let i = 1; i < arr.length; ++i) {
            this.isNewRecord(arr[i])
            this.isWorstRecord(arr[i], i)
        }
    }

    isNewRecord(valor) {
        if (Number(valor) > Number(this.#best)){
            ++this.#records
            this.#best = valor
        }
    }

    isWorstRecord(valor, index) {
        if (valor < this.#resultado[this.#worst]) {
            this.#worst = index
        }
    }

    print() {
        return [this.#records, this.#worst+1]
    }
}

let lista1 = new Resultados("10 20 20 8 25 3 0 30 1")
console.log(lista1.print())