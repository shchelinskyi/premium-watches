import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ShippingDetails} from "../../components";
import {
    addProductToCart,
    removeOneProductFromCart,
    openDelProductFromCartModal, openCartForm
} from "../../redux/actions";
import st from './CartPage.module.scss'


const CartPage = () => {

    const products = useSelector((state) => state.products);
    const cartProducts = useSelector((state) => state.cart.cartProducts);
    const formIsOpened = useSelector(state => state.cart.cartForm);
    const sum = useSelector((state) => state.cart.cartSum);
    const dispatch = useDispatch();

    const openForm = () => {
        dispatch(openCartForm());
    }

    const openDelModal = (obj) => {
        dispatch(openDelProductFromCartModal(obj));
    };

    const increaseQuantity = (obj) => {
        dispatch(addProductToCart(obj));
    }

    const decreaseQuantity = (obj) => {
        dispatch(removeOneProductFromCart(obj));
    }

    return (
        <div className={st.cartWrapper}>
            <div className={st.pageTitle} data-testid="shoppingCart">
                Shopping Cart
                <img className={st.pageImg} src="./imgAll/cartTitle4.png" alt="cart"/>
            </div>
            <div className={st.content}>
                {!formIsOpened
                    ? <div className={st.cartMain}>
                        <h2 className={st.cartTotal}>Total: {sum} $</h2>
                        <div className={st.cardList}>
                            {!!cartProducts && cartProducts.map((obj) => {
                                    const {quantity} = obj;
                                    const {id, url, name, price} = products.find(product => product.id === obj.id);
                                    return (
                                        <div key={id} className={st.cartProduct}>
                                            <div className={st.cartLeftBlock}>
                                                <Link className={st.link} to={`/product/${id}`}>
                                                    <img className={st.productLogo} src={url} alt=""/>
                                                </Link>
                                                <Link className={st.link} to={`/product/${id}`}>
                                                    <div className={st.productName}>{name}</div>
                                                </Link>
                                            </div>
                                            <div className={st.cartRightBlock}>
                                                <div className={st.quantityBlock}>
                                                    <button className={st.quantityBtn} onClick={() => decreaseQuantity(obj)}
                                                            disabled={quantity === 1}>-
                                                    </button>
                                                    <div className={st.quantity}>{quantity}</div>
                                                    <button className={st.quantityBtn}
                                                            onClick={() => increaseQuantity(obj)}>+
                                                    </button>
                                                </div>
                                                <div className={st.priceBlock}>
                                                    {(Number(price.replace(/\s+/g, '')) * quantity).toLocaleString('ru')} $
                                                </div>
                                            </div>
                                            <button className={st.delBtn} onClick={() => openDelModal(obj)}>✖</button>
                                        </div>
                                    )

                                }
                            )}
                            {cartProducts.length > 0 &&
                                <button className={st.checkoutBtn} onClick={openForm}>Checkout</button>}
                        </div>
                    </div>
                    : <ShippingDetails/>
                }
            </div>
        </div>
    )
};
//
export default CartPage;