import {combineReducers} from 'redux';
import status from './status';
import listSaleOrder from './ListSaleOrder';
import saleOrder from './SaleOrder';
import saleOrderDetail from './SaleOrderDetail';
import onLoad from './onLoadHome';

const myReducer =combineReducers({
    status,
    listSaleOrder,
    saleOrder,
    saleOrderDetail,
    onLoad

})

export default myReducer;