import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {Button} from '../../components';
import {addProductToFavorites, openAddProductToCartModal, removeProductFromFavorites} from "../../redux/actions";
import cn from 'classnames';
import st from './Product.module.scss';
import {NoPage} from "../index";

function Product() {

    const [isFavorite, setFavorite] = useState(false);
    let cartProduct, favProduct;
    const products = useSelector(state => state.products);
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const productID = parseInt(useParams()?.id);

    const product = products.find((item) => item.id === productID);

    if (!!product) {
        const {price} = product;
        cartProduct = {id: productID, price: price};
        favProduct = {id: productID};
    }

    useEffect(() => {
        setFavorite(false);
        if (favorites) {
            favorites.forEach((item) => {
                if (item.id === favProduct?.id) {
                    setFavorite(true);
                }
            })
        }
    }, [favorites, favProduct]);

    const changePage = (actionType) => {
        if (productID >= 1 && productID <= products.length) {
            if (actionType === "forward") {
                const page = productID + 1;
                navigate("/product/" + page);
            } else if (actionType === "back") {
                const page = productID - 1;
                navigate("/product/" + page);
            }
        }
    }

    const toggleFavorite = (object) => {
        if (!isFavorite) {
            dispatch(addProductToFavorites(object));
        } else {
            dispatch(removeProductFromFavorites(object));
        }

        setFavorite(!isFavorite);
    };

    const openModalToAdd = (obj) => {
        dispatch(openAddProductToCartModal(obj));
    };

    return (
        <div className={st.wrapper}>
            {!!product &&
                <>
                    <h2 className={st.title}>{product.name}</h2>
                    <div className={st.mainContent}>
                        <button className={st.btnChangePage} onClick={() => changePage("back")}
                                style={{visibility: productID > 1 ? "visible" : "hidden"}}>
                            <img className={st.imgChangePage} src="./imgAll/back.png" alt="back"/>
                        </button>
                        <div className={st.productContainer}>
                            <div className={st.product}>
                                <div className={st.imgContainer}>
                                    <img className={st.productImg} src={product.url} alt="product"/>
                                </div>
                                <div className={st.productPrice}>{product.price} $</div>
                                <div className={st.productArticle}>Article: {product?.article} </div>
                                <Button backgroundColor="firebrick" text="Add to Cart"
                                        onClick={() => openModalToAdd(cartProduct)}/>

                                {!isFavorite && <img className={st.cardSelected} src="./imgAll/star7.png" alt="selected"
                                                     onClick={() => toggleFavorite(favProduct)}/>}
                                {!!isFavorite &&
                                    <img className={st.cardSelected} src="./imgAll/star4.png" alt="selected"
                                         onClick={() => toggleFavorite(favProduct)}/>}
                            </div>
                            <div className={st.about}>
                                <h1 className={st.titleAbout}>Characteristics:</h1>
                                <div className={st.option}>
                                    <div className={st.optionTitle}>Assembly factory:</div>
                                    <div className={st.optionValue}>
                                        <img className={st.countryImg} src={`./imgAll/country/${product?.factory}.png`}
                                             alt="product"/>
                                        {product?.factory}
                                    </div>
                                </div>
                                <div className={st.option}>
                                    <div className={st.optionTitle}>Watch mechanism:</div>
                                    <div className={cn(st.optionValue, st.valueMechanism)}>{product?.mechanism}</div>
                                </div>
                                <div className={st.option}>
                                    <div className={st.optionTitle}>Guarantee:</div>
                                    <div className={st.optionValue}>{product?.guarantee}</div>
                                </div>
                                <div className={st.option}>
                                    <div className={st.optionTitle}>Type:</div>
                                    <div className={st.optionValue}>{product?.type}</div>
                                </div>
                                <div className={st.option}>
                                    <div className={st.optionTitle}>Color:</div>
                                    <div className={st.optionValue}>
                                        <div className={st.colorElement}
                                             style={{backgroundColor: product?.color}}></div>
                                        {product?.color}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button className={cn(st.btnChangePage, st.btnRight)} onClick={() => changePage("forward")}
                                style={{visibility: productID < products.length ? "visible" : "hidden"}}>
                            <img className={st.imgChangePage} src="./imgAll/next.png" alt="next"/>
                        </button>
                    </div>
                </>
            }
            {!product && <NoPage/>}
        </div>
    );
}

export default Product;