import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsMenu from '../ProductsMenu';
import styles from './SidebarMenu.module.scss';
import MediaQuery from 'react-responsive';
import { SidebarMenuContext } from '~/context/SidebarMenuContext';

const cx = classNames.bind(styles);

function SidebarMenu() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const sidebarMenuContext = useContext(SidebarMenuContext);

    useEffect(() => {
        // setIsOpenMenu(!isOpenMenu);
    }, [isOpenMenu]);

    return (
        <MediaQuery maxWidth={1224}>
            {sidebarMenuContext.sidebarMenu && (
                <div
                    className={cx('wrapper')}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className={cx('close-btn')} onClick={sidebarMenuContext.toggleSidebarMenu}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className={cx('lang')}>VN/ENG</div>
                    <Link className={cx('menu-item')} to="/" onClick={sidebarMenuContext.toggleSidebarMenu}>
                        <p>Trang Chủ</p>
                    </Link>
                    <Link className={cx('menu-item')} to="/info" onClick={sidebarMenuContext.toggleSidebarMenu}>
                        <p>Về Jollibee</p>
                    </Link>
                    <div
                        className={cx('menu-item')}
                        onClick={() => {
                            setIsOpenMenu(!isOpenMenu);
                        }}
                    >
                        <p>Thực đơn</p>
                        {isOpenMenu && <ProductsMenu />}
                    </div>
                    <Link className={cx('menu-item')} to="/promotion" onClick={sidebarMenuContext.toggleSidebarMenu}>
                        <p>Khuyến mãi</p>
                    </Link>
                    <Link className={cx('menu-item')} to="/service" onClick={sidebarMenuContext.toggleSidebarMenu}>
                        <p>Dịch Vụ</p>
                    </Link>
                    <Link className={cx('menu-item')} to="/news" onClick={sidebarMenuContext.toggleSidebarMenu}>
                        <p>Tin Tức</p>
                    </Link>
                    <Link className={cx('menu-item')} to="/stores" onClick={sidebarMenuContext.toggleSidebarMenu}>
                        <p>Cửa hàng</p>
                    </Link>
                    <Link className={cx('menu-item')} to="/contact" onClick={sidebarMenuContext.toggleSidebarMenu}>
                        <p>Liên Hệ</p>
                    </Link>
                    <Link className={cx('menu-item')} to="/recruit" onClick={sidebarMenuContext.toggleSidebarMenu}>
                        <p>Tuyển dụng</p>
                    </Link>
                    <div className={cx('social')}>
                        <div className={cx('social-item')} href="">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className={cx('social-item')} href="">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className={cx('social-item')} href="">
                            <FontAwesomeIcon icon={faGoogle} />
                        </div>
                    </div>
                </div>
            )}
        </MediaQuery>
    );
}

export default SidebarMenu;
