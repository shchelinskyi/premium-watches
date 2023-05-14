import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewSwitcher from "./ViewSwitcher";
import ProductContextProvider from "../../../context/ProductContextProvider";

describe("Testing ViewSwitcher", () => {

    beforeEach(() => {jest.clearAllMocks()});

    test("Render ViewSwitcher", () => {
        render(<ViewSwitcher/>);
        const btnCards = screen.getByTestId("btnCards");
        const btnList = screen.getByTestId("btnList");
        expect(btnCards).toBeInTheDocument();
        expect(btnList).toBeInTheDocument();
    });

    test("Test className 'active'", () => {

        const setViewType = jest.fn();
        const switcher = render(
            <ProductContextProvider value={{setViewType}}>
                <ViewSwitcher />
            </ProductContextProvider>
        );

        const btnCards = screen.getByTestId("btnCards");
        const btnList = screen.getByTestId("btnList");


        fireEvent.click(btnList);


        expect(btnList).toHaveClass("active");
        expect(btnCards).not.toHaveClass("active");
        expect(switcher).toMatchSnapshot();

        fireEvent.click(btnCards);

        expect(btnList).not.toHaveClass("active");
        expect(btnCards).toHaveClass("active");
        expect(switcher).toMatchSnapshot();
    });

})

