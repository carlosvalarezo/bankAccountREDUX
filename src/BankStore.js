import {createStore} from 'redux';
import BankReducer from './BankReducer';

const BankStore = createStore(BankReducer);
export default BankStore;