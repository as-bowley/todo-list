import { TodoListLong, TodoListShort, ShoppingList } from "./listClasses";
import { longListModule, shortListModule, shoppingListModule } from "./listArrays";

export function handleSubmitLong() {

  const longTitle = document.getElementById('longTitleForm').value;
  const longDescription = document.getElementById('longDescForm').value;
  const longPriority = document.getElementById('longPriorityForm').value;
  const longDate = document.getElementById('longDateForm').value;

  const newListItem = new TodoListLong(longTitle, longDescription, longPriority, longDate);
  longListModule.longListSet(newListItem);
  console.log(newListItem);
  displayLongList();
  resetFormLong();
  handleLongForm();
}

function resetFormLong() {
  const longTitle = document.getElementById('longTitleForm').value = '';
  const longDescription = document.getElementById('longDescForm').value = '';
  const longPriority = document.getElementById('longPriorityForm').value = '';
  const longDate = document.getElementById('longDateForm').value = '';
}

export function displayLongList() {

  const displayDiv = document.getElementById('longdisplay');
  const list = longListModule.longListGet();
  displayDiv.innerHTML = '';
  
  for (let i = 0; i < list.length; i++) {
    const longListDiv = document.createElement('div');
    longListDiv.classList.add('longListItem');

    const title = document.createElement('h4');
    title.classList.add('list-item-title');
    title.innerText = `${list[i].title}`;
    const radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('id', i);
    radio.classList.add('list-item-radio');
    radio.addEventListener('click', function(e) {
      if(this.classList.contains('complete')) {
        radio.classList.remove('complete');
        this.parentNode.classList.remove('complete');
        this.checked = false;
      }
      else {
        radio.classList.add('complete');
        this.parentNode.classList.add('complete');
        }
    });
    const description = document.createElement('p');
    description.classList.add('list-item-desc');
    description.innerText = `${list[i].desc}`;

    const priority = document.createElement('div');
    priority.classList.add('list-item-prio');
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('list-item-prio-div')
    priorityDiv.innerText = `${list[i].priority}`;
    priority.appendChild(priorityDiv);

    const date = document.createElement('p');
    date.classList.add('list-item-date');
    date.innerText = `target date: ${list[i].date}`;
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', i);
    deleteButton.classList.add('list-item-delete');
    deleteButton.addEventListener('click', function() {
      longListModule.longListRemove(this.id);
    })

    longListDiv.appendChild(title);
    longListDiv.appendChild(radio);
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
  shortListModule.shortListSet(newListItem);
  displayShortList();
  resetFormShort();
  closeModalShort();
}

function resetFormShort() {
  const shortTitle = document.getElementById('shortTitleForm').value = '';
  const shortDescription = document.getElementById('shortDescForm').value = '';
  const shortPriority = document.getElementById('shortPriorityForm').value = '';
  const shortDate = document.getElementById('shortDateForm').value = '';
}

export function displayShortList() {

  const displayDiv = document.getElementById('shortdisplay');
  const list = shortListModule.shortListGet();
  displayDiv.innerHTML = '';
  
  for (let i = 0; i < list.length; i++) {
    const shortListDiv = document.createElement('div');
    shortListDiv.classList.add('shortListItem');

    const title = document.createElement('h4');
    title.classList.add('list-item-title');
    title.innerText = `${list[i].title}`;
    const radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('id', i);
    radio.classList.add('list-item-radio');
    radio.addEventListener('click', function(e) {
      if(this.classList.contains('complete')) {
        radio.classList.remove('complete');
        this.parentNode.classList.remove('complete');
        this.checked = false;
      }
      else {
        radio.classList.add('complete');
        this.parentNode.classList.add('complete');
        }
    });
    const description = document.createElement('p');
    description.classList.add('list-item-desc');
    description.innerText = `${list[i].desc}`;

    const priority = document.createElement('div');
    priority.classList.add('list-item-prio');
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('list-item-prio-div')
    priorityDiv.innerText = `${list[i].priority}`;
    priority.appendChild(priorityDiv);

    const date = document.createElement('p');
    date.classList.add('list-item-date');
    date.innerText = `target date: ${list[i].date}`;
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', i);
    deleteButton.classList.add('list-item-delete');
    deleteButton.addEventListener('click', function() {
      shortListModule.shortListRemove(this.id);
    })

    shortListDiv.appendChild(title);
    shortListDiv.appendChild(radio);
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
  shoppingListModule.shoppingListSet(newListItem);
  displayShoppingList();
  resetFormShopping();
  closeModalShopping();
}

function resetFormShopping() {
  const shoppingTitle = document.getElementById('shoppingTitleForm').value = '';
}

export function displayShoppingList() {

  const displayDiv = document.getElementById('shoppingdisplay');
  const list = shoppingListModule.shoppingListGet();
  displayDiv.innerHTML = '';
  
  for (let i = 0; i < list.length; i++) {
    const shoppingListDiv = document.createElement('div');
    shoppingListDiv.classList.add('shoppingListItem');

    const title = document.createElement('h4');
    title.classList.add('list-item-title');
    title.innerText = `${list[i].item}`;
    const radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('id', i);
    radio.addEventListener('click', function(e) {
      if(this.classList.contains('complete')) {
        radio.classList.remove('complete');
        this.parentNode.classList.remove('complete');
        this.checked = false;
      }
      else {
        radio.classList.add('complete');
        this.parentNode.classList.add('complete');
        }
    });
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', i);
    deleteButton.addEventListener('click', function() {
      shoppingListModule.shoppingListRemove(this.id);
    })

    shoppingListDiv.appendChild(radio);
    shoppingListDiv.appendChild(title);
    shoppingListDiv.appendChild(deleteButton);
    

    displayDiv.appendChild(shoppingListDiv);
  }
}

export function openFormSelection() {
  const formButtons = document.querySelector('.modalButtons');
  if (formButtons.classList.contains('active')) {
    formButtons.classList.remove('active');
  } else {
    formButtons.classList.add('active');
  }
}

export function handleLongForm() {
  const longTermForm = document.querySelector('#longform');
  const overlay = document.querySelector('#overlay');

  if (longTermForm.classList.contains('activeLongForm')) {
    longTermForm.classList.remove('activeLongForm');
    closeModalLong();
  } else {
    longTermForm.classList.add('activeLongForm');
    overlay.classList.add('activeOverlay');
  }
}

export function closeModalLong() {
  const overlay = document.querySelector('#overlay');
  const longTermForm = document.querySelector('#longform');
  longTermForm.classList.remove('activeLongForm');
  overlay.classList.remove('activeOverlay');
}

export function handleShortForm() {
  const shortTermForm = document.querySelector('#shortform');
  const overlay = document.querySelector('#overlay');

  if (shortTermForm.classList.contains('activeShortForm')) {
    shortTermForm.classList.remove('activeShortForm');
    closeModalShort();
  } else {
    shortTermForm.classList.add('activeShortForm');
    overlay.classList.add('activeOverlay');
  }
}

export function closeModalShort() {
  const overlay = document.querySelector('#overlay');
  const shortTermForm = document.querySelector('#shortform');
  shortTermForm.classList.remove('activeShortForm');
  overlay.classList.remove('activeOverlay');
}

export function handleShoppingForm() {
  const shoppingTermForm = document.querySelector('#shoppingform');
  const overlay = document.querySelector('#overlay');

  if (shoppingTermForm.classList.contains('activeShoppingForm')) {
    shoppingTermForm.classList.remove('activeShoppingForm');
    closeModalShopping();
  } else {
    shoppingTermForm.classList.add('activeShoppingForm');
    overlay.classList.add('activeOverlay');
  }
}

export function closeModalShopping() {
  const overlay = document.querySelector('#overlay');
  const shoppingTermForm = document.querySelector('#shoppingform');
  shoppingTermForm.classList.remove('activeShoppingForm');
  overlay.classList.remove('activeOverlay');
}

