const initialState = [] ;

function foodAndDrinksReducer (currentState = initialState, action){
    if( action.type === "LOAD_FOODANDDRINKS"){
        return action.payload ;
    }
    return currentState ;
}

export default foodAndDrinksReducer ;