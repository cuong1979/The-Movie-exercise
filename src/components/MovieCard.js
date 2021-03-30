import React from 'react';

function MoviesCard(props){
    return(
        <article>
            <h3>{props.movie.Title}</h3>
            <p>{props.movie.Year}</p>
        </article>

    )
}

export default MoviesCard;