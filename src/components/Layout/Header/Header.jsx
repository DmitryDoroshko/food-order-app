import React from "react";

import mealsImage from "../../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./../HeaderCartButton/HeaderCartButton";

function Header(props) {
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious Meals</h1>
                <HeaderCartButton onShowCart={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="Delicious meals" />
            </div>
        </>
    );
}

export default Header;
