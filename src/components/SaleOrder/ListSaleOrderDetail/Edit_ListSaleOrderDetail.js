import React from 'react';
import EditSaleOrderDetailItem from './../SaleOrderDetail/Edit_SaleOrderDetailItem'
const Edit_ListSaleOrderDetail =()=>{
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
                    <EditSaleOrderDetailItem />
                    <EditSaleOrderDetailItem />
                    <EditSaleOrderDetailItem />
                    <tr>
                        <th colSpan="8"><div className="text-center"><button className="btn btn-success" ng-click="onAddOrderDetail()"><span><i className="fas fa-plus-circle"></i></span> Thêm mới</button></div></th>
                    </tr>
                </tbody>
            </table>
        </>
    )

}
export default Edit_ListSaleOrderDetail;