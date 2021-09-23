import * as types from './../contants/SaleOrder'
import  callApi from '../Utils/callApi'
//toggle status 
export const toggleFormEditDetail=()=>{
    return {
        type:types.TOGGLE_FORM_EDIT_ORDER_DETAIL,
        
    }
}

//toggle status 
export const openFormEditDetail=()=>{
    return {
        type:types.OPEN_FORM_EDIT_ORDER_DETAIL,
        
    }
}
//toggle status 
export const closeFormEditDetail=()=>{
    return {
        type:types.CLOSE_FORM_EDIT_ORDER_DETAIL,
        
    }
}

//change info saleorder 
export const changeInfoSaleOrder=(saleOrder)=>{
    return {
        type:types.CHANGE_INFO_SALEORDER,
        payload:{
            saleOrder:saleOrder
        }
        
    }
}

//onLoadPageHome by delete 
export const onLoadPageHome=()=>{
    return {
        type:types.ON_LOAD_PAGE_HOME,
    
        
    }
}

//get info saleorderDetail 
export const getInfoSaleOrderDetail=(saleOrderDetail)=>{
    return {
        type:types.GET_INFO_SALEORDER_DETAIL,
        payload:{
            saleOrderDetail:saleOrderDetail
        }
        
    }
}

//set list SaleOrder to redux
export const fetchListSaleOrder=(ListSaleOrder)=>{
    return {
        type:types.FETCH_LIST_SALE_ORDER,
        payload:{
            listSaleOrder:ListSaleOrder
        }
        
    }
}


//Get List saleOrder from api
export const fetchListSaleOrderRequest=(objSearch,limits)=>{
    console.log(limits);
    return(dispatch)=> {
        return callApi(`SaleOrder/searchData?limits=${limits}`,'POST',objSearch)
        .then((res)=>{
            
            dispatch(fetchListSaleOrder(res.data));
            
        })
    }
}
//setList Product
export const fetchSaleOrder=(saleOrder)=>{
    return {
        type:types.FETCH_SALE_ORDER,
        payload:{
            saleOrder:saleOrder
        }
        
    }
}

//get SaleOrder default from redux
export const getSaleOrderDefault=()=>{
    return {
        type:types.SET_SALE_ORDER_DEFAULT
              
    }
}


//Get saleOrder from api
export const fetchSaleOrderRequest=(id)=>{
    return(dispatch)=> {
        return callApi(`SaleOrder/${id}`,'GET',null)
        .then((res)=>{
            
            dispatch(fetchSaleOrder(res.data));
            
        })
    }
}
//Get List Product from apo
export const fetchCustomer=()=>{
    return callApi(`customer`,'GET',null);

}

//Get List Product from apo
export const fetchProduct=()=>{
    return callApi(`product`,'POST',{

            "keyword":"",
            "searchType":1

    });

}
//Get List Product from apo
export const onAddSaleOrderRequest=(objSaleOrder)=>{
    return callApi(`SaleOrder/insert`,'POST',objSaleOrder);

}
export const onUpdateSaleOrderRequest=(objSaleOrder)=>{
    return callApi(`SaleOrder/update`,'PUT',objSaleOrder);

}

export const onDeleteSaleOrderRequest=(objSaleOrder)=>{
    return callApi(`SaleOrder/delete`,'DELETE',objSaleOrder);
}
export const Edit_saleOrderDetail=(saleOrderDetail)=>{
    return {
        type:types.EDIT_SALEORDER_DETAIL,
        payload:{
            saleOrderDetail:saleOrderDetail
        }
    }

}

export const delete_SaleOrderDetail=(saleOrderDetailID)=>{
    return {
        type:types.DELETE_SALEORDER_DETAIL,
        payload:{
            saleOrderDetailID:saleOrderDetailID
        }
    }

}
