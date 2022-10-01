//6
const arr = [3, 4, 1, 2, 7];
arr.sort();
console.log(arr);

//5
const numb = [1, 2, 3, 4, 5];
numb.splice(1,0,'a','b');
numb.splice(6,0,'c');
numb.splice(8,0,'e');
console.log(numb);

//4
const number = [1,2,3,4,5];
number.splice(3,0,'a','b','c');
console.log(number);

//3
const numbers = [12, 15, 20, 25, 59, 79];
const initialValue = 0;
const total = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);
const averageResult = total/numbers.length;
console.log(averageResult);

//2
m = 1000;
num = 0;
while(m > 50){
    m = m / 2;
    num++;
}
console.log(num);

//1
let str ='123456';
let sum1 = 0;
let sum2 = 0;
for (i = 0; i < 3; i++){
    sum1 = sum1 + Number(str[i]);
}
for (i = 3; i < str.length; i++){
    sum2 = sum2 + Number(str[i]);
}
if (sum1 != sum2){
    console.log("No!");
}
else{
    console.log("Yes!");
}

