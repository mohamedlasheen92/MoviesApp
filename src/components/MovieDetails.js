import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function MovieDetails() {

  const [details, setDetails] = useState({});
  const params = useParams();

  const getDetails = async () => {
    const details = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=9babf5b4f28a49d34fd46066f27a9455&language=en-US`);
    setDetails(details.data);

  }
  useEffect(() => {
    getDetails();
  })


  return (
    <>

      {
        details.title && (
          <>
            <div className='details  p-5 d-flex flex-column flex-md-row align-items-center justify-content-evenly text-center text-md-start'>
              <div className='image me-md-3 me-lg-0'>
                <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt='Poster' className='rounded mb-4 mb-md-0' />
              </div>
              <div className='data'>
                <h3>Title: {details.title}</h3>
                <p>Release Date: {details.release_date}</p>
                <p>Vote Average: {details.vote_average}</p>
                <p>Vote Count: {details.vote_count}</p>
              </div>
            </div>

            <div className='story p-5'>
              <h3>Story:</h3>
              <p>{details.overview}</p>
            </div>

            <div className='direct d-flex justify-content-center align-items-center gap-2 my-5 px-3 flex-wrap'>
              <Link to="/"><button>Go Home</button></Link>
              <Link to={details.homepage}><button>Watch The Movie</button></Link>
            </div>
          </>
        )

      }


    </>
  )
}
