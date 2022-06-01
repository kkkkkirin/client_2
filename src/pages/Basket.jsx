import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Button } from "react-bootstrap";

const Basket = observer(() => {
    window.setTimeout(() => {
        document.querySelector('.basketWrapper').innerHTML = localStorage.getItem('cards')
    }, 0);

    document.addEventListener('click', function (e) {
        console.log(e.target)
        if (e.target.className == 'addBasketBtn btn btn-primary deleteBasket') {
            const card = (e.target).closest('.card')
            card.parentNode.removeChild(card)

            const wrap = document.querySelector('.basketWrapper').innerHTML = '';
            localStorage.setItem('cards', wrap)
        }
    })

    return (
        <Container>
            <h2>Корзина</h2>
            <Card className="p-5 cardWrapper" style={{ borderRadius: '15px' }}>
                <Row className="basketWrapper d-flex"></Row>
                <div className='d-flex justify-content-center'>
                    {
                        localStorage.getItem('cards') ?
                            ''
                            :
                            <h2>Корзина пуста</h2>
                    }
                </div>
            </Card>
        </Container>
    )
})

export default Basket;