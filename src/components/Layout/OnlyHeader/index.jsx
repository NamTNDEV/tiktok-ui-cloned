import React from 'react';
import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <main>
                <div className="container">{children}</div>
            </main>
        </div>
    );
}

export default DefaultLayout;
