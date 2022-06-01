import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "./../index";

const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <ListGroup className="mt-3">
            {device.brands.map(brand =>
                <ListGroup.Item
                    key={brand.id}
                    style={{cursor: 'pointer'}}
                    onClick={() => device.setSelectedBrand(brand)}
                    active={brand.id === device.selectedBrand.id}
                    className='leftBar_btn'
                >
                    {brand.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})


export default BrandBar;