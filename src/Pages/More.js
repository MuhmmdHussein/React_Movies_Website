import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function More() {
  const { id } = useParams();
  console.log({id})
  
  const [movie, setMovie] = useState({});

  useEffect(() => {

    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0f44278d539108ff44663f9b0cab886a`)
      .then((res) => {
        console.log(res)
        setMovie(res.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  }, [id]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default More;