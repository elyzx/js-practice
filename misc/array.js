const favourites = ['javascript', 'html', 'css'];

// remove first element
favourites.shift()
console.log(favourites); // => [ 'html', 'css' ]

// remove last element
favourites.pop()
console.log(favourites); // => [ 'html' ]

// add 'react' on the first place
favourites.unshift('react')
console.log(favourites); // => [ 'react', 'html' ]

// add 'node' to the last place
favourites.push('node')
console.log(favourites); // => [ 'react', 'html', 'node' ]

// remove element in the position 2 and add 'express'
favourites.splice(1, 1, 'express')
console.log(favourites); // => [ 'react', 'express', 'node' ]

// remove elements in the positions 2 and 3 and add 'mongodb'
favourites.splice(1, 2, 'mongodb')
console.log(favourites); // => [ 'react', 'mongodb' ]
