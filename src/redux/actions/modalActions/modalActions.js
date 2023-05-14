import {modalTypes} from "../../types";

export const openAddProductToCartModal = (obj) => {
    document.body.style.overflow = 'hidden';
    return {type: modalTypes.OPEN_ADD_PRODUCT_MODAL, payload: obj}
};

export const openDelProductFromCartModal = (obj) => {
    document.body.style.overflow = 'hidden';
    return {type: modalTypes.OPEN_DEL_PRODUCT_MODAL, payload: obj}
};

export const openDelProductFromFavoritesModal = (obj) => {
    document.body.style.overflow = 'hidden';
    return {type: modalTypes.OPEN_DEL_FAVORITE_MODAL, payload: obj}
};

export const closeAllModals = () => {
    document.body.style.overflow = 'auto';
    return {type: modalTypes.CLOSE_ALL_MODALS}
};

export const openPurchaseModal =() => {
    document.body.style.overflow = 'hidden';
    return {type: modalTypes.OPEN_PURCHASE_MODAL}
};