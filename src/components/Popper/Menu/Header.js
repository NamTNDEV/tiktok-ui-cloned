import React from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('menu-header')}>
            <button className={cx('menu-header__back')}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} />
            </button>
            <strong className={cx('menu-header__title')}>{title}</strong>
        </header>
    );
}

export default Header;
