import React,{Component} from 'react';

class FormSearch_SaleOrder extends Component {

    render(){
        return(
            <>
                <select class="form-select mr-2 mt-2" ng-model="searchType" style={{width:'30%',display:'inline-block' }}>
                    <option value="0">Mã hóa đơn</option>
                    <option value="1">Tên khách hàng</option>
                </select>
                <input type="text" class="form-control mr-2 mt-2" placeholder="Từ khóa" ng-model="keyword" style={{width:'30%',display:'inline-block' }} />
                <button class="btn btn-primary " ng-click="onSearch()"><span><i class="fas fa-search"></i></span> Tìm kiếm</button>
            </>
        )
    }
}
export default FormSearch_SaleOrder;