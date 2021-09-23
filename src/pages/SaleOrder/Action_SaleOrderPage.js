import React from 'react';
import * as actions from './../../Actions';
import {useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import EditInfoSaleOrder from '../../components/SaleOrder/InfoSaleOrder/Edit_InfoSaleOrder';
import EditListSaleOrderDetail from '../../components/SaleOrder/ListSaleOrderDetail/Edit_ListSaleOrderDetail';
import FormEditSaleOrderDetail from '../../components/SaleOrder/Form/FormEdit_SaleOrderDetail'
import ButtonComeBackHome from '../../components/Button/Button_ComeBackHome'

const Action_SaleOrderPage=({match})=>{

    const dispatch=useDispatch();
    //const [status,setStatus]=useState(false);
    const status=useSelector(state=>state.status);
    const objSaleOrder=useSelector(state=>state.saleOrder);
    //state lưu trữ trạng thái trang với true là edit 
    ///false là create 
    const [onStatusPage,setOnStatusPage]=useState(false);
    useEffect(()=>{  
        if(match.params.id!==undefined){
            setOnStatusPage(true);
            dispatch(actions.fetchSaleOrderRequest(match.params.id));
            
        }else{
            setOnStatusPage(false);
            dispatch(actions.getSaleOrderDefault());
        }
    },[dispatch,match]);
    
    
    return (
        <>  
            <h1 className="text-center mb-1">Chỉnh sửa thông tin đơn hàng</h1>
            <div>
                <EditInfoSaleOrder saleOrder={objSaleOrder} onStatusPage={onStatusPage}/>
            </div>
            <div className="mt-5">
                <EditListSaleOrderDetail lstSaleOrder={objSaleOrder.lstSaleOrderDetails} />
            </div>
            <div className={status?'':'hide'}>
                <FormEditSaleOrderDetail />
            </div>
            <div className="text-right mt-5">
                <ButtonComeBackHome />
            </div>
        </>
    )
}
export default Action_SaleOrderPage;