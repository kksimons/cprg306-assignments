"use client";

import React, { useState, useEffect } from "react";

function MealIdeas({ ingredient, closeModal }) {
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals;
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    };

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas || []);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div
            onClick={closeModal}
            className="fixed inset-0 flex items-center justify-center bg-gray-950/70"
        >
            <section
                onClick={(event) => event.stopPropagation()}
                className="max-w-3xl p-8 rounded-lg shadow-md bg-white text-black overflow-y-auto max-h-[80vh]"
            >
                <h2 className="text-2xl font-bold mb-4">Here are some meal ideas with {ingredient}</h2>
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
                <button onClick={closeModal} className="mt-4 p-2 bg-blue-500 text-white rounded">
                    Close
                </button>
            </section>
        </div>
    );
}

export default MealIdeas;
