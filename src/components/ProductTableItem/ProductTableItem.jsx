import {useDispatch, useSelector} from "react-redux";
import st from "./ProductTableItem.module.scss";
import {Link} from "react-router-dom";
import {Button} from "../index";
import {addProductToFavorites, openAddProductToCartModal, removeProductFromFavorites} from "../../redux/actions";
import {useEffect, useState} from "react";


const ProductTableItem = ({product}) => {

    const products = useSelector(state => state.products);
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    const [isFavorite, setFavorite] = useState(false);

    useEffect(() => {
        setFavorite(false);
        if (favorites) {
            favorites.forEach((item) => {
                if (item.id === product?.id) {
                    setFavorite(true);
                }
            })
        }
    }, [favorites, product?.id]);

    const toggleFavorite = (obj) => {
        if (!isFavorite) {
            dispatch(addProductToFavorites(obj));
        } else {
            dispatch(removeProductFromFavorites(obj));
        }
        setFavorite(!isFavorite);
    };

    const openModalToAdd = (obj) => {
        dispatch(openAddProductToCartModal(obj));
    };

    const {id, url, name, price} = products.find(item => item.id === product?.id);
    const cartProduct = {id, price};
    const favProduct = {id};

    return (
        <div data-testid="productTableItem" className={st.productWrapper}>
            <div className={st.productContainer}>
                <img className={st.productImg} src={url} alt="product"/>

                    <div className={st.mainBlock}>
                        <Link className={st.link} to={`product/${id}`}>
                            <h2 className={st.productName}>{name}</h2>
                        </Link>
                        <div className={st.funcBlock}>
                            <Link className={st.link} to={`product/${id}`}>
                                <div className={st.price}>{price} $</div>
                            </Link>
                            <Button backgroundColor="teal" text="Add to Cart"
                                    onClick={() => openModalToAdd(cartProduct)}/>
                            <Link className={st.linkView} to={`product/${id}`}>
                                <Button backgroundColor="firebrick" text="View Product"/>
                            </Link>
                        </div>

                    </div>


            </div>


            {!isFavorite && <img className={st.cardSelected} src="./imgAll/star.png" alt="selected"
                                 onClick={() => toggleFavorite(favProduct)}/>}
            {!!isFavorite && <img className={st.cardSelected} src="./imgAll/star4.png" alt="selected"
                                  onClick={() => toggleFavorite(favProduct)}
            />}

        </div>
    );

}

export default ProductTableItem;
