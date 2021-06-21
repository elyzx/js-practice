// Sort students by best score and list best 3 as fistPlace, secondPlace, thirdPlace.
// Add everyone else in the array and call that `others`
// Expected output shown at the end
// you can console.log it or return it (both are fine)

const students = [
  {
    name: 'ana',
    score: 5.4
  },
  {
    name: 'ivan',
    score: 7.5
  },
  {
    name: 'milo',
    score: 4.3
  },
  {
    name: 'igor',
    score: 7.0
  },
  {
    name: 'george',
    score: 8.9
  },
  {
    name: 'jess',
    score: 10.0
  },
  {
    name: 'kevin',
    score: 8.8
  },
  {
    name: 'beth',
    score: 7.1
  }
];


function sortByScore(arr) {  
  let newArray = [...arr]
  
  newArray.sort( (a, b) => {
    if (a.score > b.score) { 
      return - 1 
    }
    if (a.score < b.score) { 
      return + 1 
    }
    else return 0 
  })
  
  const [ firstPlace, secondPlace, thirdPlace, ...others ] = newArray

  return {
    firstPlace, 
    secondPlace, 
    thirdPlace, 
    others
  }
}

console.log(sortByScore(students))

// Expected Output from the function => 
// {
//   firstPlace: { name: 'jess', score: 10 },
//   secondPlace: { name: 'george', score: 8.9 },
//   thirdPlace: { name: 'kevin', score: 8.8 },
//   others: [
//     { name: 'ivan', score: 7.5 },
//     { name: 'beth', score: 7.1 },
//     { name: 'igor', score: 7 },
//     { name: 'ana', score: 5.4 },
//     { name: 'milo', score: 4.3 }
//   ]
// }
