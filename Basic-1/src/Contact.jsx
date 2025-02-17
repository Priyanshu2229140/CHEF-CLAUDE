import React from "react";

export default function Student(props) {
    console.log( props);

    return (
        <div className="contact-card">
            <h3>{props.name}</h3>
            <div className="info-group">
                <p>{props.roll}</p>
            </div>
            <div className="info-group">
                <p>{props.section}</p>
            </div>
        </div>
    );
}