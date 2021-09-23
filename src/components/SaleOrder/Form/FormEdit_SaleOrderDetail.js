import React from 'react';
import {useState,useEffect} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import * as actions from './../../../Actions'
import {generateID} from './../../../Utils/generateID'

const FormEdit_SaleOrderDetail =()=>{
    const [flat]=useState(true);
    const dispatch=useDispatch();
    const [objSaleOrderDetail,setObjSaleOrderDetail]=useState({
        idno: 1,
        isDeleted: false,
        isEdited: false,
        isNoExist: true,
        isSelected: false,
        productID: "",
        productName: "",
        promotionID: 0,
        quantity: 0,
        saleOrderDetailID: "",
        saleOrderID:'',
        salePrice: 0,
        vat: 0,
    })
    const saleOrderDetail=useSelector(state=>state.saleOrderDetail);
    const [lstProduct,setLstProduct]=useState([]);


    useEffect(()=>{              
            setObjSaleOrderDetail(saleOrderDetail);

    },[saleOrderDetail]);
      
    useEffect(()=>{   
            actions.fetchProduct()
            .then(res=>{
               setLstProduct(res.data);
            })
    },[flat]);

    const renderListProduct=(list)=>{
        var result=null;
        result=list.map((item,index)=>{
            return(<option value={`${item.productId}-${item.productName}-${item.salePrice}`} key={index}>{item.productName}</option>)
        })
        return result;
    }

    const onChange=(event)=>{
        var target=event.target;
        var name=target.name;
        var value=target.value;
        var objChange=null;
        if(name==='saleOrderDetailID'||name==='productID'){
            if(name==='saleOrderDetailID'){
                objChange={
                    [name]:value
                };
            }else{
                const arr=value.split('-');
                objChange={
                    productID:arr[0],
                    productName:arr[1],
                    salePrice:Number(arr[2])
                };
            }
            
        }else{
            objChange={
                [name]:Number(value)
            };
        }    
        var temState={...objSaleOrderDetail,...objChange};
        setObjSaleOrderDetail(temState);
    }
    const onActionSaleOrderDetail=()=>{
        const {productID,isNoExist,saleOrderDetailID}=objSaleOrderDetail;
        if(productID==='-1')
        {
            alert('Bạn cần nhập mã sản phẩm');
            return ;
        }
        var id=saleOrderDetailID===''?generateID():saleOrderDetailID;
        var result=isNoExist?false:true;
        
        var objIDChange={saleOrderDetailID:id,
                        isEdited: result,
        };

        var temState={...objSaleOrderDetail,...objIDChange};
        dispatch(actions.closeFormEditDetail());
        dispatch(actions.Edit_saleOrderDetail(temState));

    }
    const onCloseForm=()=>{
        dispatch(actions.closeFormEditDetail());
    }

    
    const {productID,idno,quantity, salePrice,promotionID,vat,saleOrderDetailID,productName}=objSaleOrderDetail;
    return (
        <>
        <table style={{width:'50%'}}>
            <tbody>
            <tr>
                <td style={{width:'25%'}}>Mã chi tiết đơn hàng: </td>
                <td><input name="saleOrderDetailID" value={saleOrderDetailID} onChange={onChange} style={{width:'90%', display:'inline-block'}} disabled="disabled" className="form-control"/></td>
            </tr>
            <tr>
                <td>Sản phẩm:  </td>
                <td>
                    <select  style={{width:'90%', display:'inline-block'}} className="form-select"
                            name="productID" value={`${productID}-${productName}-${salePrice}`} onChange={onChange}>
                        <option value="-1">---Chọn loại sản phẩm---</option>
                        {renderListProduct(lstProduct)}
                        
                    </select>
                </td>
            </tr>
            <tr>
                <td>Giá tiền: </td>
                <td><input style={{width:'90%', display:'inline-block'}} 
                name="salePrice" value={salePrice} onChange={onChange} disabled="disabled" className="form-control"/></td>
            </tr>
            <tr>
                <td>Số lượng: </td>
                <td><input type="number"  style={{width:'90%', display:'inline-block'}} 
                name="quantity" value={quantity} onChange={onChange} className="form-control"/></td>
            </tr>
            <tr>
                <td>VAT: </td>
                <td><input type="number"  style={{width:'90%', display:'inline-block'}} 
                name="vat" value={vat} onChange={onChange} className="form-control"/></td>
            </tr>
            <tr>
                <td>PromotionID: </td>
                <td><input type="number"  style={{width:'90%', display:'inline-block'}}
                name="promotionID" value={promotionID} onChange={onChange} className="form-control"/></td>
            </tr>
            <tr>
                <td>IDNO: </td>
                <td><input type="number"  style={{width:'90%', display:'inline-block'}}
                name="idno" value={idno} onChange={onChange} className="form-control"/></td>
            </tr>
            <tr>
                <td colSpan="2">
                    <div className="text-center">
                        <button className="btn btn-success ml-3" onClick={onActionSaleOrderDetail} ><span><i className="fas fa-save"></i></span> Cập nhật</button>
                        <button className="btn btn-danger ml-2 " onClick={onCloseForm}><span><i className="far fa-trash-alt"></i></span> Hủy bỏ</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        </>
    )

}
export default FormEdit_SaleOrderDetail;