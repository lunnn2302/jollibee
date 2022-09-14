import classNames from 'classnames/bind';
import styles from './Container.module.scss';

const cx = classNames.bind(styles);

function Container() {
    return (
        <div className={cx('wrapper')}>
            <h1>Container</h1>
        </div>
    );
}

export default Container;
