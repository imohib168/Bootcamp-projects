import { InitialStateObj, reducerActionType } from './../Types/types';

export const TransReducer = (state: InitialStateObj[], action: reducerActionType): any => {
    let transactions;
    switch (action.type) {
        case 'ADD_TRANSACTION':
            transactions = [...state, action.payload];
            localStorage.setItem("transactions", JSON.stringify(transactions))
            return transactions;
        case 'DELETE_TRANSACTION':
            transactions = state.filter((item) => item.id !== action.transactionId);
            localStorage.setItem("transactions", JSON.stringify(transactions))
            return transactions;

        default:
            return state;
    }
}