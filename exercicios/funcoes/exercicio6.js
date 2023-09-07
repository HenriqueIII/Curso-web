/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

class Juros {
    #ci;#tan;#dt;
    constructor(capital, taxa, tempo){
        this.#ci = capital; this.#tan = taxa; this.#dt = tempo;
    }
    
    simples(){
        return (this.#ci*this.#tan)+this.#ci
    }
    composto(){
        let soma = this.#ci, tjM = this.#tan / 12
        for (let i = this.#dt; i > 0; --i)
            soma += soma * tjM;
        return soma.toFixed(2)
    }
}
calc1 = new Juros(1000, 0.02, 24)
console.log (calc1.simples())
console.log (calc1.composto())