import React from 'react';

const Edit_ListSaleOrderDetailItem =()=>{
    return (
        <>
            <tr >
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <button className="btn btn-warning" ng-click="onEditOrderDetail(item)"><span><i className="fas fa-edit"></i></span> Chỉnh sửa</button>
                    <button className="btn btn-danger ml-3" ng-click="onDeleteOrderDetail(item.SaleOrderDetailID)"><span><i className="far fa-trash-alt"></i></span> Xóa </button>
                </td>
            </tr>
           
        </>
    )

}
export default Edit_ListSaleOrderDetailItem;