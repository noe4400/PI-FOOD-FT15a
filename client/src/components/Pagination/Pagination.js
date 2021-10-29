import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumbers, setCurrentPage } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Pagination.css";

const Pagination = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);
  const resultsPerPage = useSelector((state) => state.resultsPerPage);
  const currentPage = useSelector((state) => state.currentPage);
  const pageNumbers = [];
  let startIndex = 0;
  let endIndex = 3;

  if (currentPage > 1 && currentPage < searchResults.length - 1) {
    startIndex = currentPage - 1;
    endIndex = currentPage + 2;
  } else {
    startIndex = 0;
    endIndex = 3;
  }

  const currentPageHandler = (number) => {
    dispatch(setCurrentPage(number));
  };
  const prevHandler = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const nextHandler = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };
  if (searchResults.length === 0) return <div></div>;
  for (let i = 1; i <= Math.ceil(searchResults.length / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-container">
      <ul>
        {currentPage > 1 && (
          <li onClick={prevHandler}>
            <FontAwesomeIcon icon={faArrowCircleLeft} />
          </li>
        )}

        {pageNumbers.slice(startIndex, endIndex).map((number) => (
          <li
            className={`numb ${number === currentPage ? "active" : ""}`}
            key={number}
            onClick={() => currentPageHandler(number)}
          >
            <span>{number}</span>
          </li>
        ))}
        {currentPage < pageNumbers.length && (
          <li onClick={nextHandler}>
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Pagination;
