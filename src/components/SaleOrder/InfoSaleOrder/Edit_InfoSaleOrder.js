import React ,{useEffect,useState}from 'react';
import * as actions from './../../../Actions'
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import convertToMoney from '../../../Utils/convertMoney'

const Edit_InfoSaleOrder =({saleOrder,onStatusPage})=> {
    const [lstCustomer,setListCustomer]=useState([]);
    const [flat]=useState(true);
    const history=useHistory();
    const dispatch=useDispatch();
    
    useEffect(()=>{   

        actions.fetchCustomer()
        .then((res)=>{
            setListCustomer(res.data);
        })
    },[flat]);

    
    const renderListCustomer=(list)=>{
        var result=null;
        result=list.map((item,index)=>{
            return <option value={item.customerID} key={index}>{item.customerName}</option>
        })
        return result;
    }

    const onChange=(event)=>{
        var target=event.target;
        var name=target.name;
        var value=target.value;
        var temObjChange={
            [name]:Number(value)
        }
        dispatch(actions.changeInfoSaleOrder(temObjChange))      
    }
    
    const onAddSaleOrder=(obj)=>{
        var isOk=window.confirm('Bạn có muốn thêm hóa đơn này không?')
        if(isOk){
            console.log(obj);
            actions.onAddSaleOrderRequest(obj)
            .then(res=>{
                alert(`Bạn đã thêm hóa đơn thành công. Bạn có thể tìm kiếm theo mã ${res.data.saleOrderID}`)
                history.replace('/');
            })
        }
        else{
            alert('Bạn đã hủy thao tác')           
        }
        
    }
    const onEditSaleOrder=(obj)=>{
        var isOk=window.confirm('Bạn có muốn cập nhật hóa đơn này không?')
        if(isOk){
           
            actions.onUpdateSaleOrderRequest(obj )
            .then(res=>{
                alert(`Bạn đã cập nhật hóa đơn thành công. Bạn có thể tìm kiếm theo mã ${obj.saleOrderID}`)
                history.replace('/');
            })
        }
        else{
            alert('Bạn đã hủy thao tác')
        }
    }

    const onDeleteOrder =(obj)=>{
        var isOk=window.confirm(`Bạn có muốn xóa hóa đơn có mã ${obj.saleOrderID} này không?`);
        if(isOk){
            actions.onDeleteSaleOrderRequest(obj)
            .then(res=>{       
                alert('Bạn đã xóa hóa đơn thành công!!!');
                history.replace('/');    
            })
        }else{
            alert('Bạn đã hủy thao tác!!!');
        }
        
    }
    return (
        <>
        <table style={{width:'50%'}}>
            <tbody>
                <tr>
                    <td  style={{width:'25%'}}>Mã đơn hàng: </td>
                    <td><b>{saleOrder.saleOrderID}</b></td>
                </tr>
                <tr>
                    <td>Khách hàng: </td>
                    <td>
                        <select style={{width:"90%", display:'inline-block'}} 
                            name="customerID" value={saleOrder.customerID} onChange={onChange}className="form-select">
                            <option value="-1">--Mời chọn khách hàng--</option>
                            {renderListCustomer(lstCustomer)}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Loại Hóa đơn: </td>
                    <td>
                        <select style={{width:"90%", display:'inline-block'}} 
                            name="saleOrderTypeID" value={saleOrder.saleOrderTypeID} onChange={onChange}className="form-select">
                            <option value="-1">--- Mời bạn chọn loại hóa đơn---</option>
                            <option value="1">1 - Yêu cầu xuất bán hàng tại siêu thị</option>
                            <option value="2">2 - Yêu cầu xuất bán hàng Online tại siêu thị</option>
                            <option value="3">3 - Yêu cầu xuất sử dụng nội bộ</option>
                            <option value="4">4 - Yêu cầu xuất bổ sung khuyến mãi</option>
                            <option value="5">5 - Yêu cầu xuất trả hàng mua</option>
                            <option value="6">6 - Yêu cầu xuất trả góp giao hàng tại siêu thị</option>
                            <option value="7">7 - Yêu cầu xuất bán qua Online Tiết kiệm</option>
                            <option value="8">8 - Yêu cầu xuất bán hàng công ty</option>
                            <option value="9">9 - Yêu cầu xuất sử dụng nội bộ khác</option>
                            <option value="10">10 - Yêu cầu xuất bán hàng lưu động (1 SP)</option>
                            <option value="11">11 - Yêu cầu xuất bán Game Java</option>
                            <option value="12">12 - Yêu cầu xuất cho khách lẻ BigC</option>
                            <option value="13">13 - Yêu cầu xuất hàng cho BigC</option>
                            <option value="14">14 - Yêu cầu xuất trả nhà cung cấp (không thu tiền)</option>
                            <option value="15">15 - Yêu cầu xuất khuyến mãi Game Java</option>
                            <option value="16">16 - Yêu cầu xuất dịch vụ SIM có thu tiền</option>
                            <option value="17">17 - Yêu cầu xuất dịch vụ SIM không thu tiền</option>
                            <option value="18">18 - Yêu cầu xuất bán Game qua ĐT/Web</option>
                            <option value="19">19 - Yêu cầu xuất bán trả góp cho NV sử dụng Laptop</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Tổng tiền: </td>
                    <td><b>{convertToMoney(saleOrder.totalAmount)} VNĐ</b></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <div className="text-center mb-3">
                            <button className="btn btn-success" onClick={!onStatusPage?()=>{onAddSaleOrder(saleOrder)}:()=>{onEditSaleOrder(saleOrder)}}><span><i className="fas fa-save"></i></span> Lưu hóa đơn</button>
                            <button className="btn btn-danger " onClick={()=>{onDeleteOrder(saleOrder)}}><span><i className="far fa-trash-alt"></i></span> Xóa hóa đơn</button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )

}
export default Edit_InfoSaleOrder;
