const selectedRoom = (id, title) => async (dispatch) => {
    
    const action = { type: "SELECTED_ROOM", payload: { id, title } } ;
    
    dispatch(action) ;
}

export default selectedRoom  ;