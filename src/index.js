import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Placeholder = ({ children, minHeight }) => {
    const placeholderElem = useRef(null);
    const placeholderContainerElem = useRef(null);

    useEffect(() => {
        if (placeholderContainerElem && placeholderContainerElem.current) {
            const isContainerEmpty = placeholderContainerElem.current.offsetHeight === 0;
            placeholderElem.current.style.minHeight = isContainerEmpty
                ? (minHeight || window.innerHeight)  + "px"
                : "auto";
        }
    }, [children, minHeight]);

    return (
        <section ref={placeholderElem}>
            <div ref={placeholderContainerElem}>
                {children}
            </div>
        </section>
    );
};

Placeholder.propTypes = {
    children: PropTypes.any,
    minHeight: PropTypes.number,
};

export default Placeholder;
