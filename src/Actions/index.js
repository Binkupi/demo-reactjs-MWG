import * as types from './../contants/SaleOrder'
import  callApi from '../Utils/callApi'
//toggle status 
export const toggleStatus=()=>{
    return {
        type:types.TOGGLE_STATUS,
        
    }
}

//setList Product
export const fetchListSaleOrder=(ListSaleOrder)=>{
    return {
        type:types.FETCH_LIST_SALE_ORDER,
        payload:{
            listSaleOrder:ListSaleOrder
        }
        
    }
}
//Get List Product from apo
export const fetchListSaleOrderRequest=(objSearch)=>{
    return(dispatch)=> {
        return callApi('SaleOrder/searchData','POST',objSearch)
        .then((res)=>{
            
            dispatch(fetchListSaleOrder(res.data));
            
        })
    }
}