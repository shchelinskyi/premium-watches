import {createContext, useState} from "react";

export const ProductContext = createContext({});

const ProductContextProvider = ({children}) => {
    const [viewType,setViewType] = useState('cards');

    return(
        <ProductContext.Provider value={{viewType, setViewType}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;