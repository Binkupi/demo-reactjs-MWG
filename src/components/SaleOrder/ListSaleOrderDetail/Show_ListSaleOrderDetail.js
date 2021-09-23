import React from 'react';
import ShowSaleOrderDetailItem from './../SaleOrderDetail/Show_SaleOrderDetailItem'
const Show_ListSaleOrderDetail =({lstSaleOrder})=>{
    
    
    const renderListSaleOrderDetail=(list)=>{
        var result= null;
        if(list==null){
            return null;
        }

        result=list.map((item,index)=>{
            return (<ShowSaleOrderDetailItem key={index} saleOrderDetail={item}/>)
        })
        return result;


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

                </tr>
            </thead>
            <tbody>
                {renderListSaleOrderDetail(lstSaleOrder)}
            </tbody>
        </table>
        </>
    )

}
export default Show_ListSaleOrderDetail;