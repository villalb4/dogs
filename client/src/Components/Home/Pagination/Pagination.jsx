import React, {useState} from "react";
import "./Pagination.css"

function Pagination({postPerPage, totalPosts, paginate, currentPage, setCurrentPage}) {

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);


  
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i)
  }

  

  // return(
  //   <div className="pagination_component">
  //     <ul className="pagination">
  //       {pageNumbers && pageNumbers.map((page, i) => {
  //         return(
  //           <li key={i} className="pagination_item">
  //             <span className={currentPage === page ? "page active" : "page"} onClick={() => paginate(page)}>{page}</span>
  //           </li>
  //         )
  //       })}
  //     </ul>
  //   </div>
  // )


  function handleNext() {
    if(currentPage !== pageNumbers.length){
      setCurrentPage(currentPage + 1)
    }

    if(currentPage + 1 >maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  function handlePrev() {
    if(currentPage != 1) {
      setCurrentPage(currentPage - 1)
    }

    if((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }


  return(
    <div className="pagination_component">
      <ul className="pagination">
        <button onClick={handlePrev}>prev</button>
        {pageNumbers && pageNumbers.map((page, i) => {
          if(page < maxPageNumberLimit+1 && page > minPageNumberLimit) {
            return(
              <li key={i} className="pagination_item">
                <span className={currentPage === page ? "page active" : "page"} onClick={() => paginate(page)}>{page}</span>
              </li>
            )
          } else {
            return null
          }
        })}
        <button onClick={handleNext}>ant</button>
      </ul>
    </div>
  )
  

  
}

export default Pagination;