import LanguageOptions from '~/components/LanguageOptions';
import HeaderMenu from '../HeaderMenu';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LogInPopUp from '~/components/Button/LogInPopup/';

const cx = classNames.bind(styles);

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-wrapper')}>
                <div className={cx('panel-header')}>
                    <div className={cx('lang-options')}>
                        <LanguageOptions title="EN" icon={images.flagEn} to="/a" />
                        <LanguageOptions title="VN" icon={images.flagVn} to="/" />
                    </div>
                    <div className={cx('location')}>
                        <FontAwesomeIcon className={cx('location-icon')} icon={faLocationDot} />
                        <span className={cx('location-text')}>Hà Nội</span>
                    </div>
                    <ul className={cx('user-menu')}>
                        <li className={cx('user-icon')}>
                            <img src={images.iconUser} alt="IconUser" />
                        </li>
                        <li className={cx('register')}>
                            <Link to="/register">Đăng ký</Link>
                        </li>
                        <li className={cx('log-in')} onClick={togglePopup}>
                            Đăng Nhập
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('header-content')}>
                <Link to="/" className={cx('logo')}>
                    <img className={(cx('logo-img'), 'logo')} src={images.logo} alt="LogoImg" />
                </Link>
                <nav className={cx('header-menu')}>
                    <HeaderMenu />
                </nav>
                <div className={cx('delivery')}>
                    <img src={images.delivery} alt="" />
                </div>
            </div>
            {isOpen && <LogInPopUp togglePopup={togglePopup} />}
        </header>
    );
}

export default Header;
