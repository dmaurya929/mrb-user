const foodDrinks = (foodanddrinks) => (dispatch) => {
    const action = { type: "SET_FOODANDDRINKS", payload:foodanddrinks }
    dispatch(action) ;
}
export default foodDrinks;