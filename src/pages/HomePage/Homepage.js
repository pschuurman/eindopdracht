import favouritekitchen from "../../assets/FavouriteKitchen.jpg";
import fridge from "../../assets/WatInKoelkast.jpg";
import moodforfood from "../../assets/Stemming.jpg";
import surpriseme from "../../assets/Surprise.jpg";
import allergenfree from "../../assets/allergievrij.jpg";
import shortontime from "../../assets/kookboek.jpg";
import styles from './HomePage.module.css';
import {Link} from "react-router-dom";
import Tile from "../../components/Tile/Tile";
import NavBar from "../../components/NavBar/NavBar";


function Homepage() {
    return (
        <>
            <header>
                <NavBar/>
            </header>

            <main className={styles["homepage-container"]}>

                <section>
                    <Link to="choose-your-kitchen">
                        <Tile
                            image={favouritekitchen}
                            title={"Choose your favourite kitchen"}
                        />
                    </Link>
                </section>

                <section>
                    <Link to="what-is-in-your-fridge">
                        <Tile
                            image={fridge}
                            title={"What's in your fridge?"}
                        />
                    </Link>
                </section>

                <section>
                    <Link to="mood-for-food">
                        <Tile
                            image={moodforfood}
                            title={"What's your mood for food?"}
                        />
                    </Link>
                </section>

                <section>
                    <Link to="surprise-me">
                        <Tile
                            image={surpriseme}
                            title={"Get a random recipe"}
                        />
                    </Link>
                </section>

                <section>
                    <Link to="allergen-free">
                        <Tile
                            image={allergenfree}
                            title={"Allergen free recipes"}
                        />
                    </Link>
                </section>

                <section>
                    <Link to="right-on-time">
                        <Tile
                            image={shortontime}
                            title={"How much time do you have?"}
                        />
                    </Link>
                </section>

            </main>
        </>

    );
}

export default Homepage;