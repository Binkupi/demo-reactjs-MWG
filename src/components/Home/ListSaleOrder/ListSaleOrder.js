import React from 'react';
import SaleOrderItem from './SaleOrderItem'
const ListSaleOrder =()=>{
    return (
        <>
        <table class="table " >
            <thead>
                <tr class="table-success">
                    <th scope="col">Mã đơn hàng</th>
                    <th scope="col">Tên khách hàng</th>
                    <th scope="col">Tổng tiền</th>
                    <th scope="col">Loại hóa đơn</th>
                    <th scope="col">Thao các</th>
                </tr>
            </thead>
            <tbody>
                <SaleOrderItem />
                <SaleOrderItem />
                <SaleOrderItem />
            </tbody>
        </table>
        </>
    )

}
export default ListSaleOrder;