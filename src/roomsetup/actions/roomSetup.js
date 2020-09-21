const roomSetup = (roomsetup) => (dispatch) => {
    const action = { type: "SETUP_ROOM", payload:roomsetup }
    dispatch(action) ;
}
export default roomSetup;
