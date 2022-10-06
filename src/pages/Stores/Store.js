import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Stores.module.scss';
import StoreLocation from '../Home/components/StoreLocation';
import storeImages from '~/assets/img/Stores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockFour, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Store() {
    useEffect(() => {
        document.title = 'Store Locator';
    }, []);

    const [storeLocation, setStoreLocation] = useState([]);
    const [storeName, setStoreName] = useState('Vincom Phạm Ngọc Thạch');
    const [storeAddress, setStoreAddress] = useState('2 Pham Ngoc Thach, Trung Tự Ward, Dong Da District, Ha Noi City');
    const [storePhone, setStorePhone] = useState('024) 2346-6333');
    const [storeTime, setStoreTime] = useState('10:00 AM - 8:00 PM ');

    useEffect(() => {
        fetch('http://localhost:8000/stores')
            .then((res) => res.json())
            .then((data) => setStoreLocation(data));
    }, []);

    const handleLocation = (item) => {
        setStoreName(item.name);
        setStoreAddress(item.address);
        setStorePhone(item.phone);
        setStoreTime(item.weekday_opening_hours);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('side-bar-top')}>
                <div className={cx('header')}>
                    <StoreLocation title="Hệ thống cửa hàng jollibee" />
                </div>
                <div className={cx('loc-details')}>
                    <div className={cx('loc-name')}>{storeName}</div>
                    <div className={cx('loc-content')}>
                        <div className={cx('loc-addr')}>{storeAddress}</div>
                        <div className={cx('loc-phone')}>{storePhone}</div>
                        <div className={cx('loc-hours')}>{storeTime} (Thứ 2 - Chủ Nhật)</div>
                    </div>
                </div>
            </div>
            <div className={cx('side-bar-bottom')}>
                <div className={cx('store-location')}>
                    <img className={cx('store-img')} src={storeImages.storeBg} alt="" />
                    <ul className={cx('list')}>
                        {storeLocation.map((item) => (
                            <li
                                onClick={() => {
                                    handleLocation(item);
                                }}
                                key={item.stores_id}
                                className={cx('list-details')}
                            >
                                <div className={cx('loc-name')}>{item.name}</div>
                                <div className={cx('list-content')}>
                                    <div className={cx('loc-addr')}>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faMapLocationDot} />
                                        </div>
                                        {item.address}
                                    </div>
                                    <div className={cx('loc-phone')}>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        {item.phone}
                                    </div>
                                    <div className={cx('loc-hours')}>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faClockFour} />
                                        </div>
                                        {item.weekday_opening_hours} (Thứ 2 - Chủ Nhật)
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('map')}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d119218.75268915252!2d105.82646394047329!3d20.969133670814564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjollibee!5e0!3m2!1sen!2s!4v1663929721871!5m2!1sen!2s"
                        width="768"
                        height="768"
                        title="map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Store;
