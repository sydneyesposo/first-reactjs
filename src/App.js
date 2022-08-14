import {useEffect, useState} from 'react';
//c56d349c
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = "http://omdbapi.com?apikey=c56d349c";

const movie1 = {
  "Title" : "Amazing Spiderman",
  "Year" : "2012",
  "imdbID": "tt8566",
  "Type": "movie",
  "Poster": "N/A" 
}

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
        const searchMovies = async (title) => {
            const response = await fetch(`${API_URL}&s=${title}`) 
            const data = await response.json();

           setMovies(data.Search);
        }
        useEffect(() => {
            searchMovies('Spiderman');
        

        
    }, []);

    

    return (
        <div className='app'>
       <h1> MovieLand </h1>  

      <div className='search'>
        <input 
        placeholder='Search for movies' 
        value={searchTerm} 
        onChange= {(e) => setSearchTerm(e.target.value)}

        />

        <img 
        src = {SearchIcon} 
        alt = "search"
        onClick = {() => searchMovies(searchTerm) }
        />
      </div>

      {
        movies?.length > 0 
        ? (
          <div className ='container'>
          {/* <MovieCard movie1 = {movies[1]} /> */}
          
          {movies.map((movie) => (
          < MovieCard movie = {movie} />) )}
         </div>
        ) : (
          <div className='empty'>
            <h2> No Movies found</h2>
             </div>
        )


      }
    

      </div>

       );
    }

export default App;