import React from "react";
import { Card, Col, Image, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import favorite from './../source/heart.png'

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();

    const basketSpace = document.createElement("div")
    basketSpace.classList.add('basketSpace')

    const addBasket = e => {
        const card = (e.target).closest('.cardWrapper').cloneNode(true)
        card.querySelector('.addBasketBtn').classList.toggle('deleteBasket')
        card.querySelector('.addBasketBtn').textContent = 'Удалить'
        basketSpace.append(card)

        console.log(basketSpace)

        const wrap = basketSpace.innerHTML
        localStorage.setItem('cards', wrap)
    }

    const favoriteSpace = document.createElement("div")
    favoriteSpace.classList.add('favoriteSpace')

    const addFavorite = e => {
        const card = (e.target).closest('.cardWrapper').cloneNode(true)
        card.querySelector('.addFavoriteBtn').classList.toggle('deleteFavoriteBtn')
        favoriteSpace.append(card)

        const wrap = favoriteSpace.innerHTML
        localStorage.setItem('favorites', wrap)
    }


    return (
        <Col
            style={{ cursor: 'pointer' }}
            className="d-flex justify-content-start cardWrapper"
        >
            <Card style={{ width: '250px', padding: '10px', borderRadius: '50px' }} className="mb-3">
                <Image
                    onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
                    variant="top"
                    className="m-auto"
                    width={170}
                    height={150}
                    src={process.env.REACT_APP_BASE_URL + device.img}
                />
                <div onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
                    <div className="d-flex justify-content-center">
                        {device.name}
                    </div>
                    <div className="d-flex justify-content-center mb-2">
                        {device.price} руб
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center pt-2" style={{ borderTop: '1px solid #DCDCDC' }}>
                        <Button
                            variant="primary"
                            style={{ background: `url(${favorite}) no-repeat center center`, width: '40px', border: 'none' }}
                            onClick={addFavorite}
                            className="mx-2 addFavoriteBtn"
                        >
                        </Button>
                        <Button
                            variant="primary"
                            style={{ backgroundColor: '#00BFFF', border: '#00BFFF' }}
                            onClick={addBasket}
                            className="addBasketBtn"
                        >
                            В корзину
                        </Button>
                    </div>
                </div>
            </Card>
        </Col>
    )
}

export default DeviceItem