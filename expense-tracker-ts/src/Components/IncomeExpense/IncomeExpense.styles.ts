import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const IncomeExpenseCard = styled.section`
    width: 49%;
    padding: 14px;
    text-align: center;
    margin-bottom: 12px;
`;

export const Income = styled(IncomeExpenseCard)`
    background-color: rgba(215, 255, 215, .4);
    color: green;
`;

export const Expense = styled(IncomeExpenseCard)`
    background-color: rgba(255, 215, 215, .4);
    color: red;
`;

export const IncomeExpenseHeading = styled.h3`
    font-size: 20px;
    letter-spacing: 2px;
`;

export const IncomeExpenseAmount = styled.h3`
    font-size: 20px;
`;