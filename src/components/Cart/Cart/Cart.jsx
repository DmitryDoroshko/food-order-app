import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "./../../UI/Modal/Modal";
import CartContext from "../../../store/cart-context";
import CartItem from "./../CartItem/CartItem";
import CartForm from "./../CartForm/CartForm/CartForm";

function Cart(props) {
    const [isOrdering, setIsOrdering] = useState(false);
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

    const handleOrderButtonClick = () => {
        setIsOrdering((prev) => !prev);
    };

    useEffect(() => {
        if (+cartContext.totalPriceForSelectedItems === 0) {
            setIsOrdering(false);
        }
    }, [cartContext.totalPriceForSelectedItems]);

    return (
        <Modal onHide={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total price</span>
                <span>{totalPriceForSelectedItemsString}</span>
            </div>
            {isOrdering && <CartForm />}
            <div className={classes.actions}>
                <button
                    className={classes["button--alt"]}
                    onClick={props.onCloseCart}
                >
                    Close
                </button>
                <button
                    className={classes.button}
                    disabled={cartContext.items.length === 0 ? true : false}
                    onClick={handleOrderButtonClick}
                >
                    Order
                </button>
            </div>
        </Modal>
    );
}

export default Cart;
