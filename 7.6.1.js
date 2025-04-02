let word = prompt('Введите слово, которое нужно проверить');
console.log('Слово, которое проверяем: ', word);

let bigWord = word.toUpperCase();
console.log('Увеличили слово, чтоб не ломал голову регистр: ', bigWord);

bigWord = bigWord.replaceAll(/\s/g,'');
console.log('Убрали все пробелы: ', bigWord);

let palindrom = '';
for (let i = (bigWord.length); i--; i >= 0){
    palindrom += bigWord[i];
}

console.log('Перевернули слово, получили: ', palindrom);
console.log('Изначальное слово для проверки самих себя', bigWord);
if (palindrom === bigWord) {
    console.log('Слово', word, 'является палиндромом');
} else
    console.log('Слово', word, 'не является палиндромом');