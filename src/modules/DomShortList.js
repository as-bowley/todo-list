import { TodoListShort } from "./Classes";
import { shortListModule } from "./Arrays";
import { format, parseISO } from "date-fns";
import { closeFormSelection } from "./Dom";

export function handleShortForm() {
  const shortTermForm = document.querySelector("#shortform");
  const overlay = document.querySelector("#overlay");

  if (shortTermForm.classList.contains("activeShortForm")) {
    shortTermForm.classList.remove("activeShortForm");
    closeModalShort();
  } else {
    shortTermForm.classList.add("activeShortForm");
    overlay.classList.add("activeOverlay");
    closeFormSelection();
  }
}

export function closeModalShort() {
  const overlay = document.querySelector("#overlay");
  const shortTermForm = document.querySelector("#shortform");
  shortTermForm.classList.remove("activeShortForm");
  overlay.classList.remove("activeOverlay");
  resetEditItems();
  resetFormShort();
}

export function handleSubmitShort() {
  const shortTermFormButton = document.getElementById("shortSubmit");

  if (shortTermFormButton.classList.contains("editMode")) {
    handleSubmitEditShort();
    shortTermFormButton.classList.remove("editMode");
  } else {
    const shortTitle = document.getElementById("shortTitleForm").value;
    const shortDescription = document.getElementById("shortDescForm").value;
    const shortPriority = document.getElementById("shortPriorityForm").value;
    const shortDate = document.getElementById("shortDateForm").value;

    const newListItem = new TodoListShort(
      shortTitle,
      shortDescription,
      shortPriority,
      shortDate
    );
    shortListModule.shortListSet(newListItem);
    displayShortList();
    resetFormShort();
    handleShortForm();
  }
}

function resetFormShort() {
  const shortTitle = (document.getElementById("shortTitleForm").value = "");
  const shortDescription = (document.getElementById("shortDescForm").value =
    "");
  const shortPriority = (document.getElementById("shortPriorityForm").value =
    "");
  const shortDate = (document.getElementById("shortDateForm").value = "");
}

export function displayShortList() {
  const displayDiv = document.getElementById("shortdisplay");
  const list = shortListModule.shortListGet();
  const shortTermFormButton = document.getElementById("shortSubmit");
  displayDiv.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const formattedDate = format(parseISO(list[i].date), "MMMM do y");

    const shortListDiv = document.createElement("div");
    shortListDiv.classList.add("shortListItem");

    const title = document.createElement("h4");
    title.classList.add("list-item-title");
    title.addEventListener("click", function () {
      if (shortTermFormButton.classList.contains("editMode") == false) {
        const index = this.parentNode.querySelector(".list-item-radio").id;
        shortTermFormButton.classList.add("editMode");
        editShortForm(index);
      } else {
      }
    });
    title.innerText = `${list[i].title}`;
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("id", i);
    radio.classList.add("list-item-radio");
    radio.addEventListener("click", function (e) {
      if (this.classList.contains("complete")) {
        radio.classList.remove("complete");
        this.parentNode.classList.remove("complete");
        this.checked = false;
      } else {
        radio.classList.add("complete");
        this.parentNode.classList.add("complete");
      }
    });
    const description = document.createElement("p");
    description.classList.add("list-item-desc");
    description.innerText = `${list[i].desc}`;

    const priority = document.createElement("div");
    priority.classList.add("list-item-prio");
    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("list-item-prio-div");
    if (list[i].priority == "high") {
      priorityDiv.classList.add("high-priority");
    } else if (list[i].priority == "medium") {
      priorityDiv.classList.add("medium-priority");
    } else {
      priorityDiv.classList.add("low-priority");
    }
    priorityDiv.innerText = `${list[i].priority}`;
    priority.appendChild(priorityDiv);

    const date = document.createElement("p");
    date.classList.add("list-item-date");
    date.innerText = `target date: ${formattedDate}`;
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", i);
    deleteButton.classList.add("list-item-delete");
    deleteButton.addEventListener("click", function () {
      shortListModule.shortListRemove(this.id);
    });

    shortListDiv.appendChild(title);
    shortListDiv.appendChild(radio);
    shortListDiv.appendChild(description);
    shortListDiv.appendChild(priority);
    shortListDiv.appendChild(date);
    shortListDiv.appendChild(deleteButton);

    displayDiv.appendChild(shortListDiv);
  }
}

function editShortForm(index) {
  const shortTitle = document.getElementById("shortTitleForm");
  const shortDescription = document.getElementById("shortDescForm");
  const shortPriority = document.getElementById("shortPriorityForm");
  const shortDate = document.getElementById("shortDateForm");
  const idHolder = document.querySelector(".id-holder");

  const array = shortListModule.shortListGet();

  shortTitle.value = array[index].title;
  shortDescription.value = array[index].desc;
  shortPriority.value = array[index].priority;
  shortDate.value = array[index].date;
  idHolder.setAttribute("id", index);

  handleShortForm();
}

function handleSubmitEditShort() {
  const idHolder = document.querySelector(".id-holder");
  const index = idHolder.id;

  const shortTitle = document.getElementById("shortTitleForm").value;
  const shortDescription = document.getElementById("shortDescForm").value;
  const shortPriority = document.getElementById("shortPriorityForm").value;
  const shortDate = document.getElementById("shortDateForm").value;

  const editedItem = new TodoListShort(
    shortTitle,
    shortDescription,
    shortPriority,
    shortDate
  );

  shortListModule.shortListEdit(index, editedItem);

  idHolder.removeAttribute("id");

  displayShortList();
  resetFormShort();
  handleShortForm();
}

function resetEditItems() {
  const shortTermFormButton = document.getElementById("shortSubmit");
  shortTermFormButton.classList.remove("editMode");
  const idHolder = document.querySelector(".id-holder");
  idHolder.removeAttribute("id");
}
