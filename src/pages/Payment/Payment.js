import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import { deleteProduct } from '../Menu/actions';
import { connect } from 'react-redux';

const cx = classNames.bind(styles);

function Payment(props) {
    useEffect(() => {
        document.title = 'Thanh Toán';
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>Thanh Toán</div>
            <form className={cx('section')}>
                <div className={cx('title')}>VUI LÒNG NHẬP THÔNG TIN LIÊN LẠC CỦA BẠN</div>
                <div className={cx('sub-title')}>
                    (*) QK vui lòng điền chính xác thông tin địa chỉ giao hàng (ghi chú Tòa nhà: ABC... nếu có)
                </div>
                <div className={cx('information')}>
                    <input type="text" placeholder="Họ tên" />
                    <input type="text" placeholder="Số điện thoại" />
                    {/* <select>
                        <option></option>
                    </select> */}
                    <input type="text" placeholder="Địa chỉ" />
                    <textarea placeholder="Ghi chú" />
                </div>
                <div className={cx('title')}>ĐƠN HÀNG CỦA BẠN</div>
                <div className={cx('cart-header')}>
                    <div className={cx('title', 'col-6')}>TÊN MÓN</div>
                    <div className={cx('title', 'col-3')}>SỐ LƯỢNG</div>
                    <div className={cx('title', 'col-3')}>ĐƠN GIÁ</div>
                </div>
                {props.cart.map((product) => (
                    <div className={cx('cart-item')}>
                        <div className={cx('product-name', 'col-6')}>
                            {product.name}
                            <div className={cx('delete-product')} onClick={() => props.deleteProduct(product)}>
                                x
                            </div>
                        </div>
                        <div className={cx('product-quantity', 'col-3')}>
                            {product.quantity === undefined ? 1 : product.quantity}
                        </div>
                        <div className={cx('product-price', 'col-3')}>{product.price}</div>
                    </div>
                ))}
                <div className={cx('cart-header')}>
                    <div className={cx('title', 'col-9')}>TỔNG</div>
                    <div className={cx('title', 'col-3')}>{props.total}</div>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cartAr,
        total: state.cart.totalPriceProduct,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (product_current) => dispatch(deleteProduct(product_current)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
