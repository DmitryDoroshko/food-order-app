import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
    const cartContext = useContext(CartContext);

    const cartItemsQuantity = cartContext.items.reduce((prev, curr) => {
        return prev + curr.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onShowCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartItemsQuantity}</span>
        </button>
    );
}

export default HeaderCartButton;
