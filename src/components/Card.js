import React  from "react";
//import VerticalPortrait from "../images/vertical-portrait.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Card(props){
    
    const {phone_num, content, price, src} = props
    const {rating, viewerCount, country, openSpot, location} = props
    
    let badgeText
    if (openSpot === 0){
        badgeText="SOLD OUT"
    }
    else if (location === "Online"){
        badgeText="ONLINE"
    }  
    return(
        <section className="card">
            
            <div className="inner">
                <img 
                    src={src}
                    alt="Should have img here" 
                    className='logo1'/>
                <div className="text">
                    <div className="rate">
                        <span><FontAwesomeIcon icon={faStar}/> {rating}</span>
                        <span className="gray">({viewerCount}) .</span>
                        <span className="gray">{country}</span>
                    </div>
                    
                    <p><FontAwesomeIcon icon={faPhone}/> {phone_num}</p>
                    <p><FontAwesomeIcon icon={faEnvelope}/> {content}</p>

                    <p><b>From ${price}</b>/ a person</p>
                </div> 
            </div>
            {(badgeText) && <div className="card--badge">{badgeText}</div>}
            
            {/* <ul className="list-item">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Maintained by skillful developers</li>
            </ul> */}
            
        </section>
      );
}