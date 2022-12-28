/*
let dan = 3;
let gugu = 8;
let string = `${dan} 곱하기 ${gugu}은 ${dan * gugu}입니다.`;

console.log(string);
*/

// let num1 = 10;
// let num2 = 0.1;
// console.log(num1);
// console.log(num2);

// let sum = 0.1 + 0.2;

// console.log(sum);


// let score = [10, 20, 30, 40];

// console.log(score[2]);

// let num = 5;

// if(num%2 === 0){
//     console.log("짝수");
// }else{
//     console.log("홀수");
// }

// let sum = 0;

// for(let i = 1; i<=100 ; i++){
//     sum += i;
// }

// console.log('sum : ' + sum);


// let count = 0;

// for(let i = 1 ; i <=999 ; i++){
//     if(i%2 === 0){
//         count++;
//     }
// }

// console.log('count : ' + count);


// for(let i=1 ; i<=9 ; i++){
//     for(let j=1 ; j<=9 ; j++){
//         console.log(i + ' * ' + j + ' = ' + i*j);
//     }
// }

let a = {};

for(let i= 100 ; i<= 999 ; i++){
 
    a = String(i);
    
    sum = Number(a[0])*Number(a[0])*Number(a[0]) + Number(a[1])*Number(a[1])*Number(a[1]) + Number(a[2])*Number(a[2])*Number(a[2])
    if(i === sum){
        console.log(i);
    }
}