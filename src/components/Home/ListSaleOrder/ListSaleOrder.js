import React from 'react';
import SaleOrderItem from './SaleOrderItem'


const ListSaleOrder =({listSaleOrder})=>{
    
    const RenderListSaleOrder=(list)=>{
        var result=null;
        result=list.map((item,index)=>{
            return (<SaleOrderItem key={index} saleOrderItem={item}/>)
        })
        return result;
    }
    return (
        <>
        <table className="table " >
            <thead>
                <tr className="table-success">
                    <th scope="col">Mã đơn hàng</th>
                    <th scope="col">Tên khách hàng</th>
                    <th scope="col">Tổng tiền</th>
                    <th scope="col">Loại hóa đơn</th>
                    <th scope="col">Thao các</th>
                </tr>
            </thead>
            <tbody>
                {RenderListSaleOrder(listSaleOrder)}
            </tbody>
        </table>
        </>
    )

}
export default ListSaleOrder;