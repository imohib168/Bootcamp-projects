import React, { useContext } from 'react'
import { TransContext } from '../../Context/TransactionContext';
import { Wrapper, BalanceHeading, Amount } from './Balance.styles';

import { contextType } from './../../Types/types';

// type InitialStateObj = {
//     id: number,
//     text: string,
//     amount: number
//     mode: string
// }

// export type contextType = {
//     transactions: InitialStateObj[],
//     AddTransaction?: (Obj: InitialStateObj) => void,
//     DeleteTransaction?: (id: number) => void;
// };

const Balance = () => {

    const { transactions } = useContext<contextType>(TransContext);

    const amounts = transactions.map(transaction => {
        const IncomeExpense = {
            amount: transaction.amount,
            mode: transaction.mode
        }
        return IncomeExpense;
    })

    const IncomePostAmount = amounts.filter((postAmt) => postAmt.mode === 'income').reduce((acc, currVal) => (acc += currVal.amount), 0).toFixed(2);
    const ExpenseNegAmount = amounts.filter((postAmt) => postAmt.mode === 'expense').reduce((acc, currVal) => (acc += currVal.amount), 0 * -1).toFixed(2);

    const total = parseInt(IncomePostAmount) - parseInt(ExpenseNegAmount);


    return (
        <Wrapper>
            <BalanceHeading>Your Balance</BalanceHeading>
            <Amount>${total.toFixed(2)}</Amount>
        </Wrapper>
    )
}

export default Balance;