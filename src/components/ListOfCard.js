import React  from "react";
import Card from './Card.js';
import { list_of_card } from "../data/test.js";

export default function ListOfCard(){
    const card_list = list_of_card.map((item, id)=>{
        return(
            <Card 
                key= {id}
                {...item}
                // src= {item.src}
                // phone_num= {item.phone_num}
                // content= {item.content}
                // price= {item.price}
                // rating= {item.stats.rating}
                // viewerCount= {item.stats.viewerCount}
                // country= {item.country}
                // openSpot={item.openSpot}
                // location= {item.location}
            />
        )
    })
    
    
    return(
        <div className="list-of-card">
            {card_list}
            
        </div>
    )
}