import {productTypes} from "../../types";
export const fetchDataSuccess = (data) => {
   return {type: productTypes.FETCH_DATA_SUCCESS, payload: data}
};

export const fetchProducts = (url) => async (dispatch) => {
    try {
       const response = await fetch(url);
       const products = await response.json();
       dispatch(fetchDataSuccess(products));
    } catch(error) {
       console.log(error);
    }
}

