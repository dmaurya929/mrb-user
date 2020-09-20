const initialState = [] ;

function roomsReducer (currentState = initialState, action){
    if( action.type === "LOAD_ROOMS"){
        return action.payload ;
    }
    return currentState ;
}

export default roomsReducer ;