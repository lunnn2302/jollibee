import styles from './MenuList.module.scss';
import classNames from 'classnames/bind';
import menuListImages from '~/assets/img/MenuList';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'Combo bán chạy',
        img: menuListImages.combo,
        link: '',
    },
    {
        title: 'Gà giòn vui vẻ',
        img: menuListImages.garonvuive,
        link: '',
    },
    {
        title: 'Mỳ ý sốt bò bằm',
        img: menuListImages.myy,
        link: '',
    },
    {
        title: 'Gà sốt cay',
        img: menuListImages.gasotcay,
        link: '',
    },
    {
        title: 'Burger',
        img: menuListImages.burger,
        link: '',
    },
    {
        title: 'Phần ăn phụ',
        img: menuListImages.phananphu,
        link: '',
    },
    {
        title: 'Món tráng miệng',
        img: menuListImages.trangmieng,
        link: '',
    },
    {
        title: 'Thức uống',
        img: menuListImages.thucuong,
        link: '',
    },
];

function MenuList() {
    return (
        <ul className={cx('wrapper')}>
            {MENU_ITEMS.map((item, index) => (
                <li className={cx('category-item')} key={index}>
                    <Link to={item.link}>
                        <img className={cx('thumbnail')} src={item.img} alt={item.title} />
                        <span>{item.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default MenuList;
