import { useEffect } from 'react';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Register() {
    useEffect(() => {
        document.title = 'Đăng ký tài khoản';
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Đăng ký tài khoản</div>
            <form className={cx('form-register')}>
                <div className={cx('input-register')}>
                    <input placeholder="Họ" />
                </div>
                <div className={cx('input-register')}>
                    <input placeholder="Tên" />
                </div>
                <div className={cx('input-register')}>
                    <input placeholder="Số điện thoại" />
                </div>
                <div className={cx('input-register')}>
                    <input placeholder="Email" />
                </div>
                <div className={cx('input-register')}>
                    <input type="password" placeholder="Mật khẩu" />
                </div>
                <div className={cx('input-register')}>
                    <input type="password" placeholder="Xác nhận mật khẩu" />
                </div>
                <div className={cx('input-register')}>
                    <input type="date" />
                </div>
                <div className={cx('input-register')}>
                    <select>
                        <option>Chọn giới tính</option>
                        <option>Nam</option>
                        <option>Nữ</option>
                    </select>
                </div>
                <div className={cx('field')}>
                    <input type="checkbox" />
                    Đồng ý với{' '}
                    <a href="https://jollibee.com.vn/chinh-sach-va-quy-dinh-chung">Chính sách & Điều khoản chung</a>
                </div>
                <div className={cx('field')}>
                    <input type="checkbox" /> Nhận chương trình khuyến mãi qua email
                </div>
            </form>
            <Button primary>Đăng ký</Button>
        </div>
    );
}

export default Register;
