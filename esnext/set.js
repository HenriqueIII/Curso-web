// Não aceita repetição e nao é indexado

const equipas = new Set();
equipas.add('Benfica');
equipas.add('Sporting').add('Porto').add('Braga');
equipas.add('Vitoria');
equipas.add('Benfica');

console.log(equipas);

console.log(equipas.size);
console.log(equipas.has('Benfica'));
console.log(equipas.has('benfica'));
equipas.delete('Vitoria');
console.log(equipas.has('Vitoria'));

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'];
const nomesSet = new Set(nomes);

console.log(nomesSet)

