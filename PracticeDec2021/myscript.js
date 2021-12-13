'use strict'

// function batches(recipe, available) {
//     Math.floor(
//         Math.min(...Object.keys(recipe).map(k => available[k] / recipe[k] || 0))
//     ) 
// }

// const me = batches(
//   { milk: 100, flour: 4, sugar: 10, butter: 5 },
//   { milk: 1288, flour: 9, sugar: 95 }
// );

// console.log(me)


// const myBatch = { milk: 100, flour: 4, sugar: 10, butter: 5 };
// const myArray = Object.keys(myBatch)
// console.log(myArray)

// Date.prototype.nextDay = function () {
//     let currentDate = this.getDate()
//     return new Date(this.setDate(currentDate + 1))
// }

// let date = new Date();
// console.log(date)
// console.log(date.nextDay())


// let david = {
//     name: 'David Nano',
//     total: 9500,
//     deductFee: function (fee) {
//         this.total = this.total - fee;
//         return this.name + ' remaining balance is ' + '$'+this.total
//     }
// }


// const davidFee = david.deductFee(50)
// console.log(davidFee)

// let joseph = { name: 'joseph nathan', total: 99000 };
// let josephFee = david.deductFee.bind(joseph, 250)

// console.log(josephFee())


// function getMax(arr) {
//     return Math.max.apply(null, arr)
// }
