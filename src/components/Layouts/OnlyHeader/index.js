import React from 'react';
import Header from '~/components/Layouts/components/Header';

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
