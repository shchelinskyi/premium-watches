import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Modal} from './components';
import modals from "./utils";
import {
    addProductToCart,
    closeAllModals,
    removeProductFromCart,
    removeProductFromFavorites,
    updateSum
} from "./redux/actions";
import {calculateSum, updateItemFromLocalStorage} from "./tools";
import AppRouter from "./router/AppRouter";

const App = () => {

    const dispatch = useDispatch();

    const openedAddProductModal = useSelector(state => state.modals.openedAddProductModal);
    const openedDelProductModal = useSelector(state =>  state.modals.openedDelProductModal);
    const openedDelFavoriteModal = useSelector(state =>  state.modals.openedDelFavoriteModal);
    const openedPurchaseModal = useSelector(state =>  state.modals.openedPurchaseModal);
    const orderNumber = useSelector(state => state.cart.orderNumber);
    const selectedProductID = useSelector(state => state.modals.selectedProduct);
    const cartProducts = useSelector(state => state.cart.cartProducts);
    const favorites = useSelector(state=>  state.favorites);

    useEffect(() => {
        updateItemFromLocalStorage("items", cartProducts);
        const sum = calculateSum([...cartProducts]);
        dispatch(updateSum(sum));
    }, [cartProducts, dispatch]);

    useEffect(() => {
        updateItemFromLocalStorage("favoriteItems", favorites)
    }, [favorites]);
    const addToCart = () => {
        dispatch(addProductToCart(selectedProductID));
        dispatch(closeAllModals());
    }
    const delFromCart = () => {
        dispatch(removeProductFromCart(selectedProductID));
        dispatch(closeAllModals());
    }
    const delFromFavorites = () => {
        dispatch(removeProductFromFavorites(selectedProductID));
        dispatch(closeAllModals());
    }
    const closeModal = () => {
        dispatch(closeAllModals());
    };

    const actionsAddProductModal = <>
        <Button backgroundColor={"firebrick"} text={"OK"} onClick={addToCart} addClass="btnAddProduct"/>
        <Button backgroundColor={"firebrick"} text={"Cancel"} onClick={closeModal} addClass="btnAddProduct"/>
    </>;

    const actionsDelProductModal = <>
        <Button backgroundColor={"#92d2f4"} text={"OK"} onClick={delFromCart} addClass="btnDelModal"/>
        <Button backgroundColor={"#92d2f4"} text={"Cancel"} onClick={closeModal} addClass="btnDelModal"/>
    </>;

    const actionsDelFavoriteModal = <>
        <Button backgroundColor={"#92d2f4"} text={"OK"} onClick={delFromFavorites} addClass="btnDelModal"/>
        <Button backgroundColor={"#92d2f4"} text={"Cancel"} onClick={closeModal} addClass="btnDelModal"/>
    </>;

    return (
            <div>
             <AppRouter/>

                {!!openedAddProductModal &&
                    <Modal header={modals.addProduct.title} closeButton={true}
                           text={modals.addProduct.text} onClose={closeModal}
                           actions={actionsAddProductModal}
                           typeModal={"addProductModal"}/>}

                {!!openedDelProductModal &&
                    <Modal header={modals.delProduct.title} closeButton={true}
                           text={modals.delProduct.text} onClose={closeModal}
                           actions={actionsDelProductModal}
                           typeModal={"delModal"}/>}

                {!!openedDelFavoriteModal &&
                    <Modal header={modals.delFavorite.title} closeButton={true}
                           text={modals.delFavorite.text} onClose={closeModal}
                           actions={actionsDelFavoriteModal}
                           typeModal={"delModal"}/>}

                {!!openedPurchaseModal &&
                    <Modal header={modals.completedPurchase.title} closeButton={true}
                           text={`${modals.completedPurchase.text} ${orderNumber}`} onClose={closeModal}
                           typeModal={"completedPurchaseModal"}/>}
            </div>
    );
}

export default App;


// "homepage": "https://shchelinskyi.github.io/watch",