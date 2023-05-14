import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {fetchProducts} from "./actions";
import {
    productsReducer,
    modalReducer,
    cartProductsReducer,
    favoritesProductsReducer} from "./reducers";

const rootReducer = combineReducers({
    products: productsReducer,
    modals: modalReducer,
    cart: cartProductsReducer,
    favorites: favoritesProductsReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(fetchProducts("./products.json"));

// const updateLocalStorage = () => {
//     const data = store.getState();
//     const cartProducts = data?.cart.cartProducts;
//     const favorites = data?.favorites;
//     window.localStorage.setItem("items", JSON.stringify(cartProducts));
//     window.localStorage.setItem("favoriteItems", JSON.stringify(favorites));
// }
//
// store.subscribe(() => updateLocalStorage());

export default store;