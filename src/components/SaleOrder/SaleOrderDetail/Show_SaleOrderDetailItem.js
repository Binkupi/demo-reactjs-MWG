import React from 'react';
import convertToMoney from '../../../Utils/convertMoney';

const Show_ListSaleOrderDetailItem =({saleOrderDetail})=>{
    return (
        <>
            <tr >
                <th scope="row" >{saleOrderDetail.saleOrderDetailID}</th>
                <td>{saleOrderDetail.productName}</td>
                <td>{convertToMoney(saleOrderDetail.salePrice)} vnđ</td>
                <td>{saleOrderDetail.quantity}</td>
                <td>{saleOrderDetail.vat}</td>
                <td>{saleOrderDetail.promotionID}</td>
                <td>{saleOrderDetail.idno}</td>
            </tr>
        </>
    )

}
export default Show_ListSaleOrderDetailItem;