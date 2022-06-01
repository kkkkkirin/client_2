import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Card, Container, Form, Button, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../http/userApi";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";


const Auth = observer(() => {
    const navigate = useNavigate()
    const { user } = useContext(Context)
    const isLogin = useLocation().pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async () => {
        try {
            const response = await login(email, password)
            user.setIsAuth(true)
            user.setUser(user)
            if (response) navigate(SHOP_ROUTE)
        }
        catch (e) { alert(e.response.data.message) }
    }

    const regIn = async () => {
        try {
            const response = await registration(email, password)
            user.setIsAuth(true)
            user.setUser(user)
            if (response) navigate(SHOP_ROUTE)
        }
        catch (e) { alert(e.response.data.message) }
    }

    return (
        <Container>
            <Container className="d-flex justify-content-center align-items-center p-5">
                <Card style={{ width: '600px' }} className='p-5'>
                    <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                    <Form className="d-flex flex-column align-items-center">
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'
                        />
                        <Row
                            style={{ width: '100%' }}
                            className="mt-3 d-flex justify-content-between">
                            {
                                isLogin ?
                                    <div className="d-flex authWrapper"
                                        style={{ width: '350px' }}
                                    >
                                        Нет аккаунта? <NavLink
                                            className="authWrapper reg"
                                            to={REGISTRATION_ROUTE}
                                        >
                                            Зарегестрируйтесь
                                        </NavLink>
                                    </div>
                                    :
                                    <div className="d-flex authWrapper"
                                        style={{ width: '340px' }}
                                    >
                                        Авторизованы? <NavLink
                                            className="authWrapper reg"
                                            to={LOGIN_ROUTE}
                                        >
                                            Войдите в свой аккаунт
                                        </NavLink>
                                    </div>
                            }
                            {isLogin ?
                                <Button
                                    style={{ width: '100px' }}
                                    variant="outline-info"
                                    onClick={signIn}
                                >
                                    Войти
                                </Button>
                                :
                                <Button
                                    style={{ width: '150px' }}
                                    variant="outline-info"
                                    onClick={regIn}
                                >
                                    Регистрация
                                </Button>
                            }
                        </Row>
                    </Form>
                </Card>
            </Container>
        </Container>
    )
})

export default Auth