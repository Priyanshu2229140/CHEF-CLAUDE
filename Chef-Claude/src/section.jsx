export default function Footer({ showFooter }) {
    if (!showFooter) return null;  // Prevents rendering if `showFooter` is false

    return (
        <div className="footer">
            <div className="text-container">
                <div className="text_a">Ready for a recipe</div>
                <div className="text_b">
                    Generate recipe from your list of ingredients
                </div>
            </div>
            <button className="form-button_1">Get a recipe</button>
        </div>
    );
}
