import { isObjectEmpty } from "./../utils/helpers";
import { useState } from "react";
import DUMMY_MEALS from "./../utils/dummy-meals";
import MealsContext from "./meals-context";

export const MealsProvider = (props) => {
    const [meals, setMeals] = useState(DUMMY_MEALS);

    const addNewMealHandler = (newMeal) => {
        if (!isObjectEmpty(newMeal)) {
            setMeals((prevMeals) => {
                return [...prevMeals, newMeal];
            });
        }
    };

    const removeMealHandler = (id) => {
        setMeals((prevMeals) => {
            return prevMeals.filter((prevMeal) => prevMeal.id !== id);
        });
    };

    const mealsContextValue = {
        meals: meals,
        addNewMeal: addNewMealHandler,
        removeMeal: removeMealHandler,
    };

    return (
        <MealsContext.Provider value={mealsContextValue}>
            {props.children}
        </MealsContext.Provider>
    );
};

export default MealsContext;
