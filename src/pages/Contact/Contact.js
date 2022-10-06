import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Contact() {
    useEffect(() => {
        document.title = 'Contact Us';
    }, []);

    const handleSubmit = () => {};
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>Liện hệ jollibee</div>
            <div className={cx('container')}>
                <div className={cx('box-left')}>
                    <div className={cx('title')}>Thông tin liên hệ</div>
                    <div className={cx('address-contact')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faDrumstickBite} />
                        </div>
                        Jollibee Việt Nam
                    </div>
                    <div className={cx('address-contact')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </div>
                        1900 - 1533
                    </div>
                    <div className={cx('address-contact')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        Lầu 5 - tòa nhà SCIC, 16 Trương Định, Phường Võ Thị Sáu, Quận 3, TP.HCM
                    </div>
                    <div className={cx('title')}>Gửi tin nhắn cho chúng tôi</div>
                    <form onSubmit={handleSubmit} id="contact-form" className={cx('form-contact')}>
                        <input className={cx('name')} placeholder="Tên*" required />
                        <input className={cx('phone')} placeholder="Số điện thoại*" required />
                        <input placeholder="E-mail*" required />
                        <textarea placeholder="Tin nhắn*" required />
                        <Button type="submit" className={cx('action')} primary>
                            Gửi
                        </Button>
                    </form>
                </div>
                <div className={cx('box-right')}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d538.1454238950469!2d106.69109800697555!3d10.776806375209471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0e1cd0b91d%3A0x871d8ccdd28020ea!2sJollibee%20Vietnam!5e0!3m2!1sen!2s!4v1663934908569!5m2!1sen!2s"
                        width="780"
                        height="600"
                        title="map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
