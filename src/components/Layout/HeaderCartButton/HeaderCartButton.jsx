import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
    const cartContext = useContext(CartContext);

    return (
        <button className={classes.button} onClick={props.onShowCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartContext.items.length}</span>
        </button>
    );
}

export default HeaderCartButton;
