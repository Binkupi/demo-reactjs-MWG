import React from 'react';

const Show_ListSaleOrderDetailItem =()=>{
    return (
        <>
            <tr ng-repeat="item in objSaleOrder.lstSaleOrderDetailBOs" >
                <th scope="row" ></th>
                <td></td>
                <td>vnđ</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </>
    )

}
export default Show_ListSaleOrderDetailItem;