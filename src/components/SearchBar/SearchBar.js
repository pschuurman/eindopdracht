import React, {useState} from 'react';
import styles from './SearchBar.module.css';

function SearchBar({setFavoriteKitchenHandler}) {
    const [kitchen, setKitchen] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');

        setFavoriteKitchenHandler(kitchen);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={kitchen}
                onChange={(e) => setKitchen(e.target.value)}
                placeholder="Your favourite kitchen is..."
            />

            <button
                className={styles["button-design"]}
                type="submit">
                Search
            </button>
        </form>
    );
}

export default SearchBar;