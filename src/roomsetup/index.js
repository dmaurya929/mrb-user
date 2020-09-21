import React, { useEffect, useState } from 'react' ;
import { Container, Form, Col, Row , Image, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux" ; 
import {useHistory} from 'react-router-dom' ;
import equipmentActionCreator from "./actions" ;
import "./index.css"
import { Link } from 'react-router-dom'
import RoomLayoutCard from "./components/RoomLayoutCard"
import Equipment  from "./components/Equipment" ;

const RoomSetup = () => {

    

    const booking = useSelector( storeState => storeState.bookingState) ;
    const room = useSelector( storeState => storeState.roomsState.find(room => room.id == booking.roomId)) ;
    const equipments = useSelector( storeState => storeState.equipmentsState) ;
    const dispatch = useDispatch() ;
    const history = useHistory() ;

    const { load, roomSetup } = equipmentActionCreator ;

    const [ layoutId, setLayoutId] = useState(parseInt(room.layouts[0].id)) ;
    const [ selEquipments, setSelEquipments ] = useState({}) ;


    useEffect( () => {
        dispatch(load()) ;
    }, [dispatch, load]) ;
    
    const layoutClickHandler = (id) => {
    
        setLayoutId(id) ;

    }

    const noUnitsHandler = (value, id, title) => {
        setSelEquipments({ ...selEquipments , [id]: [parseInt(value), title] }) ;
        
    }
    const selectEquipmentHandler = (id, title) => {
        if(id in selEquipments) {
            let equipments = { ...selEquipments } ;
            delete equipments[id] ;
           setSelEquipments(equipments) ;
        }
        else {
            setSelEquipments({ ...selEquipments, [id]:[1, title] })
        }

    }

    const roomSetupHandler = () => {

        
        const equipments = Object.keys(selEquipments).map( eqpId => { return {
                                                        id: eqpId,
                                                        title: selEquipments[eqpId][1],
                                                        quantity: selEquipments[eqpId][0]
        }}) ;
        const title = room.layouts.find( layout => layout.id == layoutId ).title ;
        const roomsetup = {
                    layoutId: layoutId,
                    layoutTitle: title,
                    equipments: equipments 
        } ;
        dispatch(roomSetup(roomsetup)) ;
        history.push('/foodanddrinks')
    }
    
    let price ; 
    if(booking.bookForType === "0") price = `$${room.priceForHour} per hour` ;
    else if(booking.bookForType === "1" || booking.bookForType === "2") price = `$${room.priceForHour} for half day` ;
    else if(booking.bookForType === "3") price = `$${room.priceForHour} per day ` ;

    const layoutList = room.layouts.map( layout => <RoomLayoutCard 
                                                        classname = { "layout-card "+ (layout.id == layoutId ? "primary-border": "light-border" )}
                                                        id = {layout.id} 
                                                        img = {layout.image} 
                                                        title={layout.title} 
                                                        layoutClickHandler = {layoutClickHandler} 
                                                    /> ) ;
    const equipmentList = equipments.map( equipment => <Equipment
                                                            {...equipment}
                                                            noUnitsHandler =  { noUnitsHandler }
                                                            selectEquipmentHandler = {selectEquipmentHandler}
                                                            isDisabled = {!(equipment.id in selEquipments )}
                                                        />)

return (
    <Row className = "card-row border">
        <Col className = 'border-right' md = {4}>
        <Image src={room.image} fluid />
        <Container>
        <Row className="mt-2">
            <Col Style="padding:0px">
                <h5>{room.title}</h5>
                <p className="room-p"><strong>Capacity:</strong> {room.capacity}</p>
                <p className="room-p"><strong>Price:</strong> {price}</p>
                <p className="room-p"><strong>Date:</strong> {booking.date}</p>
                <p className="room-p"><strong>Attendees:</strong> {booking.attendees}</p>
            </Col>
        </Row>
        </Container> 
        </Col>
        <Col md = {8}>
            <h4>ROOM SET-UP</h4>
            <br/>
            <h5>Layout</h5>
            <div >
            {layoutList}
            </div>
            <br/>
        <h5>Equipments</h5>
         {/*<Row>
        <Col xs={5}>
            <input type="checkbox" id="test2" />
            <label className="check-label" for="test2">Projectors</label>
            </Col>
            <Col xs={3}> 
                <input  type="number" className="no-units" id="usr"/>
                &nbsp;units 
            </Col>
            <Col xs={4}>
                $5 per day
            </Col>
        </Row> */}
        {equipmentList}
        <br/> <br/>
        <Row>
            <Col>
                <Link to="/bookroom"> <Button variant="secondry"  className="border border-black pr-4 pl-4">Back</Button> </Link>
            </Col>
            <Col>
                 <Button variant="primary"  className="border border-black pr-4 pl-4 float-right" onClick = {roomSetupHandler}>Next</Button>
            </Col>
        </Row>
        </Col>
        
    </Row>
) ;
}

export default RoomSetup ;