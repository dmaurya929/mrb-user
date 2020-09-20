import { combineReducers } from 'redux';
import bookingReducer from './bookingReducer';
import roomsReducer from './roomsReducer' ;

const rootReducer = combineReducers({
    bookingState: bookingReducer,
    roomsState: roomsReducer,  
  }) ;

export default rootReducer ;