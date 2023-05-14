import {productTypes} from "../../types";


export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case productTypes.FETCH_DATA_SUCCESS:
            return [...state, ...action.payload];
        default:
            return state;
    }
}
