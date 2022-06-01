import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "../index";
import DeviceItem from "./DeviceItem";
import { observer } from "mobx-react-lite";

const DeviceList = observer(() => {
    const { device } = useContext(Context)

    return (
        <Row className="d-flex justify-content-center" >
            {device.devices.map(onedevice => 
                <DeviceItem key={onedevice.id} device={onedevice} />
            )}
        </Row>
    )
})

export default DeviceList;