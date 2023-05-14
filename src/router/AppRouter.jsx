import React from 'react';
import {Route, Routes} from "react-router-dom";
import {CartPage, Home, Layout, NoPage, Product, SelectedProductsPage} from "../pages";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="product" element={<NoPage />} />
                    <Route path="product/:id" element={<Product/>} />
                    <Route path="cart" element={<CartPage/>}/>
                    <Route path="selected" element={<SelectedProductsPage/>}/>
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;
