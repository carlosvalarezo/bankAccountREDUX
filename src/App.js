import React, {Component} from 'react';
import BankStore from './BankStore';
import BankApp from './BankApp';
import constants from './constants';
import './App.css';

class App extends Component {
    constructor(...args) {
        super(...args);
        BankStore.dispatch({type: constants.CREATE_ACCOUNT});
        this.state = {balance: BankStore.getState().balance};
    }

    componentDidMount() {
        this.unsubscribe = BankStore.subscribe(() => {
            this.setState({balance: BankStore.getState().balance});
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div className="App">
                <BankApp balance={BankStore.getState().balance}
                         onDeposit={amount => BankStore.dispatch({type: constants.DEPOSIT_INTO_ACCOUNT, amount:amount})}
                         onWithdraw={amount => BankStore.dispatch({type: constants.WITHDRAW_FROM_ACCOUNT, amount:amount})}/>
            </div>
        );
    }
}

export default App;
