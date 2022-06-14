const longList = [];
const shortList = [];
const shoppingList = [];

export const longListSet = (listItem) => {
  longList.push({listItem});
  console.log(longList);
}

export const longListGet = () => {
  const longListCopy = [...longList];
  return longListCopy;
}

export const shortListSet = (listItem) => {
  shortList.push({listItem});
  console.log(shortList);
}

export const shortListGet = () => {
  const shortListCopy = [...shortList];
  return shortListCopy;
}

export const shoppingListSet = (listItem) => {
  shoppingList.push({listItem});
  console.log(shoppingList);
}

export const shoppingListGet = () => {
  const shoppingListCopy = [...shoppingList];
  return shoppingListCopy;
}

