//--------Objects-----------------------------

// Given the object 'data', use the object destructuring to be able 
// to console.log the student first and last name, favorite football club, 
// as well as the city and the country this student is coming from.
// You can console.log any way you want. 

const data = {
  name: {
    firstName: 'ana',
    lastName: 'marino',
  },
  isStudent: true,
  favoriteFootballTeam: 'fc barcelona',
  hometown: {
    city: 'buenos aires',
    country: 'argentina',
  },
};

const { name: {firstName, lastName}, favoriteFootballTeam: myTeam, hometown: {city, country} } = data
// const {firstName, lastName} = data.name
// const {favoriteFootballTeam: myTeam} = data
// const {hometown: {city, country}} = data

console.log(firstName, lastName, myTeam, city, country)
// console.log(firstName)
// console.log(lastName)
// console.log(myTeam)
// console.log(city)
// console.log(country)

//--------Arrays-----------------------------

// 1: What would be expected outputs and why?

// a: 
// const [a, b] = [1];
// console.log(a * b); // <== NaN 

// b:
// const [a, b = 1] = [2];
// console.log(a * b); // <== 2

// b:
// let [a, b = 2, c, d = 1] = [3, 4];
// console.log(a, b, c, d); // ==> 3, 4, undefined, 1

// ************************************************************************************************

// 2: Given the object, use function parameter destructuring to get the following output:

const greenSmoothie = {
  leaf: 'spinach',
  veggie: 'bok choy',
  seed: 'ground flex seeds',
  nut: 'peanut',
  liquid: 'almond milk'
};

// destructure the object in the parameters itself
function getIngredients( {leaf, veggie, seed, nut, liquid} ) {
  return `To make the green smoothie, you should add: ${leaf}, ${veggie}, ${seed}, ${nut} and ${liquid}.`;
}

// ensure you pass the object as a parameter while calling the function below
console.log(getIngredients(greenSmoothie));
// => expected Output: // To make a green smoothie, you should add: spinach, bok choy, ground flex seeds, peanut and almond milk.
