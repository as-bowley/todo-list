import { TodoListLong, TodoListShort, ShoppingList } from "./listClasses";
import { longListGet, longListSet, longListRemove, shortListSet, shortListGet, shortListRemove, shoppingListSet, shoppingListGet, shoppingListRemove } from './listArrays';

export function handleSubmitLong() {

  const longTitle = document.getElementById('longTitleForm').value;
  const longDescription = document.getElementById('longDescForm').value;
  const longPriority = document.getElementById('longPriorityForm').value;
  const longDate = document.getElementById('longDateForm').value;

  const newListItem = new TodoListLong(longTitle, longDescription, longPriority, longDate);
  longListSet(newListItem);
  displayLongList();
  resetFormLong();
}

function resetFormLong() {
  const longTitle = document.getElementById('longTitleForm').value = '';
  const longDescription = document.getElementById('longDescForm').value = '';
  const longPriority = document.getElementById('longPriorityForm').value = '';
  const longDate = document.getElementById('longDateForm').value = '';
}

export function displayLongList() {

  const displayDiv = document.getElementById('longdisplay');
  const list = longListGet();
  displayDiv.innerHTML = '';
  
  for (let i = 0; i < list.length; i++) {
    const longListDiv = document.createElement('div');
    longListDiv.classList.add('longListItem');

    const title = document.createElement('h4');
    title.innerText = `${list[i].listItem.title}`;
    const description = document.createElement('p');
    description.innerText = `${list[i].listItem.desc}`;
    const priority = document.createElement('div');
    priority.innerText = `${list[i].listItem.priority}`;
    const date = document.createElement('p');
    date.innerText = `${list[i].listItem.date}`;
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', i);
    deleteButton.addEventListener('click', function() {
      longListRemove(this.id);
    })
    deleteButton.innerText = "Delete";

    longListDiv.appendChild(title);
    longListDiv.appendChild(description);
    longListDiv.appendChild(priority);
    longListDiv.appendChild(date);
    longListDiv.appendChild(deleteButton);

    displayDiv.appendChild(longListDiv);
  }
}

export function handleSubmitShort() {

  const shortTitle = document.getElementById('shortTitleForm').value;
  const shortDescription = document.getElementById('shortDescForm').value;
  const shortPriority = document.getElementById('shortPriorityForm').value;
  const shortDate = document.getElementById('shortDateForm').value;

  const newListItem = new TodoListShort(shortTitle, shortDescription, shortPriority, shortDate);
  shortListSet(newListItem);
  displayShortList();
  resetFormShort();
}

function resetFormShort() {
  const shortTitle = document.getElementById('shortTitleForm').value = '';
  const shortDescription = document.getElementById('shortDescForm').value = '';
  const shortPriority = document.getElementById('shortPriorityForm').value = '';
  const shortDate = document.getElementById('shortDateForm').value = '';
}

export function displayShortList() {

  const displayDiv = document.getElementById('shortdisplay');
  const list = shortListGet();
  displayDiv.innerHTML = '';
  
  for (let i = 0; i < list.length; i++) {
    const shortListDiv = document.createElement('div');
    shortListDiv.classList.add('shortListItem');

    const title = document.createElement('h4');
    title.innerText = `${list[i].listItem.title}`;
    const description = document.createElement('p');
    description.innerText = `${list[i].listItem.desc}`;
    const priority = document.createElement('div');
    priority.innerText = `${list[i].listItem.priority}`;
    const date = document.createElement('p');
    date.innerText = `${list[i].listItem.date}`;
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', i);
    deleteButton.addEventListener('click', function() {
      shortListRemove(this.id);
    })
    deleteButton.innerText = "Delete";

    shortListDiv.appendChild(title);
    shortListDiv.appendChild(description);
    shortListDiv.appendChild(priority);
    shortListDiv.appendChild(date);
    shortListDiv.appendChild(deleteButton);

    displayDiv.appendChild(shortListDiv);
  }
}

export function handleSubmitShopping() {

  const shoppingTitle = document.getElementById('shoppingTitleForm').value;

  const newListItem = new ShoppingList(shoppingTitle);
  shoppingListSet(newListItem);
  displayShoppingList();
  resetFormShopping();
}

function resetFormShopping() {
  const shoppingTitle = document.getElementById('shoppingTitleForm').value = '';
}

export function displayShoppingList() {

  const displayDiv = document.getElementById('shoppingdisplay');
  const list = shoppingListGet();
  displayDiv.innerHTML = '';
  
  for (let i = 0; i < list.length; i++) {
    const shoppingListDiv = document.createElement('div');
    shoppingListDiv.classList.add('shoppingListItem');

    const title = document.createElement('h4');
    title.innerText = `${list[i].item}`;
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', i);
    deleteButton.addEventListener('click', function() {
      shoppingListRemove(this.id);
    })
    deleteButton.innerText = "Delete";

    shoppingListDiv.appendChild(title);
    shoppingListDiv.appendChild(deleteButton);

    displayDiv.appendChild(shoppingListDiv);
  }
}

