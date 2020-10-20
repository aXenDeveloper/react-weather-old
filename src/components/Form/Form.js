import React from 'react';
import styles from './Form.module.scss';
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Form = ({ handleInput, handleSubmit, city, t }) => (
    <form id={styles.search} onSubmit={handleSubmit}>
        <label htmlFor="search_input">Search Weather:</label>
        <input id="search_input" onChange={handleInput} name="city" value={city} type='text' placeholder={t('search_placeholder')} />

        <button>
            <FontAwesomeIcon icon={faSearch} />
        </button>
    </form>
);

export default withTranslation()(Form);