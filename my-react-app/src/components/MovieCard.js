import React from "react";
import "../styles.css";

export default function MovieCard({ movie }) {

    // Error , so on error will get envoked if we can't find the image. It sends you to a default image
    const handleError = (event) => {
        event.target.src = "images/default.jpg";
    };

    // Figure which css class to pick based on the rating see Footer in styles.css to see conversions
    const getRatingClass=(rating) => {
        if(rating >= 8){
            return "rating-good";
        } else if(rating >= 6){
            return "rating-ok";
        } else {
            return "rating-bad";
        }
    }
    
    return (
        <div key={movie.id} className="movie-card">
        <img src={`images/${movie.image}`} alt={movie.title} onError={handleError} />
        <div className="movie-card-info">
            <div className="movie-card-title">
            <h3>{movie.title}</h3>
            </div>
            <div className="movie-card-genre">
            <p>{movie.genre}</p>
            </div>
            <div className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            <p>{movie.rating}</p>
            </div>
        </div>
        </div>
    );
    }