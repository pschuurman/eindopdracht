import React, {useState} from 'react';
import axios from 'axios';
import NavBar from "../../components/NavBar/NavBar";
import styles from './SurprisMe.module.css';

const apiKey = '5ab533819047439182158dd8d85e7c56';

function SurpriseMePage() {
    const [surpriseData, setKitchenData] = useState({});
    const [error, toggleError] = useState(false);

    async function SurpriseMeData() {
        toggleError(false);

        try {
            const result = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);
            console.log(result.data);
            setKitchenData(result.data);

            if (result.data.recipes.length === 0) {
                throw new SyntaxError(error);
            }


        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <NavBar/>
            <button type="button" onClick={SurpriseMeData} className={styles.button}>
                Give me a recipe!
            </button>

            {error && <>
                <div className={styles["surprise-layout"]}><p className="error">No recipes found, please try again</p></div>
            </>}

            <section>
                {Object.keys(surpriseData).length > 0 &&
                <>
                    <article>
                        <p>{surpriseData.recipes[0].title}</p>
                        <img src={surpriseData.recipes[0].image}/>
                    </article>
                    <p className={styles.paragraph}>Preparation: {surpriseData.recipes[0].readyInMinutes} minutes</p>
                    <section
                        className={styles.ingredients}>{surpriseData.recipes[0].analyzedInstructions[0].steps[0].ingredients.map((ingredientslist) => {
                        return (
                            <article key={ingredientslist.name}>
                                <div>{ingredientslist.name}</div>
                            </article>
                        );
                    })}
                    </section>
                    <section
                        className={styles.instructions}>{surpriseData.recipes[0].analyzedInstructions[0].steps.map((instructions) => {
                        return (
                            <article key={instructions.step}>
                                <div>{instructions.step}</div>
                            </article>
                        );
                    })}
                    </section>

                </>
                }
            </section>
        </>

    );
}

export default SurpriseMePage;


