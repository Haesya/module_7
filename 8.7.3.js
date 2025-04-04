let person1 = {
    name: 'Petr',
    age: 19
}

let person2 = {
    name: 'Nikolay',
    age: 20
}

let person3 = {
    name: 'Anna',
    age: 17
}

/* массив с человеками */
let arr = [person1, person2, person3];

/* массив с совершеннолетними человеками */
let arrayWithAge = arr.filter((item) => {
    return item.age >=18;
})

console.log(arrayWithAge);

/* массив с именами человеков */
let arrayWithNames = arr.map((item) => {
    return item.name;
})

console.log(arrayWithNames);