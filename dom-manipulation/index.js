console.log('INDEX.JS connected');

// ****************************** part 1 ******************************

// this function is invoked once the dom is ready. 
// check the load eventlistener at the bottom 
function mySubmitEventListener(){
     let myForm  = document.querySelector('#new-task-form')
      myForm.addEventListener('submit', e => {
          e.preventDefault();

          let task = document.querySelector('#task-input').value
          let owner = document.querySelector('#owner-input').value

          let li = document.createElement('li')
          li.innerText = `Task is ${task} and the owner is ${owner}`

          let ul = document.querySelector('#tasks-list')
          ul.appendChild(li)

          document.getElementById("new-task-form").reset()
      });
}

// ****************************** part 2 ******************************
// 0: create a function first. make sure you invoke the function in the load event listener below
// 1: Then get the DOM element that represents 'Update gif' button
// 2: add to click handler to it
// 3: inside the click listener, get the DOM element that represents 'iframe tag'
// 4. change the attribute source to point to 'https://giphy.com/embed/1MTLxzwvOnvmE' after clicking on the 'Update gif' button
// 5: bonus: make it so every time you  click on the 'Update gif' button, a different gif (one of these two) appears

function updateGif(){
  let btn = document.querySelector('#update-button')
  btn.addEventListener('click', () =>{
    let iframe = document.querySelector('.three-minions')
      if (iframe.src == 'https://giphy.com/embed/MOWPkhRAUbR7i') {
        iframe.setAttribute('src', 'https://giphy.com/embed/1MTLxzwvOnvmE')
      }
      else {
        iframe.setAttribute('src', 'https://giphy.com/embed/MOWPkhRAUbR7i')
      }
  })
}

// EVERYTHING STARTS FROM HERE
window.addEventListener('load', () => {
   mySubmitEventListener()
   updateGif()
});
