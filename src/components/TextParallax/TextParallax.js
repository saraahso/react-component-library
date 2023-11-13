import React from "react";
import PropTypes from "prop-types";
import "./TextParallax.scss";

const TextParallax = (props) => {
    const { text } = props;

    return (
        <section className={`txtparallax`}>
            <p className={`txtparallax__txt`}>{text}</p>
        </section>
    );
};

TextParallax.propTypes = {
    text: PropTypes.string,
};

export default TextParallax;
