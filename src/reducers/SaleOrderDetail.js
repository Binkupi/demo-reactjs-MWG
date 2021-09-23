import * as types from './../contants/SaleOrder'

var initialState={
    idno: 0,
    isDeleted: false,
    isEdited: false,
    isNoExist: true,
    isSelected: false,
    productID: "-1",
    productName: "",
    promotionID: 0,
    quantity: 0,
    saleOrderID:'',
    saleOrderDetailID: "",
    salePrice: 0,
    vat: 0,
};

const SaleOrderDetailReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_INFO_SALEORDER_DETAIL:
            if(action.payload.saleOrderDetail===null){
                var temState={
                    idno: 0,
                    isDeleted: false,
                    isEdited: false,
                    isNoExist: true,
                    isSelected: false,
                    productID: "-1",
                    productName: "",
                    promotionID: 0,
                    quantity: 0,
                    saleOrderID:'',
                    saleOrderDetailID: "",
                    salePrice: 0,
                    vat: 0,
                };
                return temState;
            }
        return action.payload.saleOrderDetail;
        default:
            return state;
    }

}
export default SaleOrderDetailReducer;