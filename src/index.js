import _ from 'lodash';
import "./style.scss";
import { TodoListLong, TodoListShort, ShoppingList } from './modules/listClasses';
import { longListGet, longListSet, shortListSet, shortListGet, shoppingListSet, shoppingListGet } from './modules/listArrays';

const longSubmit = document.getElementById('longSubmit').addEventListener('click', handleSubmitLong);
const shortSubmit = document.getElementById('shortSubmit').addEventListener('click', handleSubmitShort);
const shoppingSubmit = document.getElementById('shoppingSubmit').addEventListener('click', handleSubmitShopping);

function handleSubmitLong() {

  const longTitle = document.getElementById('longTitleForm').value;
  const longDescription = document.getElementById('longDescForm').value;
  const longPriority = document.getElementById('longPriorityForm').value;
  const longDate = document.getElementById('longDateForm').value;

  const newListItem = new TodoListLong(longTitle, longDescription, longPriority, longDate);
  const listItemDetails = newListItem.listDetails();
  longListSet(listItemDetails);
  displayLongList();
  console.log(listItemDetails);
}

function displayLongList() {
  const displayDiv = document.getElementById('longdisplay');
  const list = longListGet();
  displayDiv.innerHTML = '';
  
  for (let i = 0; i < list.length; i++) {
    const longListDiv = document.createElement('div');
    longListDiv.classList.add('longListItem');

    const title = document.createElement('h4');
    title.innerText = `${list[0].listItem.title}`;
    const description = document.createElement('p');
    description.innerText = `${list[0].listItem.desc}`;
    const priority = document.createElement('div');
    priority.innerText = `${list[0].listItem.priority}`;
    const date = document.createElement('p');
    date.innerText = `${list[0].listItem.date}`;
    longListDiv.appendChild(title);
    longListDiv.appendChild(description);
    longListDiv.appendChild(priority);
    longListDiv.appendChild(date);

    displayDiv.appendChild(longListDiv);
  }
}

function handleSubmitShort() {

  const shortTitle = document.getElementById('shortTitleForm').value;
  const shortDescription = document.getElementById('shortDescForm').value;
  const shortPriority = document.getElementById('shortPriorityForm').value;
  const shortDate = document.getElementById('shortDateForm').value;

  const newListItem = new TodoListShort(shortTitle, shortDescription, shortPriority, shortDate);
  const listItemDetails = newListItem.listDetails();
  shortListSet(listItemDetails);
  displayShortList();
  console.log(listItemDetails);
}

function displayShortList() {
  const displayDiv = document.getElementById('shortdisplay');
  const list = shortListGet();
  displayDiv.innerHTML = '';
  
  for (let i = 0; i < list.length; i++) {
    const shortListDiv = document.createElement('div');
    shortListDiv.classList.add('shortListItem');

    const title = document.createElement('h4');
    title.innerText = `${list[0].listItem.title}`;
    const description = document.createElement('p');
    description.innerText = `${list[0].listItem.desc}`;
    const priority = document.createElement('div');
    priority.innerText = `${list[0].listItem.priority}`;
    const date = document.createElement('p');
    date.innerText = `${list[0].listItem.date}`;
    shortListDiv.appendChild(title);
    shortListDiv.appendChild(description);
    shortListDiv.appendChild(priority);
    shortListDiv.appendChild(date);

    displayDiv.appendChild(shortListDiv);
  }
}

function handleSubmitShopping() {

  const shoppingTitle = document.getElementById('shoppingTitleForm').value;

  const newListItem = new ShoppingList(shoppingTitle);
  const listItemDetails = newListItem.listDetails();
  shoppingListSet(listItemDetails);
  displayShoppingList();
  console.log(listItemDetails);
}

function displayShoppingList() {
  const displayDiv = document.getElementById('shoppingdisplay');
  const list = shoppingListGet();
  displayDiv.innerHTML = '';
  
  for (let i = 0; i < list.length; i++) {
    const shoppingListDiv = document.createElement('div');
    shoppingListDiv.classList.add('shoppingListItem');

    const title = document.createElement('h4');
    title.innerText = `${list[0].listItem.item}`;

    shoppingListDiv.appendChild(title);

    displayDiv.appendChild(shoppingListDiv);
  }
}