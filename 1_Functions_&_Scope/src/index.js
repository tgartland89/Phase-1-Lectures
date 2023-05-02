//Data 
const inventory = [
  {
      id:1,
      title: 'Eloquent JavaScript: A Modern Introduction to Programming',
      author: 'Marjin Haverbeke',
      price: 10.00,
      reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
      inventory: 10,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      
  },
  {
      id:2,
      title: 'JavaScript & JQuery: Interactive Front-End Web Development',
      author: 'Jon Duckett',
      price: 45.75,
      reviews: [{userID: 15, content:'good way to learn JQuery'}],
      inventory: 2,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
  },
  {
      id:3,
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      price: 36.00,
      reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
      inventory: 8,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
      id:4,
      title: 'JavaScript: The Definitive Guide',
      author: 'David Flanagan',
      price: 25.50,
      reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
      inventory: 0,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
      
  },
  {
      id:5,
      title: 'You Don’t Know JS',
      author: 'Kyle Simpson',
      price: 6.00,
      reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
      inventory: 7,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
  }, 
  {
      id:6,
      title: 'Learn Enough JavaScript to Be Dangerous',
      author: 'Michael Hartl',
      price: 24.00,
      reviews: [{userID: 50, content:'pretty good'}],
      inventory: 5,
      imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'

  },
  {
      id:7,
      title: 'Cracking the Coding Interview',
      author: 'Gayle Laakmann McDowell',
      price: 49.95,
      reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID:20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
      inventory: 20,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

  }
]

// Pre Work Questions?

// Function Declaration!
function helloWorld(){
  console.log("Hi there")
  console.log("Hello world")
}

// helloWorld()
// Now lets call the function

// Lets make a function with a parameter
function helloName(name){
  return(name+"!!!")
}

const noah = helloName("Noah")
// console.log(noah)
helloName("John")

// console.log(add(1,6))

function add(num1,num2){
  return num1+num2
}
// console.log(add(1,10))
// Using the data above what sort of function can we create?
function combineAttribute(book){
  return book.title + " By: " + book.author
}
// for(let i=0; inventory.length > i ; i++){
//   console.log(combineAttribute(inventory[i]))
// }
// console.log("BREAK")
// inventory.forEach((book)=>console.log(combineAttribute(book)))
const authors = ["a","b"]
const titles = ["Title a", "Title b"]
// for(let i=0; 10 > i ; i = i+1){
//   console.log(i)
//   // console.log(authors[i] + titles[i])
// }

// Anonomous Functions? Another way to write functions!
const addTwo = function(num1,num2){
  return num1+num2
}
// console.log(addTwo(3,6))

// Whats the difference? It comes down to where it is called
// You can call regular functions BEFORE they are created
// You can call anonomous functions only after
// In some languages you can overwrite a regular function, because
// anonomous functions have no name you can't overwrite them

// console.log(function(){
//   return("Hello")
// }())
// const add = "add"

// Arrow Functions
// console.log((()=> 5)())
// console.log((() => {
//   console.log("In arrow")
//   return 5
// })())

const arrowFunc = (test) => test+"!!!!!"
// inventory.forEach(/*function*/)
// console.log(arrowFunc("This is a test"))
// Arrow functions vs regular functions vs anonomous functions????

// Lets refactor the regular function above to be an arrow function!
const arrowCombine = (book) => console.log(book.title + " By: " + book.author)

// Now you try it!

// forEach function
// function bookCombine(book){
//   console.log(book.title + " By: " + book.author)
// }
// inventory.forEach((book) => console.log(book.title + " By: " + book.author))

// Scoping
// Global Scope
const myName = "David"
// Function Scope
function combineLast(Lastname){
  const functionScope = "In a function"
  // console.log(functionScope)
  // consolelogHi()

  // Block Scope (If, else, for, while)
  for(let i = 0; i < 5; i++){ 
    consolelogHi()
    function consolelogHi(){
      consolelogBye()
    }
  }
  // console.log(blockscope)
  // console.log(i)
  function consolelogBye(){
    console.log("bye")
  }
  return myName + Lastname
}
function test(){
  console.log(functionScope)
}
// consolelogHi()
// const fullName = combineLast("Doan")
// console.log(fullName)
// test()

// Callback Functions, calling a function in a function
function callBack(newFunction){
  //helloWorld()()
  newFunction()
}

callBack(()=>console.log("We are in a callback"))
// Map, forEach
//For each will return nothing
inventory.forEach((book)=> {console.log(book.title)})
// console.log(each)

const map = inventory.map((book)=> {})
console.log(map)