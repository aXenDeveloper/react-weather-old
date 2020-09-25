import React from 'react';

const Form = ({ handleInput, handleSubmit, city }) => (
    <form onSubmit={handleSubmit}>
        <input onChange={handleInput} value={city} type='text' placeholder='Wpisz miasto' />
        <button>Search</button>
    </form>
)

export default Form;