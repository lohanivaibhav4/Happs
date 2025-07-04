import React from "react"
import axios
 from "axios"
export default function Events(){
    const [ allEvents, setAllEvents ] = React.useState([])
    React.useEffect(()=>{
        axios
        .get(`/api/v1/events`)
        .then(res => setAllEvents(res.data.allEvents))
        .catch(err => console.log(err))
    },[])

    const eventsCards = allEvents.map((event)=>
        <div className="card" key={event._id}>
            <h2>{event.title}</h2>
            <p>{event.location}</p>
        </div>
    )
    return(
        <div>
            <h1>Events Page</h1>
            <div className="all-cards-container">
                {allEvents.length>0? eventsCards : "No Events To Display!"}
            </div>
        </div>

    )
}