import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from "./Button";



describe("testing Button", () => {

    test("render button with props", () => {
        render(<Button backgroundColor="red" text="click"/>);
        expect(screen.getByText(/click/i)).toBeInTheDocument();
    })

    test("Button snapshot", ()=> {
        const uiElem = render(<Button backgroundColor="red" text="click"/>);
        expect(uiElem).toMatchSnapshot();
    })


    test("onClick work", () => {
        const onClick = jest.fn();
        render(<Button backgroundColor="red" text="click" onClick={onClick}/>);
        const isButton = screen.getByRole('button');
        fireEvent.click(isButton);
        expect(onClick).toHaveBeenCalledTimes(1);
    })
})
