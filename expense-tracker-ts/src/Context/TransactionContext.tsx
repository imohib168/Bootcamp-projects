import React, { createContext, ReactNode, useReducer } from 'react';
import { TransReducer } from './TransReducer';
import { InitialStateObj, contextType } from './../Types/types';

const initialState: contextType = {
    transactions: JSON.parse(localStorage.getItem('transactions') || '[]'),
};

export const TransContext = createContext<contextType>(initialState);

export const TransProvider: React.FC<ReactNode> = ({ children }) => {

    let [state, dispatch] = useReducer(TransReducer, initialState.transactions);

    const AddTransaction = (Obj: InitialStateObj) => {
        dispatch({
            transactionId: Obj.id,
            type: 'ADD_TRANSACTION',
            payload: {
                id: Obj.id,
                text: Obj.text,
                amount: Obj.amount,
                mode: Obj.mode,
            }
        })
    };

    const DeleteTransaction = (id: number) => {
        dispatch({
            transactionId: id,
            type: "DELETE_TRANSACTION",
            payload: {
                id: id,
                text: '',
                amount: 0,
                mode: '',
            }
        })
    };

    return (
        <TransContext.Provider value={{
            transactions: state,
            AddTransaction,
            DeleteTransaction
        }}>
            {children}
        </TransContext.Provider >
    )
}