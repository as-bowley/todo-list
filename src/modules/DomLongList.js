import { TodoListLong } from "./Classes";
import { longListModule } from "./Arrays";
import { format, parseISO } from "date-fns";
import { closeFormSelection } from "./Dom";

export function handleLongForm() {
  const longTermForm = document.querySelector('#longform');
  const overlay = document.querySelector('#overlay');

  if (longTermForm.classList.contains('activeLongForm')) {
    longTermForm.classList.remove('activeLongForm');
    closeModalLong();
  } else {
    longTermForm.classList.add('activeLongForm');
    overlay.classList.add('activeOverlay');
    closeFormSelection();
  }
}

export function closeModalLong() {
  const overlay = document.querySelector('#overlay');
  const longTermForm = document.querySelector('#longform');
  longTermForm.classList.remove('activeLongForm');
  overlay.classList.remove('activeOverlay');
  resetEditItems();
}

export function handleSubmitLong() {
  const longTermFormButton = document.getElementById('longSubmit')

  if (longTermFormButton.classList.contains('editMode')) {
    handleSubmitEditLong();
    longTermFormButton.classList.remove('editMode');
  } else {
    const longTitle = document.getElementById('longTitleForm').value;
    const longDescription = document.getElementById('longDescForm').value;
    const longPriority = document.getElementById('longPriorityForm').value;
    const longDate = document.getElementById('longDateForm').value;

    const newListItem = new TodoListLong(longTitle, longDescription, longPriority, longDate);
    longListModule.longListSet(newListItem);
    displayLongList();
    resetFormLong();
    handleLongForm();
  }
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
  const longTermFormButton = document.getElementById('longSubmit')
  displayDiv.innerHTML = '';
  
  for (let i = 0; i < list.length; i++) {
    const formattedDate = format(parseISO(list[i].date), "MMMM do y");

    const longListDiv = document.createElement('div');
    longListDiv.classList.add('longListItem');

    const title = document.createElement('h4');
    title.classList.add('list-item-title');
    title.addEventListener('click', function() {
      if (longTermFormButton.classList.contains('editMode') == false) {
        const index = this.parentNode.querySelector('.list-item-radio').id;
        longTermFormButton.classList.add('editMode');
        editLongForm(index);
      } else {
        return;
      }
    })
    title.innerText = `${list[i].title}`;
    const radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('id', i);
    radio.classList.add('list-item-radio');
    radio.addEventListener('click', function() {
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
    priorityDiv.classList.add('list-item-prio-div');
    if (list[i].priority == 'high') {
      priorityDiv.classList.add('high-priority');
    } else if (list[i].priority == 'medium') {
      priorityDiv.classList.add('medium-priority');
    } else {
      priorityDiv.classList.add('low-priority');
    };
    priorityDiv.innerText = `${list[i].priority}`;
    priority.appendChild(priorityDiv);

    const date = document.createElement('p');
    date.classList.add('list-item-date');
    date.innerText = `target date: ${formattedDate}`;
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

function editLongForm(index) {

  let longTitle = document.getElementById('longTitleForm');
  let longDescription = document.getElementById('longDescForm');
  let longPriority = document.getElementById('longPriorityForm');
  let longDate = document.getElementById('longDateForm');
  const idHolder = document.querySelector('.id-holder');

  const array = longListModule.longListGet();

  longTitle.value = array[index].title;
  longDescription.value = array[index].desc;
  longPriority.value = array[index].priority;
  longDate.value = array[index].date;
  idHolder.setAttribute('id', index);

  handleLongForm();

}

function handleSubmitEditLong() {
  const idHolder = document.querySelector('.id-holder');
  const index = idHolder.id;

  const longTitle = document.getElementById('longTitleForm').value;
  const longDescription = document.getElementById('longDescForm').value;
  const longPriority = document.getElementById('longPriorityForm').value;
  const longDate = document.getElementById('longDateForm').value;

  const editedItem = new TodoListLong(longTitle, longDescription, longPriority, longDate);

  longListModule.longListEdit(index, editedItem);

  idHolder.removeAttribute('id');

  displayLongList();
  resetFormLong();
  handleLongForm()
}

function resetEditItems() {
  const longTermFormButton = document.getElementById('longSubmit');
  longTermFormButton.classList.remove('editMode');
  const idHolder = document.querySelector('.id-holder');
  idHolder.removeAttribute('id');
}