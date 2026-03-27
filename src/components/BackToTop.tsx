import React from 'react';
import './BackToTop.css'; // Assuming you might have styles in this file

const BackToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button className="back-to-top" onClick={handleScrollToTop}>
            Back to Top
        </button>
    );
};

export default BackToTop;