import React, { useState, useContext, useRef } from "react";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
    const [isAmountValid, setIsAmountValid] = useState(true);
    const cartContext = useContext(CartContext);
    const inputRef = useRef();

    const addItemHandler = (event) => {
        event.preventDefault();

        const enteredAmount = inputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
            setIsAmountValid(false);
            return;
        }
        setIsAmountValid(true);
        cartContext.addItem(enteredAmountNumber);
    };

    return (
        <form className={classes.form}>
            <Input
                label="Amount"
                ref={inputRef}
                input={{
                    id: "amount_" + props.id,
                    type: "number",
                    min: "1",
                    max: "100",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button
                onClick={(event) => {
                    addItemHandler(event);
                }}
            >
                + Add
            </button>
            {!isAmountValid && <p>Please enter a valid amount.</p>}
        </form>
    );
}

export default MealItemForm;
