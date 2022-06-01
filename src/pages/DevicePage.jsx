import React, { useContext, useEffect, useState } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "..";
import { fetchOneDevice } from "../http/deviceApi";

const DevicePage = () => {
    const {user} = useContext(Context);
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    

    return (
        <Container style={{ width: '90%' }} className="mt-3">
            <Row>
                <Col md={4} >
                    <img width={350} src={process.env.REACT_APP_BASE_URL + device.img} />
                </Col>
                <Col md={4} >
                    <h2>{device.name}</h2>
                    <Row className="mx-1">
                        {device.info.map(info =>
                            <Row key={info.id} className='mb-2'>
                                {/* <h6>{info.title}</h6><p>{info.description}</p> */}
                                {info.description != null ? info.title + ': ' + info.description : ''}
                            </Row>
                        )}
                    </Row>
                </Col>
                <Col md={4} className="mt-5">
                    <Card
                        className="d-flex justify-content-center align-items-center p-5"
                        style={{width:'100%'}}
                    >
                        <h3 className="d-flex justify-content-center">{device.price} рублей</h3>
                        <Button
                            variant="primary"
                            style={{ backgroundColor: '#00BFFF', border: '#00BFFF' }}
                            onClick={() => console.log('ad')}
                        >
                            В корзину
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default DevicePage;