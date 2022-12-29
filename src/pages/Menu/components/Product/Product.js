import classNames from 'classnames/bind';
import imagesMenu from '~/assets/img/Menu';
import Button from '~/components/Button';
import styles from './Product.module.scss';
import { connect } from 'react-redux';
import { buyProduct } from '~/redux/action/actions';

const cx = classNames.bind(styles);

function Product(props) {
    const product_current = {
        id: props.id,
        name: props.name,
        price: props.price,
    };
    return (
        <div className={cx('wrapper')}>
            <img className={cx('product-img')} src={imagesMenu.myga} alt="" />
            <div className={cx('title')}>{props.name}</div>
            <div className={cx('price')}>{props.price} ₫</div>
            <Button primary onClick={() => props.buyProduct(product_current)}>
                Đặt hàng
            </Button>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyProduct: (product_current) => dispatch(buyProduct(product_current)),
    };
};
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cartAr,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
