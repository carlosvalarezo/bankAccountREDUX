import React, {Component, PropTypes} from 'react';

//Presentational component
class BankApp extends Component {
    handleDeposit() {
        this.props.onDeposit(this.refs.amount.value);
        this.refs.amount.value = '';
    }

    handleWithdraw() {
        this.props.onWithdraw(this.refs.amount.value);
        this.refs.amount.value = '';
    }

    render() {
        return (<div>
                <h1> Your balance is ${(this.props.balance).toFixed(2)}</h1>
                <div>
                    <input type="text" placeholder="Enter amount" ref="amount"/>
                    <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
                    <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
                </div>
            </div>
        );
    }
}
BankApp.propTypes=
{
    balance:PropTypes.number,
    onDeposit:PropTypes.func,
    onWithdraw:PropTypes.func
};

export default BankApp;