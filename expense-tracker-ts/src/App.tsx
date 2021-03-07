import React from 'react';

// Components
import { Header, Balance, IncomeExpense, TransactionHistory, AddTransactionForm } from './Components';

// STyles
import { GlobalStyle, Wrapper } from './App.styles';

function App() {
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
