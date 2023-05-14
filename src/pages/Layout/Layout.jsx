import {Outlet} from 'react-router-dom';
import {Header, Footer} from '../../components';
import st from "./Layout.module.scss";

const Layout = () => {

    return (
        <div className={st.wrapper}>
            <Header/>
            <div className={st.content}>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;