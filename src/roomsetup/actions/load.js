import equipmentApi from "../services/equipmentApi" ;

const load  = () => async (dispatch) => {
    const data = await equipmentApi.getAll() ;
    const action = { type: "LOAD_EQUIPMENTS", payload: data } ;
    dispatch(action) ;
} 

export default load ;