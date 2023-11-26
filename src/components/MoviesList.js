import React from 'react'
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import { Row } from 'react-bootstrap';



export default function MoviesList({ movies, pageCount, getPage }) {



  return (
    <>

      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-1">

        {
          movies.map((movie, idx) => {
            return <MovieCard key={idx} movie={movie} />
          })
        }

        {
          movies.length > 0 && (
            <Pagination getPage={getPage} pageCount={pageCount} />
          )
        }



      </Row>




    </>
  )
}
