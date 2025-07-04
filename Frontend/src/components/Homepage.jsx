import React from "react";
import axios from 'axios'
import { NavLink } from "react-router-dom";


export default function Homepage(){

    const [ events, setEvents ] = React.useState([])
    React.useEffect(()=>{
        axios
        .get(`/api/v1/events`)
        .then(res => setEvents(res.data.allEvents.slice(0,10)))
        .catch(err => console.log(err))
    },[])
    
    const eventsCards = events.map((event)=>
        <div className="card" key={event._id}>
            <h2>{event.title}</h2>
            <p>{event.location}</p>
        </div>
    )
    
    return(
        <div className="homepage">
            <div className="search-div">
                <input type="text" />
                <NavLink to='/events' className="explore-btn">Expore</NavLink>
            </div>
            <div className="featured">
                <div className="text">
                    <h2>Featured</h2>
                    <p>Events</p>
                </div>
                <div className="cards-container">
                    { events.length>0? eventsCards : null} 
                </div>    
            </div>
        </div>
    )
}