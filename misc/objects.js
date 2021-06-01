const ironhacker = {
    firstName: 'marko',
    age: 39,
    favoriteLanguage: 'JavaScript',
    isSatisfied: true,
    'works at': 'Google',
    isRemote: false
}

// 1: update favoriteLanguage to 'React' 
ironhacker.favoriteLanguage = 'React'
console.log(ironhacker.favoriteLanguage)

// 2: Update ironhacker's age to 29
ironhacker.age = 29
console.log(ironhacker.age)

// 3: Remove the 'isRemote' property
delete ironhacker.isRemote
console.log(ironhacker)

// 4: Add a new property: 'didGraduate' and set it to a valid boolean value
ironhacker.didGraduate = 'true'
console.log(ironhacker)

// 5: list all keys of the ironhacker object
console.log(Object.keys(ironhacker))

// 6: check if ironhacker has property 'works at'
console.log('works at' in ironhacker)
