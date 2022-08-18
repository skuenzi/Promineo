// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
const ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log( ages)

// a. Programmatically subtract the value of the first element in the array from the value in the last element of the array
let ageRange = () => ages[ages.length-1] - ages[0]
console.log(ageRange())

// b. Add a new age to your array and repeat the step above to ensure it is dynamic
ages.push(45)
console.log(ageRange())

// c. Use a loop to iterate through the array and calculate the average age.
const getAverage = () => {
    let ageTotal = 0
    for (let i = 0; i < ages.length; i ++) {
        ageTotal += ages[i]
    }
    return ageTotal/ages.length
}

console.log(getAverage())

// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

// a. Use a loop to iterate through the array and calculate the average number of letters per name.

const averageNumLetters = () => {
    let totalLetters = 0
    for (let i = 0; i < names.length; i++) {
        totalLetters += names[i].length
    }
    return totalLetters/names.length
}

console.log(averageNumLetters())

// b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces

const namesList = () => {
    let list = ''
    for (let i = 0; i < names.length; i++) {
        list += ' ' + names[i]
    }
    return list
}

console.log(namesList())

// 3. How do you access the last element of any array? 

console.log(names[names.length-1])

// 4. How do you access the first element of any array?

console.log(names[0])

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let namesLengths = []

for (let i = 0; i < names.length; i++) {
    namesLengths.push(names[i].length)
}

console.log(namesLengths)

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

let totalNamesLength = 0

for (let i = 0; i < namesLengths.length; i++) {
    totalNamesLength += namesLengths[i]
}

console.log(totalNamesLength)

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times

const words = (words, n) => {
    let result = ''
    for (let i = 0; i < n; i++) {
        result += words
    }
    return result
}

console.log(words('Hello', 3))

// 8.  Write a function that takes two parameters, firstName and lastName, and returns a full name

function fullName (firstName,lastName) {
    return firstName + ' ' + lastName
}

console.log(fullName('Sara', 'Kuenzi'))

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function greaterThan100 (arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    if (total > 100) {
        return true
    } else {
        return false
    }
}

console.log(greaterThan100([20, 20, 20, 20]))
console.log(greaterThan100([20, 20, 20, 20, 50]))

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function arrAverage (arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total/arr.length
}

console.log(arrAverage([20, 20, 20, 20]))

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function isGreater(arr1, arr2) {
    let arr1total = 0
    for (let i = 0; i < arr1.length; i++) {
        arr1total += arr1[i]
    }
    const arr1Average = arr1total/arr1.length

    let arr2total = 0
    for (let i = 0; i < arr2.length; i++) {
        arr2total += arr2[i]
    }
    const arr2Average = arr2total/arr2.length

    return arr1Average > arr2Average ? true : false
}

console.log(isGreater([20, 20, 20, 40], [20, 20, 20, 20]))

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50 ? true : false
 }

 console.log('Will buy drink?', willBuyDrink(true, 11))
 console.log('Will buy drink?', willBuyDrink(false, 11))
 console.log('Will buy drink?', willBuyDrink(true, 9))
 console.log('Will buy drink?', willBuyDrink(false, 9))

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// this function will check if I have finished all the openclass assignments this week

function finishedWeek3 (functions, arrays) {
    return functions && arrays ? `You're done for the week!` : `You've got more to do!`
}

console.log(finishedWeek3(true, true))
console.log(finishedWeek3(true, false))
console.log(finishedWeek3(false, false))

