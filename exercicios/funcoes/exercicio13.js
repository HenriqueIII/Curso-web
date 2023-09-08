/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

const isWeekend = (day) =>{
    dayStr = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
    switch(day){
        case 2: case 3: case 4: case 5: case 6:
            console.log(`${dayStr[day-1]}-Feira é dia util`)
            return false
        case 1: case 7:
            console.log(`${dayStr[day-1]} é fim de semana`)
            return true
        default:
            console.log('Dia invalido')
    }            
}

for (let i = 0; i <= 7; ++i) {
    isWeekend(i)
}