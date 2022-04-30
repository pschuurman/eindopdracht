import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import SearchBarAllergen from "../../components/SearchBarAllergen/SearchBarAllergen";
import styles from './AllergenFree.module.css';

const apiKey = '5ab533819047439182158dd8d85e7c56';

function AllergenFreePage() {
    const [allergenData, setAllergenData] = useState(null);
    const [allergen, setAllergen] = useState('');
    const [error, toggleError] = useState(false);

    useEffect(() => {
        async function getAllergenData() {
            toggleError(false);

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?intolerances=${allergen}=false&addRecipeInformation=true&apiKey=${apiKey}`);
                console.log(result.data.results);
                setAllergenData(result.data);

                if (result.data.results.length === 0) {
                    throw new SyntaxError(error);
                }

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        if (allergen)
            getAllergenData();
    }, [allergen]);


    return (
        <>
            <header>
                <NavBar/>
            </header>

            <main>

                <section className={styles["allergen-names"]}>
                    <p className={styles.allergen}>You can exclude: Egg, Gluten, Grain, Shellfish, Tree Nut, Wheat</p>
                </section>
                <section className={styles["allergen-names"]}>
                <SearchBarAllergen setAllergenHandler={setAllergen}/>
                </section>

                {error && <p className={styles.error}>No recipes found, try again!</p>}

                {allergenData && <>
                    <section className={styles["choose-allergen"]}>{allergenData.results.map((AllergenList) => {
                        return (<article key={AllergenList.id}>
                                <p>{AllergenList.title}</p>
                                <img src={AllergenList.image}/>
                                <div>Ready in: {AllergenList.readyInMinutes} minutes</div>
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

export default AllergenFreePage;

