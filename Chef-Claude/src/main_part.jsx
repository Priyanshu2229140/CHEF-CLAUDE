import React, { useState, useEffect } from "react";
import Footer from "./section"; // Import Footer
import Content from "./content"

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [error, setError] = useState("");
    const [showRecipe, setShowRecipe] = useState(false);
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
        setError("");
        event.target.reset();
    }

    function removeIngredient(index) {
        setIngredients((prevIngredients) =>
            prevIngredients.filter((_, i) => i !== index)
        );
    }
    function generateRecipe() {
        setShowRecipe(true); // Show Content component when button is clicked
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
                            className="feather feather-plus"
                        >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
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

            {error && <p className="error-message">{error}</p>}

            {ingredients.length > 0 && (
                <>
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
                    {showRecipe && <Content />}    
                    {/* Conditionally render Footer */}
                    <Footer showFooter={ingredients.length > 0} generateRecipe={generateRecipe} />

                </>
            )}
        </main>
    );
}
