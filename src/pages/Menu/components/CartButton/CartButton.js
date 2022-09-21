import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './CartButton.module.scss';

const cx = classNames.bind(styles);

function CartButton() {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon icon={faCartShopping} />
        </div>
    );
}

export default CartButton;
