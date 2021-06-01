// Create a function named uniqueFoods that accepts an array of foods as the first argument
// The function should remove all duplicate foods from the array and return a new array with only unique foods
// If the function is invoked with an empty array, it should return 0

function uniqueFoods(foods) {
  
  if (foods.length == 0) {
    return 0
  }
  
  let result = []
  for (let i = 0; i < foods.length; i++){
    if (!result.includes(foods[i])) {
      result.push(foods[i])
    }
  }
  return result  
}

let myFoods = ['waffles', 'arancini', 'pierogi', 'pizza', 'waffles', 'burgers', 'goulash', 'arancini']

let output = uniqueFoods( myFoods )

console.log( output ) 
