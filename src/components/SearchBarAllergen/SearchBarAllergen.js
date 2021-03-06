import React, { useState } from 'react';
import styles from './SearchBarAllergen.module.css';

function SearchBarAllergen({setAllergenHandler}) {
    const [allergen, setAllergen] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');

        setAllergenHandler(allergen);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={allergen}
                onChange={(e) => setAllergen(e.target.value)}
                placeholder="Allergen to be excluded"
            />

            <button
                className={styles["button-design"]}
                type="submit"
            >
                Search
            </button>
        </form>
    );
}

export default SearchBarAllergen;