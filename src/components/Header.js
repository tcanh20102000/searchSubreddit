import React  from "react";
import AirBnb from "../images/airbnb_logo.png";

export default function Header(props){
    return(
      <header className="header">
        <nav className='nav'>
          <div className="img-display">
            <img 
              src={AirBnb} 
              alt="Should have img here" 
              className='logo'/>
          </div>
        </nav>
      </header>
    );
  }