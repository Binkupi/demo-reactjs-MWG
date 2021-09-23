import React,{Component}from 'react'
import convertToMoney from '../../../Utils/convertMoney'
class Show_InfoSaleOrder extends Component {
    render(){
        return (
        <>
            <div>
                <p>Mã đơn hàng: <b>{this.props.saleOrder.saleOrderID}</b></p>
                <p>Mã khách hàng: <b>{this.props.saleOrder.customerID}</b></p>
                <p>Tên khách hàng: <b>{this.props.saleOrder.customerName}</b></p>
                <p>Tổng tiền: <b>{convertToMoney(this.props.saleOrder.totalAmount)} vnđ</b></p>
            </div>
        </>
        )
    }
    
}
export default Show_InfoSaleOrder;