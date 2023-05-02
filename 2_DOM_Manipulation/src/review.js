// Functions
// Regular
helloWorld()
function helloWorld(){
    console.log("hello world")
}
helloWorld()
// Anonomous
// anonHello()
const anonHello = function(){
    console.log("Hi World")
}
anonHello()
// Arrow
const arrowHello = () => console.log("Hi Arrow")
arrowHello()

function helloName(name){
    console.log(`Hello ${name}!`)
}
helloName("David")
const helloArrowName = (name) => console.log(`Hello ${name}!`)

// Scope
// Global
const number = 1
function scopetest(){
    console.log(number)
    // Function
    const numberFunction = 2
    console.log(numberFunction)
    // Block
    if(numberFunction === 2){
        const numberBlock = 3
        console.log(numberBlock)
    }
}
scopetest()