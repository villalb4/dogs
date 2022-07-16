import React from "react";
import "./Pagination.css"

function Pagination({postPerPage, totalPosts, paginate}) {

  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i)
  }

  

  return(
    <div className="pagination_component">
      <ul className="pagination">
        {pageNumbers && pageNumbers.map((page, i) => {
          return(
            <li key={i} className="pagination_item">
              <span className="page_link" onClick={() => paginate(page)}>{page}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Pagination;