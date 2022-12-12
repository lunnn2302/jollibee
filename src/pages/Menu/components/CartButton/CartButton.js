import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './CartButton.module.scss';
import { deleteProduct } from '../../actions';
import { connect } from 'react-redux';

const cx = classNames.bind(styles);

function CartButton(props) {
    console.log(props.cart);
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon icon={faCartShopping} />
            {props.cart.map((product) => (
                <div key={product.id}>
                    <div style={{ width: '30%' }}>{`${product.name}`}</div>
                    {product.quantity === undefined ? (
                        <div style={{ width: '40%' }}>{`${product.price}`}</div>
                    ) : (
                        <div style={{ width: '40%' }}>{`${product.price}x${product.quantity}`}</div>
                    )}
                    <div style={{ width: '5%' }}>
                        <button onClick={() => props.deleteProduct(product)}>X</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cartAr,
        total: state.cart.total,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (product_current) => dispatch(deleteProduct(product_current)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);
