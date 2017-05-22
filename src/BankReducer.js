import constants from './constants';

const initialState =
{
    balance: 0
}

const BankReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        /*case constants.CREATE_ACCOUNT:
            return initialState;*/
        case constants.DEPOSIT_INTO_ACCOUNT:
            return {balance:state.balance + parseFloat(action.amount)};
        case constants.WITHDRAW_FROM_ACCOUNT:
            return {balance:state.balance - parseFloat(action.amount)};
        default: return state;

    }
}

export default BankReducer;