import st from './CardList.module.scss';
import Card from "../Card";
import {useSelector} from "react-redux";
import {ProductTable, ViewSwitcher} from "../index";
import {useContext, useEffect, useState} from "react";
import {ProductContext} from "../../context/ProductContextProvider";

const CardList = () => {

    const products = useSelector((state) => state.products);

    const {viewType} = useContext(ProductContext);

    const [sortedProducts, setSortedProducts] = useState(products);
    const sortByPriceUp= () => {
        const sorted = [...sortedProducts].sort((a, b) => {
            return Number(a.price.replace(/\s+/g, '')) - Number(b.price.replace(/\s+/g, ''))
        });
        setSortedProducts(sorted);
    };
    const sortByPriceDown = () => {
        const sorted = [...sortedProducts].sort((a, b) => {
            return Number(b.price.replace(/\s+/g, '')) - Number(a.price.replace(/\s+/g, ''))
        });
        setSortedProducts(sorted);
    };
    const sortByName = () => {
        const sorted = [...sortedProducts].sort((a, b) => a.name.localeCompare(b.name));
        setSortedProducts(sorted);
    };
    const handleSortChange = (event) => {

        if (event.target.value === 'priceUp') {
            sortByPriceUp();
        } else if (event.target.value === 'priceDown') {
            sortByPriceDown();
        } else if (event.target.value === 'name') {
            sortByName();
        }

    }

    useEffect(() => {setSortedProducts(products)}, [products])

    return (
        <div className={st.cardListWrapper}>
            <h1 className={st.title}>PREMIUM WATCHES</h1>
            <img className={st.banner} src="./imgAll/brand4.webp" alt="brand"/>
            <div className={st.switcher}>
                <div className={st.sortBlock}>
                    <label className={st.sortLabel} htmlFor="sort-select">Sort By:</label>
                    <select className={st.sortSelect} id="sort-select" onChange={handleSortChange}>
                        <option value="none" defaultChecked>None</option>
                        <option value="priceUp">Price &#8593;</option>
                        <option value="priceDown">Price &#8595;</option>
                        <option value="name">Name</option>
                    </select>
                </div>
                <ViewSwitcher/>
            </div>

            {viewType === "cards"
                ?
                (<div className={st.cardListContainer}>
                    {sortedProducts.map((product) =>
                        (<Card key={product.id} product={({id: product.id, price: product.price})}/>))}
                </div>)
                :
                (<div className={st.productTableContainer}>
                    <ProductTable sortedProducts={sortedProducts}/>
                </div>)
            }
        </div>
    );
};

export default CardList;