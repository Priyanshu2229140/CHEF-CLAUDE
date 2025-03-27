import React, { useState, useEffect } from "react";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [error, setError] = useState("");

    function addIngredient(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const ingredient = formData.get("ingredient").trim();

        if (!ingredient) {
            setError("Please enter a valid ingredient.");
            return;
        }

        if (ingredients.includes(ingredient)) {
            setError(`"${ingredient}" is already added.`);
            return;
        }

        setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
        setError(""); // Clear any previous errors
        event.target.reset();
    }

    function removeIngredient(index) {
        setIngredients((prevIngredients) =>
            prevIngredients.filter((_, i) => i !== index)
        );
    }

    useEffect(() => {
        console.log("Current state of ingredients:", ingredients);
    }, [ingredients]);

    return (
        <main>
            <form onSubmit={addIngredient} className="form-main">
                <div className="input-container">
                    <div className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#657789"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-search"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        name="ingredient"
                        placeholder="Enter Ingredients"
                        className="form-input"
                    />
                </div>
                <button className="form-button" type="submit">
                    + Add Ingredient
                </button>
            </form>

            {/* Error Message Display */}
            {error && <p className="error-message">{error}</p>}

            {/* Improved Ingredient List with Remove Option */}
            {ingredients.length > 0 && (
                <ol className="form-list" aria-live="polite">
                    {ingredients.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button
                                className="remove-button"
                                onClick={() => removeIngredient(index)}
                            >
                                ✖
                            </button>
                        </li>
                    ))}
                </ol>
            )}
        </main>
    );
}
