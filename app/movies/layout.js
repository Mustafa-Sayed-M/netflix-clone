import React from 'react';

export const metadata = {
    title: "NETFLIX . MOVIES"
};

function layout({ children }) {
    return (
        <div className='movies-layout'>
            {children}
        </div>
    )
}

export default layout;