import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BASKET_ROUTE, FAVORITE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from './../utils/consts'
import { Context } from "..";

const Navbar = observer(() => {
    const { user } = useContext(Context)
    return (
        <header>
            <div className="header_menu">
                <div className="logo">
                    <NavLink to={SHOP_ROUTE} title="На главную">
                        <span className="logo_brand"></span>
                        <span className="logo_name">Wire</span>
                    </NavLink>
                </div>

                <div className="search">
                    <div className="search_engine">
                        <div className="search_panel">
                            <input type="search" />
                        </div>
                        <div className="button search_button">
                            <Button variant="outline-info" style={{ color: 'black' }}>Искать</Button>
                        </div>
                    </div>
                </div>

                <div className="mini_icons">
                    <div className="cart">
                        <NavLink to={user.isAuth ? BASKET_ROUTE : LOGIN_ROUTE} title="Корзина">
                            <span className="cart_icon"></span>
                            <span className="cart_name">Корзина</span>
                        </NavLink>
                    </div>
                    <div className="favorite">
                        <NavLink to={user.isAuth ? FAVORITE_ROUTE : LOGIN_ROUTE}>
                            <span className="fav_icon"></span>
                            <span className="fav_name">Избранное</span>
                        </NavLink>
                    </div>
                    <div className="auth">
                        {user.isAuth ?
                            <NavLink to={SHOP_ROUTE}>
                                <Button
                                    variant="outline-info"
                                    style={{ color: 'black', textAlign: 'center' }}
                                    onClick={() => {
                                        user.setIsAuth(false)
                                        user.setUser({})
                                        localStorage.removeItem('token')
                                    }}
                                >
                                    Выйти
                                </Button>
                            </NavLink>
                            :
                            <NavLink to={LOGIN_ROUTE}>
                                <Button
                                    variant="outline-info"
                                    style={{ color: 'black', textAlign: 'center' }}
                                >
                                    Войти
                                </Button>
                            </NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
})

export default Navbar