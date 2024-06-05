import React from 'react';

export const metadata = {
    title: "NETFLIX . TV"
};

function layout({ children }) {
    return (
        <div className='tv-layout'>
            {children}
        </div>
    )
}

export default layout;