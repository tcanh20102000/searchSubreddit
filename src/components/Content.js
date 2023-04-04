import React  from "react";
import PhotoGrid from "../images/photo-grip.png";

export default function Content(){
    return(
        <section className="main">
            <div className="img-display">
                <img 
                    src={PhotoGrid} 
                    alt="Should have img here" 
                    className='logo1'/>
            </div>
            <div className="text">
                <div className="title">
                    <h1>Online Experiences</h1>
                </div>
                <div className="body-text">
                    Join unique interactive activities led by 
                    one-of-a-kind hosts-all without leaving home.
                </div>
            </div>
            {/* <ul className="list-item">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Maintained by skillful developers</li>
            </ul> */}
            
        </section>
      );
}