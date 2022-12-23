import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { deleteProduct, increaseProduct } from '../../actions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Cart(props) {
    console.log(props);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('minimize')} onClick={() => props.setIsOpenCart(!props.isOpenCart)}>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className={cx('product-list')}>
                {props.cart.map((product) => (
                    <div className={cx('product-item')} key={product.id}>
                        <div className={cx('name')}>{`${product.name}`}</div>
                        {product.quantity === undefined ? (
                            <div className={cx('price')}>{`${product.price}`}</div>
                        ) : (
                            <div className={cx('price')}>
                                {product.price} x{' '}
                                <div className={cx('quantity')}>
                                    {product.quantity}
                                    <div onClick={() => props.increaseProduct(product)}>+</div>
                                </div>
                            </div>
                        )}

                        <div className={cx('delete-btn')}>
                            <button onClick={() => props.deleteProduct(product)}>X</button>
                        </div>
                    </div>
                ))}
                <div className={cx('total')}>Tổng: {props.total}</div>
                <NavLink to="/thanh-toan" className={cx('pay-btn')}>
                    Thanh toán
                </NavLink>
            </div>
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
        increaseProduct: (product_current) => dispatch(increaseProduct(product_current)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
