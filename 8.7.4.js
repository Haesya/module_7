let person = {
    firstName: 'John',
    lastName: 'Smith'
}

function setFullName (fullName){
    this.fullName = fullName;
}

let setPersonFullName = setFullName.bind(person);
setPersonFullName('Джохн Смитх');

console.log(person);