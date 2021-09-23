import React from 'react';
import {useEffect} from 'react'
import ListSaleOrder from '../../components/Home/ListSaleOrder/ListSaleOrder';
import FormSearchSaleOrder from '../../components/Home/Search/FormSearch_SaleOrder'
import {useSelector,useDispatch} from 'react-redux';
import {useState} from 'react';
import * as actions from '../../Actions'
import { Link, useLocation} from "react-router-dom";
const HomePage =({history,match})=>{
    const listSaleOrder=useSelector(state=>state.listSaleOrder);
    const length=listSaleOrder.length;
    const [limit,setLimit]=useState(10);
    const [objSearch,setObjSearch]=useState(
        {
            keyword:'',
            searchType:-1,
            isDelete:0
        })
    const dispatch=useDispatch();
    const location=useLocation();
    const onLoad =useSelector(state=>state.onLoad);
    useEffect(()=>{
        let query= new URLSearchParams(location.search);
        if(query.get('limits')!==null){
            setLimit(query.get('limits'));
        } 
        if(query.get('keyword')!==null||query.get('searchType')!==null){
            setObjSearch({
                keyword:query.get('keyword'),
                searchType:Number(query.get('searchType')),
                isDelete:0
            })

        }         
    },[location])
    useEffect(()=>{
        dispatch(actions.fetchListSaleOrderRequest(
            objSearch,limit));
    },[dispatch,limit,objSearch,onLoad])
    const seeMore=()=>{
        let query= new URLSearchParams(location.search);
        var limit=query.get("limits")===null?10:query.get("limits");
        limit=Number(limit)+10;
        var url=history.location.pathname;
        
        var search=history.location.search;
        console.log('search: ',search);
        var arr=search.split('&');
        arr.splice(2,1);
        search=`${arr[0]}&${arr[1]}`;
        if(history.location.search===''){
            history.replace(`${url}?limits=${limit}`);
        }else{
            history.replace(`${url}${search}&limits=${limit}`);
        }
        //
    }
       return (
           <>   
               <div className="text-center">
                    <FormSearchSaleOrder history={history}/>
                </div>
                <div className="mt-5" >
                    <Link className="btn btn-success text-left mb-1" to={'sale-order/create'}><span><i className="fas fa-plus-circle"></i></span> Thêm hóa đơn mới</Link>
                    <ListSaleOrder listSaleOrder={listSaleOrder}/>
                </div>
                <div className="mt-2 text-center" >
                    <button className={`btn btn-success text-left mb-1 ${length<limit?'hide':''}`} onClick={seeMore}><span><i className="fas fa-plus-circle"></i></span> Xem thêm</button>
                </div>
           </>
       )


      
}
export default HomePage;


