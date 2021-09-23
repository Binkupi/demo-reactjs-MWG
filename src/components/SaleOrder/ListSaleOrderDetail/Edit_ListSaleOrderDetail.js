import React from 'react';
import EditSaleOrderDetailItem from './../SaleOrderDetail/Edit_SaleOrderDetailItem'
import {useDispatch } from 'react-redux';
import * as actions from '../../../Actions'

const Edit_ListSaleOrderDetail =({lstSaleOrder})=>{
    const dispatch=useDispatch();
    
    const renderListSaleOrderDetail=(list)=>{
        var result= null;
        if(list==null){
            return null;
        }
        result=list.map((item,index)=>{
            return (<EditSaleOrderDetailItem key={index} saleOrderDetail={item}/>)
        })
        return result;


    }
    const openFormAdd=()=>{
        dispatch(actions.openFormEditDetail());
        dispatch(actions.getInfoSaleOrderDetail(null))

    }
    return (
        <>
        <table className="table">
                <thead>
                    <tr className="table-success">
                        <th scope="col">Mã chi tiết đơn hàng</th>
                        <th scope="col">Mã sản phẩm</th>
                        <th scope="col">Đơn giá</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">VAT</th>
                        <th scope="col">PromotionID</th>
                        <th scope="col">IDNO</th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {renderListSaleOrderDetail(lstSaleOrder)}
                    <tr>
                        <th colSpan="8"><div className="text-center"><button className="btn btn-success" onClick={openFormAdd}><span><i className="fas fa-plus-circle"></i></span> Thêm mới</button></div></th>
                    </tr>
                </tbody>
            </table>
        </>
    )

}
export default Edit_ListSaleOrderDetail;