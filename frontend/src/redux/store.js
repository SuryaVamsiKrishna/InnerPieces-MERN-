import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./reducers/cartReducers";
import { userDetailsReducer, userRegisterReducer, userSigninReducer, userUpdateProfileReducer } from '../reducers/userReducer';
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";

import {
  getDoctorlistsReducer,
  getDoctorlistDetailsReducer,
} from "./reducers/doctorlistReducers";

import { orderCreateReducer, orderDetailsReducer, orderMineListReducer, orderPayReducer } from '../redux/reducers/orderReducer';

const reducer = combineReducers({
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  getDoctorlists: getDoctorlistsReducer,
  getDoctorlistDetails: getDoctorlistDetailsReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
    shippingAddress: localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress'))
            : {},
    paymentMethod: 'PayPal'
  },

  userSignin: {
    userInfo: localStorage.getItem('userInfo') 
        ? JSON.parse(localStorage.getItem('userInfo')) 
        : null
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
