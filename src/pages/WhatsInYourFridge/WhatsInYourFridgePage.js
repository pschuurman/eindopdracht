import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import styles from './WhatsInYourFridge.module.css';
import SearchBarKitchenFridge from "../../components/SearchBarKitchenFridge/SearchBarKitchenFridge";

const apiKey = '5ab533819047439182158dd8d85e7c56';

function WhatsInYourFridgePage() {
    const [ingredientsData, setIngredientsData] = useState(null);
    const [ingredient, setIngredient] = useState('');
    const [error, toggleError] = useState(false);

    useEffect(() => {
        async function getData() {
            toggleError(false);

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=9&apiKey=${apiKey}`);
                console.log(result.data);
                setIngredientsData(result.data);

                if (result.data.length === 0) {
                    throw new SyntaxError(error);
                }

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        if (ingredient)
            getData();
    }, [ingredient]);


    return (
        <>
            <header>
                <NavBar/>
            </header>

            <main>
                <section className={styles["kitchen-names"]}>
                    <p className={styles.region}>No clue what to make with the ingredients that are left in your fridge?
                        Fill them in and find out what delicious recipes you still can make, or have to buy in order to make that tasty meal.</p>
                </section>
                <section className={styles["kitchen-names"]}>
                    <SearchBarKitchenFridge setKitchenHandler={setIngredient}/>
                </section>

                {error && <><div className={styles["kitchen-names"]}><p className="error">No recipes found, please try again</p></div></> }




                {ingredientsData && <>
                    <div className={styles.fridge}>{ingredientsData.map((ingredientsList) => {
                        return (<article key={ingredientsList.id}>
                                <p>{ingredientsList.title}</p>
                                <img src={ingredientsList.image}/>
                                <div className={styles["ingredients-titel"]}><strong>Ingredients in your fridge:</strong></div>
                                <div className={styles["ingredients"]}>{ingredientsList.usedIngredients.map((ingredients) => {
                                    return (
                                        <article key={ingredients.name}>
                                            <div>{ingredients.name}</div>
                                        </article>
                                    );
                                })}
                                </div>
                                <div className={styles["ingredients-titel"]}><strong>Ingredients you need to buy:</strong></div>
                                <div className={styles["ingredients"]}>{ingredientsList.missedIngredients.map((ingredients) => {
                                    return (
                                        <article key={ingredients.name}>
                                            <div>{ingredients.name}</div>
                                        </article>
                                    );
                                })}
                                </div>
                            </article>
                        );
                    })}
                    </div>
                </>
                }
            </main>



        </>
    );
}

export default WhatsInYourFridgePage;














