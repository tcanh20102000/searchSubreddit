import React from "react";


export default function ItemsPerPage({ setPostPerPage, fixedPostsPerPage, postPerPage }) {
  const listOfButtons = fixedPostsPerPage.map((item, id) => {
    return (
      <li key={id}>
        <button
          onClick={() => {
            setPostPerPage(item);
          }}
          className={item === postPerPage ? "page-item-bold" : "page-item"}
        >
          {item}
        </button>
      </li>
    );
  });
  return (
    <>
      <ul className="pagination">
        <span style={{margin: '0 0.5em 0 0'}}>Items per page : </span>
        {listOfButtons}
      </ul>
    </>
  );
}