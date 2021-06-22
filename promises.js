// QUESTION: 
// Below is a function eligibleToDrink() that takes a number as an argument and returns a promise 
// that tests if the passed value is less than or greater than the value 18. 
// If greater then 18, it resolves with 'Being ___ years old, you are eligible to  drink'.  
// If less then 18, it rejects with '___ years is underage. Here is a fresh squeezed orange juice for you!'

// DO NOT CHANGE ANYTHING IN THIS FUNCTION BELOW
function eligibleToDrink (age) {
  // promise is created below
  let myPromise = new Promise((resolve, reject) => {
        // We are just faking this to be a real API request that takes 2 seconds to finish
        // you only need to read about what happens within the setTimeout
        setTimeout(() => {
            if (age > 18) {
              resolve(`Being ${age} years old, you are eligible to  drink`)
            }
            else {
              reject(`${age} years is underage. Here is a fresh squeezed orange juice for you!`)
            }
        }, 2000)
  })

  // we return the promise when the function `eligibleToDrink` is invoked
  return myPromise
}


// YOUR CODE BELOW: 
// ----------------------------------------------------------------------
//Exercise 1: Use 'then' and 'catch' methods to handle the promise

// Part1
eligibleToDrink(15)
    .then((success) => {
        console.log(success)
})
    .catch((error) => {
        console.log(error)
})

//Output => 15 years is underage. Here is a fresh squeezed orange juice for you!
  
// -----------

// Part2
eligibleToDrink(18)
    .then((success) => {
        console.log(success)
})
    .catch((error) => {
        console.log(error)
})

// Output => Being 18 years old, you are eligible to  drink. 
