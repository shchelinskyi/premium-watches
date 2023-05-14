import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import cn from "classnames";
import st from "./Header.module.scss";
import {CartContainer, SelectedProductsContainer} from "../index";
import {useSelector} from "react-redux";

const Header = () => {

    const [isHamMenuOpened, setHamMenuOpened] = useState(false);

    const [isSearchFormOpened, setSearchFormOpened] = useState(false);

    const products = useSelector((state) => state.products);

    const [searchTerm, setSearchTerm] = useState('');

    const [searchResults, setSearchResults] = useState(products);

    const searchRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (searchRef.current && !searchRef.current.contains(event.target) && event.target !== btnRef.current) {
                setSearchTerm("");
                setSearchFormOpened(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchRef]);

    const handleOpenedHamMenu = () => {
        setSearchFormOpened(false);
        setHamMenuOpened(isHamMenuOpened => !isHamMenuOpened);
    }

    const handleOpenedSearchForm = () => {
        setSearchTerm("");
        setHamMenuOpened(false);
        setSearchFormOpened(isSearchFormOpened => !isSearchFormOpened);
    }

    const handleSearchChange = event => {

        setSearchTerm(event.target.value);

        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
            product.article.toLowerCase().includes(event.target.value.toLowerCase())
        );

        setSearchResults(filteredProducts);

    };

    return (

        <header className={st.header}>

            <div className={st.headerContainer}>

                <div className={st.titleBlock}>
                    <Link to="/" data-testid="home2">
                        <img className={st.logo} src="./imgAll/watch.jpg" alt="logo"/>
                    </Link>
                    <div className={st.titleText}>
                        <h3 className={st.title}>PREMIUM WATCHES</h3>
                        <p className={st.slogan}>Time is on your side with our watches</p>
                    </div>
                </div>

                <div className={st.searchBlock}>
                    <div className={cn(st.searchForm, isSearchFormOpened && st.searchFormActive)} ref={searchRef}>
                        <input className={st.searchInput}
                               value={searchTerm}
                               type="text" placeholder="I'm looking for..."
                               onChange={handleSearchChange}/>
                        {searchTerm.length > 0 &&
                        <button className={st.btnCloseForm} onClick={handleOpenedSearchForm}>✖</button>
                        }

                        {searchTerm.length > 2 && <ul className={st.searchResult}>
                            {searchResults.length > 0
                                ? searchResults.map(({id, name, url}) => (

                                    <li className={st.resultItem} key={id}>
                                        <Link className={st.searchLink} to={`product/${id}`}>
                                            <img className={st.imgSearchResult} src={url} alt="logo"/>
                                            <p>{name}</p>
                                        </Link>
                                    </li>
                                ))
                                : <li className={st.searchNoResult}>No matches</li>}
                        </ul>}

                    </div>

                </div>

                <div className={st.funcBlock}>

                    <div className={cn(st.hamMenu, !!isHamMenuOpened && st.hamMenuActive)} onClick={handleOpenedHamMenu}>
                        <span className={cn(st.line, !!isHamMenuOpened ? st.line1Active : st.line1)}></span>
                        <span className={cn(st.line, !!isHamMenuOpened ? st.line2Active : st.line2)}></span>
                        <span className={cn(st.line, !!isHamMenuOpened ? st.line3Active : st.line3)}></span>
                    </div>

                    <nav>
                        <ul className={st.navBlock}>
                            <li>
                                <Link className={cn(st.link)} to="/" data-testid="home">
                                    <img className={st.iconHome} src="./imgAll/home.png" alt="home"/>
                                </Link>
                            </li>
                            <li>
                                <Link data-testid="cartLink" className={st.link} to="/cart">
                                    {<CartContainer/>}
                                </Link>
                            </li>
                            <li>
                                <Link data-testid="selectedLink" className={st.link} to="/selected">
                                    {<SelectedProductsContainer/>}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <svg ref={btnRef} className={st.searchIcon} onClick={handleOpenedSearchForm}
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 64 64" width="128px" height="128px">
                        <path
                            d="M 24 2.8886719 C 12.365714 2.8886719 2.8886719 12.365723 2.8886719 24 C 2.8886719 35.634277 12.365714 45.111328 24 45.111328 C 29.036552 45.111328 33.664698 43.331333 37.298828 40.373047 L 52.130859 58.953125 C 52.130859 58.953125 55.379484 59.435984 57.396484 57.333984 C 59.427484 55.215984 58.951172 52.134766 58.951172 52.134766 L 40.373047 37.298828 C 43.331332 33.664697 45.111328 29.036548 45.111328 24 C 45.111328 12.365723 35.634286 2.8886719 24 2.8886719 z M 24 7.1113281 C 33.352549 7.1113281 40.888672 14.647457 40.888672 24 C 40.888672 33.352543 33.352549 40.888672 24 40.888672 C 14.647451 40.888672 7.1113281 33.352543 7.1113281 24 C 7.1113281 14.647457 14.647451 7.1113281 24 7.1113281 z"/>
                    </svg>
                </div>

            </div>


            {!!isHamMenuOpened &&
                <nav>
                    <ul className={st.hamMenuContent}>
                        <li>
                            <Link className={cn(st.link, st.linkMenuItem)} to="/" onClick={handleOpenedHamMenu}>
                                <img className={st.itemIcon} src="./imgAll/home.png" alt="home"/>
                                <span className={st.itemTitle}>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cn(st.link, st.linkMenuItem)} to="/cart" onClick={handleOpenedHamMenu}>
                                <img className={st.itemIcon} src="./imgAll/cart2.png" alt="cart"/>
                                <span className={st.itemTitle}>Shopping cart</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cn(st.link, st.linkMenuItem)} to="/selected" onClick={handleOpenedHamMenu}>
                                <img className={st.itemIcon} src="./imgAll/star9.png" alt="star"/>
                                <span className={st.itemTitle}>Favorites</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            }


        </header>
    )
}

export default Header;