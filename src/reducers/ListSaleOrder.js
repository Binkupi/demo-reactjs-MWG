import * as types from './../contants/SaleOrder'

var initialState=[];

const ListSaleOrderReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.FETCH_LIST_SALE_ORDER:
            return action.payload.listSaleOrder;
        default:
            return state;
    }

}
export default ListSaleOrderReducer;