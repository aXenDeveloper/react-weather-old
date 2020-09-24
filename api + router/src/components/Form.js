import React from 'react';

const Form = ({ valueInput, handleInput, handleForm }) => (
    <>
        <form onSubmit={handleForm}>
            <input type='text' onChange={handleInput} value={valueInput} placeholder='Wpisz miasto' />
            <button type="submit">Search</button>
        </form>
    </>
);

export default Form;