import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import SearchBarMood from "../../components/SearchBarMood/SearchBarMood";
import styles from '../MoodForFood/MoodForFood.module.css';

const apiKey = '5ab533819047439182158dd8d85e7c56';

function MoodForFoodPage() {
    const [moodForData, setMoodForData] = useState(null);
    const [mood, setMood] = useState('');

    useEffect(() => {
        async function getMoodData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&type=${mood}&addRecipeInformation=true&apiKey=${apiKey}`);
                console.log(result.data);
                setMoodForData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        if (mood)
            getMoodData();
    }, [mood]);


    return (
        <>
            <header>
                <NavBar/>
            </header>

            <main>
                <section className={styles["mood-names"]}>
                    <p className={styles.region}>What are you in the mood for?
                        Choose from: dessert, bread, breakfast, soup beverage, sauce, marinade, fingerfood snack, drink.
                        And get a recipe according to your mood for food</p>
                </section>
                <section className={styles["mood-names"]}>
                    <SearchBarMood setMoodHandler={setMood}/>
                </section>
                {moodForData && <>
                    <section className={styles["choose-mood"]}>{moodForData.results.map((moodList) => {
                        return (<article key={moodList.id}>
                                <p>{moodList.title}</p>
                                <img src={moodList.image}/>
                                <section>Ready in: {moodList.readyInMinutes} minutes</section>
                                <section
                                    className={styles["ingredients"]}>{moodList.analyzedInstructions[0].steps[0].ingredients.map((ingredients) => {
                                    return (
                                        <article key={ingredients.name}>
                                            <div>{ingredients.name}</div>
                                        </article>
                                    );
                                })}
                                </section>
                                <section className={styles["instructions"]}>{moodList.analyzedInstructions[0].steps.map((instructions) => {

                                    return (
                                        <article key={instructions.step}>
                                            <div>{instructions.step}</div>
                                        </article>
                                    );
                                })}
                                </section>
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

export default MoodForFoodPage;