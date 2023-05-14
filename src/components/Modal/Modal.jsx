import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {closeAllModals} from '../../redux/actions';
import cn from 'classnames';
import st from './Modal.module.scss';

const Modal  = ({header, closeButton, text, actions, typeModal}) => {

    const dispatch = useDispatch();

    const closeModal = ()=> {
        dispatch(closeAllModals());
    }

    const clickOutside = (e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
    }

        return (
            <div className={st.modalWrapper} onClick={clickOutside}>
                <div data-testid="modal" className={cn(st.modal,st[typeModal])}>
                    <div className={st[`${typeModal}Header`]}>
                        <h1 className={st[`${typeModal}Title`]}>{header}</h1>
                        {!!closeButton &&
                            <button className={st[`${typeModal}Close`]} onClick={closeModal}>✖</button>}
                    </div>
                    <p className={st[`${typeModal}Text`]}>{text}</p>
                    <div className={st[`${typeModal}Actions`]}>{actions}</div>
                </div>
            </div>
        );
    };

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    closeButton: PropTypes.bool,
    text: PropTypes.string.isRequired,
    actions: PropTypes.element,
    typeModal:PropTypes.string.isRequired,
}

export default Modal;