import React, { useContext } from 'react'
import { TransContext } from '../../Context/TransactionContext';
import { Wrapper, Button, List, Text, Amount } from './EachTransaction.styles';
import { transactionsInTransaction } from './../../Types/types';

const EachTransaction: React.FC<transactionsInTransaction> = ({ trans }) => {

    const { DeleteTransaction } = useContext(TransContext)

    return (
        <Wrapper>
            <List mode={trans.mode}>
                <Text>{trans.text}</Text>
                <Amount>${trans.amount}</Amount>
                <Button onClick={() => {
                    if (DeleteTransaction) {
                        DeleteTransaction(trans.id)
                    }
                }}>x</Button>
            </List>
        </Wrapper >
    )
}

export default EachTransaction
