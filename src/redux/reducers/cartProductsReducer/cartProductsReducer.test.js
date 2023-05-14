import {cartProductsTypes} from "../../types";
import {cartProductsReducer} from "./cartProductsReducer";


describe("testing cartProductsReducer", () => {

    test("should the initial state", () => {
        const initState = {
            cartProducts: [],
            cartSum: "0",
            cartForm: false,
            orderNumber: "",
        }
        expect(cartProductsReducer(undefined,{})).toEqual(initState)
    });

    test("should handle ADD_PRODUCT_TO_CART 1 quantity", () => {
        const productToAdd = {id:1, name: "Watch 1", price:10}
        const action = {type: cartProductsTypes.ADD_PRODUCT_TO_CART,
            payload: productToAdd};
        const expectedState = {
            cartSum: "0",
            cartForm: false,
            orderNumber: "",
            cartProducts:  [{...productToAdd, quantity: 1}]
        }
        expect(cartProductsReducer(undefined, action)).toEqual(expectedState);
    });

    test("should handle ADD_PRODUCT_TO_CART more 1 quantity", () => {
        const productToAdd = {id:1, name: "Watch 1", price:10};
        const action = {type: cartProductsTypes.ADD_PRODUCT_TO_CART,
            payload: productToAdd};
        const initState = {
            cartSum: "0",
            cartForm: false,
            orderNumber: "",
            cartProducts:  [{id:1, name: "Watch 1", price:10, quantity: 1}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        };

        const expectedState = {
            cartSum: "0",
            cartForm: false,
            orderNumber: "",
            cartProducts:  [{id:1, name: "Watch 1", price:10, quantity: 2}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        }
        expect(cartProductsReducer(initState, action)).toEqual(expectedState);
    });

    test("should handle REMOVE_ONE_PRODUCT_FROM_CART 1 quantity", () => {
        const productToRemove = {id:1, name: "Watch 1", price:10};
        const action = {type: cartProductsTypes.REMOVE_ONE_PRODUCT_FROM_CART,
            payload: productToRemove};
        const initState = {
            cartSum: "0",
            cartForm: false,
            orderNumber: "",
            cartProducts:  [{id:1, name: "Watch 1", price:10, quantity: 2}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        };

        const expectedState = {
            cartSum: "0",
            cartForm: false,
            orderNumber: "",
            cartProducts:  [{id:1, name: "Watch 1", price:10, quantity: 1}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        }
        expect(cartProductsReducer(initState, action)).toEqual(expectedState);
    });

    test("should handle REMOVE_PRODUCT_FROM_CART", () => {
        const productToRemove = {id:1, name: "Watch 1", price:10};
        const action = {type: cartProductsTypes.REMOVE_PRODUCT_FROM_CART,
            payload: productToRemove};
        const initState = {
            cartSum: "0",
            cartForm: false,
            orderNumber: "",
            cartProducts:  [{id:1, name: "Watch 1", price:10, quantity: 1}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        };

        const expectedState = {
            cartSum: "0",
            cartForm: false,
            orderNumber: "",
            cartProducts:  [{id:2, name: "Watch 2", price:12, quantity: 1}]
        }
        expect(cartProductsReducer(initState, action)).toEqual(expectedState);
    });

    test("should handle UPDATE_SUM", () => {
        const action = {type: cartProductsTypes.UPDATE_SUM, payload: 100};
        const initState = {
            cartSum: "0",
            cartForm: false,
            orderNumber: 5,
            cartProducts:  [{id:1, name: "Watch 1", price:10, quantity: 1}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        };

        const expectedState = {
            cartSum: 100,
            cartForm: false,
            orderNumber: 5,
            cartProducts:  [{id:1, name: "Watch 1", price:10, quantity: 1}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        }
        expect(cartProductsReducer(initState, action)).toEqual(expectedState);
    });

    test("should handle EMPTY_SHOPPING_CART", () => {
        const action = {type: cartProductsTypes.EMPTY_SHOPPING_CART};
        const initState = {
            cartSum: "0",
            cartForm: false,
            orderNumber: "",
            cartProducts:  [{id:1, name: "Watch 1", price:10, quantity: 1}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        };

        const expectedState = {
            cartSum: "0",
            cartForm: false,
            orderNumber: "",
            cartProducts:  []
        }
        expect(cartProductsReducer(initState, action)).toEqual(expectedState);
    });

    test("should handle OPEN_CART_FORM", () => {
        const action = {type: cartProductsTypes.OPEN_CART_FORM};
        const initState = {
            cartSum: "0",
            cartForm: false,
            orderNumber: "",
            cartProducts:  [{id:1, name: "Watch 1", price:10, quantity: 1}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        };

        const expectedState = {
            cartSum: "0",
            cartForm: true,
            orderNumber: "",
            cartProducts:  [{id:1, name: "Watch 1", price:10, quantity: 1}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        }
        expect(cartProductsReducer(initState, action)).toEqual(expectedState);
    });

    test("should handle CLOSE_CART_FORM", () => {
        const action = {type: cartProductsTypes.CLOSE_CART_FORM};
        const initState = {
            cartSum: "0",
            cartForm: true,
            orderNumber: "",
            cartProducts:  [{id:1, name: "Watch 1", price:10, quantity: 1}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        };

        const expectedState = {
            cartSum: "0",
            cartForm: false,
            orderNumber: "",
            cartProducts:  [{id:1, name: "Watch 1", price:10, quantity: 1}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        }
        expect(cartProductsReducer(initState, action)).toEqual(expectedState);
    });

    test("should handle SET_ORDER_NUMBER", () => {
        const action = {type: cartProductsTypes.SET_ORDER_NUMBER, payload: 5};
        const initState = {
            cartSum: "0",
            cartForm: false,
            orderNumber: "",
            cartProducts:  [{id:1, name: "Watch 1", price:10, quantity: 1}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        };

        const expectedState = {
            cartSum: "0",
            cartForm: false,
            orderNumber: 5,
            cartProducts:  [{id:1, name: "Watch 1", price:10, quantity: 1}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        }
        expect(cartProductsReducer(initState, action)).toEqual(expectedState);
    });

    test("should handle UNKNOWN_ACTION_TYPE", () => {

        const productToAdd = {id:1, name: "Watch 1", price:10}
        const action = {type: "UNKNOWN_ACTION_TYPE",
            payload: productToAdd};

        const currentState = {
            cartSum: "0",
            cartForm: false,
            orderNumber: "",
            cartProducts:  [{id:1, name: "Watch 1", price:10, quantity: 1}, {id:2, name: "Watch 2", price:12, quantity: 1} ]
        };
        expect(cartProductsReducer(currentState, action)).toEqual(currentState);
    });

})

