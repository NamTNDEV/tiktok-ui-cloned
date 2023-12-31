import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('sidebar')}>
            <div className={cx('main-contain')}></div>
        </aside>
    );
}

export default Sidebar;
