//-------------------------------------------
//    HANDLING MULTIPLE PROMISES TOGETHER 
//-------------------------------------------


//-------------------------------------------
//            CREATING PROMISES
//-------------------------------------------

// Our dummy instagram flow

function logIn(){
  return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: 'John', lastName:'Doe', age: 21})
           //reject('Failed to logIn')
        }, 2000)
  })
}

function getImages(){
  return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(['image1.png', 'image2.png', 'image3.png'])
           //reject('Failed to get images')
        }, 1000)
  })
}

function getComments(){
  return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(['Ironbeers was fake!', 'Labs are 30mins!', 'Hel·lena gives free pizzas and beer!'])
           //reject('Failed to get interesting labs')
        }, 3000)
  })
}

//-------------------------------------------
//------CONSUMING THOSE PROMISES ------------
//-------------------------------------------

//-------------------------------------------
//       1. Consuming promises 1 by 1 
//-------------------------------------------

logIn()
    .then((response) => {
        console.log(response)
        return getImages()
    })
    .then((imageResponse) => {
        console.log(imageResponse)
        return getComments()
    })
    .then((commentsResponse) => {
        console.log(commentsResponse)
    })
    .catch (() => {
        console.log(err)
    })


//-------------------------------------------
//      2. Consuming promises all together 
//-------------------------------------------

Promise.all( [ getImages(), getComments() ] )
.then (( [images, comments] ) => {
      console.log(images)
      console.log(comments)
})
.catch((error) => {
      console.log(error)
})
