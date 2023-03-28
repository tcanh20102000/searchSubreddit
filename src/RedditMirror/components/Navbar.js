import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default function Navbar(props){
    const { subreddit, onSearchSubmit } = props;
    const navigate = useNavigate();

    const [keyword, setKeyword]  = React.useState('')

    function handleChange(event) {
      const { name, value, type, checked } = event.target;
      setKeyword(value); 
    }

    
    function handleSubmit(event){
        event.preventDefault();
        onSearchSubmit(keyword);
        navigate(`/r/${keyword}`);
    }
    return (
      <div className="r-navbav">
        <div className="r-homepage">
          <Link to="/">Search Reddit</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="r-search">
            <i className="fa fa-search form-icon"></i>
            <input
              type="text"
              placeholder="Search Reddit"
              onChange={handleChange}
              name="keyword"
              value={keyword}
            />
          </div>
        </form>
        <div></div>
      </div>
    );
    
}
//