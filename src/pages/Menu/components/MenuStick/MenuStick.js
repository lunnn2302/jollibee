import styles from './MenuStick.module.scss';
import classNames from 'classnames/bind';
import menuListImages from '~/assets/img/MenuList';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'Combo bán chạy',
        img: menuListImages.combo,
        link: 'combo-ban-chay',
    },
    {
        title: 'Gà giòn vui vẻ',
        img: menuListImages.garonvuive,
        link: 'ga-ron-vui-ve',
    },
    {
        title: 'Mỳ ý sốt bò bằm',
        img: menuListImages.myy,
        link: 'my-y-bo-bam',
    },
    {
        title: 'Gà sốt cay',
        img: menuListImages.gasotcay,
        link: 'ga-sot-cay',
    },
    {
        title: 'Burger',
        img: menuListImages.burger,
        link: 'burger',
    },
    {
        title: 'Phần ăn phụ',
        img: menuListImages.phananphu,
        link: 'phan-an-phu',
    },
    {
        title: 'Món tráng miệng',
        img: menuListImages.trangmieng,
        link: 'mon-trang-mieng',
    },
    {
        title: 'Thức uống',
        img: menuListImages.thucuong,
        link: 'thuc-uong',
    },
];

function MenuStick() {
    return (
        <ul className={cx('wrapper')}>
            {MENU_ITEMS.map((item, index) => (
                <li className={cx('category-item')} key={index}>
                    <NavLink
                        className={(nav) => cx({ active: nav.isActive })}
                        to={{ pathname: `/menu/${item.link}`, state: { stateParam: true } }}
                    >
                        <img className={cx('thumbnail')} src={item.img} alt={item.title} />
                        <span>{item.title}</span>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}

export default MenuStick;
