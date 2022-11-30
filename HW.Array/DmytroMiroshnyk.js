`use strict`;
//1. Задача на розворот числа:

const currentMaxValue = 123456789;
let reverseMaxValue;
reverseMaxValue = currentMaxValue.toString().split('').reverse().join(''); // розділяємо число на окремі цифри та перевертаємо
reverseMaxValue = Number.parseInt(reverseMaxValue); // перетворюємо string в number
console.log(reverseMaxValue); 
console.log(typeof reverseMaxValue); // 'number'


//2. **Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:**

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = userNames.sort().map((fullName) =>  fullName.split(" ").map((firstLetter)=>firstLetter[0]).join(".") + '.');
console.log(initials);



//3. 1. **Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:**

const resultsArray = [1, 2, [3, [4]]];
const initialValue = 1;
let productOfArray;
productOfArray = resultsArray.flat(Infinity).reduce((FirstValue, SecondValue) => FirstValue * SecondValue, initialValue);;
console.log(productOfArray); // 24


