import React, {useState} from 'react';
import styles from './SearchBarMood.module.css';

function SearchBarKitchen({setMoodHandler}) {
    const [mood, setMood] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');

        setMoodHandler(mood);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input

                type="text"
                name="search"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="I'm in the mood for..."
            />

            <button
                className={styles["button-design"]}
                type="submit">
                Search
            </button>
        </form>
    );
}

export default SearchBarKitchen;