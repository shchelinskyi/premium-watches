import { productsReducer } from './productsReducer';
import { productTypes } from '../../types';

describe("productsReducer", () => {

    test("should return the initial state", () => {
        expect(productsReducer(undefined, {})).toEqual([]);
    });

    test("should handle FETCH_DATA_SUCCESS", () => {
        const products = [
            {
                id: 1,
                name: "Vogard CZ F161",
                price: "12 680",
                url: "https://content.rozetka.com.ua/goods/images/big/227382860.jpg",
                article: "11223344",
                color: "black",
                factory: "Switzerland",
                mechanism : "Mechanical self-winding",
                guarantee: "24 months",
                type: "male"
            },
            {
                id: 2,
                name: "Vogard CZ 69",
                price: "14 078",
                url: "https://content2.rozetka.com.ua/goods/images/big/227383114.jpg",
                article: "12345677",
                color: "gold",
                factory: "Switzerland",
                mechanism : "Mechanical self-winding",
                guarantee: "24 months",
                type: "male"
            }];
        const action = {type: productTypes.FETCH_DATA_SUCCESS, payload:products};
        expect(productsReducer([], action)).toEqual(products);
    });

    test("should handle UNKNOWN_ACTION_TYPE", () => {

        const action = {type: "UNKNOWN_ACTION_TYPE"};

        const currentState = {
           products:  [{id:1, name: "Watch 1", price:10, quantity: 1}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        };
        expect(productsReducer(currentState, action)).toEqual(currentState);
    });

})