import * as types from './../contants/SaleOrder'

var initialState={
    saleOrderID: "",
    customerID:-1,
    saleOrderTypeID: 0,
    totalAmount: 0,
    lstSaleOrderDetails:[],
    
};
const findIndexByID=(list,id)=>{
    var result=-1;
    list.forEach((element,index) => {
        if(element.saleOrderDetailID===id){
            console.log(123);
            result=index
        }
        
    });
    return result;
}
const findIndexByProductID=(list,id)=>{
    var result=-1;
    list.forEach((element,index) => {
        if(element.productID===id){
            result=index
        }
        
    });
    return result;
}
const isCheckedDetailExist=(list,id)=>{
    var result=false;
    list.forEach((element,index) => {
        if(element.saleOrderDetailID===id){
            if(element.isNoExist===true){
                result=true;
            }
        }
    });
    return result;
}
const conculationTotalAmount=(list)=>{
    var result=0;
    list.forEach((element,index) => {
        if(!element.isDeleted){
            result+=Number(element.salePrice)*Number(element.quantity)*(1+Number(element.vat));
        }
    });
    return result;

}
const isCheckedDeleled=(list,id)=>{
    var result=false;
    list.forEach((element,index) => {
        if(element.productID===id){
            if(element.isDeleted===true){
                result=true;
            }
        }
    });
    return result;
}
const SaleOrderReducer=(state=initialState,action)=>{
    var objSaleOrder;
    var totalAmount
    switch(action.type){
        case types.FETCH_SALE_ORDER:
            return action.payload.saleOrder;
        case types.SET_SALE_ORDER_DEFAULT:
            var defaultState={
                saleOrderID: "",
                customerID:-1,
                saleOrderTypeID: 0,
                totalAmount: 0,
                lstSaleOrderDetails:[],
                
            };
            return defaultState;
        case types.CHANGE_INFO_SALEORDER:        
            return {...state,...action.payload.saleOrder};
        case types.EDIT_SALEORDER_DETAIL:
            
            var objSaleOrderDetail=action.payload.saleOrderDetail;
            objSaleOrder=Object.assign({},state);
            var list=[...objSaleOrder.lstSaleOrderDetails];
            var indexByDetailID=findIndexByID(list,objSaleOrderDetail.saleOrderDetailID);
            var indexByProductID=findIndexByProductID(list,objSaleOrderDetail.productID);
            var isNoExist=isCheckedDetailExist(list,objSaleOrderDetail.saleOrderDetailID);
            var isCheckDeleted=isCheckedDeleled(list,objSaleOrderDetail.productID);
            objSaleOrderDetail.saleOrderID=objSaleOrder.saleOrderID;
            //kiểm tra có tồn tại sản phẩm này trong list không
            //xử lý update quantity
            if(indexByProductID!==-1&&indexByDetailID!==indexByProductID&&!isCheckDeleted){
                //hỏi người dùng có muốn tăng số lượng không
                var isOk=window.confirm('Đã có chi tiết hóa đơn sản phẩm này! Bạn có muốn tăng số lượng sản phẩm không?')
                if(isOk){
                    var quantity;
                    quantity=Number(list[indexByProductID].quantity);
                    quantity+=Number(objSaleOrderDetail.quantity);
                    list[indexByProductID].quantity=quantity;
                    if(list[indexByProductID].isNoExist!==true){
                        list[indexByProductID].isEdited=true;
                    }                   
                    if(isNoExist){
                        if(indexByDetailID){}
                        list.splice(indexByDetailID,1);
                    }else{
                        if(indexByDetailID!==-1){
                            list[indexByDetailID].isDeleted=true;
                            list[indexByDetailID].isEdited=false;
                        }
                        
                    }
               
                }
                //xử lý câp nhật
            }else{
                if(indexByDetailID!==-1){
            
                    list[indexByDetailID]=objSaleOrderDetail;
                }else{
                    list.push(objSaleOrderDetail);
                }
            }
            totalAmount=conculationTotalAmount(list);
            objSaleOrder.lstSaleOrderDetails=[...list];
            objSaleOrder.totalAmount=totalAmount;
                
            return {...state,...objSaleOrder};
        case types.DELETE_SALEORDER_DETAIL:
                var saleOrderDetailID=action.payload.saleOrderDetailID;
                objSaleOrder=Object.assign({},state);
                var listSaleOrderDetail=[...objSaleOrder.lstSaleOrderDetails];
                var index=findIndexByID(listSaleOrderDetail,saleOrderDetailID);
                if(index!==-1){
                    if(listSaleOrderDetail[index].isNoExist){
                        listSaleOrderDetail.splice(index,1);
                    }else{
                        listSaleOrderDetail[index].isDeleted=true;
                        listSaleOrderDetail[index].isEdited=false;
                    }
                }
                totalAmount=conculationTotalAmount(listSaleOrderDetail);

                objSaleOrder.lstSaleOrderDetails=[...listSaleOrderDetail];
                objSaleOrder.totalAmount=totalAmount;
                return {...state,...objSaleOrder};
        default:
            return state;
    }

}
export default SaleOrderReducer;