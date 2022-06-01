import React, { useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import BrandModal from "../components/modalsWindow/BrandModal";
import DeviceModal from "../components/modalsWindow/DeviceModal";
import TypeModal from "../components/modalsWindow/TypeModal";

const Admin = () => {
    const [brandModal, setBrandModal] = useState(false)
    const [typeModal, setTypeModal] = useState(false)
    const [deviceModal, setDeviceModal] = useState(false)

    return (
        <Container >
            <h2>Панель администратора</h2>
            <Card className="p-3">
                <Button
                    variant="outline-info"
                    className="adminBtn"
                    onClick={() => setTypeModal(true)}
                >
                    Добавить тип
                </Button>

                <Button
                    variant="outline-info"
                    className="adminBtn mt-3"
                    onClick={() => setBrandModal(true)}
                >
                    Добавить бренд
                </Button>

                <Button
                    variant="outline-info"
                    className="adminBtn mt-3"
                    onClick={() => setDeviceModal(true)}
                >
                    Добавить устройство
                </Button>
            </Card>

            <TypeModal show={typeModal} onHide={() => setTypeModal(false)}/>
            <BrandModal show={brandModal} onHide={() => setBrandModal(false)}/>
            <DeviceModal show={deviceModal} onHide={() => setDeviceModal(false)}/>
        </Container>
    )
}

export default Admin