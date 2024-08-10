// Uma factory retorna um novo objecto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}