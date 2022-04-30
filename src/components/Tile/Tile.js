import React from "react";
import styles from './Tile.module.css'

function Tile ({title, image, description}) {
    return (
        <>

                <article>
                    <p>{title}</p>
                    <img src={image} alt={description} />
                </article>

        </>

    );
}

export default Tile;
