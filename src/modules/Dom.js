export function openFormSelection() {
  const formButtons = document.querySelector('.modalButtons');
  if (formButtons.classList.contains('active')) {
    formButtons.classList.remove('active');
  } else {
    formButtons.classList.add('active');
  }
}







