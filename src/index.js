import {Provider} from 'react-redux';
import BankStore from './BankStore';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Provider store={BankStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
