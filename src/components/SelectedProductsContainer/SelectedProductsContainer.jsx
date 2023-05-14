import {useSelector} from "react-redux";
import st from "./SelectedProductsContainer.module.scss";


const SelectedProductsContainer = () => {
    const favorites = useSelector(state =>  state.favorites);
        return (
            <div>
                <div className={st.selectedWrapper}>
                    {favorites.length > 0
                        ? <img className={st.selectedImg} src="./imgAll/star4.png" alt="selected"/>
                        : <img className={st.selectedImg} src="./imgAll/star.png" alt="selected"/>
                    }
                    <p className={st.selectedProducts}>({favorites.length})</p>
                </div>
            </div>
        );
    };


export default SelectedProductsContainer;