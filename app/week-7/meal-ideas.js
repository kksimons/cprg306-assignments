"use client";

import React, { useState, useEffect } from "react";

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    // Function to fetch meal ideas from TheMealDB API
    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals;
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
            return [];
        }
    };

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas || []);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Meal Ideas with {ingredient}</h2>
            <ul className="space-y-4">
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <li key={meal.idMeal} className="flex items-center space-x-4">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 rounded" />
                            <span className="text-lg">{meal.strMeal}</span>
                        </li>
                    ))
                ) : (
                    <p>No meal ideas found.</p>
                )}
            </ul>
        </div>
    );
}

export default MealIdeas;
