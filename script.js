// Select DOM elements
const inputElement = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Load a "ding" sound
const dingSound = new Audio('ding.wav'); 

// Add a new to-do item
addButton.addEventListener('click', () => {
  const todoText = inputElement.value.trim();
  if (todoText === '') return; // Exit if input is empty

  // Create new to-do item
  const listItem = document.createElement('li');
  listItem.classList.add('todo-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const textNode = document.createTextNode(todoText);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.textContent = 'Delete';

  // Append elements
  listItem.appendChild(checkbox);
  listItem.appendChild(textNode);
  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  // Clear input
  inputElement.value = '';

  // Add event listeners
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      dingSound.play(); // Play sound
      listItem.classList.add('completed');
      setTimeout(() => {
        todoList.appendChild(listItem); // Move to bottom
      }, 500); // Delay moving the item for effect
    } else {
      listItem.classList.remove('completed');
    }
  });

  deleteButton.addEventListener('click', () => {
    listItem.classList.add('deleting'); // Fade to red and disappear
    setTimeout(() => {
      todoList.removeChild(listItem);
    }, 500); // Remove item after the animation
  });
});
