import {favoritesProductsTypes} from "../../types";

const initialState = [
    ...(JSON.parse(window.localStorage.getItem("favoriteItems")) || [])
]


export const favoritesProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case favoritesProductsTypes.ADD_PRODUCT_TO_FAVORITES:
            return [...state, action.payload];
        case favoritesProductsTypes.REMOVE_PRODUCT_FROM_FAVORITES:
            return state.filter((product) => product.id !== action.payload.id);
        default:
            return state;
    }
}
