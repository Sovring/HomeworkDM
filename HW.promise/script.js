`use strict`;


console.log('start');                                 //виконується першим
const promise1 = new Promise((resolve, reject) => {
console.log(1)
resolve(2)
})                                                    //виконується console.log, так як він не є асинхронним
promise1.then(res => {
console.log(res)
})                                                    // проміс переходить в статус "очікування", передаємо "успіх"

console.log('end');                                   // виконується 
//після завершення попередньої команди, отримуємо результат промісу 2.
//start
//1
//end
//2

/*--------------*/


Promise.resolve(1)                                     //передаємо в проміс успіх зі значенням 1
        .then((x) => x + 1)                            // виконуємо функцію - отримуємо 2
        .then((x) => { throw new Error('My Error') })  // викликаємо помилку
        .catch(() => 1)                                // ловимо помилку, яка повертає значення 1
        .then((x) => x + 1)                            // виконуємо функцію - отримуємо 2
        .then((x) => console.log(x))                   // виводимо 2
         .catch(console.error)                          // у разі помилки - виводимо попередження в консоль 


 //2        


/*--------------*/

const promise = new Promise(res => res(2)); //оголошуємо проміс, передаючи значення успіху "2"
    promise.then(v => {
            console.log(v);
            return v * 2;
        })                                  //виводимо 2, повертаємо значення v(4)
        .then(v => {
            console.log(v);
            return v * 2;                   //виводимо 4, повертаємо значення v(8)
        })
        .finally(v => {
            console.log(v);                 //в finally не можемо передати змінну, нічого не повертає, в консоль виведено undefined
            return v * 2;
        })
        .then(v => {
            console.log(v);                 //виводимо v(8);
        });
// 2
// 4
// undefined
// 8        