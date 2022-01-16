import React, { useReducer } from "react";
import CartContext from "./cart-context";
import { isObjectEmpty } from "./../utils/helpers";

const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
const ADD_SINGLE_ITEM_TO_CART = "ADD_SINGLE_ITEM_TO_CART";
const REMOVE_SINGLE_ITEM_FROM_CART = "REMOVE_SINGLE_ITEM_FROM_CART";

const initialState = {
    items: [],
    totalPriceForSelectedItems: 0,
};

function cartReducer(state = initialState, action) {
    let updatedItems = [],
        updatedTotalPrice = 0;
    if (action.type === ADD_ITEM_TO_CART) {
        // check if item already exists in cart
        const itemIndexInCart = state.items.findIndex(
            (item) => item.id === action.payload.item.id
        );
        const existingCartItem = state.items[itemIndexInCart];

        let updatedItem;

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.payload.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[itemIndexInCart] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.payload.item);
        }

        updatedTotalPrice =
            state.totalPriceForSelectedItems +
            action.payload.item.price * action.payload.item.amount;
        return {
            items: updatedItems,
            totalPriceForSelectedItems: updatedTotalPrice,
        };
    }
    if (action.type === REMOVE_ITEM_FROM_CART) {
        const itemIndexInCart = state.items.findIndex(
            (item) => item.id === action.payload.id
        );

        const existingItemInCart = state.items[itemIndexInCart];

        updatedTotalPrice =
            state.totalPriceForSelectedItems - existingItemInCart.price;

        if (existingItemInCart.amount === 1) {
            updatedItems = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        } else {
            const updatedItem = {
                ...existingItemInCart,
                amount: existingItemInCart.amount - 1,
            };

            updatedItems = [...state.items];
            updatedItems[itemIndexInCart] = updatedItem;
        }

        return {
            items: updatedItems,
            totalPriceForSelectedItems: updatedTotalPrice,
        };
    }
    if (action.type === ADD_SINGLE_ITEM_TO_CART) {
        const itemIndexInCart = state.items.findIndex(
            (item) => item.id === action.payload.item.id
        );
        const existingCartItem = state.items[itemIndexInCart];

        let updatedItem;

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + 1,
            };
            updatedItems = [...state.items];
            updatedItems[itemIndexInCart] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.payload.item);
        }

        updatedTotalPrice =
            state.totalPriceForSelectedItems +
            action.payload.item.price * action.payload.item.amount;
        return {
            items: updatedItems,
            totalPriceForSelectedItems: updatedTotalPrice,
        };
    }
    if (action.type === REMOVE_SINGLE_ITEM_FROM_CART) {
        const itemIndexInCart = state.items.findIndex(
            (item) => item.id === action.payload.id
        );

        const existingItemInCart = state.items[itemIndexInCart];

        updatedTotalPrice =
            state.totalPriceForSelectedItems - existingItemInCart.price;

        if (existingItemInCart.amount === 1) {
            updatedItems = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        } else {
            const updatedItem = {
                ...existingItemInCart,
                amount: existingItemInCart.amount - 1,
            };

            updatedItems = [...state.items];
            updatedItems[itemIndexInCart] = updatedItem;
        }

        return {
            items: updatedItems,
            totalPriceForSelectedItems: updatedTotalPrice,
        };
    }

    return state;
}

const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

    const addItemToCartHandler = (item) => {
        if (isObjectEmpty(item)) {
            return;
        }
        dispatchCart({ type: ADD_ITEM_TO_CART, payload: { item: item } });
    };

    const removeItemFromCartHandler = (idOfItemToBeRemoved) => {
        dispatchCart({
            type: REMOVE_ITEM_FROM_CART,
            payload: { id: idOfItemToBeRemoved },
        });
    };

    const addSingleItemToCartHandler = (item) => {
        if (isObjectEmpty(item)) {
            return;
        }
        dispatchCart({
            type: ADD_SINGLE_ITEM_TO_CART,
            payload: { item: { ...item, amount: 1 } },
        });
    };

    const removeSingleItemFromCartHandler = (idOfItemToBeRemoved) => {
        dispatchCart({
            type: REMOVE_SINGLE_ITEM_FROM_CART,
            payload: { id: idOfItemToBeRemoved },
        });
    };

    const cartContextValue = {
        items: cartState.items,
        totalPriceForSelectedItems: cartState.totalPriceForSelectedItems,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        addSingleItem: addSingleItemToCartHandler,
        removeSingleItem: removeSingleItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
