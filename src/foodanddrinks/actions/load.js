import foodAndDrinksApi from "../services/foodAndDrinksApi" ;

const load  = () => async (dispatch) => {
    const data = await foodAndDrinksApi.getAll() ;
    const action = { type: "LOAD_FOODANDDRINKS", payload: data } ;
    dispatch(action) ;
} 

export default load ;