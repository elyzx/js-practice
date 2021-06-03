// SYNTAX for a .forEach() method
/*
yourArray.forEach((yourElem, index) => {
   // do something
})
*/

//-------------------------------------------------------

// Use this array for all the exercises
let students = [
  {name: 'Rafa', color: 'Blue', candy: 12},
  {name: 'Elise', color: 'Pink', candy: 21},
  {name: 'Bodei', color: 'Yellow', candy: 31},
  {name: 'Jorge', color: 'Red', candy: 11}
]

//EXERCISE 1: print the name of each student

//Answer should be 
/*
Rafa
Elise
Bodei
Jorge
*/

students.forEach(function name(element) {
  console.log(element.name)
}) 

//-------------------------------------------------------

//EXERCISE 2: print the color of each student that has more than 20 candy's

//Answer should be
/*
Pink
Yellow
*/

students.forEach(function color(element) {
  if (element.candy > 20){
    console.log(element.color)
  }
}) 
