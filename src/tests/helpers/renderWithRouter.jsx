import {MemoryRouter} from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import {render} from '@testing-library/react';
import store from "../../redux/store";
import {Provider} from "react-redux";



export const renderWithRouter = (component, initialRout = '/') => {
    return render(
            <Provider store={store}>
                    <MemoryRouter initialEntries={[initialRout]}>
                        <AppRouter/>
                        {component}
                    </MemoryRouter>
            </Provider>
        );
};

export default renderWithRouter;
