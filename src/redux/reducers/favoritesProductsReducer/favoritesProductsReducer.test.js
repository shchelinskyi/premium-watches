import {favoritesProductsTypes} from "../../types";
import {favoritesProductsReducer} from "./favoritesProductsReducer";

describe("test favoritesProductsReducer", () => {

    test("testing initial state", () => {
        expect(favoritesProductsReducer(undefined, {})).toEqual([])
    });

    test("should handle ADD_PRODUCT_TO_FAVORITES", () => {
        const action = {type: favoritesProductsTypes.ADD_PRODUCT_TO_FAVORITES,
            payload: {id:1, name: "Watch 1"}};
        expect(favoritesProductsReducer(undefined, action)).toEqual([{id:1, name: "Watch 1"}]);
    });

    test("should handle REMOVE_PRODUCT_FROM_FAVORITES", () => {
        const action = {type: favoritesProductsTypes.REMOVE_PRODUCT_FROM_FAVORITES,
            payload: {id:1, name: "Watch 1"}};

        const someState = [{id:1, name: "Watch 1"}, {id:5, name: "Watch 5"}];
        expect(favoritesProductsReducer(someState, action)).toEqual([{id:5, name: "Watch 5"}]);
    });

    test("should handle UNKNOWN_ACTION_TYPE", () => {

        const action = {type: "UNKNOWN_ACTION_TYPE",  payload: {id:1, name: "Watch 1"}};

        const currentState  = [{id:1, name: "Watch 1"}, {id:5, name: "Watch 5"}];
        expect(favoritesProductsReducer(currentState, action)).toEqual(currentState);
    });
})
