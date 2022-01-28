import React, { useRef } from "react";
import classes from "./CartForm.module.css";
import CartInput from "./../CartInput/CartInput";

function CartForm(props) {
    const { onCartFormCancel } = props;

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const handleCartFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form className={classes["cart-form"]} onSubmit={handleCartFormSubmit}>
            <CartInput
                id="name"
                labelText="Name:"
                type="text"
                invalid={false}
                ref={nameInputRef}
            />
            <CartInput
                id="street"
                labelText="Street:"
                type="text"
                invalid={false}
                ref={streetInputRef}
            />
            <CartInput
                id="postal-code"
                labelText="Postal code:"
                type="text"
                invalid={false}
                ref={postalCodeInputRef}
            />
            <CartInput
                id="city"
                labelText="City:"
                type="text"
                invalid={false}
                ref={cityInputRef}
            />
            <div className={classes["form-actions"]}>
                <button type="button" onClick={onCartFormCancel}>
                    Cancel
                </button>
                <button type="submit">Confirm</button>
            </div>
        </form>
    );
}

export default CartForm;
