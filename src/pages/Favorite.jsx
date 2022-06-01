import { observer } from "mobx-react-lite";
import React from "react";
import { Container, Card, Row } from "react-bootstrap";

const Favorite = observer(() => {
    window.setTimeout(() => {
        document.querySelector('.favoriteWrapper').innerHTML = localStorage.getItem('favorites')
    }, 0);

    document.addEventListener('click', function (e) {
        if (e.target.className == 'mx-2 addFavoriteBtn btn btn-primary deleteFavoriteBtn') {
            const card = (e.target).closest('.card')
            card.parentNode.removeChild(card)

            const wrap = document.querySelector('.favoriteWrapper').innerHTML = '';
            localStorage.setItem('favorites', wrap)
        }
    })

    return (
        <Container>
            <h2>Избранное</h2>
            <Card className="p-5 cardWrapper" style={{ borderRadius: '15px' }}>
                <Row className="favoriteWrapper d-flex"></Row>
                <div className='d-flex justify-content-center'>
                    {
                        localStorage.getItem('favorites') ? 
                            '' : <h2>Список избранного пуст</h2>
                    }
                </div>
            </Card>
        </Container>
    )
})

export default Favorite;