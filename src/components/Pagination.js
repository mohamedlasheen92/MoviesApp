import React from 'react'
import ReactPaginate from 'react-paginate'

export default function Pagination({ pageCount, getPage }) {

  const handlePage = (data) => {
    getPage(data.selected + 1);
  }


  return (
    <>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        pageCount={pageCount}
        onPageChange={handlePage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        previousLabel="previous"
        renderOnZeroPageCount={null}

        containerClassName='pagination w-100 justify-content-center p-3 my-5'
        pageClassName='page-item'
        pageLinkClassName='page-link'

        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'

        breakClassName='page-item'
        breakLinkClassName='page-link'

        activeClassName='active'
      />

    </>
  )
}
