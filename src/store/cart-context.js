import React from "react";

const CartContext = React.createContext({
    items: [],
    totalPriceForSelectedItems: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
    addSingleItem: (item) => { },
    removeSingleItem: (id) => { },
});

export default CartContext;

