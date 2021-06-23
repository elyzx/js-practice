/*
1. CREATE A BRAND NEW EXPRESS APP FROM SCRATCH OR Continue using the same app we are doing in class
2. Create a package.json file using `npm init --y` if you're creating a brand new express app else ignore this step
3. Install express using 'npm install express'
4. Create a app.js file, create a server with express and add these routes (or continue using the index.js file as we did in class)
ONLY USE THE .send() method for this exercise, no need of using the .sendFile() method 
----------------------------------------------
1) Create a route such that
Visiting '/' should print "Hi there, welcome to my assignment!"
*/

app.get('/' , ( request, response ) => {
    response.send('Hi there, welcome to my assignment!')
})

/* 
----------------------------------------------
2) Create a route such that 
Visiting '/speak/pig' should print "The pig says 'Oink!'"
Visiting '/speak/cow' should print "The cow says 'Moo'"
Visiting '/speak/dog' should print "The dog says 'Woof Woof!'"
// Note: Don't create 3 different routes. Try and use just one dynamic route
*/ 

app.get('/speak/:animal', (request, response) => {
  const {animal} = request.params
  switch (animal) {
    case 'pig':
      response.send('The pig says Oink!')
      break;
    case 'cow':
      response.send('The cow says Moo')
      break;
    case 'dog':
      response.send('The dog says Woof Woof!')
      break;
  }
});

/*
----------------------------------------------
3) Create a route such that
Visiting '/greet/hello/3' should print "hello hello hello"
Visiting '/greet/hello/5' should print "hello hello hello hello hello"
Visiting '/greet/blah/2' should print "blah blah"
Visiting '/greet/blah/3' should print "blah blah blah"
// Note: Don't create 4 different routes. Try and use just 2 dynamic routes
*/

app.get('/greet/:greeting/:number', (request, response) => {
  const {greeting, number} = request.params
  // response.send ((greeting + ' ').repeat(number)) 
  if (greeting === 'hello') {
      switch (number) {
        case '3':
          response.send('hello hello hello')
          break;
        case '5':
          response.send('hello hello hello hello hello')
          break;
      }
  } else if (greeting === 'blah') {
      switch (number) {
        case '2':
          response.send('blah blah')
          break;
        case '3':
          response.send('blah blah blah')
          break;
      }
  }
});

/*
----------------------------------------------
4) If the user visits any other route that does not exist, print:
"Sorry, page not found...Blame our developer"
You might need to search this online :) 
*/

app.get('*', (request, response) => {
  response.send('Sorry, page not found', 404);
});
