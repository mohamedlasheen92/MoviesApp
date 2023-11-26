import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header({ search }) {

  const onSearch = (event) => {
    search(event.target.value);

  }


  return (
    <>

      <header>

        <Container className='flex-column flex-sm-row'>

          <input type='text' className='w-100 order-last order-sm-first' placeholder='Search..' onChange={(event) => onSearch(event)} />
          <Link to="/">
            <img src='logo.png' alt='MoviesLogo' className=' logo' />
          </Link>


        </Container>


      </header>





    </>
  )
}

export default Header