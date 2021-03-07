import { useContext } from 'react';
import { Wrapper, HistoryHeading, Underline } from './TransactionHistory.styles';
import EachTransaction from './../EachTransaction/EachTransaction';
import { TransContext } from './../../Context/TransactionContext';

const TransactionHistory: React.FC = () => {

    const { transactions } = useContext(TransContext);

    return (
        <Wrapper>
            <HistoryHeading>Transaction History</HistoryHeading>
            <Underline />
            {transactions.map(transaction => {
                return (
                    <div key={transaction.id}>
                        <EachTransaction trans={transaction} />
                    </div>
                )
            }
            )}
        </Wrapper>
    )
}

export default TransactionHistory;