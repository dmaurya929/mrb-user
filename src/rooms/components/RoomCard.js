import React, {useEffect} from 'react' ;
import autosize from 'autosize' ;
import {Col, Row, Image,Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const RoomCard = ({ id,img, roomTitle, description, capacity, price, selectedRoomHandler }) => {
    useEffect(()=>{
        autosize(textarea) ;
        
    },[]) ;
    let textarea;

    const priceList = price.map(p => <p className = 'room-p'>{p}</p> ) ;
    
  return (
    <Row className = "card-row border">
    <Col md = {5}>
    <Image src={img} fluid />
    <Container>
    <Row >
        <Col Style="padding:0px">
            <h5>Capacity:</h5>
            <p className='room-p'>{capacity} people
            </p>
        </Col>
        <Col>
        <h5>Price:</h5>
        {priceList}
    </Col>
    </Row>
    </Container> 
    </Col>
    <Col md = {7}>
        <h2>{roomTitle}</h2>
        <textarea className = 'text-area' 
         ref={(c) => (textarea = c)}
         value = {description} 
         />
        <Button id = {id} onClick = { () => { selectedRoomHandler(id, roomTitle) } }  className = 'float-right' variant="primary">Book This Room</Button>           
    </Col>
</Row>
  )   ;
}

export default RoomCard ;