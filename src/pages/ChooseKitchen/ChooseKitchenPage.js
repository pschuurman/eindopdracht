import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from './ChooseKitchenPage.module.css';


const apiKey = '5ab533819047439182158dd8d85e7c56';

function ChooseKitchenPage() {
    const [kitchenData, setKitchenData] = useState(null);
    const [kitchen, setKitchen] = useState('');
    const [error, toggleError] = useState(false);


    useEffect(() => {
        async function getKitchenData() {
            toggleError(false);

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${kitchen}&addRecipeInformation=true&apiKey=${apiKey}`);
                console.log(result.data);
                setKitchenData(result.data);

                if (result.data.results.length === 0) {
                    throw new SyntaxError(error);
                }

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        if (kitchen)
            getKitchenData();
    }, [kitchen]);


    return (
        <>
            <header>
                <NavBar/>
            </header>

            <main>
                <section className={styles["kitchen-names"]}>
                    <p className={styles.region}>Do you want a recipe from your favourite kitchen? Or rather try
                        something completey new?
                        You can choose from the following kitchens: </p>
                    <p className={styles.region}>African, Caribbean, Chinese, Eastern European, European, French,
                        German,
                        Greek, Indian, Irish, Italian, Japanese, Jewish, Korean, Latin American, Mediterranean, Middle
                        Eastern, Nordic, Spanish, Thai, Vietnamese
                    </p>
                </section>
                <section className={styles["kitchen-names"]}>
                    <SearchBar setFavoriteKitchenHandler={setKitchen}/>
                </section>
                {error && <>
                    <div className={styles["kitchen-names"]}><p className="error">No recipes found, try again</p></div>
                </>}


                {kitchenData && <>
                    <section className={styles["kitchen-names"]}><p className="region">We
                        found {kitchenData.results.length} recipes</p></section>
                    <section className={styles["choose-kitchen"]}>{kitchenData.results.map((kitchenList) => {
                        return (<article key={kitchenList.id}>
                                <p>{kitchenList.title}</p>
                                <img src={kitchenList.image}/>
                                <div>Ready in: {kitchenList.readyInMinutes} minutes</div>
                                <div
                                    className={styles["ingredients"]}>{kitchenList.analyzedInstructions[0].steps[0].ingredients.map((ingredients) => {
                                    return (
                                        <article key={ingredients.name}>
                                            <div>{ingredients.name}</div>
                                        </article>
                                    );
                                })}
                                </div>
                                <div
                                    className={styles["instructions"]}>{kitchenList.analyzedInstructions[0].steps.map((instructions) => {

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

export default ChooseKitchenPage;
