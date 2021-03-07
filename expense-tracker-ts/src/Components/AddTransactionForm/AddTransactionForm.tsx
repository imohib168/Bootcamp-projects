import { useState, ChangeEvent, FormEvent, useContext } from 'react'
import { TransContext } from './../../Context/TransactionContext';
import { Underline } from './../TransactionHistory/TransactionHistory.styles';
import {
    Wrapper,
    NewTransactionHeading,
    Form,
    TextSection,
    TextLabel,
    Input,
    SelectOption,
    Select,
    Option,
    Button
} from './AddTransactionForm.styles';

import { contextType } from './../../Types/types';

const AddTransactionForm = () => {

    const { AddTransaction } = useContext<contextType>(TransContext);

    const [mode, setMode] = useState<string>('income');
    const [input, setInput] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (amount === 0) {
            alert("Kindly Enter Amount...");
            return
        }

        const newTrans = {
            id: Math.floor(Math.random() * 1000),
            text: input,
            amount,
            mode,
        }

        if (AddTransaction) {
            AddTransaction(newTrans);
        }

        setInput('');
        setAmount(0);
        setMode('income');
    }

    return (
        <Wrapper>
            <NewTransactionHeading>Add New Transaction Form</NewTransactionHeading>
            <Underline />
            <Form onSubmit={handleSubmit}>
                <TextSection>
                    <TextLabel>Text</TextLabel>
                    <Input
                        type="text"
                        value={input}
                        required
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
                    />
                </TextSection>
                <SelectOption>
                    <Select
                        value={mode}
                        onChange={(event: ChangeEvent<HTMLSelectElement>) => setMode(event.target.value)}
                    >
                        <Option value="income">Income</Option>
                        <Option value="expense">Expense</Option>
                    </Select>
                </SelectOption>
                <TextSection>
                    <TextLabel>Income</TextLabel>
                    <Input
                        type="number"
                        value={amount}
                        // required
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setAmount(parseInt(event.target.value))}
                    />
                </TextSection>
                <Button>Add Transaction</Button>
            </Form>
        </Wrapper>
    )
}

export default AddTransactionForm;