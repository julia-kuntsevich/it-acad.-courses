//1. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
const arr = [1, 2, 3, 4, 5 ,6]

function RevertArr(arr){
    let temp = arr.reverse();
    arr = temp;
    return arr;
}
console.log(RevertArr(arr));

//2. найти максимальное значение числа в массиве ([3,67,15...])

const arr2 = [12, 453, 243, 58, 190, 5];
function MaxOfArr(arr2){
    let max = Math.max(...arr2);
    return max;
}
console.log(MaxOfArr(arr2));

//3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M

const initialNumber = 2;
const arrLength = 9;
const array3 = [];
createArray(array3, initialNumber, arrLength);
console.log(array3);

function numbersFibonacci(n) {
    return n <= 1 ? n : numbersFibonacci(n - 1) + numbersFibonacci(n - 2);
};

function createArray(array3, initialNumber, arrLength) {
    let nextNumberValue = numbersFibonacci(initialNumber);
    for (i = 0; i < arrLength; i++) {
        array3.push(nextNumberValue);
        nextNumberValue = numbersFibonacci(initialNumber + 1);
        initialNumber++;
    };
};


//4.  даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )

function Counter(num1, num2){
    num2 = num2.toString();
    num1 = num1.toString();
    let positions = 0;
    let values = 0;

    for( let i = 0; i < num1.length; i++ ){
        if(num1[i] === num2[i]){
            positions++;
        }
        if(num1.includes(num2[i])){
            values++;
        }
    }
    return (`${positions} positions, ${values} values`);
}
console.log(Counter(3215,8253));


//5 сортировка массива по возрастанию/убыванию

let numbers = [4, 2, 5, 1, 3, 8, 6, 7];

numbers.sort(function(a, b) {
    return a - b;
});
console.log("ASC" + " " + numbers);

numbers.sort(function(a, b) {
    return b - a;
});
console.log("DESC"+ " " + numbers);

//6 удалить из массива все повторяющиеся элементы

function Numbers(x){
    return [...new Set(x)];
}
;

console.log(Numbers([11,83,152,541,11,152,0,8,13,0]));
