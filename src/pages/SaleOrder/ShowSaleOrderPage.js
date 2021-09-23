import React from 'react';
import ShowListSaleOrderDetail from '../../components/SaleOrder/ListSaleOrderDetail/Show_ListSaleOrderDetail';
import ShowInfoSaleOrder from '../../components/SaleOrder/InfoSaleOrder/Show_InfoSaleOrder';
import ButtonComeBackHome from '../../components/Button/Button_ComeBackHome'
import {useSelector, useDispatch } from 'react-redux';
import {useEffect } from 'react';
import {Link,useHistory} from 'react-router-dom'
import * as actions from './../../Actions'

const ShowSaleOrderPage=({match})=>{
    // const [saleOrderID,setSaleOrderID]=useState(match.params.id);
    const dispatch =useDispatch();
    const history=useHistory();
    useEffect(()=>{  
        // setSaleOrderID(match.params.id); 
        dispatch(actions.fetchSaleOrderRequest(match.params.id));
    },[dispatch,match]);
    const objSaleOrder=useSelector(state=>state.saleOrder);
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
        < >
            <h1 className="text-center mb-1">Thông tin đơn hàng</h1>
            <div>
                <ShowInfoSaleOrder saleOrder={objSaleOrder}/>
            </div>
            <div className="text-left mt-2 mb-1">
                <Link className="btn btn-warning mr-3" to={`/sale-order/${objSaleOrder.saleOrderID}/edit`}><span><i className="fas fa-edit"></i></span> Chỉnh sửa</Link>
                <button className="btn btn-danger " onClick={()=>{onDeleteOrder(objSaleOrder)}}><span><i className="far fa-trash-alt"></i></span> Xóa hóa đơn</button>
            </div>
            <div className="mt-2">
                <ShowListSaleOrderDetail  lstSaleOrder={objSaleOrder.lstSaleOrderDetails}/>
            </div>
            <div className="text-right mt-5">
                <ButtonComeBackHome />
            </div>
        </>
    )
    
}
export default ShowSaleOrderPage;