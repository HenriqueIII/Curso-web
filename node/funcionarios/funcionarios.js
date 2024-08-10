const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'

const mulheres = f => f.genero === 'F'

const menorSalar = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(typeof(funcionarios))
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalar)
    console.log(func)
})