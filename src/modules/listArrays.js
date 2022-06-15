import { displayLongList, displayShortList, displayShoppingList } from "./listDom";

const longList = [];
const shortList = [];
const shoppingList = [];

export const longListSet = (listItem) => {
  longList.push({listItem});
}

export const longListGet = () => {
  const longListCopy = [...longList];
  return longListCopy;
}

export const longListRemove = (i) => {
  longList.splice(i, 1);
  displayLongList();
}

export const shortListSet = (listItem) => {
  shortList.push({listItem});
}

export const shortListGet = () => {
  const shortListCopy = [...shortList];
  return shortListCopy;
}

export const shortListRemove = (i) => {
  shortList.splice(i, 1);
  displayShortList();
}

export const shoppingListSet = (listItem) => {
  shoppingList.push(listItem);
  console.log(shoppingListGet());
}

export const shoppingListGet = () => {
  const shoppingListCopy = [...shoppingList];
  return shoppingListCopy;
}

export const shoppingListRemove = (i) => {
  shoppingList.splice(i, 1);
  displayShoppingList();
}
