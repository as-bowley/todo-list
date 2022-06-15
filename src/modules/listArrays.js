import { displayLongList, displayShortList, displayShoppingList } from "./listDom";

const shoppingList = [];

export const longListModule = (function() {
  const _longList = [];

  const longListSet = (listItem) => {
    _longList.push({listItem});
  }

  const longListGet = () => {
    const longListCopy = [..._longList];
    return longListCopy;
  }

  const longListRemove = (i) => {
    _longList.splice(i, 1);
    displayLongList();
  } 

  return {
    longListSet: longListSet,
    longListGet: longListGet,
    longListRemove: longListRemove
  }
})();

export const shortListModule = (function() {
  const _shortList = [];

  const shortListSet = (listItem) => {
    _shortList.push({listItem});
  }

  const shortListGet = () => {
    const shortListCopy = [..._shortList];
    return shortListCopy;
  }

  const shortListRemove = (i) => {
    _shortList.splice(i, 1);
    displayShortList();
  }

  return {
    shortListSet: shortListSet,
    shortListGet: shortListGet,
    shortListRemove: shortListRemove
  }
})();

export const shoppingListModule = (function(){
  const _shoppingList = [];

  const shoppingListSet = (listItem) => {
    _shoppingList.push(listItem);
    console.log(shoppingListGet());
  }

  const shoppingListGet = () => {
    const shoppingListCopy = [..._shoppingList];
    return shoppingListCopy;
  }

  const shoppingListRemove = (i) => {
    _shoppingList.splice(i, 1);
    displayShoppingList();
  }

  return {
    shoppingListSet: shoppingListSet,
    shoppingListGet: shoppingListGet,
    shoppingListRemove: shoppingListRemove
  }
})();