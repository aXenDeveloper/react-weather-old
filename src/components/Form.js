import React from 'react';

const Form = ({ handleInput, handleSubmit, city }) => (
    <form onSubmit={handleSubmit}>
        <input onChange={handleInput} name="city" value={city} type='text' placeholder='Wpisz miasto' />
        <button>Search</button>
    </form>
)

export default Form;