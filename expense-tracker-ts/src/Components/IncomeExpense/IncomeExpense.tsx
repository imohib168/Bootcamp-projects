import { useContext } from 'react';
import { TransContext } from '../../Context/TransactionContext';
import { contextType } from './../../Types/types';
import { Wrapper, Income, Expense, IncomeExpenseHeading, IncomeExpenseAmount } from './IncomeExpense.styles';

const IncomeExpense: React.FC = () => {

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

    return (
        <Wrapper>
            <Income>
                <IncomeExpenseHeading>Income</IncomeExpenseHeading>
                <IncomeExpenseAmount>${IncomePostAmount}</IncomeExpenseAmount>
            </Income>
            <Expense>
                <IncomeExpenseHeading>Expense</IncomeExpenseHeading>
                <IncomeExpenseAmount>${ExpenseNegAmount}</IncomeExpenseAmount>
            </Expense>
        </Wrapper>
    )
}

export default IncomeExpense;