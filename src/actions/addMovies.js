//denna actions körs ifrån en komponent när vi vill uppdatera vår store
//Vi skickar med det vi vill uppdatera som en parameter i detta fall movies.

/**
 * Type - säger vad vår reducer ska göra
 * payload - den data vi vill lägga till i vårt redux store
 */
const addMovies = (movies) => {
    return {
        type: 'ADD_MOVIES',
        payload: movies 
    }
}

export default addMovies;