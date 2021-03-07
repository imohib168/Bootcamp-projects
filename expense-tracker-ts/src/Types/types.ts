export type InitialStateObj = {
    id: number,
    text: string,
    amount: number
    mode: string
}

export type contextType = {
    transactions: InitialStateObj[],
    AddTransaction?: (Obj: InitialStateObj) => void,
    DeleteTransaction?: (id: number) => void;
};

export type reducerActionType = {
    transactionId: number,
    type: string,
    payload: { id: number, text: string, amount: number, mode: string }
};

export type transactionsInTransaction = {
    trans: {
        id: number
        text: string,
        amount: number
        mode: string
    }
}