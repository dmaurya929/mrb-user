import { combineReducers } from 'redux';
import bookingReducer from './bookingReducer';
import equipmentsReducer from './equipmentsReducer';
import foodAndDrinksReducer from './foodAndDrinksReducer';
import roomsReducer from './roomsReducer' ;

const rootReducer = combineReducers({
    bookingState: bookingReducer,
    roomsState: roomsReducer, 
    equipmentsState: equipmentsReducer,
    foodAndDrinksState: foodAndDrinksReducer 
  }) ;

export default rootReducer ;