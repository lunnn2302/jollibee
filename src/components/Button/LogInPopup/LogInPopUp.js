import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/img';
import Button from '~/components/Button';
import styles from './LogInPopUp.module.scss';
import { userService, adminService } from '~/services';
import { connect } from 'react-redux';
import * as actions from '~/redux/action';

const cx = classNames.bind(styles);

function LogInPopUp({ togglePopup }) {
    const [accountName, setAccountName] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        console.log(accountName, password);
    };
    return (
        <div className={cx('pop-up')}>
            <form className={cx('wrapper')}>
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
                    <Button className="mt-20" primary large onClick={() => handleLogin()}>
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

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInPopUp);
