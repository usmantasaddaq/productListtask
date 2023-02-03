import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul
        style={{ display: "flex", flexDirection: "row" }}
        className="pagination justify-content-center"
      >
        <li
          style={{ marginLeft: "25px", listStyle: "none" }}
          className="page-item"
        >
          <a
            className="page-link"
            style={{ textDecoration: "none", marginRight: "20px" }}
            onClick={prevPage}
            href="#"
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            style={{ marginLeft: "25px", listStyle: "none" }}
            className={`page-item ${currentPage == pgNumber ? "active" : ""} `}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              style={{ textDecoration: "none", marginRight: "20px" }}
              className="page-link"
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li
          className="page-item"
          style={{ marginLeft: "25px", listStyle: "none" }}
        >
          <a
            className="page-link"
            style={{ textDecoration: "none", marginRight: "20px" }}
            onClick={nextPage}
            href="#"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
