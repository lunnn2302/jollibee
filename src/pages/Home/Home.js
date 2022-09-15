import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import BannerSlide from '~/components/BannerSlide';

const cx = classNames.bind(styles);

function Home() {
    useEffect(() => {
        document.title = 'Home Page';
    }, []);

    return (
        <div className={cx('wrapper')}>
            <BannerSlide />
        </div>
    );
}

export default Home;
