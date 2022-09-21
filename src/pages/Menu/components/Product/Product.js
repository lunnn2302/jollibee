import classNames from 'classnames/bind';
import imagesMenu from '~/assets/img/Menu';
import Button from '~/components/Button';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('product-img')} src={imagesMenu.myga} alt="" />
            <div className={cx('title')}>01 MIẾNG GÀ GIÒN VUI VẺ + 1 MỲ Ý SỐT BÒ BẰM + 01 NƯỚC NGỌT (VỪA)</div>
            <div className={cx('price')}>65,000 ₫</div>
            <Button primary>Đặt hàng</Button>
        </div>
    );
}

export default Product;
