import React from 'react';
import Header from '~/components/Layouts/components/Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <main className={cx('main-contain')}>{children}</main>
            </div>
        </div>
    );
}

export default DefaultLayout;
