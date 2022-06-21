const longform = document.getElementById("long-form");
const longTitle = document.getElementById("longTitleForm");
const longDescription = document.getElementById("longDescForm");
const longPriority = document.getElementById("longPriorityForm");
const longDate = document.getElementById("longDateForm");
const errorDisplay = document.getElementById("error-display");

longform.addEventListener("click", (e) => {
  const messages = [];

  if (longTitle === "" || longTitle == null) {
    messages.push("Title is required");
  }

  if (longDescription === "" || longDescription == null) {
    messages.push("A description is required");
  }

  if (longPriority === "" || longPriority == null) {
    messages.push("A priority is required");
  }

  if (longDate === "" || longDate == null) {
    messages.push("A date is required");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorDisplay.innerText = messages.join(", ");
  }
});
