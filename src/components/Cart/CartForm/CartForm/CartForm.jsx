import React from "react";
import classes from "./CartForm.module.css";
import CartInput from "./../CartInput/CartInput";

function CartForm(props) {
    return (
        <form className={classes["cart-form"]}>
            <CartInput id="name" labelText="Name:" type="text" />
            <CartInput id="street" labelText="Street:" type="text" />
            <CartInput id="postal-code" labelText="Postal code:" type="text" />
            <CartInput id="city" labelText="City:" type="text" />
            <div className={classes["form-actions"]}>
                <button type="button">Cancel</button>
                <button type="submit">Confirm</button>
            </div>
        </form>
    );
}

export default CartForm;
