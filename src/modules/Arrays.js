import { displayLongList } from "./DomLongList";
import { displayShortList } from "./DomShortList";
import { displayShoppingList } from "./DomShopping";

export const longListModule = (function () {
  const _longList = [
    {
      title: "prepare portfolio",
      desc: "Start making designs for possible portfolio layouts.",
      priority: "high",
      date: "2022-08-24",
    },
    {
      title: "take telc b2 exam",
      desc: "Prepare for b2 exam: including booking exam and gathering and going through mock exams.",
      priority: "high",
      date: "2022-09-01",
    },
  ];

  const longListSet = (listItem) => {
    _longList.push(listItem);
    localStorage.setItem("longListArray", JSON.stringify(longListGet()));
  };

  const longListGet = () => {
    const longListCopy = [..._longList];
    return longListCopy;
  };

  const longListRemove = (i) => {
    _longList.splice(i, 1);
    localStorage.removeItem("longListArray");
    localStorage.setItem("longListArray", JSON.stringify(longListGet()));
    displayLongList();
  };

  const longListEdit = (index, item) => {
    console.log(index);
    console.log(item);
    _longList[index] = item;
    localStorage.removeItem("longListArray");
    localStorage.setItem("longListArray", JSON.stringify(longListGet()));
  };

  const checkLocal = () => {
    if (localStorage.hasOwnProperty("longListArray") == true) {
      const localArray = JSON.parse(localStorage.getItem("longListArray"));
      _longList.splice(0, _longList.length, ...localArray);
    }
  };

  return {
    longListSet,
    longListGet,
    longListRemove,
    longListEdit,
    checkLocal,
  };
})();

export const shortListModule = (function () {
  const _shortList = [
    {
      title: "pay phone bill",
      desc: "Make payment to vodafone..",
      priority: "medium",
      date: "2022-06-24",
    },
    {
      title: "visit liam",
      desc: "Drop off gifts at liam's house.",
      priority: "low",
      date: "2022-06-27",
    },
  ];

  const shortListSet = (listItem) => {
    _shortList.push(listItem);
    localStorage.setItem("shortListArray", JSON.stringify(shortListGet()));
  };

  const shortListGet = () => {
    const shortListCopy = [..._shortList];
    return shortListCopy;
  };

  const shortListRemove = (i) => {
    _shortList.splice(i, 1);
    localStorage.removeItem("shortListArray");
    localStorage.setItem("shortListArray", JSON.stringify(shortListGet()));
    displayShortList();
  };

  const shortListEdit = (index, item) => {
    _shortList[index] = item;
    localStorage.removeItem("shortListArray");
    localStorage.setItem("shortListArray", JSON.stringify(shortListGet()));
  };

  const checkLocal = () => {
    if (localStorage.hasOwnProperty("shortListArray") === true) {
      const localArray = JSON.parse(localStorage.getItem("shortListArray"));
      console.log(localArray[0].date);
      _shortList.splice(0, _shortList.length, ...localArray);
    }
  };

  return {
    shortListSet,
    shortListGet,
    shortListRemove,
    shortListEdit,
    checkLocal,
  };
})();

export const shoppingListModule = (function () {
  const _shoppingList = [
    { item: "bread" },
    { item: "milk" },
    { item: "shower gel" },
    { item: "cat food" },
  ];

  const shoppingListSet = (listItem) => {
    _shoppingList.push(listItem);
    localStorage.setItem(
      "shoppingListArray",
      JSON.stringify(shoppingListGet())
    );
  };

  const shoppingListGet = () => {
    const shoppingListCopy = [..._shoppingList];
    return shoppingListCopy;
  };

  const shoppingListRemove = (i) => {
    _shoppingList.splice(i, 1);
    localStorage.removeItem("shoppingListArray");
    localStorage.setItem(
      "shoppingListArray",
      JSON.stringify(shoppingListGet())
    );
    displayShoppingList();
  };

  const checkLocal = () => {
    if (localStorage.hasOwnProperty("shoppingListArray") == true) {
      const localArray = JSON.parse(localStorage.getItem("shoppingListArray"));
      _shoppingList.splice(0, _shoppingList.length, ...localArray);
    }
  };

  return {
    shoppingListSet,
    shoppingListGet,
    shoppingListRemove,
    checkLocal,
  };
})();
