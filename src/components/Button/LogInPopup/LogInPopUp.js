import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/img';
import Button from '~/components/Button';
import styles from './LogInPopUp.module.scss';

const cx = classNames.bind(styles);

function LogInPopUp({ togglePopup, login }) {
    const [accountName, setAccountName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={cx('pop-up')}>
            <form onSubmit={() => login({ accountName, password })} className={cx('wrapper')}>
                <Button onClick={() => togglePopup()} className={cx('close-btn')} rounded primary>
                    X
                </Button>
                <header className={cx('header-login')}>
                    <img className={cx('logo')} src={images.logo} alt="" />
                    <span className={cx('title')}>Vui lòng đăng nhập </span>
                    <fieldset className={cx('login-form')}>
                        <input
                            className={cx('input')}
                            value={accountName}
                            onChange={(e) => setAccountName(e.target.value)}
                            type="text"
                            placeholder="Email/ Số điện thoại"
                        ></input>
                        <input
                            className={cx('input')}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Mật khẩu"
                        ></input>
                        <Link to="/forget-password" className={cx('forgot-pass')}>
                            Quên mật khẩu?
                        </Link>
                    </fieldset>
                </header>
                <footer className={cx('footer-login')}>
                    <Button className="mt-20" primary large>
                        Đăng nhập
                    </Button>
                    <Button className="mt-20" blueBtn large leftIcon={<FontAwesomeIcon icon={faSquareFacebook} />}>
                        Đăng nhập với facebook
                    </Button>
                    <Button className="mt-20" whiteBtn large leftIcon={<img src={images.google} alt="google" />}>
                        Đăng nhập với google
                    </Button>
                    <div className={cx('register')}>
                        <p>Bạn chưa có tài khoản? </p>
                        <Link to="/register"> Đăng ký ngay</Link>
                    </div>
                </footer>
            </form>
        </div>
    );
}

export default LogInPopUp;
