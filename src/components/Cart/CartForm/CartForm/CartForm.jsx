import React from "react";
import classes from "./CartForm.module.css";
import CartInput from "./../CartInput/CartInput";

function CartForm(props) {
    return (
        <form className="cart-form">
            <CartInput id="name" labelText="Name:" type="text" />
            <CartInput id="street" labelText="Street:" type="text" />
            <CartInput id="postal-code" labelText="Postal code:" type="text" />
            <CartInput id="city" labelText="City:" type="text" />
            <div className="form-actions">
                <button type="button" className="btn btn--cancel">
                    Cancel
                </button>
                <button type="submit" className="btn btn--confirm">
                    Confirm
                </button>
            </div>
        </form>
    );
}

export default CartForm;
