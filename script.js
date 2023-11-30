/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
let todoItems = [];
let toDoIndex = 0;
// let appContainer = document.getElementById(appID);
const tdForm = document.querySelector('form');
const tdInput = document.getElementById('tdInputID');
//
// Functions
function handleFormInput(event) {
  event.preventDefault(); // Prevent default form submission

  addToDoItem(document.getElementById('tdInputID').value);
}
// function inititialise() {
//   // If anything is wrong with the app container then end
//   if (!appContainer) {
//     console.error("Error: Could not find app contianer");
//     return;
//   }

  // Create an h1 and add it to our app
  // const h1 = document.createElement("h1");
  // // h1.innerText = headingText;
  // appContainer.appendChild(h1);

  // Init complete
  // console.log("App successfully initialised");
//
// Inits & Event Listeners
//
// inititialise();
  function addToDoItem(text) {
    toDoIndex++
    const newToDoItem = {
      id: toDoIndex,
      text: text,
      completed: false,
    };
  
    todoItems.push(newToDoItem);
    console.log(todoItems)
  }
 
  tdForm.addEventListener('submit', handleFormInput);
