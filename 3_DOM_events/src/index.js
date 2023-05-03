// Lets start by reviewing object manipulation
// Objects are a collection of data in a key value pair format
const obj = {}
const userInfo = {
  firstName: "Avi",
  lastName: "Flombaum",
  companyName: "Flatbook Labs",
  jobTitle: "Developer Apprentice",
  friend1firstName: "Nancy",
  friend1lastName: "Burgess",
  friend1companyName: "Flatbook Labs",
  friend1jobTitle: "Developer Apprentice",
  friend2firstName: "Corinna",
  friend2lastName: "Jackson",
  friend2companyName: "Flatbook Labs",
  friend2jobTitle: "Senior Developer",
  project1title: "Flatbook",
  project1description:
    "The premier Flatiron School-based social network in the world.",
  project2title: "Scuber",
  project2description:
    "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
};

// We can use . or brackets in order to get different keys from the data
console.log(userInfo["firstName"])
console.log(userInfo.firstName)
for(let j = 1, j >=2, j++){
  console.log(userInfo[`friend${j}firstName`])
}

//// We can iterate through this using a for loop!

// We can nest within the object as we've seen before!

// Now let us start grabbing specific data from that

// DOM Events


// Event Listeners
//* Add a eventListener to an element and log the event object

// A common event listener you will see, why is that? What does it do?
// document.addEventListener('DOMContentLoaded', () => {})

// Renders Header
function renderHeader(){
    document.querySelector('h1').textContent = bookStore.name;
}
// Renders Footer
function renderFooter(){
    const footerDivs = document.querySelectorAll('footer div');
    footerDivs[0].textContent = bookStore.name;
    footerDivs[1].textContent = bookStore.address;
    footerDivs[2].textContent = bookStore.hours;
}

// Let us create a function that rerenders each of the books

// Add a button element to this function
// Now we can add an event listener to remove it!


// Now how would we handle the form we have?

// Lets add an event listener! Make it a submit type and pass into it a function

// Now we can create a function to handle this form! We need to now use
// e.preventDefault()
// use e.target to get specific items out of the event
// now we can create a new book object!