import React, {useState , useEffect} from 'react' ;
import { Container, Form, Col, Row , Image, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom' ;

import "./index.css"
import { Link } from 'react-router-dom'
import foodAndDrinksActionCreator from './actions' ;
import FoodComponent from './components/FoodComponent';

const FoodAndDrinks = () => {

    const booking = useSelector( storeState => storeState.bookingState) ;
    const room = useSelector( storeState => storeState.roomsState.find(room => room.id == booking.roomId)) ;
    const foodAndDrinks = useSelector( storeState => storeState.foodAndDrinksState) ;

    const dispatch = useDispatch() ;
    const history = useHistory() ;
    const { load, foodDrinks } = foodAndDrinksActionCreator ;

    const [ selFoodAndDrinks, setSelFoodAndDrinks] = useState({}) ;

    useEffect( () => {
        dispatch(load()) ;
    }, [dispatch, load]) ;

    const noUnitsHandler = (id, title, value) => {
        setSelFoodAndDrinks({ ...selFoodAndDrinks, [id]: [parseInt(value), title] }) ;
    }

    const selectFoodHandler = (id, title) => {
        if(id in selFoodAndDrinks) {
            let foodAndDrinks = { ...selFoodAndDrinks } ;
            delete foodAndDrinks[id] ;
            setSelFoodAndDrinks(foodAndDrinks) ;
        }
        else {
            setSelFoodAndDrinks({ ...selFoodAndDrinks, [id]:[1, title] })
        }
    }

    const foodDrinksHandler = () => {

        
        const foodAndDrinks = Object.keys(selFoodAndDrinks).map( (foodDrinks) => { return {
                                                        id: foodDrinks,
                                                        title: selFoodAndDrinks[foodDrinks][1],
                                                        quantity: selFoodAndDrinks[foodDrinks][0]
        }}) ;

        const foodDrink = {
                    food: foodAndDrinks 
        } ;
        dispatch(foodDrinks(foodDrink)) ;
        //history.push('/foodanddrinks')
    }

    let price ; 
    if(booking.bookForType === "0") price = `$${room.priceForHour} per hour` ;
    else if(booking.bookForType === "1" || booking.bookForType === "2") price = `$${room.priceForHour} for half day` ;
    else if(booking.bookForType === "3") price = `$${room.priceForHour} per day` ;
    
    let equipmnts = "" ;
    booking.equipments.forEach( equipment => { equipmnts += `${equipment.title} x ${equipment.quantity} `}) ;

    const foodAndDrinksList = foodAndDrinks.map( foodAndDrinks => <FoodComponent
                                            {...foodAndDrinks}
                                            noUnitsHandler =  { noUnitsHandler }
                                            selectFoodHandler = {selectFoodHandler}
                                            isDisabled = { !(foodAndDrinks.id in selFoodAndDrinks) }
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
                <p className="room-p"><strong>Layout:</strong> {booking.layoutTitle}</p>
                <p Style="line-height; 1.4" className="room-p"><strong>Equipment:</strong> <span Style="line-height:1.3">{equipmnts}</span></p>
            </Col>
        </Row>
        </Container> 
        </Col>
        <Col md = {8}>
            
            <h4>FOOD {"&"} DRINKS</h4>
            <br/>
        
            {foodAndDrinksList}
        <br/> <br/>
        <Row className = "btn-row">
            <Col>
            <Link to="/roomsetup"><Button variant="secondry"  className="border border-black pr-4 pl-4">Back</Button></Link>
            </Col>
            <Col >
                 <Button variant="primary"  className="border border-black pr-4 pl-4 float-right" onClick = {foodDrinksHandler}>Next</Button>
            </Col>
        </Row>
        </Col>
    </Row>
) ;
}

export default FoodAndDrinks ;