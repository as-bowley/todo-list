import _ from 'lodash';
import "./style.scss";
import { handleSubmitLong, handleSubmitShort, handleSubmitShopping } from './modules/listDom';

const longSubmit = document.getElementById('longSubmit').addEventListener('click', handleSubmitLong);
const shortSubmit = document.getElementById('shortSubmit').addEventListener('click', handleSubmitShort);
const shoppingSubmit = document.getElementById('shoppingSubmit').addEventListener('click', handleSubmitShopping);

