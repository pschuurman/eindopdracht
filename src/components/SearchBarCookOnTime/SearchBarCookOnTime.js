import React, {useState} from 'react';
import styles from './SearchBarCookOnTime.module.css';

function SearchCookOnTime({setCookingTimeHandler}) {
    const [cookingTime, setCookingTime] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');

        setCookingTimeHandler(cookingTime);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
                placeholder="Your time in minutes..."
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

export default SearchCookOnTime;