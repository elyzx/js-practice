// SYNTAX FOR A map method
/*
let yourMappedArray = yourArray.map((yourElem, index) => {
   return //something
})
*/

//-------------------------------------------------------


//exercise 1: Capitalize each element of the array - the whole word:
const fruits = ['pineapple', 'orange', 'mango'];

let uppercaseFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
})

console.log(uppercaseFruits)  //Answer should be  ['PINEALLPLE', 'ORANGE', 'MANGO'];

//-------------------------------------------------------

//Try writing the map yourself now
//exercise 2: Capitalize the first letter of every city. 
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city']

let capitalizeCities = cities.map(function (city) {
  return city.charAt(0).toUpperCase() + city.slice(1);
})

console.log(capitalizeCities)

//Answer should be 
// [ 'Miami', 'Barcelona', 'Madrid', 'Amsterdam', 'Berlin', 'Sao paulo', 'Lisbon', 'Mexico city', 'Paris' ]

//-------------------------------------------------------

// Lets try and use functions now
// exercise  3: Return only the names of the restaurants 
// Note: Be careful here. Info is an object with a key called 'cities' which is an array
 
const Info = {
    cities : [
      {name: 'Mirazur', owner : 'Gustavo'},
      {name: 'Noma', owner : 'Jorge'},
      {name: 'Gaggan', owner : 'Alvaro'},
      {name: 'Geranium', owner : 'Gustavo'},
      {name: 'Arpège', owner : 'Luis'},    
   ]  
}

const myRestaurants = (arr) => {
   return names = arr.map((elem) => {
     return elem.name
   })
}

let restaurants = myRestaurants( Info.cities)
console.log(restaurants)/*Answer should be [ 'Mirazur', 'Noma', 'Gaggan', 'Geranium', 'Arpège']*/
