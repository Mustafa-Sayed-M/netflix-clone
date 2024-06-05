import React from 'react';

export const metadata = {
    title: "NETFLIX . TRENDING"
};

function layout({ children }) {
    return (
        <div className='trending-layout'>
            {children}
        </div>
    )
}

export default layout;