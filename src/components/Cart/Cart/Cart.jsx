import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "./../../UI/Modal/Modal";
import CartContext from "../../../store/cart-context";
import CartItem from "./../CartItem/CartItem";

function Cart(props) {
    const cartContext = useContext(CartContext);

    const totalAmountString = `$${cartContext.totalAmount.toFixed(2)}`;

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartContext.items.map((cartItem) => {
                return (
                    <CartItem
                        key={cartItem.id}
                        id={cartItem.id}
                        name={cartItem.name}
                        amount={cartItem.amount}
                        price={cartItem.price}
                    />
                );
            })}
        </ul>
    );

    return (
        <Modal onHide={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmountString}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["button--alt"]}
                    onClick={props.onCloseCart}
                >
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;
