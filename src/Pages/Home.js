import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Mycard from '../Components/Mycard';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=0f44278d539108ff44663f9b0cab886a")
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <Mycard 
              title={movie.title}
              posterPath={movie.poster_path}
            />
           
           <Link to={`/More/:${movie.id}?id=${movie.id}`}  className="btn btn-info mt-2">Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;