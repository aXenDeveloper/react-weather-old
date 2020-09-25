import React from 'react';

const Form = ({ handleInput, handleForm, value  }) => (
    <form onSubmit={handleForm}>
        <input type='text' onChange={handleInput} value={value} placeholder='Wpisz miasto' />
        <button type="submit">Search</button>
    </form>
);

export default Form;