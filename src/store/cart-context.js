import React from "react";

const CartContext = React.createContext({
    items: [],
    totalPriceForSelectedItems: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
    addSingleItem: (item) => { },
    removeSingleItem: (id) => { },
    submitOrderedItems: (items, userInfo) => { },
});

export default CartContext;

