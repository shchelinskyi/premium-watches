import {cartProductsTypes} from "../../types"

export const addProductToCart = (obj) => {
   return {type:  cartProductsTypes.ADD_PRODUCT_TO_CART, payload: obj}
};

export const removeOneProductFromCart = (obj) => {
    return {type: cartProductsTypes.REMOVE_ONE_PRODUCT_FROM_CART, payload: obj}
};

export const  removeProductFromCart = (obj) => {
    return {type:  cartProductsTypes.REMOVE_PRODUCT_FROM_CART, payload: obj}
};

export const updateSum = (sum) => {
    return {type:  cartProductsTypes.UPDATE_SUM, payload: sum}
}

export const emptyShoppingCart = () => {
    window.localStorage.removeItem("items");
    window.localStorage.removeItem("firstName");
    window.localStorage.removeItem("lastName");
    window.localStorage.removeItem("age");
    window.localStorage.removeItem("deliveryAddress");
    window.localStorage.removeItem("tel");
    return {type:  cartProductsTypes.EMPTY_SHOPPING_CART}
}

export const openCartForm = () => {
    return {type:  cartProductsTypes.OPEN_CART_FORM}
}

export const closeCartForm = () => {
    return {type: cartProductsTypes.CLOSE_CART_FORM}
}

export const setOrderNumber = (num) => {
    return {type: cartProductsTypes.SET_ORDER_NUMBER, payload: num}
}
