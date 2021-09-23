import React,{Component} from 'react';
import {connect} from 'react-redux';

import * as actions from './../../../Actions'

class FormSearch_SaleOrder extends Component {
    constructor(props) {
        super(props);
        this.state={
            keyword:'',
            searchType:-1,
            isDelete:0
        }
    }
    onChange=(event)=>{
        var target=event.target;
        var name=target.name;
        var value=target.value;
        this.setState({
            [name]:value
        });
    }
    onSearch=()=>{

        const {history}=this.props;
        const {keyword,searchType}=this.state;
        history.replace(`/?keyword=${keyword}&searchType=${searchType}&limits=10`);
    }
    render(){
        const {keyword,searchType}=this.state;
        return(
            <>
                <select className="form-select mr-2 mt-2" name="searchType" value={searchType}  
                onChange={this.onChange}  style={{width:'30%',display:'inline-block' }}>
                    <option value="-1">---Mời lựa chọn---</option>
                    <option value="0">Theo mã đơn hàng</option>
                    <option value="1" >Tên khách hàng</option>
                </select>
                <input type="text" className="form-control mr-2 mt-2" name="keyword" value={keyword} placeholder="Từ khóa" onChange={this.onChange} style={{width:'30%',display:'inline-block' }} />
                <button className="btn btn-primary " onClick={this.onSearch}><span><i className="fas fa-search"></i></span> Tìm kiếm</button>
            </>
        )
    }
}

const mapStateToProps = (state)=>{
    return {

    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchListSaleOrderRequest:(objSearch)=>{
           dispatch(actions.fetchListSaleOrderRequest(objSearch));
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSearch_SaleOrder);