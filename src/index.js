import _ from 'lodash';
import "./style.scss";
import { handleSubmitLong, handleSubmitShort, handleSubmitShopping, openFormSelection, handleLongForm, displayLongList, displayShortList, displayShoppingList, closeModalLong, handleShortForm, closeModalShort, handleShoppingForm, closeModalShopping } from './modules/listDom';
import { longListModule, shortListModule, shoppingListModule } from './modules/listArrays';

const longSubmit = document.getElementById('longSubmit').addEventListener('click', handleSubmitLong);
const shortSubmit = document.getElementById('shortSubmit').addEventListener('click', handleSubmitShort);
const shoppingSubmit = document.getElementById('shoppingSubmit').addEventListener('click', handleSubmitShopping);
const addButton = document.getElementById('add-button').addEventListener('click', openFormSelection);
const longTermFormOpen = document.getElementById('long-term-form-button').addEventListener('click', handleLongForm);
const shortTermFormOpen = document.getElementById('short-term-form-button').addEventListener('click', handleShortForm);
const shoppingTermFormOpen = document.getElementById('shopping-form-button').addEventListener('click', handleShoppingForm);
const overlayLong = document.getElementById('overlay').addEventListener('click', closeModalLong);
const overlayShort = document.getElementById('overlay').addEventListener('click', closeModalShort);
const overlayShoppping = document.getElementById('overlay').addEventListener('click', closeModalShopping);

longListModule.checkLocal();
shortListModule.checkLocal();
shoppingListModule.checkLocal();

displayLongList();
displayShortList();
displayShoppingList();