import React from 'react';

const FormEdit_SaleOrderDetail =()=>{
    return (
        <>
        <table style={{width:'50%'}}>
            <tbody>
            <tr>
                <td style={{width:'25%'}}>Mã chi tiết đơn hàng: </td>
                <td><input ng-model="orderDetail.SaleOrderDetailID" style={{width:'90%', display:'inline-block'}} disabled="disabled" className="form-control"/></td>
            </tr>
            <tr>
                <td>Nhóm sản phẩm:  </td>
                <td>

                    <select ng-model="mainGroupSelected" style={{width:'90%', display:'inline-block'}} className="form-select"
                            ng-change="onMainGroupChange()">
                        <option value="-1">---Chọn nhóm sản phẩm---</option>
                        <option >
                            
                        </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Mã sản phẩm:  </td>
                <td>
                    <select ng-model="productSelected" style={{width:'90%', display:'inline-block'}} className="form-select"
                            ng-change="onProductChange()">
                        <option value="-1">---Chọn loại sản phẩm---</option>
                        <option ng-repeat="product in lstProduct track by $index" value="{{product.ProductID}}">
                            
                        </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Giá tiền: </td>
                <td><input ng-model="orderDetail.SalePrice" style={{width:'90%', display:'inline-block'}} disabled="disabled" className="form-control"/></td>
            </tr>
            <tr>
                <td>Số lượng: </td>
                <td><input type="number" ng-model="orderDetail.Quantity" style={{width:'90%', display:'inline-block'}} className="form-control"/></td>
            </tr>
            <tr>
                <td>VAT: </td>
                <td><input type="number" ng-model="orderDetail.VAT" style={{width:'90%', display:'inline-block'}} className="form-control"/></td>
            </tr>
            <tr>
                <td>ProtionID: </td>
                <td><input type="number" ng-model="orderDetail.PromotionID" style={{width:'90%', display:'inline-block'}} className="form-control"/></td>
            </tr>
            <tr>
                <td>IDNO: </td>
                <td><input type="number" ng-model="orderDetail.IDNO" style={{width:'90%', display:'inline-block'}} className="form-control"/></td>
            </tr>
            <tr>
                <td colSpan="2">
                    <div className="text-center">
                        <button className="btn btn-success ml-3" ng-click="onUpdateOrderDetail(orderDetail)"><span><i className="fas fa-save"></i></span> Cập nhật</button>
                        <button className="btn btn-danger ml-2 " ng-click="onCacelEditOrderDetail()"><span><i className="far fa-trash-alt"></i></span> Hủy bỏ</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        </>
    )

}
export default FormEdit_SaleOrderDetail;