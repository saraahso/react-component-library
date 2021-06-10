import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = (props) => {
    const { onClick, backgroundColor, type, size, children } = props;

    return (
        <button
            type="button"
            className={`btn ${backgroundColor} ${type} ${size}`}
            onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    onClick: PropTypes.func,
    backgroundColor: PropTypes.string.isRequired,
    type: PropTypes.string,
};

export default Button;
