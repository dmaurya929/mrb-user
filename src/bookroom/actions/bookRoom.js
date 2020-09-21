const bookRoom = (roomBook) => (dispatch) => {
    const action = { type: "BOOK_ROOM", payload:roomBook  }
    dispatch(action) ;
}
export default bookRoom ;  
