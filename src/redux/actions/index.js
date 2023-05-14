import {fetchProducts} from "./productsActions/productsActions";

import {
    openAddProductToCartModal,
    openDelProductFromCartModal,
    openDelProductFromFavoritesModal,
    openPurchaseModal,
    closeAllModals
} from "./modalActions/modalActions";

import {
    addProductToCart,
    removeOneProductFromCart,
    removeProductFromCart,
    updateSum,
    emptyShoppingCart,
    openCartForm,
    closeCartForm,
    setOrderNumber
} from "./cartProductsActions/cartProductsActions";


import {
    addProductToFavorites,
    removeProductFromFavorites
} from "./favoritesProductsActions/favoritesProductsActions";

export {
    fetchProducts,
    openAddProductToCartModal,
    openDelProductFromCartModal,
    openDelProductFromFavoritesModal,
    closeAllModals,
    openPurchaseModal,
    addProductToCart,
    removeOneProductFromCart,
    removeProductFromCart,
    updateSum,
    emptyShoppingCart,
    setOrderNumber,
    openCartForm,
    closeCartForm,
    addProductToFavorites,
    removeProductFromFavorites,
}