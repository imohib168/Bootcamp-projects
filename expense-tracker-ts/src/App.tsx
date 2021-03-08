import React, { useEffect } from 'react';

// Components
import { Header, Balance, IncomeExpense, TransactionHistory, AddTransactionForm } from './Components';

// STyles
import { GlobalStyle, Wrapper } from './App.styles';
import firebase from './firebase';

function App() {

    useEffect(() => {
        const msg = firebase.messaging();
        msg.requestPermission()
            .then(() => {
                return msg.getToken();
            })
            .then((data: string) => {
                console.log('Token: ', data);
            })
            .catch((err: string) => console.log('Error: ', err));
    }, [])

    return (
        <Wrapper>
            <GlobalStyle />
            <Header />
            <Balance />
            <IncomeExpense />
            <TransactionHistory />
            <AddTransactionForm />
        </Wrapper>
    );
}

export default App;
