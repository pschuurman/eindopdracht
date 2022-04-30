import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import styles from './CookOnTime.module.css';
import SearchBarCookOnTime from "../../components/SearchBarCookOnTime/SearchBarCookOnTime";

const apiKey = '5ab533819047439182158dd8d85e7c56';

function CookOnTimePage() {
    const [cookData, setCookData] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [error, toggleError] = useState(false);

    useEffect(() => {
        async function getAllergenData() {
            toggleError(false);

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?maxReadyTime=${minutes}&addRecipeInformation=true&apiKey=${apiKey}`);
                console.log(result.data);
                setCookData(result.data);

                if (result.data.results.length === 0) {
                    throw new SyntaxError(error);
                }

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        if (minutes)
            getAllergenData();
    }, [minutes]);


    return (
        <>
            <header>
                <NavBar/>
                <SearchBarCookOnTime setCookingTimeHandler={setMinutes}/>
                {error && <h6>No recipes found</h6>}
            </header>
            <main>
                {cookData && <>
                    <section className={styles["choose-time"]}>{cookData.results.map((cookList) => {
                        return (<article key={cookList.id}>
                                <p>{cookList.title}</p>
                                <img src={cookList.image}/>
                                <div>Ready in: {cookList.readyInMinutes} minutes</div>
                                <div
                                    className={styles.ingredients}>{cookList.analyzedInstructions[0].steps[0].ingredients.map((ingredients) => {
                                    return (
                                        <article key={ingredients.name}>
                                            <div>{ingredients.name}</div>
                                        </article>
                                    );
                                })}
                                </div>

                                <div
                                    className={styles.instructions}>{cookList.analyzedInstructions[0].steps.map((instructions) => {

                                    return (
                                        <article key={instructions.step}>
                                            <div>{instructions.step}</div>
                                        </article>
                                    );
                                })}
                                </div>
                            </article>
                        );
                    })}
                    </section>
                </>
                }
            </main>
        </>

    );
}

export default CookOnTimePage;
