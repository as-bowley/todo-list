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

const longSubmit = document
  .getElementById("longSubmit")
  .addEventListener("click", handleSubmitLong);
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

longListModule.checkLocal();
shortListModule.checkLocal();
shoppingListModule.checkLocal();

displayLongList();
displayShortList();
displayShoppingList();
