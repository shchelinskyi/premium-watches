import {modalTypes} from "../../types";
import {modalReducer} from "./modalReducer";

describe("test modalReducer", () => {

    test("should the initial state", () =>{
        const initState = {
            openedAddProductModal: false,
            openedDelProductModal: false,
            openedDelFavoriteModal: false,
            openedPurchaseModal: false,
            selectedProduct: {}
        };
        expect(modalReducer(undefined, {})).toEqual(initState);
    });

    test("should handle OPEN_ADD_PRODUCT_MODAL", () => {
        const action = {type: modalTypes.OPEN_ADD_PRODUCT_MODAL,
            payload: {id:1, name: "Watch 1"}};
        const expectedState = {
            openedAddProductModal: true,
            openedDelProductModal: false,
            openedDelFavoriteModal: false,
            openedPurchaseModal: false,
            selectedProduct: {id:1, name: "Watch 1"}
        }
        expect(modalReducer(undefined, action)).toEqual(expectedState);
    });

    test("should handle OPEN_DEL_PRODUCT_MODAL", () => {
        const action = {type: modalTypes.OPEN_DEL_PRODUCT_MODAL,
            payload: {id:1, name: "Watch 1"}};
        const expectedState = {
            openedAddProductModal: false,
            openedDelProductModal: true,
            openedDelFavoriteModal: false,
            openedPurchaseModal: false,
            selectedProduct: {id:1, name: "Watch 1"}
        }
        expect(modalReducer(undefined, action)).toEqual(expectedState);
    });

    test("should handle OPEN_DEL_FAVORITE_MODAL", () => {
        const action = {type: modalTypes.OPEN_DEL_FAVORITE_MODAL,
            payload: {id:1, name: "Watch 1"}};
        const expectedState = {
            openedAddProductModal: false,
            openedDelProductModal: false,
            openedDelFavoriteModal: true,
            openedPurchaseModal: false,
            selectedProduct: {id:1, name: "Watch 1"}
        }
        expect(modalReducer(undefined, action)).toEqual(expectedState);
    });

    test("should handle OPEN_PURCHASE_MODAL", () => {
        const action = {type: modalTypes.OPEN_PURCHASE_MODAL};
        const expectedState = {
            openedAddProductModal: false,
            openedDelProductModal: false,
            openedDelFavoriteModal: false,
            openedPurchaseModal: true,
            selectedProduct: {},
        }
        expect(modalReducer(undefined, action)).toEqual(expectedState);
    });

    test("should handle CLOSE_ALL_MODALS", () => {
        const action = {type: modalTypes.CLOSE_ALL_MODALS};
        const expectedState = {
            openedAddProductModal: false,
            openedDelFavoriteModal: false,
            openedDelProductModal: false,
            openedPurchaseModal: false,
            selectedProduct: {},
        }
        expect(modalReducer(undefined, action)).toEqual(expectedState);
    });

    test("should handle UNKNOWN_ACTION_TYPE", () => {
        const action = {type: "UNKNOWN_ACTION_TYPE", payload: {
                payload: {id:1, name: "Watch 1"}
            }};
        const currentState = {
            openedAddProductModal: false,
            openedDelFavoriteModal: false,
            openedDelProductModal: false,
            openedPurchaseModal: false,
            selectedProduct: {},
        }
        expect(modalReducer(currentState, action)).toEqual(currentState);
    });

})