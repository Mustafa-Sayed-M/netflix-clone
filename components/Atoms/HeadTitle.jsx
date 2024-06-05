import React from 'react';

function HeadTitle({ textContent, icon }) {
    return (
        <h1 className="mb-5 text-primary-color text-xl p-2 border-s-2 rounded-md bg-white/10 font-semibold w-fit">
            <span className={`${icon ? "me-2" : ""}`}>{icon}</span>
            <span>{textContent}</span>
        </h1>
    )
}

export default HeadTitle;