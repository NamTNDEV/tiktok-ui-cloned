import React from 'react';
import styles from './AccountItem.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                loading="lazy"
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/46d9c424d528917770b045c73e8bf9f2.jpeg?x-expires=1701756000&x-signature=c2cqGd1eQwVcOQfYyjlx3%2BLWy3U%3D"
                className={cx('avatar')}
                alt="Avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('user-name')}>
                    ribisachi36
                    <span className={cx('blue-stick')}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                </h4>
                <span className={cx('name')}>Ribi Sachi</span>
            </div>
        </div>
    );
}

export default AccountItem;
