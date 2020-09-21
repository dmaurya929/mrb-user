const initialState = {} ;

function bookingReducer(currentState = initialState, action) {
    if(action.type === "SELECTED_ROOM"){
        return {...currentState, title: action.payload.title, roomId: action.payload.id} ;  
    }

    if(action.type === "BOOK_ROOM") {
        return { ...currentState, ...action.payload}
    }

    if(action.type === "SETUP_ROOM") {
        return { ...currentState, ...action.payload}
    }

    if(action.type === "SET_FOODANDDRINKS") {
        return { ...currentState, ...action.payload}
    }
    
    return currentState ;
}

export default bookingReducer ;