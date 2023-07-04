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


export default store;