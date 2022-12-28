// for(let i = 1 ; i <= 9 ; i++){
//     console.log(`3 * ${i} = ${3*i}`);
// }


// function gugudan(){
//     for(let i = 1 ; i<=9 ; i++){
//         console.log(`3 * ${i} = ${3*i}`);
//     }
// }

// gugudan();


// let fn = function (){
//     console.log('hello!');
// };

// fn();


// const gugudan = () =>{
//     console.log('Hello!');
// };

// gugudan();


// const gugudan = (dan) => {
//     for(let i = 1 ; i<=9 ; i++){
//         console.log(`${dan} * ${i} = ${dan*i}`);
//     }
// };

// gugudan(10);


// const init = function(){
//     console.log('initialized');
//   };
  
//   init();

//   (function(){
//     console.log('initialized');
//   })();



/** 셀프체크 1번 */
// const PI = 3.14;

// const cal = function(r){
//     return r*r*PI;
// };

// console.log(`${cal(10)}`);


/** 셀프체크 2번 */

// let arr = [1, 5, 3, 6, 8, 9];

// const mx = (array) => {
//     let i = 0;
//     let result = 0;
//     while(i <= array.length){
//         if(array[i] > result){
//             result = array[i];
//         }
//         i++;
//     }

//     console.log(`max number is ${result} `);
// };

// mx(arr);


/** 셀프체크 3번 */

const calBmi = (cm, kg) => {
    let myBmi = kg / (cm*0.01)**2;

    if(myBmi >= 26){
        return '비만';
    }else if(myBmi >= 24 && myBmi < 26){
        return '과체중';
    }else if(myBmi >= 18.5 && myBmi < 24){
        return '정상';
    }else if(myBmi < 18.5){
        return '저체중';
    }else{
        return '';
    }
};

console.log(`${calBmi(176, 100)}`);