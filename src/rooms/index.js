import React , { useEffect , useState} from 'react' ;
import panaromic from '../panaromic.jpeg' ;
import './index.css'
import RoomCard from './components/RoomCard'
import { useDispatch, useSelector } from 'react-redux';
import roomsActionCreator from './actions' ;
import { useHistory } from 'react-router-dom';

const Rooms = () => {

    const rooms = useSelector( storeState => storeState.roomsState ) ;
    const { load, selectedRoom } = roomsActionCreator ;
    const dispatch = useDispatch() ;
    const history = useHistory() ;
    
    useEffect( () => {
      dispatch(load()) ;
        
    }, [dispatch, load] ) ;
    
    const selectedRoomHandler = (id, title) => {
        dispatch(selectedRoom(id, title)) ;
        history.push("/bookroom") ;

    }

    const roomList = rooms.map( room => {
        let priceList = [] ;
        if(room.bookForDay) priceList.push(`$${room.priceForDay} per day`) ;
        if(room.bookForHalfDay) priceList.push(`$${room.priceForHalfDay} for half day`) ;
        if(room.bookForHour) priceList.push(`$${room.priceForHour} per hour`) ;
    
       return  <RoomCard
                key = {room.id}
                id = {room.id} 
                img = {room.image}
                roomTitle = {room.title}
                description = {room.description}
                capacity    = {room.capacity}
                price={priceList}
                selectedRoomHandler = { selectedRoomHandler }
            /> 

    })
   
    return (
        <>
       {roomList}
    </>
    ) ;
}

export default Rooms ;