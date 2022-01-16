import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "./../../UI/Modal/Modal";
import CartContext from "../../../store/cart-context";
import CartItem from "./../CartItem/CartItem";

function Cart(props) {
    const cartContext = useContext(CartContext);

    let totalPriceForSelectedItemsString = `$0.00`;

    if (cartContext.totalPriceForSelectedItems.toFixed(2) != -0.0) {
        totalPriceForSelectedItemsString = `$${cartContext.totalPriceForSelectedItems.toFixed(
            2
        )}`;
    }

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
                        onRemove={() =>
                            cartContext.removeSingleItem(cartItem.id)
                        }
                        onAdd={() => cartContext.addSingleItem(cartItem)}
                    />
                );
            })}
        </ul>
    );

    return (
        <Modal onHide={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total price</span>
                <span>{totalPriceForSelectedItemsString}</span>
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
