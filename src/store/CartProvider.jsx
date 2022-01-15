import React, { useReducer } from "react";
import CartContext from "./cart-context";

const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";

const initialState = {
    items: [],
    totalAmount: 0,
};

function cartReducer(state, action) {
    let updatedItems = [],
        updatedTotalAmount = 0;
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            const itemIndexInCart = state.items.findIndex(
                (item) => item.id === action.payload.item.id
            );

            const existingCartItem = state.items[existingCartItemIndex];

            let updatedItem;

            if (existingCartItem) {
                updatedItem = {
                    ...existingCartItem,
                    amount:
                        existingCartItem.amount + action.payload.item.amount,
                };
                updatedItems = [...state.items];
                updatedItems[itemIndexInCart] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.payload.item);
            }

            updatedTotalAmount =
                state.totalAmount +
                action.payload.item.price * action.payload.item.amount;
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
        case REMOVE_ITEM_FROM_CART:
            const itemIndexInCart = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndexInCart !== -1) {
            }

            return {};
        default:
            return state;
    }
}

const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

    const cartContextValue = {};

    return (
        <CartContext.Provider value={cartContextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
