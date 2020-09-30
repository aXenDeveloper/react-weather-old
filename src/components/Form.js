import React from 'react';

const Form = ({ handleInput, handleSubmit, city, lang, handleSelect }) => (
    <form onSubmit={handleSubmit}>
        <input onChange={handleInput} name="city" value={city} type='text' placeholder='Wpisz miasto' />
        <select onChange={handleSelect} name="lang" defaultValue={lang}>
            <option value="en">English</option>
            <option value="pl">Polish</option>
        </select>
        <button>Search</button>
    </form>
);

export default Form;