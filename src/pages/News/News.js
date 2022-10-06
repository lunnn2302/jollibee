import { useEffect, useState } from 'react';
import newsImages from '~/assets/img/News';
import Banner from '~/components/Banner';
import BoxContent from '~/components/BoxContent';
import classNames from 'classnames/bind';
import style from './News.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { HexagonIcon } from '~/assets/Icons';
import Franchise from './components/Franchise';

const cx = classNames.bind(style);

const NEWS = [
    {
        id: 1,
        img: newsImages.thumb1,
        title: 'Jollibee Việt Nam khai trương cửa hàng thứ 150',
        previewContent:
            'Jollibee Việt Nam đã đưa vào vận hành nhà máy mới với chứng nhận ISO 22000:2018 về quản lý an toàn vệ sinh thực phẩm quốc ...',
        link: '/',
    },
    {
        id: 2,
        img: newsImages.thumb2,
        title: 'JOLLIBEE VIỆT NAM TIẾP TỤC ĐÀ TĂNG TRƯỞNG SAU GIÃN CÁCH',
        previewContent:
            'Jollibee Việt Nam đã đưa vào vận hành nhà máy mới với chứng nhận ISO 22000:2018 về quản lý an toàn vệ sinh thực phẩm quốc ...',
        link: '/',
    },
    {
        id: 3,
        img: newsImages.thumb3,
        title: 'JOLLIBEE THAM VỌNG TRỞ THÀNH THƯƠNG HIỆU FAST FOOD ĐƯỢC YÊU THÍCH NHẤT VIỆT NAM',
        previewContent:
            'Jollibee Việt Nam đã đưa vào vận hành nhà máy mới với chứng nhận ISO 22000:2018 về quản lý an toàn vệ sinh thực phẩm quốc ...',
        link: '/',
    },
    {
        id: 4,
        img: newsImages.thumb4,
        title: 'NHÀ MÁY MỚI JOLLIBEE VIỆT NAM NHẬN ĐƯỢC ISO 22000:2018',
        previewContent:
            'Jollibee Việt Nam đã đưa vào vận hành nhà máy mới với chứng nhận ISO 22000:2018 về quản lý an toàn vệ sinh thực phẩm quốc ...',
        link: '/',
    },
];

function News() {
    const [showPost, setShowPost] = useState(false);
    const handleShowPost = () => {
        setShowPost(true);
    };

    useEffect(() => {
        document.title = 'Tin tức';
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Banner title="Tin Tức" />
            <div className={cx('post', showPost && 'show')}>
                {NEWS.map((item) => (
                    <BoxContent
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        previewContent={item.previewContent}
                        link={item.link}
                    />
                ))}
            </div>
            <div className={cx('view-more', showPost && 'hidden')}>
                <Button
                    onClick={handleShowPost}
                    primary
                    rightIcon={<FontAwesomeIcon icon={faChevronDown} />}
                    className={cx('more-btn')}
                >
                    Xem thêm
                </Button>
            </div>
            <div className={cx('franchise')}>
                <div className={cx('top-content')}>
                    <img className={cx('franchise-img')} src={newsImages.franchiseBg} alt="" />
                    <div className={cx('pop')}>
                        <div className={cx('title-franchise')}>Nhượng Quyền</div>
                        <div className={cx('hexagon')}>
                            <HexagonIcon />
                        </div>
                        <p className={cx('description-franchise')}>
                            CHẤT LƯỢNG TẠO NỀN TẢNG VỮNG CHẮC CHO NIỀM TIN NHÀ ĐẦU TƯ
                        </p>
                    </div>
                </div>
                <div className={cx('bottom-content')}>
                    <div className={cx('wrapper-franchise')}>
                        <Franchise />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
