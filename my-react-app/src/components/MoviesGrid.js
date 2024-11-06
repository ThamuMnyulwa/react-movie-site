import React, {useState, useEffect} from 'react';
import '../styles.css';

// Now we have to consider the state. Think about other information that you'll need to keep track of
// You'll need to keep track of the movies that you want to display on the screen (keep track of state)
export default function MoviesGrid() {

    // Usual pattern is set... for the setter function, we are starting off with an empty array
    const [movies,setMovies] = useState([]);

   

    // Use the useEffect hook to set the movies state
    useEffect(() => {
        
        // This is an asynchronous operation to fetch the movies.json file
        // We take the response and convert it to json then we set it as the current state of movies
        fetch("movies.json")
        .then(response => response.json())
        .then(data => {
            setMovies(data);
        });

    },[]);

    // We have to use the backtick ` and dollar sign to interpolate the image path

    return (
        <div className='movies-grid'>
        {
            movies.map(movie => {
                return (
                    <div key={movie.id} className='movie-card'>
                        <img src={`images/${movie.image}`} alt={movie.title} />
                        <div className='movie-card-info'> <h3>{movie.title}</h3> </div>
                        <div className='movie-card-genre'><p>{movie.genre}</p> </div>
                        <div className='movie-card-rating'> <p>{movie.year}</p> </div>
                    </div>
                );
            })
        }
        </div>
    );
    }