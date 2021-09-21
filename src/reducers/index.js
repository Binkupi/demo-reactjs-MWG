import {combineReducers} from 'redux';
import status from './status';
import ListSaleOrder from './ListSaleOrder';

const myReducer =combineReducers({
    status,
    ListSaleOrder

})

export default myReducer;