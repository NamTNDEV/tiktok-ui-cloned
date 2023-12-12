import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import image from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper/index';
import AccountItem from '../../../AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

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
                        <Button to={'creator-center/upload'} className={cx('actions--upload')} variant={'outline'}>
                            <FontAwesomeIcon icon={faPlus} size="lg" />
                            <span>Upload</span>
                        </Button>
                        <Button>Log in</Button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
