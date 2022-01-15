import React, { useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "./../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import DUMMY_MEALS from "./../../../utils/dummy-meals";

function AvailableMeals() {
    const [availableMealsData, setAvailableMealsData] = useState(DUMMY_MEALS);

    const mealsList = availableMealsData.map((meal) => {
        return (
            <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        );
    });

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;
