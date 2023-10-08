const mesExtenso = [   "janeiro", "fevereiro", "março", "abril",
                "maio", "junho", "julho", "agosto",
                "setembro", "outubro", "novembro", "dezembro"]

const nomeDoMes = mes => {
    return mesExtenso[mes-1]
}

console.log(nomeDoMes(1))
console.log(nomeDoMes(4))
