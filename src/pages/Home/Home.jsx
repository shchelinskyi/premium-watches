import CardList from "../../components/CardList";
import {useSelector} from "react-redux";
import st from "./Home.module.scss";


const Home = ()=> {
    const products = useSelector((state) => state.products);
    return(
        <div className={st.wrapper}>
            {!!products && <CardList/>}
            {!products && <div className={st.wrapper}>
                <h1 className={st.title}>ERROR 404</h1>
                <div className={st.description}>Page not found</div>
            </div>}
        </div>
    )
}

export default Home;




