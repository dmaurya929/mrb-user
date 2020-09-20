const initialState = {} ;

function bookingReducer(currentState = initialState, action) {
    if(action.type === "SELECTED_ROOM"){
        console.log("bookinng reducer ...........")
        return {...currentState, title: action.payload.title, roomId: action.payload.id} ;
        
    }
    return currentState ;
}

export default bookingReducer ;