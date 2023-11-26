import { Container } from "react-bootstrap";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from "./components/MovieDetails";


function App() {

  const [pageCount, setPageCount] = useState(500);

  const [movies, setMovies] = useState([]);

  const getAllMovies = async () => {
    let response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9babf5b4f28a49d34fd46066f27a9455&language=en-US&page=1");
    setMovies(response.data.results);
  }
  useEffect(() => {

    getAllMovies();

  }, [])

  const getPage = async (page) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9babf5b4f28a49d34fd46066f27a9455&language=en-US&page=${page}`);
    setMovies(response.data.results);
  }

  const search = async (word) => {
    if (word === '') {
      getAllMovies();
      setPageCount(500);

    } else {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9babf5b4f28a49d34fd46066f27a9455&include_adult=false&language=en-US&page=1&query=${word}`);

      setMovies(response.data.results);
      setPageCount(response.data.total_pages);
    }

  }

  return (
    <>

      <BrowserRouter>

        <Header search={search} />

        <Container className="my-5">



          <Routes>


            <Route path="/" element={<MoviesList getPage={getPage} movies={movies} pageCount={pageCount} />} />


            <Route path="/details/:id" element={<MovieDetails />} />


          </Routes>




        </Container>

      </BrowserRouter>






    </>
  );
}

export default App;
