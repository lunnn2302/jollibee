import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuStick from './components/MenuStick';
import { useEffect, useState } from 'react';
import Product from './components/Product/Product';
import CartButton from './components/CartButton';
import Cart from './components/Cart';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

const products = [
    {
        id: 1,
        name: '01 MIẾNG GÀ GIÒN VUI VẺ + 1 MỲ Ý SỐT BÒ BẰM + 01 NƯỚC NGỌT (VỪA)',
        price: 65000,
        category: 'ga-ron-vui-ve',
    },
    {
        id: 2,
        name: '01 MIẾNG GÀ GIÒN VUI VẺ + 1 MỲ Ý SỐT BÒ BẰM + 01 NƯỚC NGỌT (VỪA)',
        price: 65000,
        category: 'ga-ron-vui-ve',
    },
    {
        id: 3,
        name: '01 MIẾNG GÀ GIÒN VUI VẺ + 1 MỲ Ý SỐT BÒ BẰM + 01 NƯỚC NGỌT (VỪA)',
        price: 65000,
        category: 'ga-ron-vui-ve',
    },
    {
        id: 4,
        name: '01 MIẾNG GÀ GIÒN VUI VẺ + 1 MỲ Ý SỐT BÒ BẰM + 01 NƯỚC NGỌT (VỪA)',
        price: 65000,
        category: 'ga-ron-vui-ve',
    },
];

function Menu(props) {
    const [isOpenCart, setIsOpenCart] = useState(true);
    const { type } = useParams();
    // const stateParamVal = useLocation().state.stateParam;
    console.log(type);
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
                {products.map((product) => (
                    <Product key={product.id} id={product.id} name={product.name} price={product.price} />
                ))}
            </div>
            {!isOpenCart ? (
                <Cart setIsOpenCart={setIsOpenCart} isOpenCart={isOpenCart} />
            ) : (
                <CartButton setIsOpenCart={setIsOpenCart} isOpenCart={isOpenCart} />
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cartAr,
        total: state.cart.totalPriceProduct,
    };
};

export default connect(mapStateToProps)(Menu);
