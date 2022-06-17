import { ShoppingList } from "./Classes";
import { shoppingListModule } from "./Arrays";

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