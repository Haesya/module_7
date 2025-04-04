function calculate (a, b, operator){
    switch(operator){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Wrong operator";
    }
}

let array = [2, 3, "+"];
console.log(calculate.apply(null, array));