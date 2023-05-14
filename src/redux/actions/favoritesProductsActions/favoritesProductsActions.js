import {favoritesProductsTypes} from "../../types";
export const addProductToFavorites = (obj) => {
    return {type: favoritesProductsTypes.ADD_PRODUCT_TO_FAVORITES, payload: obj}
};

export const  removeProductFromFavorites = (obj) => {
    return {type: favoritesProductsTypes.REMOVE_PRODUCT_FROM_FAVORITES, payload: obj}
};

