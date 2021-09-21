import * as types from './../contants/SaleOrder'

var initialState=false;

const StatusReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.TOGGLE_STATUS:
            console.log('co');
            console.log(state);
            return !state;
        default:
            return state;
    }

}
export default StatusReducer;