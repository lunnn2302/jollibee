import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';

const cx = classNames.bind(styles);

function HeaderMenu() {
    const MENU_ITEMS = [
        {
            title: 'Trang Chủ',
            to: '/',
        },
        {
            title: 'Về Jollibee',
            to: '/info',
        },
        {
            title: 'Thực đơn',
            to: '/menu',
        },
        {
            title: 'Khuyến Mãi',
            to: '/promotion',
        },
        {
            title: 'Dịch vụ',
            to: '/service',
        },
        {
            title: 'Tin Tức',
            to: '/news',
        },
        {
            title: 'Cửa hàng',
            to: '/stores',
        },
        {
            title: 'Liên Hệ',
            to: '/contact',
        },
        {
            title: 'Tuyển dụng',
            to: '/recruit',
        },
    ];
    return (
        <>
            {MENU_ITEMS.map((data, index) => (
                <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} key={index} to={data.to}>
                    <p>{data.title}</p>
                </NavLink>
            ))}
        </>
    );
}

export default HeaderMenu;
