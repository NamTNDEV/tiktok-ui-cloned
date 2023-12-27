import React from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('menu-header')} onClick={onBack}>
            <button className={cx('menu-header__back')}>
                <FontAwesomeIcon icon={faChevronLeft} className={cx('menu-header__back-icon')} />
            </button>
            <strong className={cx('menu-header__title')}>{title}</strong>
        </header>
    );
}

export default Header;
