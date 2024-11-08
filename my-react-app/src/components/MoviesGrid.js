import React, {useState, useEffect} from 'react';
import '../styles.css';
// MovieCard component
import MovieCard from './MovieCard';

// Now we have to consider the state. Think about other information that you'll need to keep track of
// You'll need to keep track of the movies that you want to display on the screen (keep track of state)
export default function MoviesGrid() {

    // Usual pattern is set... for the setter function, we are starting off with an empty array
    const [movies,setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Filter bar where All Genres is the default. Then similar for state
    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All Ratings");

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

    // We have to filter the movies based on the search term 
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    // Filter the movies based on the genre and rating
    const matchesGenre = (movie, genre) => {
        return genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
    };


    const matchesRating = (movie, rating) => {
        switch(rating){
            case "All Ratings":
                return true;
            case "Good":
                return movie.rating >= 8;
            case "Ok":
                return movie.rating >= 6 && movie.rating < 8;
            case "Bad":
                return movie.rating < 6;
                // If nothing matches we want to return false, so nothing matches
            default:
                return false;
        }
    }

    const matchesSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    // We have to filter the movies based on the search term, Rating and Genre (We are filtering in a tree, first by genre, then by rating, then by search term)
    //movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    const filteredMovies = movies.filter(movie => 
        matchesGenre(movie, genre) &&
        matchesSearchTerm(movie, searchTerm) &&
        matchesRating(movie, rating)
    );


    // We have to use the backtick ` and dollar sign to interpolate the image path
    // Turn our component into a controlled component (filteredMovies), whenever we change a value in the search bar, we update the state
    return (
        <div>
            <input 
            type="text" 
            className = "search-input" // Formatting in the css
            placeholder="Search..." 
            value={searchTerm} // The value of the search bar is the search term
            onChange={handleSearchChange} // When the search bar changes, we call the handleSearchChange function (which sets the search term in state)
            />
            <div className="filter-bar">
                <div className="filter-slot">
                    <label>Genre:</label>
                    <select className="filter-dropdown" value={genre} onChange={handleGenreChange}>
                        <option value="All Genres">All Genres</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                        <option value="Horror">Horror</option>
                    </select>
                </div>
                <div className="filter-slot">
                    <label>Rating:</label>
                    <select className="filter-dropdown" value={rating} onChange={handleRatingChange}>
                        <option value="All Ratings"> All Ratings </option>
                        <option value="Good"> Good </option>
                        <option value="Ok"> Ok </option>
                        <option value="Bad"> Bad </option>
                    </select>
                </div>
            </div>
        <div className='movies-grid'>
        {
            
            filteredMovies.map(movie => {
                return <MovieCard movie={movie} key={movie.id}/>
            })
        }
        </div>
        </div>
    );
    }