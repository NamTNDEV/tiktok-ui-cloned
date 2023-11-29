import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <main>
                <div className="container">
                    <Sidebar />
                    {children}
                </div>
            </main>
        </div>
    );
}

export default DefaultLayout;
