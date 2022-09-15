import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import MenuList from '~/components/MenuList';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function HeaderMenu() {
    const renderResult = () => <MenuList />;
    return (
        <>
            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to="/">
                <p>Trang Chủ</p>
            </NavLink>
            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to="/info">
                <p>Về Jollibee</p>
            </NavLink>
            <Tippy interactive render={renderResult} offset={[-250, 0]} placement={'bottom-start'}>
                <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to="/menu">
                    <p>Thực đơn</p>
                </NavLink>
            </Tippy>
            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to="/promotion">
                <p>Khuyến mãi</p>
            </NavLink>
            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to="/service">
                <p>Dịch Vụ</p>
            </NavLink>
            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to="/news">
                <p>Tin Tức</p>
            </NavLink>
            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to="/stores">
                <p>Cửa hàng</p>
            </NavLink>
            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to="/contact">
                <p>Liên Hệ</p>
            </NavLink>
            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to="/recruit">
                <p>Tuyển dụng</p>
            </NavLink>
        </>
    );
}

export default HeaderMenu;
