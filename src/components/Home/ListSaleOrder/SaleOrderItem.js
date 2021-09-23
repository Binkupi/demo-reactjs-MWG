import React from 'react';
import {Link} from 'react-router-dom'
import * as actions from './../../../Actions'
import convertToMoney from '../../../Utils/convertMoney';
import { useDispatch } from 'react-redux';

const SaleOrderItem =({saleOrderItem})=>{
    const dispatch=useDispatch();

    
    const onDeleteOrder =(obj)=>{
        var isOk=window.confirm(`Bạn có muốn xóa hóa đơn có mã ${obj.saleOrderID} này không?`);
        if(isOk){
            actions.onDeleteSaleOrderRequest(obj)
            .then(res=>{    
                alert('Bạn đã xóa hóa đơn thành công!!!');
                dispatch(actions.onLoadPageHome());
            })
        }else{
            alert('Bạn đã hủy thao tác!!!');
        }
        
    }
    return (
        <>       
        <tr >
            <th scope="row">{saleOrderItem.saleOrderID}</th>
            <td>{`${saleOrderItem.customerID}-${saleOrderItem.customerName}`}</td>
            <td>{convertToMoney(saleOrderItem.totalAmount)} vnđ</td>
            <td>{saleOrderItem.saleOrderTypeID}</td>
            
            <td>
                <Link className="btn btn-info" to={`/sale-order/${saleOrderItem.saleOrderID}`}><span><i className="far fa-eye"></i></span></Link>
                <Link className="btn btn-warning ml-3" to={`/sale-order/${saleOrderItem.saleOrderID}/edit`}><span><i className="fas fa-edit"></i></span></Link>
                <button className="btn btn-danger ml-3" onClick={()=>{onDeleteOrder(saleOrderItem)}}><span><i className="far fa-trash-alt"></i></span></button>
            </td>
        </tr>
        </>
    )

}
export default SaleOrderItem;