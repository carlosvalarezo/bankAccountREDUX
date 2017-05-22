//This is the file to create middleware
import {createStore,applyMiddleware} from 'redux';
import BankReducer from './BankReducer';

const Logger = (store) => (next) => (action) =>
{
    console.log('dispatching: ', action);
    return next(action);
}

const BankStore = createStore(BankReducer,applyMiddleware(Logger));
export default BankStore;