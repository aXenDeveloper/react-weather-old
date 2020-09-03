import React from 'react';

const Form = props => {
    return (
        <div className="topBar">
            <form onSubmit={props.submit}>
                <input type='text' onChange={props.change} value={props.value} placeholder='Wpisz miasto' />
                <button>Szukaj</button>
            </form>
        </div>
    )
}

export default Form;