import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuStick from './components/MenuStick';
import { useEffect, useState } from 'react';
import Product from './components/Product/Product';
import CartButton from './components/CartButton';

const cx = classNames.bind(styles);

function Menu() {
    useEffect(() => {
        document.title = 'Thực Đơn';
    }, []);
    const [isStick, setIsStick] = useState(false);
    window.addEventListener('scroll', function (e) {
        const scrolled = window.scrollY;
        if (scrolled > 130) {
            // Show menu stick
            setIsStick(true);
        } else {
            // Show menu normal
            setIsStick(false);
        }
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu')}>{isStick && <MenuStick />}</div>
            <div className={cx('products')}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <CartButton />
        </div>
    );
}

export default Menu;
