import {useSelector} from "react-redux";
import st from './CartContainer.module.scss';
import {useEffect, useState} from "react";


const CartContainer = () => {
    const cartItems = useSelector((state) => state.cart.cartProducts);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setQuantity(0);
        cartItems.forEach(item => {
            setQuantity(prevState => prevState + item.quantity)
        })
    }, [cartItems]);

        return (
            <div className={st.cart}>
                <img className={st.cartImg} src="./imgAll/cart2.png" alt="cart"/>
                <p className={st.cartProducts}>Shopping cart</p>
                <p className={st.productNumber}>{quantity}</p>
            </div>
        );
    };

export default CartContainer;