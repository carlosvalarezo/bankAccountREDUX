import React, {Component} from "react";
import {connect} from 'react-redux';
import BankApp from "./BankApp";
import BankActionCreators from "./BankActionCreators";
import "./App.css";
//This component is the one that talks with the store
//It is a container component. It has two main responsibilities:
//Map state to props
//Map dispatch to props
const mapStateToProps = (state) => {
    return {
        balance: state.balance
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeposit: (amount) => dispatch(BankActionCreators.depositIntoAccount(amount)),
        onWithdraw: (amount) => dispatch(BankActionCreators.withDrawFromAccount(amount))
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(BankApp);

export default App;



