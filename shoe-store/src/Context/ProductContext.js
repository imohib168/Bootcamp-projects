import React, { createContext, useReducer } from "react";
import { ProductReducer } from './ProductReducer';
import { data } from './../Items';

export const productContext = createContext();

const initialState = [];

export const ContextProvider = ({ children }) => {

    let [state, dispatch] = useReducer(ProductReducer, initialState);

    const addToCart = (itemObj) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                name: itemObj.name,
                img: itemObj.image,
                price: itemObj.price,
                desc: itemObj.description,
                id: itemObj.id
            }
        })
    }

    const deleteFromCart = (id) => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: {
                id: id,
            }
        })
    }

    return (
        <productContext.Provider value={{
            data,
            addToCart,
            deleteFromCart,
            state,
        }}>
            {children}
        </productContext.Provider>
    )
}