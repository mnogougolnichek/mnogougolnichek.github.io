import {combineReducers} from 'redux';
import goods from './goods';
import pagination from './pagination';
import setCurrentPage from './setCurrentPage';
import filterGoods from './filterGoods';
import setFilter from './setFilter';
import selectRow from './selectRow';
import setRowsQuantity from './setRowsQuantity';

export default combineReducers({
    goods,
    pagination,
    setCurrentPage,
    setFilter,
    filterGoods,
    selectRow,
    setRowsQuantity
})