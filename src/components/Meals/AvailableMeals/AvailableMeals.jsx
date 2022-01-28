import React, { useContext } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "./../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import MealsContext from "./../../../store/meals-context";

function AvailableMeals() {
    const mealsContext = useContext(MealsContext);

    let mealsList = <p>No meals for now...</p>;

    if (mealsContext.meals.length !== 0) {
        mealsList = mealsContext.meals.map((meal) => {
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
    }

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;
