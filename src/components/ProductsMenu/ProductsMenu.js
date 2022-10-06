import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import menuListImages from '~/assets/img/MenuList';
import { SidebarMenuContext } from '~/context/SidebarMenuContext';
import styles from './ProductsMenu.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'Combo bán chạy',
        img: menuListImages.combo,
        link: '/menu',
    },
    {
        title: 'Gà giòn vui vẻ',
        img: menuListImages.garonvuive,
        link: '/',
    },
    {
        title: 'Mỳ ý sốt bò bằm',
        img: menuListImages.myy,
        link: '/',
    },
    {
        title: 'Gà sốt cay',
        img: menuListImages.gasotcay,
        link: '/',
    },
    {
        title: 'Burger',
        img: menuListImages.burger,
        link: '/',
    },
    {
        title: 'Phần ăn phụ',
        img: menuListImages.phananphu,
        link: '/',
    },
    {
        title: 'Món tráng miệng',
        img: menuListImages.trangmieng,
        link: '/',
    },
    {
        title: 'Thức uống',
        img: menuListImages.thucuong,
        link: '/',
    },
];

function ProductsMenu() {
    const sidebarMenuContext = useContext(SidebarMenuContext);

    return (
        <ul className={cx('wrapper')}>
            {MENU_ITEMS.map((item, index) => (
                <li className={cx('category-item')} key={index}>
                    <Link className={cx('item-link')} to={item.link} onClick={sidebarMenuContext.toggleSidebarMenu}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default ProductsMenu;
