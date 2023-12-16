import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationPage = ({ currentPage, lastPage }) => {
  const arr = Array(lastPage);
  const navigate = useNavigate();
  const url = useLocation().pathname;
  const [page, setPage] = useState(currentPage);
  useEffect(() => {
    if (page !== currentPage) navigate(`${url}?page=${page}`);
  }, [page]);

  const handlePageClick = (event) => {
    if (event.selected + 1 !== page) setPage(event.selected + 1);
  };

  return (
    <div className="px-36 pt-8 flex justify-center items-center relative ">
      <ReactPaginate
        className={lastPage === 1 ? "hidden" : "flex navigation gap-6"}
        previousLabel={null}
        nextLabel={null}
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={-2}
        pageCount={lastPage}
        activeLinkClassName="w-10 h-10 rounded bg-blue-600 text-center text-white leading-10 font-semibold text-lg block cursor-default"
        pageClassName="leading-10  text-lg block text-blue-600"
      />
    </div>
  );
};

NavigationPage.propTypes = {
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
};

export default NavigationPage;
