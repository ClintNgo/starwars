import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const People = () => {
    const { id } = useParams();
    const [search, setSearch] = useState()
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then(res => { setSearch(res.data) })
            .catch(err => { console.log(err) })
    }, [id])


    return (

        search ? <div><h1>Name: {search.name}</h1>
            <h1>Height: {search.height}</h1>
            <h1>Mass: {search.mass}</h1>
            <h1>Gender: {search.gender}</h1>
            <h1>Hair color: {search.hair_color}</h1></div> :
            <div>
                <h3>These aren't the droids you're looking for</h3>
                <img src="https://www.mensjournal.com/wp-content/uploads/2020/01/ewan-mcgregor-obi-wan-kenobi-1.jpg?w=700&quality=86&strip=all"></img>
            </div>

    )

}
export default People;