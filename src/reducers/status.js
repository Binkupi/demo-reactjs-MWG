import * as types from './../contants/SaleOrder'

var initialState=false;

const StatusReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.TOGGLE_FORM_EDIT_ORDER_DETAIL:
            return !state;
        case types.OPEN_FORM_EDIT_ORDER_DETAIL:
            return true;
        case types.CLOSE_FORM_EDIT_ORDER_DETAIL:
            return false;
        default:
            return state;
    }

}
export default StatusReducer;