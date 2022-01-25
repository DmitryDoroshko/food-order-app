import { isObjectEmpty } from "./../utils/helpers";
import { useEffect, useState } from "react";
import MealsContext from "./meals-context";
import DUMMY_MEALS from "./../utils/dummy-meals";

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

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch(
                "https://dimitri-food-order-app-default-rtdb.firebaseio.com/meals.json"
            );
            const mealsData = await response.json();

            const loadedMeals = [];

            for (const key in mealsData) {
                const mealObject = {
                    id: key,
                    name: mealsData[key].name,
                    description: mealsData[key].description,
                    price: mealsData[key].price,
                };
                loadedMeals.push(mealObject);
            }
            setMeals(loadedMeals);
        };

        fetchMeals();
    }, []);

    return (
        <MealsContext.Provider value={mealsContextValue}>
            {props.children}
        </MealsContext.Provider>
    );
};

export default MealsContext;
