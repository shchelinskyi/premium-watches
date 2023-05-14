import PropTypes from 'prop-types';
import st from './Button.module.scss';
import cn from "classnames";

const Button = (props) => {
    const {backgroundColor, text, onClick, addClass} = props;
    return (
        <button className={cn(st.btn, (!!addClass && st[`${addClass}`]))}
                style={{ backgroundColor: backgroundColor }}
                onClick={onClick}>
            {text}
        </button>
    );
}

Button.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    addClass:PropTypes.string
}

export default Button;