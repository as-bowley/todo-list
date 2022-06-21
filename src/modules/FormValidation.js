import { handleSubmitLong } from "./DomLongList";
import { handleSubmitShort } from "./DomShortList";

const longFormElement = document.getElementById("long-form");
const longTitle = document.getElementById("longTitleForm");
const longDesc = document.getElementById("longDescForm");
const longPriority = document.getElementById("longPriorityForm");
const longDate = document.getElementById("longDateForm");

const shortFormElement = document.getElementById("short-form");
const shortTitle = document.getElementById("shortTitleForm");
const shortDesc = document.getElementById("shortDescForm");
const shortPriority = document.getElementById("shortPriorityForm");
const shortDate = document.getElementById("shortDateForm");

longFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputsLong();
});

shortFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputsShort();
});

export function checkInputsLong() {
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

export function checkInputsShort() {
  const titleValue = shortTitle.value.trim();
  const descriptionValue = shortDesc.value.trim();
  const priorityValue = shortPriority.value.trim();
  const dateValue = shortDate.value.trim();

  if (titleValue === "") {
    setErrorFor(shortTitle, "Title cannot be blank");
  } else {
    setSuccessFor(shortTitle);
  }

  if (descriptionValue === "") {
    setErrorFor(shortDesc, "Description cannot be blank");
  } else {
    setSuccessFor(shortDesc);
  }

  if (priorityValue === "") {
    setErrorFor(shortPriority, "Please select a priority");
  } else {
    setSuccessFor(shortPriority);
  }

  if (dateValue === "") {
    setErrorFor(shortDate, "Please select a date");
  } else {
    setSuccessFor(shortDate);
  }

  if (
    titleValue !== "" &&
    descriptionValue !== "" &&
    priorityValue !== "" &&
    dateValue !== ""
  ) {
    handleSubmitShort();
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
