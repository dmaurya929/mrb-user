import React from 'react' ;
import { Container, Form, Col, Row , Image, Button} from 'react-bootstrap'
import img from '../panaromic.jpeg' ;
import layout from '../banquet.jpg' ;
import "./index.css"
import { Link } from 'react-router-dom'

const RoomSetup = () => {
    const roomType = "Small conference room" ;
    const capacity = 4 ;
    const price = "$4 per hour" ;
return (
    <Row className = "card-row border">
        <Col className = 'border-right' md = {4}>
        <Image src={img} fluid />
        <Container>
        <Row className="mt-2">
            <Col Style="padding:0px">
                <h5>{roomType}</h5>
                <p className="room-p"><strong>Capacity:</strong> {capacity}</p>
                <p className="room-p"><strong>Price:</strong> {price}</p>
                <p className="room-p"><strong>Date:</strong> {"--"}</p>
                <p className="room-p"><strong>Attendees:</strong> {"--"}</p>
            </Col>
        </Row>
        </Container> 
        </Col>
        <Col md = {8}>
            <h4>ROOM SET-UP</h4>
            <br/>
            <h5>Layout</h5>
            <div >
            <div className="layout-card light-border">
                <Image className="layout-img" src={layout} />
                <div className = 'layout-text'>Banquet Rounds</div>
            </div>
            <div className="layout-card primary-border">
                <Image className="layout-img" src={layout}/>
                <div className = 'layout-text'>Banquet Rounds</div>
            </div>
            <div className="layout-card light-border">
                <Image className="layout-img" src={layout} />
                <div className = 'layout-text'>Banquet Rounds</div>
            </div>
            <div className="layout-card light-border">
                <Image className="layout-img" src={layout} />
                <div className = 'layout-text'>Banquet Rounds</div>
            </div>
            <div className="layout-card light-border">
                <Image className="layout-img" src={layout} />
                <div className = 'layout-text'>Banquet Rounds</div>
            </div>
            </div>
            <br/>
        <h5>Equipments</h5>
        <Row>
            <Col xs={5}>
           
            
            <input type="checkbox" id="test1" />
            <label className="check-label" for="test1">Projectors and Screen</label>

            </Col>
            <Col xs={3}>
                1
            </Col>
            <Col xs={4}>
                $5 per day
            </Col>
        </Row>
        <Row>
        <Col xs={5}>
            <input type="checkbox" id="test2" />
            <label className="check-label" for="test2">Projectors</label>
            </Col>
            <Col xs={3}> 
                <input  type="number" className=" abcc" id="usr"/>
                &nbsp;units 
            </Col>
            <Col xs={4}>
                $5 per day
            </Col>
        </Row>
        <br/> <br/>
        <Row>
            <Col>
                <Link to=""> <Button variant="secondry"  className="border border-black pr-4 pl-4">Back</Button></Link>
            </Col>
            <Col>
                <Link to=""> <Button variant="primary"  className="border border-black pr-4 pl-4 float-right">Next</Button></Link>
            </Col>
        </Row>
        </Col>
        
    </Row>
) ;
}

export default RoomSetup ;