import st from "./ProductTable.module.scss";
import {ProductTableItem} from "../index";


const ProductTable = ({sortedProducts}) => {

      return (
        <div className={st.container}>
            {!!sortedProducts &&
                sortedProducts.map(({id, article, price}) => (<ProductTableItem key={id} product={({id, price, article})}/>))}
        </div>
    );
};

export default ProductTable;
