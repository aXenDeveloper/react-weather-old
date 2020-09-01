import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Form = props => {
    return (
        <div className="topBar">
            <form onSubmit={props.submit}>
                <input type='text' onChange={props.change} value={props.value} placeholder='Wpisz miasto' />
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </div>
    )
}

export default Form;