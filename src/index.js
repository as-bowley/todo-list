import _ from "lodash";
import "./style.scss";
import { openFormSelection } from "./modules/Dom";
import {
  longListModule,
  shortListModule,
  shoppingListModule,
} from "./modules/Arrays";
import {
  handleSubmitLong,
  handleLongForm,
  closeModalLong,
  displayLongList,
} from "./modules/DomLongList";
import {
  handleSubmitShort,
  handleShortForm,
  closeModalShort,
  displayShortList,
} from "./modules/DomShortList";
import {
  handleSubmitShopping,
  handleShoppingForm,
  closeModalShopping,
  displayShoppingList,
} from "./modules/DomShopping";
import { longform } from "./modules/FormValidation";

const longSubmit = document
  .getElementById("longSubmit")
  .addEventListener("click", checkInputsLong);
const shortSubmit = document
  .getElementById("shortSubmit")
  .addEventListener("click", handleSubmitShort);
const shoppingSubmit = document
  .getElementById("shoppingSubmit")
  .addEventListener("click", handleSubmitShopping);
const addButton = document
  .getElementById("add-button")
  .addEventListener("click", openFormSelection);
const longTermFormOpen = document
  .getElementById("long-term-form-button")
  .addEventListener("click", handleLongForm);
const shortTermFormOpen = document
  .getElementById("short-term-form-button")
  .addEventListener("click", handleShortForm);
const shoppingTermFormOpen = document
  .getElementById("shopping-form-button")
  .addEventListener("click", handleShoppingForm);
const overlayLong = document
  .getElementById("overlay")
  .addEventListener("click", closeModalLong);
const overlayShort = document
  .getElementById("overlay")
  .addEventListener("click", closeModalShort);
const overlayShoppping = document
  .getElementById("overlay")
  .addEventListener("click", closeModalShopping);

const longFormElement = document.getElementById("long-form");
const longTitle = document.getElementById("longTitleForm");
const longDesc = document.getElementById("longDescForm");
const longPriority = document.getElementById("longPriorityForm");
const longDate = document.getElementById("longDateForm");

longFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputsLong();
});

function checkInputsLong() {
  const titleValue = longTitle.value.trim();
  const descriptionValue = longDesc.value.trim();
  const priorityValue = longPriority.value.trim();
  const dateValue = longDate.value.trim();

  if (titleValue === "") {
    setErrorFor(longTitle, "Title cannot be blank");
  } else {
    setSuccessFor(longTitle);
  }

  if (descriptionValue === "") {
    setErrorFor(longDesc, "Description cannot be blank");
  } else {
    setSuccessFor(longDesc);
  }

  if (priorityValue === "") {
    setErrorFor(longPriority, "Please select a priority");
  } else {
    setSuccessFor(longPriority);
  }

  if (dateValue === "") {
    setErrorFor(longDate, "Please select a date");
  } else {
    setSuccessFor(longDate);
  }

  if (
    titleValue !== "" &&
    descriptionValue !== "" &&
    priorityValue !== "" &&
    dateValue !== ""
  ) {
    handleSubmitLong();
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function resetLongFormErrors() {
  const titleParent = longTitle.parentElement;
  const descParent = longDesc.parentElement;
  const priorityParent = longPriority.parentElement;
  const dateParent = longDate.parentElement;

  console.log(titleParent);
  titleParent.className = "form-control";
  descParent.className = "form-control";
  priorityParent.className = "form-control";
  dateParent.className = "form-control";
}

longListModule.checkLocal();
shortListModule.checkLocal();
shoppingListModule.checkLocal();

displayLongList();
displayShortList();
displayShoppingList();
