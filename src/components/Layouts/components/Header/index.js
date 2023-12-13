import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import image from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper/index';
import AccountItem from '../../../AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MORE_MENU_ITEMS = [
    { icon: <FontAwesomeIcon icon={faEarthAsia} />, title: 'English' },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];

function Header() {
    const [inputSearch, setInputSearch] = useState('');

    const inputSearchHandle = (e) => {
        setInputSearch(e.target.value);
    };

    return (
        <div>
            <header className={cx('header')}>
                <div className={cx('main-contain')}>
                    {/* Logo */}
                    <a href="/" className={cx('logo')}>
                        <img src={image.logo.default} alt="TikTok" />
                    </a>

                    {/* Search Bar */}
                    <Tippy
                        visible={inputSearch}
                        interactive
                        render={(attrs) => (
                            <div className={cx('search--results')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <label className={cx('result-title')}>Accounts</label>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input type="text" placeholder="Search" value={inputSearch} onChange={inputSearchHandle} />
                            <div className={cx('search--icon-block')}>
                                {inputSearch ? <FontAwesomeIcon icon={faCircleXmark} /> : ''}
                            </div>
                            <button className={cx('search--btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>

                    <div className={cx('actions')}>
                        <Button to={'creator-center/upload'} className={cx('actions-upload')} variant={'outline'}>
                            <FontAwesomeIcon icon={faPlus} size="lg" />
                            <span>Upload</span>
                        </Button>
                        <Button>Log in</Button>

                        <Menu items={MORE_MENU_ITEMS}>
                            <button className={cx('more-menu')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
