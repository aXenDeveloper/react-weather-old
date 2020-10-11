import React from 'react';
import i18n from '../i18n';

const Form = ({ handleInput, handleSubmit, city }) => {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleInput} name="city" value={city} type='text' placeholder='Wpisz miasto' />

            <select onClick={e => console.log(e.target.value)} name="lang">
                <option value="en">English</option>
                <option value="pl">Polish</option>
            </select>

            <button onClick={() => changeLanguage('pl')}>pl</button>
            <button onClick={() => changeLanguage('en')}>en</button>

            <button>Search</button>
        </form>
    )
};

export default Form;