import React, { useContext, useEffect, useState } from 'react'

import { productContext } from './../../Context/ProductContext';

import './Cart.css'

const Cart = () => {

    let { state, deleteFromCart } = useContext(productContext);
    console.log(state);

    const EmptyCart = () => {
        return (
            <div className="emptyCart">Your Cart is Empty</div>
        );
    }

    const getAmount = state.map(price => parseInt(price.price));
    const total = getAmount.reduce((acc, currVal) => acc += currVal, 0);

    const checkout = () => {
        state.length = 0
    }

    return (
        <div>
            {state.length === 0 ? (
                <div>
                    <EmptyCart />
                </div>
            ) : (
                    <div className="cart">
                        <div className="cart__items">
                            {
                                state.map(item => {
                                    return (
                                        <div key={item.id} className="cart__item">
                                            <div>
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                            <div>
                                                <p className="cartItem__name">{item.name}</p>
                                                <p className="cartItem__price">${item.price}</p>
                                                <button className="cartItem__btn" onClick={() => deleteFromCart(item.id)}>Delete from Cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="checkout">
                            <div className="cart__checkout">
                                <h3>
                                    Subtotal: ${total}
                                </h3>
                                <button onClick={() => checkout()}>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Cart
