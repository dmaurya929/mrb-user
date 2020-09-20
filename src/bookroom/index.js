import React, { useState } from 'react'
import { Container, Form, Col, Row , Image, Button} from 'react-bootstrap'
import img from '../panaromic.jpeg'
import {Link} from 'react-router-dom' ;
import "./index.css"
import { useSelector } from 'react-redux';
import TimeSlots from './components/TimeSlots'
import  getDuration  from './services/bookroomApi' ; 

const BookRoom = () => {

    const [date, setDate] = useState(null) ;
    const [selectedDuration, setSelectedDuration] = useState(null) ;
    const [hourSlots, setHourSlots] = useState(true) ;
    const [halfDay, setHalfDay] = useState(null) ;
    const [day, setDay] = useState(false) ;
    const [attendees, setAttendees] = useState(1) ;
    

    const booking = useSelector( storeState => storeState.bookingState) ;
    const room = useSelector( storeState => storeState.roomsState.find(room => room.id == booking.roomId)) ;

    const dateChangeHandler = async (evt) => {
        const dt = evt.target.value ;
        const response = await getDuration(room.id, dt) ;
        
            
        const { hourSlots, halfDay, day} = response ;
        setHourSlots(hourSlots) ;
        setHalfDay(halfDay) ;
        setDay(day) ;
        setDate(dt) ;
        
    }

    const durationHandler = (evt) => {
        setSelectedDuration(evt.target.value) ;
    }

    const attendeesHandler = (evt) => {
        const attende = evt.target.value
        if( attende <= room.capacity && attende >= 0) setAttendees(attende) 
    }
    const hourSlotHandler = (evt, i) => {
        let clss = evt.target.className ;
        console.log(i) ;
        if(clss.includes("btn-outline-primary")){
        clss = clss.replace("btn-outline-primary", "btn-primary") ;
        }
        else {
        clss = clss.replace("btn-primary","btn-outline-primary") ;
        }
        evt.target.className = clss ;
    }


    
    let prices = [], durationList = [<option value="" selected disabled hidden>--Select--</option>] ;
    
    if(room.bookForHour) {
        
        prices.push(`$${room.priceForHour} per hour`) ;
        if(hourSlots != null) durationList.push(<option value = "0">Hour</option>) ;
    }
    if(room.bookForHalfDay) {
        prices.push(`$${room.priceForHalfDay} for half day`) ;
        if(halfDay != null) {
             durationList.push(<option value = "1">Half Day - Morning</option>) ;
            durationList.push(<option value = "2">Half Day - Afternoon</option>) ;
        }
    }
    if(room.bookForDay){
         prices.push(`$${room.priceForDay} per day`) ;
         if(day) durationList.push(<option value = "3">Day</option>) ;
    }
    
    console.log(durationList) ;
    const isHourly = room.bookForHour ; 

    

    const priceList = prices.map(p => <p className='room-p'>{p}</p>) ;
    //const durationList = durations.map( duration => <option >{duration}</option>) ;

    return (
        <Row className = "card-row border">
            <Col md = {4}>
            <Image src={img} fluid />
            <Container>
            <Row >
                <Col noGutters>
                    <h5>Price:</h5>
                    {priceList}
                </Col>
            </Row>
            </Container> 
            </Col>
            <Col md = {8}>
                <h3>{room.title}</h3>
                <div>Capacity: { room.capacity }</div><br/>

                <Form>
                    <Form.Group as={Row} controlId="formHorizontalDate">
                        <Form.Label column sm={2}>
                        Date
                        </Form.Label>
                        <Col sm={6}>
                        <Form.Control type="date" placeholder="Date" onChange= { dateChangeHandler }/>
                        </Col>
                    </Form.Group>

                    
                    <Form.Group as = {Row} controlId="durationSelection">
                        <Form.Label column sm={2}>Duration</Form.Label>
                        <Col sm = {6}>
                        <Form.Control as="select" onChange = {durationHandler} disabled={date === null} >
                            {durationList}
                        </Form.Control>
                        </Col>
                    </Form.Group>

                    {(isHourly&&selectedDuration==="0") && <Form.Group as={Row} controlId="from-to">
                        <Form.Label column sm={2}>
                        From-to
                        </Form.Label>
                        <Col sm={10}>
                        < TimeSlots hourSlots = {hourSlots} hourSlotHandler = {hourSlotHandler} />
                        </Col>
                    </Form.Group>}

                    <Form.Group as={Row} controlId="attendees">
                        <Form.Label column sm={2}>
                        Attendees
                        </Form.Label>
                        <Col sm={3}>
                        <Form.Control type="number" placeholder="" min="0" max={room.capacity} value={attendees} onChange = { attendeesHandler } />
                        </Col>
                    </Form.Group>
                    

                    <Form.Group as={Row}>
                        <Col  xs = {5} sm={{ offset: 2, span:3 }}>
                        <Link to="/rooms"> <Button variant="secondry"  className="border border-black pr-4 pl-4">Back</Button></Link>
                        </Col>
                        <Col >
                        <Link to="/roomsetup"><Button variant="primary" className="pr-4 pl-4">Next</Button></Link>
                        </Col>
                    </Form.Group>
                 </Form>           
            </Col>
        </Row>
    ) ;
}

export default BookRoom ;