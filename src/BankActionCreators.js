import constants from './constants';

const BankActionCreators = {
        depositIntoAccount(amount){

            return {
                type: constants.DEPOSIT_INTO_ACCOUNT,
                amount: amount
            }
        },

        withDrawFromAccount(amount)
        {
            return {
                type: constants.WITHDRAW_FROM_ACCOUNT,
                amount: amount
            }

        }
    };

export default BankActionCreators;