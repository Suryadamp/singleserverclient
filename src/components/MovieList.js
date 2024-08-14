import React, { useEffect, useState } from 'react';
import getMoviesByCategory from '../service/movieService';
import './MovieList.css';

const MovieList = (props) => {
const {search} = props
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const moviesData = await getMoviesByCategory(search);
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMoviesData();
  }, [search]);
  

  return (
    <div>
     <div className="divider"></div>
      {movies.map(category => (
        <div key={category.category}>
   <h2 className='categoryTitle'>{category.category}</h2>
          <ul style={{display:'flex'}}>
            {category.movies.map(movie => (
              <li key={movie.slug}  className='movieListItem'>
                <img src={movie.poster} alt={movie.title} />
                <h4>Title: {movie.title}</h4>
                <p>Director: {movie.director}</p>
                <p>IMDb Rating: {movie.imdb_rating}</p>
                <p>Length: {movie.length}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
