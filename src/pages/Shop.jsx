import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Context } from "../index";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";
import { fetchBrands, fetchDevices, fetchTypes } from "./../http/deviceApi";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const { device } = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])

    return (
        <Container style={{ width: '100%' }} className='d-flex justify-content-between'>

            <Row style={{ width: '100%' }}>
                <div style={{ width: '17%' }}>
                    <Col >
                        <ListGroup className="mb-3">
                            <ListGroup.Item
                                style={{ cursor: 'pointer', }}
                                onClick={() => { device.setSelectedType({}); device.setSelectedBrand({}) }}
                                className="leftBar_btn"
                            >
                                Сброс стилей
                            </ListGroup.Item>
                        </ListGroup>
                        <TypeBar />
                        <BrandBar />
                    </Col>
                </div>
                <div style={{ width: '80%' }}>
                    <Col >
                        <DeviceList />
                        <Pages />
                    </Col>
                </div>
            </Row>
        </Container>
    )
})

export default Shop