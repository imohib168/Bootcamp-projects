import React, { useContext } from 'react'
import { TransContext } from '../../Context/TransactionContext';
import { Wrapper, BalanceHeading, Amount } from './Balance.styles';

import { contextType } from './../../Types/types';

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
        <>
            <Wrapper>
                <BalanceHeading>Your Balance</BalanceHeading>
                <Amount>${
                    Math.abs(parseInt(total.toFixed(2)))
                }
                </Amount>
                <p>
                    {
                        total < 0 && (
                            <div>
                                Your Expenses are greater than your Income
                            </div>
                        )
                    }
                </p>
            </Wrapper>
        </>
    )
}

export default Balance;