`use strict`;


/* 1. Напишіть функцію `addThemAll` яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбутованого об'єкту Math).
Використайте оператор розширення: 
    
console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20
    
function addThemAll (...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}
*/

/* 2. **Задача на використання замикання. Напишіть функцію яка працює таким чином: `multiply(a)(b)` 
    
    console.log(multiply(5)(5));    // 25
    console.log(multiply(2)(-2));   // -4
    console.log(multiply(4)(3)) ;   // 12
    
   function multiply(x) {
    return function(y) {
        return x * y;
    }
}

*/

/* 3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів. Функція буде приймати два аргумента:
    - властивість за якою треба посортувати
    - опцію напрямку сортування, зростання чи спадання 
    
    const movies = [
    {
    movieName: 'The Thing',
    releaseYear: 1982,
    directedBy: 'Carpenter',
    runningTimeInMinutes: 109,
    },
    {
    movieName: 'Aliens',
    releaseYear: 1986,
    directedBy: 'Cameron',
    runningTimeInMinutes: 137,
    },
    {
    movieName: 'Men in Black',
    releaseYear: 1997,
    directedBy: 'Sonnenfeld',
    runningTimeInMinutes: 98,
    },
    {
    movieName: 'Predator',
    releaseYear: 1987,
    directedBy: 'McTiernan',
    runningTimeInMinutes: 107,
    },
    ];


    function byProperty(property, direction) {
        result = movies.sort(function(a,b) {
            if (a[property] > b[property]) {
                if (direction == '<') {
                    return -1}
            } else if (a[property] < b[property]) {
                if (direction == '>') {
                    return -1}
            }
        });
    }  
        
    
console.log(movies.sort(byProperty('movieName', '>')));
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); 
console.log(movies.sort(byProperty('movieName', '>')));
*/

// 4. Напишіть функцію detonatorTimer(delay), яка виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'. Напишіть її двома варіантами 

/*
detonatorTimer(3);

function detonatorTimer(TimeToDetonate) {
  let currentTime = TimeToDetonate;
  let timerId = setInterval(function() {
    if (currentTime == 0) {
      clearInterval(timerId);
      console.log("BOOM!");
    } else console.log(currentTime);
    currentTime--;
  }, 1000);
} 


detonatorTimer(3);

function detonatorTimer(TimeToDetonate) {
  let currentTime = TimeToDetonate;
  setTimeout(function timer() {
    if (currentTime == 0) {
      console.log("BOOM!");
    } else if (currentTime > 0) {
        console.log(currentTime);
        setTimeout(timer, 1000);
    };
    currentTime--;
  }, 1000);
} 
*/

// 5.6. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять

/*
let android = {
type: 'humanoid',
name: 'Connor',
manufacturerCity: 'Detroit',
Station: 'Detroit Police Department Central Station',
skin: 'male',
model: 'RK800',
profession: 'assistant detective',
workId: '1464',
mainRole: 'investigate and hunt down deviants',

introduce() {
console.log(`My name is ${this.name}, model ${this.model}, i was created to help people`);
},
role() {
console.log(`My main role is ${this.mainRole}`);
},
placeOfWork(){
console.log(`I work at ${this.Station}, police badge number - ${this.workId}`);
}
}

let securedIntroduce = android.introduce.bind(android);
let securedRole = android.role.bind(android);
let securedPlaceOfWork = android.placeOfWork.bind(android);

setTimeout(securedIntroduce, 1000);
setTimeout(securedRole, 2000);
setTimeout(securedPlaceOfWork, 3000);

*/


// 7. Напишіть функцію-декоратор яка вопвільнює виконання довільної функції на вказану кількість секунд. 


function detonatorTimer(TimeToDetonate) {
  let currentTime = TimeToDetonate;
  let timerId = setInterval(function() {
    if (currentTime == 0) {
      clearInterval(timerId);
      console.log("BOOM!");
    } else console.log(currentTime);
    currentTime--;
  }, 1000);
}

function slower(func, seconds) {
    let time = seconds * 1000;
    console.log('Chill out, you will get you result in', seconds, 'seconds');
    return function(...args) {
        setTimeout(function() {
            func.apply(this, args);
        }, time);
    };
}

let slowedSomeFunction = slower(detonatorTimer, 3); 
slowedSomeFunction(3); 