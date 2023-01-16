import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './Recuit.module.scss';
import * as actions from '~/redux/action';
import { userService } from '~/services';

const cx = classNames.bind(styles);

function Recruit(props) {
    useEffect(() => {
        document.title = 'Tuyển dụng';
    }, []);
    const [accountName, setAccountName] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
        setErrMessage('');
        try {
            let data = await userService(accountName, password);
            if (data.data && data.data.errCode !== 0) {
                setErrMessage(data.data.message);
            }
            if (data.data && data.data.errCode === 0) {
                console.log('Login Success', props);
                props.userLoginSuccess({ accountName, password });
            }
        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    setErrMessage(e.response.data.message);
                }
            }
            console.log(e);
        }
    };

    return (
        <div>
            <form onSubmit={(e) => handleLogin(e)}>
                <input
                    className={cx('input')}
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    type="text"
                    placeholder="Email/ Số điện thoại"
                ></input>
                <h1>{errMessage}</h1>
                <input
                    className={cx('input')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Mật khẩu"
                ></input>
                <button onClick={(e) => handleLogin(e)}>Đăng nhập</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userLoginSuccess: ({ email, password }) => dispatch(actions.userLoginSuccess({ email, password })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recruit);
