import { displayLongList, displayShortList, displayShoppingList } from "./listDom";

export const longListModule = (function() {
  const _longList = [{title: 'prepare portfolio', desc: 'Start making designs for possible portfolio layouts.', priority: 'high', date: '2022-08-24'}, {title: 'take telc b2 exam', desc: 'Prepare for b2 exam: including booking exam and gathering and going through mock exams.', priority: 'high', date: '2022-09-01'}];

  const longListSet = (listItem) => {
    _longList.push(listItem);
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
  const _shortList = [{title: 'pay phone bill', desc: 'Make payment to vodafone..', priority: 'medium', date: '2022-06-24'}, {title: 'visit liam', desc: "Drop off gifts at liam's house.", priority: 'high', date: '2022-06-27'}];

  const shortListSet = (listItem) => {
    _shortList.push(listItem);
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
  const _shoppingList = [{item: 'bread'}, {item: 'milk'}, {item: 'shower gel'}, {item: 'cat food'} ];

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