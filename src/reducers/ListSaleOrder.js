import * as types from './../contants/SaleOrder'

var initialState=[];

const ListSaleOrderReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.FETCH_LIST_SALE_ORDER:
            console.log('có');
            console.log(action);
            return action.payload;
        default:
            return state;
    }

}
export default ListSaleOrderReducer;