import React from "react";
import classes from "./CartInput.module.css";

const CartInput = React.forwardRef((props, ref) => {
    return (
        <div className={classes["form-controls"]}>
            <label htmlFor={props.id} className={classes["form-label"]}>
                {props.labelText}
            </label>
            <input
                id={props.id}
                type={props.type || "text"}
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={props.value}
                className={`${classes["form-input"]} ${
                    props.invalid ? classes.invalid : ""
                }`}
                ref={ref}
            />
        </div>
    );
});

export default CartInput;
