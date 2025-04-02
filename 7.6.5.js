const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

let arrValuesFromObj = [];

/*все значения из объекта сохранили в массив*/
arrValuesFromObj = Object.values(obj);

/*маленький массив, в котором будет лежать массив из объекта*/
let littleArray = [];

/*позиция массива среди перенесенных из объекта элементов*/
let check = 0;

for (let i = 0; i < arrValuesFromObj.length; i++){
    if (Array.isArray(arrValuesFromObj[i])){
        console.log('Нашли массив внутри массива', arrValuesFromObj[i]);
        littleArray = arrValuesFromObj[i];

        /*запомнили позицию*/
        check = i;
    }
}

/*Удалили массив*/
arrValuesFromObj.splice(check, 1);

/*поэлементно перенесли все элементы из маленького массива в большой массив с определенной позиции*/
for (let i = 0; i < littleArray.length; i++) {
    arrValuesFromObj.splice(check, 0, littleArray[i]);
    check++;
}

/*вывели получившийся массив*/
console.log(arrValuesFromObj);

