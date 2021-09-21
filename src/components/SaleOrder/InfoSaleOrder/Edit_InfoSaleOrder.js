import React from 'react';

const Edit_InfoSaleOrder =()=> {
    return (
        <>
        <table style={{width:'50%'}}>
            <tbody>
                <tr>
                    <td  style={{width:'25%'}}>Mã đơn hàng: </td>
                    <td><b></b></td>
                </tr>
                <tr>
                    <td>Khách hàng: </td>
                    <td>
                        <select ng-model="customerSelected" style={{width:"90%", display:'inline-block'}} className="form-select">
                            <option value="-1">---Chọn khách hàng---</option>
                            <option value="{{customer.CustomerID}}">
                                
                            </option>
                        </select>
                    </td>

                </tr>
                <tr>
                    <td>Loại đơn hàng xuất: </td>
                    <td>
                        <select ng-model="saleOrderTypeSelected" style={{width:'90%', display:'inline-block'}} className="form-select"
                                ng-change="onChangeSaleOrderType()">
                            <option value="-1">---Chọn loại đơn hàng---</option>
                            <option >
                                
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Tổng tiền: </td>
                    <td><b></b></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <div className="text-center mt-3">
                            <button className="btn btn-success " ng-click="onUpdateOrder(objSaleOrder)"><span><i className="fas fa-save"></i></span> Lưu hóa đơn</button>
                            <button className="btn btn-danger " ng-click="onDeleteOrder(objSaleOrder)"><span><i className="far fa-trash-alt"></i></span> Xóa hóa đơn</button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )

}
export default Edit_InfoSaleOrder;
