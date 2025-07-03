import classes from '../modules/navbar.module.scss';
import { Link } from 'react-router';
import { useState } from 'react';

const Navbar = () => {
    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

    const toggleBurgerMenu = () => {
        setIsOpenBurgerMenu(prev => !prev);
    };

    return (
        <>
            <div className={classes['navbar-desktop']}>
                <div className={classes['logo']}>
                    <p><Link to="/">AuthHub</Link></p>
                </div>

                <nav>
                    <ul>
                        <li><Link to="login">Log In</Link></li>
                        <li><Link to="register">Create account</Link></li>
                    </ul>
                </nav>

                {!isOpenBurgerMenu ? (
                    <div onClick={toggleBurgerMenu} className={classes['burger-menu']}>
                        <div className={classes.line}></div>
                        <div className={classes.line}></div>
                        <div className={classes.line}></div>
                    </div>
                ) : (
                    <>
                        <div onClick={toggleBurgerMenu} className={classes['close-icon']}>
                            <div className={classes['line-1']}></div>
                            <div className={classes['line-2']}></div>
                        </div>

                        <div className={classes['mobile-menu-dropdown']}>
                            <ul>
                                <li><Link to="login" onClick={toggleBurgerMenu}>Log In</Link></li>
                                <li><Link to="register" onClick={toggleBurgerMenu}>Create account</Link></li>
                            </ul>
                        </div>
                    </>
                )}
            </div>

        </>
    );
};

export default Navbar;
