import React from 'react';
import { Link } from 'react-router-dom';

const Form = ({ handleForm, handleInput, valueInput }) => (
    <form onSubmit={handleForm}>
        <input type='text' onChange={handleInput} value={valueInput} placeholder='Wpisz miasto' />
        <Link to={`/${valueInput}`}>
            <button>Szukaj</button>
        </Link>
    </form>
);

export default Form;