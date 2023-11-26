import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {



  return (

    <>

      {
        movie.poster_path && (
          <div className='col'>

            <Link className='movieCard' to={`/details/${movie.id}`}>

              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />

              <div className='data position-absolute'>
                <h4 className='text-center fs-4 fw-bold mb-4'>{movie.title}</h4>
                <p>Release Date: {movie.release_date}</p>
                <p>Vote Count: {movie.vote_count}</p>
                <p>Vote Average: {movie.vote_average}</p>

              </div>

            </Link>


          </div>
        )

      }



    </>
  )
}
