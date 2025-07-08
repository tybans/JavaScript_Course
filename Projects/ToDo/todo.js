let todoList = [
  { item: "Buy Milk", dueDate: "07/07/2025" },
  { item: "Complete Homework", dueDate: "07/07/2025" },
  { item: "Call Mom", dueDate: "07/07/2025" },
]; // Initialize the todo list with some items
displayItems(); // when page loads, display the items in the todo list

function addTodo() {
  let inputElement = document.querySelector("#todo-input"); // Select the input element by its ID
  let dateElement = document.querySelector("#todo-date"); // Select the date input element by its ID
  let todoItem = inputElement.value; // Get the value from the input field
  let dateItem = dateElement.value; // Get the value from the date input field
  todoList.push({item: todoItem, dueDate: dateItem} );
  inputElement.value = ""; // Clear the input field after adding the todo
  dateElement.value = ""; // Clear the date input field after adding the todo
  displayItems(); // Call the function to display the updated todo list
}

// function displayItems(){
//   let displayElement = document.querySelector('#todo-items') // Select the paragraph element by its ID
//   displayElement.innerText = ''; // Clear the paragraph before displaying items
//   for(let i = 0; i < todoList.length; i++){
//     // Loop through the todoList array and display each item

//     // displayElement.innerText = displayElement.innerText + todoList[i] + \n
//     displayElement.innerText += `${todoList[i]} \n`; // Append each todo item as a paragraph
//   }
// }

function displayItems() {
  let displayElement = document.querySelector(".todo-container");
  let newHtml = ""; // Initialize an empty string to hold the HTML content

  for (let i = 0; i < todoList.length; i++) {
    //it will iterate through the todoList array to display each item

    // let item = todoList[i].item; // Get the item text
    // let dueDate = todoList[i].dueDate; // Get the due date text
    let { item, dueDate } = todoList[i]; // Destructure to get item and dueDate

    // newHtml = newHtml + `<p>${todoList[i]}</p>`; // Append each todo item as a paragraph
    newHtml += `<span>${item}</span> 
    <span>${dueDate}</span> 
    <button class="delete-btn" onClick="todoList.splice(${i}, 1); displayItems()">Delete</button>
    `;
  }
  displayElement.innerHTML = newHtml; // Set the innerHTML of the display element to the new HTML content
}
