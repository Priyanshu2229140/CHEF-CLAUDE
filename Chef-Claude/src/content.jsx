import React from "react";

export default function Content() {
    const ingredients = [
        "1 lb. ground beef", "1 onion, diced", "3 cloves garlic, minced",
        "2 tablespoons tomato paste", "1 (28 oz) can crushed tomatoes",
        "1 cup beef broth", "1 teaspoon dried oregano", "1 teaspoon dried basil",
        "Salt and pepper to taste", "8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)"
    ];

    const instructions = [
        "Bring a large pot of salted water to a boil for the pasta.",
        "In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.",
        "Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.",
        "Stir in the tomato paste and cook for 1 minute.",
        "Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.",
        "Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.",
        "While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.",
        "Add the Bolognese sauce to the cooked pasta and toss to combine.",
        "Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired."
    ];

    return (
        <section className="recipe-section">
            <h2 className="text_in_between-1">Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <p className="recipe-intro">
                    Based on the ingredients you have available, I recommend making a simple and delicious
                    Beef Bolognese Pasta. Here is the recipe:
                </p>

                <h3 className="text_in_between-1">Beef Bolognese Pasta</h3>
                
                <strong className="recipe-subtitle">Ingredients:</strong>
                <ul className="recipe-ingredients">
                    {ingredients.map((item, index) => (
                        <li key={index} className="list">{item}</li>
                    ))}
                </ul>

                <strong className="recipe-subtitle">Instructions:</strong>
                <ol className="recipe-instructions">
                    {instructions.map((step, index) => (
                        <li key={index} className="list">{step}</li>
                    ))}
                </ol>
            </article>
        </section>
    );
}
