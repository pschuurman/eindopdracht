import React from "react";
import {Link} from "react-router-dom";



function AllergyFree ({title, image, description}) {
    return (
        <>
            <Link to="kook-allergenenvrij">
                <article>
                    <p>{title}</p>
                    <img src={image} alt={description} />
                </article>
            </Link>
        </>

    );
}

export default AllergyFree;

