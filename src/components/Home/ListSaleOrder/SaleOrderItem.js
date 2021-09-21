import React from 'react';

const SaleOrderItem =()=>{
    return (
        <>       
        <tr >
            <th scope="row"></th>
            <td></td>
            <td> vnđ</td>
            <td></td>
            
            <td>
                <button class="btn btn-info" ng-click="onShowOrder(order.SALEORDERID)"><span><i class="far fa-eye"></i></span> Xem</button>
                <button class="btn btn-warning ml-3" ng-click="onEditOrder(order.SALEORDERID)"><span><i class="fas fa-edit"></i></span> Chỉnh sửa</button>
                <button class="btn btn-danger ml-3" ng-click="onDeleteOrder(order)"><span><i class="far fa-trash-alt"></i></span> Xóa </button>
            </td>
        </tr>
        </>
    )

}
export default SaleOrderItem;