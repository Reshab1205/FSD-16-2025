// const arr = [1,2,3,4,5]

// const arr1 = [1,2,"Reshab", true]
// const arr2 = ["Apple", "Ball", "Cat"]

// let a, rest;

// const arr3 = [45,76,21,44,89];

// [a, ...rest] = arr3

// console.log(a)
// console.log(rest)

// const obj = {lname:"Kumar", fname: "Reshab"}

// const newObj = {fname: obj.fname, lname: obj.lname}
// console.log(obj)
// console.log(newObj)

// const paymentMethods = ["UPI", "CC", "DC", "NB"]

// if(paymentMethods.includes("UPI", "CC", "DC", "NB")) {

// } else {

// }

// const data = arr3.includes(100)
// console.log(data)

// arr3.forEach((i) => {
//     console.log(i)
// })

// const data = arr3.sort((a,b) => {
//     return b-a
// })

// console.log(data)

// const data = [...arr, ...arr1, ...arr2]
// console.log(data)

// for(i=0; i<arr1.length; i++) {
//     console.log(arr1[i])
// }

// console.log(arr1.at(2))
// console.log(arr1.concat(arr))
// console.log(arr1.copyWithin(1,2,3))

// console.log(arr.pop())
// console.log(arr.push(6))
// console.log(arr)

// const data = arr.map((item) => {
//     return item * 2
// })
// console.log(data)

// arr.filter((item) => {
//     console.log( item * 2)
// })

// console.log(arr)

// const sum = arr.reduce((acc, item) => {
//     return acc + item
// }, 0)

// console.log(sum)

// console.log(arr.reverse())

// const data = new Set([1,2,3,4,5])
// const data1 = new Set([5,6,7,8,9])

// console.log(data1.difference(data))
// const c = data.add(data1)
// const d = data.entries()
// console.log(d)
// console.log(c)

// console.log(parseInt(Math.random() * 900000))

// function randomOTP() {
//   let str = "QWERTYUIOPLKJHGFDSAZXCVBNM";
//   let str1 = str.charAt(Math.random() * str.length);
//   let str2 = str.charAt(Math.random() * str.length);
//   let digit = parseInt(Math.random() * 9000);
//   return str1 + str2 + digit;
// }

// console.log(randomOTP());


let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
let mobileRegex =  /^[6-9]\d{9}$/
let num = 9876543210
let pass = 'eshab@1234'
// console.log(mobileRegex.test(num))
console.log(passwordRegex.test(pass))
