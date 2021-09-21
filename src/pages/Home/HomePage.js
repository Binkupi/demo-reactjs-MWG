import React from 'react';
import {useEffect} from 'react'
import ListSaleOrder from '../../components/Home/ListSaleOrder/ListSaleOrder';
import FormSearchSaleOrder from '../../components/Home/Search/FormSearch_SaleOrder'
import {useDispatch} from 'react-redux';
import axios from 'axios';
import * as actions from '../../Actions'

const HomePage =()=>{
    const dispatch=useDispatch();
        useEffect(()=>{
            dispatch(actions.fetchListSaleOrderRequest({"keyword":"",
            "searchType":-1}));
        })

        const onHandleClick=()=>{
            console.log('có');
            axios.post('http://localhost:8081/api/SaleOrder/searchData',{
                "keyword":"",
                "searchType":-1}
            )
            .then((res)=>{
                console.log(res);
            })
        }
       return (
           <>   
           <button onClick={onHandleClick}>Click me</button>
               <div class="text-center">
                    <FormSearchSaleOrder />
                </div>
                <div class="mt-5" >
                    <button class="btn btn-success text-left mb-1" ng-click="onAddOrder()"><span><i class="fas fa-plus-circle"></i></span> Thêm hóa đơn mới</button>
                    <ListSaleOrder />
                </div>
           </>
       )


      
}
export default HomePage;


