import React from 'react' ;
import {   Col, Row } from 'react-bootstrap'

const Equipment = ({ id, title, bookMultipleUnits, price, isPerHour, noUnitsHandler, selectEquipmentHandler, isDisabled }) => {

    return (
        <Row>
            <Col xs={5}>
            <input type="checkbox" id = {"c"+id}  name = {title} onClick = { (evt) =>  selectEquipmentHandler(id, evt.target.name) }  />
            <label className="check-label"  htmlFor = {"c"+id} >{title}</label>
            </Col>
            <Col xs={3} >
                { bookMultipleUnits ? <><input  type="number" className="no-units" name = {title} onChange = {(evt) => noUnitsHandler(evt.target.value, id, evt.target.name) } min="1" defaultValue ="1" disabled = {isDisabled}/>
                                        &nbsp;units </>: 1 }
            </Col>
            <Col xs={4}>
                ${price} {isPerHour?"per hour":"per booking"}
            </Col>
        </Row>
    )
}

export default Equipment ;
