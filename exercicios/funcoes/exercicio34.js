/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

const toSet = (str) => {
    let set = []
    for (let i = 0; i < str.length; ++i) {
        set[str[i]] = str[i]
    }
    let result = new Array(set.length)
    for (item in set) {
        result.push(set[item])
    }
    result.sort()
    return result
}

const sameCharBothStr2 = (str1, str2) => {
    console.log(str1, str2)
    let set1 = toSet(str1)
    let set2 = toSet(str2)

    if (set1.lenght > set2.length)
        [set1, set2] = [set2, set1]

    for (let i = 0; i < set1.length; ++i){
        let encontrou = 0
        for (let j = 0; j < set2.length; ++j)
            if (set1[i] == set2[j])
                encontrou = 1
        if (!encontrou) {
            return false
        }
    }
    return true
}

const sameCharBothStr = (str1, str2) => {
    console.log(str1, str2)
    let map = {}
    for (let i = 0; i < str1.length; ++i){
        map = Object.assign(map, {[str1[i]]: 0})
    }

    for (let item of Object.keys(map)) {
        let i = 0
        for (let j = 0; j < str2.length; ++j) {
            if (str2[j].toLowerCase() == item.toLowerCase())
                map[item]++
        }
        i++
    }
    for (let item of Object.keys(map)) {
        if (!(map[item]))
            return false
    }
    return true
}


console.log(sameCharBothStr("abcdef", "feDcBa")?'Contem':'nao contem')
console.log(sameCharBothStr("abcdef", "asa")?'Contem':'nao contem')
console.log(sameCharBothStr("casaco", "caso")?'Contem':'nao contem')
console.log(sameCharBothStr("casaco", "casao")?'Contem':'nao contem')
console.log(sameCharBothStr2("casaco", "caso")?'Contem':'nao contem')
console.log(sameCharBothStr2("abcdef", "asa")?'Contem':'nao contem')
console.log(sameCharBothStr2("casaco", "casao")?'Contem':'nao contem')