import React, {Component} from 'react';
import BankStore from './BankStore';
import BankApp from './BankApp';
import BankActionCreators from './BankActionCreators';
import './App.css';

class App extends Component {
    /*constructor(...args) {
     super(...args);
     BankStore.dispatch({type: constants.CREATE_ACCOUNT});
     this.state = {balance: BankStore.getState().balance};
     }*/

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
                         onDeposit={amount => BankStore.dispatch(BankActionCreators.depositIntoAccount(amount))}
                         onWithdraw={amount => BankStore.dispatch(BankActionCreators.withDrawFromAccount(amount))}/>
            </div>
        );
    }
}

export default App;
