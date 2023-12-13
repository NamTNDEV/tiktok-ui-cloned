import React from 'react';
import styles from './AccountItem.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import image from '~/assets/images';

const cx = classnames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src={image.testAvatar} className={cx('avatar')} alt="Avatar" />
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
