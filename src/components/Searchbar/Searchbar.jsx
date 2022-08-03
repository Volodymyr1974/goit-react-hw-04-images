import React, { useState } from "react";
import style from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import Notiflix from 'notiflix';



export default function Searchbar({ onSubmit }) {
    const [qwery, setQwery] = useState('');

    const searchInput = (e) => {
        setQwery(e.currentTarget.value.toLowerCase());
    };
    const searchSubmit = (e) => {
        e.preventDefault();
        if (qwery.trim() === '') {
            return Notiflix.Notify.failure('Вибачте, поле пошуку не заповнено. Введіть запит для пошуку.');
        }

        onSubmit(qwery);
    };
    return (
        <header className={style.Searchbar}>
            <form
                className={style.SearchForm}
                onSubmit={searchSubmit}>
                <button type="submit" className={style.SearchForm_button}>
                    <ImSearch style={{ paddingTop: 10 }} />
                    <span className={style.button_label}>Search</span>
                </button>

                <input
                    className={style.SearchForm_input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={searchInput}

                />
            </form>
        </header >
    );

};
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
