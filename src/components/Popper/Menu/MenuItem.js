import React from 'react';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} to={data.to}>
            <span className={cx('menu-item__wrapper')}>
                <span className={cx('menu-item__icon')}>{data.icon}</span>
                <span className={cx('menu-item__title')}>{data.title}</span>
            </span>
        </Button>
    );
}

export default MenuItem;
