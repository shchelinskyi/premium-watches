import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import App from './App';
import store from "./redux/store";
import {Provider} from "react-redux";
import './index.scss';
import ProductContextProvider from "./context/ProductContextProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ProductContextProvider>
            <HashRouter>
                <App/>
            </HashRouter>
        </ProductContextProvider>
    </Provider>
);

