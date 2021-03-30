let initialState = {
    movies: []
}

const movieReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_MOVIES':
            return {
                //Skriv över den tomma arrayen med en ny array från action.payload
                //payload är ett godtyckligt namn och kan egentligen heta något annat om man vill
                movies: action.payload
            }
        default:
            return state;
    }
}

export default movieReducer;