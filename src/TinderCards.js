import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
//import axios from "./axios";

function TinderCards()  {
    const [people, setPeople] = useState([
     
        {
            name: "Beauty",
            url:
            "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg",
        },
                
        {
            name: "Elon Musk",
            url:
            "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
        },

        
        {
            name: "Jeff Bezos",
            url:
            
            "https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg",
        },

        {
            name: "Beautiful Lady",
            url:
            "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        };

        const outOfFrame = (name) => {
            console.log(name + " left the screen!");
        };

  return (
    <div className='tinderCards'>
        <div className="tinderCards__cardContainer">
            {people.map((person) => (
               <TinderCard
               className= "swipe"
               key={person.name}
               preventSwipe= {["up", "down"]}
               onSwipe={(dir) => swiped(dir, person.name)}
               onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="cards"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))} 
        </div>
     </div>
  );
}

export default TinderCards;