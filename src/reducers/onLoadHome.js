import * as types from './../contants/SaleOrder'

var initialState=false;

const StatusReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.ON_LOAD_PAGE_HOME:
            return !state;
        default:
            return state;
    }

}
export default StatusReducer;