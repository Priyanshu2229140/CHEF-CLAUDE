export default function Maincontainer(props) {
    console.log(props);
    return (
        <div>
            <article className="journal">
                <div className="image-container">
                    <img className="main-image" src={props.img.src || "fallback-image.jpg"} alt={props.img?.alt || "Default Image"} />
                </div>
                <div className="info-container">
                    <div className="location-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oHKQLe8Hjg4IGfWv_hTMoisWPVDMWGboDg&s" alt="location" className="location" />
                        <span className="country">{props.country}</span>
                        <a href={props.link} className="link" target="_blank" rel="noopener noreferrer">
                            View on maps
                        </a>
                    </div>
                    <span className="entry-title">{props.title}</span>
                    <span className="trip-date">{props.date}</span>
                    <p className="entry-text">{props.text}</p>
                </div>
            </article>
        </div>
    );
}
