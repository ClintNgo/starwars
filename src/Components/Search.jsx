import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

const Search = () => {
    const [word,setWord] = useState('');
    const [id, setId] = useState('');
    const history = useHistory();

    const handleSubmit =(e) =>{
        e.preventDefault();
        history.push(`/${word}/${id}`);
    }

    return (
        <div className="App">
            <header className="App-header">
            <h1>Welcome to Starwars API</h1>
                <form onSubmit={handleSubmit}>
                <label>Search for:</label> 
                <select name='word' id='word' onChange={(e) => setWord(e.target.value)}>
                    <option value= "Select Category" selected hidden behind></option>
                    <option value='people'>People</option>
                    <option value='planets'>Planet</option>
                    <option value='starships'>Starship</option>
                </select>
                <label>ID:</label> 
                <input type='number' name='id' value= {id} onChange={(e) => setId(e.target.value)}></input> 
                <button type='submit'>Search</button>
                </form>
            </header>
        </div>
    );
}

export default Search;
