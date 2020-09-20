import roomApi from '../services/roomApi' ;

const load = () => async (dispatch) => {
    
    const rooms = await roomApi.getAll() ;
    const action = { type: "LOAD_ROOMS", payload: rooms } ;
    dispatch(action) ;
}

export default load ;