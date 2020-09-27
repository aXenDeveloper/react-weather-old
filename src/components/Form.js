import React from 'react';

const Form = ({ handleInput, handleSubmit, city, handleSelect }) => (
    <form onSubmit={handleSubmit}>
        <input onChange={handleInput} name="city" value={city} type='text' placeholder='Wpisz miasto' />

        <select onChange={handleSelect} name="testTemp" id="testTemp">
            <option value="metric">&#176;C</option>
            <option value="imperial">&#176;F</option>
            <option value="">&#176;K</option>
        </select>

        <button>Search</button>
    </form>
)

export default Form;