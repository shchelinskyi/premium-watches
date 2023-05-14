import {Link} from 'react-router-dom';
import st from './NoPage.module.scss';
const NoPage = () => {
    return (
        <div className={st.wrapper}>
            <h1 className={st.title}>ERROR 404</h1>
            <div className={st.description}>Page not found</div>
            <Link className={st.link} to="/">
                Go to home page
            </Link>
        </div>
    )
}

export default NoPage;