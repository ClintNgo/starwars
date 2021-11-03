import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const Starship =()=> {
    const {id} = useParams();
    const [search, setSearch] = useState()
    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}/`)
        .then(res => {setSearch(res.data)})
            .catch(err => { console.log(err) })
    },[id])


    return(

            search ? <div><h1>Name: {search.name}</h1>
            <h1>Model: {search.model}</h1>
            <h1>Manufacturer: {search.manufacturer}</h1>
            <h1>Cost: {search.cost_in_credits}</h1>
            <h1>Length: {search.length}</h1></div> : 
            <div>
                <h3>These aren't the droids you're looking for</h3>
                <img src="https://www.mensjournal.com/wp-content/uploads/2020/01/ewan-mcgregor-obi-wan-kenobi-1.jpg?w=700&quality=86&strip=all"></img>
            </div>

    )

}
export default Starship;