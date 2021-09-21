import React from 'react';
import ShowListSaleOrderDetail from '../../components/SaleOrder/ListSaleOrderDetail/Show_ListSaleOrderDetail';
import ShowInfoSaleOrder from '../../components/SaleOrder/InfoSaleOrder/Show_InfoSaleOrder';
import ButtonComeBackHome from '../../components/Button/Button_ComeBackHome'

const ShowSaleOrderPage=()=>{
    return (
        < >
            <h1 className="text-center mb-1">Thông tin đơn hàng</h1>
            <div>
                <ShowInfoSaleOrder />
            </div>
            <div className="text-left mt-2 mb-1">
                <button className="btn btn-warning mr-3" ng-click="onEditDetail(objSaleOrder.SaleOrderID)"><span><i className="fas fa-edit"></i></span> Chỉnh sửa</button>
                <button className="btn btn-danger " ng-click="onDeleteOrder(objSaleOrder)"><span><i className="far fa-trash-alt"></i></span> Xóa hóa đơn</button>
            </div>
            <div className="mt-2">
                <ShowListSaleOrderDetail />
            </div>
            <div className="text-right mt-5">
                <ButtonComeBackHome />
            </div>
        </>
    )
    
}
export default ShowSaleOrderPage;