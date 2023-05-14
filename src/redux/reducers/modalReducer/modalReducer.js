import {modalTypes} from "../../types";

const defaultState = {
    openedAddProductModal: false,
    openedDelProductModal: false,
    openedDelFavoriteModal: false,
    openedPurchaseModal: false,
    selectedProduct: {}
};

export const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case modalTypes.OPEN_ADD_PRODUCT_MODAL:
            return {
                ...state,
                openedAddProductModal: true,
                openedDelProductModal: false,
                openedDelFavoriteModal: false,
                openedPurchaseModal: false,
                selectedProduct: action.payload,
            };
        case modalTypes.OPEN_DEL_PRODUCT_MODAL:
            return {
                ...state,
                openedAddProductModal: false,
                openedDelProductModal: true,
                openedDelFavoriteModal: false,
                openedPurchaseModal: false,
                selectedProduct: action.payload,
            };
        case modalTypes.OPEN_DEL_FAVORITE_MODAL:
            return {
                ...state,
                openedAddProductModal: false,
                openedDelProductModal: false,
                openedDelFavoriteModal: true,
                openedPurchaseModal: false,
                selectedProduct: action.payload,
            };
        case modalTypes.OPEN_PURCHASE_MODAL:
            return {
                ...state,
                openedAddProductModal: false,
                openedDelProductModal: false,
                openedDelFavoriteModal: false,
                openedPurchaseModal: true
            };
        case modalTypes.CLOSE_ALL_MODALS:
            return {
                ...state, openedAddProductModal: false,
                openedDelFavoriteModal: false,
                openedDelProductModal: false,
                openedPurchaseModal: false,
                selectedProduct: {},
            };
        default:
            return state;

    }
};