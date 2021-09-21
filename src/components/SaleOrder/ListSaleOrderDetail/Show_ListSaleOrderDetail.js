import React from 'react';
import ShowSaleOrderDetailItem from './../SaleOrderDetail/Show_SaleOrderDetailItem'
const Show_ListSaleOrderDetail =()=>{
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

                </tr>
            </thead>
            <tbody>
                <ShowSaleOrderDetailItem />
                <ShowSaleOrderDetailItem />
                <ShowSaleOrderDetailItem />
            </tbody>
        </table>
        </>
    )

}
export default Show_ListSaleOrderDetail;