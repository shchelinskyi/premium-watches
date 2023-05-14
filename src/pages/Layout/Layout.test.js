import {fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRouter from "../../tests/helpers/renderWithRouter";

describe("testing Layout", () => {

    test("testing cartLink and back to home", () => {
        renderWithRouter(null, "/");
        const cartLink = screen.getByTestId("cartLink");
        const home = screen.getByTestId("home");

        fireEvent.click(cartLink);
        expect(screen.getByTestId("shoppingCart")).toBeInTheDocument();

        fireEvent.click(home);
        expect(screen.getByText(/cards/i)).toBeInTheDocument();
    });

    test("testing selectedLink and back to home2",  () => {
        renderWithRouter(null, "/");

        const selectedLink = screen.getByTestId("selectedLink");
        const home2 = screen.getByTestId("home2");

        fireEvent.click(selectedLink);

        expect(screen.getByTestId("selectedProducts")).toBeInTheDocument();


        fireEvent.click(home2);


        expect(screen.getByText(/cards/i)).toBeInTheDocument();
    });

    test("Layout snapshot", ()=> {
        const component = renderWithRouter(null, "/");;
        expect(component).toMatchSnapshot();
    });

})