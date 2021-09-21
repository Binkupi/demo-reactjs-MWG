import React from 'react';
import * as actions from './../../Actions'
import { useSelector,useDispatch } from 'react-redux';
import EditInfoSaleOrder from '../../components/SaleOrder/InfoSaleOrder/Edit_InfoSaleOrder';
import EditListSaleOrderDetail from '../../components/SaleOrder/ListSaleOrderDetail/Edit_ListSaleOrderDetail';
import FormEditSaleOrderDetail from '../../components/SaleOrder/Form/FormEdit_SaleOrderDetail'
import ButtonComeBackHome from '../../components/Button/Button_ComeBackHome'

const Action_SaleOrderPage=()=>{

    const dispatch=useDispatch();

    return (
        <>  
            <h1 className="text-center mb-1">Chỉnh sửa thông tin đơn hàng</h1>
            <div>
                <EditInfoSaleOrder />
            </div>

            <div className="mt-2">
                <EditListSaleOrderDetail />
            </div>
            <div ng-show="isShowFormEditOrderDetail">
                <FormEditSaleOrderDetail />
            </div>
            <ButtonComeBackHome />
        </>
    )
}
export default Action_SaleOrderPage;