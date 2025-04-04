function printInfo (name, age){
    console.log('Name: ', `${this.name}`, 'Age: ', `${this.age}`);
}

let person = {
    name: 'Petr',
    age: 18
}

printInfo.call(person);