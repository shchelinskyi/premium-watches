import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {Button} from "../../components";
import {Link} from "react-router-dom";
import {addProductToFavorites,
    removeProductFromFavorites,
    openAddProductToCartModal} from "../../redux/actions";
import st from './Card.module.scss';

const Card = ({product}) => {

    const products = useSelector(state =>  state.products);
    const favorites = useSelector(state =>  state.favorites);
    const dispatch = useDispatch();
    const [isFavorite, setFavorite] = useState(false);

    useEffect(() => {
        setFavorite(false);
        if (favorites) {
            favorites.forEach((item) => {
                if (item.id === product?.id) {
                    setFavorite( true);
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
    const cartProduct = {id:id, price: price};
    const favProduct = {id:id};

    return (
        <div data-testid="card" className={st.cardWrapper}>
            <img className={st.cardImg} src={url} alt="product"/>
            <Link className={st.linkName} to={`product/${id}`}>
            <h2 className={st.productName}>{name}</h2>
            </Link>
            <Link className={st.link} to={`product/${id}`}>
            <div className={st.productPrice}>{price} $</div>
            </Link>
            <div className={st.btnBlock}>
                <Link className={st.link} to={`product/${id}`}>
                    <Button backgroundColor="firebrick" text="View Product"/>
                </Link>
                <Button backgroundColor="teal" text="Add to Cart" onClick={()=>openModalToAdd(cartProduct)}/>
            </div>


            {!isFavorite && <img className={st.cardSelected} src="./imgAll/star.png" alt="selected"
                                 onClick={()=> toggleFavorite(favProduct)} />}
            {!!isFavorite && <img className={st.cardSelected} src="./imgAll/star4.png" alt="selected"
                                  onClick={()=> toggleFavorite(favProduct)}
            />}

        </div>
    );

}


Card.propTypes = {
    product:PropTypes.object,
}
export default Card;