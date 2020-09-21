import React from 'react' ;
import {   Col, Row } from 'react-bootstrap'

const FoodComponent = ({id, title, price, selectFoodHandler,noUnitsHandler, isDisabled}) => {

    return (
        <Row>
            <Col xs={5}>
                <input type="checkbox" id={"f"+id} name = {title} onClick = {(evt) => selectFoodHandler(id, evt.target.name)} />
                <label className="check-label" htmlFor={"f"+id}>{title}</label>
            </Col>
            <Col xs={3}>
            <input  type="number" className="no-units" name = {title} onChange = {(evt) => noUnitsHandler( id,evt.target.name, evt.target.value) } min="1" defaultValue ="1" disabled={isDisabled}/>
                                        &nbsp;unit
            </Col>
            <Col xs={4}>
                ${price} per unit
            </Col>
        </Row>
    )
}

export default FoodComponent ;