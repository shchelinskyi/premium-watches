import {cartProductsTypes} from "../../types";

import {calculateSum} from "../../../tools";

const cartItems = JSON.parse(window.localStorage.getItem("items")) || [];
const sum = calculateSum(cartItems);


const defaultState = {
    cartProducts: cartItems,
    cartSum: sum,
    cartForm: false,
    orderNumber: "",
};

export const cartProductsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case cartProductsTypes.ADD_PRODUCT_TO_CART:
            const {cartProducts} = state;
            const itemIndex = cartProducts.findIndex(cartProduct => cartProduct.id === action.payload.id);
            if (itemIndex === -1) {
                return {
                    ...state, cartProducts: [...cartProducts, {...action.payload, quantity: 1}]
                }
            } else {
                const newCartProducts = [...cartProducts];
                newCartProducts[itemIndex].quantity++;
                return {
                    ...state, cartProducts: newCartProducts
                }
            }
        case cartProductsTypes.REMOVE_ONE_PRODUCT_FROM_CART:
            const {cartProducts: cartArr} = state;
            const indexElem = cartArr.findIndex(cartProduct => cartProduct.id === action.payload.id);
            const newCartArr = [...cartArr];
            newCartArr[indexElem].quantity--;
            return {
                ...state, cartProducts: newCartArr
            }
        case cartProductsTypes.REMOVE_PRODUCT_FROM_CART:
            return {
                ...state, cartProducts:
                    state.cartProducts.filter((product) => product.id !== action.payload.id)
            };
        case cartProductsTypes.UPDATE_SUM:
            return {...state, cartSum: action.payload};
        case cartProductsTypes.EMPTY_SHOPPING_CART:
            return {...state, cartProducts: []}
        case cartProductsTypes.OPEN_CART_FORM:
            return {...state, cartForm: true}
        case cartProductsTypes.CLOSE_CART_FORM:
            return {...state, cartForm: false}
        case cartProductsTypes.SET_ORDER_NUMBER:
            return {...state, orderNumber: action.payload}
        default:
            return state;
    }
}
