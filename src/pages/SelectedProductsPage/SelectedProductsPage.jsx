import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {openDelProductFromFavoritesModal} from "../../redux/actions";
import st from './SelectedProductsPage.module.scss'

const SelectedProductsPage = () => {
    const products = useSelector(state =>  state.products);
    const favorites = useSelector(state =>  state.favorites);
    const dispatch = useDispatch();

    const openDelModal = (obj) => {
        dispatch(openDelProductFromFavoritesModal(obj));
    }

    return (
        <div className={st.wrapper}>
            <div className={st.title} data-testid="selectedProducts">Selected Products
                <img className={st.selectedImg} src="./imgAll/star6.png" alt="selected"/>
            </div>
            <div className={st.selectedMain}>
                <h2 className={st.selectedTitle}>Selected products:</h2>
                <div className={st.selectedList}>
                    {!!favorites && favorites.map((obj) => {
                            const objFullData = products.find((product) => product.id === obj?.id);
                            return (
                                <div key={objFullData?.id}
                                     className={st.selectedProduct}>
                                    <div className={st.selectedLeftBlock}>
                                        <Link className={st.link} to={`/product/${objFullData?.id}`}>
                                            <img className={st.cartLogo} src={objFullData?.url} alt="logo"/>
                                        </Link>
                                        <Link className={st.link} to={`/product/${objFullData?.id}`}>
                                            <div>{objFullData?.name}</div>
                                        </Link>
                                    </div>
                                    <div className={st.selectedRightBlock}>
                                        <button className={st.delBtn} onClick={() => openDelModal(objFullData)}>✖</button>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
};


export default SelectedProductsPage;
