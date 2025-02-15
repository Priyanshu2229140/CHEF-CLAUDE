export default function Main(){
return(
    <div>
        <article className="journal">
        <div className="image-container">
            <img src="https://images.squarespace-cdn.com/content/v1/6683b1f0c2de43611580eee6/1728976498045-B2EKS6E181XFVCCWIHMQ/Osaka-pagoda-temple-YiqbVmOitos.jpg" alt="" className="main-image" />
        </div>
        <div className="info-container">
            <div className="location-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oHKQLe8Hjg4IGfWv_hTMoisWPVDMWGboDg&s" alt=""  className="location"/>
                <span className="country">Japan</span>
                <a href="" className="link">View on maps</a>
            </div>
            <span className="entry-title">Shrine</span>
            <span className="trip-date">1st Feb-2025</span>
            <p className="entry-text">Japan has more vending machines per capita than any other country in the world! With over 5 million vending machines, you can buy almost anything from them—hot coffee, sushi, ramen, umbrellas, and even fresh eggs! </p>
        </div>
        
    </article>

    <article className="journal">
    <div className="image-container">
        <img src="https://thumbs.dreamstime.com/b/sagrada-familia-barcelona-spain-cathedral-83163693.jpg" alt="" className="main-image" />
    </div>
    <div className="info-container">
        <div className="location-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oHKQLe8Hjg4IGfWv_hTMoisWPVDMWGboDg&s" alt=""  className="location"/>
            <span className="country">Spain</span>
            <a href="" className="link">View on maps</a>
        </div>
        <span className="entry-title">Castle</span>
        <span className="trip-date">1st March-2024</span>
        <p className="entry-text">Spain is home to the oldest restaurant in the world! Sobrino de Botín, located in Madrid, was founded in 1725 and holds the Guinness World Record for being the longest-running restaurant. Their specialty? Cochinillo asado (roast suckling pig), cooked in the same wood-fired oven for centuries!</p>
    </div>
</article>

    <article className="journal">
    <div className="image-container">
        <img src="https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg" alt="" className="main-image" />
    </div>
    <div className="info-container">
        <div className="location-container">
            <img src="https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg" alt=""  className="location"/>
            <span className="country">France</span>
            <a href="" className="link">View on maps</a>
        </div>
        <span className="entry-title">Eiffel Tower</span>
        <span className="trip-date">31st Feb-2023</span>
        <p className="entry-text">France is the most visited country in the world! Every year, around 90 million tourists travel to France to see iconic landmarks like the Eiffel Tower, Louvre Museum, and Mont Saint-Michel. </p>
    </div>
</article>
    </div>
    );
}