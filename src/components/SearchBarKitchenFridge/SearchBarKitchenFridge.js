import React, {useState} from 'react';
import styles from './SearchBarKitchenFridge.module.css';

function SearchBarKitchenFridge({setKitchenHandler}) {
    const [kitchen, setKitchen] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');

        setKitchenHandler(kitchen);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={kitchen}
                onChange={(e) => setKitchen(e.target.value)}
                placeholder="What's in your fridge?"
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

export default SearchBarKitchenFridge;



