import MediaQuery from 'react-responsive';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import LanguageOptions from '~/components/LanguageOptions';
import HeaderMenu from '../HeaderMenu';
import LogInPopUp from '~/components/Button/LogInPopup/';

const cx = classNames.bind(styles);

function Header({ isOpenSideBar, setIsOpenSideBar }) {
    const [isOpenLogin, setIsOpenLogin] = useState(false);

    const togglePopup = () => {
        setIsOpenLogin(!isOpenLogin);
    };

    return (
        <header className={cx('wrapper')}>
            <MediaQuery minWidth={1224}>
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
            </MediaQuery>

            <div className={cx('header-content')}>
                <MediaQuery maxWidth={1224}>
                    <div className={cx('menu-toggle')} onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </MediaQuery>
                <Link to="/" className={cx('logo')}>
                    <img className={(cx('logo-img'), 'logo')} src={images.logo} alt="LogoImg" />
                </Link>
                <MediaQuery minWidth={1224}>
                    <nav className={cx('header-menu')}>
                        <HeaderMenu />
                    </nav>
                </MediaQuery>
                <div className={cx('delivery')}>
                    <img src={images.delivery} alt="" />
                </div>
            </div>
            {isOpenLogin && <LogInPopUp togglePopup={togglePopup} />}
        </header>
    );
}

export default Header;
