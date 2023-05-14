import st from "./ShippingDetails.module.scss";
import {Form} from "../index";
import cn from "classnames";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


const ShippingDetails = () => {
    const products = useSelector((state) => state.products);
    const cartProducts = useSelector((state) => state.cart.cartProducts);
    const formIsOpened = useSelector(state => state.cart.cartForm);
    const sum = useSelector((state) => state.cart.cartSum);

    return(
        <div className={st.shippingDetails}>
            <div>{!!formIsOpened && <Form/>}</div>
            <div>{!!formIsOpened && <div className={cn(st.orderWrapper)}>
                <h2 className={st.orderTitle}>YOUR ORDER</h2>
                <div className={cn(st.ordersContainer, cartProducts.length > 5 ? st.ordersOverflow : null)}>
                    {!!cartProducts && cartProducts.map((obj) => {
                            const {quantity} = obj;
                            const {id, url, name, price} = products.find(product => product.id === obj.id);
                            return (
                                <div key={id} className={st.orderedProduct}>
                                    <div className={st.orderedLeftBlock}>
                                        <Link className={st.link} to={`/product/${id}`}>
                                            <img className={st.orderedProductLogo} src={url} alt=""/>
                                        </Link>

                                    </div>
                                    <div className={st.orderedRightBlock}>
                                        <Link className={st.nameOrderedProduct} to={`/product/${id}`}>
                                            <div>{name}</div>
                                        </Link>
                                        <div className={st.productValue}>
                                            <div className={st.orderedProductQuantity}>{quantity}</div>
                                            <div>{(Number(price.replace(/\s+/g, '')) * quantity).toLocaleString('ru')} $</div>
                                        </div>

                                    </div>
                                </div>
                            )

                        }
                    )}
                    <h2 className={st.orderedTotal}>Total: {sum} $</h2>
                </div>
            </div>}</div>
        </div>
    )
}

export default  ShippingDetails;