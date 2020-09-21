const initialState = [] ;

function equipmentsReducer (currentState = initialState, action){
    if( action.type === "LOAD_EQUIPMENTS"){
        return action.payload ;
    }
    return currentState ;
}

export default equipmentsReducer ;