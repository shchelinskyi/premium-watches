import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from "../../redux/store"
import {Provider} from "react-redux";
import Modal from "./Modal";

describe("test Modal", () => {
    test("show modal with props", () => {
        const btnClick = jest.fn();
        const btnActions =
            <div>
                <button data-testid="btn1" onClick={btnClick}>OK</button>
                <button data-testid="btn2" onClick={btnClick}>Cancel</button>
            </div>

        render(
            <Provider store={store}>
                <Modal header={"header text"} text={"main text"}
                       typeModal={"addProductModal"}
                       actions={btnActions}/>
            </Provider>
        );
        expect(screen.getByText(/header text/i)).toBeInTheDocument();
        expect(screen.getByText(/main text/i)).toBeInTheDocument();
        expect(screen.getByText(/ok/i)).toBeInTheDocument();
        expect(screen.getByText(/cancel/i)).toBeInTheDocument();
        expect(screen.getByTestId("modal")).toHaveClass("addProductModal");

        fireEvent.click(screen.getByText(/ok/i));
        fireEvent.click(screen.getByText(/cancel/i));
        expect(btnClick).toHaveBeenCalledTimes(2);

    })

    test("modal snapshot", () => {
        const modal = render(
            <Provider store={store}>
                <Modal header={"header text"} text={"main text"}
                       typeModal={"addProductModal"}/>
            </Provider>
        );

        expect(modal).toMatchSnapshot();
    })
})