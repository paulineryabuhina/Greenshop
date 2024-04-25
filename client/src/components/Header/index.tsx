import './Header.scss';
import { Dialog } from '@mui/material';
import { useContext, useState } from 'react';
import Auth from './Auth';
import Register from './Register';
import logo from '../../components/Header/logo.png';
import { ADMIN_ROUTE, HOME_ROUTE } from '../../utils/consts';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../main';
import { observer } from 'mobx-react-lite';

const Header = observer(() => {
    const [open, setOpen] = useState<boolean>(false);
    const [isReg, setIsReg] = useState<boolean>(true);

    const navigate = useNavigate();

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const changeMode = () => {
        setIsReg(!isReg);
    };

    const {user}: any = useContext(Context);

    return (
        <header className="header">
            <div className="header__content">
                <Link to={HOME_ROUTE}>
                    <img src={logo} className="header__logo" alt="logo"></img>
                </Link>
                <div className="header__navigation">
                    
                    <Link to={HOME_ROUTE} className="header__link">
                        Home
                    </Link>
                    <a className="header__link" href="">
                        Shop
                    </a>
                    <a className="header__link" href="">
                        Plant Care
                    </a>
                    <a className="header__link" href="">
                        Blogs
                    </a>
                </div>
                <div className="header__left">
                    <button className="header__search"></button>
                    <button className="header__cart"></button>
                    {user.isAuth ?
                    <button className="header__login" onClick={onOpen}>
                        Log out
                    </button>
                     : 
                    <button className="header__login" onClick={onOpen}>
                        Login
                    </button>}
                    <Dialog className="modalWindow" open={open} onClose={onClose}>
                        <div className="modalWindow__wrap">{isReg ? <Auth changeMode={changeMode} /> : <Register changeMode={changeMode} />}</div>
                    </Dialog>
                    <button type="button" className="btn btn-success" onClick={() => navigate(ADMIN_ROUTE)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path>
                    </svg>
                         Admin
                    </button>
                </div>
            </div>
            <div className="header__line"></div>
        </header>
    );
});
export default Header;
