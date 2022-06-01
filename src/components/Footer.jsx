import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "..";
import { ADMIN_ROUTE } from "../utils/consts";
import jwtDecode from "jwt-decode";
import { check } from "../http/userApi";

const Footer = observer(() => {
    const { user } = useContext(Context)

    const getRole = (role) => {
        if(user.isAuth){
            if(jwtDecode(localStorage.getItem('token')).role == role) return true
        }
    }

    return (
        <footer>
            <div className="footer_bar">
                <div className="top_footer">
                    <div className="company_info">
                        <p className="company_names">Компания</p>
                        <a href="#">О Компании</a>
                        <a href="#">Новости</a>
                        <a href="#">Партнерам</a>
                        <a href="#">Политика конфиденциальности</a>
                    </div>

                    <div className="company_info">
                        <p className="company_names">Покупателям</p>
                        <a href="#">Как оформить заказ</a>
                        <a href="#">Способы оплаты</a>
                        <a href="#">Доставка</a>
                        <a href="#">Статус заказа</a>
                        <a href="#">Гарантия</a>
                    </div>

                    <div className="company_info">
                        <p className="company_names">Контакты</p>
                        <a href="https://www.instagram.com/" target='_blank'>Instagram</a>
                        <a href="https://www.vk.com" target="_blank">Вконтакте</a>
                        <a href="tel:+700  000000">+7 (000) 000-00-00</a>
                        <a href="mailto:example@exm.ru">example@exm.ru</a>
                    </div>

                    <div className="company_info">
                        <p className="company_names">Мы находимся</p>
                        <p id="location">
                            12345 North Main Street
                            Anywhere, USA
                        </p>
                    </div>
                </div>

                <div className="bottom_footer">
                    <div className="footer_info">
                        <p>©Wire., {new Date().getFullYear()}г. Все права защищены.</p>
                        { getRole(process.env.REACT_APP_ROLE) ?
                            <NavLink to={ADMIN_ROUTE}>
                                <Button
                                    variant="outline-info"
                                    style={{ color: 'black', textAlign: 'center' }}
                                >
                                    Админ
                                </Button>
                            </NavLink>
                            :
                            ''
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
})

export default Footer;