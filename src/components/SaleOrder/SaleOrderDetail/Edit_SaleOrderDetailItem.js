import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from './../../../Actions'
import convertToMoney from '../../../Utils/convertMoney';
const Edit_ListSaleOrderDetailItem =({saleOrderDetail})=>{
    
    const dispatch=useDispatch();
    
    const onClickEdit=(obj)=>{
        dispatch(actions.openFormEditDetail());
        dispatch(actions.getInfoSaleOrderDetail(obj));
    }
    const onDelete=(saleOrderDetailID)=>{
        var isOk =window.confirm(`Bạn có muốn xóa chi tiết hóa đơn có mã ${saleOrderDetailID} `);
        if(isOk){
            dispatch(actions.delete_SaleOrderDetail(saleOrderDetailID));
        }
    }
    return (
        <>
            <tr className={saleOrderDetail.isDeleted?'hide':''}>
            <th scope="row" >{saleOrderDetail.isNoExist?'':saleOrderDetail.saleOrderDetailID}</th>
                <td>{saleOrderDetail.productName}</td>
                <td>{convertToMoney(saleOrderDetail.salePrice)} vnđ</td>
                <td>{saleOrderDetail.quantity}</td>
                <td>{saleOrderDetail.vat}</td>
                <td>{saleOrderDetail.promotionID}</td>
                <td>{saleOrderDetail.idno}</td>
                <td>
                    <button className="btn btn-warning" onClick={()=>{onClickEdit(saleOrderDetail)}}><span><i className="fas fa-edit"></i></span></button>
                    <button className="btn btn-danger ml-3" onClick={()=>{onDelete(saleOrderDetail.saleOrderDetailID)}}><span><i className="far fa-trash-alt"></i></span> </button>
                </td>
            </tr>
           
        </>
    )

}
export default Edit_ListSaleOrderDetailItem;