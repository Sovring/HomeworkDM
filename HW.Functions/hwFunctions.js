`use strict`;


// 1. Задача про обчислення різниці часу

function durationBetweenDates(FirstDate = '1 Jan 2000', SecondDate = '1 Jan 2000', Dimension = 'seconds') {

    let FirstDate1 = new Date(FirstDate);
    let SecondDate1 = new Date(SecondDate);
    let result = 0;
    result = Math.abs(FirstDate1 - SecondDate1);

    switch(Dimension) {
        case 'days': 
        result = result/60000/60/24;
        return result + ' days';
        break;
               
        case 'hours': 
        result = result/60000/60;
        return result + ' hours';
        break;

        case 'minutes': 
        result = result/60000;
        return result + ' minutes';
        break;

        case 'seconds': 
        result = result/1000;
        return result + ' seconds';
        break;   
    }
}

durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds');
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days');

//2. Задача про перетворення об'єктy

const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};

function optimizer(data) {
 OptimizedObject = Object.fromEntries(Object.entries(priceData).map(([key, value]) => [key.toLowerCase(), parseFloat(value).toFixed(2)]));
 return OptimizedObject;
};

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData);

// 3.1 Функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.
console.log(recursiveOddSumTo(1));
console.log(recursiveOddSumTo(15));


function recursiveOddSumTo(number) {
    if (number === 1) {          //умова виходу з рекурсії
        return 1;
    } else if (number % 2 > 0) {     // перевірка на парність
       return number += recursiveOddSumTo(number - 1);
    } else return recursiveOddSumTo(number - 1);
}

// 3.2 Функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа

console.log(iterativeOddSumTo(1));
console.log(iterativeOddSumTo(10)); 

function iterativeOddSumTo(number) {
    let sum = 0;
    for(let i = 1; i <= number; i++) {
        if (i % 2 >= 1) {
           sum += i; 
       } 
    }
    return sum;
}